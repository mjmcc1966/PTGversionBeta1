
'use client';

import React, { useState, useCallback } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { triviaData, Question } from '@/lib/questions';

export function UploadQuestionsDialog({ children }: { children: React.ReactNode }) {
  const [file, setFile] = useState<File | null>(null);
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

    for (let i = 1; i < lines.length; i++) {
      const data = lines[i].split(',');
      const questionData: any = {};
      headers.forEach((header, index) => {
        questionData[header] = data[index].trim();
      });

      questions.push({
        id: 9000 + i, // Arbitrary starting ID for custom questions
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

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const newQuestions = parseCSV(text);
        
        // In a real app, you'd probably send this to a server.
        // For this demo, we'll store it in localStorage.
        localStorage.setItem('custom-trivia', JSON.stringify(newQuestions));
        triviaData['custom-trivia'] = newQuestions; // also update in-memory for immediate use
        
        toast({ title: 'Success!', description: `${newQuestions.length} questions uploaded successfully.` });
        setIsOpen(false);
      } catch (error: any) {
        toast({ title: 'Upload failed', description: error.message, variant: 'destructive' });
      }
    };
    reader.readAsText(file);
  }, [file, toast]);

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
          <Input id="file" type="file" accept=".csv" onChange={handleFileChange} />
        </div>
        <DialogFooter>
          <Button onClick={handleUpload}>Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
