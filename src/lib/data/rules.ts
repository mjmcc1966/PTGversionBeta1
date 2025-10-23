
export const rulesData = [
    {
      id: 'intro',
      title: 'Introduction',
      content: [
        'Congratulations, you’ve decided to run for President! Just like in real life, it will take lots of votes. But in our game, we’ve improved upon democracy as currently practiced - you will need at least 270 Electoral Votes AS WELL AS the most Popular Votes to win. And you will also need money. Lots of money. Because what good is democracy if you can’t buy it? There will be scandals and setbacks, alliances made, alliances broken. Being the smartest candidate and having strong ethics may not be as important as being tactically shrewd and just a wee bit morally bereft. So tuck your scruples away, put on your best fake smile and see if you have what it takes to win the race to the White House!',
      ],
    },
    {
      id: 'parts-of-the-game',
      title: 'PARTS OF THE GAME',
      content: ['Game board (1) Dice (2) Game pieces (8) Gerrymander cards (35) Scoring sheets (100) Cash (420 total)'],
    },
    {
      id: 'big-picture',
      title: 'BIG PICTURE',
      content: [
        'Spin the dice and move your game piece',
        'Choose a question type and answer it correctly to win either cash, Popular Votes or Electoral Votes',
        'The first candidate to get at least 270 Electoral Votes AND the most Popular Votes wins!',
        '<strong>Now for the details...</strong>',
      ],
    },
    {
        id: 'general-game-play',
        title: 'GENERAL GAME PLAY',
        content: [
          'Gerrymander cards should be shuffled, and each candidate/team should be dealt 3 cards. Each card lists a combination of achievements on the left side. If you attain them all, then you get the bonus listed on the right side. Choose 2 cards and return the 3rd one to the deck. The deck then gets placed face-down on the Gerrymander card space on the board. Read the details on Gerrymander cards below.',
          'Next, each candidate/team rolls the 2 dice. The candidate with the highest roll gets to choose their starting state. Place your game piece in that state. The next highest roll then chooses their home state, and so on. There can only be one candidate per state to start the game. No candidate may choose D.C. as their home state. The candidate with the lowest roll from above goes first. Play then proceeds counterclockwise (to your right).',
          'When it’s your turn to roll, you have two options:',
          '<strong>Option 1:</strong> Before rolling the dice, you can fly to any other state, at a cost of $2 million (payable to the bank). If you use this option, your turn is over once you land in that new state.',
          '<strong>Option 2:</strong> Roll the dice and move the indicated number of places. If you roll doubles (two 1s, two 2s, etc), then BEFORE you move your piece, you must choose the top Wildcard from the stack and do whatever is indicated on that card. (<a href="#wildcards" class="text-blue-500 underline">See the section on Wildcards for more details</a>)',
          'You may move in any direction, into any state adjoining the state you are in, but you may NOT end up in the same state in which you started your turn. (You may, however, pass through your starting state on the way to another state.)',
          'Once you finish moving, you may then choose either a General or State trivia question for free. For Government trivia, you must pay $2 million to the bank before being asked the question. Whichever question type you choose, one of the other candidates will ask you the question from the app and read you the multiple choice answers. You have the OPTION of clicking the hourglass icon to activate a 2:00 minute countdown timer.',
          'If you know the correct answer, then go for it! If correct, you get the specified reward',
          'If you are not sure of the answer, you can get help from one of the other candidates. Any candidate can offer you help. They can do this out of the goodness of their hearts (bless their naive souls!), or they can demand a payment (votes and/or cash, or feel free to get creative…). It’s up to you to decide if you can afford their price; if you trust them; and if you really need the help. Payment is up front.',
          'If the state you land in has already had its Electoral Votes chip claimed by another candidate, you can attempt to buy that chip from whoever holds them. You can offer cash, Popular Votes, Electoral Votes or any combination of these, but you must have all the items you offer in hand - no IOUs!',
          'If your offer is accepted, and you answer the trivia question correctly, then make your payment, claim your chip, and your turn is over. (If you answer incorrectly, then you do NOT need to make the payment and your turn is over, like it would be on any other turn.)',
          'If your offer is rejected, then you can still opt to choose either a General or State trivia question.',
          '<strong>** Note that D.C. has 3 Electoral Votes.</strong> They can be claimed by the first candidate that correctly answers a Government Trivia question for any of the states. That candidate MUST make a verbal claim on those Electoral Votes BEFORE the next candidate throws the dice. If they miss their opportunity, then the next candidate who correctly answers a Government Trivia question can claim the DC Electoral Votes in the same manner. Your turn is over when you either answer a question (correctly or incorrectly), OR make a successful offer to buy Electoral Votes from their current holder',
          '<strong>D.C. is where politicians go to recharge.</strong> When you are in D.C., you get $10 million from the bank for each missed turn. You can choose to land there as part of your regular turn, or you may get forced to go there (like if you run out of cash, or if a Wildcard sends you there). For example, you are currently in North Carolina and you roll a 3, so you move yourself to D.C. Your turn is over (you do not get to answer any questions), but you collect $10 million. If you forfeit your next roll of the dice on your next turn, you get another $10 million. You can stay in D.C. for a maximum of 4 turns in a row.',
        ],
      },
      {
        id: 'gerrymander-cards',
        title: 'GERRYMANDER CARDS',
        content: [
            'Gerrymander cards are a way to obtain certain rewards in an ‘alternative’ manner.',
            'You can play a Gerrymander card at any time during your turn. Once you play a card, then that card gets placed in front of you, face up, to indicate that it has been played. You must then choose the next Gerrymander card from the deck so that you always have 2 ‘active’ Gerrymander cards in your possession. <strong>NO GERRYMANDER CARDS MAY BE PLAYED DURING RUNOFFS OR DURING SPEED PLAY.</strong>',
            'If you play a Gerrymander card, the Things Needed side of the card lists the items you need to have in your possession to claim the Reward. Any EV chips that you are required to have will be placed back into their respective state(s); any money you are required to have will go back to the bank; and any Popular Votes you are required to have will simply get deducted from your PV total',
            'On the Reward side of the Gerrymander card, if money is part of the Reward, then that money comes from the bank. Any Popular Votes just get added to your total. The EV chips you get as a Reward either get taken from their respective state(s), or if they have already been claimed, then the current owner must forfeit them to you.',
            '<strong>Example:</strong> your Gerrymander card states that if you have the Alabama, Arkansas and Mississippi EV chips, as well as $5 million cash, you can turn those things in for the Florida EV chip plus 20 million Popular Votes. Once you have those things under the Things Needed column, turn them in (EV chips back to the state, cash to the bank). You can now take the Florida EV chip (wherever it may be located) and add 20 million Popular Votes to your total.',
        ]
      },
      {
        id: 'winning',
        title: 'WINNING',
        content: [
            'Game play continues until the first candidate collects at least 270 Electoral Votes. At that point, all candidates should turn in any unplayed Gerrymander cards, and take the appropriate penalties.',
            'If the same candidate that has 270 or more Electoral Votes also has the most Popular Votes, then that candidate can declare themselves the next President of the United States. Game over. Back to Congress for the rest of you. Try again in 4 years!',
            'But if any other candidate has more Popular Votes than the person with 270+ Electoral Votes, then those 2 candidates (the one with 270 or more Electoral Votes plus the candidate with the most Popular Votes) must enter a RUNOFF. (See below for Runoff rules)'
        ]
      },
      {
        id: 'wildcards',
        title: 'WILDCARDS',
        content: [
            'Wildcards are chosen whenever a candidate throws doubles. (Two 1s, two 2s, etc)',
            'Unless the Wildcard states otherwise, if you are told that you lose some amount of cash or votes, those items just go back to the bank (cash), or get erased from your tally (votes).',
            'Once a Wildcard is played, place it face up next to the remaining Wildcards. Once there are 3-5 Wildcards remaining in the draw pile, the Speaker should shuffle them all and return the whole deck to service, face down.',
            'See the Wildcard reference sheet for details on each type of Wildcard',
        ]
      },
      {
        id: 'wildcard-details',
        title: 'WILDCARD DETAILS',
        content: [
            'Wildcards are chosen whenever a player throws doubles (1+1, 2+2, 3+3, etc). Unless the Wildcard states otherwise, if you are told that you lose some amount of cash or votes, those items just go back to the bank (cash), get erased from your tally (Popular Votes), or go back on the board (Electoral Votes).',
            'If a Wildcard has a 2 minute time limit associated with it, you may press the hourglass icon on your home screen to access a 2:00 countdown timer.',
            'There are 6 different categories of Wildcards. Once any Wildcard is played, place it face up on the bottom of the Wildcard deck. After all Wildcards have been played, the Speaker should shuffle the deck and place them face down again.',
        ]
      },
       {
        id: 'runoff-rules',
        title: 'RUNOFF RULES',
        content: [
            'If one candidate has at least 270 Electoral Votes, but another candidate has more Popular Votes, then those 2 candidates go “head to head” to determine the final winner. (If there are multiple candidates with more Popular Votes than the candidate with 270+ Electoral Votes, then only the candidate with the highest Popular Vote total gets to be in the Runoff.)',
            'Each Runoff candidate should be given a piece of paper and something to write with.',
            'Both Runoff candidates will be asked 5 General Trivia questions AND 5 State Trivia questions, read by another candidate.',
            'Multiple choice options will not be given, nor is outside help allowed',
            'Both Runoff candidates are answering the same 10 questions.',
            'Candidates should write down their answers, and the person asking the questions should secretly write down the correct answer for each question. (Choose an answer from the options and Submit to find out the correct answer.)',
            'At the end of this round of 10 questions, the candidate with the most correct answers will get to take the other candidate’s votes and money, and thereby become President. Woo hoo! If the Runoff candidates are tied after the round of 10 questions, then steps i. - iii. are repeated.',
        ]
      },
       {
        id: 'speed-play',
        title: 'SPEED PLAY',
        content: [
            'If you want a faster version of the game by setting a time limit, or if your group is just ready to call it a night, then the following modifications apply.',
            'All rules of play outlined above are still in effect until you reach the designated time limit, or the point when you just want to wrap it up',
            'All votes (Electoral and Popular) possessed by each candidate are up for grabs in Speed Play',
            'Each candidate needs a piece of paper and something to write with.',
            'Add up all the Electoral Votes that each candidate already has.',
            'The two candidates with the lowest Electoral Vote total will go head-to-head in round 1.',
            'The two candidates get asked 5 General trivia questions, read by another candidate. Multiple choice options will not be given, nor is outside help allowed. The candidates should write down their answers. The person asking the questions should also secretly write down the correct answers.',
            'The candidate that answers more questions correctly will get to take all of the votes (Popular and Electoral) from the other candidate, who is now eliminated from the Race. (If there is a tie, then repeat step d.)',
            'The candidate that won Round 1 now goes head-to-head against the candidate that had the 3rd lowest Electoral Vote total. Repeat steps d) and e) above until each candidate has had a head-to-head round.',
            'Last one standing is now the leader of the (sorta) free world!',
        ]
      },
       {
        id: 'adding-more-questions',
        title: 'ADDING MORE QUESTIONS',
        content: [
            'When you run out of questions in a given category, you have 2 options:',
            'The app will allow you to reuse the entire batch of original questions.',
            'You also can choose to buy an expansion pack of 200 new questions for that category. Click the “Buy expansion pack” button and follow the directions. Politics: The Game will not see, collect or store any of your payment information. The expansion pack will be delivered to the email address you provided when you first registered the app.',
        ]
      },
      {
        id: 'custom-questions',
        title: 'CUSTOM QUESTIONS',
        content: [
            'A very unique feature of our game is that you have the ability to add your own custom trivia questions!',
            'On the Main Menu page of the app, you will see a button labeled “Upload Custom Questions”. When you have prepared your questions, you can choose which category you would like the questions uploaded to. You can place questions in any of the 3 game categories (General, State or Government trivia), or you can keep them in a separate Custom User Questions category.',
            'Please note the following things if you want to use this feature:',
            'It is recommended that you use something like Google Sheets or MS Excel to create a spreadsheet of your questions',
            'There needs to be 7 columns in your spreadsheet, labeled exactly like this (ignore the semicolons, they are just here so you see the division of words): question; option1; option2; option3; option4; correctAnswer; explanation',
            'So column 1 has your question, column 2 has the correct answer to the question, columns 3-5 have incorrect answers, column 6 has the correct answer (and it must exactly match the information in column 2), and column 7 has whatever explanation or other info you want to provide. The app will randomize the presentation of the answers.',
            'When you create this spreadsheet and are ready to export it, you will need to download it as a CSV file. All major spreadsheet apps have this feature built in.',
            'The CSV file is what will actually get uploaded to the app for game play. Click the Upload button, choose which category you want to upload questions to, then hit Choose File to select your newly created CSV file.',
            'The questions you upload will only be stored on your local device. Meaning, they will not in any way alter or damage the ‘permanent’ questions that are in the app database. Similarly, your questions will not be distributed to any other players. They are unique to you.',
        ]
      }
];
