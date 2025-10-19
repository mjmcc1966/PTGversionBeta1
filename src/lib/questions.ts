
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
    }
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
    },
    {
      id: 903,
      question: "This series of papers, released in 1971 by Daniel Ellsberg, documented how multiple administrations lied to the public about US involvement in VietNam",
      options: [
        "Pentagon Papers",
        "Panama Papers",
        "\"Deep Throat\" papers",
        "Vietnam Papers"
      ],
      correctAnswer: "Pentagon Papers",
      explanation: "For his work releasing the papers, Ellsberg was initially charged with conspiracy, espionage and theft of government property. Charges were later dropped."
    },
    {
      id: 904,
      question: "The Iran-Contra affair involved selling arms to Iran and then supporting the Contras of Nicaragua, and occured during this President's 8-year reign",
      options: [
        "Ronald Reagan",
        "George W Bush",
        "Bill Clinton",
        "Jimmy Carter"
      ],
      correctAnswer: "Ronald Reagan",
      explanation: "Lt Col Ollie North oversaw the illegal sale of arms to Iran and then funneled that money to the Contras."
    },
    {
      id: 905,
      question: "As of 2024, who was the last sitting vice president to become president?",
      options: [
        "George HW Bush",
        "Joseph Biden",
        "George W Bush",
        "Gerald Ford"
      ],
      correctAnswer: "George HW Bush",
      explanation: "Bush was a former director of the CIA who ran for president in 1980, losing the Republican primary to Ronald Reagan. Biden was not a sitting VP when elected."
    },
    {
      id: 906,
      question: "He was the first and only president to serve more than 2 terms (as of 2025).",
      options: [
        "Franklin Delano Roosevelt",
        "Theodore Roosevelt",
        "George Washington",
        "Thomas Jefferson"
      ],
      correctAnswer: "Franklin Delano Roosevelt",
      explanation: "FDR served from 1933 to 1945 and was known for the New Deal and his \"fireside chats\", among many other accomplishments."
    },
    {
      id: 907,
      question: "This president installed a putting green at the White House and two par-3 holes at Camp David due to his love of golf.",
      options: [
        "Dwight D Eisenhower",
        "Richard Nixon",
        "Gerald Ford",
        "Donald Trump"
      ],
      correctAnswer: "Dwight D. Eisenhower",
      explanation: "He even had his golf balls painted black so he could golf in the snow."
    },
    {
      id: 908,
      question: "Which of the following countries is NOT a permanent member of the UN Security Council?",
      options: [
        "Germany",
        "France",
        "China",
        "Russia"
      ],
      correctAnswer: "Germany",
      explanation: "The Security Council's 5th member is the UK. Germany is not a member for numerous reasons, one of which may be that it is not a nuclear power."
    },
    {
      id: 909,
      question: "How many pairs of US presidents have shared the same last name?",
      options: [
        "5",
        "4",
        "3",
        "6"
      ],
      correctAnswer: "5",
      explanation: "Adams (John and John Quincy, father and son), Harrison (William and Benjamin, grandfather/grandson), Roosevelt (Teddy and Franklin, cousins), Johnson (Andrew and Lyndon, not related) and Bush (George HW and George W, father and son)"
    },
    {
      id: 910,
      question: "Which president's face is on the $2 bill?",
      options: [
        "Thomas Jefferson",
        "Richard Nixon",
        "James Monroe",
        "Andrew Jackson"
      ],
      correctAnswer: "Thomas Jefferson",
      explanation: "The first $2 bill, in 1862, had Alexander Hamilton on it. Jefferson appeared in 1869."
    },
    {
      id: 911,
      question: "He was the only president to have performed at the Grand Ole Opry in Tennessee, singing \"Happy Birthday\" to his wife.",
      options: [
        "Richard Nixon",
        "Bill Clinton",
        "John F Kennedy",
        "Franklin Roosevelt"
      ],
      correctAnswer: "Richard Nixon",
      explanation: "He also performed \"My Wild Irish Rose\" and \"God Bless America\" on the piano, just 5 short months before he resigned in disgrace (from the White House, not from singing)."
    },
    {
      id: 912,
      question: "Who was the first elected president who was considered a baby boomer, born between 1946 and 1964?",
      options: [
        "Bill Clinton",
        "George W Bush",
        "Barack Obama",
        "Joe Biden"
      ],
      correctAnswer: "Bill Clinton",
      explanation: "Clinton and Bush were both born in 1946. Obama was born in 1961, and Biden in 1942."
    },
    {
      id: 913,
      question: "Who was the first president to be elected from the Silent Generation, born from 1925-1945?",
      options: [
        "Joe Biden",
        "Jimmy Carter",
        "George HW Bush",
        "Bill Clinton"
      ],
      correctAnswer: "Joe Biden",
      explanation: "Biden was born in 1942. Carter and Bush were 1924, and Clinton was 1946. "
    },
    {
      id: 914,
      question: "After the Vice President, who is next in line to become president?",
      options: [
        "Speaker of the House",
        "President of the Senate",
        "Secretary of Defense",
        "Secretary of State"
      ],
      correctAnswer: "Speaker of the House",
      explanation: "The 25th Amendment clarifies that the VP becomes the president upon the president's death or incapacitation, resignation or removal from office, and was only ratified in 1967 after John F. Kennedy's assassination."
    },
    {
      id: 915,
      question: "In 1849, right after his election, President Zachary Taylor had a town named after him, called Rough and Ready, in this state.",
      options: [
        "California",
        "Idaho",
        "Washington",
        "Alaska"
      ],
      correctAnswer: "California",
      explanation: "The town briefly seceded from the Union in 1850 to avoid paying taxes, but rejoined 3 months later. It is a California Historical Landmark."
    },
    {
      id: 916,
      question: "Which Elton John song did Donald Trump reference to describe North Korean leader Kim Jong Un in 2017?",
      options: [
        "Rocket Man",
        "Tiny Dancer",
        "Mona Lisas and Mad Hatters",
        "Don't Go Breaking My Heart"
      ],
      correctAnswer: "Rocket Man",
      explanation: "Kim replied by referring to Trump as an old lunatic, but the translator used the word \"dotard\" which means \"someone in a state of mental decay marked by a decline of mental poise\"."
    },
    {
      id: 917,
      question: "At the time of his assassination, what play was Abraham Lincoln watching with his wife?",
      options: [
        "Our American Cousin",
        "Hamilton",
        "The Importance of Being Earnest",
        "Love Amongst the Bonnets!"
      ],
      correctAnswer: "Our American Cousin",
      explanation: "The play is a farce about an American who goes to England to meet his family and collect an estate."
    },
    {
      id: 918,
      question: "Where did Richard Nixon deliver his famous \"I am not a crook\" speech?",
      options: [
        "At a hotel in Disney World",
        "From the White House lawn",
        "From a courtroom",
        "In front of Congress"
      ],
      correctAnswer: "At a hotel in Disney World",
      explanation: "He was having a press conference in Nov 1973 from the Contemporary Resort with a bunch of newspaper editors when he uttered the famous line."
    },
    {
      id: 919,
      question: "Which president established the Secret Service, in 1865?",
      options: [
        "Abraham Lincoln",
        "Ulysses S Grant",
        "Thomas Jefferson",
        "John Tyler"
      ],
      correctAnswer: "Abraham Lincoln",
      explanation: "Their initial role was to stop currency counterfeiting. They did not start protecting presidents until after William McKinley's assassination in 1901."
    },
    {
      id: 920,
      question: "Which member of Trump's second administration took a $50,000 bribe from an undercover FBI agent?",
      options: [
        "Tom Homan",
        "Pete Hegseth",
        "Kristi Noem",
        "Charles Kushner"
      ],
      correctAnswer: "Tom Homan",
      explanation: "Could be any of them, right? But \"border czar\" Homan took the bribe with the promise of helping secure government contracts. Fortunately, Trump's Justice Department closed the case, because...well, I guess because corruption pays, baby!"
    },
    {
      id: 921,
      question: "Which president actually signed the Emancipation Proclamation?",
      options: [
        "Abraham Lincoln",
        "Warren Harding",
        "Andrew Johnson",
        "Ulysses S. Grant"
      ],
      correctAnswer: "Abraham Lincoln",
      explanation: "On January1, 1863, roughly 3.5 million slaves in America were legally freed by this decree."
    },
    {
      id: 922,
      question: "The BIll of Rights contains ____ amendments to the US Constitution.",
      options: [
        "10",
        "12",
        "25",
        "27"
      ],
      correctAnswer: "10",
      explanation: "There were 12 amendments proposed, but only numbers 3-12 were ratified, giving us the current Bill of Rights. "
    },
    {
      id: 923,
      question: "He served as the 8th president and was the first US president to be born a citizen of the US. (All prior ones were British subjects)",
      options: [
        "Martin Van Buren",
        "Abraham Lincoln",
        "John Adams",
        "Thomas Jefferson"
      ],
      correctAnswer: "Martin van Buren",
      explanation: "Van Buren was born in 1782, just a year after the US was founded. He was also the only president to have English as a second language (George W Bush just sounded like English was his second language). "
    },
    {
      id: 924,
      question: "He was Bill Clinton's VP, and gained great fame with the documentary An Inconvenient Truth.",
      options: [
        "Al Gore",
        "George W Bush",
        "John McCain",
        "Dan Quayle"
      ],
      correctAnswer: "Al Gore",
      explanation: "Gore ran for president in 2000 and won the popular vote by over 540,000 votes, but lost to George W Bush when the Supreme Court stopped the Florida vote recount after 35 days."
    },
    {
      id: 925,
      question: "This American singer was the mayor of Palm Springs, CA from 1988-1992, long after his marriage to Cher fell apart.",
      options: [
        "Sonny Bono",
        "Gregg Allman",
        "Clint Eastwood",
        "Jimi Hendrix"
      ],
      correctAnswer: "Sonny Bono",
      explanation: "He was killed in a skiing accident in 1998."
    },
    {
      id: 926,
      question: "After John F Kennedy's assassination, he became president in 1963.",
      options: [
        "Lyndon Johnson",
        "Andrew Jackson",
        "Richard Nixon",
        "Dwight D Eisenhower"
      ],
      correctAnswer: "Lyndon Johnson",
      explanation: "Kennedy was shot while his motorcade was passing through Dealey Plaza in Dallas, and 60 years later there are still many questions about his death."
    },
    {
      id: 927,
      question: "He was the first Roman Catholic to be elected Vice President, and later become the second Catholic President.",
      options: [
        "Joe Biden",
        "Mike Pence",
        "Richard Nixon",
        "John F Kennedy"
      ],
      correctAnswer: "Joe Biden",
      explanation: "As of 2025, he is still the only Catholic VP, and only the 2nd Catholic president (after JFK)"
    },
    {
      id: 928,
      question: "Who was the first First Lady to be elected to a public office?",
      options: [
        "Hillary Clinton",
        "Lady Bird Johnson",
        "Pat Nixon",
        "Eleanor Roosevelt"
      ],
      correctAnswer: "Hillary Clinton",
      explanation: "She was elected US Senator from New York in 2000."
    },
    {
      id: 929,
      question: "Which president was known as \"The Great Communicator\"?",
      options: [
        "Ronald Reagan",
        "George W Bush",
        "Abraham Lincoln",
        "George Washington"
      ],
      correctAnswer: "Ronald Reagan",
      explanation: "Reagan's folksy manner and training as an actor led many to consider him one of the most effective communicators we've had as President."
    },
    {
      id: 930,
      question: "How many states are needed to ratify an amendment to the Constitution?",
      options: [
        "38 (3/4)",
        "25 (1/2)",
        "All 50",
        "30 (3/5)"
      ],
      correctAnswer: "38 (3/4)",
      explanation: "It also requires a 2/3 vote in both houses of Congress to propose an amendment, and each state's vote carries equal weight in ratifying an amendment, regardless of population. "
    },
    {
      id: 931,
      question: "How many electors make up the Electoral College?",
      options: [
        "538",
        "100",
        "438",
        "649"
      ],
      correctAnswer: "538",
      explanation: "When you vote for a presidential candidate, you are actually voting for who you want your state to vote for at the Meeting of Electors. Since 1800, there have been over 700 attempts to reform or abolish this perfectly fair and flawless system."
    },
    {
      id: 932,
      question: "In what state was Barack Obama born?",
      options: [
        "Hawaii",
        "Kenya",
        "Illinois",
        "California"
      ],
      correctAnswer: "Hawaii",
      explanation: "Despite attempts by the delusional to have you think otherwise, he was born in Honolulu in 1961."
    },
    {
      id: 933,
      question: "Who was the first president to live in the White House, starting in 1800?",
      options: [
        "John Adams",
        "George Washington",
        "Thomas Jefferson",
        "James Madison"
      ],
      correctAnswer: "John Adams",
      explanation: "Washington chose the site but never got to live in it before leaving office. "
    },
    {
      id: 934,
      question: "How old must someone be to run for president?",
      options: [
        "35",
        "40",
        "42",
        "38"
      ],
      correctAnswer: "35",
      explanation: "Article II, Section 1, Clause 5 of the Constitution states they must be 35, a natural-born US citizen, and a resident of the US for at least 14 years."
    },
    {
      id: 935,
      question: "In 2003, as part of a Republican protest against France for not supporting the war in Iraq, French fries were renamed _____ in the Congressional cafeterias.",
      options: [
        "Freedom fries",
        "Froggie fries",
        "Freedom potatoes",
        "Freedom sticks"
      ],
      correctAnswer: "Freedom fries",
      explanation: "Apparently ignorant of the fact that French fries are not even French in origin, Republican representative Bob Ney proposed the change."
    },
    {
      id: 936,
      question: "In 1877, this president had the first phone in the White House installed. ",
      options: [
        "Rutherford Hayes",
        "Theodore Roosevelt",
        "Abraham Lincoln",
        "Dwight D Eisenhower"
      ],
      correctAnswer: "Rutherford Hayes",
      explanation: "Alexander Bell received the patent for the phone just one year prior. The first phone in the actual Oval Office was not installed until 1929, 52 years after Hayes introduced the phone to the White House."
    },
    {
      id: 937,
      question: "He was the first president elected to have been divorced before entering office.",
      options: [
        "Ronald Reagan",
        "Donald Trump",
        "Richard Nixon",
        "Lyndon Johnson"
      ],
      correctAnswer: "Ronald Reagan",
      explanation: "Reagan divorced Jane Wyman before marrying Nancy. Trump has had at least 2 divorces (as well as being divorced from reality). "
    },
    {
      id: 938,
      question: "He was the youngest elected president, at 43, and the first one to be born in the 20th century.",
      options: [
        "John F Kennedy",
        "Barack Obama",
        "Theodore Roosevelt",
        "Joe Biden"
      ],
      correctAnswer: "John F Kennedy",
      explanation: "Theodore Roosevelt was younger, at 42, but he became president after the assassination of William McKinley and was not elected to the position."
    },
    {
      id: 939,
      question: "The first woman to be nominated for Vice President of a major party was _____.",
      options: [
        "Geraldine Ferraro",
        "Hillary Clinton",
        "Kamala Harris",
        "Sarah Palin"
      ],
      correctAnswer: "Geraldine Ferraro",
      explanation: "Nominated in 1984, she started out as a public school teacher before becoming a Democratic member of the House from New York. She was a staunch advocate of women's equity."
    },
    {
      id: 940,
      question: "In 1984, Ronald Reagan won every state against Walter Mondale except this one.",
      options: [
        "Minnesota",
        "California",
        "New York",
        "Rhode Island"
      ],
      correctAnswer: "Minnesota",
      explanation: "Mondale carried his home state of MN, as well as D.C. He only won 13 electoral votes, to Reagan's 525."
    },
    {
      id: 941,
      question: "This president poked fun at his own work habits by saying, \"It's true that hard work never killed anybody, but I figure why take the chance.\"",
      options: [
        "Ronald Reagan",
        "George W Bush",
        "Donald Trump",
        "Calvin Coolidge"
      ],
      correctAnswer: "Ronald Reagan",
      explanation: "While none of these four were hard workers, Reagan was the only one to make light of it."
    },
    {
      id: 942,
      question: "Ronald Reagan appointed this woman to be the first US Supreme Court justice.",
      options: [
        "Sandra Day O'Connor",
        "Ruth Bader Ginsburg",
        "Sonia Sotomayor",
        "Elena Kagan"
      ],
      correctAnswer: "Sandra Day O'Connor",
      explanation: "Day O'Connor served from 1981 until 2006, and died December 1, 2023. The other 3 women were appointed by Bill Clinton and Barack Obama."
    },
    {
      id: 943,
      question: "He was the second president, after John Adams, to be the father of a president.",
      options: [
        "George HW Bush",
        "Theodore Roosevelt",
        "Andrew Johnson",
        "Andrew Jackson"
      ],
      correctAnswer: "George HW Bush",
      explanation: "The younger Bush served 2 terms, but only won the popular vote in his second term. The Roosevelts were cousins, there was no relationship between the Johnsons, and there has only been one president named Jackson."
    },
    {
      id: 944,
      question: "This president played in the first two College World Series, in 1947 and 1948, at Yale.",
      options: [
        "George HW Bush",
        "John F Kennedy",
        "Bill Clinton",
        "Joe Biden"
      ],
      correctAnswer: "George HW Bush",
      explanation: "He played as a left-handed first baseman, and in both years Yale lost. He hit .224 overall in 76 games."
    },
    {
      id: 945,
      question: "This president and his wife are the longest married presidential couple in history, married for 77 years before one spouse died.",
      options: [
        "Jimmy Carter",
        "George HW Bush",
        "Joe Biden",
        "Bill Clinton"
      ],
      correctAnswer: "Jimmy Carter",
      explanation: "Rosalynn Carter died in 2023 at age 96. Bushes were married 73 years before Barbra died at age 92. The Bidens have been married since 1977, and the Clintons since 1975."
    },
    {
      id: 946,
      question: "Dan Qualye, the vice president to _____, infamously misspelled potato in front of a group of grade schoolers.",
      options: [
        "George HW Bush",
        "George W Bush",
        "Bill Clinton",
        "Ronald Reagan"
      ],
      correctAnswer: "George HW Bush",
      explanation: "He told the 5th grader who spelled it correctly to add an 'e' at the end."
    },
    {
      id: 947,
      question: "Which president had the most Christmas trees in the White House during their term?",
      options: [
        "Barack Obama",
        "Donald Trump",
        "Dwight Eisenhower",
        "Bill Clinton"
      ],
      correctAnswer: "Barack Obama",
      explanation: "Obama had 62 trees (in 2015), Trump had 41, Clinton had 32 and Eisenhower had 26."
    },
    {
      id: 948,
      question: "He had the shortest presidency on record, lasting just 31 days in 1841. ",
      options: [
        "William Harrison",
        "Abraham Lincoln",
        "John F Kennedy",
        "James Garfield"
      ],
      correctAnswer: "William Harrison",
      explanation: "It was mistakenly believed that he caught pneumonia during his inauguration, but he actually got ill 9 days before he died and it is believed now that he got typhoid and sepsis from the sewage-laced water at the White House at that time."
    },
    {
      id: 949,
      question: "John Tyler had more children than any other president. How many did he have?",
      options: [
        "15",
        "4",
        "5",
        "7"
      ],
      correctAnswer: "15",
      explanation: "He had 8 kids with first wife Leticia (she died from a stroke one year into his term), and 7 with his second wife. He became president after William Harrison died 31 days into office."
    },
    {
      id: 950,
      question: "This Founding Father was the first signer of the Declaration of Independence, and his name has become synonymous with 'signature.'",
      options: [
        "John Hancock",
        "George Washington",
        "James Madison",
        "Martin Ecks"
      ],
      correctAnswer: "John Hancock",
      explanation: "For about 6 months, due in part to how long printing took back then, his was the only name on the Declaration. Hancock even ran for President in the very first presidential election in 1789, but lost to some guy named Washington."
    },
    {
      id: 951,
      question: "The US Constitution was finally ratified in 1788. In what year was it written?",
      options: [
        "1787",
        "1776",
        "1775",
        "1788"
      ],
      correctAnswer: "1787",
      explanation: "Delaware was the first state to ratify it, in late 1787. New Hampshire was the 9th state to sign in 1788, reaching a supermajority of the states at that time. Rhode Island was the last to sign, in 1790."
    },
    {
      id: 952,
      question: "Who is considered the \"father\" of the US Constitution?",
      options: [
        "James Madison",
        "Thomas Jefferson",
        "George Washington",
        "John Hancock"
      ],
      correctAnswer: "James Madison",
      explanation: "While a team of people drafted the Constitution, Madison is considered to have led the effort."
    },
    {
      id: 953,
      question: "Who wrote the US national anthem?",
      options: [
        "Francis Scott Key",
        "Betsty Ross",
        "Alexander Hamilton",
        "Benjamin Franklin"
      ],
      correctAnswer: "Francis Scott Key",
      explanation: "The Star Spangled Banner anthem is based on the poem Key wrote in 1814, called \"Defence of Fort M'Henry\", while watching the British attack Fort McHenry."
    },
    {
      id: 954,
      question: "Old laws in the southern US that required racial segregation were known as __________ laws.",
      options: [
        "Jim Crow",
        "Bob Jones",
        "Separate but Equal",
        "Uncle Tom"
      ],
      correctAnswer: "Jim Crow",
      explanation: "Enforced in Southern states until 1965, they were named after a pejorative term for 'negro' (itself now considered a pejorative) used in the mid 1800s."
    },
    {
      id: 955,
      question: "What document does the 4th of July commemorate?",
      options: [
        "Declaration of Independence",
        "Articles of Confederation",
        "Bill of Rights",
        "US Constitution"
      ],
      correctAnswer: "Declaration of Independence",
      explanation: "The Declaration was ratified by the Second Continental Congress on July 4, 1776, and it declared that the 13 colonies were no longer subjects of King George. "
    },
    {
      id: 956,
      question: "Which of the following is NOT one of the 3 branches of the federal government?",
      options: [
        "Congressional",
        "Legislative",
        "Executive",
        "Judicial"
      ],
      correctAnswer: "Congressional",
      explanation: "The founders felt that this would prevent abuse of power by any one branch of government. Clearly they weren't anticipating 21st century politics."
    },
    {
      id: 957,
      question: "When Lloyd Bentsen, the 1988 Vice President nominee, famously said in a debate, \"I knew Jack Kennedy...Senator, you're no Jack Kennedy,\" which future VP was he talking to?",
      options: [
        "Dan Quayle",
        "Ronald Reagan",
        "Al Gore",
        "Joe Biden"
      ],
      correctAnswer: "Dan Quayle",
      explanation: "Bentsen was the running mate to Michael Dukakis, who lost to Bush by 325 electoral votes."
    },
    {
      id: 958,
      question: "Which president claimed in a debate, \"Nobody has more respect for women than I do. Nobody.\"",
      options: [
        "Donald Trump",
        "George HW Bush",
        "Bill Clinton",
        "John F Kennedy"
      ],
      correctAnswer: "Donald Trump",
      explanation: "His respect for women has been amply demonstrated over the decades, from his many marriages, to the way he would physically show women his appreciation of them, to the many comments he makes showing that he views women as intellectual and emotional equals."
    },
    {
      id: 959,
      question: "Which president said, \"You're likeable enough, Hillary\" to Hillary Clinton during a 2008 debate in New Hampshire?",
      options: [
        "Barack Obama",
        "Donald Trump",
        "Bill Clinton",
        "George W Bush"
      ],
      correctAnswer: "Barack Obama",
      explanation: "The line was delivered during the final New Hampshire primary debate and was meant to be friendly and self-deprecating of Obama, but it was not perceived that way by many. Clinton went on to win New Hampshire. "
    },
    {
      id: 960,
      question: "Who was Joe Biden talking about when he said, \"It's hard to get any word in with this clown - excuse me, this person\"?",
      options: [
        "Donald Trump",
        "Mitch McConnell",
        "Barack Obama",
        "Michael Dukakis"
      ],
      correctAnswer: "Donald Trump",
      explanation: "In a debate in Cleveland in 2020, Trump was politely interjecting cogent, witty and insightful thoughts, and Biden took offense to these for some reason."
    },
    {
      id: 961,
      question: "Since the 1840s, on which day of the week have US Presidential elections been held?",
      options: [
        "Tuesday",
        "Monday",
        "Wednesday",
        "Thursday"
      ],
      correctAnswer: "Tuesday",
      explanation: "November was chosen as the month for presidential elections, as harvest was over for farmers but the weather hadn't turned bad. And Tuesday was chosen to allow a travel day in the era before cars."
    },
    {
      id: 962,
      question: "According to an infamous - and incorrect - headline in the Chicago Tribune, who defeated Democrat Harry Truman in the 1948 election?",
      options: [
        "Thomas Dewey",
        "George Washington",
        "Dwight Eisenhower",
        "Franklin Roosevelt"
      ],
      correctAnswer: "Thomas Dewey",
      explanation: "The Chicago Tribune was a Republican-leaning paper, and had referred to Truman as a \"nincompoop\"."
    },
    {
      id: 963,
      question: "Ronald Reagan defeated this man in 1980 to become president.",
      options: [
        "Jimmy Carter",
        "Bill Clinton",
        "George HW Bush",
        "Gerald Ford"
      ],
      correctAnswer: "Jimmy Carter",
      explanation: "A struggling economy and the Iran hostage crisis were factors that led to Carter's defeat. It is also widely believed that Reagan had aides delay the release of the hostages in order to make Carter look bad."
    },
    {
      id: 964,
      question: "When was the last time a 3rd-party candidate won any electoral votes?",
      options: [
        "1968 (George Wallace)",
        "1996 (Ross Perot)",
        "2000 (Ralph Nader)",
        "2020 (Jo Jorgensen)"
      ],
      correctAnswer: "1968 (George Wallace)",
      explanation: "Wallace was an Alabama segregationist who ran against Richard Nixon and Hubert Humphrey and won 46 electoral votes, all from southern states."
    },
    {
      id: 965,
      question: "Who was the independent candidate in 1992 who led the polls for a while and finished with 19% of the popular vote?",
      options: [
        "Ross Perot",
        "Ralph Nader",
        "Bernie Sanders",
        "George HW Bush"
      ],
      correctAnswer: "Ross Perot",
      explanation: "Perot won no electoral votes but did get almost 19 million votes in 1992, and campaigned on lowering the deficit and raising taxes on the rich."
    },
    {
      id: 966,
      question: "How many pages long is the US Constitution?",
      options: [
        "4",
        "1",
        "11",
        "86"
      ],
      correctAnswer: "4",
      explanation: "The original is on display in the National Archives in DC, in a  titanium-reinforced display filled with argon gas. There is technically a fifth page, but it simply describes how the Constitution was to be ratified and enacted."
    },
    {
      id: 967,
      question: "The only president to get elected 4 times to the presidency was _______.",
      options: [
        "Franklin Delano Roosevelt",
        "George Washington",
        "Teddy Roosevelt",
        "Ulysses S. Grant"
      ],
      correctAnswer: "Franklin Delano Roosevelt",
      explanation: "The 22nd Amendment created the two-term limit, in response to FDR's four terms (elected in 1932, 1936, 1940 and 1944). The concern was that we would become an elective monarchy."
    },
    {
      id: 968,
      question: "In what year were debates between presidential candidates first televised?",
      options: [
        "1960",
        "1964",
        "1956",
        "1968"
      ],
      correctAnswer: "1960",
      explanation: "Technically the first presidential debate occurred in 1956, but it did not actually involve the two presidential candidates (Dwight Eisenhower and Adlai Stevenson). Instead it involved two surrogates - Eleanor Roosevelt for Stevenson, and Margaret Chase Smith for Eisenhower. 1960 saw a debate between JFK and Richard Nixon."
    },
    {
      id: 969,
      question: "This presidential candidate's \"flop sweat\" on TV was thought to be a major factor in why he lost the election.",
      options: [
        "Richard Nixon",
        "Jimmy Carter",
        "Al Gore",
        "Adlai Stevenson"
      ],
      correctAnswer: "Richard Nixon",
      explanation: "During his first debate with John F Kennedy, Nixon was pale and sweaty, and kept looking at a clock, making him look \"shifty-eyed.\" Interestingly, people who *watched the debate tended to vote for Kennedy. People who *listened to the debates on radio tended to vote for Nixon. Kennedy won."
    },
    {
      id: 970,
      question: "He was the first Greek American to be nominated for president, in 1988.",
      options: [
        "Michael Dukakis",
        "Spiro Agnew",
        "Henry Kissinger",
        "Paul Tsongas"
      ],
      correctAnswer: "Michael Dukakis",
      explanation: "The former governor of Massachusetts lost when George HW Bush portrayed him as weak on crime. He was also not helped by an ad showing him riding in a tank, where he wore a very large helmet and a very large grin."
    },
    {
      id: 971,
      question: "This presidential candidate of 1844 was called \"Napolean of the Stump\" by his supporters.",
      options: [
        "James K Polk",
        "Henry Clay",
        "Andrew Jackson",
        "Martin van Buren"
      ],
      correctAnswer: "James K Polk",
      explanation: "First given the nickname while running for governor in 1823, he was short and an energetic speaker, hence the name. He was also known as \"Young Hickory\" due to his association with Andrew \"Old Hickory\" Jackson."
    },
    {
      id: 972,
      question: "Who did George W Bush defeat in the 2004 presidential election?",
      options: [
        "John Kerry",
        "Bob Dole",
        "Mitt Romney",
        "Al Gore"
      ],
      correctAnswer: "John Kerry",
      explanation: "The election was lost by just 35 electoral votes, and gave Americans a deep understanding of hanging chads. "
    },
    {
      id: 973,
      question: "Whose presidential campaign slogan was \"Return to Normalcy\"?",
      options: [
        "Warren G Harding",
        "Joe Biden",
        "Barack Obama",
        "Woodrow Wilson"
      ],
      correctAnswer: "Warren G Harding",
      explanation: "Harding was trying to reset America in 1920 after WWI and the (incorrectly named) Spanish flu had devastated the country. He also got a lot of grief for using the word 'normalcy'."
    },
    {
      id: 974,
      question: "Which president coined the term \"bully pulpit\" and used it to promote things like his \"Square Deal\"?",
      options: [
        "Theodore Roosevelt",
        "Grover Cleveland",
        "Abraham Lincoln",
        "Harry S Truman"
      ],
      correctAnswer: "Theodore Roosevelt",
      explanation: "Roosevelt felt the position of President was a great way to advocate for an agenda. The more common usage of the word 'bully' at that time meant superb or wonderful."
    },
    {
      id: 975,
      question: "This president added a permanent bowling alley to the White House, just a year before leaving office unexpectedly.",
      options: [
        "Richard Nixon",
        "Harry S Truman",
        "Gerald Ford",
        "Dwight D Eisenhower"
      ],
      correctAnswer: "Richard Nixon",
      explanation: "The single lane in the actual White House that Nixon added in 1973 is not open to staffers. But Truman had 2 lanes 'donated' to the Old Executive Office Building in 1955, and staffers are allowed to reserve it and invite up to 20 friends and family (who will each need a background check)."
    },
    {
      id: 976,
      question: "He was the first (and as of 2024, only) president to resign from office.",
      options: [
        "Richard Nixon",
        "Alexander Hamilton",
        "Thomas Jefferson",
        "Zachary Taylor"
      ],
      correctAnswer: "Richard Nixon",
      explanation: "He resigned because he knew he was almost certainly going to be impeached and removed from office for the Watergate scandal, during a time when the country and Congress preferred that their leader was not a convicted criminal.  "
    },
    {
      id: 977,
      question: "Which president was elected by the US House of Representatives (not technically by the voters) after only winning 32% of the electoral votes?",
      options: [
        "John Quincy Adams",
        "George W Bush",
        "Gerald Ford",
        "Joe Biden"
      ],
      correctAnswer: "John Quincy Adams",
      explanation: "There were multiple candidates for president in 1824, and none won a majority of electoral votes. So under the 12th amendment, the House had to choose the winner, and after lots of deals and bargaining, Adams won."
    },
    {
      id: 978,
      question: "This presidential candidate uttered the infamous phrase, \"Read my lips, no new taxes\" as his main campaign slogan in 1988.",
      options: [
        "George HW Bush",
        "Ronald Reagan",
        "Michael Dukakis",
        "Gary Hart"
      ],
      correctAnswer: "George HW Bush",
      explanation: "Once elected, he was forced to raise some existing taxes to try and balance the budget, and the general public saw this as reneging on his promise."
    },
    {
      id: 979,
      question: "This president had the longest post-presidency time span (as of 2025), at over 43 years.",
      options: [
        "Jimmy Carter",
        "Ronald Reagan",
        "George HW Bush",
        "Gerald Ford"
      ],
      correctAnswer: "Jimmy Carter",
      explanation: "He died at 100 years old on December 29, 2024, and lived 43 years and 344 days after his term ended."
    },
    {
      id: 980,
      question: "This former president has a region, a holiday, a soccer club and a postage stamp named after him in Paraguay.",
      options: [
        "Rutherford B Hayes",
        "Abraham Lincoln",
        "Teddy Roosevelt",
        "John F Kennedy"
      ],
      correctAnswer: "Rutherford B Hayes",
      explanation: "Hayes had arbitrated a dispute between Argentina and Paraguay in Paraguay's favor in 1878, hence the honorifics."
    },
    {
      id: 981,
      question: "What language did Herbert Hoover and his wife speak around the White House when they didn't want anyone to understand them?",
      options: [
        "Mandarin Chinese",
        "Pidgin English",
        "French",
        "Russian"
      ],
      correctAnswer: "Mandarin Chinese",
      explanation: "The Hoovers learned some Mandarin while he was stationed there working for a mining company."
    },
    {
      id: 982,
      question: "What instrument did Bill Clinton play on the Arsenio Hall show?",
      options: [
        "Saxophone",
        "Piano",
        "Electric guitar",
        "Upright bass"
      ],
      correctAnswer: "Saxophone",
      explanation: "It was felt that doing this earned him more votes with young black voters, and indeed Clinton was referred to as the first black President by author Toni Morrison in 1998."
    },
    {
      id: 983,
      question: "Aside from Trump, he was the only president to serve two non-consecutive terms.",
      options: [
        "Grover Cleveland",
        "Richard Nixon",
        "Dwight D Eisenhower",
        "Teddy Roosevelt"
      ],
      correctAnswer: "Grover Cleveland",
      explanation: "His first term started in 1885, but he lost the 1888 election to Benjamin Harrison. In 1892, he defeated Harrison to serve his 2nd term. He declined to be nominated for a 3rd term (still permitted at the time)."
    },
    {
      id: 984,
      question: "John Adams and Thomas Jefferson each chipped off a part of this famous writer's chair on a visit to England because they wanted a souvenir.",
      options: [
        "William Shakespeare",
        "Charles Dickens",
        "Jane Austen",
        "Geoffrey Chaucer"
      ],
      correctAnswer: "William Shakespeare",
      explanation: "The two toured Stratford-Upon-Avon in 1786 and each chipped off a sliver of the chair, as was the custom for tourists at the time."
    },
    {
      id: 985,
      question: "This president's Secret Service codename was Rawhide.",
      options: [
        "Ronald Reagan",
        "Teddy Roosevelt",
        "Bill Clinton",
        "Gerald Ford"
      ],
      correctAnswer: "Ronald Reagan",
      explanation: "The names are actually chosen by the presidential candidate from a list of options, usually meant to reflect some aspect of their personality. Reagan fancied himself a cowboy, since he played one in numerous movies."
    },
    {
      id: 986,
      question: "Jimmy Carter's Secret Service codename was ____, in recognition of his strong religious faith.",
      options: [
        "Deacon",
        "Father",
        "Friar",
        "Preacher"
      ],
      correctAnswer: "Deacon",
      explanation: "He was initially given the codename Dasher when he was a candidate. He had been a deacon since 1942, when he was only 18 years old."
    },
    {
      id: 987,
      question: "Which president signed the Civil Rights Act of 1964 into law?",
      options: [
        "Lyndon B Johnson",
        "Barack Obama",
        "Teddy Roosevelt",
        "Richard Nixon"
      ],
      correctAnswer: "Lyndon B Johnson",
      explanation: "The legislation was originally proposed by John F Kennedy but it was filibustered. After JFK was killed, LBJ was able to get it passed."
    },
    {
      id: 988,
      question: "He was the first president to die in office.",
      options: [
        "William Henry Harrison",
        "John F Kennedy",
        "Abraham Lincoln",
        "George Washington"
      ],
      correctAnswer: "William Henry Harrison",
      explanation: "Dying after just 31 days in office, his death set off a bit of a crisis in the government as up until that point, there was no plan for presidential succession."
    },
    {
      id: 989,
      question: "Where was Abraham Lincoln when he was assassinated by John Wilkes Booth?",
      options: [
        "At the theater",
        "In the bathroom",
        "Giving a speech to Congress",
        "On a camping trip"
      ],
      correctAnswer: "At the theater",
      explanation: "He was sitting in a theater box when Booth crept in and shot him in the back of the head. The theater is now a National Historic Site."
    },
    {
      id: 990,
      question: "A mentally-ill, attempted-assassin named John Hinckley tried to kill Ronald Reagan in 1981 because he was trying to impress this movie star after seeing her in Taxi Driver.",
      options: [
        "Jodie Foster",
        "Racquel Welch",
        "Diane Keaton",
        "Meryl Streep"
      ],
      correctAnswer: "Jodie Foster",
      explanation: "The lead character in the movie plans to assassinate a presidential candidate, and Hinckley initially targeted Jimmy Carter."
    },
    {
      id: 991,
      question: "This president created the funding for the interstate highway system in 1956, by signing the Federal Aid Highway Act.",
      options: [
        "Dwight D Eisenhower",
        "John F Kennedy",
        "",
        ""
      ],
      correctAnswer: "Dwight D Eisenhower",
      explanation: "The need for such a system was brought into focus when the Army sent a convoy across the country in 1919, and it took 62 days. A young Eisenhower was in the Army and part of that expedition."
    },
    {
      id: 992,
      question: "He was the only president born in New Jersey.",
      options: [
        "Grover Cleveland",
        "Donald Trump",
        "Jimmy Carter",
        "Anthony Soprano"
      ],
      correctAnswer: "Grover Cleveland",
      explanation: "He is also the only president to have spent his time in office being asked, \"What exit?\" at every press conference."
    },
    {
      id: 993,
      question: "Richard Nixon liked to top his morning cottage cheese with this common condiment.",
      options: [
        "Ketchup",
        "Salt",
        "Soy sauce",
        "Mustard"
      ],
      correctAnswer: "Ketchup",
      explanation: "Ketchup is made with tomatoes, sugar and vinegar, and \"fancy\" ketchup has 33% tomato solids, vs 25% in regular ketchup. And 'catsup' is an abomination that should never be spoken."
    },
    {
      id: 994,
      question: "This president's favorite snack in the 1980s was pork rinds.",
      options: [
        "George H.W. Bush",
        "Bill Clinton",
        "Donald Trump",
        "Jimmy Carter"
      ],
      correctAnswer: "George H.W. Bush",
      explanation: "Pork rinds were also a favorite snack of Homer Simpson, and they have enjoyed a popularity resurgence with the keto fad diet, as they are low in carbs."
    },
    {
      id: 995,
      question: "This president put Jelly Bellys on the map, as he was known for always having a jar of them on his desk after using them to help him quit pipe smoking in 1966.",
      options: [
        "Ronald Reagan",
        "George W Bush",
        "Lyndon B Johnson",
        "Harry S Truman"
      ],
      correctAnswer: "Ronald Reagan",
      explanation: "As President, Reagan had over 300,000 Jelly Bellys shipped to the White House each month, and he would distribute them to Capitol Hill and other federal buildings."
    },
    {
      id: 996,
      question: "This amendment, passed in 1933, negated the 18th, which prohibited the manufacture, sale or transport of alcohol.",
      options: [
        "21st",
        "28th",
        "3rd",
        "19th"
      ],
      correctAnswer: "21st",
      explanation: "One of the theories behind why Rolling Rock beer has \"33\" on its label is that it is a tribute to when Prohibition ended. "
    },
    {
      id: 997,
      question: "This president, who served from 1923, after Warren Harding died of a heart attack, until 1929, had an electric horse installed in the White House, so he could still \"ride\".",
      options: [
        "Calvin Coolidge",
        "Lyndon B Johnson",
        "Thomas Jefferson",
        "Teddy Roosevelt"
      ],
      correctAnswer: "Calvin Coolidge",
      explanation: "The Secret Service prohibited him from riding real horses, so he had this installed so he could blow off steam and get some exercise as President."
    },
    {
      id: 998,
      question: "This president, born in 1874 in Iowa and growing up in Oregon, was the first president born west of the Mississippi River, and served from 1929-1933.",
      options: [
        "Herbert Hoover",
        "Abraham Lincoln",
        "Gerald Ford",
        "James K Polk"
      ],
      correctAnswer: "Herbert Hoover",
      explanation: "Serving during the Great Depression, he signed the Smoot-Hawley Tariff Act which raised tariffs on foreign imports and crashed the economy further. Good thing that will never happen again!"
    },
    {
      id: 999,
      question: "The first female National Security Advisor, Condoleeza RIce, served under this president during his second term.",
      options: [
        "George W. Bush",
        "George HW Bush",
        "Barack Obama",
        "Jimmy Carter"
      ],
      correctAnswer: "George W Bush",
      explanation: "She also served in the elder Bush's administration, as senior director of Soviet and Eastern European affairs in the National Security Council."
    },
    {
      id: 1000,
      question: "The first president ever to be impeached was ____, who ascended to the Presidency because of Lincoln's assassination.",
      options: [
        "Andrew Johnson",
        "Andrew Jackson",
        "James Monroe",
        "Franklin D Roosevelt"
      ],
      correctAnswer: "Andrew Johnson",
      explanation: "He tried to use the Tenure of Office Act to get rid of his Secretary of War, Edwin Stanton. Congress took offense and impeached him."
    },
    {
      id: 1001,
      question: "This president fathered more children (15) than any other, and became president only after William Harrison died after 31 days in office.",
      options: [
        "John Tyler",
        "John F Kennedy",
        "Thomas Jefferson",
        "Donald Trump"
      ],
      correctAnswer: "John Tyler",
      explanation: "His last grandchild (Harrison Ruffin Tyler) died in May 2025 at age 96. He was born in 1928, while President Tyler was born in 1790."
    },
    {
      id: 1002,
      question: "He was the first left-handed president, elected in 1880, and he only served for 6 months before being assassinated (but not for being a lefty).",
      options: [
        "James Garfield",
        "Martin Van Buren",
        "Woodrow Wilson",
        "Warren Harding"
      ],
      correctAnswer: "James Garfield",
      explanation: "Garfield was killed by a mentally ill man who was convinced that Garfield was preventing him being named consul to Paris."
    },
    {
      id: 1003,
      question: "He was the second president to be assassinated in office in 1881, only 16 years after Lincoln was killed.",
      options: [
        "James Garfield",
        "Chester D Witherington",
        "Ulysses S Grant",
        "Millard Fillmore"
      ],
      correctAnswer: "James Garfield",
      explanation: "He was not running for president when nominated, and his nomination was meant to break a deadlock between two Republican factions at the time, the Stalwarts and the Half Breeds."
    },
    {
      id: 1004,
      question: "This president married a woman for whom he was previously a guardian (after her father died). It was and still is the only wedding held at the White House, in 1886. She was 21 and he was 49.",
      options: [
        "Grover Cleveland",
        "Ulysses S Grant",
        "Millard Fillmore",
        "Teddy Roosevelt"
      ],
      correctAnswer: "Grover Cleveland",
      explanation: "She is still the youngest First Lady in history, and they had 5 children."
    },
    {
      id: 1005,
      question: "This beloved president - the only one to serve more than two terms - married his cousin.",
      options: [
        "Franklin D Roosevelt",
        "George Washington",
        "Grover Cleveland",
        "Donald Trump"
      ],
      correctAnswer: "Franklin D Roosevelt",
      explanation: "FDR's parents were sixth cousins, so marrying his 5th cousin once removed was no big deal in his mind."
    },
    {
      id: 1006,
      question: "He was the only president, and prior to that, vice president, never elected to either position.",
      options: [
        "Gerald Ford",
        "George W Bush",
        "Ronald Reagan",
        "Franklin D Roosevelt"
      ],
      correctAnswer: "Gerald Ford",
      explanation: "Appointed VP after Nixon's VP Spiro Agnew resigned after being convicted of tax evasion. Then he became President when Nixon resigned while facing certain impeachment for the Watergate scandal."
    },
    {
      id: 1007,
      question: "His birth name was Leslie Lynch King, but by the time he was our 38th president, we knew him as ____.",
      options: [
        "Gerald Ford",
        "Jimmy Carter",
        "Richard Nixon",
        "Ronald Reagan"
      ],
      correctAnswer: "Gerald Ford",
      explanation: "His birth parents separated 16 days after his birth, and his mother remarried a man named Gerald Rudolff Ford when the future president was 3 years old. The official name change did not occur until he was 22 years old."
    },
    {
      id: 1008,
      question: "This president has won more Grammys (three) than any other president. He also had more nominations (9) than any other politician.",
      options: [
        "Jimmy Carter",
        "John F Kennedy",
        "Richard Nixon",
        "Barack Obama"
      ],
      correctAnswer: "Jimmy Carter",
      explanation: "Carter won 3 times for Best Spoken Album. Obama won twice for the same category. Nixon and JFK were nominated but did not win."
    },
    {
      id: 1009,
      question: "This president hosted his daughter Susan's prom at the White House in 1975, the only prom held there.",
      options: [
        "Gerald Ford",
        "Jimmy Carter",
        "Ronald Reagan",
        "Richard Nixon"
      ],
      correctAnswer: "Gerald Ford",
      explanation: "His daughte's senior class had to pay $1,300 to cover expenses, and had to agree to hire a band that had no outstanding drug charges. The President and his wife were in Europe for a NATO summit at the time."
    },
    {
      id: 1010,
      question: "He was the first Speaker of the House to be removed, in October 2023, because he had the audacity to pass a bill to fund the government.",
      options: [
        "Kevin McCarthy",
        "John Boehner",
        "Newt Gingrich",
        "Mike Johnson"
      ],
      correctAnswer: "Kevin McCarthy",
      explanation: "His appointment to the position took 15 ballots, and he only lasted 10 months. The honorable, ethical and highly respected Matt Gaetz filed the motion to remove McCarthy."
    },
    {
      id: 1011,
      question: "He was the first hispanic to hold the position of Secretary of State.",
      options: [
        "Marco Rubio",
        "Ted Cruz",
        "Alejandro Mayorkas",
        "Ruben Gallego"
      ],
      correctAnswer: "Marco Rubio",
      explanation: "Rubio referred to Trump as a \"con artist\" and said Trump is \"wholly unprepared to be president of the United States\". So of course he serves with pride and honor under Trump."
    },
    {
      id: 1012,
      question: "He was the only president to have won a Purple Heart, for being wounded during WWII.",
      options: [
        "John F Kennedy",
        "Ronald Reagan",
        "George HW Bush",
        "Jimmy Carter"
      ],
      correctAnswer: "John F Kennedy",
      explanation: "His PT boat was hit by a Japanese destroyer and his back was injured. He swam for 3 miles pulling one of his crewmates by their life preserver to get him to land. He was awarded the Purple Heart and the Navy & Marine Corps Medal."
    },
    {
      id: 1013,
      question: "This director made an Oscar winning 1991 movie about the assassination of John F Kennedy, called JFK.",
      options: [
        "Oliver Stone",
        "Steven Spielberg",
        "Stanley Kubrick",
        "Francis Ford Coppola"
      ],
      correctAnswer: "Oliver Stone",
      explanation: "The film explored many of the controversies and questions around the Kennedy assassination, in particular the \"magic bullet\" that defied the laws of physics by reversing direction twice while causing 7 wounds. "
    },
    {
      id: 1014,
      question: "He was president during the Cuban Missile Crisis, which almost brought the US and USSR to war in 1962.",
      options: [
        "John F Kennedy",
        "Ronald Reagan",
        "George HW Bush",
        "Dwight D Eisenhower"
      ],
      correctAnswer: "John F Kennedy",
      explanation: "The US placed nuclear missiles in Italy and Turkey, so the the Soviets placed missiles in Cuba. It is believed to be the closest we've come to nuclear war."
    },
    {
      id: 1015,
      question: "JFK's alleged assassin was shot and killed by this nightclub owner.",
      options: [
        "Jack Ruby",
        "David Ferry",
        "Lee Harvey Oswald",
        "Earl Warren"
      ],
      correctAnswer: "Jack Ruby",
      explanation: "Ruby shot and killed Oswald while the latter was being escorted from a police station, 2 days after the assassination. The photographer won the Pulitzer prize that year (1964)."
    },
    {
      id: 1016,
      question: "This famous actress sung Happy Birthday to JFK in 1962.",
      options: [
        "Marilyn Monroe",
        "Gina Lollobrigida",
        "Raquel Welch",
        "Elizabeth Taylor"
      ],
      correctAnswer: "Marilyn Monroe",
      explanation: "It was widely rumored that JFK and Marilyn had an affair, in part because of her sultry performance singing the birthday song to him in May 1962, just months before she killed herself with a drug overdose."
    },
    {
      id: 1017,
      question: "He was the only president to have won the Pulitzer Prize, for his book Profiles in Courage, in 1957.",
      options: [
        "John F Kennedy",
        "Harry S Truman",
        "Dwight D Eisenhower",
        "Ronald Reagan"
      ],
      correctAnswer: "John F Kennedy",
      explanation: "The book was written by Kennedy as he recovered from a back injury incurred during WWII."
    },
    {
      id: 1018,
      question: "He was the last president to wear a top hat at his inauguration in 1961.",
      options: [
        "John F Kennedy",
        "Lyndon Johnson",
        "Dwight D Eisenhower",
        "Harry S Truman"
      ],
      correctAnswer: "John F Kennedy",
      explanation: "The collapsible version of a top hat is known as an opera hat. "
    },
    {
      id: 1019,
      question: "JFK was the first president to have a poet read at his inauguration, and this poet read his poem \"The Gift Outright\".",
      options: [
        "Robert Frost",
        "ee cummings",
        "Allen Ginsberg",
        "Langston Hughes"
      ],
      correctAnswer: "Robert Frost",
      explanation: "Frost described the poem as \"a history of the United States\", but is also considered to imply that before white Europeans arrived, the nation was uninhabited."
    },
    {
      id: 1020,
      question: "His \"Great Society\" program included the introduction of Medicare, Medicaid and Social Security.",
      options: [
        "Lyndon B Johnson",
        "Franklin D Roosevelt",
        "Harry S Truman",
        "John F Kennedy"
      ],
      correctAnswer: "Lyndon B Johnson",
      explanation: "The programs were introduced in 1964 and 1965, and were part of LBJs plan to eliminate poverty and racial injustice. Fortunately those 2 issues have been solved ever since then."
    },
    {
      id: 1021,
      question: "The Paris Peace Accords, which ended US involvement in the Vietnam War, were agreed to by this president.",
      options: [
        "Richard Nixon",
        "Lyndon Johnson",
        "Gerald Ford",
        "Jimmy Carter"
      ],
      correctAnswer: "Richard Nixon",
      explanation: "US involvement in Vietnam began in 1944, and hit a peak when over 500,000 troops were in Vietnam in 1969. The last Americans did not leave until 1975 with the fall of Saigon."
    },
    {
      id: 1022,
      question: "This president was responsible for establishing the Environmental Protection Agency.",
      options: [
        "Richard Nixon",
        "Jimmy Carter",
        "Bill Clinton",
        "Ronald Reagan"
      ],
      correctAnswer: "Richard Nixon",
      explanation: "Nixon was responding to widespread concerns about human damage to the environment, with the burning of the Cuyahoga River in 1969 a key moment in prompting action."
    },
    {
      id: 1023,
      question: "Richard Nixon signed this civil rights law into effect in 1972, which prohibited discrimination in education or activities on the basis of gender.",
      options: [
        "Title IX",
        "Title VI",
        "Title X",
        "Title VIII"
      ],
      correctAnswer: "Title IX",
      explanation: "Despite it's link to sports equity, it was actually designed to prohibit sex-based discrimination against women in any school that received federal funding. "
    },
    {
      id: 1024,
      question: "He was the first American President to make an official visit to Moscow, to start to thaw relations between the two countries. ",
      options: [
        "Richard Nixon",
        "Ronald Reagan",
        "Jimmy Carter",
        "John F Kennedy"
      ],
      correctAnswer: "Richard Nixon",
      explanation: "The 1972 Moscow Summit between Nixon and Leonid Brezhnev featured the signing of the Strategic Arms Limitation Treaty, among others."
    },
    {
      id: 1025,
      question: "This president's middle name was the inspiration for the name of Bart Simpson's best friend.",
      options: [
        "Richard Nixon",
        "Lydon Johnson",
        "Dwight D Eisenhower",
        "Gerald R Ford"
      ],
      correctAnswer: "Richard Nixon",
      explanation: "Nixon's middle name of Milhous was his mother's maiden name, and The Simpsons slightly altered its spelling to Milhouse. The character's full name is Milhouse Mussolini Van Houten and he first appeared in 1988."
    },
    {
      id: 1026,
      question: "In an attempt to save energy, this president mandated that daylight saving would be in effect year round.",
      options: [
        "Richard Nixon",
        "Jimmy Carter",
        "Barack Obama",
        "George W Bush"
      ],
      correctAnswer: "Richard Nixon",
      explanation: "Nixon was hoping to cut energy demand at a time when there was a US gas shortage, since OPEC cut off gas supplies in protest of the US sending arms and money to Israel during the Yom Kippur War in 1973."
    },
    {
      id: 1027,
      question: "This president almost caused a mistrial of Charles Manson, by announcing in a press conference that Manson was \"guilty, directly or indirectly, of 8 murders without reason.\"",
      options: [
        "Richard Nixon",
        "Donald Trump",
        "Bill Clinton",
        "Jimmy Carter"
      ],
      correctAnswer: "Richard Nixon",
      explanation: "The Manson Family was a deranged cult that killed at least 9 people in the late 1960s. Manson died in jail in 2017."
    },
    {
      id: 1028,
      question: "This president received offers upon his graduation from the University of Michigan to play pro football for the Detroit Lions and Green Bay Packers.",
      options: [
        "Gerald Ford",
        "Ronald Reagan",
        "John F Kennedy",
        "Dwight D Eisenhower"
      ],
      correctAnswer: "Gerald Ford",
      explanation: "Despite his many athletic achievements, he was forever immortalized as a klutz based on the time he tripped getting off Air Force One in 1975."
    },
    {
      id: 1029,
      question: "Richard Nixon appointed Gerald Ford to the VP role when this VP had to resign over allegations of tax evasion.",
      options: [
        "Spiro Agnew",
        "Adlai Stevenson",
        "Nelson Rockefeller",
        "Hubert Humphrey"
      ],
      correctAnswer: "Spiro Agnew",
      explanation: "Agnew was taking kickbacks from a Maryland developer well into his Vice Presidency and resigned in 1973."
    },
    {
      id: 1030,
      question: "This president had two different women, Squeaky Fromme and Sara Jane Moore, attempt to kill him, the only known attempted female assassins of a US president.",
      options: [
        "Gerald Ford",
        "Bill Clinton",
        "Donald Trump",
        "Dwight D Eisenhower"
      ],
      correctAnswer: "Gerald Ford",
      explanation: "Fromme was part of the Manson Family cult and her gun never fired. Moore was a radical political activist whose shot went wide and missed the President."
    },
    {
      id: 1031,
      question: "This president's well-known mangling of English resulted in him once describing someone as having \"sickle cell Armenia\".",
      options: [
        "Gerald Ford",
        "George W Bush",
        "Donald Trump",
        "Ronald Reagan"
      ],
      correctAnswer: "Gerald Ford",
      explanation: "While any one of these masters of the language could have said it, it was Ford. He also once referred to the noble American \"work ethnic\"."
    },
    {
      id: 1032,
      question: "This president once locked himself out of the White House when letting his dog, Liberty, out for a break in the middle of the night.",
      options: [
        "Gerald Ford",
        "Ronald Reagan",
        "Franklin D Roosevelt",
        "John F Kennedy"
      ],
      correctAnswer: "Gerald Ford",
      explanation: "The dog was pregnant and needed the early morning break. The president was alone and when he tried to get back up to the residence, all doors were automatically locked."
    },
    {
      id: 1033,
      question: "This former president appeared as himself in 1983 on Dynasty with his wife, and was paid $330 for it.",
      options: [
        "Gerald Ford",
        "Ronald Reagan",
        "Richard Nixon",
        "Bill Clinton"
      ],
      correctAnswer: "Gerald Ford",
      explanation: "On the show, he greeted the fictional Blake Carrington at the Denver Carousel Ball by saying, \"Blake, it's wonderful to see you.\""
    },
    {
      id: 1034,
      question: "Prior to Barack Obama, he was the last president to win the Nobel Peace Prize",
      options: [
        "Jimmy Carter",
        "Woodrow Wilson",
        "Theodore Roosevelt",
        "George W Bush"
      ],
      correctAnswer: "Jimmy Carter",
      explanation: "All except Bush were winners of the Nobel Peace Prize. But Bush does have a street named after him in Tbilisi, Georgia."
    },
    {
      id: 1035,
      question: "This presidential candidate told Playboy magazine that he \"committed adultery in my heart\" in 1976.",
      options: [
        "Jimmy Carter",
        "Ronald Reagan",
        "Gerald Ford",
        "Bill Clinton"
      ],
      correctAnswer: "Jimmy Carter",
      explanation: "In the interview, Carter was trying to explain that he would not be a rigid religious zealot if he were elected, but the comment was taken out of context and almost cost him the election."
    },
    {
      id: 1036,
      question: "This president installed solar panels on the grounds of the White House, to promote renewable energy during the midst of an energy crisis.",
      options: [
        "Jimmy Carter",
        "Ronald Reagan",
        "Donald Trump",
        "Joe Biden"
      ],
      correctAnswer: "Jimmy Carter",
      explanation: "The panels were used to supply power to water heaters. Reagan had them removed during his presidency because...oil. One of the panels found its way to a museum in China."
    },
    {
      id: 1037,
      question: "This president prevented the USA from competing in the summer Olympics in Moscow in 1980.",
      options: [
        "Jimmy Carter",
        "Ronald Reagan",
        "Gerald Ford",
        "George HW Bush"
      ],
      correctAnswer: "Jimmy Carter",
      explanation: "The boycott was done to protest the Soviet Union's invasion of Afghanistan in 1979. The USSR spent 10 years there and lost, in part due to weapons we gave the mujaheddin. The same weapons were used against us 12 years later when we invaded."
    },
    {
      id: 1038,
      question: "He was the first president to send and recieve email while in office.",
      options: [
        "Bill Clinton",
        "George HW Bush",
        "Ronald Reagan",
        "Gerald Ford"
      ],
      correctAnswer: "Bill Clinton",
      explanation: "Email was introduced to the White House toward the end of Bush's presidency, but Clinton was the first to have a public email address (ClintonPz@aol.com). He sent two emails as President."
    },
    {
      id: 1039,
      question: "This future president appeared on the game show What's My Line? while serving as governor in 1973.",
      options: [
        "Jimmy Carter",
        "Bill Clinton",
        "Ronald Reagan",
        "Herbert Hoover"
      ],
      correctAnswer: "Jimmy Carter",
      explanation: "What's My Line? was a game show where people asked yes/no questions of a mystery guest to try and figure out who they were. It aired from 1950-1975."
    },
    {
      id: 1040,
      question: "Jimmy Carter brokered a peace deal between Israel and ___ in 1978, the first such agreement between Israel and any of its neighbors.",
      options: [
        "Egypt",
        "Syria",
        "Iran",
        "Iraq"
      ],
      correctAnswer: "Egypt",
      explanation: "In 1978, secret talks were held at Camp David between Israel and Egypt, after 14 months of effort by Carter to get the two nations to talk."
    },
    {
      id: 1041,
      question: "He was the first president to be born in a hospital, in 1924, in Georgia.",
      options: [
        "Jimmy Carter",
        "Calvin Coolidge",
        "John F Kennedy",
        "Richard Nixon"
      ],
      correctAnswer: "Jimmy Carter",
      explanation: "Prior to this time, most births were done at home. Hospital births did not start becoming common until the 1920s."
    },
    {
      id: 1042,
      question: "The desk in the Oval Office that has been used by almost all presidents since 1880 is known as the ____ desk.",
      options: [
        "Resolute",
        "Decision",
        "Commander's",
        "President's"
      ],
      correctAnswer: "Resolute",
      explanation: "It was a gift from Queen Victoria and made from timbers from the HMS Resolute, a British Navy ship lost in the Arctic in 1854."
    },
    {
      id: 1043,
      question: "Which amendment gave black men the right to vote, at least theoretically, in 1870.",
      options: [
        "15th",
        "19th",
        "13th",
        "14th"
      ],
      correctAnswer: "15th",
      explanation: "It wasn't until 1965 with the Voting Rights Act that all deterrents to minority voting were abolished. And thanks to current efforts in many states, attempts are being made to once again disenfranchise minority voters."
    },
    {
      id: 1044,
      question: "Which of the following presidents did NOT have a poetry reading at their inauguration?",
      options: [
        "George HW Bush",
        "Bill Clinton",
        "John F Kennedy",
        "Barack Obama"
      ],
      correctAnswer: "George HW Bush",
      explanation: "No Republican president to date has had poetry read at their inauguration."
    },
    {
      id: 1045,
      question: "Who was the first black man to serve in the US Congress?",
      options: [
        "Hiram Revels",
        "John Lewis",
        "Edward Brooke",
        "Blanche Kelso Bruce"
      ],
      correctAnswer: "Hiram Revels",
      explanation: "Appointed by the Mississippi legislature in 1870, he did not seek re-election in 1871. The second black congressman was also from Mississippi in 1875, Blanche Kelso Bruce."
    },
    {
      id: 1046,
      question: "Baby Ruth candy bars, developed in 1920, are allegedly named after this president's daughter, who was named Ruth but nicknamed Baby, and not after Babe Ruth, as commonly believed.",
      options: [
        "Grover Cleveland",
        "Bill Clinton",
        "Jimmy Carter",
        "Thomas Jefferson"
      ],
      correctAnswer: "Grover Cleveland",
      explanation: "There is also a hypothesis that the candy maker wanted to avoid paying royalties to Babe Ruth, and made up the story about naming the bar after the president's daughter. "
    },
    {
      id: 1047,
      question: "Abraham Lincoln was known for being a lawyer, but he also held numerous other jobs before becoming president. Which of the following jobs did he NOT hold?",
      options: [
        "Bartender",
        "Store clerk",
        "Railsplitter",
        "Boatman"
      ],
      correctAnswer: "Bartender",
      explanation: "He was self educated and had to work many jobs as a young man to help support his family after his mother died when he was 9 years old. "
    },
    {
      id: 1048,
      question: "Andrew Johnson worked as a ____ before being elected president in 1864.",
      options: [
        "Tailor",
        "Tinker",
        "Soldier",
        "Spy"
      ],
      correctAnswer: "Tailor",
      explanation: "His mother apprenticed him to a local tailor at age 10 and he was legally obligated to serve as an apprentice until age 21, but he ran away at age 15."
    },
    {
      id: 1049,
      question: "Joe Biden had a job in college working as a(n) _____.",
      options: [
        "Lifeguard",
        "Encyclopedia salesman",
        "Short order cook",
        "Ski instructor"
      ],
      correctAnswer: "Lifeguard",
      explanation: "While working there, he had a run in with a local gang member named Corn Pop who threatened to cut the future politician with a straight razor."
    },
    {
      id: 1050,
      question: "If the Electoral College vote is tied, who/what determines who the President will be?",
      options: [
        "House of Representatives",
        "Senate",
        "Supreme Court",
        "The current sitting president"
      ],
      correctAnswer: "House of Representatives",
      explanation: "In the House, each state gets one vote and one person needs to get 26 or more votes to win. The Senate determines the Vice President by the same process."
    },
    {
      id: 1051,
      question: "The color blue on the US flag represents a number of things. Which of the following is NOT one of those things?",
      options: [
        "Valor",
        "Vigilence",
        "Perseverence",
        "Justice"
      ],
      correctAnswer: "Valor",
      explanation: "Valor is one of the meanings of the color red (the other is hardiness), and white stands for purity and innocence."
    },
    {
      id: 1052,
      question: "This university has produced the most US presidents, at 8 as of 2024.",
      options: [
        "Harvard",
        "Yale",
        "Princeton",
        "Slippery Rock State University"
      ],
      correctAnswer: "Harvard",
      explanation: "The last president who did not have a college degree was Harry S Truman, elected in 1944. "
    },
    {
      id: 1053,
      question: "This then-intern and her blue dress almost brought down the presidency of Bill Clinton.",
      options: [
        "Monica Lewinsky",
        "Juanita Broaddrick",
        "Gennifer Flowers",
        "Paula Jones"
      ],
      correctAnswer: "Monica Lewinsky",
      explanation: "The affair led to an impeachment of Clinton. Lewinsky is now an activist against cyberbullying."
    },
    {
      id: 1054,
      question: "Ruth Bader Ginsburg was appointed to the Supreme Court by this president.",
      options: [
        "Bill Clinton",
        "Barack Obama",
        "George W Bush",
        "George HW Bush"
      ],
      correctAnswer: "Bill Clinton",
      explanation: "Known as \"the Notorious RBG\", she was a liberal icon whose determination to stay on the Court until her death in 2020 led to Trump getting another Supreme Court nominee."
    },
    {
      id: 1055,
      question: "The Family and Medical Leave Act, giving up to 12 weeks of leave, was signed into law by this president.",
      options: [
        "Bill Clinton",
        "Barack Obama",
        "George W Bush",
        "Jimmy Carter"
      ],
      correctAnswer: "Bill Clinton",
      explanation: "To be eligible for FMLA, a person must have worked for their employer for at least 12 months, have worked at least 1,250 hours, and the employer must have at least 50 employees."
    },
    {
      id: 1056,
      question: "He was the first sitting president to visit an Olympic games outside the US, when he attended the Summer Olympics in Beijing.",
      options: [
        "George W Bush",
        "Barack Obama",
        "Joe Biden",
        "Donald Trump"
      ],
      correctAnswer: "George W Bush",
      explanation: "Bush was a well-known sports fan, and was hoping to separate the Olympics from politics by attending the Games as a fan."
    },
    {
      id: 1057,
      question: "He was the first elected president to be impeached.",
      options: [
        "Bill Clinton",
        "Andrew Johnson",
        "Donald Trump",
        "Richard Nixon"
      ],
      correctAnswer: "Bill Clinton",
      explanation: "Johnson was the first to be impeached in 1868, but he became president upon Lincoln's assassination. Nixon resigned before impeachment. Trump was impeached twice so far (as of 2025)."
    },
    {
      id: 1058,
      question: "He was the only president to have been a Rhodes Scholar.",
      options: [
        "Bill Clinton",
        "George Washington",
        "Abraham Lincoln",
        "George W Bush"
      ],
      correctAnswer: "Bill Clinton",
      explanation: "Rhodes Scholars are selected from American universities based on their scholarly achievements, commitment to others and the common good, and their potential for leadership in their field."
    },
    {
      id: 1059,
      question: "Al Gore defeated this Republican by more than 500,000 votes in 2000 but lost the Electoral College vote by 5.",
      options: [
        "George W Bush",
        "Bill Clinton",
        "John McCain",
        "Mitt Romney"
      ],
      correctAnswer: "George W Bush",
      explanation: "It was the first election since 1888 where the candidate who won the popular vote did not win the presidency."
    },
    {
      id: 1060,
      question: "This president's approach to gays and lesbians in the military was summarized as \"Don't ask, don't tell.\"",
      options: [
        "Bill Clinton",
        "Ronald Reagan",
        "George HW Bush",
        "Barack Obama"
      ],
      correctAnswer: "Bill Clinton",
      explanation: "Meant to be a compromise that would allow gays to serve without fear of punishment as long as they didn't admit they were gay, it was in effect from 1994-2011. Gays and lesbians can now serve openly."
    },
    {
      id: 1061,
      question: "Who was the first president to fly on an aircraft?",
      options: [
        "Theodore Roosevelt",
        "Franklin D Roosevelt",
        "Abraham Lincoln",
        "Harry S Truman"
      ],
      correctAnswer: "Theodore Roosevelt",
      explanation: "In 1910, after leaving office, he flew on an early Wright Flyer, flying over a county fair in St Louis."
    },
    {
      id: 1062,
      question: "Who was President during the 9/11 attacks?",
      options: [
        "George W Bush",
        "Bill Clinton",
        "Barack Obama",
        "Dick Cheney"
      ],
      correctAnswer: "George W Bush",
      explanation: "He was reading a story called \"The Pet Goat\" to a class of first graders, and he pronounced almost every word correctly!"
    },
    {
      id: 1063,
      question: "His administration oversaw the botched response to Hurricane Katrina.",
      options: [
        "George W Bush",
        "Bill Clinton",
        "Barack Obama",
        "George HW Bush"
      ],
      correctAnswer: "George W Bush",
      explanation: "Bush infamously praised his FEMA director Michael Brown saying, \"Brownie, you're doing a heckuva job!\" Katrina killed 1,833 and cost $170 billion."
    },
    {
      id: 1064,
      question: "He was the only president to have been a part owner of a MLB team.",
      options: [
        "George W Bush",
        "Ronald Reagan",
        "Franklin Delano Roosevelt",
        "Donald Trump"
      ],
      correctAnswer: "George W Bush",
      explanation: "He purchased part of the Houston Astros with a loan financed in part by his sale of stock in Harken Energy, which created suspicion of insider trading as he was on the board of Harken."
    },
    {
      id: 1065,
      question: "He was the only president to have twin daughters.",
      options: [
        "George W Bush",
        "Barack Obama",
        "Herbert Hoover",
        "George Washington"
      ],
      correctAnswer: "George W Bush",
      explanation: "Jenna and Barbra are fraternal twins born in 1981. George Washington had no children, Obama had 2 non-twin girls, and Hoover had 2 boys."
    },
    {
      id: 1066,
      question: "He is the only president to have an MBA.",
      options: [
        "George W Bush",
        "Bill Clinton",
        "Donald Trump",
        "Barack Obama"
      ],
      correctAnswer: "George W Bush",
      explanation: "JFK was the only other president to have gone to graduate school for business, but he audited classes and did not get a degree."
    },
    {
      id: 1067,
      question: "Who was the first president to have their State of the Union address broadcast live on the internet?",
      options: [
        "Bill Clinton",
        "Barack Obama",
        "George HW Bush",
        "George W Bush"
      ],
      correctAnswer: "Bill Clinton",
      explanation: "His second inauguration in 1997 was the first to be live streamed."
    },
    {
      id: 1068,
      question: "George Washington's inauguration as the first president took place in what city?",
      options: [
        "New York",
        "Philadelphia",
        "Washington D.C.",
        "Baltimore"
      ],
      correctAnswer: "New York",
      explanation: "The initial Federal Congress was in New York in 1789, but his inauguration was almost 2 months after he started his term."
    },
    {
      id: 1069,
      question: "Until 1937, inaugurations took place in which month?",
      options: [
        "March",
        "April ",
        "November",
        "January"
      ],
      correctAnswer: "March",
      explanation: "It used to be on March 4 (or the 5th if the 4th was a Sunday) as that was the traditional start of the year for government operations. It was moved to January after the 1933 ratification of the 20th amendment."
    },
    {
      id: 1070,
      question: "Who normally officiates at the swearing-in of the new president?",
      options: [
        "Chief Justice of Supreme Court",
        "The outgoing president",
        "The Speaker of the House",
        "The Secretary of Defense"
      ],
      correctAnswer: "Chief Justice of the Supreme Court",
      explanation: "The Chief Justice also presides during a presidential impeachment."
    },
    {
      id: 1071,
      question: "The first plane with the official designation of Air Force One was flown in by this president, in 1953.",
      options: [
        "Dwight D Eisenhower",
        "John F Kennedy",
        "Richard Nixon",
        "Harry S Truman"
      ],
      correctAnswer: "Dwight D Eisenhower",
      explanation: "The plane was the Columbine II, a 4-prop Lockheed Constellation, and is the only presidential plane to be sold to a private party."
    },
    {
      id: 1072,
      question: "How many of the 55 delegates to the Constitutional Convention actually signed the Constitution?",
      options: [
        "39",
        "42",
        "54",
        "55"
      ],
      correctAnswer: "39",
      explanation: "Numerous appointed delegates did not actually attend (but still submitted an expense report), and 3 of the attending delegates did not sign because there was no Bill of Rights."
    },
    {
      id: 1073,
      question: "The youngest person to sign the Constitution was James Dayton, 26, a New Jersey delegate. Who was the oldest?",
      options: [
        "Benjamin Franklin",
        "George Washington",
        "Alexander Hamilton",
        "John Hancock"
      ],
      correctAnswer: "Benjamin Franklin",
      explanation: "Franklin was 81 when he signed, and needed help to do so due to his infirmities."
    },
    {
      id: 1074,
      question: "Of the states in existence at the time of the Constitutional Convention, this is the only one that did not send any delegates.",
      options: [
        "Rhode Island",
        "Georgia",
        "Maine",
        "Vermont"
      ],
      correctAnswer: "Rhode Island",
      explanation: "Rhode Island was concerned that too much power would be put in a central government, and they feared a loss of religious freedom. Plus they wanted to continue printing their own money."
    },
    {
      id: 1075,
      question: "This state sent the most delegates at the Constitutional Convention, with 8.",
      options: [
        "Pennsylvania",
        "New Jersey",
        "Virginia",
        "North Carolina"
      ],
      correctAnswer: "Pennsylvania",
      explanation: "The number of delegates was determined by each state. The original purpose of the convention was to revise the Articles of Confederation, but framers quickly moved toward creating an entirely new government."
    },
    {
      id: 1076,
      question: "This state's name was misspelled on the US Constitution.",
      options: [
        "Pennsylvania",
        "Connecticut",
        "California",
        "Massachusetts"
      ],
      correctAnswer: "Pennsylvania",
      explanation: "Spelled 'Pensylvania' in the spot where the signers signed, it has also been spelled 'Pennsilvania', 'Pensilvania' and 'Pennsyltucky' over the centuries."
    },
    {
      id: 1077,
      question: "Ronald Reagan promoted a space-based laser and particle beam defense system commonly referred to as \"Star Wars\". It's real name was ___.",
      options: [
        "SDI - Strategic Defense Initiative",
        "SSS - Stratospheric Shield System",
        "STOP - Strategic Tropospheric Operations for Protection",
        "MSM - Missiles Stopping Missiles"
      ],
      correctAnswer: "SDI - Strategic Defense Initiative",
      explanation: "While the system was never successful, some argue that it still helped to bankrupt the Soviet military."
    },
    {
      id: 1078,
      question: "The term for when an accused person is deliverd from one jurisdiction to the law enforcement in another jurisdiction is ____.",
      options: [
        "Extradition",
        "Elocution",
        "Ejectment",
        "Estoppel"
      ],
      correctAnswer: "Extradition",
      explanation: "The US has extradition treaties with 116 nations, and the very first one was with Ecuador in 1873."
    },
    {
      id: 1079,
      question: "The highest ranking Asian American in US Government was Kamala Harris (who is half Indian American) when she was Vice President. Prior to her, who was the highest ranking Asian American?",
      options: [
        "Daniel Inouye",
        "Norman Mineta",
        "Daniel Akaka",
        "Bob Matsui"
      ],
      correctAnswer: "Daniel Inouye",
      explanation: "He represented Hawaii for just shy of 50 years, and died in office in 2012."
    },
    {
      id: 1080,
      question: "Who was the first black woman to serve as mayor of Chicago?",
      options: [
        "Lori Lightfoot",
        "Keisha Lance Bottoms",
        "London Breed",
        "Queen Latifah"
      ],
      correctAnswer: "Lori Lightfoot",
      explanation: "Elected in 2019, she was the first incumbent Chicago mayor in 40 years to not win re-election in 2023. "
    },
    {
      id: 1081,
      question: "The street in Washington, DC, most associated with lobbying is ____ Street.",
      options: [
        "K",
        "M",
        "18th",
        "L"
      ],
      correctAnswer: "K",
      explanation: "Lobbyists serve a vital role in making sure that large corporations and the wealthy are not unjustly discriminated against by all the poor and middle class people. "
    },
    {
      id: 1082,
      question: "How long does a Supreme Court justice serve?",
      options: [
        "As long as they want",
        "Until age 72",
        "For 25 years, regardless of age",
        "Until their death"
      ],
      correctAnswer: "As long as they want",
      explanation: "Fortunately, Justices practice at the highest ethical, legal and moral standards, and would never do things like take large gifts from donors, rule on cases where they have a conflict of interest, or show support for insurrectionists. "
    },
    {
      id: 1083,
      question: "What word/phrase describes the practice of manipulating district boundaries to give an advantage to one political party?",
      options: [
        "Gerrymandering",
        "Filibustering",
        "Vulcanizing",
        "Stacking and packing"
      ],
      correctAnswer: "Gerrymandering",
      explanation: "Named after Gov. Eldridge Gerry of Massachusetts, the practice has been widely and illegally (as determined by courts) used by Republicans since 2008 with their project REDMAP."
    },
    {
      id: 1084,
      question: "The \"No Child Left Behind\" Act was signed into law in 2002 by this President.",
      options: [
        "George W Bush",
        "Barack Obama",
        "Bill Clinton",
        "George HW Bush"
      ],
      correctAnswer: "George W Bush",
      explanation: "The NCLB Act made sure that US school children were no longer at the bottom in math and reading scores, and guaranteed that all children would be above average. The law performed so well that it was completely abandoned in 2015, because the US had clearly become the smartest country in the world! USA! USA! USA!"
    },
    {
      id: 1085,
      question: "Arising from the Dutch term for \"free booter\" (meaning a plunderer), this is the word used to describe the delaying tactic often used in Congress.",
      options: [
        "Filibuster",
        "Gerrymander",
        "Cloture",
        "Adjournment sine die"
      ],
      correctAnswer: "Filibuster",
      explanation: "The first filibuster occurred at the very first Senate meeting in 1789, when Virginia representatives spoke at length to delay passage of a bill."
    },
    {
      id: 1086,
      question: "The Super PAC \"Americans for a Better Tomorrow, Tomorrow\" was founded by this late night comedian in 2012.",
      options: [
        "Stephen Colbert",
        "Jimmy Kimmel",
        "Jimmy Fallon",
        "Jon Stewart"
      ],
      correctAnswer: "Stephen Colbert",
      explanation: "Colbert also ran for President in 2008 and hosted a Rally to Restore Sanity and/or Fear in 2010 along with Jon Stewart."
    },
    {
      id: 1087,
      question: "Who lives at #10 Downing Street?",
      options: [
        "The Prime Minister of the UK",
        "Oscar the Grouch",
        "The Vice President of the US",
        "The Speaker of the House"
      ],
      correctAnswer: "The Prime Minister of the UK",
      explanation: "It is actually a combination of 3 houses that has over 100 rooms and a half-acre garden in the back, all right next to St James Park."
    },
    {
      id: 1088,
      question: "In June 1987, who did Ronald Reagan demand tear down the Berlin wall?",
      options: [
        "Mikhail Gorbachev",
        "Helmut Kohl",
        "Margaret Thatcher",
        "Vladimir Putin"
      ],
      correctAnswer: "Mikhail Gorbachev",
      explanation: "Standing in front of the Brandenburg Gate, Reagan gave the speech that many of his advisors did not want him to give. The wall came down in 1989."
    },
    {
      id: 1089,
      question: "This document was the first governing document for the newly formed United States. ",
      options: [
        "Articles of Confederation",
        "Declaration of Independence",
        "US Constitution",
        "Magna Carta"
      ],
      correctAnswer: "Articles of Confederation",
      explanation: "The Articles went into effect in 1781 and served as the first framework for the new government, and it purposely kept the central government weak. The Constitution replaced the Articles in 1789."
    },
    {
      id: 1090,
      question: "Who presided over the Constitutional Convention in Philadelphia in 1787, that wound up writing the US Constitution?",
      options: [
        "George Washington",
        "James Madison",
        "Alexander Hamilton",
        "Benjamin Franklin"
      ],
      correctAnswer: "George Washington",
      explanation: "Its purpose was to revise the Article of Confederation, not to rewrite a constitution, and it was not even called the Constitutional Convention, but rather, the Philadelphia Convention or the Federal Convention."
    },
    {
      id: 1091,
      question: "Which of the following countries does NOT have an extradition agreement with the US?",
      options: [
        "China",
        "Egypt",
        "Mexico",
        "Kenya"
      ],
      correctAnswer: "China",
      explanation: "While many US criminals may flee to Mexico, they do, in fact, have an extradition agreement with the US."
    },
    {
      id: 1092,
      question: "Martin Sheen's character on The West Wing was named _____, who was a direct descendent of a signer of the Declaration of Independence of the same name.",
      options: [
        "Josiah Bartlet",
        "George Taylor",
        "James Wilson",
        "Button Gwinnett"
      ],
      correctAnswer: "Josiah Bartlet",
      explanation: "The fictional Jed Bartlet served 2 terms as President. Button Gwinnett was one of 8 foreign-born signers of the Declaration."
    },
    {
      id: 1093,
      question: "This president, elected in 1856, never married during his life, but came close a few times.",
      options: [
        "James Buchanan",
        "Andrew Jackson",
        "Andrew Johnson",
        "James K Polk"
      ],
      correctAnswer: "James Buchanan",
      explanation: "His brief engagement to Anna Coleman was ended by her after a few months, and shortly after she died from \"hysterical convulsions\". "
    },
    {
      id: 1094,
      question: "The Vice President's home has been _________ since 1974.",
      options: [
        "The Naval Observatory",
        "The Old Executive Building",
        "The Pentagon",
        "The Smithsonian Institution Castle"
      ],
      correctAnswer: "The Naval Observatory",
      explanation: "The building at Number One Observatory Circle was built in 1893 and previously housed the Chief of Naval Operations. It is believed that a nuclear bunker was built under the building after the 9/11 attacks."
    },
    {
      id: 1095,
      question: "This person holds the record (as of 2024) for running for president the most times, at nine.",
      options: [
        "Harold Stassen",
        "Ralph Nader",
        "Bernie Sanders",
        "Lyndon Larouche"
      ],
      correctAnswer: "Harold Stassen",
      explanation: "He was the youngest governor MN has ever had, and he ran for president 9 times between 1944 and 1992, as well as running for various other political offices in MN and PA. Larouche ran for president 8 times."
    },
    {
      id: 1096,
      question: "He was the first US President to visit all 50 states while in office.",
      options: [
        "Richard Nixon",
        "Gerald Ford",
        "Ronald Reagan",
        "Jimmy Carter"
      ],
      correctAnswer: "Richard Nixon",
      explanation: "Nixon visited all 50 during his unsuccessful bid for president in 1960, and did it again during his first term starting in 1969. George HW Bush, Bill Clinton and Barack Obama are the other 3 who have done this. "
    },
    {
      id: 1097,
      question: "He is the only president to have served as a ranger for the National Park Service.",
      options: [
        "Gerald Ford",
        "Jimmy Carter",
        "Theodore Roosevelt",
        "Barack Obama"
      ],
      correctAnswer: "Gerald Ford",
      explanation: "He worked at Yellowstone in 1936 as a ranger and called it \"the greatest summer of my life\"."
    },
    {
      id: 1098,
      question: "He is the only president to have earned a PhD, in history and political science from Johns Hopkins.",
      options: [
        "Woodrow Wilson",
        "Bill Clinton",
        "Herbert Hoover",
        "Dwight D Eisenhower"
      ],
      correctAnswer: "Woodrow Wilson",
      explanation: "Wilson was considered to be the father of modern liberalism and was the leading architect of the League of Nations, dedicated to world peace."
    },
    {
      id: 1099,
      question: "He was the first president to be arrested while in office.",
      options: [
        "Ulysses S Grant",
        "Donald Trump",
        "Richard Nixon",
        "George W Bush"
      ],
      correctAnswer: "Ulysses S Grant",
      explanation: "While there is some question as to the details, it appears Grant was arrested in 1872 for speeding on a horse in Washington DC. Trump was arrested for interfering with the election in Georgia, and indicted 3 other times, with 91 total charges as of 2024. Bush was arrested prior to elected office, for DUI. Nixon was never arrested or charged with crimes."
    },
    {
      id: 1100,
      question: "Which of these two-term presidents had a VP that did not go on to become president?",
      options: [
        "Bill Clinton",
        "Ronald Reagan",
        "Barack Obama",
        "George HW Bush"
      ],
      correctAnswer: "Bill Clinton",
      explanation: "Clinton's VP was Al Gore, who conceded the 2000 election after the Supreme Court stepped in. George HW Bush only served one term, but it would have been very funny to have a President Quayle."
    },
    {
      id: 1101,
      question: "The long-running TV show M*A*S*H was set during the Korean War. Who was the president during this time?",
      options: [
        "Harry S Truman",
        "John F Kennedy",
        "Lyndon Johnson",
        "Dwight D Eisenhower"
      ],
      correctAnswer: "Harry S Truman",
      explanation: "The US involvement in the 'police action' lasted from 1950-1953, whereas the show ran from 1972-1983. There is no truce between North and South Korea to this day."
    },
    {
      id: 1102,
      question: "The majority of presidents have been inaugurated in this month.",
      options: [
        "March",
        "January",
        "November",
        "December"
      ],
      correctAnswer: "March",
      explanation: "Until 1933, inaugurations were held in March, and it was the 20th Amendment that changed the month to January."
    },
    {
      id: 1103,
      question: "Which of these presidents DID attend the swearing in of their successor?",
      options: [
        "George Washington",
        "Donald Trump",
        "John Adams",
        "John Quincy Adams"
      ],
      correctAnswer: "George Washington",
      explanation: "John Adams was the first to not attend, because his successor, Thomas Jefferson, was previously a good friend, but the men had a falling out. They eventually reconciled, and died within hours of each other on July 4, 1826"
    },
    {
      id: 1104,
      question: "David Rice Atchison may have served one day as President in 1849 because the man elected President, ___, refused to be sworn in on a Sunday.",
      options: [
        "Zachary Taylor",
        "Abraham Lincoln",
        "Ulysses S Grant",
        "Theodore Roosevelt"
      ],
      correctAnswer: "Zachary Taylor",
      explanation: "Atchison's tombstone reads, \"President of the United States for One Day\". But legal scholars say Taylor was the elected President, he just had not taken the oath of office yet."
    },
    {
      id: 1105,
      question: "In the rom-com Dave, this actor plays both the President and the President's body double, and falls in love with Sigourney Weaver.",
      options: [
        "Kevin Kline",
        "Harrison Ford",
        "Kurt Russell",
        "Charles Durning"
      ],
      correctAnswer: "Kevin Kline",
      explanation: "Kline's character was initially hired to stand in for the President while he had an affair with a staffer, but he suffered a major stroke during the 'interlude'."
    },
    {
      id: 1106,
      question: "Kevin Spacey played a power-hungry politician who connived his way into the presidency in the Netflix series House of Cards. It was based on a 1990 British series, called ___.",
      options: [
        "House of Cards",
        "At Her Majesty's Pleasure",
        "King for a Day",
        "All the Queen's Men"
      ],
      correctAnswer: "House of Cards",
      explanation: "Spacey was unceremnously dumped from the show in 2017 after sexual misconduct allegations, and the final season of the show was in 2018 with his wife serving as newly appointed President after his resignation and mysterious death."
    },
    {
      id: 1107,
      question: "In the movie Air Force One, the President, played by _____, is a prior Vietnam War Medal of Honor recipient.",
      options: [
        "Harrison Ford",
        "Liam Neeson",
        "Daniel Day Lewis",
        "George Clooney"
      ],
      correctAnswer: "Harrison Ford",
      explanation: "Ford's character single-handedly kills most of the terrorists, saves his family and dozens of hostages, and pilots Air Force One until seconds before it crashes into the Caspian Sea."
    },
    {
      id: 1108,
      question: "This President set the size of the Supreme Court at nine, by signing the Judiciary Act of 1869.",
      options: [
        "Ulysses S Grant",
        "Abraham Lincoln",
        "Grover Cleveland",
        "Chester Arthur"
      ],
      correctAnswer: "Ulysses S Grant",
      explanation: "Prior to this Act, the size of the Court varied from 5 to 10 members, depending on which party was in power. It is felt by many current legal scholars that the current size of the Court is much too small for the size of the country."
    },
    {
      id: 1109,
      question: "Which power is NOT exclusive to the US Senate?",
      options: [
        "Ability to declare war",
        "Give consent to treaties",
        "Tries all impeachments",
        "Approve Supreme Court justices"
      ],
      correctAnswer: "Ability to declare war",
      explanation: "Both the House and the Senate must jointly declare war. "
    },
    {
      id: 1110,
      question: "The last formal declaration of war issued by the US was for this war.",
      options: [
        "World War II",
        "Korean War",
        "Vietnam War",
        "War on Terror"
      ],
      correctAnswer: "World War II",
      explanation: "All 'wars' since then have been mostly Presidents sending troops into countries for \"limited duration\" (such as 20 years in Afghanistan), with Congress giving its \"authorization\"."
    },
    {
      id: 1111,
      question: "Which of the following is a requirement to be a US Senator?",
      options: [
        "Must be at least 30 years old",
        "Must be US born",
        "Must live in the state they want to represent",
        "Must have held some prior elected office"
      ],
      correctAnswer: "Must be at least 30 years old",
      explanation: "They are only required to be US citizens for 9 years, according to Article 1 Section 3 of the Constitution."
    },
    {
      id: 1112,
      question: "Who presides over the Senate in the absence of the Vice President?",
      options: [
        "President pro tempore",
        "Majority whip",
        "Senate parliamentarian",
        "Secretary of the Senate"
      ],
      correctAnswer: "President pro tempore",
      explanation: "Typically the longest-serving Senator of the majority party, the president pro tem usually concedes their authority to the majority leader."
    },
    {
      id: 1113,
      question: "How many standing committees does the US House of Representatives have?",
      options: [
        "20",
        "11",
        "6",
        "26"
      ],
      correctAnswer: "20",
      explanation: "Committee chairs are typically chosen by the party in power. In addition to the 20 standing committees, there are numerous subcommittees and select committees."
    },
    {
      id: 1114,
      question: "This president was responsible for the greatest percent increase in federal debt, growing by a whopping 2,860% during his presidency.",
      options: [
        "Abraham Lincoln",
        "Donald Trump",
        "Ronald Reagan",
        "George W Bush"
      ],
      correctAnswer: "Abraham Lincoln",
      explanation: "The debt during the Civil War grew from $90 million to $2.68 billion."
    },
    {
      id: 1115,
      question: "He was the first president to ride in a car while on official duties, in 1902.",
      options: [
        "Theodore Roosevelt",
        "William McKinley",
        "Franklin D Roosevelt",
        "Woodrow Wilson"
      ],
      correctAnswer: "Theodore Roosevelt",
      explanation: "McKinley briefly rode in a private vehicle while visiting family, but Teddy rode in an electric car for an official trip to Connecticutt."
    },
    {
      id: 1116,
      question: "The first car designed to transport the president with Secret Service was a Lincoln V12 convertible nicknamed the Sunshine Special, given to this president in 1939.",
      options: [
        "Franklin D Roosevelt",
        "Harry S Truman",
        "Dwight D Eisenhower",
        "John F Kennedy"
      ],
      correctAnswer: "Franklin D Roosevelt",
      explanation: "After the attacks on Pearl Harbor, the car was further modified to have underarmor, 1 inch thick bulletproof glass, flat-proof tires and a compartment for machine guns. "
    },
    {
      id: 1117,
      question: "The first White House website was developed during this president's term.",
      options: [
        "Bill Clinton",
        "George HW Bush",
        "George W Bush",
        "Ronald Reagan"
      ],
      correctAnswer: "Bill Clinton",
      explanation: "George HW Bush's administration was the first to use email, in 1992, and the first White House website was 2 years later."
    },
    {
      id: 1118,
      question: "The tallest US President, as of 2024, was ___.",
      options: [
        "Abraham Lincoln",
        "Lyndon Johnson",
        "James Madison",
        "Thomas Jefferson"
      ],
      correctAnswer: "Abraham Lincoln",
      explanation: "At 6'4\", he ranks as tallest, while the tallest world leader ever was a former president of Montenegro, Filip Vujanovich, who was 6'7\"."
    },
    {
      id: 1119,
      question: "The shortest US President, as of 2024, was ___.",
      options: [
        "James Madison",
        "Willam H Taft",
        "George Washington",
        "Lyndon Johnson"
      ],
      correctAnswer: "James Madison",
      explanation: "At 5'4\", he was the shortest, and at 122 pounds (55 kg) he was also the lightest."
    },
    {
      id: 1120,
      question: "Colonists were protesting this tax when they tossed tea into Boston Harbor in 1773.",
      options: [
        "Tea Act",
        "Stamp Act",
        "Coercive Act",
        "Sugar Act"
      ],
      correctAnswer: "Tea Act",
      explanation: "The Tea Act was the culmination of \"taxation without representation\" and directly led to the start of the Revolutionary War in 1775."
    },
    {
      id: 1121,
      question: "Which of the following presidents was NOT left-handed?",
      options: [
        "George W Bush",
        "Gerald Ford",
        "Barack Obama",
        "George HW Bush"
      ],
      correctAnswer: "George W Bush",
      explanation: "Of the last 14 presidents, 6 have been left handed. Whereas in the general population, only about 13% of people are lefties."
    },
    {
      id: 1122,
      question: "Which of the following presidents was NOT obese (medically classified as a BMI of 30 or greater)?",
      options: [
        "Bill Clinton",
        "Donald Trump",
        "William Taft",
        "Grover Cleveland"
      ],
      correctAnswer: "Bill Clinton",
      explanation: "Clinton's BMI peaked at 28.3 during his term. Taft was the fattest, with a BMI of 42.3."
    },
    {
      id: 1123,
      question: "Teddy Roosevelt was the first to decree that the building he lived in be called the White House. Which of the following was NOT one of the names used for the building prior to that?",
      options: [
        "White Palace",
        "President's House",
        "Presidential Mansion",
        "President's Palace"
      ],
      correctAnswer: "White Palace",
      explanation: "The building's exterior is a white-painted Aquia Creek sandstone, which is naturally brown to light gray."
    },
    {
      id: 1124,
      question: "The designer of the White House was this Irish architect, personally chosen by George Washington.",
      options: [
        "James Hoban",
        "Pierre Charles L'Enfant",
        "Seamus O'Malley",
        "Peter Whelihan"
      ],
      correctAnswer: "James Hoban",
      explanation: "Hoban previously designed the Columbia, SC capitol building and the Charleston, SC courthouse, which apparently impressed George Washington who chose Hoban."
    },
    {
      id: 1125,
      question: "This president oversaw a massive remodel of the White House from 1949-1952, as it was deemed unsafe for occupancy in 1948.",
      options: [
        "Harry S Truman",
        "Dwight D Eisenhower",
        "Franklin D Roosevelt",
        "Theodore Roosevelt"
      ],
      correctAnswer: "Harry S Truman",
      explanation: "The original wood timber framing was damaged beyond repair and replaced with steel. Some of the old timbers were sawn into paneling that still lines some of the rooms in the White House today."
    },
    {
      id: 1126,
      question: "This Trump cabinet member in 2025 used the unsecured app Signal to share classified military information among a group including a journalist.",
      options: [
        "Pete Hegseth",
        "Kash Patel",
        "Marco Rubio",
        "Kristi Noem"
      ],
      correctAnswer: "Pete Hegseth",
      explanation: "But considering his history with alcohol abuse and domestic violence, what's a little national security breach among friends?"
    },
    {
      id: 1127,
      question: "During this war, the White House (and large parts of Washington) were burned, resulting in almost all of the White House being rebuilt.",
      options: [
        "War of 1812",
        "World War I",
        "Spanish American War",
        "Second Barbary War"
      ],
      correctAnswer: "War of 1812",
      explanation: "The British burned it in 1814 in retaliation for America's attack on York in Canada, and the entire building had to be rebuilt except for the south wall."
    },
    {
      id: 1128,
      question: "This president served in Congress for 18 years after his presidency, and died in Congress in 1848 from a massive stroke.",
      options: [
        "John Quincy Adams",
        "William Taft",
        "Calvin Coolidge",
        "Grover Cleveland"
      ],
      correctAnswer: "John Quincy Adams",
      explanation: "He had his first known stroke 2 years prior but recovered. His died in the Speaker's Chambers, where his last words were, \"This is the last of earth, but I am content\"."
    },
    {
      id: 1129,
      question: "This president was instrumental in ensuring that football was not abolished, due to the many deaths that were occurring at the time.",
      options: [
        "Theodore Roosevelt",
        "Ronald Reagan",
        "John F Kennedy",
        "Warren Harding"
      ],
      correctAnswer: "Theodore Roosevelt",
      explanation: "In its earliest days, football was even more brutal than it is now. Many schools were dropping the sport, and Roosevelt stepped in to urge the game to reform its rules to make the game safer. "
    },
    {
      id: 1130,
      question: "In 1953, President ___ named Camp David, the presidential retreat in Maryland, after his 5 year old grandson.",
      options: [
        "Dwight D Eisenhower",
        "Herbert Hoover",
        "Franklin D Roosevelt",
        "Harry S Truman"
      ],
      correctAnswer: "Dwight D Eisenhower",
      explanation: "Built in 1938 by the Works Progress Administration, it was originally called \"Shangri-La\" by Roosevelt."
    },
    {
      id: 1131,
      question: "The Civilian Conservation Corp (CCC) was implemented by this president in 1933 as part of his New Deal.",
      options: [
        "Franklin D Roosevelt",
        "Theodore Roosvelt",
        "Herbert Hoover",
        "John F Kennedy"
      ],
      correctAnswer: "Franklin D Roosevelt",
      explanation: "Giving conservation jobs to single unemployed men aged 17-28, this part of the New Deal was one of the most successful government programs ever, and ended mainly because of WWII."
    },
    {
      id: 1132,
      question: "Which of the following presidents did NOT have a beard?",
      options: [
        "Woodrow Wilson",
        "Abraham Lincoln",
        "Rutherford Hayes",
        "Benjamin Harrison"
      ],
      correctAnswer: "Woodrow Wilson",
      explanation: "Hayes had the longest beard of the 5 presidents who have had beards in office, which may have been his greatest accomplishment as president."
    },
    {
      id: 1133,
      question: "As of 2025, he was the only man to be elected twice as VP and twice as President.",
      options: [
        "Richard Nixon",
        "Ronald Reagan",
        "Franklin D Roosevelt",
        "Bill Clinton"
      ],
      correctAnswer: "Richard Nixon",
      explanation: "He served 2 terms as VP to Dwight Eisenhower, from 1953-1961, and was elected president in 1968 and 1972. He resigned before impeachment for the Watergate scandal in 1974."
    },
    {
      id: 1134,
      question: "The largest currency note ever printed in the US was the $100,000 bill, issued in 1934. Which president's face was on the bill?",
      options: [
        "Woodrow Wilson",
        "Frankling D Roosevelt",
        "George Washington",
        "Abraham Lincoln"
      ],
      correctAnswer: "Woodrow Wilson",
      explanation: "The bill was only used in interbank transfers and was illegal for the public to own. It was issued as part of a plan to stop gold hoarding among the general public."
    },
    {
      id: 1135,
      question: "Walt Whitman's famous poem, \"O Captain, My Captain\", was written in 1865 as a tribute to this president.",
      options: [
        "Abraham Lincoln",
        "George Washington",
        "Ulysses S Grant",
        "Thomas Jefferson"
      ],
      correctAnswer: "Abraham Lincoln",
      explanation: "The poem describes a ship's captain dying after piloting the ship through rough and dangerous waters. It was also immortalized in Dead Poet's Society."
    },
    {
      id: 1136,
      question: "Lyndon Johnson's wife was known as \"Lady Bird\" from the time she was an infant. What was her actual first name? ",
      options: [
        "Claudia",
        "Lydia",
        "Sarah",
        "Penelope"
      ],
      correctAnswer: "Claudia",
      explanation: "She was named after her uncle Claud, but her nanny described her as \"pretty as a ladybird\", and the name stuck."
    },
    {
      id: 1137,
      question: "Which president's administration was commonly referred to as Camelot?",
      options: [
        "John F Kennedy",
        "Ronald Reagan",
        "Franklin D Roosevelt",
        "George Washington"
      ],
      correctAnswer: "John F Kennedy",
      explanation: "The public overall has a fond memory of Kennedy, his administration, and the US in general at that time, hence the nickname Camelot."
    },
    {
      id: 1138,
      question: "\"Speak softly and carry a big stick\" was a favorite saying of this president.",
      options: [
        "Theodore Roosevelt",
        "Richard Nixon",
        "Thomas Jefferson",
        "George W Bush"
      ],
      correctAnswer: "Theodore Roosevelt",
      explanation: "He described his approach to foreign policy as \"the exercise of intelligent forethought and of decisive action sufficiently far in advance of any likely crisis\"."
    },
    {
      id: 1139,
      question: "Which of the following presidents did NOT die in office?",
      options: [
        "William H Taft",
        "Wiliam McKinley",
        "Zacharay Taylor",
        "Franklin Roosevelt"
      ],
      correctAnswer: "William H Taft",
      explanation: "Despite his profound obesity, Taft lived until age 73. The others died in their late 50s or early 60s while serving as president."
    },
    {
      id: 1140,
      question: "Before Watergate, this scandal of the Harding administration was considered the biggest political scandal in the nation's history. (All scandal options offered are real)",
      options: [
        "Teapot Dome",
        "Abscam",
        "XYZ Affair",
        "Petticoat Affair"
      ],
      correctAnswer: "Teapot Dome",
      explanation: "The scandal involved a cabinet member taking bribes from oil companies to gain access to Navy petroleum reserves in Wyoming and California."
    },
    {
      id: 1141,
      question: "In the 1995 movie The American President, Annette Benning's character, Sydney Wade, pursues the widower President Andrew Shepherd, played by this actor.",
      options: [
        "Michael Douglas",
        "John Travolta",
        "Harrison Ford",
        "Paul Newman"
      ],
      correctAnswer: "Michael Douglas",
      explanation: "The film was directed by Rob Reiner, written by Aaron Sorkin, grossed $108 million on a $62 million budget, and was nominated for Best Original Musical or Comedy Score Academy Award."
    },
    {
      id: 1142,
      question: "The first woman to run for US president was ___.",
      options: [
        "Victoria Woodhull",
        "Geraldine Ferraro",
        "Hillary Clinton",
        "Margaret Chase Smith"
      ],
      correctAnswer: "Victoria Woodhull",
      explanation: "She was a suffragist who ran for president in 1872, although she was not technically old enough to legally run for president."
    },
    {
      id: 1143,
      question: "He was the only president to have served as both President of the US and Chief Justice of the Supreme Court.",
      options: [
        "William H Taft",
        "George HW Bush",
        "Calvin Coolidge",
        "Richard Nixon"
      ],
      correctAnswer: "William H Taft",
      explanation: "He was President from 1909-1913, and was on the Court from 1921 until his death in 1930. "
    },
    {
      id: 1144,
      question: "He was the last non-Democrat or non-Republican to win the Presidency, serving in the mid-19th century.",
      options: [
        "Millard Fillmore",
        "Ulysses S Grant",
        "Theodore Roosevelt",
        "Franklin Pierce"
      ],
      correctAnswer: "Millard Fillmore",
      explanation: "He was the last president from the Whig Party, a conservative party that produced 4 presidents over a roughly 30 year span."
    },
    {
      id: 1145,
      question: "He was the only president to have run a marathon before becoming president.",
      options: [
        "George W Bush",
        "Jimmy Carter",
        "Bill Clinton",
        "Barack Obama"
      ],
      correctAnswer: "George W Bush",
      explanation: "He ran the Houston Marathon at age 46, finishing in 3:44."
    },
    {
      id: 1146,
      question: "He was the first vice president to become president after the death of the president, William Harrison, in 1841.",
      options: [
        "John Tyler",
        "Millard Fillmore",
        "Chester Arthur",
        "Ulysses S Grant"
      ],
      correctAnswer: "John Tyler",
      explanation: "Harrison died just 31 days after inauguration, causing a bit of a crisis for the country, as there was no policy of succession in place at the time. "
    },
    {
      id: 1147,
      question: "Fala, who lived from 1940 to 1952, was the famous Scottish terrier belonging to this president, and he was by the President's side until his death in 1945.",
      options: [
        "Franklin D Roosevelt",
        "Abraham Lincoln",
        "Herbert Hoover",
        "Woodrow Wilson"
      ],
      correctAnswer: "Franklin D Roosevelt",
      explanation: "Soldiers in WWII would ask \"who is the President's dog?\" as a way to check for German infiltrators."
    },
    {
      id: 1148,
      question: "This former president is credited with numerous inventions, among them the swivel chair.",
      options: [
        "Thomas Jefferson",
        "Benjamin Franklin",
        "Abraham Lincoln",
        "Theodore Roosevelt"
      ],
      correctAnswer: "Thomas Jefferson",
      explanation: "He wrote parts of the Declaration of Independence from his swivel chair. Jefferson also invented a revolving book stand, and improved the design of a pedometer. He even served on a patent review board before becoming president."
    },
    {
      id: 1149,
      question: "He was the last president to have any facial hair (mustache or beard).",
      options: [
        "William H Taft",
        "Herbert Hoover",
        "Calvin Coolidge",
        "Franklin D Roosevelt"
      ],
      correctAnswer: "William H Taft",
      explanation: "It's thought that facial hair fell out of favor once women gained the right to vote, as well as with the introduction of the double-edged safety razor."
    },
    {
      id: 1150,
      question: "Calvin Coolidge pardoned this animal that was sent to the White House for Thanksgiving dinner in 1926.",
      options: [
        "Raccoon",
        "Turkey",
        "Chicken",
        "Pig"
      ],
      correctAnswer: "Raccoon",
      explanation: "He would keep the raccoon as a pet, naming it Rebecca. At the time, many farmers would send animals for Thanksgiving, hoping to be chosen as the official provider of the Thanksgiving meal.  "
    },
    {
      id: 1151,
      question: "The first president to ever be featured on a US coin was ____.",
      options: [
        "Abraham Lincoln",
        "George Washington",
        "Thomas Jefferson",
        "Warren Harding"
      ],
      correctAnswer: "Abraham Lincoln",
      explanation: "In 1909, the penny was redesigned to honor Lincoln. Prior to this time, coins typically had an image of \"Lady Liberty\"."
    },
    {
      id: 1152,
      question: "How many vice presidents have held the office under two different presidents?",
      options: [
        "2",
        "0",
        "1",
        "11"
      ],
      correctAnswer: "2",
      explanation: "John C Calhoun served under John Quincy Adams and Andrew Jackson, and George Clinton served under Thomas Jefferson and James Madison."
    },
    {
      id: 1153,
      question: "This president was related to 11 other presidents, either by blood or marriage.",
      options: [
        "Franklin D Roosevelt",
        "John F Kennedy",
        "George W Bush",
        "Thomas Jefferson"
      ],
      correctAnswer: "Franklin D Roosevelt",
      explanation: "He was also related to his wife, Eleanor, as they were 5th cousins once removed."
    },
    {
      id: 1154,
      question: "Only 3 presidents have not had a family pet while in office. Of the following 4 presidents, which one DID have a pet in office?",
      options: [
        "George HW Bush",
        "Donald Trump",
        "James K Polk",
        "Andrew Johnson"
      ],
      correctAnswer: "George HW Bush",
      explanation: "The Bushes had Millie, an English Springer Spaniel who even wrote her own book, Millie's Book, in 1990."
    },
    {
      id: 1155,
      question: "The first president to host an Easter Egg Roll at the White House was our 19th president, in 1878.",
      options: [
        "Rutherford B Hayes",
        "Theodore Roosevelt",
        "William McKinley",
        "Abraham Lincoln"
      ],
      correctAnswer: "Rutherford B Hayes",
      explanation: "Prior to the first one on the South Lawn, they were held on the Capitol grounds but caused a lot of damage to the grass. It has been held every year since on the South Lawn, except for 2020 and 2021 (due to COVID-19)."
    },
    {
      id: 1156,
      question: "The tradition of a sitting president throwing out the ceremonial first pitch at a baseball game began in 1910 with this president, throwing out a ball at the Washington Senators opening day.",
      options: [
        "William H Taft",
        "Theodore Roosevelt",
        "Calvin Coolidge",
        "Woodrow Wilson"
      ],
      correctAnswer: "William H Taft",
      explanation: "The only presidents to not do it during their time in office (as of 2025) are Jimmy Carter (but he did do it after leaving office), Joe Biden (but he did do it while Vice President), and Donald Trump (who said he was going to do it in 2020 but oddly never did)."
    },
    {
      id: 1157,
      question: "As of 2024, which state has produced the most presidents, at 8?",
      options: [
        "Virginia",
        "Illinois",
        "Texas",
        "New York"
      ],
      correctAnswer: "Virginia",
      explanation: "The eight men that were born there are George Washington, Thomas Jefferson, James Madison, James Monroe, William Henry Harrison, John Tyler, Zachary Taylor, and Woodrow Wilson."
    },
    {
      id: 1158,
      question: "While campaigning for office, this president was shot in the chest, but he still gave his 50-minute speech.",
      options: [
        "Theodore Roosevelt",
        "Ronald Reagan",
        "Abraham Lincoln",
        "Calvin Coolidge"
      ],
      correctAnswer: "Theodore Roosevelt",
      explanation: "The bullet passed through a steel eyeglass case as well as a 50-page speech in his pocket, but still lodged in the left side of his chest, where it remained til his death in 1919."
    },
    {
      id: 1159,
      question: "Which of the following treatments was NOT done for William Harrison, the 9th president in 1841, who died after just 31 days in office?",
      options: [
        "Antibiotics",
        "Mustard plaster",
        "Bloodletting",
        "Cupping"
      ],
      correctAnswer: "Antibiotics",
      explanation: "The first true antibiotic, penicillin, was discovered in 1928 by Alexander Fleming."
    },
    {
      id: 1160,
      question: "This president signed an order in 1948 to desegregate the military.",
      options: [
        "Harry S Truman",
        "Franklin D Roosevelt",
        "Dwight D Eisenhower",
        "John F Kennedy"
      ],
      correctAnswer: "Harry S Truman",
      explanation: "He tried to get Congress to pass a comprehensive civil rights law, but they refused, so he signed an Executive Order which desegregated the military."
    },
    {
      id: 1161,
      question: "Which of these presidents did NOT die on July 4th?",
      options: [
        "Calvin Coolidge",
        "Thomas Jefferson",
        "James Monroe",
        "John Adams"
      ],
      correctAnswer: "Calvin Coolidge",
      explanation: "Coolidge was actually born on July 4, 1872, the only president born on July 4."
    },
    {
      id: 1162,
      question: "This president was the only person with a physical disability elected to the presidency (as of 2024).",
      options: [
        "Franklin D Roosevelt",
        "Herbert Hoover",
        "Woodrow Wilson",
        "William McKinley"
      ],
      correctAnswer: "Franklin D Roosevelt",
      explanation: "He came down with a flaccid paralysis at age 39, which was assumed to be 'infantile paralysis', and he was paralyzed from the waist down. Current medical thinking is that he may have had a condition called Guillain-Barre Syndrome instead, which was not a well known condition at that time. "
    },
    {
      id: 1163,
      question: "This Washington, DC street is synonymous with lobbying and lobbyists.",
      options: [
        "K Street",
        "L Street",
        "M Street",
        "P Street"
      ],
      correctAnswer: "K Street",
      explanation: "In recent years, most of the large lobbying and advocacy groups have moved from their K Street addresses to larger sites nearby. Because buying politicians is the true American pasttime."
    },
    {
      id: 1164,
      question: "This political party started in the 1850s as a secret society, and was anti-immigrant and other minorities, nativist, and anti-Catholic. ",
      options: [
        "Know Nothing Party",
        "Republican Party",
        "Whig Party",
        "Personal Choice Party"
      ],
      correctAnswer: "Know Nothing Party",
      explanation: "Officially known as the American Party, its members were required to answer \"I know nothing\" in response to any questions about the party and its platforms by outsiders."
    },
    {
      id: 1165,
      question: "This president established NASA, the National Aeronautics and Space Administration, in 1958.",
      options: [
        "Dwight D Eisenhower",
        "John F Kennedy",
        "Franklin D Roosevelt",
        "Gerald Ford"
      ],
      correctAnswer: "Dwight D Eisenhower",
      explanation: "NASA succeeded the National Advisory Committee for Aeronatics which was established in 1915."
    },
    {
      id: 1166,
      question: "This Amendment, passed in 1961, gave the District of Columbia the right to participate in presidential elections and granted it 3 electoral votes.",
      options: [
        "23rd",
        "17th",
        "25th",
        "26th"
      ],
      correctAnswer: "23rd",
      explanation: "The district can never have more electoral votes than the least populated state. The district also does not have full voting rights in Congress."
    },
    {
      id: 1167,
      question: "This form of government involves rulers who enrich themselves at the expense of those who are governed, with no regard for the rule of law.",
      options: [
        "Kleptocracy",
        "Plutocracy",
        "Oligarchy",
        "Kakistocracy"
      ],
      correctAnswer: "Kleptocracy",
      explanation: "While normally associated with dictatorships, kleptocracies can also be found in democracies where there is cronyism and lack of government oversight and accountability. Fun fact for 2025: A kakistocracy is a government run by the least qualified, most unscrupulous people."
    },
    {
      id: 1168,
      question: "The G7 is a group made of the 7 largest democracies in the world. Which of these countries is NOT part of the G7?",
      options: [
        "Spain",
        "Italy",
        "France",
        "Germany"
      ],
      correctAnswer: "Spain",
      explanation: "The group tries to discuss and devise solutions to major global challenges, such as trade, security and climate change."
    },
    {
      id: 1169,
      question: "William H Seward was the Secretary of State for this president, when he helped arrange for the purchase of Alaska from Russia in 1867.",
      options: [
        "Andrew Johnson",
        "Theodore Roosevelt",
        "Calvin Coolidge",
        "Thomas Jefferson"
      ],
      correctAnswer: "Andrew Johnson",
      explanation: "At a cost of $0.36 per acre, the purchase was considered the biggest accomplishment of the otherwise dismal Johnson presidency."
    },
    {
      id: 1170,
      question: "Shirley Chisholm was the first black woman to serve in the US Congress, elected in 1968 to represent the Bedford-Stuyvesent district in this state. ",
      options: [
        "New York",
        "Arizona",
        "Arkansas",
        "Florida"
      ],
      correctAnswer: "New York",
      explanation: "Her campaign slogan was \"unbought and unbossed\", and she served 7 terms. She even unsuccessfully ran for president in 1972."
    },
    {
      id: 1171,
      question: "In 1958, high school junior Robert Heft designed this item for the government, which is still in use today.",
      options: [
        "US Flag",
        "$2 bill",
        "Official census format",
        "Logo for the National Park Service"
      ],
      correctAnswer: "US Flag",
      explanation: "He designed the flag for a school project in anticipation of AK and HI becoming states. His teacher initially gave him a B-, but raised it to an A when the flag was chosen by President Eisenhower to be the official flag. "
    },
    {
      id: 1172,
      question: "This Constitutional amendment states that any Congressional pay changes do not take effect until the next House election cycle, and took almost 203 years to be passed.",
      options: [
        "27th",
        "22nd",
        "3rd",
        "16th"
      ],
      correctAnswer: "27th",
      explanation: "The final amendment was first proposed in September 1789 (at the same time as the original Bill of Rights) but did not get passed until May 1992, and even then only due to the work of a college sophomore named Greg Watson starting in 1982."
    },
    {
      id: 1173,
      question: "This Amendment allows for the removal of a president who is unfit, and also specifies that the VP becomes president if the existing president dies or leaves office.",
      options: [
        "25th",
        "20th",
        "13th",
        "8th"
      ],
      correctAnswer: "25th",
      explanation: "It is section 4 of the amendment that addresses the Vice President and Cabinet declaring a president incapacitated or unable to fulfill their duties, if the President him/herself does not voluntarily declare themselves unable to fulfill their duties. "
    },
    {
      id: 1174,
      question: "This Amendment allowed 18 year olds to vote in federal elecations, and was the fastest to be passed in just 100 days in 1971.",
      options: [
        "26th",
        "23rd",
        "24th",
        "25th"
      ],
      correctAnswer: "26th",
      explanation: "It was developed largely in response to the Vietnam War draft, which drafted men at age 18, while federal voting age was 21 at the time."
    },
    {
      id: 1175,
      question: "Which of the following does NOT fall under the power of the National Archives?",
      options: [
        "Enforcing federal laws",
        "Preserving the original Declaration of Indepence",
        "Ensuring public access to government documents",
        "Transmitting Electoral College votes to Congress"
      ],
      correctAnswer: "Enforcing federal laws",
      explanation: "Enforcing federal laws is the function of the Department of Justice. The National Archives and Records Administration was established in 1934 and became an independent agency in 1984."
    },
    {
      id: 1176,
      question: "This act, formally known as the Wall Street Reform and Consumer Protection Act, was passed in 2010 in response to the Great Recession, but is more commonly known by this name, reflecting the names of its two sponsors.",
      options: [
        "Dodd-Frank",
        "Glass-Steagall",
        "Bankhead-Jones",
        "Lee-Lifeson"
      ],
      correctAnswer: "Dodd-Frank",
      explanation: "Among other things, the act created the Consumer Financial Protection Bureau, designed to protect consumers from credit card and mortgage abuses. As of 2025, Trump is dismantling it, because clearly consumers need no protection from companies anymore."
    },
    {
      id: 1177,
      question: "The 16th Amendment, passed in 1909 and ratified in 1913, allowed Congress to levy a tax on this.",
      options: [
        "Income",
        "Alcohol",
        "Tobacco",
        "Capital gains"
      ],
      correctAnswer: "Income",
      explanation: "The first federal income tax was actually levied in 1861 to help pay for the Civil War. It was 3% of all income over the equivalent of $21,000."
    },
    {
      id: 1178,
      question: "Which one of these is NOT a presidential power?",
      options: [
        "Approving foreign treaties",
        "Vetoing legislation",
        "Nominating Supreme Court justices",
        "Receiving ambassadors"
      ],
      correctAnswer: "Approving foreign treaties",
      explanation: "The president can negotiate and sign treaties with the advice and consent of the Senate, which must approve the treaty by a 2/3 majority."
    },
    {
      id: 1179,
      question: "The highest peak in North America, Denali, was previously named in honor of this President elected in 1896.",
      options: [
        "McKinley",
        "Taft",
        "Monroe",
        "Roosevelt"
      ],
      correctAnswer: "McKinley",
      explanation: "At 20,310 ft (6,190m), it also has one of the highest base-to-peak heights of about 18,000 ft (greater than Everest) and has the longest glacier in the Alaska range, at 44 miles long."
    },
    {
      id: 1180,
      question: "In what year did a divided US Supreme Court rule that same sex marriage was legal in all 50 states, DC and US territories?",
      options: [
        "2015",
        "2013",
        "2009",
        "2017"
      ],
      correctAnswer: "2015",
      explanation: "The case, Obergefell v Hodges, was a 5-4 decision that argued the plaintiffs' 14th amendment rights were violated."
    },
    {
      id: 1181,
      question: "Former VP Al Gore won a Nobel Peace Prize. Only one other VP has done this, Charles Gates Dawes, who was VP under this President from 1925-1929.",
      options: [
        "Calvin Coolidge",
        "Warren Harding",
        "Herbert Hoover",
        "Franklin Roosevelt"
      ],
      correctAnswer: "Calvin Coolidge",
      explanation: "He won for his post-WWI peace plan. He also co-wrote a song that became a #1 hit in 1951, \"It's All In The Game\"."
    },
    {
      id: 1182,
      question: "Who was president during the space shuttle Challenger disaster?",
      options: [
        "Ronald Reagan",
        "George HW Bush",
        "Jimmy Carter",
        "Bill Clinton"
      ],
      correctAnswer: "Ronald Reagan",
      explanation: "The shuttle broke up 73 seconds into its flight in 1986 due to a known faulty O-ring, killing all 7 aboard including classroom teacher Christa McAuliffe."
    },
    {
      id: 1183,
      question: "This president issued the official government apology to the survivors of the Tuskegee Study, which purposefully did not treat 400 black men who had syphilis despite an easy treatment being available for decades.",
      options: [
        "Bill Clinton",
        "Donald Trump",
        "Barack Obama",
        "George W Bush"
      ],
      correctAnswer: "Bill Clinton",
      explanation: "The study was meant to last for only 6 months, but instead went from 1932-1972 and resulted in the death of 128 of the men. It is considered the worst breach of medical ethics in the US. "
    },
    {
      id: 1184,
      question: "The first woman to hold federal office was ___, elected from Montana in 1916 to the US House.",
      options: [
        "Jeanette Rankin",
        "Harriet Tubman",
        "Elizabeth Cady Stanton",
        "Rebecca Latimer Felton"
      ],
      correctAnswer: "Jeanette Rankin",
      explanation: "A life-long Pacifist elected before women even had the right to vote, she served one term but was elected again in 1940. To this day, she is the only woman elected to Congress from Montana."
    },
    {
      id: 1185,
      question: "____ was the first woman to serve in the US Senate, representing Georgia in 1922, and she was also an avowed white supremacist.",
      options: [
        "Rebecca Latimer Felton",
        "Rosa Parks",
        "Shirley Chisholm",
        "Doris A Davis"
      ],
      correctAnswer: "Rebecca Latimer Felton",
      explanation: "Serving for just one day, she was also the last slave-holding member of Congress."
    },
    {
      id: 1186,
      question: "Robert E Lee surrendered to Ulysses S Grant at this Civil War battle site in Virginia, effectively ending the Civil War in 1865.",
      options: [
        "Appomattox Courthouse",
        "Gettysburg",
        "Bull Run",
        "Antietam"
      ],
      correctAnswer: "Appomattox Courthouse",
      explanation: "The final battle for Lee occurred as he was trying to retreat west after a bruising and unsuccessful battle for Richmond, VA."
    },
    {
      id: 1187,
      question: "This president signed the Indian Removal Act of 1830, which forcibly moved over 60,000 native Americans west of the Mississippi.",
      options: [
        "Andrew Jackson",
        "John Quincy Adams",
        "John Tyler",
        "Zachary Taylor"
      ],
      correctAnswer: "Andrew Jackson",
      explanation: "The \"Trail of Tears\" was designed to effectively remove all natives east of the Mississippi and south of the Great Lakes, and meant to appease southern states by removing native land claims and expanding white settlement and slavery. "
    },
    {
      id: 1188,
      question: "The website FiveThirtyEight (538) was created by this person to serve as a place for political analysis, opinion polls and economics.",
      options: [
        "Nate Silver",
        "Sam Bankman Fried",
        "Elon Musk",
        "Al Gore"
      ],
      correctAnswer: "Nate Silver",
      explanation: "First gaining notoriety during the 2008 presidential election, 538 was known for incorporating both polls and demographics and has generally been more accurate than just polls alone. Silver left in 2023, and its new owner, Disney, closed it in 2025."
    },
    {
      id: 1189,
      question: "He is the only Eagle Scout to have become President, even though he was never actually elected to the office.",
      options: [
        "Gerald Ford",
        "John F Kennedy",
        "Bill Clinton",
        "Donald Trump"
      ],
      correctAnswer: "Gerald Ford",
      explanation: "JFK was the first President who was a Scout as a kid, reaching the level of Star Scout. Clinton was a Cub Scout. Trump says he tried to join, but couldn't pass the physical due to bone spurs in his feet."
    },
    {
      id: 1190,
      question: "She was the first female Speaker of the House, elected during George W Bush's tenure.",
      options: [
        "Nancy Pelosi",
        "Alexandria Ocasio Cortez",
        "Tammy Baldwin",
        "Hillary Clinton"
      ],
      correctAnswer: "Nancy Pelosi",
      explanation: "A completely non-polarizing figure on both the left and the right, she even has a street named in her honor in her hometown of San Francisco."
    },
    {
      id: 1191,
      question: "This radio personality ran for governor of New York in 1994, on a platform of reinstating the death penalty, removing highway tolls, and having road work only done at night.",
      options: [
        "Howard Stern",
        "Rush Limbaugh",
        "Terry Gross",
        "Ira Glass"
      ],
      correctAnswer: "Howard Stern",
      explanation: "Running under the Libertarian ticket, he promised to resign as soon as he achieved these 3 platform goals. He withdrew from the race as he refused to complete the required financial disclosure form. "
    },
    {
      id: 1192,
      question: "This person was the first black Secretary of State, serving from 2001 to 2005.",
      options: [
        "Colin Powell",
        "Condoleeza Rice",
        "Barack Obama",
        "Jesse Jackson"
      ],
      correctAnswer: "Colin Powell",
      explanation: "Powell served in the Army and rose to become a general, and has earned both the Purple Heart and the Presidential Medal of Freedom (twice)."
    },
    {
      id: 1193,
      question: "Who was the first sitting president to use a dedicated official Twitter / X account?",
      options: [
        "Barack Obama",
        "Donald Trump",
        "Bill Clinton",
        "George W Bush"
      ],
      correctAnswer: "Barack Obama",
      explanation: "Obama launched the @POTUS handle, but only Trump has used it like an angry tween mean girl since day 1."
    },
    {
      id: 1194,
      question: "Which president established the most National Parks?",
      options: [
        "Theodore Roosevelt",
        "Ronald Reagan",
        "Jimmy Carter",
        "Franklin D Roosevelt"
      ],
      correctAnswer: "Theodore Roosevelt",
      explanation: "He created 5 Parks during his 8 years in office, but Carter added the most acreage, adding over half of the 85 million acres in the system."
    },
    {
      id: 1195,
      question: "Which of the following members of the second Trump administration were NOT former Fox News hosts?",
      options: [
        "JD Vance",
        "Dan Bongino",
        "Pete Hegseth",
        "Sean Duffy"
      ],
      correctAnswer: "JD Vance",
      explanation: "Despite his frat boy vibes and love of conspiracy theories, he did not work at Fox. Vance was a Yale Law school grad who once described Trump as \"an idiot\" and \"reprehensible\", and compared him to Hitler. "
    },
    {
      id: 1196,
      question: "This president signed the fewest executive orders during their time in office.",
      options: [
        "William Harrison",
        "Donald Trump",
        "Franklin D Roosevelt",
        "George Washington"
      ],
      correctAnswer: "William Harrison",
      explanation: "FDR signed 3,726 over his 12 years in office, for an average of 307 per year. Trump has signed 427 as of September 2025. Washington signed one. Harrison signed zero."
    },
    {
      id: 1197,
      question: "Which of the following sitting Vice Presidents shot and killed a man?",
      options: [
        "Aaron Burr",
        "Dick Cheney",
        "Richard Nixon",
        "Dan Quayle"
      ],
      correctAnswer: "Aaron Burr",
      explanation: "Burr killed Alexander Hamilton in a duel. Cheney shot a 78 year attorney in the face, neck and chest in a 'hunting accident' but the man lived."
    }
  ],
  'custom-trivia': []
};

export function getQuestionsByCategory(category: string): Question[] {
  const baseQuestions = triviaData[category] || [];
  
  if (typeof window !== 'undefined') {
    try {
      const storedQuestionsRaw = localStorage.getItem(category);
      if (storedQuestionsRaw) {
        const storedQuestions = JSON.parse(storedQuestionsRaw);
        // Basic validation
        if (Array.isArray(storedQuestions)) {
          const combinedQuestions = [...baseQuestions];
          const baseIds = new Set(baseQuestions.map(q => q.id));
          
          for (const storedQ of storedQuestions) {
            if (storedQ && typeof storedQ.id !== 'undefined' && !baseIds.has(storedQ.id)) {
              combinedQuestions.push(storedQ);
              baseIds.add(storedQ.id); // Prevent adding duplicates from localStorage
            }
          }
          return combinedQuestions;
        }
      }
    } catch (error) {
      console.error("Error parsing questions from localStorage:", error);
      // Fallback to base questions if localStorage is corrupt
      return baseQuestions;
    }
  }
  
  return baseQuestions;
}

    