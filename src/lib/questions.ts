
export interface Question {
  id: number;
  question: string;
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
