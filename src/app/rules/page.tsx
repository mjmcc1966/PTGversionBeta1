
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function RulesPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Rules of The Game</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Objective</h2>
            <p className="text-muted-foreground">
              The goal of the game is to correctly answer trivia questions across various categories to earn points, popular votes, or electoral votes, depending on the game mode. The player with the most points or votes at the end of the game wins.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Game Play</h2>
            <p className="text-muted-foreground">
              Players navigate to the category selection screen and choose a trivia category. Each category contains a series of multiple-choice questions.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Answering Questions</h2>
            <p className="text-muted-foreground">
              For each question, select the answer you believe is correct and click "Submit Answer". You can also skip a question, but you will not be able to return to it later.
            </p>
          </div>
           <div>
            <h2 className="text-2xl font-semibold mb-2">Timer</h2>
            <p className="text-muted-foreground">
              A timer can be started on the category selection screen or during a quiz. If the timer runs out during a question, you will not receive points for that question.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Scoring</h2>
            <p className="text-muted-foreground">
              You receive one point for each correct answer. Your total score is displayed at the end of the quiz. If you have exhausted all questions in a category, you will be given the option to reset and play again.
            </p>
          </div>
          <div className="text-center pt-4">
            <Button asChild variant="outline">
              <Link href="/">Back to Main Menu</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
