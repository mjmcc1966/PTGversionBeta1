
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function RulesPage() {
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
            <h2 className="text-2xl font-semibold mb-2">PARTS OF THE GAME</h2>
            <p className="text-muted-foreground">
              Game board (1) Dice (2) Game pieces (8) Gerrymander cards (35) Scoring sheets (100) Cash (420 total)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">BIG PICTURE</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Spin the dice and move your game piece</li>
              <li>Choose a question type and answer it correctly to win either cash, Popular Votes or Electoral Votes</li>
              <li>The first candidate to get at least 270 Electoral Votes AND the most Popular Votes wins!</li>
            </ol>
            <p className="text-muted-foreground mt-4"><strong>Now for the details...</strong></p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">GAME SET UP</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>If you have not already done so, download the free app (from the AppStore or Google Play). To register, you will need to enter your first name, a valid email address, and your unique 16 digit code (found inside the box lid) to activate the app. The app will provide you with over 300 questions of each type of question (State, General and Political Trivia questions).</li>
              <li>Please enter your email carefully, as this is how you will be notified of any updates to the game, and it will also be how you receive expansion packs (should you choose to buy any).</li>
              <li>You will never see a given question twice while using your code, and the order of questions (and answers) will be randomized.</li>
              <li>Your 16-digit code can be used 5 times. Once a given device (phone, iPad, tablet, etc) is activated, it will remain activated and will not need to have the code entered again.</li>
              <li>You can share the code with whoever you like, but remember the limit of 5 activations!</li>
              <li>Keep in mind that each time your code is used, regardless on which device, it will pick up where you left off. As an example, if you have used 50 of the General Trivia questions, then the next time the app is opened with your code, those 50 questions will already be used and will not be seen again. This means that if someone else is using your code, they could use up all of your questions. (But you have options when you reach that point - see below)</li>
              <li>Place the 50 Electoral Vote chips, each labeled with the state abbreviation and number of Electoral Votes, in their appropriate state on the game board.</li>
              <li>Each candidate chooses a game piece and gets $10 million (ten $1 million bills) to start their candidacy.</li>
              <li>Choose one candidate to be the Speaker of the House, who will be in charge of general game flow, controlling the bank, and generally making sure the rules are followed.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">GENERAL GAME PLAY</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Gerrymander cards should be shuffled, and each candidate/team should be dealt 3 cards.</li>
              <li>Each card lists a combination of achievements on the left side. If you attain them all, then you get the bonus listed on the right side.</li>
              <li>Choose 2 cards and return the 3rd one to the deck. The deck then gets placed face-down on the Gerrymander card space on the board.</li>
              <li>Read the details on Gerrymander cards below</li>
              <li>At the end of regular play (meaning, before you enter into a Runoff or Speed Play round), you must deduct the listed bonus from each combo card in your possession, from your campaign.</li>
              <li>If you need to deduct more cash than you have, then you may get $1 million for each million Popular Votes you give up.</li>
              <li>Likewise, if you need to deduct more Votes than you have, you may buy 1 million Votes for $5 million cash.</li>
              <li>Shuffle the Gerrymander cards, then 3 should be dealt to each candidate/team. The Gerrymander cards list a combination of achievements that, if you attain them all, will get you the bonus listed on the right side of the card. Look over the 3 cards you were dealt, keep 2 of them and return the 3rd to the deck. All unused Gerrymander cards should be placed face down, on the “Gerrymander” square on the game board.</li>
              <li>Next, each candidate/team rolls the 2 dice.</li>
              <li>The candidate with the highest roll gets to choose their starting state. Place your game piece in that state. The next highest roll then chooses their home state, and so on. There can only be one candidate per state to start the game. No candidate may choose D.C. as their home state.</li>
              <li>The candidate with the lowest roll from above goes first. Play then proceeds counterclockwise (to your right).</li>
            </ul>
            <p className="text-muted-foreground mt-4">When it’s your turn to roll, you have two options:</p>
            <ul className="list-decimal pl-10 space-y-2 text-muted-foreground">
                <li>Option 1: Before rolling the dice, you can fly to any other state, at a cost of $2 million (payable to the bank). If you use this option, your turn is over once you land in that new state.</li>
                <li>Option 2: Roll the dice and move the indicated number of places. If you roll doubles (two 1s, two 2s, etc), then BEFORE you move your piece, you must choose the top Wildcard from the stack and do whatever is indicated on that card. (See the section on Wildcards for more details)</li>
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
            <p className="text-muted-foreground mt-4"><strong>** Note that D.C. has 3 Electoral Votes. They can be claimed by the first candidate that correctly answers a Government Trivia question for any of the states. That candidate MUST make a verbal claim on those Electoral Votes BEFORE the next candidate throws the dice. If they miss their opportunity, then the next candidate who correctly answers a Government Trivia question can claim the DC Electoral Votes in the same manner. Your turn is over when you either answer a question (correctly or incorrectly), OR make a successful offer to buy Electoral Votes from their current holder</strong></p>
            <p className="text-muted-foreground mt-4">D.C. is where politicians go to recharge. When you are in D.C., you get $10 million from the bank for each missed turn. For example, if you forfeit 3 turns, you get $30 million. You can choose to land there as part of your regular turn, or you may get forced to go there (like if you run out of cash, or if a Wildcard sends you there). For example, you are currently in North Carolina and you roll a 3, so you move yourself to D.C. Your turn is over (you do not get to answer any questions), but you collect $10 million. If you forfeit your next roll of the dice on your next turn, you get another $10 million. You can stay in D.C. for a maximum of 4 turns in a row.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-2">GERRYMANDER CARDS</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>GERRYMANDER CARDS are a way to obtain certain rewards in an ‘alternative’ manner.</li>
                <li>You can play a Gerrymander card at any time during your turn. Once you play a card, then that card gets placed in front of you, face up, to indicate that it has been played. You must then choose the next Gerrymander card from the deck so that you always have 2 ‘active’ Gerrymander cards in your possession. NO GERRYMANDER CARDS MAY BE PLAYED DURING RUNOFFS OR DURING SPEED PLAY.</li>
                <li>If you play a Gerrymander card, the Things Needed side of the card lists the items you need to have in your possession to claim the Reward. Any EV chips that you are required to have will be placed back into their respective state(s); any money you are required to have will go back to the bank; and any Popular Votes you are required to have will simply get deducted from your PV total</li>
                <li>On the Reward side of the Gerrymander card, if money is part of the Reward, then that money comes from the bank. Any Popular Votes just get added to your total. The EV chips you get as a Reward either get taken from their respective state(s), or if they have already been claimed, then the current owner must forfeit them to you.</li>
                <li>Example: your Gerrymander card states that if you have the Alabama, Arkansas and Mississippi EV chips, as well as $5 million cash, you can turn those things in for the Florida EV chip plus 20 million Popular Votes. Once you have those things under the Things Needed column, turn them in (EV chips back to the state, cash to the bank). You can now take the Florida EV chip (wherever it may be located) and add 20 million Popular Votes to your total.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-2">WINNING</h2>
            <p className="text-muted-foreground">Game play continues until the first candidate collects at least 270 Electoral Votes. At that point, all candidates should turn in any unplayed Gerrymander cards, and take the appropriate penalties.</p>
            <p className="text-muted-foreground mt-2">If the same candidate that has 270 or more Electoral Votes also has the most Popular Votes, then that candidate can declare themselves the next President of the United States. Game over. Back to Congress for the rest of you. Try again in 4 years!</p>
            <p className="text-muted-foreground mt-2">But if any other candidate has more Popular Votes than the person with 270+ Electoral Votes, then those 2 candidates (the one with 270 or more Electoral Votes plus the candidate with the most Popular Votes) must enter a RUNOFF. (See below for Runoff rules)</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">WILDCARDS</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Wildcards are chosen whenever a candidate throws doubles. (Two 1s, two 2s, etc)</li>
                <li>Unless the Wildcard states otherwise, if you are told that you lose some amount of cash or votes, those items just go back to the bank (cash), or get erased from your tally (votes).</li>
                <li>Once a Wildcard is played, place it face up next to the remaining Wildcards. Once there are 3-5 Wildcards remaining in the draw pile, the Speaker should shuffle them all and return the whole deck to service, face down.</li>
                <li>See the Wildcard reference sheet for details on each type of Wildcard</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">RUNOFF RULES</h2>
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
            <h2 className="text-2xl font-semibold mb-2">SPEED PLAY</h2>
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
            <h2 className="text-2xl font-semibold mb-2">ADDING MORE QUESTIONS</h2>
            <p className="text-muted-foreground">When you run out of questions in a given category, you have 2 options:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mt-2">
                <li>The app will allow you to reuse the entire batch of original questions. Obviously, this means you have chosen to see all the same questions again.</li>
                <li>You also can choose to buy an expansion pack of 200 new questions for that category. Click the “Buy expansion pack” button and follow the directions. Politics: The Game will not see, collect or store any of your payment information. The expansion pack will be delivered to the email address you provided when you first registered the app.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">CUSTOM QUESTIONS</h2>
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
            <Button asChild variant="outline">
              <Link href="/">Back to Main Menu</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

    