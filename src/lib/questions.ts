
export interface Question {
  id: number;
  question: string;
  imageUrl?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const triviaData: { [key: string]: Question[] } = {
  'general-trivia': [
    {
      id: 1,
      question: "Which land mammal has the most teeth?",
      options: ["Giant armadillo", "Domestic dog", "Lion", "Sloth"],
      correctAnswer: "Giant armadillo",
      explanation: "They have 80-100 teeth, but snails win the award for most teeth of any animal, with up to 25,000 tiny teeth to chew on the vegetables you are trying to grow."
    },
    {
      id: 2,
      question: "What is the name of the patient in the game Operation?",
      options: ["Cavity Sam", "Bob the Body", "Fat Freddy", "He has no name"],
      correctAnswer: "Cavity Sam",
      explanation: "John Spinello designed the game and sold it to a toy designer for $500 and the promise of a job when he graduated - which he did not get."
    },
    {
      id: 3,
      question: "Where did Calypso music originate?",
      options: ["Trinidad & Tobago", "Jamaica", "Barbados", "Cuba"],
      correctAnswer: "Trinidad & Tobago",
      explanation: "It has its origins in West Africa and the word may come from the Efik phrase '''ka isu''', meaning '''go on!'''"
    },
    {
      id: 4,
      question: "The tiny pocket in Levi's denim jeans was meant to hold this.",
      options: ["A pocket watch", "Coins", "A key", "One extra bullet"],
      correctAnswer: "A pocket watch",
      explanation: "The famous copper rivets were placed at all the stress points to make the pants last longer."
    },
    {
      id: 5,
      question: "What is the term for when flocks of starlings swoop and swirl in unison?",
      options: ["Murmuration", "Confabulation", "Auscultation", "Ornithation"],
      correctAnswer: "Murmuration",
      explanation: "Clarice Starling, plyaed by Jodie Foster in the movie, was the fictional protagonist of the Silence of the Lambs."
    },
    {
      id: 6,
      question: "Which of the following is NOT considered a star (stellar) remnant?",
      options: ["Red giant", "White dwarf", "Black hole", "Neutron star"],
      correctAnswer: "Red giant",
      explanation: "A red giant is a late phase star, and our own sun will become one in about 5 billion years, at which point it will likely consume Mars, Venus and Earth."
    },
    {
      id: 7,
      question: "If you straightened the groove on a typical 12-inch music album, how far would the line be (in feet)?",
      options: ["1,500", "500", "3,000", "5,280"],
      correctAnswer: "1,500",
      explanation: "A typical LP would have about 18-22 minutes of music per side, with about 667 threads."
    },
    {
      id: 8,
      question: "This product was originally designed in Cincinnatti in the 1930s by a soap manufacturer and went on to become a child's toy still sold today.",
      options: ["Play Doh", "Slinky", "Shrinky Dinks", "Slime"],
      correctAnswer: "Play Doh",
      explanation: "It was originally used to remove coal residue from walls when coal was used to heat homes."
    },
    {
      id: 9,
      question: "The inventor of this widely consumed drink hoped to combat morphine addiction with his product.",
      options: ["Coca Cola", "Dr Pepper", "Vernor's Ginger Ale", "Moxie"],
      correctAnswer: "Coca Cola",
      explanation: "It should not be confused with Coca Colla, a Bolivian energy drink made since 2010 that contains actual coca leaf extract."
    },
    {
      id: 10,
      question: "This mouthwash was originally developed as a surgical antiseptic.",
      options: ["Listerine", "Scope", "Cepacol", "Oral B"],
      correctAnswer: "Listerine",
      explanation: "Dr Joseph Lister was the first to note that surgical dressings treated with phenol would cause fewer infections. The antiseptic was named in honor of him."
    },
    {
      id: 11,
      question: "Rogaine's original purpose was to treat this common medical condition.",
      options: ["High blood pressure", "Erectile dysfunction", "High cholesterol", "Diabetes"],
      correctAnswer: "High blood pressure",
      explanation: "Interestingly, rogaining is an orienteering sport of long-distance cross-country navigation where events can last 24 hours. "
    },
    {
      id: 12,
      question: "Bubble wrap was originally intended to be a new kind of _____.",
      options: ["Wallpaper", "Children's toy", "Surgical dressing", "Furniture cover"],
      correctAnswer: "Wallpaper",
      explanation: "The first widespread use of the material in packaging was in 1960 with IBM 1401 computers, the '''Model T''' of computers."
    },
    {
      id: 13,
      question: "This British royal is pictured on every bottle of Bombay Sapphire gin, even though the gin was first released in 1986, long after this ruler had died.",
      options: ["Queen Victoria", "King George", "Queen Elizabeth", "King Edward"],
      correctAnswer: "Queen Victoria",
      explanation: "Some of the unique ingredients of this gin include orris root, cubeb and grains of paradise."
    },
    {
      id: 14,
      question: "A group of cobras is known as a(n) ________.",
      options: ["Quiver", "Gaggle", "Murder", "Aspen"],
      correctAnswer: "Quiver",
      explanation: "Quiver of Cobras is also book 2 of 3 in the Fractured Faery series by Helen Harper."
    },
    {
      id: 15,
      question: "This airline was the first to introduce online check in, in 1999.",
      options: ["Alaska Airlines", "Southwest", "United", "American"],
      correctAnswer: "Alaska Airlines",
      explanation: "It began as McGee Airways in 1932, flying between Anchorage and Bristol Bay."
    },
    {
      id: 16,
      question: "Niagara Falls consists of three falls, American, Horseshoe, and _____ (the smallest).",
      options: ["Bridal Veil", "Canadian", "Saddle", "Horsetail"],
      correctAnswer: "Bridal Veil",
      explanation: "Formed by the Niagara River, which flows north from Lake Erie to Lake Ontario, the Falls have a height of 187 ft (57 m)."
    },
    {
      id: 17,
      question: "The only two airlines that ever flew the Concorde were British Air and ___.",
      options: ["Air France", "American Airlines", "Lufthansa", "Virgin Air"],
      correctAnswer: "Air France",
      explanation: "The plane could cruise at Mach 2.04 (1,347 mph / 2,167 km/h) and burned 4,800 gallons of fuel per hour at 60,000 feet."
    },
    {
      id: 18,
      question: "This extremely busy airport was initially called Idlewild airport, before it was named after the 35th president.",
      options: ["John F Kennedy International", "Reagan Washington National", "George Bush Intercontinental", "Gerald Ford International"],
      correctAnswer: "John F Kennedy International",
      explanation: "Initially built to relieve some of the crowding at LaGuardia Airport, it was named after a golf course that it was built over. "
    },
    {
      id: 19,
      question: "The world's oldest writing system originated in Mesopotamia about 5,000 years ago.",
      options: ["Cuneiform", "Hieroglyphics", "Elamite", "Indus"],
      correctAnswer: "Cuneiform",
      explanation: "Originally used for the Sumerian language starting around 3,300 BCE, it was used until the first century CE. "
    },
    {
      id: 20,
      question: "This transcontinental city used to be known as Constantinople.",
      options: ["Istanbul", "Thessaloniki", "Ankara", "Sarajevo"],
      correctAnswer: "Istanbul",
      explanation: "The song '''Istanbul (Not Constantinople)''' by They Might Be Giants appeared on the 1990 album Flood, and includes the line, '''Why did Constantinople get the works? That's nobody's business but the Turks.'''"
    },
    {
      id: 21,
      question: "This soft drink, invented in the 1860s, is the oldest soft drink in America.",
      options: ["Vernor's Ginger Ale", "Hires Root Beer", "Moxie", "Coca-Cola"],
      correctAnswer: "Vernor's Ginger Ale",
      explanation: "It was created by a Detroit pharmacist, James Vernor, who was trying to create a cure for an upset stomach."
    },
    {
      id: 22,
      question: "This American beer company, founded in 1844, is the largest in the United States.",
      options: ["Pabst", "Anheuser-Busch", "Coors", "Miller"],
      correctAnswer: "Pabst",
      explanation: "The company won its first '''blue ribbon''' in 1882, and has been an American icon ever since."
    },
    {
      id: 23,
      question: "This popular Italian dessert consists of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavored with cocoa.",
      options: ["Tiramisu", "Cannoli", "Panna Cotta", "Gelato"],
      correctAnswer: "Tiramisu",
      explanation: "The name means '''pick me up''' or '''cheer me up''', and it is a relatively modern invention, first appearing in the 1960s."
    },
    {
      id: 24,
      question: "What is the most consumed manufactured drink in the world?",
      options: ["Tea", "Coffee", "Beer", "Coca-Cola"],
      correctAnswer: "Tea",
      explanation: "It is the second most consumed drink overall, after water."
    },
    {
      id: 25,
      question: "This is the most expensive spice in the world by weight.",
      options: ["Saffron", "Vanilla", "Cardamom", "Cloves"],
      correctAnswer: "Saffron",
      explanation: "It takes about 170,000 crocus flowers to produce one pound of saffron."
    },
    {
      id: 26,
      question: "Which country is the largest producer of coffee in the world?",
      options: ["Brazil", "Vietnam", "Colombia", "Indonesia"],
      correctAnswer: "Brazil",
      explanation: "Brazil has been the world's largest coffee producer for the last 150 years."
    },
    {
      id: 27,
      question: "What is the name for a professional wine taster?",
      options: ["Sommelier", "Oenologist", "Vintner", "Cellar master"],
      correctAnswer: "Sommelier",
      explanation: "A sommelier is a wine steward, but also a professional with formal training in all aspects of wine service as well as wine and food pairing."
    },
    {
      id: 28,
      question: "This popular cocktail consists of rum, lime juice, and sugar.",
      options: ["Daiquiri", "Margarita", "Mojito", "Pina Colada"],
      correctAnswer: "Daiquiri",
      explanation: "It was invented in the town of Daiquirí in Cuba, and was a favorite drink of author Ernest Hemingway."
    },
    {
      id: 29,
      question: "Which country is the origin of the beer style '''Pilsner'''?",
      options: ["Czech Republic", "Germany", "Belgium", "Netherlands"],
      correctAnswer: "Czech Republic",
      explanation: "It was first brewed in the city of Plzeň (Pilsen) in 1842."
    },
    {
      id: 30,
      question: "The Fear of missing out, or FOMO, was added to the Merriam Webster dictionary in this year.",
      options: ["2016", "2010", "2020", "2005"],
      correctAnswer: "2016",
      explanation: "The term was coined by marketing strategist Dan Herman in the late 1990s."
    },
    {
      id: 31,
      question: "This fictional city is the home of Batman.",
      options: ["Gotham City", "Metropolis", "Star City", "Central City"],
      correctAnswer: "Gotham City",
      explanation: "Gotham City is often depicted as a dark and gritty metropolis, inspired by New York City."
    },
    {
      id: 32,
      question: "Which actor played the character of Iron Man in the Marvel Cinematic Universe?",
      options: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"],
      correctAnswer: "Robert Downey Jr.",
      explanation: "He first appeared as Tony Stark/Iron Man in the 2008 film '''Iron Man'''."
    },
    {
      id: 33,
      question: "Who wrote the novel '''Pride and Prejudice'''?",
      options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Mary Shelley"],
      correctAnswer: "Jane Austen",
      explanation: "The novel was first published in 1813 and is one of the most popular novels in English literature."
    },
    {
      id: 34,
      question: "This artist is known for painting the Mona Lisa.",
      options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
      correctAnswer: "Leonardo da Vinci",
      explanation: "The Mona Lisa is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci that has been described as '''the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world'''."
    },
    {
      id: 35,
      question: "What is the name of the wizard in '''The Lord of the Rings'''?",
      options: ["Gandalf", "Saruman", "Radagast", "Albus Dumbledore"],
      correctAnswer: "Gandalf",
      explanation: "Gandalf is a protagonist in J. R. R. Tolkien's novels The Hobbit and The Lord of the Rings."
    },
    {
      id: 36,
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
      explanation: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury."
    },
    {
      id: 37,
      question: "What is the capital of Japan?",
      options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
      correctAnswer: "Tokyo",
      explanation: "Tokyo is the capital and largest city of Japan, located on the eastern coast of the main island Honshu."
    },
    {
      id: 38,
      question: "Who was the first person to step on the moon?",
      options: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin"],
      correctAnswer: "Neil Armstrong",
      explanation: "He was an American astronaut and the first person to walk on the Moon. He was a participant in the Apollo 11 mission, which landed on the Moon on July 20, 1969."
    },
    {
      id: 39,
      question: "What is the largest ocean on Earth?",
      options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      correctAnswer: "Pacific Ocean",
      explanation: "It covers about one-third of the surface of the Earth and is the largest and deepest of the world's five oceans."
    },
    {
      id: 40,
      question: "Which country is home to the kangaroo?",
      options: ["Australia", "New Zealand", "South Africa", "Brazil"],
      correctAnswer: "Australia",
      explanation: "Kangaroos are marsupials that are native to Australia. They are the largest marsupials in the world."
    },
    {
      id: 41,
      question: "Who painted the ceiling of the Sistine Chapel?",
      options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
      correctAnswer: "Michelangelo",
      explanation: "The Sistine Chapel ceiling, painted by Michelangelo between 1508 and 1512, is a cornerstone work of High Renaissance art."
    },
    {
      id: 42,
      question: "What is the smallest country in the world?",
      options: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
      correctAnswer: "Vatican City",
      explanation: "Vatican City is an independent city-state enclaved within Rome, Italy. With an area of 44 hectares (110 acres), and a population of about 825, it is the smallest sovereign state in the world in both area and population."
    },
    {
      id: 43,
      question: "Who wrote the play '''Romeo and Juliet'''?",
      options: ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "Thomas Kyd"],
      correctAnswer: "William Shakespeare",
      explanation: "Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young star-crossed lovers whose deaths ultimately reconcile their feuding families."
    },
    {
      id: 44,
      question: "What is the currency of the United Kingdom?",
      options: ["Pound sterling", "Euro", "Dollar", "Yen"],
      correctAnswer: "Pound sterling",
      explanation: "The pound sterling, commonly known as the pound, is the official currency of the United Kingdom, Jersey, Guernsey, the Isle of Man, Gibraltar, and South Georgia and the South Sandwich Islands."
    },
    {
      id: 45,
      question: "Who discovered penicillin?",
      options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"],
      correctAnswer: "Alexander Fleming",
      explanation: "Sir Alexander Fleming was a Scottish physician and microbiologist, best known for his discovery of the antibiotic substance penicillin in 1928."
    },
    {
      id: 46,
      question: "Which is the longest river in the world?",
      options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
      correctAnswer: "Nile",
      explanation: "The Nile is a major north-flowing river in northeastern Africa, and is the longest river in the world, though some sources cite the Amazon River as the longest."
    },
    {
      id: 47,
      question: "What is the main ingredient in guacamole?",
      options: ["Avocado", "Tomato", "Onion", "Cilantro"],
      correctAnswer: "Avocado",
      explanation: "Guacamole is an avocado-based dip, spread, or salad first developed by the Aztecs in what is now Mexico."
    },
    {
      id: 48,
      question: "Who is the lead singer of the band Queen?",
      options: ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
      correctAnswer: "Freddie Mercury",
      explanation: "Freddie Mercury was a British singer, songwriter, record producer, and lead vocalist of the rock band Queen."
    },
    {
      id: 49,
      question: "Which of these is a primary color?",
      options: ["Blue", "Green", "Orange", "Purple"],
      correctAnswer: "Blue",
      explanation: "The three primary colors are red, yellow, and blue. They are the only colors that cannot be made by mixing other colors."
    },
    {
      id: 50,
      question: "How many planets are in our solar system?",
      options: ["8", "9", "7", "10"],
      correctAnswer: "8",
      explanation: "The eight planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Pluto was demoted to a dwarf planet in 2006."
    },
    {
      id: 684,
      question: "On which of the Hawaiian Islands would you find Honolulu?",
      options: ["Oahu", "Hawaii", "Maui", "Kona"],
      correctAnswer: "Oahu",
      explanation: "Oahu is the third largest Hawaiin island but has 70% of the state's population."
    },
    {
      id: 697,
      question: "The first board game sold on Amazon was ____.",
      options: ["Cranium", "Monopoly", "Stratego", "Clue"],
      correctAnswer: "Cranium",
      explanation: "It was also the first game sold at Barnes and Noble bookstores, and was bought by Hasbro in 2008 for $77 million. The maker of Politics: The Game would happily consider a similar offer from Hasbro. Just sayin'."
    },
    {
      id: 701,
      question: "The deepest and largest volume lake in the world is _______.",
      options: ["Lake Baikal", "Crater Lake", "Lake Superior", "Lake Tanganyika"],
      correctAnswer: "Lake Baikal",
      explanation: "It is more than a mile deep and contains 5,670 cubic miles (23,615 cubic kilometers) of water, about 22% of all fresh water on earth - more than all 5 Great Lakes combined."
    },
    {
      id: 702,
      question: "What is the name of the central bank of the US?",
      options: ["Federal Reserve System", "Bank of America", "The Central Bank", "US Bank"],
      correctAnswer: "Federal Reserve System",
      explanation: "The Fed, as it is often known, was created in 1913 to maximize employment, control inflation and control long-term interest rates. It now has many additional functions, such as helping bail out large banks that have nothing but the interest of the American public in mind."
    },
    {
      id: 703,
      question: "What is the largest denomination of currency in circulation in the US in 2025?",
      options: ["$100", "$500", "1,000", "10,000"],
      correctAnswer: "$100",
      explanation: "The larger notes were used at various times, but when they became a favorite of criminals and counterfeiters, President Nixon outlawed their use in 1969."
    },
    {
      id: 704,
      question: "What juice concentrate is found in Mountain Dew soda?",
      options: ["Orange", "Lemon", "Lime", "Strawberry"],
      correctAnswer: "Orange",
      explanation: "It was originally used as a mixer for whiskey, and its name was a joking reference to moonshine. Homer Simpson, when given the choice, preferred crab juice over Mountain Dew."
    },
    {
      id: 705,
      question: "The ___ is the only true freshwater seal on the planet, living in Lake Baikal.",
      options: ["Nerpa", "Monk seal", "Ross seal", "Elephant seal"],
      correctAnswer: "Nerpa",
      explanation: "They can stay under water for up to 70 minutes, thanks in part to having 2 more liters of blood in their body than seals of comparable size."
    },
    {
      id: 706,
      question: "Swanson rolled out the first national TV dinner in 1953 with a 3-compartment aluminum tray, 2 for side dishes, and one for this meat.",
      options: ["Turkey", "Meat loaf", "Chicken", "Pork chops"],
      correctAnswer: "Turkey",
      explanation: "The idea came about because of low Thanksgiving turkey sales that year, which left them with 260 tons of turkey to sell. The original TV dinners were $0.98 (about $12 in 2025)."
    },
    {
      id: 707,
      question: "This comfort food is the official state food of Texas.",
      options: ["Chili", "Pecan pie", "Tacos", "Meatloaf"],
      correctAnswer: "Chili",
      explanation: "From the mid to late 1800s, chili was served regularly to prison inmates in Texas. It is claimed that prisons were rated on the quality of their chili, and prisoners often requested the recipe after their release."
    },
    {
      id: 708,
      question: "In Einstein's famous equation, E=mc2, what does the C represent?",
      options: ["Speed of light", "Avogadro's constant", "Carbon", "Planck's constant"],
      correctAnswer: "Speed of light",
      explanation: "C is equal to 299,792,458 meters per second, or about 671 million miles per hour."
    },
    {
      id: 709,
      question: "Einstein won the 1921 Nobel Prize in physics for explaining what?",
      options: ["Photoelectric effect", "Relativity", "Gravitational pull", "Mechanics"],
      correctAnswer: "Photoelectric effect",
      explanation: "The photoelectric effect is when electrons are emitted when light hits a material. Obviously."
    },
    {
      id: 710,
      question: "Einstein was offered the presidency of this country in 1952.",
      options: ["Israel", "Switzerland", "USA", "Austria"],
      correctAnswer: "Israel",
      explanation: "Einstein gave his first wife all of his Novel Prize money as part of the divorce agreement."
    },
    {
      id: 711,
      question: "Where in the human body would you find the scaphoid bone?",
      options: ["Wrist", "Ear", "Foot", "Spine"],
      correctAnswer: "Wrist",
      explanation: "Scaphoid fractures are the most common wrist bone fracture, and they are slow to heal due to a poor blood supply."
    },
    {
      id: 712,
      question: "The only bone in the body that does not articulate (join) with another bone is the ___.",
      options: ["Hyoid", "Ulna", "Triquetrum", "Sacrum"],
      correctAnswer: "Hyoid",
      explanation: "It helps with breathing, swallowing and speaking, and even helps maintain position of the head."
    },
    {
      id: 713,
      question: "The total number of vertebrae in a typical human is ___.",
      options: ["33", "27", "19", "41"],
      correctAnswer: "33",
      explanation: "About 10% of people will have more than, or less than, 33 vertebrae. This is how we know they are vampires."
    },
    {
      id: 714,
      question: "This cell fragment is responsible for blood clotting.",
      options: ["Platelets", "Lymphocytes", "Osteophytes", "Hematocytes"],
      correctAnswer: "Platelets",
      explanation: "Aspirin permanently stops platelets from being able to form clots, an effect which lasts for about a week after each dose of aspirin."
    },
    {
      id: 715,
      question: "The tallest waterfall in the world is ______ Falls.",
      options: ["Angel", "Niagara", "Yosemite", "Langfossen"],
      correctAnswer: "Angel",
      explanation: "These Venezuelan falls have a total drop of 3,212 ft (979 m) and a plunge of 2,648 ft (807 m)."
    },
    {
      id: 716,
      question: "Of the following mammals, which has the most cervical (neck) vertebrae?",
      options: ["Three-toed sloth", "Giraffe", "Human", "Manatee"],
      correctAnswer: "Three-toed sloth",
      explanation: "They typically have 9 cervical vertebrae, which allows for greater head swiveling. Manatees have 6. All other mammals have 7."
    },
    {
      id: 717,
      question: "The grayish-white ice crystals that form when water vapor deposits onto vegetation or other surfaces are called ____.",
      options: ["Hoar frost", "Permafrost", "Rime ice", "Advection frost"],
      correctAnswer: "Hoar frost",
      explanation: "\"Hoar\" comes from an old English word meaning \"showing signs of age\", as this type of frost makes trees or plants look like they have white hair."
    },
    {
      id: 718,
      question: "Sara Blakely was selling fax machines door-to-door when she came up with the idea for ___ in 2000.",
      options: ["Spanx", "Super Soakers", "Crocs", "USB thumb drives"],
      correctAnswer: "Spanx",
      explanation: "She invested her $5,000 life savings to start the company, which grossed an estimated $400 million in 2024."
    },
    {
      id: 719,
      question: "After Thanksgiving, this day has the highest food consumption per person.",
      options: ["Super Bowl Sunday", "July 4th", "Christmas Day", "New Year's Eve"],
      correctAnswer: "Super Bowl Sunday",
      explanation: "The average American consumes 4.5 times the recommended daily caloric intake on Super Bowl Sunday (slightly ahead of the typical daily overconsumption rate of 1.4 times the recommended intake)."
    },
    {
      id: 720,
      question: "Where is KFC known as PFK?",
      options: ["Quebec", "Germany", "Malaysia", "Japan"],
      correctAnswer: "Quebec",
      explanation: "It stands for Poulet Frit Kentucky, the French translation of Kentucky Fried Chicken."
    },
    {
      id: 721,
      question: "These shoes were banned by the NBA when first introduced in 1985.",
      options: ["Air Jordans", "Starburys", "Converse All Stars", "Adidas KB8"],
      correctAnswer: "Air Jordans",
      explanation: "The color scheme violated the League's uniform rules, and Jordan was fined $5,000 every time he wore them in a game. Nike paid the fines."
    },
    {
      id: 722,
      question: "The all-time leader in the NBA for blocks is ___.",
      options: ["Hakeem Olajuwon", "Michael Jordan", "Tim Duncan", "Kareem Abdul Jabbar"],
      correctAnswer: "Hakeem Olajuwon",
      explanation: "The Nigerian played almost his entire career with Houston, and had 3,830 blocks."
    },
    {
      id: 723,
      question: "The first balloon at a Macy's Thanksgiving parade was of this character, in 1927.",
      options: ["Felix the Cat", "Mickey Mouse", "Snoopy", "Charlie Brown"],
      correctAnswer: "Felix the Cat",
      explanation: "His balloon was paraded on stilts, as only regular air was used, not helium. Felix last appeared in 2016."
    },
    {
      id: 724,
      question: "The mask Michael Myers wore in Halloween was a cast of this actor's face.",
      options: ["William Shatner", "Al Pacino", "Marlon Brando", "Jack Nicholson"],
      correctAnswer: "William Shatner",
      explanation: "The mask was originally used in the award-winning 1975 William Shatner movie The Devil's Rain."
    },
    {
      id: 725,
      question: "Emmental cheese (what we commonly call Swiss cheese) without holes is known as ____ cheese.",
      options: ["Blind", "Gouda", "Camembert", "American"],
      correctAnswer: "Blind",
      explanation: "The holes are actually known as eyes, and are formed by carbon dioxide bubbles being released during the cheesemaking process."
    },
    {
      id: 726,
      question: "This was the person known as Spiderman.",
      options: ["Peter Parker", "Bruce Wayne", "Tony Stark", "Bruce Banner"],
      correctAnswer: "Peter Parker",
      explanation: "He was an orphan raised by Aunt May and Uncle Ben after his parents died in a plane crash."
    },
    {
      id: 727,
      question: "Thor's hammer is more correctly known as ____.",
      options: ["Mjolnir", "Skaoa", "Hreindyri", "Rythja"],
      correctAnswer: "Mjolnir",
      explanation: "Forged by dwarf brothers, the hammer is both a weapon as well as an instrument to confer blessings."
    },
    {
      id: 728,
      question: "The most dangerous thing to come out of Canada since Justin Bieber, this X-Men character has a skeleton and claws made of adamantium.",
      options: ["Wolverine", "Rogue", "Magneto", "Cyclops"],
      correctAnswer: "Wolverine",
      explanation: "Born James Howlett in Alberta, he was the illegitimate son of Thomas Logan, who was the first person Wolverine killed."
    },
    {
      id: 729,
      question: "Wakanda is the source of this metal, the most powerful on earth.",
      options: ["Vibranium", "Molybdenum", "Titanium", "Tantalum"],
      correctAnswer: "Vibranium",
      explanation: "The metal has amazing abilities to capture, store and release energy, and was used in a suit worn by Black Panther, and the shield of Captain America."
    },
    {
      id: 730,
      question: "Peter Quill/Star-Lord, from Guardians of the Galaxy, named his ship the ___ after his first crush, from Who's The Boss?",
      options: ["Milano", "Light", "Winger", "Foster"],
      correctAnswer: "Milano",
      explanation: "A well-known activist, Alyssa Milano appeared in a 2007 commercial for PETA wearing a dress made entirely of vegetables."
    },
    {
      id: 731,
      question: "The original five Avengers included Thor, Ant-Man, the Hulk, Iron Man and ___.",
      options: ["The Wasp", "The Hornet", "Captain America", "Green Lantern"],
      correctAnswer: "The Wasp",
      explanation: "Premiering in September 1963, the Avengers added Captain America in issue #4 when he was thawed from a block of ice."
    },
    {
      id: 732,
      question: "While James Earl Jones voiced him, ___ actually played Darth Vader in the original Star Wars trilogy.",
      options: ["David Prowse", "Anthony Hopkins", "Anthony Daniels", "Andre the Giant"],
      correctAnswer: "David Prowse",
      explanation: "The Brit first gained fame as the Green Cross Man, a safety character in the UK to help pedestrians at intersections."
    },
    {
      id: 733,
      question: "This is the youngest artist to win a Grammy for Album of the Year.",
      options: ["Billie Eilish", "Taylor Swift", "Alanis Morissette", "Barbra Streisand"],
      correctAnswer: "Billie Eilish",
      explanation: "Eilish was 18 when she won. The youngest ever winner was Leah Peasall, age 8, for her work (along with her sisters) on the \"O, Brother, Where Art Thou?\" soundtrack and film."
    },
    {
      id: 734,
      question: "These dogs were bred to hunt badgers, and their name translated into English means 'badger dog'.",
      options: ["Dachshund", "Affenpinscher", "Basenji", "Schnauzer"],
      correctAnswer: "Dachshund",
      explanation: "Jack Ruby, the man who shot Lee Harvey Oswald, had 4 dachsunds at the time, and had one of them, Sheba, with him at the time of the shooting."
    },
    {
      id: 735,
      question: "How many time zones cover the 50 US States?",
      options: ["6", "5", "7", "4"],
      correctAnswer: "6",
      explanation: "If all US territories, possessions and minor outlying islands are included, 11 time zones would be covered."
    },
    {
      id: 736,
      question: "The Eastern time zone covers the greatest number of states, at ___.",
      options: ["23", "25", "32", "14"],
      correctAnswer: "23",
      explanation: "The eastern zone is also the most populated. The least populated time zone is UTC -12, covering 2 uninhabited islands in the Pacific ocean."
    },
    {
      id: 737,
      question: "Gin traditionally gets it flavor from this plant.",
      options: ["Juniper", "Aloe", "Ginseng", "Ginger"],
      correctAnswer: "Juniper",
      explanation: "The European Union differentiates gin into 4 different legal categories: gin, distilled gin, London (or dry) gin, and juniper-flavored spirit drink."
    },
    {
      id: 738,
      question: "In 1975, while sailing from Wisconsin to Detroit, the SS Edmund Fitzgerald sunk in this lake.",
      options: ["Superior", "Ontario", "Huron", "Michigan"],
      correctAnswer: "Superior",
      explanation: "Gordon Lightfoot wrote the classic song \"The Wreck of the Edmund Fitzgerald\" after seeing the name of the ship misspelled after the sinking. He thought it dishonored those killed."
    },
    {
      id: 739,
      question: "From this major US city, you can travel south and enter Canada.",
      options: ["Detroit", "Milwaukee", "Cleveland", "Toledo"],
      correctAnswer: "Detroit",
      explanation: "The city is north of Windsor, Ontario, and is the largest US city on the Canadian border."
    },
    {
      id: 740,
      question: "Homo sapiens translates as ____ man.",
      options: ["Wise", "Gentle", "Tall", "Special"],
      correctAnswer: "Wise",
      explanation: "They are the most abundant species of primate (great ape) and despite all current evidence to the contrary, are considered highly intelligent animals."
    },
    {
      id: 741,
      question: "The first animal to be domesticated by humans was the ___.",
      options: ["Dog", "Goat", "Cat", "Horse"],
      correctAnswer: "Dog",
      explanation: "Dog domestication occurred 20,000-40,000 years ago, based on current evidence. Many would argue that cats have yet to be domesticated."
    },
    {
      id: 742,
      question: "Paddington Bear's favorite snack is ___.",
      options: ["Orange marmalade", "Vegemite", "Chips and beans", "Scotch egg"],
      correctAnswer: "Orange marmalade",
      explanation: "He was a stowaway on a train from Peru, where he was orphaned in an earthquake."
    },
    {
      id: 743,
      question: "Mrs. Who, Mrs. Whatsit and Mrs. Which are all characters from this young adult book.",
      options: ["A Wrinkle in Time", "The Fault in Our Stars", "Harry Potter and the Goblet of Fire", "Hunger Games"],
      correctAnswer: "A Wrinkle in Time",
      explanation: "Written by Madeleine L'Engle, it describes the adventures of a group of kids as they travel through space and time trying to save their father."
    },
    {
      id: 744,
      question: "What is the only landlocked nation in southeast Asia?",
      options: ["Laos", "Cambodia", "Thailand", "Myanmar"],
      correctAnswer: "Laos",
      explanation: "Polygamy is officially a crime in the country, sticky rice is a food staple and it is one of five communist states as of 2025."
    },
    {
      id: 745,
      question: "Matilda Wormwood, from the book Matilda by Roald Dahl, has this superpower.",
      options: ["Telekinesis", "Invisibility", "Flight", "Super strength"],
      correctAnswer: "Telekinesis",
      explanation: "Matilda was 5 1/2 years old in the book, but mysteriously, she became 6 1/2 years old in the movie version..."
    },
    {
      id: 746,
      question: "Who did the Cat in the Hat invite into the house?",
      options: ["Thing 1 and Thing 2", "The Lorax", "Daisy-head Mayzie", "Horton"],
      correctAnswer: "Thing 1 and Thing 2",
      explanation: "Dr Seuss wrote the book in 1957 in an attempt to help address child literacy, and is credited with helping end the use of the Dick and Jane primers."
    },
    {
      id: 747,
      question: "Which children's book heroine lives in \"an old house in Paris covered in vines\"?",
      options: ["Madeline", "Hermione", "Matilda", "Pippi Longstocking"],
      correctAnswer: "Madeline",
      explanation: "She attends a Catholic grade school in Paris and has Miss Clavel as her teacher."
    },
    {
      id: 748,
      question: "In \"Charlotte's Web\", what is the first message Charlotte writes to try and save Wilbur the pig?",
      options: ["\"Some pig\"", "\"Radiant\"", "\"Terrific\"", "\"Humble\""],
      correctAnswer: "\"Some pig\"",
      explanation: "Wilbur is eventually saved from slaughter by Charlotte's work, even though she dies in the end of natural causes."
    },
    {
      id: 749,
      question: "Eloise lives in the \"tippy top\" of this New York hotel.",
      options: ["The Plaza", "The Waldorf Astoria", "The Ritz Carlton", "The St Regis"],
      correctAnswer: "The Plaza",
      explanation: "She lives there with her nanny, her pug Weenie and her turtle Skipperdee. The actual Plaza hotel has an Eloise suite that starts at $1,300 per night."
    },
    {
      id: 750,
      question: "The first professional baseball team (where the whole team was made of salaried players) was the ___.",
      options: ["Cincinnati Red Stockings", "Boston Red Stockings", "Chicago Cubs", "Philadelphia Phillies"],
      correctAnswer: "Cincinnati Red Stockings",
      explanation: "Founded in 1869, the Red Stockings ultimately gave rise to the modern Cincinnati Reds."
    },
    {
      id: 751,
      question: "Which country produces the most olives, growing about 1/3 of the global supply?",
      options: ["Spain", "Italy", "USA", "Greece"],
      correctAnswer: "Spain",
      explanation: "Raw or fresh olives are too bitter to eat and must be cured and fermented."
    },
    {
      id: 752,
      question: "Holly Golightly is a famous character played by Audrey Hepburn in this movie.",
      options: ["Breakfast at Tiffany's", "My Fair Lady", "Charade", "Roman Holiday"],
      correctAnswer: "Breakfast at Tiffany's",
      explanation: "Hepburn won numerous awards, and in 1992 was given the US Presidential Medal of Freedom in honor of her work as a UNICEF Goodwill Ambassador"
    },
    {
      id: 753,
      question: "How long does it take a chicken to make an egg, on average?",
      options: ["24 hours", "30 minutes", "4 hours", "10 hours"],
      correctAnswer: "24 hours",
      explanation: "About 20 hours is spent making the shell, and a new egg starts to form about 30 minutes after the last one is laid."
    },
    {
      id: 754,
      question: "In which country would you find a beach known as the Jurassic Coast?",
      options: ["England", "USA", "Costa Rica", "Namibia"],
      correctAnswer: "England",
      explanation: "The area spans an approximate 185 million year history due to erosion, with rock formations spanning the Triassic, Jurassic and Cretaceous periods."
    },
    {
      id: 755,
      question: "Which chess master did Bobby Fischer defeat in 1972 to become the first US-born world champion?",
      options: ["Boris Spassky", "Gary Kasparov", "Magnus Carlsen", "Alexander Alekhine"],
      correctAnswer: "Boris Spassky",
      explanation: "The match between them was held in Reykjavik, Iceland, and was known as the Match of the Century."
    },
    {
      id: 756,
      question: "In what year did the \"Miracle on Ice\" happen in the Olympics, in tiny Lake Placid, NY?",
      options: ["1980", "1984", "1976", "1972"],
      correctAnswer: "1980",
      explanation: "The US team was a bunch of young college kids playing against a heavily-favored professional team of Soviets."
    },
    {
      id: 757,
      question: "Who did the US ice hockey team defeat to win the gold medal at the 1980 Olympics?",
      options: ["Finland", "USSR (Russia)", "Sweden", "Canada"],
      correctAnswer: "Finland",
      explanation: "Coached by the brilliant but tough Herb Brooks, the Miracle on Ice was named by Sports Illustrated as the greatest sports moment of the 20th century."
    },
    {
      id: 758,
      question: "Mosquitoes prefer this blood type over others.",
      options: ["O", "A", "B", "AB"],
      correctAnswer: "O",
      explanation: "In studies, mosquitoes show a preference for the universal donor."
    },
    {
      id: 759,
      question: "Which two cities are written about in Dickens' \"A Tale of Two Cities\"? London and ___",
      options: ["Paris", "Dublin", "Geneva", "Rome"],
      correctAnswer: "Paris",
      explanation: "Set before and during the French Revolution, it tells the tale of Dr Manette, his 18 year imprisonment and subsequent release."
    },
    {
      id: 760,
      question: "In which city would you find the Spanish Steps?",
      options: ["Rome", "Madrid", "Barcelona", "Paris"],
      correctAnswer: "Rome",
      explanation: "The famous 135 steps connect Piazza di Spagna to Piazza Trinita dei Monti, and are a Rome icon."
    },
    {
      id: 761,
      question: "What does the abbreviation DVD stand for?",
      options: ["Digital Versatile Disc", "Digital Video Device", "Digitized Video Delivery", "Dynamic Video Delivery"],
      correctAnswer: "Digital Versatile Disc",
      explanation: "Released in 1996, they quickly caught on until streaming became the dominant mode for watching shows and films."
    },
    {
      id: 762,
      question: "Aside from Greece, what other country has Greek as the official language?",
      options: ["Cyprus", "Macedonia", "Albania", "Bulgaria"],
      correctAnswer: "Cyprus",
      explanation: "Geographically part of west Asia but culturally linked with southeastern Europe, its other official language is Turkish."
    },
    {
      id: 763,
      question: "What is a young eel called?",
      options: ["Elver", "Fry", "Hatchling", "Smolt"],
      correctAnswer: "Elver",
      explanation: "The giant moray is the largest eel, reaching 13 ft (4 m) in length. Electric eels are not true eels."
    },
    {
      id: 764,
      question: "Alberta is one of the 2 landlocked Canadian provinces. What is the other?",
      options: ["Saskatchewan", "Quebec", "Manitoba", "Ontario"],
      correctAnswer: "Saskatchewan",
      explanation: "More than 500 NHL players have been born in Saskatchewan, more than any other province, US state or European country."
    },
    {
      id: 765,
      question: "Lake Assal is the lowest point on this continent, lying 509 ft (155 m) below sea level.",
      options: ["Africa", "Asia", "Europe", "Australia"],
      correctAnswer: "Africa",
      explanation: "Found in a volcanic crater in Djibouti, it is highly saline and is the 3rd deepest spot on land (behind the Sea of Galilee and the Dead Sea)."
    },
    {
      id: 766,
      question: "The Headless Horseman was featured in what story by Washington Irving?",
      options: ["The Legend of Sleepy Hollow", "The Telltale Heart", "The Monkey's Paw", "The Pit and the Pendulum"],
      correctAnswer: "The Legend of Sleepy Hollow",
      explanation: "The Horseman was a Hessian soldier decapitated in battle, and each night he arises from the grave to look for his missing head."
    },
    {
      id: 767,
      question: "What was the name of Paul Bunyan's pet blue ox?",
      options: ["Babe", "Charlotte", "Wilbur", "Buck"],
      correctAnswer: "Babe",
      explanation: "It took 5 giant storks to deliver the baby Paul to his parents, and his bed was a lumber wagon."
    },
    {
      id: 768,
      question: "In which country might you find the Loch Ness monster?",
      options: ["Scotland", "Wales", "Ireland", "England"],
      correctAnswer: "Scotland",
      explanation: "Nessie was first written about in the 7th century, where it was claimed a local man was killed by a 'water beast' from the nearby lake."
    },
    {
      id: 769,
      question: "Which saint is credited with driving snakes out of Ireland?",
      options: ["Patrick", "Michael", "Thomas", "Nicholas"],
      correctAnswer: "Patrick",
      explanation: "Legend has it that he banished snakes to the sea because they interrupted his fast. The reality is that Ireland was already snake-free and there is no evidence snakes were ever in Ireland."
    },
    {
      id: 770,
      question: "On Seinfeld, what was George's preferred pretend career?",
      options: ["Architect", "Bra salesman", "Real estate agent", "Baseball player"],
      correctAnswer: "Architect",
      explanation: "George often lied about his career, but architect was his go-to pretend career."
    },
    {
      id: 771,
      question: "Which Kardashian has failed the bar exam three times?",
      options: ["Kim", "Khloe", "Kendall", "Kylie"],
      correctAnswer: "Kim",
      explanation: "California is one of 6 states that allow someone to become a lawyer by 'apprenticing' and ultimately taking the bar exam."
    },
    {
      id: 772,
      question: "As of December 2024, which Taylor Swift album has sold the most copies?",
      options: ["1989", "Fearless", "21", "Red"],
      correctAnswer: "1989",
      explanation: "The little-known girlfriend of Travis Kelce, she sold over 14 million copies of 1989."
    },
    {
      id: 773,
      question: "This compound, found in the leaves of poison oak as well as the skin of mangoes, is what can cause the itchy allergic skin reaction in some people.",
      options: ["Urushiol", "Chlorophyll", "Calcium oxalate", "Phorbol"],
      correctAnswer: "Urushiol",
      explanation: "The molecule passes through the outer skin layer and activates the immune system, although in about 1/4 of people, it causes no symptoms."
    },
    {
      id: 774,
      question: "Which British monarch is famous for having had six wives?",
      options: ["Henry VIII", "Richard III", "Charles II", "Henry VII"],
      correctAnswer: "Henry VIII",
      explanation: "He was so desperate to divorce his first wife that he made himself the head of the church to try and get the marriage annulled, and he beheaded 2 others."
    },
    {
      id: 775,
      question: "The star from the musical Hamilton, Lin Manuel Miranda, had a brief cameo in the final season of this HBO hit.",
      options: ["The Sopranos", "The West Wing", "The Wire", "Girls"],
      correctAnswer: "The Sopranos",
      explanation: "He portrayed a bellman at a hotel that Tony Soprano was entering."
    },
    {
      id: 776,
      question: "Which of these Central American countries does not celebrate its independence from Spain on September 15th?",
      options: ["Belize", "Costa Rica", "El Salvador", "Nicaragua"],
      correctAnswer: "Belize",
      explanation: "While the rest of Central America celebrates its independence from Spain (in 1821) on September 15 each year, Belize was part of the British Commonweatlh until September 12, 1981."
    },
    {
      id: 777,
      question: "The world's most populous metropolitan area is ______, with over 37 million people.",
      options: ["Tokyo", "Mexico City", "Beijing", "Los Angeles"],
      correctAnswer: "Tokyo",
      explanation: "As of 2024, it had approximately 37 million people, and at any given time, almost 36 million of them are taking a selfie."
    },
    {
      id: 778,
      question: "This electronic musical instrument is played without any physical contact.",
      options: ["Theremin", "Glass harmonica", "Jaw harp", "Hydraulophone"],
      correctAnswer: "Theremin",
      explanation: "The theremin is typically used to establish a feeling of eeriness or etherealness."
    },
    {
      id: 779,
      question: "This bird can stay in flight for up to 300 days at a time.",
      options: ["Common swift", "Albatross", "Pigeon", "Frigatebird"],
      correctAnswer: "Common swift",
      explanation: "While the albatross may not touch land for up to 6 years, it does not stay in flight as long as the swift."
    },
    {
      id: 780,
      question: "What star cluster is represented in the Subaru logo?",
      options: ["Pleiades", "Orion", "Ursa Major", "Ursa minor"],
      correctAnswer: "Pleiades",
      explanation: "Also known as the Seven Sisters, the cluster is about 444 light years away, meaning it is about 2.6e+15 miles away."
    },
    {
      id: 781,
      question: "The SS Minnow from Gilligan's Island was named after Newton Minow, who was a chairman of the ____.",
      options: ["FCC (Federal Communications Commission)", "DEA (Drug Enforcement Agency)", "NASA (National Aeronautics and Space Agency)", "CIA (Central Intelligence Agency)"],
      correctAnswer: "FCC (Federal Communications Commission)",
      explanation: "Minow famously described TV as a \"vast wasteland\" and advocated for programming that was more beneficial to the public. The producer of Gilligan's Island named the boat after him as a humorous tribute."
    },
    {
      id: 782,
      question: "What did Mary Shelley subtitle her 1818 novel, Frankenstein?",
      options: ["The Modern Prometheus", "The Monster in Each of Us", "The Dangers of Electricity", "A Monster is Born"],
      correctAnswer: "The Modern Prometheus",
      explanation: "Shelley felt that Dr Frankenstein was like Prometheus in that they both created life and suffered the consequences."
    },
    {
      id: 783,
      question: "The world's first space station was called ____",
      options: ["Salyut", "Skylab", "Mir", "The ISS"],
      correctAnswer: "Salyut",
      explanation: "Launched in April 1971 by Russia, the Salyut program served partly as a cover for a separate spy satellite program called Almaz."
    },
    {
      id: 784,
      question: "Which of the following countries is not part of the International Space Station (ISS)?",
      options: ["India", "Russia", "United States", "Japan"],
      correctAnswer: "India",
      explanation: "Visible to the naked eye, it orbits the earth about every 90 minutes and cost $150 billion to design and build."
    },
    {
      id: 785,
      question: "Which country has the fewest residents?",
      options: ["Vatican City", "Liechtenstein", "Luxembourg", "Antarctica"],
      correctAnswer: "Vatican City",
      explanation: "Vatican City has only 800 residents. Antarctica is not considered a country, but even if it were, it typically has a population of 1,100 to 5,000."
    },
    {
      id: 786,
      question: "What is the term for a baby kangaroo?",
      options: ["Joey", "Roo", "Pup", "Foal"],
      correctAnswer: "Joey",
      explanation: "When born, they are 1/100,000 of their adult size and are still considered embryos, spending 6 months maturing in the mother's pouch."
    },
    {
      id: 787,
      question: "What is considered the hardest wood in the world, with a Janka score of over 5,000.",
      options: ["Australian buloke", "Ebony", "Ipe", "Bolivian cherry"],
      correctAnswer: "Australian buloke",
      explanation: "Appropriately a member of the ironwood tree family, it's wood is so dense that it sinks in water."
    },
    {
      id: 788,
      question: "What is the proper name of Mr Peanut, the British aristocrat who serves as the Planters peanut mascot.",
      options: ["Bartholomew Richard Fitzgerald-Smythe", "Reginald Winston Throckmorton", "Andrew Patrick Mugglestone", "Peregrine Falcon Bysshart Rodendon"],
      correctAnswer: "Bartholomew Richard Fitzgerald-Smythe",
      explanation: "Designed by a Virginia schoolboy in 1916, Mr Peanut has even had a float in the Macy's Thanksgiving Day parade since 1997."
    },
    {
      id: 789,
      question: "She was the first female inducted into the Rock and Roll Hall of Fame, in 1987.",
      options: ["Aretha Franklin", "Madonna", "Whitney Houston", "Dolly Parton"],
      correctAnswer: "Aretha Franklin",
      explanation: "She was inducted by Keith Richards, who gave a speech that was...bizarre, even by his standards."
    },
    {
      id: 790,
      question: "Martin Luther King Jr paid for the birth of this Oscar winning actress in 1967, because her parents were struggling financially and were friends of the Kings.",
      options: ["Julia Roberts", "Meryl Streep", "Halle Berry", "Kate Winslet"],
      correctAnswer: "Julia Roberts",
      explanation: "Julia's parents ran an acting school that was attended by the Kings' children."
    },
    {
      id: 791,
      question: "Which of these shows was NOT a spin-off of Happy Days?",
      options: ["Charles in Charge", "Mork and Mindy", "Joanie Loves Chachi", "Laverne and Shirley"],
      correctAnswer: "Charles in Charge",
      explanation: "Scott Baio starred in both Joanie Loves Chachi and Charles in Charge, but only the former was based on a Happy Days role."
    },
    {
      id: 792,
      question: "In a deck of cards, which King does not have a moustache?",
      options: ["Hearts", "Spades", "Clubs", "Diamonds"],
      correctAnswer: "Hearts",
      explanation: "He is also known as the \"Suicide King\" because it looks like he is stabbing himself in the head with his sword."
    },
    {
      id: 793,
      question: "Which of the following states has the fewest NFL teams?",
      options: ["New York", "Florida", "California", "Texas"],
      correctAnswer: "New York",
      explanation: "California and Florida each have 3 teams. Texas has 2 teams. But New York only has the Buffalo Bills that are based in New York. The NY Giants and NY Jets are both headquartered in, and play in, New Jersey."
    },
    {
      id: 794,
      question: "Mariah Carey's \"All I Want For Christmas Is You\" went to #1 in 2019. In what year was it released?",
      options: ["1994", "2019", "2018", "2003"],
      correctAnswer: "1994",
      explanation: "It holds the record for longest time between release and becoming #1, at 25 years in the US and 26 years in the UK."
    },
    {
      id: 795,
      question: "This singer's given name is Robyn Fenty.",
      options: ["Rihanna", "Beyonce", "Cher", "Madonna"],
      correctAnswer: "Rihanna",
      explanation: "Her middle name is Rihanna and she was born in Barbados in 1988, and released her first album in 2005."
    },
    {
      id: 796,
      question: "This famous rock guitarist played the iconic solo on Michael Jackson's \"Beat It\"",
      options: ["Eddie Van Halen", "Jimi Hendrix", "Eric Clapton", "Alex Lifeson"],
      correctAnswer: "Eddie Van Halen",
      explanation: "He formed Van Halen with his brother Alex in 1973, and their only #1 Billboard hit was Jump from 1984."
    },
    {
      id: 797,
      question: "This world-famous singer narrated the audiobook for E.T. - The Extra Terrestrial in 1982, at the same time he was about to release his biggest-selling album.",
      options: ["Michael Jackson", "Prince", "Willie Nelson", "Elton John"],
      correctAnswer: "Michael Jackson",
      explanation: "He was finishing Thriller while finishing this album, both of which were produced by Quincy Jones."
    },
    {
      id: 798,
      question: "Which of these albums has sold the most certified copies worldwide to date, at over 70 million?",
      options: ["Thriller (Michael Jackson)", "Back in Black (AC/DC)", "Dark Side of the Moon (Pink Floyd)", "Led Zeppelin IV"],
      correctAnswer: "Thriller (Michael Jackson)",
      explanation: "It also gave rise to what is likely the most famous music video in the world, giving prison dance groups around the world something to do."
    },
    {
      id: 799,
      question: "In 2018, the European Union enacted the GDPR, considered one of the most stringent online privacy protection laws. It stands for General Data ____ Regulation.",
      options: ["Protection", "Privacy", "Permission", "Proactive"],
      correctAnswer: "Protection",
      explanation: "Contrary to what you may think, the law does not require consent to obtain data on someone, nor does it guarantee an individual that their data must be deleted if requested."
    },
    {
      id: 800,
      question: "The Great Leap Forward was an economic and social campaign in China started in 1958 that attempted to move China from an agrarian economy to an industrial one. It was proposed by this Chinese founder of the People's Republic of China.",
      options: ["Mao Zedong", "Deng Xiaoping", "Xi Jinping", "Kim Jong Il"],
      correctAnswer: "Mao Zedong",
      explanation: "The Great Leap Forward failed on many fronts, and directly led to the Great Chinese Famine, considered the deadliest famine in human history, killing between 15 and 55 million people."
    },
    {
      id: 801,
      question: "The Mission: Impossible franchise follows the exploits of the fictitious spy agency IMF, which stands for ____.",
      options: ["Impossible Missions Force", "International Mystery Force", "International Missions Force", "Interagency Multinational Force"],
      correctAnswer: "Impossible Missions Force",
      explanation: "The IMF is tasked with, among other things, stopping the terrorist group known as the Syndicate. Mwahahahaha..."
    },
    {
      id: 802,
      question: "Elvis Presley died the same year Jimmy Carter was inaugurated as President and Star Wars: Episode IV was released. What year was it?",
      options: ["1977", "1976", "1972", "1973"],
      correctAnswer: "1977",
      explanation: "Presley was so groundbreaking that a Catholic church in Wisconsin wrote to the FBI saying that Presley was, \"...a definite danger to the security of the United States. ... [His] actions and motions were such as to rouse the sexual passions of teenaged youth.\""
    },
    {
      id: 803,
      question: "Who played the patriach George Bluth in the comedy series Arrested Development?",
      options: ["Jeffrey Tambor", "John Lithgow", "Bill Murray", "Michael Landon"],
      correctAnswer: "Jeffrey Tambor",
      explanation: "He also played Maura Pfefferman on Transparent until he was cancelled by that show in 2017."
    },
    {
      id: 804,
      question: "Bob Odenkirk and David Cross had a sketch comedy show that aired on HBO for 4 seasons called ___.",
      options: ["Mr Show", "The Tambourine Men", "Key & Peele", "The McLaughlin Group"],
      correctAnswer: "Mr Show",
      explanation: "Odenkirk went on to have iconic roles in Breaking Bad and Better Call Saul, and Cross was the hilariously oblivious Tobias Funke on Arrested Development."
    },
    {
      id: 805,
      question: "Which Grimm fairy tale tells the story of a miller's daughter spinning straw into gold?",
      options: ["Rumpelstiltskin", "Rapunzel", "Little Red Riding Hood", "The Goose Girl"],
      correctAnswer: "Rumpelstiltskin",
      explanation: "The daughter in question was to give her first born to the imp that actually performed the magic spinning, but she was able to guess his name and keep her child. Your typical child's story."
    },
    {
      id: 806,
      question: "This prog-rock drum legend for the band Rush died in 2020 of glioblastoma.",
      options: ["Neil Peart", "John Bonham", "John Entwhistle", "Keith Moon"],
      correctAnswer: "Neil Peart",
      explanation: "Known as The Professor for his technical skill, he was also the lyricist for most of the band's songs over a 45 year career."
    },
    {
      id: 807,
      question: "The Roses Tournament takes place each year between the Univeristy of York and Lancaster University, both in England. It involves competition in dozens of sports. Which of these classic American sports is NOT part of the Roses Tournament?",
      options: ["Baseball", "American football", "Basketball", "E-sports"],
      correctAnswer: "Baseball",
      explanation: "The competition began in 1965 and takes its name from the Wars of the Roses, which occurred in the mid-15th century between the Houses of York and Lancaster."
    },
    {
      id: 808,
      question: "In the mother/daughter series \"Gilmore Girls\", what was the name of the fictional town they lived in?",
      options: ["Stars Hollow", "Eagle Point", "Mystic Falls", "Tree Hill"],
      correctAnswer: "Stars Hollow",
      explanation: "The fake town in Connecticut was reported to be 30 minutes from the state capitol of Hartford, and was the home to Lorelei and Rory Gimore."
    },
    {
      id: 809,
      question: "This Gen Alpha slang word has no fixed meaning, and likely had its origins in a 2018 song of the same name by Russian rave band Little Big.",
      options: ["Skibidi", "Farxiga", "Ronkonkin", "Jabberwocky"],
      correctAnswer: "Skibidi",
      explanation: "Depending on context, it could mean 'cool', 'bad' or 'dumb', and can even be combined with other pseudowords like rizz."
    },
    {
      id: 810,
      question: "This massively multiplayer online role-playing game set in Azeroth was released in 2004, has had 10 expansion packs released, and has grossed almost $10 billion.",
      options: ["World of Warcraft", "Final Fantasy", "The Lord of the Rings Online", "Dungeons and Dragons Online"],
      correctAnswer: "World of Warcraft",
      explanation: "WoW is just one of hundreds of ways that 20-somethings take their minds off a dying planet and a failing democracy."
    },
    {
      id: 811,
      question: "This online game platform allows users to program and play their own games, or the games of other players, and has been around since 2004.",
      options: ["Roblox", "Arduino", "Twitch", "Steam"],
      correctAnswer: "Roblox",
      explanation: "Earning over $2.29 billion in 2020, it also had about half of all kids under age 16 on the platform."
    },
    {
      id: 812,
      question: "The show Yellowstone and its numerous spinoffs were all written and created (or co-created) by this writer/actor/director.",
      options: ["Taylor Sheridan", "Kurt Sutter", "Shawn Ryan", "David Simon"],
      correctAnswer: "Taylor Sheridan",
      explanation: "Born Sheridan Taylor Gibler Jr, he also wrote the script for Sicario and its sequel; Wind River; Hell or High Water and acted in 21 episodes of Sons of Anarchy."
    },
    {
      id: 813,
      question: "The name for this item that can be consumed (meaning, drank or eaten) comes from the German word for peppermint, pfefferminz.",
      options: ["PEZ", "Dr Pepper", "Peppadew", "York Peppermint Pattie"],
      correctAnswer: "PEZ",
      explanation: "PEZ was invented in Austria in 1927. Some rare PEZ dispensers can be worth over $20,000. But only if they are in 'mint' condition."
    },
    {
      id: 814,
      question: "The first video ever played on MTV, in 1981, was Video Killed the Radio Star by this band.",
      options: ["The Buggles", "Cap'n Bob and the Shanty Singers", "The Beatles", "The Eagles"],
      correctAnswer: "The Buggles",
      explanation: "The band formed in 1977 and released their best known single in 1979. The duo broke up soon after to join the band Yes."
    },
    {
      id: 815,
      question: "Which artist inspired the \"brat summer\" trend in 2024?",
      options: ["Charli XCX", "Beyonce", "Adele", "Dua Lipa"],
      correctAnswer: "Charli XCX",
      explanation: "In the insightful words of Charli XCX, brat is about \"a pack of cigs and, like, a Bic lighter and, like, a strappy white top. With no bra\". Hence the obvious tie-in to the Kamala Harris campaign."
    },
    {
      id: 816,
      question: "This cartoon character was frequently stating that he should have taken a left turn at Albuquerque.",
      options: ["Bugs Bunny", "Fred Flintstone", "SpongeBob SquarePants", "Homer Simpson"],
      correctAnswer: "Bugs Bunny",
      explanation: "The running joke had its origins in the fact that Route 66 intersects itself in Albuquerque, causing confusion for drivers."
    },
    {
      id: 817,
      question: "Neil Armstrong was the first man to walk on the moon. Who was the second?",
      options: ["Buzz Aldrin", "Alan Shepard", "Michael Collins", "Yakov Smirnoff"],
      correctAnswer: "Buzz Aldrin",
      explanation: "Aldrin and Armstrong spent about 2 hours exploring Tranquility Base, while Michael Collins flew the command module in lunar orbit."
    },
    {
      id: 818,
      question: "Carl Magee, of Oklahoma City, patented this coin-operated timer in 1935 to help businesses in downtown commercial areas.",
      options: ["Parking meter", "Coin-op washing machine", "Coin-op toll booth", "Pay phone"],
      correctAnswer: "Parking meter",
      explanation: "Modern meters are fully electric and can monitor if a space is used or not, can remove remaining time when a car leaves, and in some cases can remotely ticket you even though you have time left on the meter."
    },
    {
      id: 819,
      question: "What is Plankton's (Spongebob Square Pants' nemesis), first name?",
      options: ["Sheldon", "Alfred", "Krusty", "Satchel"],
      correctAnswer: "Sheldon",
      explanation: "Sheldon J. Plankton runs the Chum Bucket restaurant, a competitor of the Krusty Krab where Bob works."
    },
    {
      id: 820,
      question: "The abdominal thrust maneuver to help someone who is choking is known as the ___ maneuver.",
      options: ["Heimlich", "Oppenheimer", "Stuttgart", "Johnson"],
      correctAnswer: "Heimlich",
      explanation: "Dr Henry Heimlich invented the technique in 1974. He also espoused 'malariotherapy', deliberately infecting someone with malaria to treat HIV, cancer and Lyme disease."
    },
    {
      id: 821,
      question: "Who was the author of To Kill A Mockingbird?",
      options: ["Harper Lee", "George", "George Orwell", "JD Salinger"],
      correctAnswer: "Harper Lee",
      explanation: "Upon its publication in 1961, Lee thought it would not sell well and hoped the book would have \"a quick and merciful death.\""
    },
    {
      id: 822,
      question: "1984 is a book about a dystopian future written in 1949 by this writer, who also wrote Animal Farm.",
      options: ["George Orwell", "Suzanne Collins", "Jack Kerouac", "Orson Welles"],
      correctAnswer: "George Orwell",
      explanation: "Orwell was born Eric Arthur Blair, but he used the pen name Orwell as a tribute to his favorite place, the River Orwell in England."
    },
    {
      id: 823,
      question: "Edward Cullen is Bella's love interest in this book/movie series.",
      options: ["Twilight", "Interview with the Vampire", "Travels with Charley", "Woman, Eating"],
      correctAnswer: "Twilight",
      explanation: "Edward is a telepathic vampire who ultimately fathers a daughter, Renesmee, with Bella, who is turned into a vampire right after giving birth."
    },
    {
      id: 824,
      question: "What year was the first iPod released?",
      options: ["2001", "1998", "1999", "2000"],
      correctAnswer: "2001",
      explanation: "After selling an estimated 450 million iPods, Apple stopped making them in 2022"
    },
    {
      id: 825,
      question: "The best-selling movie soundtrack of all time (at 50 million units sold) is from the movie ___.",
      options: ["The Bodyguard", "Pulp Fiction", "Saturday Night Fever", "Titanic"],
      correctAnswer: "The Bodyguard",
      explanation: "It was the first album to sell over 1,000,000 copies in a week, and is still the highest selling album by a female artist."
    },
    {
      id: 826,
      question: "The famous movie line, \"Show me the money!\" is from this Tom Cruise film.",
      options: ["Jerry Maguire", "Top Gun", "Risky Business", "Mission Impossible VI: The Money Train"],
      correctAnswer: "Jerry Maguire",
      explanation: "It also had the catchphrases, \"you had me at 'hello'\", and \"help me, help you\"."
    },
    {
      id: 827,
      question: "Which of these metals is the softest, and indeed considered the softest metal in the world.",
      options: ["Cesium", "Gold", "Tin", "Aluminum"],
      correctAnswer: "Cesium",
      explanation: "Cesium is what's known as a Group 1A alkali metal, which are very soft, as alkali comes from an Arabic word meaning \"ashes\"."
    },
    {
      id: 828,
      question: "This 2005 film had the tag line, \"The longer you wait, the harder it gets\".",
      options: ["The 40 Year Old Virgin", "Are We There Yet?", "The Wedding Date", "Hitch"],
      correctAnswer: "The 40 Year Old Virgin",
      explanation: "Steve Carrell plays the virgin in question, and he even subjected himself to a real chest waxing for that well-known scene."
    },
    {
      id: 829,
      question: "As of 2025, this movie had the greatest gross sales relative to its initial budget.",
      options: ["Paranormal Activity", "Rocky", "Halloween", "Napolean Dynamite"],
      correctAnswer: "Paranormal Activity",
      explanation: "Made for $15,000, the movie had gross revenue of $193,000,000 for a return on investment of 1,289,000%."
    },
    {
      id: 830,
      question: "Which of these is NOT one of the new emotions that Riley has as a teenager in \"Inside Out 2\"?",
      options: ["Empathy", "Ennui", "Embarrassment", "Envy"],
      correctAnswer: "Empathy",
      explanation: "The fourth new emotion is anxiety, and they arrive the night before she is to attend hockey camp."
    },
    {
      id: 831,
      question: "In the 2024 biographical film \"A Complete Unknown\", who plays Bob Dylan?",
      options: ["Timothee Chalamet", "Joaquin Phoenix", "Michael B. Jordan", "Andy Samberg"],
      correctAnswer: "Timothee Chalamet",
      explanation: "Born Robert Allen Zimmerman, Dylan has made 40 studio albums and 21 live albums and is still touring as of 2025."
    },
    {
      id: 832,
      question: "Which of the following names is NOT the name of one of the Brady kids (from The Brady Bunch)?",
      options: ["Mike", "Greg", "Peter", "Bobby"],
      correctAnswer: "Mike",
      explanation: "Mike Brady was the patriarch of the family. The introduction of Cousin Oliver in season 5 was considered the moment the series \"jumped the shark\", and it was cancelled at the end of that season."
    },
    {
      id: 833,
      question: "The idiom \"jumped the shark\" (referring to a moment when a creative work has exhausted its core ideas) was coined in 1985 in reference to a specific plot point on a 1977 episode of this show.",
      options: ["Happy Days", "The Brady Bunch", "Magnum P.I.", "Charlie's Angels"],
      correctAnswer: "Happy Days",
      explanation: "In the episode, the Fonz jumps a shark while waterskiing and wearing his trademark leather motorcycle jacket."
    },
    {
      id: 834,
      question: "What was the name of the coffee shop in the show Friends?",
      options: ["Central Perk", "Perk Me Up", "The Bean Hole", "Deja Brew"],
      correctAnswer: "Central Perk",
      explanation: "Some of the originally considered titles for the show were Insomnia Cafe, Six of One and Across the Hall."
    },
    {
      id: 835,
      question: "What was the player number of Seong Gi-Hun, the main character of the Netflix series Squid Game.",
      options: ["456", "1", "222", "999"],
      correctAnswer: "456",
      explanation: "The dystopian South Korean show has players competing in sadistic and deadly versions of children's games for a chance to win about $40 million."
    },
    {
      id: 836,
      question: "Which Nirvana album cover featured a baby swimming in a pool toward a dollar bill on a fishhook?",
      options: ["Nevermind", "Bleach", "In Utero", "Rockabye Baby"],
      correctAnswer: "Nevermind",
      explanation: "Spencer Elden, the baby in the photo, sued the band (and the photographer) in 2021 claiming he did not give consent and that it resulted in \"lifelong damages\". The case was dismissed. And appealed. And dismissed again."
    },
    {
      id: 837,
      question: "Which was the first K-pop / Asian band to headline at Coachella?",
      options: ["Blackpink", "BTS", "EXO", "ATEEZ"],
      correctAnswer: "Blackpink",
      explanation: "The 4-girl group is also the first Korean girl group to win an MTV Video Music Award, and are considered the most subscribed music act on YouTube, with over 98 million subscribers (in 2025)."
    },
    {
      id: 838,
      question: "In what year did Vince Vance & the Valiants release \"All I Want For Christmas Is You\"?",
      options: ["1989", "1990", "1992", "1991"],
      correctAnswer: "1989",
      explanation: "Vance sued Mariah Carey, claiming she stole his song, even though the only similarity is the title. He lost the suit, as well as a follow up suit a year later."
    },
    {
      id: 839,
      question: "Fans of Lady Gaga are known as ______.",
      options: ["Little Monsters", "Maggots", "Head Cases", "Trainwrecks"],
      correctAnswer: "Little Monsters",
      explanation: "All of these are fanbase nicknames, but as Gaga's fans call her Mother Monster, she refers to her fans as Little Monsters."
    },
    {
      id: 840,
      question: "Snapchat, the app that allows message and picture to be seen for a short time before they disappear, was orginally called ____ when first launched.",
      options: ["Picaboo", "Poof!", "Ghost", "ByeByeBye"],
      correctAnswer: "Picaboo",
      explanation: "In 2011, Picaboo was launched on the iOS system but within 2 months was renamed Snapchat. And within just a few short years it became another excellent social media app for stalkers, body shaming, and inducing anxiety."
    },
    {
      id: 841,
      question: "As of February 2025, which of these people has the most followers on Twitter?",
      options: ["Barack Obama", "Taylor Swift", "Rihanna", "Cristiano"],
      correctAnswer: "Barack Obama",
      explanation: "He has 130 million followers, while Cristiano has 115 M, Rihanna has 107 M and Taylor Swift has 94 M."
    },
    {
      id: 842,
      question: "The name of the AI chatbot on Twitter/X that has praised Hitler and spewed out false conspiracy theories and racist views is called ____.",
      options: ["Grok", "Gemini", "Claude", "Elon"],
      correctAnswer: "Grok",
      explanation: "The original name for the chatbot was TruthGPT, as ironically inaccurate a name as Truth Social."
    },
    {
      id: 843,
      question: "This politician has the most followers on Twitter/X (as of February 2025).",
      options: ["Barack Obama", "Narendra Modi", "Donald Trump", "Boris Johnson"],
      correctAnswer: "Barack Obama",
      explanation: "Obama has over 130 million followers, followed by Modi with 108.9 M, Trump with 108.3 M and Johnson with 4.5 M."
    },
    {
      id: 844,
      question: "Henry John Deutschendorf Jr, a singer of folk and country until his death in a plane crash, was much better known as _____.",
      options: ["John Denver", "Johnny Cash", "Merle Haggard", "Bob Dylan"],
      correctAnswer: "John Denver",
      explanation: "Denver sold over 33 million albums. He died while piloting a newly puchased plane where he could not access the fuel tank selector valve, in 1997 at age 53."
    },
    {
      id: 845,
      question: "The tallest volcano on earth (based on elevation above sea level) is _____, at 22,615 ft (6,893m).",
      options: ["Nevado Ojos del Salado", "Denali", "Mt Everest", "Mauna Kea"],
      correctAnswer: "Nevado Ojos del Salado",
      explanation: "Denali and Everest are not actually volcanoes. Mauna Kea is 33,500 ft (10,211 m) from base to summit, but only 13,796 ft (4,205 m) above sea level."
    },
  ],
  'state-trivia': [
    {
      id: 846,
      question: "Which state is known as the yellowhammer state (after the state bird), also called the Cotton State?",
      options: ["Alabama", "Louisiana", "Ohio", "West Virginia"],
      correctAnswer: "Alabama",
      explanation: "The northern flicker is also known as the yellowhammer. There was also a company of soldiers in the Civil War known as the yellowhammers."
    },
    {
      id: 853,
      question: "This state is known as The Last Frontier.",
      options: ["Alaska", "Montana", "Nevada", "Wyoming"],
      correctAnswer: "Alaska",
      explanation: "About 90% of the state is not accessible by any road and much of it is still relatively unexplored."
    }
  ],
  'government-trivia': [
    {
        id: 901,
        question: "How many branches are in the United States government?",
        options: ["3", "2", "4", "5"],
        correctAnswer: "3",
        explanation: "The three branches are the legislative, executive, and judicial branches."
    },
    {
        id: 902,
        question: "What is the supreme law of the land in the United States?",
        options: ["The Constitution", "The Declaration of Independence", "The Articles of Confederation", "The Bill of Rights"],
        correctAnswer: "The Constitution",
        explanation: "The U.S. Constitution is the supreme law of the land, establishing the framework for the federal government."
    }
  ],
};

export function getQuestionsByCategory(category: string): Question[] {
  const allQuestions = triviaData[category] || [];
  if (typeof window !== 'undefined') {
    const usedQuestionIds = JSON.parse(localStorage.getItem(`usedQuestions_${category}`) || '[]');
    return allQuestions.filter(q => !usedQuestionIds.includes(q.id));
  }
  return allQuestions;
}

    