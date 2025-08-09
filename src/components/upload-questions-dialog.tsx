
'use client';

import React, { useState, useCallback } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { triviaData, Question } from '@/lib/questions';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function UploadQuestionsDialog({ children }: { children: React.ReactNode }) {
  const [file, setFile] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('custom-trivia');
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const parseCSV = (csvText: string): Question[] => {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    const questions: Question[] = [];
  
    const requiredHeaders = ['question', 'option1', 'option2', 'option3', 'option4', 'correctAnswer', 'explanation'];
    if (!requiredHeaders.every(h => headers.includes(h))) {
        throw new Error('CSV must contain headers: question, option1, option2, option3, option4, correctAnswer, explanation');
    }

    const existingIds = Object.values(triviaData).flat().map(q => q.id);
    let maxId = Math.max(0, ...existingIds);

    for (let i = 1; i < lines.length; i++) {
      const data = lines[i].split(',');
      const questionData: any = {};
      headers.forEach((header, index) => {
        questionData[header] = data[index].trim();
      });

      questions.push({
        id: ++maxId, 
        question: questionData.question,
        options: [questionData.option1, questionData.option2, questionData.option3, questionData.option4],
        correctAnswer: questionData.correctAnswer,
        explanation: questionData.explanation,
      });
    }
    return questions;
  };

  const handleUpload = useCallback(() => {
    if (!file) {
      toast({ title: 'No file selected', description: 'Please select a CSV file to upload.', variant: 'destructive' });
      return;
    }
     if (!selectedCategory) {
      toast({ title: 'No category selected', description: 'Please select a category.', variant: 'destructive' });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const newQuestions = parseCSV(text);
        
        const existingQuestions = JSON.parse(localStorage.getItem(selectedCategory) || '[]');
        const allQuestions = [...existingQuestions, ...newQuestions];

        localStorage.setItem(selectedCategory, JSON.stringify(allQuestions));
        
        if (!triviaData[selectedCategory]) {
          triviaData[selectedCategory] = [];
        }
        triviaData[selectedCategory].push(...newQuestions);
        
        toast({ title: 'Success!', description: `${newQuestions.length} questions uploaded to ${selectedCategory.replace(/-/g, ' ')}.` });
        setIsOpen(false);
      } catch (error: any) {
        toast({ title: 'Upload failed', description: error.message, variant: 'destructive' });
      }
    };
    reader.readAsText(file);
  }, [file, toast, selectedCategory]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Custom Questions</DialogTitle>
          <DialogDescription>
            Upload a CSV file with your trivia questions. The file should have the following columns: `question`, `option1`, `option2`, `option3`, `option4`, `correctAnswer`, `explanation`. The `correctAnswer` must exactly match one of the options.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <Select onValueChange={setSelectedCategory} defaultValue="custom-trivia">
                <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="general-trivia">General Trivia</SelectItem>
                    <SelectItem value="state-trivia">State Trivia</SelectItem>
                    <SelectItem value="government-trivia">Government Trivia</SelectItem>
                    <SelectItem value="custom-trivia">Custom Trivia (New)</SelectItem>
                </SelectContent>
            </Select>
          <Input id="file" type="file" accept=".csv" onChange={handleFileChange} />
        </div>
        <DialogFooter>
          <Button onClick={handleUpload}>Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
