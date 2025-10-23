
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { useLoading } from '@/app/context/loading-context';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function RulesPage() {
  const { showLoader, hideLoader } = useLoading();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    hideLoader();
  }, [pathname, searchParams, hideLoader]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Politics: The Game - The Rules</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-left">
          <p className="text-muted-foreground">
            Congratulations, you’ve decided to run for President! Just like in real life, it will take lots of votes. But in our game, we’ve improved upon democracy as currently practiced - you will need at least 270 Electoral Votes AS WELL AS the most Popular Votes to win. And you will also need money. Lots of money. Because what good is democracy if you can’t buy it? There will be scandals and setbacks, alliances made, alliances broken. Being the smartest candidate and having strong ethics may not be as important as being tactically shrewd and just a wee bit morally bereft. So tuck your scruples away, put on your best fake smile and see if you have what it takes to win the race to the White House!
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-destructive">PARTS OF THE GAME</h2>
            <p className="text-muted-foreground">
              Game board (1) Dice (2) Game pieces (8) Gerrymander cards (35) Scoring sheets (100) Cash (420 total)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-destructive">BIG PICTURE</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Spin the dice and move your game piece</li>
              <li>Choose a question type and answer it correctly to win either cash, Popular Votes or Electoral Votes</li>
              <li>The first candidate to get at least 270 Electoral Votes AND the most Popular Votes wins!</li>
            </ol>
            <p className="text-muted-foreground mt-4"><strong>Now for the details...</strong></p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-destructive">GENERAL GAME PLAY</h2>
             <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Gerrymander cards should be shuffled, and each candidate/team should be dealt 3 cards. Each card lists a combination of achievements on the left side. If you attain them all, then you get the bonus listed on the right side. Choose 2 cards and return the 3rd one to the deck. The deck then gets placed face-down on the Gerrymander card space on the board. Read the details on Gerrymander cards below.</li>
                <li>Next, each candidate/team rolls the 2 dice. The candidate with the highest roll gets to choose their starting state. Place your game piece in that state. The next highest roll then chooses their home state, and so on. There can only be one candidate per state to start the game. No candidate may choose D.C. as their home state. The candidate with the lowest roll from above goes first. Play then proceeds counterclockwise (to your right).</li>
                <li>When it’s your turn to roll, you have two options:</li>
            </ul>
            <ul className="list-disc pl-10 space-y-2 text-muted-foreground">
                <li><strong>Option 1:</strong> Before rolling the dice, you can fly to any other state, at a cost of $2 million (payable to the bank). If you use this option, your turn is over once you land in that new state.</li>
                <li><strong>Option 2:</strong> Roll the dice and move the indicated number of places. If you roll doubles (two 1s, two 2s, etc), then BEFORE you move your piece, you must choose the top Wildcard from the stack and do whatever is indicated on that card. (<a href="#wildcards" className="text-blue-500 underline">See the section on Wildcards for more details</a>)</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mt-4">
              <li>You may move in any direction, into any state adjoining the state you are in, but you may NOT end up in the same state in which you started your turn. (You may, however, pass through your starting state on the way to another state.)</li>
              <li>Once you finish moving, you may then choose either a General or State trivia question for free. For Government trivia, you must pay $2 million to the bank before being asked the question. Whichever question type you choose, one of the other candidates will ask you the question from the app and read you the multiple choice answers. You have the OPTION of clicking the hourglass icon to activate a 2:00 minute countdown timer.</li>
              <li>If you know the correct answer, then go for it! If correct, you get the specified reward</li>
              <li>If you are not sure of the answer, you can get help from one of the other candidates. Any candidate can offer you help. They can do this out of the goodness of their hearts (bless their naive souls!), or they can demand a payment (votes and/or cash, or feel free to get creative…). It’s up to you to decide if you can afford their price; if you trust them; and if you really need the help. Payment is up front.</li>
              <li>If the state you land in has already had its Electoral Votes chip claimed by another candidate, you can attempt to buy that chip from whoever holds them. You can offer cash, Popular Votes, Electoral Votes or any combination of these, but you must have all the items you offer in hand - no IOUs!</li>
              <li>If your offer is accepted, and you answer the trivia question correctly, then make your payment, claim your chip, and your turn is over. (If you answer incorrectly, then you do NOT need to make the payment and your turn is over, like it would be on any other turn.)</li>
              <li>If your offer is rejected, then you can still opt to choose either a General or State trivia question.</li>
            </ul>
            <p className="text-muted-foreground mt-4"><strong>** Note that D.C. has 3 Electoral Votes.</strong> They can be claimed by the first candidate that correctly answers a Government Trivia question for any of the states. That candidate MUST make a verbal claim on those Electoral Votes BEFORE the next candidate throws the dice. If they miss their opportunity, then the next candidate who correctly answers a Government Trivia question can claim the DC Electoral Votes in the same manner. Your turn is over when you either answer a question (correctly or incorrectly), OR make a successful offer to buy Electoral Votes from their current holder</p>
            <p className="text-muted-foreground mt-4"><strong>D.C. is where politicians go to recharge.</strong> When you are in D.C., you get $10 million from the bank for each missed turn. You can choose to land there as part of your regular turn, or you may get forced to go there (like if you run out of cash, or if a Wildcard sends you there). For example, you are currently in North Carolina and you roll a 3, so you move yourself to D.C. Your turn is over (you do not get to answer any questions), but you collect $10 million. If you forfeit your next roll of the dice on your next turn, you get another $10 million. You can stay in D.C. for a maximum of 4 turns in a row.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-destructive">GERRYMANDER CARDS</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Gerrymander cards are a way to obtain certain rewards in an ‘alternative’ manner.</li>
                <li>You can play a Gerrymander card at any time during your turn. Once you play a card, then that card gets placed in front of you, face up, to indicate that it has been played. You must then choose the next Gerrymander card from the deck so that you always have 2 ‘active’ Gerrymander cards in your possession. <strong>NO GERRYMANDER CARDS MAY BE PLAYED DURING RUNOFFS OR DURING SPEED PLAY.</strong></li>
                <li>If you play a Gerrymander card, the Things Needed side of the card lists the items you need to have in your possession to claim the Reward. Any EV chips that you are required to have will be placed back into their respective state(s); any money you are required to have will go back to the bank; and any Popular Votes you are required to have will simply get deducted from your PV total</li>
                <li>On the Reward side of the Gerrymander card, if money is part of the Reward, then that money comes from the bank. Any Popular Votes just get added to your total. The EV chips you get as a Reward either get taken from their respective state(s), or if they have already been claimed, then the current owner must forfeit them to you.</li>
                <li><strong>Example:</strong> your Gerrymander card states that if you have the Alabama, Arkansas and Mississippi EV chips, as well as $5 million cash, you can turn those things in for the Florida EV chip plus 20 million Popular Votes. Once you have those things under the Things Needed column, turn them in (EV chips back to the state, cash to the bank). You can now take the Florida EV chip (wherever it may be located) and add 20 million Popular Votes to your total.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-destructive">WINNING</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mt-4">
                <li>Game play continues until the first candidate collects at least 270 Electoral Votes. At that point, all candidates should turn in any unplayed Gerrymander cards, and take the appropriate penalties.</li>
                <li>If the same candidate that has 270 or more Electoral Votes also has the most Popular Votes, then that candidate can declare themselves the next President of the United States. Game over. Back to Congress for the rest of you. Try again in 4 years!</li>
                <li>But if any other candidate has more Popular Votes than the person with 270+ Electoral Votes, then those 2 candidates (the one with 270 or more Electoral Votes plus the candidate with the most Popular Votes) must enter a RUNOFF. (See below for Runoff rules)</li>
            </ul>
          </div>

          <div>
            <h2 id="wildcards" className="text-2xl font-semibold mb-2 text-destructive">WILDCARDS</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Wildcards are chosen whenever a candidate throws doubles. (Two 1s, two 2s, etc)</li>
                <li>Unless the Wildcard states otherwise, if you are told that you lose some amount of cash or votes, those items just go back to the bank (cash), or get erased from your tally (votes).</li>
                <li>Once a Wildcard is played, place it face up next to the remaining Wildcards. Once there are 3-5 Wildcards remaining in the draw pile, the Speaker should shuffle them all and return the whole deck to service, face down.</li>
                <li>See the Wildcard reference sheet for details on each type of Wildcard</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-destructive">WILDCARD DETAILS</h3>
            <p className="text-muted-foreground">Wildcards are chosen whenever a player throws doubles (1+1, 2+2, 3+3, etc). Unless the Wildcard states otherwise, if you are told that you lose some amount of cash or votes, those items just go back to the bank (cash), get erased from your tally (Popular Votes), or go back on the board (Electoral Votes).</p>
            <p className="text-muted-foreground mt-2">If a Wildcard has a 2 minute time limit associated with it, you may press the hourglass icon on your home screen to access a 2:00 countdown timer.</p>
            <p className="text-muted-foreground mt-2">There are 6 different categories of Wildcards. Once any Wildcard is played, place it face up on the bottom of the Wildcard deck. After all Wildcards have been played, the Speaker should shuffle the deck and place them face down again.</p>

            <h4 className="text-lg font-semibold mt-4 text-destructive/90">“Feel your pain” time</h4>
            <p className="text-muted-foreground mt-2">You have 2 minutes to act out the word or phrase indicated. The person acting out the word or phrase cannot talk / hum / sing / vocalize / write / draw, point at objects in the room, or move their lips. Tugging the ear means “sounds like”. Hold up the number of fingers to indicate the number of words. Place the number of fingers on your forearm to indicate the number of syllables in the word. Touch your nose if someone guesses a correct word. Any other rules you want to add or modify must be agreed upon before you start play.</p>
            <p className="text-muted-foreground mt-2">If any other candidate correctly guesses what you are acting out within 2 minutes, then that person AND the actor each get 10 million Popular Votes.</p>
            <p className="text-muted-foreground mt-2">If no one guesses what you are acting out, then you alone lose 5 million Popular Votes.</p>

            <h4 className="text-lg font-semibold mt-4 text-destructive/90">“Party platform” time</h4>
            <p className="text-muted-foreground mt-2">You have 2 minutes to draw the word or phrase indicated. You may not draw letters or numbers.</p>
            <p className="text-muted-foreground mt-2">If any other candidate correctly guesses what you are drawing, then that person AND the artist each get $5 million from the bank.</p>
            <p className="text-muted-foreground mt-2">If no one guesses what you are drawing within 1 minute, then the artist must pay each candidate or team $1 million from their own funds.</p>

            <h4 className="text-lg font-semibold mt-4 text-destructive/90">“Glad-handing” time</h4>
            <p className="text-muted-foreground mt-2">You have 2 minutes (unless the card says otherwise) to complete the physical challenge described. The other candidates are the judges in determining whether you were successful in the challenge (simple majority rules).</p>
            <p className="text-muted-foreground mt-2">If you successfully do the challenge, you get 10 million Popular Votes.</p>
            <p className="text-muted-foreground mt-2">If you are not able to complete the challenge, you lose 5 million Popular Votes.</p>
            <p className="text-muted-foreground mt-2">If someone has a physical limitation/disability that would prevent them from doing the challenge as described, then the group can decide on an appropriate modification of the challenge</p>

            <h4 className="text-lg font-semibold mt-4 text-destructive/90">“Chicken dinner” time</h4>
            <p className="text-muted-foreground mt-2">You must sing or recite the indicated speech, poem, song, etc. The other candidates are the judges in determining whether you were successful in the challenge. Simple majority rules.</p>
            <p className="text-muted-foreground mt-2">If you successfully complete the challenge, you get $5 million from the bank.</p>
            <p className="text-muted-foreground mt-2">If you are not able to complete the challenge, you must give $1 million to each of the other candidates/teams from your own funds.</p>

            <h4 className="text-lg font-semibold mt-4 text-destructive/90">“Feel My Pain” time</h4>
            <p className="text-muted-foreground mt-2">If you get one of these cards, your challenge is to have one other candidate act out the action or activity described WITHOUT telling them what they are trying to do or using any words that would give away the action. You also cannot use any gestures or movements to ‘guide’ the other player. For example, if the card says “Hitting a home run”, then you must describe in words only how you would like the other player to attempt to act that out. You could start them off by saying “make a fist with each hand and place one fist on top of the other”. You cannot say something like, “pretend you are gripping a bat”. Nor can you make a gesture as if you are swinging a bat. And so on. You have 2 minutes.</p>
            <p className="text-muted-foreground mt-2">If any of the other candidates can guess what is being acted out, then each of you (you, the person acting out the word or phrase, and the person who guessed correctly) will get $5 million from the bank.</p>
            <p className="text-muted-foreground mt-2">If you are unsuccessful, then you and the person acting out your instructions must each give $2 million to the bank.</p>

            <h4 className="text-lg font-semibold mt-4 text-destructive/90">Random Wildcards</h4>
            <p className="text-muted-foreground mt-2">These are random things that happen during any campaign. They may help or hurt you and/or other candidates. You may be directed to give back a certain number of Electoral Votes, Popular Votes or cash.</p>
            <p className="text-muted-foreground mt-2">If you do not have the required amount of votes or cash, then proceed as follows:</p>
            <p className="text-muted-foreground mt-2">If, as an example, you are to give back 12 Electoral Votes, and you cannot exactly match that number, then you must give back at least that number, even if it means you lose significantly more Electoral Votes than the card instructed. (The EV chip(s) get placed back on their respective state(s) and is/are up for grabs again.)</p>
            <p className="text-muted-foreground mt-2">If you do not have at least the number needed, then you must pay $1 million cash for each Electoral Vote you do not have. If you don’t have enough cash, then back to DC you go to collect your $10 million with each missed turn!</p>
            <p className="text-muted-foreground mt-2">If you are to give up votes and you actually have at least some votes to give, you CANNOT buy your way out of giving up Electoral Votes. Meaning, if you need to give up 12 votes, and you have at least 12 votes, then you MUST give them up. If you only have 10 votes, then you must give them up AND pay the remaining $2 million cash penalty (for the 2 EVs you did not have).</p>
            <p className="text-muted-foreground mt-2">The same rules apply to giving up Popular Votes ($1 million will buy you 1 million PVs)</p>
            <p className="text-muted-foreground mt-2">If you don’t have enough cash for the Wildcard, then you place yourself in D.C. and collect $10 million for each missed turn (up to the maximum of 4 in a row). All debts must be paid before throwing the dice and moving out of D.C.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-destructive">RUNOFF RULES</h2>
            <p className="text-muted-foreground">If one candidate has at least 270 Electoral Votes, but another candidate has more Popular Votes, then those 2 candidates go “head to head” to determine the final winner. (If there are multiple candidates with more Popular Votes than the candidate with 270+ Electoral Votes, then only the candidate with the highest Popular Vote total gets to be in the Runoff.)</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mt-2">
                <li>Each Runoff candidate should be given a piece of paper and something to write with.</li>
                <li>Both Runoff candidates will be asked 5 General Trivia questions AND 5 State Trivia questions, read by another candidate.</li>
                <li>Multiple choice options will not be given, nor is outside help allowed</li>
                <li>Both Runoff candidates are answering the same 10 questions.</li>
                <li>Candidates should write down their answers, and the person asking the questions should secretly write down the correct answer for each question. (Choose an answer from the options and Submit to find out the correct answer.)</li>
                <li>At the end of this round of 10 questions, the candidate with the most correct answers will get to take the other candidate’s votes and money, and thereby become President. Woo hoo! If the Runoff candidates are tied after the round of 10 questions, then steps i. - iii. are repeated.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-destructive">SPEED PLAY</h2>
            <p className="text-muted-foreground">If you want a faster version of the game by setting a time limit, or if your group is just ready to call it a night, then the following modifications apply.</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mt-2">
                <li>All rules of play outlined above are still in effect until you reach the designated time limit, or the point when you just want to wrap it up</li>
                <li>All votes (Electoral and Popular) possessed by each candidate are up for grabs in Speed Play</li>
                <li>Each candidate needs a piece of paper and something to write with.</li>
                <li>Add up all the Electoral Votes that each candidate already has.</li>
                <li>The two candidates with the lowest Electoral Vote total will go head-to-head in round 1.</li>
                <li>The two candidates get asked 5 General trivia questions, read by another candidate. Multiple choice options will not be given, nor is outside help allowed. The candidates should write down their answers. The person asking the questions should also secretly write down the correct answers.</li>
                <li>The candidate that answers more questions correctly will get to take all of the votes (Popular and Electoral) from the other candidate, who is now eliminated from the Race. (If there is a tie, then repeat step d.)</li>
                <li>The candidate that won Round 1 now goes head-to-head against the candidate that had the 3rd lowest Electoral Vote total. Repeat steps d) and e) above until each candidate has had a head-to-head round.</li>
                <li>Last one standing is now the leader of the (sorta) free world!</li>
            </ul>
          </div>

          <div>
            <h2 id="adding-more-questions" className="text-2xl font-semibold mb-2 text-destructive">ADDING MORE QUESTIONS</h2>
            <p className="text-muted-foreground">When you run out of questions in a given category, you have 2 options:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mt-2">
                <li>The app will allow you to reuse the entire batch of original questions.</li>
                <li>You also can choose to buy an expansion pack of 200 new questions for that category. Click the “Buy expansion pack” button and follow the directions. Politics: The Game will not see, collect or store any of your payment information. The expansion pack will be delivered to the email address you provided when you first registered the app.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-destructive">CUSTOM QUESTIONS</h2>
            <p className="text-muted-foreground">A very unique feature of our game is that you have the ability to add your own custom trivia questions!</p>
            <p className="text-muted-foreground mt-2">On the Main Menu page of the app, you will see a button labeled “Upload Custom Questions”. When you have prepared your questions, you can choose which category you would like the questions uploaded to. You can place questions in any of the 3 game categories (General, State or Government trivia), or you can keep them in a separate Custom User Questions category.</p>
            <p className="text-muted-foreground mt-2">Please note the following things if you want to use this feature:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mt-2">
                <li>It is recommended that you use something like Google Sheets or MS Excel to create a spreadsheet of your questions</li>
                <li>There needs to be 7 columns in your spreadsheet, labeled exactly like this (ignore the semicolons, they are just here so you see the division of words): question; option1; option2; option3; option4; correctAnswer; explanation</li>
                <li>So column 1 has your question, column 2 has the correct answer to the question, columns 3-5 have incorrect answers, column 6 has the correct answer (and it must exactly match the information in column 2), and column 7 has whatever explanation or other info you want to provide. The app will randomize the presentation of the answers.</li>
                <li>When you create this spreadsheet and are ready to export it, you will need to download it as a CSV file. All major spreadsheet apps have this feature built in.</li>
                <li>The CSV file is what will actually get uploaded to the app for game play. Click the Upload button, choose which category you want to upload questions to, then hit Choose File to select your newly created CSV file.</li>
                <li>The questions you upload will only be stored on your local device. Meaning, they will not in any way alter or damage the ‘permanent’ questions that are in the app database. Similarly, your questions will not be distributed to any other players. They are unique to you.</li>
            </ul>
          </div>
          
          <div className="text-center pt-4">
            <Button asChild variant="outline" onClick={showLoader}>
              <Link href="/">Back to Main Menu</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
