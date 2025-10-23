
'use client';

import React, { useState, useCallback } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import type { Question } from '@/lib/questions';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

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

  const parseCSVLine = (line: string): string[] => {
    const result: string[] = [];
    let currentField = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            if (inQuotes && i + 1 < line.length && line[i+1] === '"') {
                currentField += '"';
                i++; // Skip next quote
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            result.push(currentField.trim());
            currentField = '';
        } else {
            currentField += char;
        }
    }
    result.push(currentField.trim());
    return result;
  }

  const parseCSV = (csvText: string): Question[] => {
    const lines = csvText.trim().split(/\r?\n/);
    if (lines.length < 2) {
      throw new Error('CSV file must have a header row and at least one data row.');
    }
    const headers = parseCSVLine(lines[0]).map(h => h.replace(/"/g, ''));
    const questions: Question[] = [];
  
    const requiredHeaders = ['question', 'option1', 'option2', 'option3', 'option4', 'correctAnswer', 'explanation'];
    if (!requiredHeaders.every(h => headers.includes(h))) {
        throw new Error('CSV must contain headers: question, option1, option2, option3, option4, correctAnswer, explanation');
    }

    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '') continue;

      const data = parseCSVLine(lines[i]);
      if (data.length !== headers.length) {
        console.warn(`Skipping malformed CSV line ${i + 1}:`, lines[i]);
        continue;
      }

      const questionData: any = {};
      headers.forEach((header, index) => {
        questionData[header] = data[index];
      });

      questions.push({
        id: Date.now() + Math.random(), // Generate a unique ID
        question: questionData.question,
        imageUrl: questionData.imageUrl,
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
        
        const existingQuestionsRaw = localStorage.getItem(selectedCategory) || '[]';
        const existingQuestions: Question[] = JSON.parse(existingQuestionsRaw);
        
        const existingIds = new Set(existingQuestions.map(q => q.id));
        const uniqueNewQuestions = newQuestions.filter(q => !existingIds.has(q.id));

        const allQuestions = [...existingQuestions, ...uniqueNewQuestions];

        localStorage.setItem(selectedCategory, JSON.stringify(allQuestions));
        
        toast({ title: 'Success!', description: `${uniqueNewQuestions.length} new questions uploaded to ${selectedCategory.replace(/-/g, ' ')}. Reload the quiz page to see them.` });
        setIsOpen(false);
      } catch (error: any) {
        toast({ title: 'Upload failed', description: error.message, variant: 'destructive' });
      }
    };
    reader.readAsText(file);
  }, [file, toast, selectedCategory]);
  
  const handleClearCategory = useCallback(() => {
    if (!selectedCategory) {
      toast({ title: 'No category selected', description: 'Please select a category to clear.', variant: 'destructive' });
      return;
    }
    
    localStorage.removeItem(selectedCategory);
    
    toast({ title: 'Category Cleared!', description: `All uploaded questions have been removed from ${selectedCategory.replace(/-/g, ' ')}. The page will update upon the next quiz visit.` });
    setIsOpen(false);
  }, [selectedCategory, toast]);


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Custom Questions</DialogTitle>
          <DialogDescription>
            Upload a CSV file with your trivia questions. The file should have the following columns: `question`, `option1`, `option2`, `option3`, `option4`, `correctAnswer`, `explanation`. You can also optionally include an `imageUrl` column with a public URL to an image. To include commas in your text, wrap the text in double quotes (e.g., "This is a question, with a comma").
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
        <DialogFooter className="justify-between">
           <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Clear Category</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action will permanently delete all uploaded questions from the selected category. The original questions that came with the app will not be affected. This cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleClearCategory}>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          <Button onClick={handleUpload}>Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
