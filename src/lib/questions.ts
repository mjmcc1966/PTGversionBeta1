
export interface Question {
  id: number;
  question: string;
  imageUrl?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface TriviaData {
  [key: string]: Question[];
}

// This represents the original, shipped-with-the-app data.
const originalTriviaData: Readonly<TriviaData> = {
  'general-trivia': [
    {
      id: 101,
      question: "What is the capital of Japan?",
      options: ["Paris", "Moscow", "Tokyo", "Hiroshima"],
      correctAnswer: "Tokyo",
      explanation: "Tokyo has been the capital of Japan since 1868, when Emperor Meiji moved the Imperial Court from Kyoto to Edo, which was then renamed Tokyo."
    },
    {
      id: 102,
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correctAnswer: "William Shakespeare",
      explanation: "Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young star-crossed lovers whose deaths ultimately reconcile their feuding families."
    },
    {
      id: 103,
      question: "What is the largest mammal in the world?",
      options: ["African Elephant", "Giraffe", "Humpback Whale", "Blue Whale"],
      correctAnswer: "Blue Whale",
      explanation: "The blue whale is the largest animal on the planet, weighing as much as 200 tons (approximately 33 elephants). Its heart is the size of a small car."
    },
    {
      id: 104,
      question: "In what year did the Titanic sink?",
      options: ["1905", "1912", "1918", "1923"],
      correctAnswer: "1912",
      explanation: "The RMS Titanic sank in the early hours of April 15, 1912, in the North Atlantic Ocean after striking an iceberg during its maiden voyage from Southampton to New York City."
    },
    {
      id: 105,
      question: "What element does 'O' represent on the periodic table?",
      options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
      correctAnswer: "Oxygen",
      explanation: "The symbol 'O' represents Oxygen, a chemical element with atomic number 8. It is a highly reactive nonmetal and an oxidizing agent that readily forms oxides with most elements."
    },
    {
      id: 106,
      question: "What is the name of this famous landmark?",
      imageUrl: "https://picsum.photos/600/400",
      options: ["Eiffel Tower", "Statue of Liberty", "Colosseum", "Great Wall of China"],
      correctAnswer: "Eiffel Tower",
      explanation: "This is the Eiffel Tower. It is a wrought-iron lattice tower on the Champ de Mars in Paris, France."
    }
  ],
  'state-trivia': [
    {
      id: 201,
      question: "What is the capital of California?",
      options: ["Los Angeles", "San Francisco", "Sacramento", "San Diego"],
      correctAnswer: "Sacramento",
      explanation: "While Los Angeles is the most populous city, Sacramento has been the capital of California since 1854."
    },
    {
      id: 202,
      question: "Which state is known as the 'Sunshine State'?",
      options: ["Arizona", "Florida", "California", "Hawaii"],
      correctAnswer: "Florida",
      explanation: "Florida's official nickname is the 'Sunshine State,' adopted in 1970, due to its warm climate and many days of sunshine."
    },
    {
      id: 203,
      question: "What is the smallest U.S. state by area?",
      options: ["Delaware", "Connecticut", "Rhode Island", "New Jersey"],
      correctAnswer: "Rhode Island",
      explanation: "Rhode Island is the smallest U.S. state by area, covering just about 1,214 square miles."
    },
    {
      id: 204,
      question: "Which state is the only one to have a one-word name?",
      options: ["Ohio", "Iowa", "Utah", "Idaho"],
      correctAnswer: "Ohio",
      explanation: "While there are several states with short names, Ohio is the only one that is composed of just one word. Other states like Iowa or Utah have two syllables."
    },
    {
      id: 205,
      question: "Mount Rushmore is located in which state?",
      options: ["Wyoming", "Montana", "North Dakota", "South Dakota"],
      correctAnswer: "South Dakota",
      explanation: "The famous Mount Rushmore National Memorial, featuring the carved faces of four U.S. Presidents, is located in the Black Hills region of South Dakota."
    },
    {
      id: 401,
      question: "Which state is known as the yellowhammer state (after the state bird), also called the Cotton State?",
      options: ["Alabama", "Louisiana", "Ohio", "West Virginia"],
      correctAnswer: "Alabama",
      explanation: "The northern flicker is also known as the yellowhammer. There was also a company of soldiers in the Civil War known as the yellowhammers."
    },
    {
      id: 402,
      question: "In which state will you find 'Rocket City USA'?",
      options: ["Alabama", "California", "Texas", "Florida"],
      correctAnswer: "Alabama",
      explanation: "NASA's Marshall Space Flight Center is in Huntsville, the most populous city in AL, and is where the Saturn rockets were built."
    },
    {
      id: 403,
      question: "The Tennessee River starts and ends in Tennessee, but a long stretch in the middle passes into this state",
      options: ["Alabama", "Mississippi", "Georgia", "Oklahoma"],
      correctAnswer: "Alabama",
      explanation: "It was once known as the Cherokee River, and it starts in Knoxville before ending in the Ohio River."
    },
    {
      id: 404,
      question: "Which state's capital is known as the Cradle of the Confederacy?",
      options: ["Alabama", "Arkansas", "Mississippi", "Georgia"],
      correctAnswer: "Alabama",
      explanation: "Montgomery hosted the Southern Convention in 1861, in which 7 seceding southern states established the Confederacy."
    },
    {
      id: 405,
      question: "The first 911 call in the US was made in this state.",
      options: ["Alabama", "Tennessee", "Pennsylvania", "New York"],
      correctAnswer: "Alabama",
      explanation: "It was in 1968 in Haleyville, AL, and ushered in the era of people considering anything annoying, inconvenient or stressful to be an emergency."
    },
    {
      id: 406,
      question: "This state has the most fast food restaurants per capita.",
      options: ["West Virginia", "Arkansas", "New Jersey", "Alabama"],
      correctAnswer: "West Virginia",
      explanation: "According to Pricelisto, the state has 49.04 fast food places per 100,000 residents. By complete and utter coincidence, the state is the most obese, with 41.2% of the population meeting criteria for obesity."
    },
    {
      id: 407,
      question: "This state outlaws dressing up as a nun, priest or rabbi on Halloween.",
      options: ["Alabama", "Utah", "Texas", "Mississippi"],
      correctAnswer: "Alabama",
      explanation: "It is a misdemeanor to dress as clergy any time, with a fine of up to $500 and up to 1 year in jail. The law was enacted during civil rights protests in 1965."
    },
    {
      id: 408,
      question: "This state is known as The Last Frontier.",
      options: ["Alaska", "Montana", "Nevada", "Wyoming"],
      correctAnswer: "Alaska",
      explanation: "About 90% of the state is not accessible by any road and much of it is still relatively unexplored."
    },
    {
      id: 409,
      question: "This state has 6 times the number of pilots per capita, and 16 times the number of aircraft per capita, than any other state.",
      options: ["Alaska", "New York", "California", "Wyoming"],
      correctAnswer: "Alaska",
      explanation: "Since there are so few roads in the state, airplanes are the chief way to get around."
    },
    {
      id: 410,
      question: "This state has the most coastline, in terms of total miles",
      options: ["Alaska", "California", "Michigan", "Florida"],
      correctAnswer: "Alaska",
      explanation: "It has 33,904 miles (54,563 km) of coastline, about 4 times more than runner-up Florida."
    },
    {
      id: 411,
      question: "The largest urban park in the world is 495,000 acres and located in this state",
      options: ["Alaska", "New York", "Pennsylvania", "Florida"],
      correctAnswer: "Alaska",
      explanation: "Chugach State Park, established in 1970, is located entirely within the Anchorage metropolitan area."
    },
    {
      id: 412,
      question: "This state's capital is the largest by land area, at 3,255 sq miles.",
      options: ["Alaska", "Oklahoma", "Florida", "Arizona"],
      correctAnswer: "Alaska",
      explanation: "Juneau is also the only mainland North America capital that is not connected by road to the rest of the state or to North America."
    },
    {
      id: 413,
      question: "This state has the longest border with another country, at 1,538 miles",
      options: ["Alaska", "Michigan", "Texas", "Maine"],
      correctAnswer: "Alaska",
      explanation: "Texas has a 1,241 mile border with Mexico."
    },
    {
      id: 414,
      question: "The king, or Chinook, salmon is the official fish of Oregon and of this state.",
      options: ["Alaska", "Washington", "Maine", "Colorado"],
      correctAnswer: "Alaska",
      explanation: "The largest of the Pacific salmon, it is anadromous, meaning it migrates from the sea to freshwater rivers to spawn."
    },
    {
      id: 415,
      question: "This state has the most volcanoes, with 141.",
      options: ["Alaska", "Hawaii", "California", "Oregon"],
      correctAnswer: "Alaska",
      explanation: "California is a distant second, with 18, and Oregon has 17, but the largest volcano in the world is Mauna Loa in Hawaii."
    },
    {
      id: 416,
      question: "This state is the easternmost, westernmost and northernmost.",
      options: ["Alaska", "Florida", "Hawaii", "Maine"],
      correctAnswer: "Alaska",
      explanation: "The Aleutian Islands cross the 180 degree longitude mark, which makes the state both easternmost and westernmost."
    },
    {
      id: 417,
      question: "This state has the highest percentage of men, at over 52%.",
      options: ["Alaska", "California", "New York", "Maine"],
      correctAnswer: "Alaska",
      explanation: "The US overall is 50.8% female, and only 10 states have more men than women."
    },
    {
      id: 418,
      question: "In this state, you can find the San Francisco mountain range, with its high point of Humphrey's Peak.",
      options: ["Arizona", "California", "Nevada", "New Mexico"],
      correctAnswer: "Arizona",
      explanation: "North of Flagstaff, Humphrey's Peak sits at 12,633 ft (3,851m)."
    },
    {
      id: 419,
      question: "Hawaii was the 50th state, Alaska was the 49th. Which state was the 48th (in 1912)?",
      options: ["Arizona", "Utah", "Idaho", "Oregon"],
      correctAnswer: "Arizona",
      explanation: "It was the last of the contiguous states to be admitted, on Feb 14 of that year."
    },
    {
      id: 420,
      question: "Lemonade is the official beverage of this desert state",
      options: ["Arizona", "Utah", "Nevada", "New Mexico"],
      correctAnswer: "Arizona",
      explanation: "It became such in 2019, due to the efforts of a local teenager."
    },
    {
      id: 421,
      question: "The town of Tombstone in this state is known as 'The Town Too Tough To Die', and is famous for a gunfight in 1881.",
      options: ["Arizona", "New Mexico", "Texas", "Nevada"],
      correctAnswer: "Arizona",
      explanation: "While the shootout is widely believed to have had Wyatt Earp as the central figure, it was actually his brother Virgil who was the marshal of Tombstone at the time."
    },
    {
      id: 422,
      question: "You will find the London Bridge, that once spanned the River Thames, in Lake Havasu City in this state.",
      options: ["Arizona", "New Mexico", "Colorado", "Nevada"],
      correctAnswer: "Arizona",
      explanation: "It was shipped via the Panama Canal to California, then transported by truck to Arizona in 1968."
    },
    {
      id: 423,
      question: "The world's first professional rodeo took place in Prescott, in this state in 1888, before it was even a state.",
      options: ["Arizona", "Wyoming", "Montana", "Texas"],
      correctAnswer: "Arizona",
      explanation: "While the first rodeo was held in Cheyenne, WY, Arizona was the first to charge admission and award prizes."
    },
    {
      id: 424,
      question: "The only US interstate highway with distances listed in meters and kilometers is found in this state.",
      options: ["Arizona", "California", "Maine", "Michigan"],
      correctAnswer: "Arizona",
      explanation: "When I-19 was re-signed in 1980, the US was on a (failed) push to adopt the metric system, so this road connecting Nogales to Tucson has distances in metric, but the speed limit signs use MPH."
    }
  ],
  'government-trivia': [
    {
      id: 301,
      question: "How many branches are in the U.S. federal government?",
      options: ["Two", "Three", "Four", "Five"],
      correctAnswer: "Three",
      explanation: "The U.S. federal government is made up of three branches: the Legislative (makes laws), the Executive (carries out laws), and the Judicial (evaluates laws)."
    },
    {
      id: 302,
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "John Adams", "Abraham Lincoln", "George Washington"],
      correctAnswer: "George Washington",
      explanation: "George Washington served as the first President of the United States from 1789 to 1797, after leading the Continental Army to victory in the Revolutionary War."
    },
    {
      id: 303,
      question: "What are the two parts of the U.S. Congress?",
      options: ["The Senate and House of Representatives", "The Supreme Court and Federal Courts", "The President and Vice President", "The Democratic and Republican Parties"],
      correctAnswer: "The Senate and House of Representatives",
      explanation: "The U.S. Congress is the bicameral legislature of the federal government, consisting of two chambers: the Senate and the House of Representatives."
    },
    {
      id: 304,
      question: "For how long is a U.S. Senator's term?",
      options: ["2 years", "4 years", "6 years", "8 years"],
      correctAnswer: "6 years",
      explanation: "Senators are elected to serve six-year terms. Elections are staggered so that approximately one-third of the Senate is up for reelection every two years."
    },
    {
      id: 305,
      question: "What is the supreme law of the land in the United States?",
      options: ["The Declaration of Independence", "The Bill of Rights", "The U.S. Constitution", "The Federalist Papers"],
      correctAnswer: "The U.S. Constitution",
      explanation: "The U.S. Constitution is the supreme law of the United States. It is the framework for the federal government and delineates the rights of citizens."
    }
  ],
  'custom-trivia': [],
};

// Create a mutable copy for in-memory operations.
export const triviaData: TriviaData = JSON.parse(JSON.stringify(originalTriviaData));

// Function to load all questions and combine with localStorage
const loadQuestions = (category: string): Question[] => {
  // Always start with the pristine, original questions for the category.
  const baseQuestions = [...(originalTriviaData[category] || [])];
  
  if (typeof window !== 'undefined') {
    const storedQuestions = localStorage.getItem(category);
    if (storedQuestions) {
      try {
        const parsedStoredQuestions: Question[] = JSON.parse(storedQuestions);
        // Combine base questions with stored questions, ensuring no duplicates by ID
        const allQuestionsMap = new Map<number, Question>();
        baseQuestions.forEach(q => allQuestionsMap.set(q.id, q));
        parsedStoredQuestions.forEach(q => allQuestionsMap.set(q.id, q));
        return Array.from(allQuestionsMap.values());
      } catch (e) {
        console.error("Failed to parse questions from localStorage", e);
        return baseQuestions;
      }
    }
  }
  return baseQuestions;
};


export const getQuestionsByCategory = (category: string): Question[] => {
  return loadQuestions(category);
};
