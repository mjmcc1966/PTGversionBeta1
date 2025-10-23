
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
      question: 'Which land mammal has the most teeth?',
      options: [ 'Giant armadillo', 'Domestic dog', 'Lion', 'Sloth' ],
      correctAnswer: 'Giant armadillo',
      explanation: 'They have 80-100 teeth, but snails win the award for most teeth of any animal, with up to 25,000 tiny teeth to chew on the vegetables you are trying to grow.'
    },
    {
      id: 2,
      question: 'What is the name of the patient in the game Operation?',
      options: [ 'Cavity Sam', 'Bob the Body', 'Fat Freddy', 'He has no name' ],
      correctAnswer: 'Cavity Sam',
      explanation: 'John Spinello designed the game and sold it to a toy designer for $500 and the promise of a job when he graduated - which he did not get.'
    },
    {
      id: 3,
      question: 'Where did Calypso music originate?',
      options: [ 'Trinidad & Tobago', 'Jamaica', 'Barbados', 'Cuba' ],
      correctAnswer: 'Trinidad & Tobago',
      explanation: 'It has its origins in West Africa and the word may come from the Efik phrase "ka isu", meaning "go on!"'
    },
    {
      id: 4,
      question: "The tiny pocket in Levi's denim jeans was meant to hold this.",
      options: [ 'A pocket watch', 'Coins', 'A key', 'One extra bullet' ],
      correctAnswer: 'A pocket watch',
      explanation: 'The famous copper rivets were placed at all the stress points to make the pants last longer.'
    },
    {
      id: 5,
      question: 'What is the term for when flocks of starlings swoop and swirl in unison?',
      options: [ 'Murmuration', 'Confabulation', 'Auscultation', 'Ornithation' ],
      correctAnswer: 'Murmuration',
      explanation: 'Clarice Starling, plyaed by Jodie Foster in the movie, was the fictional protagonist of the Silence of the Lambs.'
    },
    {
      id: 6,
      question: 'Which of the following is NOT considered a star (stellar) remnant?',
      options: [ 'Red giant', 'White dwarf', 'Black hole', 'Neutron star' ],
      correctAnswer: 'Red giant',
      explanation: 'A red giant is a late phase star, and our own sun will become one in about 5 billion years, at which point it will likely consume Mars, Venus and Earth.'
    },
    {
      id: 7,
      question: 'If you straightened the groove on a typical 12-inch music album, how far would the line be (in feet)?',
      options: [ '1,500', '500', '3,000', '5,280' ],
      correctAnswer: '1,500',
      explanation: 'A typical LP would have about 18-22 minutes of music per side, with about 667 threads.'
    },
    {
      id: 8,
      question: "This product was originally designed in Cincinnatti in the 1930s by a soap manufacturer and went on to become a child's toy still sold today.",
      options: [ 'Play Doh', 'Slinky', 'Shrinky Dinks', 'Slime' ],
      correctAnswer: 'Play Doh',
      explanation: 'It was originally used to remove coal residue from walls when coal was used to heat homes.'
    },
    {
      id: 9,
      question: 'The inventor of this widely consumed drink hoped to combat morphine addiction with his product.',
      options: [ 'Coca Cola', 'Dr Pepper', "Vernor's Ginger Ale", 'Moxie' ],
      correctAnswer: 'Coca Cola',
      explanation: 'It should not be confused with Coca Colla, a Bolivian energy drink made since 2010 that contains actual coca leaf extract.'
    },
    {
      id: 10,
      question: 'This mouthwash was originally developed as a surgical antiseptic.',
      options: [ 'Listerine', 'Scope', 'Cepacol', 'Oral B' ],
      correctAnswer: 'Listerine',
      explanation: 'Dr Joseph Lister was the first to note that surgical dressings treated with phenol would cause fewer infections. The antiseptic was named in honor of him.'
    },
    {
      id: 11,
      question: "Rogaine's original purpose was to treat this common medical condition.",
      options: [ 'High blood pressure', 'Erectile dysfunction', 'High cholesterol', 'Diabetes' ],
      correctAnswer: 'High blood pressure',
      explanation: 'Interestingly, rogaining is an orienteering sport of long-distance cross-country navigation where events can last 24 hours.'
    },
    {
      id: 12,
      question: 'Bubble wrap was originally intended to be a new kind of _____.',
      options: [ 'Wallpaper', "Children's toy", 'Surgical dressing', 'Furniture cover' ],
      correctAnswer: 'Wallpaper',
      explanation: 'The first widespread use of the material in packaging was in 1960 with IBM 1401 computers, the "Model T" of computers.'
    },
    {
      id: 13,
      question: "This British royal is pictured on every bottle of Bombay Sapphire gin, even though the gin was first released in 1986, long after this ruler had died.",
      options: [ 'Queen Victoria', 'King George', 'Queen Elizabeth', 'King Edward' ],
      correctAnswer: 'Queen Victoria',
      explanation: 'Some of the unique ingredients of this gin include orris root, cubeb and grains of paradise.'
    },
    {
      id: 14,
      question: 'A group of cobras is known as a(n) ________.',
      options: [ 'Quiver', 'Gaggle', 'Murder', 'Aspen' ],
      correctAnswer: 'Quiver',
      explanation: 'Quiver of Cobras is also book 2 of 3 in the Fractured Faery series by Helen Harper.'
    },
    {
      id: 15,
      question: 'This airline was the first to introduce online check in, in 1999.',
      options: [ 'Alaska Airlines', 'Southwest', 'United', 'American' ],
      correctAnswer: 'Alaska Airlines',
      explanation: 'It began as McGee Airways in 1932, flying between Anchorage and Bristol Bay.'
    },
    {
      id: 16,
      question: 'Niagara Falls consists of three falls, American, Horseshoe, and _____ (the smallest).',
      options: [ 'Bridal Veil', 'Canadian', 'Saddle', 'Horsetail' ],
      correctAnswer: 'Bridal Veil',
      explanation: 'Formed by the Niagara River, which flows north from Lake Erie to Lake Ontario, the Falls have a height of 187 ft (57 m).'
    },
    {
      id: 17,
      question: 'The only two airlines that ever flew the Concorde were British Air and ___.',
      options: [ 'Air France', 'American Airlines', 'Lufthansa', 'Virgin Air' ],
      correctAnswer: 'Air France',
      explanation: 'The plane could cruise at Mach 2.04 (1,347 mph / 2,167 km/h) and burned 4,800 gallons of fuel per hour at 60,000 feet.'
    },
    {
      id: 18,
      question: "This extremely busy airport was initially called Idlewild airport, before it was named after the 35th president.",
      options: [ 'John F Kennedy International', 'Reagan Washington National', 'George Bush Intercontinental', 'Gerald Ford International' ],
      correctAnswer: 'John F Kennedy International',
      explanation: 'Initially built to relieve some of the crowding at LaGuardia Airport, it was named after a golf course that it was built over.'
    },
    {
      id: 19,
      question: "The world's oldest writing system originated in Mesopotamia about 5,000 years ago.",
      options: [ 'Cuneiform', 'Hieroglyphics', 'Elamite', 'Indus' ],
      correctAnswer: 'Cuneiform',
      explanation: 'Originally used for the Sumerian language starting around 3,300 BCE, it was used until the first century CE.'
    },
    {
      id: 20,
      question: 'This transcontinental city used to be known as Constantinople.',
      options: [ 'Istanbul', 'Thessaloniki', 'Ankara', 'Sarajevo' ],
      correctAnswer: 'Istanbul',
      explanation: 'The song "Istanbul (Not Constantinople)" by They Might Be Giants appeared on the 1990 album Flood, and includes the line, "Why did Constantinople get the works? That\'s nobody\'s business but the Turks."'
    },
    {
      id: 21,
      question: "The world's tallest (at 984 ft) and longest (at 1486 ft) glass bridge is found in this country.",
      options: [ 'China', 'USA', 'France', 'Germany' ],
      correctAnswer: 'China',
      explanation: 'A bridge in Vietnam that opened in 2022 is now longer including its lead-up walkways, but the Zhangjiajie bridge has a much longer open span.'
    },
    {
      id: 22,
      question: "Meryl Streep's first name at birth was _____.",
      options: [ 'Mary Louise', 'Marilyn', 'Meerkaacht', 'Gertrude' ],
      correctAnswer: 'Mary Louise',
      explanation: 'She has a record 21 Oscar nominations with 3 wins, but sadly did NOT win for The Bridges of Madison County (losing to Susan Sarandon that year for her work in Dead Man Walking).'
    },
    {
      id: 23,
      question: 'Vexillology, rooted in the Latin word vexillum, is the study of ____.',
      options: [ 'Flags', 'Curses and hexes', 'Fungal diseases', 'Zombie themed films or shows' ],
      correctAnswer: 'Flags',
      explanation: 'There are currently 254 flags of all countries and territories, but only 193 flags of United Nations members.'
    },
    {
      id: 24,
      question: "The longest road in the US, stretching 3,365 miles (5,415 km) from Boston,MA to Newport, OR is ____.",
      options: [ 'US 20', 'Route 66', 'Route 1', 'I-95' ],
      correctAnswer: 'US 20',
      explanation: 'US 20 was not planned to be coast-to-coast and initially it stopped at Yellowstone National Park. It was extended to the Pacific in 1940.'
    },
    {
      id: 25,
      question: 'What South American country is on the exact opposite side of earth from Beijing, China?',
      options: [ 'Argentina', 'Bolivia', 'Peru', 'Chile' ],
      correctAnswer: 'Argentina',
      explanation: 'The antipode is the exact opposite location of anywhere on earth, and Australia is the largest land mass whose antipode is entirely in water (in the Atlantic Ocean).'
    },
    {
      id: 26,
      question: 'What vegetable did the British use to substitute for bananas during WWII?',
      options: [ 'Rutabagas', 'Potatoes', 'Carrots', 'Squash' ],
      correctAnswer: 'Rutabagas',
      explanation: 'Known as swede in England, it is one of the four traditional ingredients in the Cornwall pasty.'
    },
    {
      id: 27,
      question: "What was the name of the Lone Ranger's horse?",
      options: [ 'Silver', 'Tonto', 'Kemosabe', 'Victor' ],
      correctAnswer: 'Silver',
      explanation: 'Tonto was the Lone Ranger\'s sidekick, but since "tonto" means stupid in Spanish, he was renamed "Toro" or "Ponto" in Spanish-language countries.'
    },
    {
      id: 28,
      question: 'A mule is the offspring of which two animals?',
      options: [ 'Donkey and horse', 'Horse and zebra', 'Donkey and zebra', 'Two mules, duh' ],
      correctAnswer: 'Donkey and horse',
      explanation: 'A cross between a male donkey, with 62 chromosomes, and a female horse, with 64 chromosomes, results in a 63 chromosome mule that is usually infertile.'
    },
    {
      id: 29,
      question: "What is the last name of Barbie's (the doll) boyfriend Ken?",
      options: [ 'Carson', 'Jennings', 'Griffey', 'Chesney' ],
      correctAnswer: 'Carson',
      explanation: 'He was named after the son of Barbie creator Ruth Handler, and he died in 1994 of AIDS related complications.'
    },
    {
      id: 30,
      question: 'What is the most common official state beverage?',
      options: [ 'Milk', 'Water', 'Whiskey', 'Orange juice' ],
      correctAnswer: 'Milk',
      explanation: "22 states list milk as their state beverage, with Rhode Island having 'coffee milk' as their choice."
    },
    {
      id: 31,
      question: 'What is the only Canadian province with a majority that speaks French?',
      options: [ 'Quebec', 'Ontario', 'New Brunswick', 'Nova Scotia' ],
      correctAnswer: 'Quebec',
      explanation: "Quebec is the largest province by area, and second largest by population, and is largely responsible for making hockey one of Canada's most popular sports."
    },
    {
      id: 32,
      question: "What was F. Scott Fitzgerald's first name?",
      options: [ 'Francis', 'Fernando', 'Felix', 'Finnegan' ],
      correctAnswer: 'Francis',
      explanation: "His best known novel, The Great Gatsby, was a commercial failure on release, only selling 23,000 copies. It's now considered by many to be one of the greatest American novels ever written."
    },
    {
      id: 33,
      question: 'Which state did the Oregon Trail originate in?',
      options: [ 'Missouri', 'Kansas', 'Oklahoma', 'Oregon' ],
      correctAnswer: 'Missouri',
      explanation: 'The trail was 2,170 miles (3,490 km) long and connected the Missouri River to the Willamette Valley in Oregon.'
    },
    {
      id: 34,
      question: 'Which unit of measurement, corresponding to 4 inches, is used to measure the height of horses?',
      options: [ 'Hand', 'Fetlock', 'Hock', 'Wither' ],
      correctAnswer: 'Hand',
      explanation: 'The height is measured at the withers, the point where the neck meets the back. The largest known horse was a Shire horse (named Mammoth) that stood over 21 hands tall.'
    },
    {
      id: 35,
      question: "In which country would you find the largest beaver dam in the world, in Wood Buffalo National Park?",
      options: [ 'Canada', 'USA', 'United Kingdom', 'Finland' ],
      correctAnswer: 'Canada',
      explanation: 'It has at least 2 lodges and is almost 2,800 ft (850 m) long, and is rumored to have strict rent-control measures in place.'
    },
    {
      id: 36,
      question: "The main ingredients of the French dish 'escargot' are ____.",
      options: [ 'Snails', 'Clams', 'Frog legs', 'Mussels' ],
      correctAnswer: 'Snails',
      explanation: 'Snail farming is known as heliciculture, and since snails are mollusks, they are classified as seafood.'
    },
    {
      id: 37,
      question: 'The color of the Golden Gate Bridge is officially known as _____.',
      options: [ 'International orange', 'Burnt sienna', 'Vermillion', 'Golden Gate terra cotta' ],
      correctAnswer: 'International orange',
      explanation: 'The bridge connects San Francisco to Marin county, not (as is often mistakenly believed) to Oakland.'
    },
    {
      id: 38,
      question: 'Which Latin phrase, associated with diplomas, means "with praise?"',
      options: [ 'Cum laude', 'Magnus opum', 'Opus Dei', 'Carpe Diem' ],
      correctAnswer: 'Cum laude',
      explanation: 'Typically a GPA needs to be at least 3.5 on a 4.0 scale to qualify for cum laude, but it may vary at different institutions.'
    },
    {
      id: 39,
      question: "Which country has a river known as the Liquid Rainbow, because of its many colors largely due to the aquatic plant Macarenia claviger?",
      options: [ 'Colombia', 'United States', 'France', 'Australia' ],
      correctAnswer: 'Colombia',
      explanation: 'The river is known as the Cana Cristales, and the colors usually only appear from July to November.'
    },
    {
      id: 40,
      question: 'The shape of a traditional loaf of sourdough bread is known as a(n) _____.',
      options: [ 'Boule', 'Carree', 'Decollete', 'Rendezvous' ],
      correctAnswer: 'Boule',
      explanation: "Boule is French for 'ball', because the loaf is shaped like a ball. It is where the word boulangerie, for bread bakery, derives."
    },
    {
      id: 41,
      question: 'What nation is growing wider by about 2-5 cm each year, due to volcanic activity?',
      options: [ 'Iceland', 'Hawaii', 'Kenya', 'Greenland' ],
      correctAnswer: 'Iceland',
      explanation: 'Because of high volcanic activity, the country itself is growing, not its people. Were that the case, then the US would win hands down.'
    },
    {
      id: 42,
      question: 'Which of these is not a capital city in World of Warcraft?',
      options: [ 'Akureyri', 'Darnassuss', 'Orgrimmar', 'Stormwind' ],
      correctAnswer: 'Akureyri',
      explanation: "Akureyri is a town in Iceland known as the capital of the north, and is an excellent spot to see the Northern Lights."
    },
    {
      id: 43,
      question: 'Which letter is the only one that does not appear at the beginning of at least one element in the periodic table?',
      options: [ 'J', 'Z', 'X', 'Y' ],
      correctAnswer: 'J',
      explanation: 'Z for Zinc, Y for Ytterbium and X for Xenon, but sadly, J appears nowhere in any element name.'
    },
    {
      id: 44,
      question: 'Which muppet once testified before Congress, over spending on music in schools?',
      options: [ 'Elmo', 'Kermit', 'Miss Piggy', 'Animal, the drummer' ],
      correctAnswer: 'Elmo',
      explanation: 'He was the first non-human to testify in front of Congress. (insert your own joke here)'
    },
    {
      id: 45,
      question: 'What iconic Washington DC building contains a basketball court inside?',
      options: [ 'US Supreme Court', 'White House', 'Lincoln Memorial', 'US Capitol' ],
      correctAnswer: 'US Supreme Court',
      explanation: 'Known as "The Highest Court in the Land", it sits on the 4th floor, and cannot be used on days court is in session.'
    },
    {
      id: 46,
      question: 'Roquefort cheeses are made from the milk of this animal.',
      options: [ 'Sheep', 'Goats', 'Cows', 'Camels' ],
      correctAnswer: 'Sheep',
      explanation: 'A cheese can only be called Roquefort if it is aged in the Combalou caves of the Roquefort region of France. Because those caves have the best Penicillium roquefort mold...'
    },
    {
      id: 47,
      question: 'What is the longest muscle in the human body?',
      options: [ 'Sartorius', 'Latissimus', 'Flexor pollicus longus', 'Rectus abdominus' ],
      correctAnswer: 'Sartorius',
      explanation: 'It runs from a part of the hip to just below the inside of the knee. The Latin word for tailor is sartor, and this muscle is often well-developed in tailors because of how they would sit.'
    },
    {
      id: 48,
      question: 'Which island off of California is considered the "Ellis Island of the West"?',
      options: [ 'Angel Island', 'Catalina Island', 'Fantasy Island', 'Isla de los Inmigrantes' ],
      correctAnswer: 'Angel Island',
      explanation: 'The island was used as a processing center during most of the Chinese Exclusion Act of 1882, which helped keep Chinese from entering the country. The law existed until 1943.'
    },
    {
      id: 49,
      question: 'In which US National Park can you find El Capitan?',
      options: [ 'Yosemite NP', 'Yellowstone NP', 'Great Smoky Mountains NP', 'Glacier NP' ],
      correctAnswer: 'Yosemite NP',
      explanation: 'Alex Honnold did the first free solo - with no protection, ropes or equipment - of El Cap in June 2017, in just under 4 hours.'
    },
    {
      id: 50,
      question: 'The only US National Park found in the southern hemisphere is found in this territory.',
      options: [ 'American Samoa', 'Guam', 'Republic of Palau', 'Northern Mariana Islands' ],
      correctAnswer: 'American Samoa',
      explanation: 'The National Park or American Samoa is spread out over three of the five islands that make up Samoa, and includes about 4,000 acres of Park that are underwater.'
    },
    {
      id: 51,
      question: 'What sporting event is known as the "Run for the Roses"?',
      options: [ 'Kentucky Derby', 'Rose Bowl', 'Portland (OR) Marathon', 'Super Bowl' ],
      correctAnswer: 'Kentucky Derby',
      explanation: 'For the 3-year-old thoroughbreds that run it, it is the first time they will have run the one and a quarter mile length.'
    },
    {
      id: 52,
      question: 'After Mexico and Canada, which country is closest to the US?',
      options: [ 'Russia', 'Cuba', 'Jamaica', 'The Bahamas' ],
      correctAnswer: 'Russia',
      explanation: "Despite Sarah Palin's claims, the only spot where Russia is visible from Alaska is in the Diomedes Islands, which are 2.4 miles apart. The westernmost island lies in Russia, and the easternmost lies in Alaska"
    },
    {
      id: 53,
      question: 'Sitting in the Bering Strait, Little Diomede Island is part of the US, and Big Diomede Island is part of _____.',
      options: [ 'Russia', 'USA', 'Canada', 'Cuba' ],
      correctAnswer: 'Russia',
      explanation: 'They lie in the Bering Sea and are separated by the international date line. For this reason, Big Diomede is sometimes called Tomorrow Island, and Little Diomede is called Yesterday Island'
    },
    {
      id: 54,
      question: 'Which is the best selling Girl Scout cookie?',
      options: [ 'Thin Mints', 'Caramel Delites / Samoas', 'Trefoils', 'Peanut butter patties / Tagalongs' ],
      correctAnswer: 'Thin Mints',
      explanation: 'Selling over 50 million boxes a year (about 1.6 billion thin mints), they easily surpass Samoas and Tagalongs, the second and third place cookies.'
    },
    {
      id: 55,
      question: "In the cartoon series Scooby-Doo, Scooby's best friend was amateur detective Shaggy. What was Shaggy's real first name?",
      options: [ 'Norville', 'Fred', 'Malachi', 'Bob' ],
      correctAnswer: 'Norville',
      explanation: "'Norville 'Shaggy' Rogers was the only character with facial hair, and for over 30 years he was voiced by Casey Kasem"
    },
    {
      id: 56,
      question: 'Wilt Chamberlain scored 100 points in a basketball game for this team in 1962, at the HersheyPark Arena.',
      options: [ 'Philadelphia Warriors', 'New York Knicks', 'Minnesota Timberwolves', 'LA Lakers' ],
      correctAnswer: 'Philadelphia Warriors',
      explanation: 'The Warriors beat the New York Knicks, 169-147. The team moved to California after that season and became the San Francisco Warriors.'
    },
    {
      id: 57,
      question: 'The original Smokey the Bear was rescued from a fire in these mountains in New Mexico.',
      options: [ 'Capitan Mountains', 'Cascade mountains', 'Sierra Nevadas', 'Appalachian mountains' ],
      correctAnswer: 'Capitan Mountains',
      explanation: 'The ad campaign to stop forest fires first began in 1944, but Smokey was not found and identified until 1950. The ad campaign is the longest running one in the US.'
    },
    {
      id: 58,
      question: "Which US city was originally designed by French engineer Pierre L'Enfant in 1791?",
      options: [ 'Washington DC', 'Philadelphia', 'Las Vegas', 'New York City' ],
      correctAnswer: 'Washington DC',
      explanation: 'His design inspired many other cities and capitals, such as Sacramento, New Delhi India and Canberra Australia.'
    },
    {
      id: 59,
      question: 'In what city did the Beatles have their first concert in the US, in February 1964?',
      options: [ 'Washington DC', 'New York, NY', 'Harrisburg, PA', 'Detroit, MI' ],
      correctAnswer: 'Washington DC',
      explanation: 'They appeared on the Ed Sullivan Show 2 days prior, on February 9, with their first song being "All My Loving".'
    },
    {
      id: 60,
      question: 'This country produces more cocoa than any other.',
      options: [ "Côte D'Ivoire", 'United States', 'Iceland', 'Switzerland' ],
      correctAnswer: "Côte D'Ivoire",
      explanation: "It produces almost 40% of the world's cocoa and half the country works in agriculture."
    },
    {
      id: 61,
      question: 'What country has appointed cats as train station masters?',
      options: [ 'Japan', 'Poland', 'Russia', 'Australia' ],
      correctAnswer: 'Japan',
      explanation: 'Tama was the first stationmaster cat, until 2015 when she died and was replaced by Nitama.'
    },
    {
      id: 62,
      question: "This nation's motto is \"Truth Prevails\" (or \"Pravda vitezi\"), a reference to famed religious reformer Jan Hus.",
      options: [ 'Czech Republic', 'Poland', 'Russia', 'Kenya' ],
      correctAnswer: 'Czech Republic',
      explanation: 'Hus was a reformer whose beliefs led to the founding of Protestantism.'
    },
    {
      id: 63,
      question: "Mrs. O'Leary's _____ allegedly started the Great Chicago Fire in 1871 by knocking over a lantern, where now sits a fire academy.",
      options: [ 'Cow', 'Husband', 'Goat', 'Son' ],
      correctAnswer: 'Cow',
      explanation: 'It is unknown how the fire actually started, but it destroyed about 1/3 of the city.'
    },
    {
      id: 64,
      question: 'What drink is made from steeping the dried skins and pulp (not the seeds) of the coffee tree?',
      options: [ 'Cascara', 'Rum', 'Gin', 'Four Loko' ],
      correctAnswer: 'Cascara',
      explanation: 'Also known as coffee cherry tea, it has a caffeine content similar to black tea.'
    },
    {
      id: 65,
      question: 'What soda was the first to use 2 liter bottles, starting in 1970?',
      options: [ 'Pepsi', 'Fresca', 'Coca Cola', 'Tab' ],
      correctAnswer: 'Pepsi',
      explanation: 'PET, the type of thermoplastic used for these bottles, is one of the few plastics that actually can be and does get recycled.'
    },
    {
      id: 66,
      question: "While Alexander Graham Bell is given the credit for inventing the telephone, this Italian inventor was actually the first to develop a voice-cummunication apparatus.",
      options: [ 'Antonio Meucci', 'Antonio Soprano', 'Amerigo Vespucci', 'Benito Mussolini' ],
      correctAnswer: 'Antonio Meucci',
      explanation: "He submitted a patent request in 1871 that was never approved, 5 years before Bell submitted his, although Meucci's lacked significant details."
    },
    {
      id: 67,
      question: 'This town in Wisconsin is nicknamed "Malibu of the Midwest" because of its strong surf culture.',
      options: [ 'Sheboygan', 'Milwaukee', 'Madison', 'Green Bay' ],
      correctAnswer: 'Sheboygan',
      explanation: 'Lake Michigan is the most-surfed lake in the US, with over 70 designated spots.'
    },
    {
      id: 68,
      question: 'Which is the only NFL team to have two winless seasons (as of 2024)?',
      options: [ 'Detroit Lions', 'Cleveland Browns', 'Dallas Cowboys', 'Tampa Bay Buccaneers' ],
      correctAnswer: 'Detroit Lions',
      explanation: 'They went 0-10 in 1942 and 0-16 in 2008. In 2023 they went 12-5, tying a franchise record for wins. As of early 2025, the Cleveland Browns are the most recent team to have a winless season, in 2017.'
    },
    {
      id: 69,
      question: 'The emperor Shah Jahan had this built in Agra, in 1631, as a tomb for his wife, who died the same year.',
      options: [ 'Taj Mahal', 'The Great Pyramid', 'The Pantheon', 'The Parthenon' ],
      correctAnswer: 'Taj Mahal',
      explanation: 'It costs about $13 for foreigners to visit, and visitors get fined if they stay longer than 3 hours.'
    },
    {
      id: 70,
      question: 'In which country was true paper first produced?',
      options: [ 'China', 'Egypt', 'Greece', 'India' ],
      correctAnswer: 'China',
      explanation: 'While Egyptian papyrus predates the Chinese paper and gave rise to the word paper, papyrus was not really a true paper.'
    },
    {
      id: 71,
      question: "This Asian country's current capitol (whose name used to be Edo before it was changed to its current name in 1868) is an anagram of its former capitol.",
      options: [ 'Japan', 'Malaysia', 'China', 'Thailand' ],
      correctAnswer: 'Japan',
      explanation: 'Tokyo is the current capital, and Kyoto was its former capital. Tokyo was named Edo up until 1868, when it was renamed Tokyo and became the capital in 1869.'
    },
    {
      id: 72,
      question: 'What was the first slogan for Oreo cookies?',
      options: [ 'Oh! Oh! Oreo!', "Milk's Favorite Cookie", 'For the Kid in All of Us', 'Dip It, Beeyatch!' ],
      correctAnswer: 'Oh! Oh! Oreo!',
      explanation: 'Oreo, which is an imitation of the Hydrox cookie, is the best selling cookie worldwide, selling over 40 billion cookies per year worldwide.'
    },
    {
      id: 73,
      question: "In the comic strip Garfield, what is the name of the dog that shares Garfield's home?",
      options: [ 'Odie', 'Rufus', 'Cletus', 'Jason' ],
      correctAnswer: 'Odie',
      explanation: 'Published since 1978, it follows the thrilling adventures of an obese cat in Muncie, Indiana.'
    },
    {
      id: 74,
      question: 'George Lucas lost a $40 million bet with _____, over how well Star Wars would do compared to Close Encounters of the Third Kind.',
      options: [ 'Steven Spielberg', 'Harrison Ford', 'Elon Musk', 'Francis Ford Coppola' ],
      correctAnswer: 'Steven Spielberg',
      explanation: 'They bet each other 2.5% of the gross of their respective films, as Lucas was convinced that Close Encounters was going to be much bigger than Star Wars.'
    },
    {
      id: 75,
      question: 'The gin and tonic was invented in this country, as something that would ward off malaria.',
      options: [ 'India', 'France', 'Great Britain', 'Kenya' ],
      correctAnswer: 'India',
      explanation: 'Tonic water used to contain higher amounts of quinine, which has some anti-malarial properties. The gin made it go down easier.'
    },
    {
      id: 76,
      question: 'This country has the greatest per capita bread consumption, at around 440 pounds per person.',
      options: [ 'Turkey', 'United States', 'Germany', 'United Kingdom' ],
      correctAnswer: 'Turkey',
      explanation: 'Americans eat about 37 pounds per person. India consumes the least, about 4 pounds per person.'
    },
    {
      id: 77,
      question: "The clocktower in the Balmoral Hotel, found on Princes Street in this city, has purposely been running 3 minutes fast since 1902, so passengers don't miss their trains at the adjacent train station.",
      options: [ 'Edinburgh', 'Boston', 'Prague', 'Nairobi' ],
      correctAnswer: 'Edinburgh',
      explanation: "The only day of the year it shows the correct time is December 31, for New Year's celebrations (except in 2020, when it was more than happy to have 3 fewer minutes of that year)."
    },
    {
      id: 78,
      question: 'What country is considered the birthplace of chimney sweeps and has a yearly festival honoring them?',
      options: [ 'England', 'Italy', 'Germany', 'United States' ],
      correctAnswer: 'England',
      explanation: 'In Great Britain, it is considered lucky for a bride to see a chimney sweep on her wedding day, so many modern sweeps hire themselves out for this purpose.'
    },
    {
      id: 79,
      question: 'Peaches, plums, cherries and apricots are in the same genus as this nut.',
      options: [ 'Almond', 'Peanut', 'Hazelnut', 'Coconut' ],
      correctAnswer: 'Almond',
      explanation: 'One almond requires 1.1 gallons (4.2 liters) of water to grow.'
    },
    {
      id: 80,
      question: "The winds blowing in from the Great Basin that fuel many of California's wildfires every year are called the ____ winds.",
      options: [ 'Santa Ana', 'Diabatic', 'Chinook', 'Papagayo' ],
      correctAnswer: 'Santa Ana',
      explanation: "Also called 'devil winds', they originate in the inland desert and bring very hot, dry winds to coastal southern California."
    },
    {
      id: 81,
      question: 'This country consumes the most Kraft Mac & Cheese per capita, buying almost 25% of all boxes sold globally.',
      options: [ 'Canada', 'United States', 'United Kingdom', 'Italy' ],
      correctAnswer: 'Canada',
      explanation: 'Made with mostly Canadian ingredients in Canada, it rivals poutine as the national dish.'
    },
    {
      id: 82,
      question: 'The spire on the Empire State building (finished in 1931) was originally meant to be used as a(n) ____,',
      options: [ 'Blimp docking station', 'Radio station', 'TV station', 'Cell phone tower' ],
      correctAnswer: 'Blimp docking station',
      explanation: 'The plans were abandoned when it was realized the winds would be too strong for such uses.'
    },
    {
      id: 83,
      question: "The name Alexa, for Amazon's smart devices, was named for the ____.",
      options: [ 'Library of Alexandria', "Device designer's daughter", 'Heck of it', "Jeff Bezos' wife at the time" ],
      correctAnswer: 'Library of Alexandria',
      explanation: 'The Library of Alexandria was considered to be the repository of all knowledge at the time.'
    },
    {
      id: 84,
      question: 'What do the 36 columns of the Lincoln Memorial (honoring Abraham Lincoln, our 16th president) represent?',
      options: [ 'States in the Union at the time', 'Number of months Lincoln served as President', 'The year he was born (1836)', 'Nothing, it was just the number of columns that needed to be present' ],
      correctAnswer: 'States in the Union at the time',
      explanation: 'The Memorial has appeared on the back of the $5 bill since 1929 (with Lincoln on the front).'
    },
    {
      id: 85,
      question: 'This country has the most electric vehicles per capita.',
      options: [ 'Norway', 'China', 'United States', 'Germany' ],
      correctAnswer: 'Norway',
      explanation: 'About 29% of cars in Norway are EV as of 2024, with 90% of new car sales being EVs. (The US overall EV number is less than 2%) China has the most EVs on the road, at about 20 million.'
    },
    {
      id: 86,
      question: 'The phrase "hands down" (meaning easily, or unquestionably) was popularized by this sport.',
      options: [ 'Horse racing', 'Boxing', 'Baseball', 'Handball' ],
      correctAnswer: 'Horse racing',
      explanation: 'If a horse was far ahead of the others in a race, the jockey would loosen his grip on the reins and drop his hands down.'
    },
    {
      id: 87,
      question: 'Hawaiian pizza (pineapple and ham or bacon) originated in this country in 1962, and was not actually named after the state of Hawaii.',
      options: [ 'Canada', 'Italy', 'Russia', 'United States' ],
      correctAnswer: 'Canada',
      explanation: 'The Greek-born Canadian named it after the brand of canned pineapple they were using. A version without the ham or bacon first appeared in Portland, OR in 1957.'
    },
    {
      id: 88,
      question: "This famous rock guitarist played the iconic solo on Michael Jackson's 'Beat It'",
      options: [ 'Eddie Van Halen', 'Jimi Hendrix', 'Eric Clapton', 'Alex Lifeson' ],
      correctAnswer: 'Eddie Van Halen',
      explanation: 'He formed Van Halen with his brother Alex in 1973, and their only #1 Billboard hit was Jump from 1984.'
    },
    {
      id: 89,
      question: 'In what country are all unmarked mute swans considered property of the royal family?',
      options: [ 'United Kingdom', 'India', 'Mongolia', 'Ghana' ],
      correctAnswer: 'United Kingdom',
      explanation: "Swan upping occurs in the 3rd week of July, where the 'swan uppers' count all the swans and check their health."
    },
    {
      id: 90,
      question: 'Tennis balls used at Wimbledon are kept at ___ degrees Fahrenheit, as this gives the appropriate bounce.',
      options: [ '68', '32', '0', '100' ],
      correctAnswer: '68',
      explanation: 'Over 54,000 tennis balls are used throughout the 2-week tournament each summer.'
    },
    {
      id: 91,
      question: "Nicolas Appert is considered the father of ___, also known as 'appertization' in his honor, because of his use of champagne bottles to get fresh food to French troops.",
      options: [ 'Canning', 'Pasteurization', 'Pickling', 'Fermentation' ],
      correctAnswer: 'Canning',
      explanation: 'The original seal for the bottles was a mix of cheese and mineral lime. The sealed bottle would then be placed in boiling water to cook the contents thoroughly.'
    },
    {
      id: 92,
      question: 'The oldest Major League Baseball stadium still in use, and built in 1912, is ____.',
      options: [ 'Fenway Park', 'Yankee Stadium', 'Wrigley Field', 'Dodger Stadium' ],
      correctAnswer: 'Fenway Park',
      explanation: 'The infamous "Green Monster" in left field is 37 ft 2 inches high and makes hitting a home run over it very difficult.'
    },
    {
      id: 93,
      question: 'The first American League baseball team to sign a black player, Larry Doby, was the ____ in 1947.',
      options: [ 'Cleveland Indians', 'New York Yankees', 'Philadelphia Phillies', 'Atlanta Braves' ],
      correctAnswer: 'Cleveland Indians',
      explanation: "Jackie Robinson was the first black player in MLB, signed in 1945 to play for the National League's Brooklyn Dodgers starting in 1947."
    },
    {
      id: 94,
      question: 'The original name for this popular animated Pixar character was Lunar Larry.',
      options: [ 'Buzz Lightyear', 'Woody', 'Lightning McQueen', 'WALL-E' ],
      correctAnswer: 'Buzz Lightyear',
      explanation: 'Toy Story was the second highest grossing film (globally) of 1995, making $363 million (just behind Die Hard with a Vengeance at $366 million).'
    },
    {
      id: 95,
      question: 'The first Beatles song to be longer than 3 minutes was ____, on the album "Help!" in 1965.',
      options: [ 'Ticket to Ride', 'Help!', 'I Want to Hold Your Hand', 'Imagine' ],
      correctAnswer: 'Ticket to Ride',
      explanation: 'Many critics felt this was the song where the Beatles began transitioning from pure pop to a more complex and nuanced style.'
    },
    {
      id: 96,
      question: 'This famous bridge in London, built in the late 1800s, actually has a chimney on it, which was used by the guards stationed below.',
      options: [ 'Tower Bridge', 'London Bridge', 'Westminster Bridge', 'Pont Neuf' ],
      correctAnswer: 'Tower Bridge',
      explanation: 'It was connected to a guardroom fireplace and painted to look like one of the lamp posts (but with no lamp on top).'
    },
    {
      id: 97,
      question: 'Nea Kameni is part of the Santorini caldera, an active volcano in this country.',
      options: [ 'Greece', 'United States', 'Japan', 'Italy' ],
      correctAnswer: 'Greece',
      explanation: 'It is part of the Decade Volcanoes, a group of 16 volcanoes that have a history of large eruptions near highly populated regions.'
    },
    {
      id: 98,
      question: 'This Canadian city in the province of Manitoba is the polar bear capital of the world.',
      options: [ 'Churchill', 'Montreal', 'Canuckville', 'Vancouver' ],
      correctAnswer: 'Churchill',
      explanation: 'Thanks to climate change, polar bears have a shorter hunting season due to loss of sea ice.'
    },
    {
      id: 99,
      question: 'Who was the main Sith villain in Star Wars: The Phantom Menace?',
      options: [ 'Darth Maul', 'Darth Vader', 'Darth Tyranus', 'Darth Bane' ],
      correctAnswer: 'Darth Maul',
      explanation: 'The Phantom Menace also introduced the world to one of the most beloved characters in the Star Wars pantheon, Jar Jar Binks.'
    },
    {
      id: 100,
      question: 'In the movie "Titanic", who actually drew a naked Rose as one of Jack\'s "French girls"?',
      options: [ 'James Cameron', 'Leonardo DiCaprio', 'Michelangelo', 'Kate Winslet' ],
      correctAnswer: 'James Cameron',
      explanation: 'Winslet was not naked during the scene but was wearing a bathing suit (along with the fictitious Heart of the Ocean diamond).'
    },
    {
      id: 101,
      question: 'This Central American country\'s name translates as "abundance of fish, trees and butterflies".',
      options: [ 'Panama', 'Venezuela', 'Guyana', 'Costa Rica' ],
      correctAnswer: 'Panama',
      explanation: "While the actual origin is unclear, this meaning is the official one put forth by Panama's Ministry of Education."
    },
    {
      id: 102,
      question: 'The Louvre in Paris and the Rock and Roll Hall of Fame in Cleveland both have designs by this famous architect who died in 2019 at age 102.',
      options: [ 'I.M. Pei', 'Eero Saarinen', 'Howard Roark', 'Frank Lloyd Wright' ],
      correctAnswer: 'I.M. Pei',
      explanation: 'He even spent two years working for the National Defense Research Committee during WWII.'
    },
    {
      id: 103,
      question: 'This item is banned in Los Angeles every October 31, because of the hazard it created on Hollywood Boulevard.',
      options: [ 'Silly String', 'Fireworks', 'Silly Putty', 'Play Doh' ],
      correctAnswer: 'Silly String',
      explanation: 'Violators face fines up to $1,000 and 6 months in jail. Because this is the biggest problem in Hollywood...'
    },
    {
      id: 104,
      question: 'The first woman to be Sports Illustrated\'s "Sportsperson of the Year", in 1972, was ____.',
      options: [ 'Billie Jean King', 'Venus Williams', 'Caitlyn Jenner', 'Simone Biles' ],
      correctAnswer: 'Billie Jean King',
      explanation: "King was a former tennis star who won 39 Grand Slam titles. Jenner was also on the cover of SI in the 1970s, but as her former male self, Bruce."
    },
    {
      id: 105,
      question: '""Once upon a midnight dreary" is the famous first line to this poem by Edgar Allan Poe.',
      options: [ 'The Raven', 'The Telltale Heart', 'Lenore', 'The Fall of the House of Usher' ],
      correctAnswer: 'The Raven',
      explanation: 'Poe died under mysterious circumstances at age 40 in Baltimore, which is how most people in Baltimore die.'
    },
    {
      id: 106,
      question: 'Which Persian Gulf country is the smallest by land area?',
      options: [ 'Bahrain', 'Qatar', 'Kuwait', 'Saudi Arabia' ],
      correctAnswer: 'Bahrain',
      explanation: 'It is 92% desert and is also the smallest in population, with about 1.5 million people.'
    },
    {
      id: 107,
      question: 'This country was the first to make broadband internet access a legal right, in 2009.',
      options: [ 'Finland', 'Japan', 'Burundi', 'Greenland' ],
      correctAnswer: 'Finland',
      explanation: 'Finland also said that the internet service must be reasonably priced, competetive and high quality. Just like Comcast/Xfinity.'
    },
    {
      id: 108,
      question: "The final stone or rock in curling is known as the ____ because of its potential to break up the other team's play.",
      options: [ 'Hammer', 'Other Woman', 'Yoko', 'Megastone' ],
      correctAnswer: 'Hammer',
      explanation: 'The fast-paced game involves sliding stones toward the target called the house to amass points.'
    },
    {
      id: 109,
      question: 'The title character in this famous novel by Bram Stoker was initially called Wampyr, before getting his much more iconic name.',
      options: [ 'Dracula', 'Dr Jekyll', 'The Wolf Man', 'Frankenstein' ],
      correctAnswer: 'Dracula',
      explanation: 'Abraham Van Helsing, played by Edward Van Sloan in the original Dracula movie, led a group that killed the Count when he moved to England.'
    },
    {
      id: 110,
      question: 'In the local African dialect, these famous waterfalls are known as "the smoke that thunders", but we call them ____.',
      options: [ 'Victoria Falls', 'Angel Falls', 'Kaieteur Falls', 'Iguazu Falls' ],
      correctAnswer: 'Victoria Falls',
      explanation: "The Zambezi River, on the border between Zambia and Zimbabwe, gives rise to the falls and is the 33rd longest in the world. All the other falls are in South America."
    },
    {
      id: 111,
      question: 'Which of the following cereals is NOT made by General Mills?',
      options: [ 'Honey Smacks', 'Lucky Charms', 'Cheerios', 'Cocoa Puffs' ],
      correctAnswer: 'Honey Smacks',
      explanation: 'Originally called "Sugar Smacks", the name was changed to "Honey Smacks" in the 1980s to make it seem like they didn\'t have that much sugar, but in fact it has the most sugar by weight of any cereal (56%).'
    },
    {
      id: 112,
      question: 'This country is the top producer of kiwifruit.',
      options: [ 'China', 'New Zealand', 'United States', 'Australia' ],
      correctAnswer: 'China',
      explanation: 'Also known as Chinese gooseberry, it is native to China and spread to New Zealand in the early 1900s.'
    },
    {
      id: 113,
      question: 'This author of famous children\'s books such as "James and the Giant Peach" also invented a medical device.',
      options: [ 'Roald Dahl', 'Theodor Geisel', 'Maurice Sendak', 'Beatrix Potter' ],
      correctAnswer: 'Roald Dahl',
      explanation: 'He helped develop the Wade-Dahl-Till valve, which prevented a brain shunt from getting clogged.'
    },
    {
      id: 114,
      question: 'This West African country got its name from the Portuguese word for shrimp.',
      options: [ 'Cameroon', 'Ghana', 'Gabon', 'Somalia' ],
      correctAnswer: 'Cameroon',
      explanation: 'The Cameroon ghost shrimp is a type of mud lobster native to west Africa.'
    },
    {
      id: 115,
      question: "Lake Titicaca, one of the world's oldest lakes and the highest navigable one by commercial craft, is on the border between Peru and ___.",
      options: [ 'Bolivia', 'Argentina', 'Guyana', 'Guinea' ],
      correctAnswer: 'Bolivia',
      explanation: 'At 12,507 ft (3,812 m), it is over 9,000 ft lower than the highest lake in the world, Ojos del Salado.'
    },
    {
      id: 116,
      question: 'Euskara, the oldest language still spoken in Europe, can be heard in the ____ region of Spain.',
      options: [ 'Basque', 'Andalusia', 'Normandy', 'Catalonia' ],
      correctAnswer: 'Basque',
      explanation: 'The language is considered unrelated to any other known language and is spoken by about 800,000 people.'
    },
    {
      id: 117,
      question: "This country produces the most garlic in the world, about 24 million tons per year.",
      options: [ 'China', 'Italy', 'United States', 'Iran' ],
      correctAnswer: 'China',
      explanation: 'Producing about 75% of the world\'s garlic, this is almost certainly why you never hear about Chinese vampires.'
    },
    {
      id: 118,
      question: "This country has 20% of the world's bird species, with an estimated 1,900 species found there.",
      options: [ 'Colombia', 'China', 'Iceland', 'Costa Rica' ],
      correctAnswer: 'Colombia',
      explanation: 'Six of the top 7 countries in terms of bird diversity are in South America.'
    },
    {
      id: 119,
      question: 'In 1968, this founding father (and inventor) was posthumously inducted into the International Swimming Hall of Fame for his many swimming achievements.',
      options: [ 'Benjamin Franklin', 'Abraham Lincoln', 'George Washington', 'Alexander Hamilton' ],
      correctAnswer: 'Benjamin Franklin',
      explanation: 'He was a passionate swimmer who invented swim fins for the hands and was a swimming coach.'
    },
    {
      id: 120,
      question: 'You can attend Elfschool in this country (where about 1/3 of the people still believe in the "hidden folk"), to learn all about elves, gnomes, trolls and fairies.',
      options: [ 'Iceland', 'Germany', 'Greenland', 'Mexico' ],
      correctAnswer: 'Iceland',
      explanation: "The elves even help Will Ferrell's character in Eurovision Song Contest: The Story of Fire Saga get into the singing competition."
    },
    {
      id: 121,
      question: "The leek is a symbol of this European country, which happens to also be where the groundbreaking 1960s series The Prisoner was filmed.",
      options: [ 'Wales', 'Germany', 'France', 'Spain' ],
      correctAnswer: 'Wales',
      explanation: 'The leek genus also contains onions, garlic, shallot, scallions and chives.'
    },
    {
      id: 122,
      question: 'Before becoming the first national park, ____ was initially called Wonderland because of all the curious features there.',
      options: [ 'Yellowstone NP', 'Yosemite NP', 'Great Smoky Mountain NP', 'Zion NP' ],
      correctAnswer: 'Yellowstone NP',
      explanation: 'The Yellowstone caldera is the largest volcano system in North America, and when it has erupted in the past, it has basically covered much of North America in ash.'
    },
    {
      id: 123,
      question: 'The world\'s first casino (gambling house) called the Il Ridotto opened in 1638 and can be found in this Italian city, known as "Queen of the Adriatic", among other things.',
      options: [ 'Venice', 'Rome', 'Florence', 'Naples' ],
      correctAnswer: 'Venice',
      explanation: 'The city is built on 126 islands, has 472 bridges and lies between the Po and Piave rivers.'
    },
    {
      id: 124,
      question: "The world's largest hourglass, at 17 feet tall, is found in this country and was built to feature the local 'singing' sands of this beach.",
      options: [ 'Japan', 'Andorra', 'Luxembourg', 'Liechtenstein' ],
      correctAnswer: 'Japan',
      explanation: 'It is filled with 629.1 billion grains of sand and is flipped at midnight each December 31 as it takes exactly one year to empty into the lower globe.'
    },
    {
      id: 125,
      question: 'While he was alive, how many of the 2,100 works of art that Vincent Van Gogh made did he sell?',
      options: [ '1', '725', '2,100', '1,000' ],
      correctAnswer: '1',
      explanation: 'Only one painting, The Red Vineyard, sold before he killed himself at age 37.'
    },
    {
      id: 126,
      question: 'She is the only actress to be nominated for an Oscar twice, for playing the same character (Queen Elizabeth I) in 2 different films.',
      options: [ 'Cate Blanchett', 'Meryl Streep', 'Helen Mirren', 'Nicole Kidman' ],
      correctAnswer: 'Cate Blanchett',
      explanation: 'She is the only woman born in Australia to win an acting Oscar. (Kidman was born in Hawaii to Australian parents.)'
    },
    {
      id: 127,
      question: 'This European country is the only place where they fish for shrimp on horseback, something that used to be widely practiced along the North Sea coast.',
      options: [ 'Belgium', 'Monaco', 'Spain', 'France' ],
      correctAnswer: 'Belgium',
      explanation: 'It is a UNESCO recognized tradition that was once a common way to catch shrimp for 500 years, but is now only practiced by 17 people.'
    },
    {
      id: 128,
      question: 'This European capital city is completely powered by geothermal energy, thanks to sitting over a volcanic hotspot that constantly heats the underground water reservoirs.',
      options: [ 'Reykjavik, Iceland', 'Rome, Italy', 'Berlin, Germany', 'Vaduz, Liechtenstein' ],
      correctAnswer: 'Reykjavik, Iceland',
      explanation: 'Iceland is also one of the few countries that dispenses hydrogen fuel for cars running on fuel cells.'
    },
    {
      id: 129,
      question: "Prior to settling in Washington, D.C. in 1937, where was the city's (American) football team originally from?",
      options: [ 'Boston', 'Philadelphia', 'Peoria', 'Hoboken' ],
      correctAnswer: 'Boston',
      explanation: 'Initially called the Boston Braves, they became the Redskins in 1933 and moved to DC in 1937.'
    },
    {
      id: 130,
      question: "In 2004, after decades of struggle, the Montreal Expos (named after the 67 Expo World's Fair) moved and became the ____.",
      options: [ 'Washington Nationals', 'Milwaukee Brewers', 'Los Angeles Dodgers', 'Arizona Diamondbacks' ],
      correctAnswer: 'Washington Nationals',
      explanation: 'The Expos all time win-loss percentage was 0.483. Since the move to DC, that percentage has been 0.482.'
    },
    {
      id: 131,
      question: "Founded in 1901 in this city, the Oakland A's also spent 13 years in Kansas City.",
      options: [ 'Philadelphia', 'Brooklyn', 'Milwaukee', 'St Louis' ],
      correctAnswer: 'Philadelphia',
      explanation: "Starting  n 2025, they will be known simply as the Athletics and will play temporarily for a few years in Sacramento before 'permanently' relocating to Las Vegas in 2028."
    },
    {
      id: 132,
      question: 'This pasta type\'s name translates as "little tongues", describing its narrow flat shape.',
      options: [ 'Linguini', 'Fettucine', 'Trenette', 'Farfalle' ],
      correctAnswer: 'Linguini',
      explanation: 'The word has its origins in Latin, specifically the word lingua, meaning tongue.'
    },
    {
      id: 133,
      question: 'Who is the only man to have won three Best Actor Academy Awards?',
      options: [ 'Daniel Day Lewis', 'Anthony Hopkins', 'Tom Hanks', 'Anthony Hopkins' ],
      correctAnswer: 'Daniel Day Lewis',
      explanation: 'Each of the other three has won two Oscars each for Best Actor.'
    },
    {
      id: 134,
      question: "Dennis the Menace's, from the eponymous comic strip, last name is ___.",
      options: [ 'Mitchell', 'Wilson', 'Fonzarelli', 'Johnson' ],
      correctAnswer: 'Mitchell',
      explanation: 'The strip has been running since 1951, and a UK comic strip of the same name debuted on the same day, but they are not related.'
    },
    {
      id: 135,
      question: 'Bassetts ice cream shop, the oldest in America and established in 1861, is located in this city.',
      options: [ 'Philadelphia', 'Atlanta', 'Tampa Bay', 'Cleveland' ],
      correctAnswer: 'Philadelphia',
      explanation: 'They were the first vendor to sign a lease at Reading Terminal Market in 1892, and have been there since.'
    },
    {
      id: 136,
      question: 'The tendency to see images, such as faces, in vague stimuli is known as _____.',
      options: [ 'Pareidolia', 'Triskaidekaphilia', 'Dysphagia', 'Munchausen syndrome' ],
      correctAnswer: 'Pareidolia',
      explanation: 'Examples would be when people think they see a "Man in the moon", or Jesus on a piece of burnt toast.'
    },
    {
      id: 137,
      question: "What is between the earth's core and its crust?",
      options: [ 'Mantle', 'A layer of sharp, aged cheddar', 'Lithosphere', 'Terrosphere' ],
      correctAnswer: 'Mantle',
      explanation: "The mantle is about 2/3 of the earth's mass, is 1,800 miles (2,900 km) thick, and ranges in temperature from 440 F to 7,100 F."
    },
    {
      id: 138,
      question: 'This country, known for its tea and rubber exports (among other things), elected the first female head of government, in 1960.',
      options: [ 'Sri Lanka', 'United Kingdom', 'Iceland', 'Greenland' ],
      correctAnswer: 'Sri Lanka',
      explanation: "The national sport is volleyball, but cricket is far more popular especially after the young underdog team of 1996 won the Cricket World Cup against the powerful Australians, winning by 7 wickets!"
    },
    {
      id: 139,
      question: 'This Caribbean country\'s name is Latin for "Sunday", commemorating the day Columbus landed there.',
      options: [ 'Dominica', 'Jamaica', 'Haiti', 'Antigua' ],
      correctAnswer: 'Dominica',
      explanation: 'It is the youngest island in the Lesser Antilles chain, still volcanically active and has the world\'s second largest hot spring.'
    },
    {
      id: 140,
      question: 'A vespiary is a nest for this type of animal.',
      options: [ 'Wasp', 'Bat', 'Gorilla', 'Sea turtle' ],
      correctAnswer: 'Wasp',
      explanation: 'The Asian giant hornet is the largest social wasp, at 2 inches (5 cm) long, and they inject a potent neurotoxin called mandaratoxin.'
    },
    {
      id: 141,
      question: 'In "Ferris Bueller\'s Day Off", director John Hughes paid tribute to his childhood hero Gordie Howe by having the character of Cameron wear a hockey jersey from this team.',
      options: [ 'Detroit Red Wings', 'Chicago Blackhawks', 'Philadelphia Flyers', 'St Louis Blues' ],
      correctAnswer: 'Detroit Red Wings',
      explanation: 'Howe played 25 of his 26 seasons with the Red Wings and was known as Mr Hockey.'
    },
    {
      id: 142,
      question: 'What does Jareth the Goblin King, played by David Bowie, twirl in his hands in "Labyrinth"?',
      options: [ 'A crystal ball', 'A sceptre', 'A spell book', 'A baby' ],
      correctAnswer: 'A crystal ball',
      explanation: 'The director Jim Henson also considered Prince, Sting and Michael Jackson for the role played by Bowie.'
    },
    {
      id: 143,
      question: 'In what language was the New Testament originally written?',
      options: [ 'Greek', 'Hebrew', 'Heiroglyphics', 'German' ],
      correctAnswer: 'Greek',
      explanation: 'The original text of the bible was a giant run-on sentence with no punctuation, known as scriptio continua.'
    },
    {
      id: 144,
      question: 'What snack is named after a city in Massachusetts?',
      options: [ 'Fig newtons', 'Worcester pies', 'Malden malts', 'Taunton puffs' ],
      correctAnswer: 'Fig newtons',
      explanation: 'The original fig roll was developed by a Philadelphia baker, but named "Newton" when sold to the Kennedy Biscuit company near Newton, MA.'
    },
    {
      id: 145,
      question: 'Sternutation is the medical term for this common bodily function.',
      options: [ 'Sneezing', 'Burping', 'Farting', 'Coughing' ],
      correctAnswer: 'Sneezing',
      explanation: 'It is not possible to sneeze while asleep due to something called REM atonia.'
    },
    {
      id: 201,
      question: 'The deepest and largest volume lake in the world is _______.',
      options: [ 'Lake Baikal', 'Crater Lake', 'Lake Superior', 'Lake Tanganyika' ],
      correctAnswer: 'Lake Baikal',
      explanation: 'It is more than a mile deep and contains 5,670 cubic miles (23,615 cubic kilometers) of water, about 22% of all fresh water on earth - more than all 5 Great Lakes combined.'
    },
    {
      id: 202,
      question: 'What is the name of the central bank of the US?',
      options: [ 'Federal Reserve System', 'Bank of America', 'The Central Bank', 'US Bank' ],
      correctAnswer: 'Federal Reserve System',
      explanation: 'The Fed, as it is often known, was created in 1913 to maximize employment, control inflation and control long-term interest rates. It now has many additional functions, such as helping bail out large banks that have nothing but the interest of the American public in mind.'
    },
    {
      id: 203,
      question: 'What is the largest denomination of currency in circulation in the US in 2025?',
      options: [ '$100', '$500', '1,000', '10,000' ],
      correctAnswer: '$100',
      explanation: 'The larger notes were used at various times, but when they became a favorite of criminals and counterfeiters, President Nixon outlawed their use in 1969.'
    },
    {
      id: 204,
      question: 'What juice concentrate is found in Mountain Dew soda?',
      options: [ 'Orange', 'Lemon', 'Lime', 'Strawberry' ],
      correctAnswer: 'Orange',
      explanation: 'It was originally used as a mixer for whiskey, and its name was a joking reference to moonshine. Homer Simpson, when given the choice, preferred crab juice over Mountain Dew.'
    },
    {
      id: 205,
      question: "The ____ is the only true freshwater seal on the planet, living in Lake Baikal.",
      options: [ 'Nerpa', 'Monk seal', 'Ross seal', 'Elephant seal' ],
      correctAnswer: 'Nerpa',
      explanation: 'They can stay under water for up to 70 minutes, thanks in part to having 2 more liters of blood in their body than seals of comparable size.'
    },
    {
      id: 206,
      question: "Swanson rolled out the first national TV dinner in 1953 with a 3-compartment aluminum tray, 2 for side dishes, and one for this meat.",
      options: [ 'Turkey', 'Meat loaf', 'Chicken', 'Pork chops' ],
      correctAnswer: 'Turkey',
      explanation: 'The idea came about because of low Thanksgiving turkey sales that year, which left them with 260 tons of turkey to sell. The original TV dinners were $0.98 (about $12 in 2025).'
    },
    {
      id: 207,
      question: 'This comfort food is the official state food of Texas.',
      options: [ 'Chili', 'Pecan pie', 'Tacos', 'Meatloaf' ],
      correctAnswer: 'Chili',
      explanation: 'From the mid to late 1800s, chili was served regularly to prison inmates in Texas. It is claimed that prisons were rated on the quality of their chili, and prisoners often requested the recipe after their release.'
    },
    {
      id: 208,
      question: "In Einstein's famous equation, E=mc2, what does the C represent?",
      options: [ 'Speed of light', "Avogadro's constant", 'Carbon', "Planck's constant" ],
      correctAnswer: 'Speed of light',
      explanation: 'C is equal to 299,792,458 meters per second, or about 671 million miles per hour.'
    },
    {
      id: 209,
      question: 'Einstein won the 1921 Nobel Prize in physics for explaining what?',
      options: [ 'Photoelectric effect', 'Relativity', 'Gravitational pull', 'Mechanics' ],
      correctAnswer: 'Photoelectric effect',
      explanation: 'The photoelectric effect is when electrons are emitted when light hits a material. Obviously.'
    },
    {
      id: 210,
      question: 'Einstein was offered the presidency of this country in 1952.',
      options: [ 'Israel', 'Switzerland', 'USA', 'Austria' ],
      correctAnswer: 'Israel',
      explanation: 'Einstein gave his first wife all of his Novel Prize money as part of the divorce agreement.'
    },
    {
      id: 211,
      question: 'Where in the human body would you find the scaphoid bone?',
      options: [ 'Wrist', 'Ear', 'Foot', 'Spine' ],
      correctAnswer: 'Wrist',
      explanation: 'Scaphoid fractures are the most common wrist bone fracture, and they are slow to heal due to a poor blood supply.'
    },
    {
      id: 212,
      question: 'The only bone in the body that does not articulate (join) with another bone is the ___.',
      options: [ 'Hyoid', 'Ulna', 'Triquetrum', 'Sacrum' ],
      correctAnswer: 'Hyoid',
      explanation: 'It helps with breathing, swallowing and speaking, and even helps maintain position of the head.'
    },
    {
      id: 213,
      question: 'The total number of vertebrae in a typical human is ___.',
      options: [ '33', '27', '19', '41' ],
      correctAnswer: '33',
      explanation: 'About 10% of people will have more than, or less than, 33 vertebrae. This is how we know they are vampires.'
    },
    {
      id: 214,
      question: 'This cell fragment is responsible for blood clotting.',
      options: [ 'Platelets', 'Lymphocytes', 'Osteophytes', 'Hematocytes' ],
      correctAnswer: 'Platelets',
      explanation: 'Aspirin permanently stops platelets from being able to form clots, an effect which lasts for about a week after each dose of aspirin.'
    },
    {
      id: 215,
      question: 'The tallest waterfall in the world is ______ Falls.',
      options: [ 'Angel', 'Niagara', 'Yosemite', 'Langfossen' ],
      correctAnswer: 'Angel',
      explanation: 'These Venezuelan falls have a total drop of 3,212 ft (979 m) and a plunge of 2,648 ft (807 m).'
    },
    {
      id: 216,
      question: "Of the following mammals, which has the most cervical (neck) vertebrae?",
      options: [ 'Three-toed sloth', 'Giraffe', 'Human', 'Manatee' ],
      correctAnswer: 'Three-toed sloth',
      explanation: 'They typically have 9 cervical vertebrae, which allows for greater head swiveling. Manatees have 6. All other mammals have 7.'
    },
    {
      id: 217,
      question: 'The grayish-white ice crystals that form when water vapor deposits onto vegetation or other surfaces are called ____.',
      options: [ 'Hoar frost', 'Permafrost', 'Rime ice', 'Advection frost' ],
      correctAnswer: 'Hoar frost',
      explanation: '""Hoar"" comes from an old English word meaning ""showing signs of age"", as this type of frost makes trees or plants look like they have white hair.'
    },
    {
      id: 218,
      question: 'Sara Blakely was selling fax machines door-to-door when she came up with the idea for ___ in 2000.',
      options: [ 'Spanx', 'Super Soakers', 'Crocs', 'USB thumb drives' ],
      correctAnswer: 'Spanx',
      explanation: 'She invested her $5,000 life savings to start the company, which grossed an estimated $400 million in 2024.'
    },
    {
      id: 219,
      question: "After Thanksgiving, this day has the highest food consumption per person.",
      options: [ 'Super Bowl Sunday', 'July 4th', 'Christmas Day', "New Year's Eve" ],
      correctAnswer: 'Super Bowl Sunday',
      explanation: 'The average American consumes 4.5 times the recommended daily caloric intake on Super Bowl Sunday (slightly ahead of the typical daily overconsumption rate of 1.4 times the recommended intake).'
    },
    {
      id: 220,
      question: 'Where is KFC known as PFK?',
      options: [ 'Quebec', 'Germany', 'Malaysia', 'Japan' ],
      correctAnswer: 'Quebec',
      explanation: 'It stands for Poulet Frit Kentucky, the French translation of Kentucky Fried Chicken.'
    },
    {
      id: 221,
      question: 'These shoes were banned by the NBA when first introduced in 1985.',
      options: [ 'Air Jordans', 'Starburys', 'Converse All Stars', 'Adidas KB8' ],
      correctAnswer: 'Air Jordans',
      explanation: "The color scheme violated the League's uniform rules, and Jordan was fined $5,000 every time he wore them in a game. Nike paid the fines."
    },
    {
      id: 222,
      question: 'The all-time leader in the NBA for blocks is ___.',
      options: [ 'Hakeem Olajuwon', 'Michael Jordan', 'Tim Duncan', 'Kareem Abdul Jabbar' ],
      correctAnswer: 'Hakeem Olajuwon',
      explanation: 'The Nigerian played almost his entire career with Houston, and had 3,830 blocks.'
    },
    {
      id: 223,
      question: "The first balloon at a Macy's Thanksgiving parade was of this character, in 1927.",
      options: [ 'Felix the Cat', 'Mickey Mouse', 'Snoopy', 'Charlie Brown' ],
      correctAnswer: 'Felix the Cat',
      explanation: 'His balloon was paraded on stilts, as only regular air was used, not helium. Felix last appeared in 2016.'
    },
    {
      id: 224,
      question: "The mask Michael Myers wore in Halloween was a cast of this actor's face.",
      options: [ 'William Shatner', 'Al Pacino', 'Marlon Brando', 'Jack Nicholson' ],
      correctAnswer: 'William Shatner',
      explanation: "The mask was originally used in the award-winning 1975 William Shatner movie The Devil's Rain."
    },
    {
      id: 225,
      question: 'Emmental cheese (what we commonly call Swiss cheese) without holes is known as ____ cheese.',
      options: [ 'Blind', 'Gouda', 'Camembert', 'American' ],
      correctAnswer: 'Blind',
      explanation: 'The holes are actually known as eyes, and are formed by carbon dioxide bubbles being released during the cheesemaking process.'
    },
    {
      id: 226,
      question: 'This was the person known as Spiderman.',
      options: [ 'Peter Parker', 'Bruce Wayne', 'Tony Stark', 'Bruce Banner' ],
      correctAnswer: 'Peter Parker',
      explanation: 'He was an orphan raised by Aunt May and Uncle Ben after his parents died in a plane crash.'
    },
    {
      id: 227,
      question: "Thor's hammer is more correctly known as ____.",
      options: [ 'Mjolnir', 'Skaoa', 'Hreindyri', 'Rythja' ],
      correctAnswer: 'Mjolnir',
      explanation: 'Forged by dwarf brothers, the hammer is both a weapon as well as an instrument to confer blessings.'
    },
    {
      id: 228,
      question: "The most dangerous thing to come out of Canada since Justin Bieber, this X-Men character has a skeleton and claws made of adamantium.",
      options: [ 'Wolverine', 'Rogue', 'Magneto', 'Cyclops' ],
      correctAnswer: 'Wolverine',
      explanation: 'Born James Howlett in Alberta, he was the illegitimate son of Thomas Logan, who was the first person Wolverine killed.'
    },
    {
      id: 229,
      question: "Wakanda is the source of this metal, the most powerful on earth.",
      options: [ 'Vibranium', 'Molybdenum', 'Titanium', 'Tantalum' ],
      correctAnswer: 'Vibranium',
      explanation: 'The metal has amazing abilities to capture, store and release energy, and was used in a suit worn by Black Panther, and the shield of Captain America.'
    },
    {
      id: 230,
      question: "Peter Quill/Star-Lord, from Guardians of the Galaxy, named his ship the ___ after his first crush, from Who's The Boss?",
      options: [ 'Milano', 'Light', 'Winger', 'Foster' ],
      correctAnswer: 'Milano',
      explanation: 'A well-known activist, Alyssa Milano appeared in a 2007 commercial for PETA wearing a dress made entirely of vegetables. '
    },
    {
      id: 231,
      question: "The original five Avengers included Thor, Ant-Man, the Hulk, Iron Man and ___.",
      options: [ 'The Wasp', 'The Hornet', 'Captain America', 'Green Lantern' ],
      correctAnswer: 'The Wasp',
      explanation: 'Premiering in September 1963, the Avengers added Captain America in issue #4 when he was thawed from a block of ice.'
    },
    {
      id: 232,
      question: "While James Earl Jones voiced him, ___ actually played Darth Vader in the original Star Wars trilogy.",
      options: [ 'David Prowse', 'Anthony Hopkins', 'Anthony Daniels', 'Andre the Giant' ],
      correctAnswer: 'David Prowse',
      explanation: 'The Brit first gained fame as the Green Cross Man, a safety character in the UK to help pedestrians at intersections.'
    },
    {
      id: 233,
      question: 'This is the youngest artist to win a Grammy for Album of the Year.',
      options: [ 'Billie Eilish', 'Taylor Swift', 'Alanis Morissette', 'Barbra Streisand' ],
      correctAnswer: 'Billie Eilish',
      explanation: 'Eilish was 18 when she won. The youngest ever winner was Leah Peasall, age 8, for her work (along with her sisters) on the ""O, Brother, Where Art Thou?"" soundtrack and film.'
    },
    {
      id: 234,
      question: "These dogs were bred to hunt badgers, and their name translated into English means 'badger dog'.",
      options: [ 'Dachshund', 'Affenpinscher', 'Basenji', 'Schnauzer' ],
      correctAnswer: 'Dachshund',
      explanation: "Jack Ruby, the man who shot Lee Harvey Oswald, had 4 dachsunds at the time, and had one of them, Sheba, with him at the time of the shooting."
    },
    {
      id: 235,
      question: 'How many time zones cover the 50 US States?',
      options: [ '6', '5', '7', '4' ],
      correctAnswer: '6',
      explanation: 'If all US territories, possessions and minor outlying islands are included, 11 time zones would be covered.'
    },
    {
      id: 236,
      question: "The Eastern time zone covers the greatest number of states, at ___.",
      options: [ '23', '25', '32', '14' ],
      correctAnswer: '23',
      explanation: 'The eastern zone is also the most populated. The least populated time zone is UTC -12, covering 2 uninhabited islands in the Pacific ocean.'
    },
    {
      id: 237,
      question: 'Gin traditionally gets it flavor from this plant.',
      options: [ 'Juniper', 'Aloe', 'Ginseng', 'Ginger' ],
      correctAnswer: 'Juniper',
      explanation: 'The European Union differentiates gin into 4 different legal categories: gin, distilled gin, London (or dry) gin, and juniper-flavored spirit drink.'
    },
    {
      id: 238,
      question: "In 1975, while sailing from Wisconsin to Detroit, the SS Edmund Fitzgerald sunk in this lake.",
      options: [ 'Superior', 'Ontario', 'Huron', 'Michigan' ],
      correctAnswer: 'Superior',
      explanation: 'Gordon Lightfoot wrote the classic song ""The Wreck of the Edmund Fitzgerald"" after seeing the name of the ship misspelled after the sinking. He thought it dishonored those killed.'
    },
    {
      id: 239,
      question: "From this major US city, you can travel south and enter Canada.",
      options: [ 'Detroit', 'Milwaukee', 'Cleveland', 'Toledo' ],
      correctAnswer: 'Detroit',
      explanation: 'The city is north of Windsor, Ontario, and is the largest US city on the Canadian border.'
    },
    {
      id: 240,
      question: 'Homo sapiens translates as ____ man.',
      options: [ 'Wise', 'Gentle', 'Tall', 'Special' ],
      correctAnswer: 'Wise',
      explanation: 'They are the most abundant species of primate (great ape) and despite all current evidence to the contrary, are considered highly intelligent animals.'
    },
    {
      id: 241,
      question: 'The first animal to be domesticated by humans was the ___.',
      options: [ 'Dog', 'Goat', 'Cat', 'Horse' ],
      correctAnswer: 'Dog',
      explanation: 'Dog domestication occurred 20,000-40,000 years ago, based on current evidence. Many would argue that cats have yet to be domesticated.'
    },
    {
      id: 242,
      question: "Paddington Bear's favorite snack is ___.",
      options: [ 'Orange marmalade', 'Vegemite', 'Chips and beans', 'Scotch egg' ],
      correctAnswer: 'Orange marmalade',
      explanation: 'He was a stowaway on a train from Peru, where he was orphaned in an earthquake.'
    },
    {
      id: 243,
      question: "Mrs. Who, Mrs. Whatsit and Mrs. Which are all characters from this young adult book.",
      options: [ 'A Wrinkle in Time', 'The Fault in Our Stars', 'Harry Potter and the Goblet of Fire', 'Hunger Games' ],
      correctAnswer: 'A Wrinkle in Time',
      explanation: "Written by Madeleine L'Engle, it describes the adventures of a group of kids as they travel through space and time trying to save their father."
    },
    {
      id: 244,
      question: 'What is the only landlocked nation in southeast Asia?',
      options: [ 'Laos', 'Cambodia', 'Thailand', 'Myanmar' ],
      correctAnswer: 'Laos',
      explanation: 'Polygamy is officially a crime in the country, sticky rice is a food staple and it is one of five communist states as of 2025.'
    },
    {
      id: 245,
      question: "Matilda Wormwood, from the book Matilda by Roald Dahl, has this superpower.",
      options: [ 'Telekinesis', 'Invisibility', 'Flight', 'Super strength' ],
      correctAnswer: 'Telekinesis',
      explanation: "Matilda was 5 1/2 years old in the book, but mysteriously, she became 6 1/2 years old in the movie version..."
    },
    {
      id: 246,
      question: 'Who did the Cat in the Hat invite into the house?',
      options: [ 'Thing 1 and Thing 2', 'The Lorax', 'Daisy-head Mayzie', 'Horton' ],
      correctAnswer: 'Thing 1 and Thing 2',
      explanation: 'Dr Seuss wrote the book in 1957 in an attempt to help address child literacy, and is credited with helping end the use of the Dick and Jane primers.'
    },
    {
      id: 247,
      question: 'Which children\'s book heroine lives in ""an old house in Paris covered in vines""?',
      options: [ 'Madeline', 'Hermione', 'Matilda', 'Pippi Longstocking' ],
      correctAnswer: 'Madeline',
      explanation: 'She attends a Catholic grade school in Paris and has Miss Clavel as her teacher. '
    },
    {
      id: 248,
      question: 'In ""Charlotte\'s Web"", what is the first message Charlotte writes to try and save Wilbur the pig?',
      options: [ '""Some pig""', '""Radiant""', '""Terrific""', '""Humble""' ],
      correctAnswer: '""Some pig""',
      explanation: "Wilbur is eventually saved from slaughter by Charlotte's work, even though she dies in the end of natural causes."
    },
    {
      id: 249,
      question: 'Eloise lives in the ""tippy top"" of this New York hotel.',
      options: [ 'The Plaza', 'The Waldorf Astoria', 'The Ritz Carlton', 'The St Regis' ],
      correctAnswer: 'The Plaza',
      explanation: 'She lives there with her nanny, her pug Weenie and her turtle Skipperdee. The actual Plaza hotel has an Eloise suite that starts at $1,300 per night.'
    },
    {
      id: 250,
      question: 'The first professional baseball team (where the whole team was made of salaried players) was the ___.',
      options: [ 'Cincinnati Red Stockings', 'Boston Red Stockings', 'Chicago Cubs', 'Philadelphia Phillies' ],
      correctAnswer: 'Cincinnati Red Stockings',
      explanation: 'Founded in 1869, the Red Stockings ultimately gave rise to the modern Cincinnati Reds.'
    },
    {
      id: 251,
      question: 'Which country produces the most olives, growing about 1/3 of the global supply?',
      options: [ 'Spain', 'Italy', 'USA', 'Greece' ],
      correctAnswer: 'Spain',
      explanation: 'Raw or fresh olives are too bitter to eat and must be cured and fermented.'
    },
    {
      id: 252,
      question: "Holly Golightly is a famous character played by Audrey Hepburn in this movie.",
      options: [ "Breakfast at Tiffany's", 'My Fair Lady', 'Charade', 'Roman Holiday' ],
      correctAnswer: "Breakfast at Tiffany's",
      explanation: 'Hepburn won numerous awards, and in 1992 was given the US Presidential Medal of Freedom in honor of her work as a UNICEF Goodwill Ambassador '
    },
    {
      id: 253,
      question: 'How long does it take a chicken to make an egg, on average?',
      options: [ '24 hours', '30 minutes', '4 hours', '10 hours' ],
      correctAnswer: '24 hours',
      explanation: 'About 20 hours is spent making the shell, and a new egg starts to form about 30 minutes after the last one is laid.'
    },
    {
      id: 254,
      question: 'In which country would you find a beach known as the Jurassic Coast?',
      options: [ 'England', 'USA', 'Costa Rica', 'Namibia' ],
      correctAnswer: 'England',
      explanation: 'The area spans an approximate 185 million year history due to erosion, with rock formations spanning the Triassic, Jurassic and Cretaceous periods.'
    },
    {
      id: 255,
      question: 'Which chess master did Bobby Fischer defeat in 1972 to become the first US-born world champion?',
      options: [ 'Boris Spassky', 'Gary Kasparov', 'Magnus Carlsen', 'Alexander Alekhine' ],
      correctAnswer: 'Boris Spassky',
      explanation: 'The match between them was held in Reykjavik, Iceland, and was known as the Match of the Century.'
    },
    {
      id: 256,
      question: 'In what year did the ""Miracle on Ice"" happen in the Olympics, in tiny Lake Placid, NY?',
      options: [ '1980', '1984', '1976', '1972' ],
      correctAnswer: '1980',
      explanation: 'The US team was a bunch of young college kids playing against a heavily-favored professional team of Soviets.'
    },
    {
      id: 257,
      question: 'Who did the US ice hockey team defeat to win the gold medal at the 1980 Olympics?',
      options: [ 'Finland', 'USSR (Russia)', 'Sweden', 'Canada' ],
      correctAnswer: 'Finland',
      explanation: 'Coached by the brilliant but tough Herb Brooks, the Miracle on Ice was named by Sports Illustrated as the greatest sports moment of the 20th century.'
    },
    {
      id: 258,
      question: 'Mosquitoes prefer this blood type over others.',
      options: [ 'O', 'A', 'B', 'AB' ],
      correctAnswer: 'O',
      explanation: 'In studies, mosquitoes show a preference for the universal donor.'
    },
    {
      id: 259,
      question: 'Which two cities are written about in Dickens\' ""A Tale of Two Cities""? London and ___',
      options: [ 'Paris', 'Dublin', 'Geneva', 'Rome' ],
      correctAnswer: 'Paris',
      explanation: 'Set before and during the French Revolution, it tells the tale of Dr Manette, his 18 year imprisonment and subsequent release.'
    },
    {
      id: 260,
      question: 'In which city would you find the Spanish Steps?',
      options: [ 'Rome', 'Madrid', 'Barcelona', 'Paris' ],
      correctAnswer: 'Rome',
      explanation: 'The famous 135 steps connect Piazza di Spagna to Piazza Trinita dei Monti, and are a Rome icon.'
    },
    {
      id: 261,
      question: 'What does the abbreviation DVD stand for?',
      options: [ 'Digital Versatile Disc', 'Digital Video Device', 'Digitized Video Delivery', 'Dynamic Video Delivery' ],
      correctAnswer: 'Digital Versatile Disc',
      explanation: 'Released in 1996, they quickly caught on until streaming became the dominant mode for watching shows and films.'
    },
    {
      id: 262,
      question: 'Aside from Greece, what other country has Greek as the official language?',
      options: [ 'Cyprus', 'Macedonia', 'Albania', 'Bulgaria' ],
      correctAnswer: 'Cyprus',
      explanation: 'Geographically part of west Asia but culturally linked with southeastern Europe, its other official language is Turkish.'
    },
    {
      id: 263,
      question: 'What is a young eel called?',
      options: [ 'Elver', 'Fry', 'Hatchling', 'Smolt' ],
      correctAnswer: 'Elver',
      explanation: 'The giant moray is the largest eel, reaching 13 ft (4 m) in length. Electric eels are not true eels.'
    },
    {
      id: 264,
      question: 'Alberta is one of the 2 landlocked Canadian provinces. What is the other?',
      options: [ 'Saskatchewan', 'Quebec', 'Manitoba', 'Ontario' ],
      correctAnswer: 'Saskatchewan',
      explanation: 'More than 500 NHL players have been born in Saskatchewan, more than any other province, US state or European country.'
    },
    {
      id: 265,
      question: 'Lake Assal is the lowest point on this continent, lying 509 ft (155 m) below sea level.',
      options: [ 'Africa', 'Asia', 'Europe', 'Australia' ],
      correctAnswer: 'Africa',
      explanation: 'Found in a volcanic crater in Djibouti, it is highly saline and is the 3rd deepest spot on land (behind the Sea of Galilee and the Dead Sea).'
    },
    {
      id: 266,
      question: 'The Headless Horseman was featured in what story by Washington Irving?',
      options: [ 'The Legend of Sleepy Hollow', "The Telltale Heart", "The Monkey's Paw", 'The Pit and the Pendulum' ],
      correctAnswer: 'The Legend of Sleepy Hollow',
      explanation: 'The Horseman was a Hessian soldier decapitated in battle, and each night he arises from the grave to look for his missing head.'
    },
    {
      id: 267,
      question: "What was the name of Paul Bunyan's pet blue ox?",
      options: [ 'Babe', 'Charlotte', 'Wilbur', 'Buck' ],
      correctAnswer: 'Babe',
      explanation: 'It took 5 giant storks to deliver the baby Paul to his parents, and his bed was a lumber wagon.'
    },
    {
      id: 268,
      question: 'In which country might you find the Loch Ness monster?',
      options: [ 'Scotland', 'Wales', 'Ireland', 'England' ],
      correctAnswer: 'Scotland',
      explanation: "Nessie was first written about in the 7th century, where it was claimed a local man was killed by a 'water beast' from the nearby lake."
    },
    {
      id: 269,
      question: 'Which saint is credited with driving snakes out of Ireland?',
      options: [ 'Patrick', 'Michael', 'Thomas', 'Nicholas' ],
      correctAnswer: 'Patrick',
      explanation: 'Legend has it that he banished snakes to the sea because they interrupted his fast. The reality is that Ireland was already snake-free and there is no evidence snakes were ever in Ireland.'
    },
    {
      id: 270,
      question: "On Seinfeld, what was George's preferred pretend career?",
      options: [ 'Architect', 'Bra salesman', 'Real estate agent', 'Baseball player' ],
      correctAnswer: 'Architect',
      explanation: "George often lied about his career, but architect was his go-to pretend career."
    },
    {
      id: 271,
      question: 'Which Kardashian has failed the bar exam three times?',
      options: [ 'Kim', 'Khloe', 'Kendall', 'Kylie' ],
      correctAnswer: 'Kim',
      explanation: "California is one of 6 states that allow someone to become a lawyer by 'apprenticing' and ultimately taking the bar exam."
    },
    {
      id: 272,
      question: "As of December 2024, which Taylor Swift album has sold the most copies?",
      options: [ '1989', 'Fearless', '21', 'Red' ],
      correctAnswer: '1989',
      explanation: 'The little-known girlfriend of Travis Kelce, she sold over 14 million copies of 1989.'
    },
    {
      id: 273,
      question: "This compound, found in the leaves of poison oak as well as the skin of mangoes, is what can cause the itchy allergic skin reaction in some people.",
      options: [ 'Urushiol', 'Chlorophyll', 'Calcium oxalate', 'Phorbol' ],
      correctAnswer: 'Urushiol',
      explanation: 'The molecule passes through the outer skin layer and activates the immune system, although in about 1/4 of people, it causes no symptoms.'
    },
    {
      id: 274,
      question: 'Which British monarch is famous for having had six wives?',
      options: [ 'Henry VIII', 'Richard III', 'Charles II', 'Henry VII' ],
      correctAnswer: 'Henry VIII',
      explanation: 'He was so desperate to divorce his first wife that he made himself the head of the church to try and get the marriage annulled, and he beheaded 2 others.'
    },
    {
      id: 275,
      question: "The star from the musical Hamilton, Lin Manuel Miranda, had a brief cameo in the final season of this HBO hit.",
      options: [ 'The Sopranos', 'The West Wing', 'The Wire', 'Girls' ],
      correctAnswer: 'The Sopranos',
      explanation: 'He portrayed a bellman at a hotel that Tony Soprano was entering.'
    },
    {
      id: 276,
      question: 'Which of these Central American countries does not celebrate its independence from Spain on September 15th?',
      options: [ 'Belize', 'Costa Rica', 'El Salvador', 'Nicaragua' ],
      correctAnswer: 'Belize',
      explanation: 'While the rest of Central America celebrates its independence from Spain (in 1821) on September 15 each year, Belize was part of the British Commonweatlh until September 12, 1981.'
    },
    {
      id: 277,
      question: "The world's most populous metropolitan area is ______, with over 37 million people.",
      options: [ 'Tokyo', 'Mexico City', 'Beijing', 'Los Angeles' ],
      correctAnswer: 'Tokyo',
      explanation: 'As of 2024, it had approximately 37 million people, and at any given time, almost 36 million of them are taking a selfie.'
    },
    {
      id: 278,
      question: 'This electronic musical instrument is played without any physical contact.',
      options: [ 'Theremin', 'Glass harmonica', 'Jaw harp', 'Hydraulophone' ],
      correctAnswer: 'Theremin',
      explanation: 'The theremin is typically used to establish a feeling of eeriness or etherealness.'
    },
    {
      id: 279,
      question: 'This bird can stay in flight for up to 300 days at a time.',
      options: [ 'Common swift', 'Albatross', 'Pigeon', 'Frigatebird' ],
      correctAnswer: 'Common swift',
      explanation: 'While the albatross may not touch land for up to 6 years, it does not stay in flight as long as the swift.'
    },
    {
      id: 280,
      question: 'What star cluster is represented in the Subaru logo?',
      options: [ 'Pleiades', 'Orion', 'Ursa Major', 'Ursa minor' ],
      correctAnswer: 'Pleiades',
      explanation: 'Also known as the Seven Sisters, the cluster is about 444 light years away, meaning it is about 2.6e+15 miles away.'
    },
    {
      id: 281,
      question: 'The SS Minnow from Gilligan\'s Island was named after Newton Minow, who was a chairman of the ____.',
      options: [ 'FCC (Federal Communications Commission)', 'DEA (Drug Enforcement Agency)', 'NASA (National Aeronautics and Space Agency)', 'CIA (Central Intelligence Agency)' ],
      correctAnswer: 'FCC (Federal Communications Commission)',
      explanation: 'Minow famously described TV as a ""vast wasteland"" and advocated for programming that was more beneficial to the public. The producer of Gilligan\'s Island named the boat after him as a humorous tribute.'
    },
    {
      id: 282,
      question: "What did Mary Shelley subtitle her 1818 novel, Frankenstein?",
      options: [ 'The Modern Prometheus', 'The Monster in Each of Us', 'The Dangers of Electricity', 'A Monster is Born' ],
      correctAnswer: 'The Modern Prometheus',
      explanation: 'Shelley felt that Dr Frankenstein was like Prometheus in that they both created life and suffered the consequences.'
    },
    {
      id: 283,
      question: "The world's first space station was called ____",
      options: [ 'Salyut', 'Skylab', 'Mir', 'The ISS' ],
      correctAnswer: 'Salyut',
      explanation: 'Launched in April 1971 by Russia, the Salyut program served partly as a cover for a separate spy satellite program called Almaz.'
    },
    {
      id: 284,
      question: 'Which of the following countries is not part of the International Space Station (ISS)?',
      options: [ 'India', 'Russia', 'United States', 'Japan' ],
      correctAnswer: 'India',
      explanation: 'Visible to the naked eye, it orbits the earth about every 90 minutes and cost $150 billion to design and build.'
    },
    {
      id: 285,
      question: 'Which country has the fewest residents?',
      options: [ 'Vatican City', 'Liechtenstein', 'Luxembourg', 'Antarctica' ],
      correctAnswer: 'Vatican City',
      explanation: 'Vatican City has only 800 residents. Antarctica is not considered a country, but even if it were, it typically has a population of 1,100 to 5,000. '
    },
    {
      id: 286,
      question: 'What is the term for a baby kangaroo?',
      options: [ 'Joey', 'Roo', 'Pup', 'Foal' ],
      correctAnswer: 'Joey',
      explanation: "When born, they are 1/100,000 of their adult size and are still considered embryos, spending 6 months maturing in the mother's pouch."
    },
    {
      id: 287,
      question: "What is considered the hardest wood in the world, with a Janka score of over 5,000.",
      options: [ 'Australian buloke', 'Ebony', 'Ipe', 'Bolivian cherry' ],
      correctAnswer: 'Australian buloke',
      explanation: "Appropriately a member of the ironwood tree family, it's wood is so dense that it sinks in water."
    },
    {
      id: 288,
      question: "What is the proper name of Mr Peanut, the British aristocrat who serves as the Planters peanut mascot.",
      options: [ 'Bartholomew Richard Fitzgerald-Smythe', 'Reginald Winston Throckmorton', 'Andrew Patrick Mugglestone', 'Peregrine Falcon Bysshart Rodendon' ],
      correctAnswer: 'Bartholomew Richard Fitzgerald-Smythe',
      explanation: "Designed by a Virginia schoolboy in 1916, Mr Peanut has even had a float in the Macy's Thanksgiving Day parade since 1997."
    },
    {
      id: 289,
      question: "She was the first female inducted into the Rock and Roll Hall of Fame, in 1987.",
      options: [ 'Aretha Franklin', 'Madonna', 'Whitney Houston', 'Dolly Parton' ],
      correctAnswer: 'Aretha Franklin',
      explanation: 'She was inducted by Keith Richards, who gave a speech that was...bizarre, even by his standards.'
    },
    {
      id: 290,
      question: "Martin Luther King Jr paid for the birth of this Oscar winning actress in 1967, because her parents were struggling financially and were friends of the Kings.",
      options: [ 'Julia Roberts', 'Meryl Streep', 'Halle Berry', 'Kate Winslet' ],
      correctAnswer: 'Julia Roberts',
      explanation: "Julia's parents ran an acting school that was attended by the Kings' children."
    },
    {
      id: 291,
      question: 'Which of these shows was NOT a spin-off of Happy Days?',
      options: [ 'Charles in Charge', 'Mork and Mindy', 'Joanie Loves Chachi', 'Laverne and Shirley' ],
      correctAnswer: 'Charles in Charge',
      explanation: 'Scott Baio starred in both Joanie Loves Chachi and Charles in Charge, but only the former was based on a Happy Days role.'
    },
    {
      id: 292,
      question: "In a deck of cards, which King does not have a moustache?",
      options: [ 'Hearts', 'Spades', 'Clubs', 'Diamonds' ],
      correctAnswer: 'Hearts',
      explanation: 'He is also known as the ""Suicide King"" because it looks like he is stabbing himself in the head with his sword.'
    },
    {
      id: 293,
      question: 'Which of the following states has the fewest NFL teams?',
      options: [ 'New York', 'Florida', 'California', 'Texas' ],
      correctAnswer: 'New York',
      explanation: 'California and Florida each have 3 teams. Texas has 2 teams. But New York only has the Buffalo Bills that are based in New York. The NY Giants and NY Jets are both headquartered in, and play in, New Jersey.'
    },
    {
      id: 294,
      question: 'Mariah Carey\'s ""All I Want for Christmas Is You"" went to #1 in 2019. In what year was it released?',
      options: [ '1994', '2019', '2018', '2003' ],
      correctAnswer: '1994',
      explanation: 'It holds the record for longest time between release and becoming #1, at 25 years in the US and 26 years in the UK.'
    },
    {
      id: 295,
      question: "This singer's given name is Robyn Fenty.",
      options: [ 'Rihanna', 'Beyonce', 'Cher', 'Madonna' ],
      correctAnswer: 'Rihanna',
      explanation: 'Her middle name is Rihanna and she was born in Barbados in 1988, and released her first album in 2005.'
    },
    {
      id: 296,
      question: "This famous rock guitarist played the iconic solo on Michael Jackson's \"Beat It\"",
      options: [ 'Eddie Van Halen', 'Jimi Hendrix', 'Eric Clapton', 'Alex Lifeson' ],
      correctAnswer: 'Eddie Van Halen',
      explanation: 'He formed Van Halen with his brother Alex in 1973, and their only #1 Billboard hit was Jump from 1984.'
    },
    {
      id: 297,
      question: "This world-famous singer narrated the audiobook for E.T. - The Extra Terrestrial in 1982, at the same time he was about to release his biggest-selling album.",
      options: [ 'Michael Jackson', 'Prince', 'Willie Nelson', 'Elton John' ],
      correctAnswer: 'Michael Jackson',
      explanation: 'He was finishing Thriller while finishing this album, both of which were produced by Quincy Jones.'
    },
    {
      id: 298,
      question: 'Which of these albums has sold the most certified copies worldwide to date, at over 70 million?',
      options: [ 'Thriller (Michael Jackson)', 'Back in Black (AC/DC)', 'Dark Side of the Moon (Pink Floyd)', 'Led Zeppelin IV' ],
      correctAnswer: 'Thriller (Michael Jackson)',
      explanation: 'It also gave rise to what is likely the most famous music video in the world, giving prison dance groups around the world something to do.'
    },
    {
      id: 299,
      question: "In 2018, the European Union enacted the GDPR, considered one of the most stringent online privacy protection laws. It stands for General Data ____ Regulation.",
      options: [ 'Protection', 'Privacy', 'Permission', 'Proactive' ],
      correctAnswer: 'Protection',
      explanation: 'Contrary to what you may think, the law does not require consent to obtain data on someone, nor does it guarantee an individual that their data must be deleted if requested. '
    },
    {
      id: 300,
      question: "The Great Leap Forward was an economic and social campaign in China started in 1958 that attempted to move China from an agrarian economy to an industrial one. It was proposed by this Chinese founder of the People's Republic of China.",
      options: [ 'Mao Zedong', 'Deng Xiaoping', 'Xi Jinping', 'Kim Jong Il' ],
      correctAnswer: 'Mao Zedong',
      explanation: 'The Great Leap Forward failed on many fronts, and directly led to the Great Chinese Famine, considered the deadliest famine in human history, killing between 15 and 55 million people.'
    },
    {
      id: 301,
      question: "The Mission: Impossible franchise follows the exploits of the fictitious spy agency IMF, which stands for ____.",
      options: [ 'Impossible Missions Force', 'International Mystery Force', 'International Missions Force', 'Interagency Multinational Force' ],
      correctAnswer: 'Impossible Missions Force',
      explanation: 'The IMF is tasked with, among other things, stopping the terrorist group known as the Syndicate. Mwahahahaha...'
    },
    {
      id: 302,
      question: 'Elvis Presley died the same year Jimmy Carter was inaugurated as President and Star Wars: Episode IV was released. What year was it?',
      options: [ '1977', '1976', '1972', '1973' ],
      correctAnswer: '1977',
      explanation: 'Presley was so groundbreaking that a Catholic church in Wisconsin wrote to the FBI saying that Presley was, ""...a definite danger to the security of the United States. ... [His] actions and motions were such as to rouse the sexual passions of teenaged youth."""'
    },
    {
      id: 303,
      question: 'Who played the patriach George Bluth in the comedy series Arrested Development?',
      options: [ 'Jeffrey Tambor', 'John Lithgow', 'Bill Murray', 'Michael Landon' ],
      correctAnswer: 'Jeffrey Tambor',
      explanation: 'He also played Maura Pfefferman on Transparent until he was cancelled by that show in 2017.'
    },
    {
      id: 304,
      question: 'Bob Odenkirk and David Cross had a sketch comedy show that aired on HBO for 4 seasons called ___.',
      options: [ 'Mr Show', 'The Tambourine Men', 'Key & Peele', 'The McLaughlin Group' ],
      correctAnswer: 'Mr Show',
      explanation: "Odenkirk went on to have iconic roles in Breaking Bad and Better Call Saul, and Cross was the hilariously oblivious Tobias Funke on Arrested Development."
    },
    {
      id: 305,
      question: "Which Grimm fairy tale tells the story of a miller's daughter spinning straw into gold?",
      options: [ 'Rumpelstiltskin', 'Rapunzel', 'Little Red Riding Hood', 'The Goose Girl' ],
      correctAnswer: 'Rumpelstiltskin',
      explanation: "The daughter in question was to give her first born to the imp that actually performed the magic spinning, but she was able to guess his name and keep her child. Your typical child's story."
    },
    {
      id: 306,
      question: 'This prog-rock drum legend for the band Rush died in 2020 of glioblastoma.',
      options: [ 'Neil Peart', 'John Bonham', 'John Entwhistle', 'Keith Moon' ],
      correctAnswer: 'Neil Peart',
      explanation: "Known as The Professor for his technical skill, he was also the lyricist for most of the band's songs over a 45 year career."
    },
    {
      id: 307,
      question: 'The Roses Tournament takes place each year between the Univeristy of York and Lancaster University, both in England. It involves competition in dozens of sports. Which of these classic American sports is NOT part of the Roses Tournament?',
      options: [ 'Baseball', 'American football', 'Basketball', 'E-sports' ],
      correctAnswer: 'Baseball',
      explanation: 'The competition began in 1965 and takes its name from the Wars of the Roses, which occurred in the mid-15th century between the Houses of York and Lancaster.'
    },
    {
      id: 308,
      question: 'In the mother/daughter series ""Gilmore Girls"", what was the name of the fictional town they lived in?',
      options: [ 'Stars Hollow', 'Eagle Point', 'Mystic Falls', 'Tree Hill' ],
      correctAnswer: 'Stars Hollow',
      explanation: 'The fake town in Connecticut was reported to be 30 minutes from the state capitol of Hartford, and was the home to Lorelei and Rory Gimore.'
    },
    {
      id: 309,
      question: "This Gen Alpha slang word has no fixed meaning, and likely had its origins in a 2018 song of the same name by Russian rave band Little Big.",
      options: [ 'Skibidi', 'Farxiga', 'Ronkonkin', 'Jabberwocky' ],
      correctAnswer: 'Skibidi',
      explanation: "Depending on context, it could mean 'cool', 'bad' or 'dumb', and can even be combined with other pseudowords like rizz."
    },
    {
      id: 310,
      question: 'This massively multiplayer online role-playing game set in Azeroth was released in 2004, has had 10 expansion packs released, and has grossed almost $10 billion.',
      options: [ 'World of Warcraft', 'Final Fantasy', 'The Lord of the Rings Online', 'Dungeons and Dragons Online' ],
      correctAnswer: 'World of Warcraft',
      explanation: 'WoW is just one of hundreds of ways that 20-somethings take their minds off a dying planet and a failing democracy.'
    },
    {
      id: 311,
      question: 'This online game platform allows users to program and play their own games, or the games of other players, and has been around since 2004.',
      options: [ 'Roblox', 'Arduino', 'Twitch', 'Steam' ],
      correctAnswer: 'Roblox',
      explanation: 'Earning over $2.29 billion in 2020, it also had about half of all kids under age 16 on the platform.'
    },
    {
      id: 312,
      question: 'The show Yellowstone and its numerous spinoffs were all written and created (or co-created) by this writer/actor/director.',
      options: [ 'Taylor Sheridan', 'Kurt Sutter', 'Shawn Ryan', 'David Simon' ],
      correctAnswer: 'Taylor Sheridan',
      explanation: 'Born Sheridan Taylor Gibler Jr, he also wrote the script for Sicario and its sequel; Wind River; Hell or High Water and acted in 21 episodes of Sons of Anarchy.'
    },
    {
      id: 313,
      question: "The name for this item that can be consumed (meaning, drank or eaten) comes from the German word for peppermint, pfefferminz.",
      options: [ 'PEZ', 'Dr Pepper', 'Peppadew', 'York Peppermint Pattie' ],
      correctAnswer: 'PEZ',
      explanation: "PEZ was invented in Austria in 1927. Some rare PEZ dispensers can be worth over $20,000. But only if they are in 'mint' condition."
    },
    {
      id: 314,
      question: 'The first video ever played on MTV, in 1981, was Video Killed the Radio Star by this band.',
      options: [ 'The Buggles', "Cap'n Bob and the Shanty Singers", 'The Beatles', 'The Eagles' ],
      correctAnswer: 'The Buggles',
      explanation: 'The band formed in 1977 and released their best known single in 1979. The duo broke up soon after to join the band Yes.'
    },
    {
      id: 315,
      question: 'Which artist inspired the ""brat summer"" trend in 2024?',
      options: [ 'Charli XCX', 'Beyonce', 'Adele', 'Dua Lipa' ],
      correctAnswer: 'Charli XCX',
      explanation: 'In the insightful words of Charli XCX, brat is about ""a pack of cigs and, like, a Bic lighter and, like, a strappy white top. With no bra"". Hence the obvious tie-in to the Kamala Harris campaign. '
    },
    {
      id: 316,
      question: 'This cartoon character was frequently stating that he should have taken a left turn at Albuquerque.',
      options: [ 'Bugs Bunny', 'Fred Flintstone', 'SpongeBob SquarePants', 'Homer Simpson' ],
      correctAnswer: 'Bugs Bunny',
      explanation: 'The running joke had its origins in the fact that Route 66 intersects itself in Albuquerque, causing confusion for drivers.'
    },
    {
      id: 317,
      question: 'Neil Armstrong was the first man to walk on the moon. Who was the second?',
      options: [ 'Buzz Aldrin', 'Alan Shepard', 'Michael Collins', 'Yakov Smirnoff' ],
      correctAnswer: 'Buzz Aldrin',
      explanation: 'Aldrin and Armstrong spent about 2 hours exploring Tranquility Base, while Michael Collins flew the command module in lunar orbit.'
    },
    {
      id: 318,
      question: "Carl Magee, of Oklahoma City, patented this coin-operated timer in 1935 to help businesses in downtown commercial areas.",
      options: [ 'Parking meter', 'Coin-op washing machine', 'Coin-op toll booth', 'Pay phone' ],
      correctAnswer: 'Parking meter',
      explanation: 'Modern meters are fully electric and can monitor if a space is used or not, can remove remaining time when a car leaves, and in some cases can remotely ticket you even though you have time left on the meter.'
    },
    {
      id: 319,
      question: "What is Plankton's (Spongebob Square Pants' nemesis), first name?",
      options: [ 'Sheldon', 'Alfred', 'Krusty', 'Satchel' ],
      correctAnswer: 'Sheldon',
      explanation: "Sheldon J. Plankton runs the Chum Bucket restaurant, a competitor of the Krusty Krab where Bob works."
    },
    {
      id: 320,
      question: 'The abdominal thrust maneuver to help someone who is choking is known as the ___ maneuver.',
      options: [ 'Heimlich', 'Oppenheimer', 'Stuttgart', 'Johnson' ],
      correctAnswer: 'Heimlich',
      explanation: "Dr Henry Heimlich invented the technique in 1974. He also espoused 'malariotherapy', deliberately infecting someone with malaria to treat HIV, cancer and Lyme disease."
    },
    {
      id: 321,
      question: 'Who was the author of To Kill A Mockingbird?',
      options: [ 'Harper Lee', 'George', 'George Orwell', 'JD Salinger' ],
      correctAnswer: 'Harper Lee',
      explanation: 'Upon its publication in 1961, Lee thought it would not sell well and hoped the book would have ""a quick and merciful death."""'
    },
    {
      id: 322,
      question: '1984 is a book about a dystopian future written in 1949 by this writer, who also wrote Animal Farm.',
      options: [ 'George Orwell', 'Suzanne Collins', 'Jack Kerouac', 'Orson Welles' ],
      correctAnswer: 'George Orwell',
      explanation: "Orwell was born Eric Arthur Blair, but he used the pen name Orwell as a tribute to his favorite place, the River Orwell in England."
    },
    {
      id: 323,
      question: "Edward Cullen is Bella's love interest in this book/movie series.",
      options: [ 'Twilight', 'Interview with the Vampire', 'Travels with Charley', 'Woman, Eating' ],
      correctAnswer: 'Twilight',
      explanation: 'Edward is a telepathic vampire who ultimately fathers a daughter, Renesmee, with Bella, who is turned into a vampire right after giving birth. '
    },
    {
      id: 324,
      question: 'What year was the first iPod released?',
      options: [ '2001', '1998', '1999', '2000' ],
      correctAnswer: '2001',
      explanation: 'After selling an estimated 450 million iPods, Apple stopped making them in 2022'
    },
    {
      id: 325,
      question: 'The best-selling movie soundtrack of all time (at 50 million units sold) is from the movie ___.',
      options: [ 'The Bodyguard', 'Pulp Fiction', 'Saturday Night Fever', 'Titanic' ],
      correctAnswer: 'The Bodyguard',
      explanation: "It was the first album to sell over 1,000,000 copies in a week, and is still the highest selling album by a female artist."
    },
    {
      id: 326,
      question: 'The famous movie line, ""Show me the money!"" is from this Tom Cruise film.',
      options: [ 'Jerry Maguire', 'Top Gun', 'Risky Business', 'Mission Impossible VI: The Money Train' ],
      correctAnswer: 'Jerry Maguire',
      explanation: 'It also had the catchphrases, ""you had me at \'hello\'"", and ""help me, help you""."'
    },
    {
      id: 327,
      question: "Which of these metals is the softest, and indeed considered the softest metal in the world.",
      options: [ 'Cesium', 'Gold', 'Tin', 'Aluminum' ],
      correctAnswer: 'Cesium',
      explanation: 'Cesium is what\'s known as a Group 1A alkali metal, which are very soft, as alkali comes from an Arabic word meaning ""ashes"".'
    },
    {
      id: 328,
      question: 'This 2005 film had the tag line, ""The longer you wait, the harder it gets"".',
      options: [ 'The 40 Year Old Virgin', 'Are We There Yet?', 'The Wedding Date', 'Hitch' ],
      correctAnswer: 'The 40 Year Old Virgin',
      explanation: 'Steve Carrell plays the virgin in question, and he even subjected himself to a real chest waxing for that well-known scene.'
    },
    {
      id: 329,
      question: 'As of 2025, this movie had the greatest gross sales relative to its initial budget.',
      options: [ 'Paranormal Activity', 'Rocky', 'Halloween', 'Napolean Dynamite' ],
      correctAnswer: 'Paranormal Activity',
      explanation: 'Made for $15,000, the movie had gross revenue of $193,000,000 for a return on investment of 1,289,000%.'
    },
    {
      id: 330,
      question: 'Which of these is NOT one of the new emotions that Riley has as a teenager in ""Inside Out 2""?',
      options: [ 'Empathy', 'Ennui', 'Embarrassment', 'Envy' ],
      correctAnswer: 'Empathy',
      explanation: 'The fourth new emotion is anxiety, and they arrive the night before she is to attend hockey camp.'
    },
    {
      id: 331,
      question: 'In the 2024 biographical film ""A Complete Unknown"", who plays Bob Dylan?',
      options: [ 'Timothee Chalamet', 'Joaquin Phoenix', 'Michael B. Jordan', 'Andy Samberg' ],
      correctAnswer: 'Timothee Chalamet',
      explanation: 'Born Robert Allen Zimmerman, Dylan has made 40 studio albums and 21 live albums and is still touring as of 2025.'
    },
    {
      id: 332,
      question: 'Which of the following names is NOT the name of one of the Brady kids (from The Brady Bunch)?',
      options: [ 'Mike', 'Greg', 'Peter', 'Bobby' ],
      correctAnswer: 'Mike',
      explanation: 'Mike Brady was the patriarch of the family. The introduction of Cousin Oliver in season 5 was considered the moment the series ""jumped the shark"", and it was cancelled at the end of that season.'
    },
    {
      id: 333,
      question: 'The idiom ""jumped the shark"" (referring to a moment when a creative work has exhausted its core ideas) was coined in 1985 in reference to a specific plot point on a 1977 episode of this show.',
      options: [ 'Happy Days', 'The Brady Bunch', 'Magnum P.I.', "Charlie's Angels" ],
      correctAnswer: 'Happy Days',
      explanation: 'In the episode, the Fonz jumps a shark while waterskiing and wearing his trademark leather motorcycle jacket.'
    },
    {
      id: 334,
      question: 'What was the name of the coffee shop in the show Friends?',
      options: [ 'Central Perk', 'Perk Me Up', 'The Bean Hole', 'Deja Brew' ],
      correctAnswer: 'Central Perk',
      explanation: 'Some of the originally considered titles for the show were Insomnia Cafe, Six of One and Across the Hall.'
    },
    {
      id: 335,
      question: 'What was the player number of Seong Gi-Hun, the main character of the Netflix series Squid Game.',
      options: [ '456', '1', '222', '999' ],
      correctAnswer: '456',
      explanation: "The dystopian South Korean show has players competing in sadistic and deadly versions of children's games for a chance to win about $40 million."
    },
    {
      id: 336,
      question: 'Which Nirvana album cover featured a baby swimming in a pool toward a dollar bill on a fishhook?',
      options: [ 'Nevermind', 'Bleach', 'In Utero', 'Rockabye Baby' ],
      correctAnswer: 'Nevermind',
      explanation: 'Spencer Elden, the baby in the photo, sued the band (and the photographer) in 2021 claiming he did not give consent and that it resulted in ""lifelong damages"". The case was dismissed. And appealed. And dismissed again.'
    },
    {
      id: 337,
      question: 'Which was the first K-pop / Asian band to headline at Coachella?',
      options: [ 'Blackpink', 'BTS', 'EXO', 'ATEEZ' ],
      correctAnswer: 'Blackpink',
      explanation: 'The 4-girl group is also the first Korean girl group to win an MTV Video Music Award, and are considered the most subscribed music act on YouTube, with over 98 million subscribers (in 2025).'
    },
    {
      id: 338,
      question: 'In what year did Vince Vance & the Valiants release ""All I Want For Christmas Is You""?',
      options: [ '1989', '1990', '1992', '1991' ],
      correctAnswer: '1989',
      explanation: 'Vance sued Mariah Carey, claiming she stole his song, even though the only similarity is the title. He lost the suit, as well as a follow up suit a year later.'
    },
    {
      id: 339,
      question: 'Fans of Lady Gaga are known as ______.',
      options: [ 'Little Monsters', 'Maggots', 'Head Cases', 'Trainwrecks' ],
      correctAnswer: 'Little Monsters',
      explanation: "All of these are fanbase nicknames, but as Gaga's fans call her Mother Monster, she refers to her fans as Little Monsters."
    },
    {
      id: 340,
      question: 'Snapchat, the app that allows message and picture to be seen for a short time before they disappear, was orginally called ____ when first launched.',
      options: [ 'Picaboo', 'Poof!', 'Ghost', 'ByeByeBye' ],
      correctAnswer: 'Picaboo',
      explanation: 'In 2011, Picaboo was launched on the iOS system but within 2 months was renamed Snapchat. And within just a few short years it became another excellent social media app for stalkers, body shaming, and inducing anxiety.'
    },
    {
      id: 341,
      question: "As of February 2025, which of these people has the most followers on Twitter?",
      options: [ 'Barack Obama', 'Taylor Swift', 'Rihanna', 'Cristiano' ],
      correctAnswer: 'Barack Obama',
      explanation: 'He has 130 million followers, while Cristiano has 115 M, Rihanna has 107 M and Taylor Swift has 94 M.'
    },
    {
      id: 342,
      question: 'The name of the AI chatbot on Twitter/X that has praised Hitler and spewed out false conspiracy theories and racist views is called ____.',
      options: [ 'Grok', 'Gemini', 'Claude', 'Elon' ],
      correctAnswer: 'Grok',
      explanation: 'The original name for the chatbot was TruthGPT, as ironically inaccurate a name as Truth Social.'
    },
    {
      id: 343,
      question: 'This politician has the most followers on Twitter/X (as of February 2025).',
      options: [ 'Barack Obama', 'Narendra Modi', 'Donald Trump', 'Boris Johnson' ],
      correctAnswer: 'Barack Obama',
      explanation: 'Obama has over 130 million followers, followed by Modi with 108.9 M, Trump with 108.3 M and Johnson with 4.5 M.'
    },
    {
      id: 344,
      question: "Henry John Deutschendorf Jr, a singer of folk and country until his death in a plane crash, was much better known as _____.",
      options: [ 'John Denver', 'Johnny Cash', 'Merle Haggard', 'Bob Dylan' ],
      correctAnswer: 'John Denver',
      explanation: 'Denver sold over 33 million albums. He died while piloting a newly puchased plane where he could not access the fuel tank selector valve, in 1997 at age 53.'
    },
    {
      id: 345,
      question: "The tallest volcano on earth (based on elevation above sea level) is _____, at 22,615 ft (6,893m).",
      options: [ 'Nevado Ojos del Salado', 'Denali', 'Mt Everest', 'Mauna Kea' ],
      correctAnswer: 'Nevado Ojos del Salado',
      explanation: 'Denali and Everest are not actually volcanoes. Mauna Kea is 33,500 ft (10,211 m) from base to summit, but only 13,796 ft (4,205 m) above sea level.'
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
      id: 847,
      question: "In which state will you find \"Rocket City USA\"?",
      options: ["Alabama", "California", "Texas", "Florida"],
      correctAnswer: "Alabama",
      explanation: "NASA's Marshall Space Flight Center is in Huntsville, the most populous city in AL, and is where the Saturn rockets were built."
    },
    {
      id: 848,
      question: "The Tennessee River starts and ends in Tennessee, but a long stretch in the middle passes into this state",
      options: ["Alabama", "Mississippi", "Georgia", "Oklahoma"],
      correctAnswer: "Alabama",
      explanation: "It was once known as the Cherokee River, and it starts in Knoxville before ending in the Ohio River."
    },
    {
      id: 849,
      question: "Which state's capital is known as the Cradle of the Confederacy?",
      options: ["Alabama", "Arkansas", "Mississippi", "Georgia"],
      correctAnswer: "Alabama",
      explanation: "Montgomery hosted the Southern Convention in 1861, in which 7 seceding southern states established the Confederacy."
    },
    {
      id: 850,
      question: "The first 911 call in the US was made in this state.",
      options: ["Alabama", "Tennessee", "Pennsylvania", "New York"],
      correctAnswer: "Alabama",
      explanation: "It was in 1968 in Haleyville, AL, and ushered in the era of people considering anything annoying, inconvenient or stressful to be an emergency."
    },
    {
      id: 851,
      question: "This state has the most fast food restaurants per capita.",
      options: ["West Virginia", "Arkansas", "New Jersey", "Alabama"],
      correctAnswer: "West Virginia",
      explanation: "According to Pricelisto, the state has 49.04 fast food places per 100,000 residents. By complete and utter coincidence, the state is the most obese, with 41.2% of the population meeting criteria for obesity."
    },
    {
      id: 852,
      question: "This state outlaws dressing up as a nun, priest or rabbi on Halloween.",
      options: ["Alabama", "Utah", "Texas", "Mississippi"],
      correctAnswer: "Alabama",
      explanation: "It is a misdemeanor to dress as clergy any time, with a fine of up to $500 and up to 1 year in jail. The law was enacted during civil rights protests in 1965."
    },
    {
      id: 853,
      question: "This state is known as The Last Frontier.",
      options: ["Alaska", "Montana", "Nevada", "Wyoming"],
      correctAnswer: "Alaska",
      explanation: "About 90% of the state is not accessible by any road and much of it is still relatively unexplored."
    },
    {
      id: 854,
      question: "This state has 6 times the number of pilots per capita, and 16 times the number of aircraft per capita, than any other state.",
      options: ["Alaska", "New York", "California", "Wyoming"],
      correctAnswer: "Alaska",
      explanation: "Since there are so few roads in the state, airplanes are the chief way to get around."
    },
    {
      id: 855,
      question: "This state has the most coastline, in terms of total miles",
      options: ["Alaska", "California", "Michigan", "Florida"],
      correctAnswer: "Alaska",
      explanation: "It has 33,904 miles (54,563 km) of coastline, about 4 times more than runner-up Florida."
    },
    {
      id: 856,
      question: "The largest urban park in the world is 495,000 acres and located in this state",
      options: ["Alaska", "New York", "Pennsylvania", "Florida"],
      correctAnswer: "Alaska",
      explanation: "Chugach State Park, established in 1970, is located entirely within the Anchorage metropolitan area."
    },
    {
      id: 857,
      question: "This state's capital is the largest by land area, at 3,255 sq miles.",
      options: ["Alaska", "Oklahoma", "Florida", "Arizona"],
      correctAnswer: "Alaska",
      explanation: "Juneau is also the only mainland North America capital that is not connected by road to the rest of the state or to North America."
    },
    {
      id: 858,
      question: "This state has the longest border with another country, at 1,538 miles",
      options: ["Alaska", "Michigan", "Texas", "Maine"],
      correctAnswer: "Alaska",
      explanation: "Texas has a 1,241 mile border with Mexico."
    },
    {
      id: 859,
      question: "The king, or Chinook, salmon is the official fish of Oregon and of this state.",
      options: ["Alaska", "Washington", "Maine", "Colorado"],
      correctAnswer: "Alaska",
      explanation: "The largest of the Pacific salmon, it is anadromous, meaning it migrates from the sea to freshwater rivers to spawn."
    },
    {
      id: 860,
      question: "This state has the most volcanoes, with 141.",
      options: ["Alaska", "Hawaii", "California", "Oregon"],
      correctAnswer: "Alaska",
      explanation: "California is a distant second, with 18, and Oregon has 17, but the largest volcano in the world is Mauna Loa in Hawaii."
    },
    {
      id: 861,
      question: "This state is the easternmost, westernmost and northernmost.",
      options: ["Alaska", "Florida", "Hawaii", "Maine"],
      correctAnswer: "Alaska",
      explanation: "The Aleutian Islands cross the 180 degree longitude mark, which makes the state both easternmost and westernmost."
    },
    {
      id: 862,
      question: "This state has the highest percentage of men, at over 52%.",
      options: ["Alaska", "California", "New York", "Maine"],
      correctAnswer: "Alaska",
      explanation: "The US overall is 50.8% female, and only 10 states have more men than women."
    },
    {
      id: 863,
      question: "In this state, you can find the San Francisco mountain range, with its high point of Humphrey's Peak (which is also the highest point in the state).",
      options: ["Arizona", "California", "Nevada", "New Mexico"],
      correctAnswer: "Arizona",
      explanation: "North of Flagstaff, Humphrey's Peak sits at 12,633 ft (3,851m)."
    },
    {
      id: 864,
      question: "Hawaii was the 50th state, Alaska was the 49th. Which state was the 48th (in 1912)?",
      options: ["Arizona", "Utah", "Idaho", "Oregon"],
      correctAnswer: "Arizona",
      explanation: "It was the last of the contiguous states to be admitted, on Feb 14 of that year."
    },
    {
      id: 865,
      question: "Lemonade is the official beverage of this desert state",
      options: ["Arizona", "Utah", "Nevada", "New Mexico"],
      correctAnswer: "Arizona",
      explanation: "It became such in 2019, due to the efforts of a local teenager."
    },
    {
      id: 866,
      question: "The town of Tombstone in this state is known as \"The Town Too Tough To Die\", and is famous for a gunfight in 1881.",
      options: ["Arizona", "New Mexico", "Texas", "Nevada"],
      correctAnswer: "Arizona",
      explanation: "While the shootout is widely believed to have had Wyatt Earp as the central figure, it was actually his brother Virgil who was the marshal of Tombstone at the time."
    },
    {
      id: 867,
      question: "You will find the London Bridge, that once spanned the River Thames, in Lake Havasu City in this state.",
      options: ["Arizona", "New Mexico", "Colorado", "Nevada"],
      correctAnswer: "Arizona",
      explanation: "It was shipped via the Panama Canal to California, then transported by truck to Arizona in 1968."
    },
    {
      id: 868,
      question: "The world's first professional rodeo took place in Prescott, in this state in 1888, before it was even a state.",
      options: ["Arizona", "Wyoming", "Montana", "Texas"],
      correctAnswer: "Arizona",
      explanation: "While the first rodeo was held in Cheyenne, WY, Arizona was the first to charge admission and award prizes."
    },
    {
      id: 869,
      question: "The only US interstate highway with distances listed in meters and kilometers is found in this state.",
      options: ["Arizona", "California", "Maine", "Michigan"],
      correctAnswer: "Arizona",
      explanation: "When I-19 was re-signed in 1980, the US was on a (failed) push to adopt the metric system, so this road connecting Nogales to Tucson has distances in metric, but the speed limit signs use MPH."
    },
    {
      id: 870,
      question: "Hattie Caraway, the first female US senator, represented this state when she replaced her husband who died in office in 1931.",
      options: ["Arkansas", "New York", "Indiana", "Pennsylvania"],
      correctAnswer: "Arkansas",
      explanation: "Initially appointed as a placeholder, she won election to a full term in 1932 and re-election in 1938."
    },
    {
      id: 871,
      question: "Bill Clinton and Mike Huckabee both sprang from Hope, in this state.",
      options: ["Arkansas", "Georgia", "Alabama", "Mississippi"],
      correctAnswer: "Arkansas",
      explanation: "Hope is also the self proclaimed watermelon capital of the world."
    },
    {
      id: 872,
      question: "Sam Walton started the chain that became Walmart in this state in 1945.",
      options: ["Arkansas", "Missouri", "Georgia", "Nevada"],
      correctAnswer: "Arkansas",
      explanation: "Bentonville-based Walmart is the largest private employer in the world, with 2.2 million employees that are provided with living wages, excellent benefits and a great health care plan. As long as you're in management."
    },
    {
      id: 873,
      question: "The only active diamond mine in the US is found in this state.",
      options: ["Arkansas", "California", "Nevada", "Pennsylvania"],
      correctAnswer: "Arkansas",
      explanation: "The Crater of Diamonds mine is in a state park, and visitors are able to \"pay to dig\" and keep any diamonds they find."
    },
    {
      id: 874,
      question: "The World's Championship Duck Calling Contest is held in Stuttgart in this state each year.",
      options: ["Arkansas", "Louisiana", "South Carolina", "Colorado"],
      correctAnswer: "Arkansas",
      explanation: "Held each November over Thanksgiving weekend, competitors must first qualify in a sanctioned preliminary event."
    },
    {
      id: 875,
      question: "Tyson Foods, the world's 2nd largest processor of chicken, beef and pork, is based in this state.",
      options: ["Arkansas", "Mississippi", "Georgia", "Alabama"],
      correctAnswer: "Arkansas",
      explanation: "Its brands includes Jimmy Dean, Ball Park and Hillshire Farm, and the company has over 144,000 employees worldwide, and has no problems whatsoever with how it treats its animals, its workers or the environment."
    },
    {
      id: 876,
      question: "This state's legislature passed a law in 1881 dictating the proper pronunciation of the state's name.",
      options: ["Arkansas", "Louisiana", "Texas", "Maryland"],
      correctAnswer: "Arkansas",
      explanation: "Arkansas Code 1-4-105 states in part, \"...it should be pronounced in three syllables, with the final 's' silent...\""
    },
    {
      id: 877,
      question: "Which state is known as the Golden State?",
      options: ["California", "Florida", "Utah", "New Mexico"],
      correctAnswer: "California",
      explanation: "It became the official state nickname in 1968, based largely on the state's history of gold mining."
    },
    {
      id: 878,
      question: "The first McDonald's was opened in this state in 1940.",
      options: ["California", "Illinois", "Minnesota", "Texas"],
      correctAnswer: "California",
      explanation: "It was originally a BBQ drive in, but the McDonald brothers realized most of their money was coming from hamburgers."
    },
    {
      id: 879,
      question: "Which state's entire coastline is a National Monument?",
      options: ["California", "Alaska", "Oregon", "Maine"],
      correctAnswer: "California",
      explanation: "The California Coastal National Monument was created via Presidential proclamation by Bill Clinton in January 2000, a few days before he left office."
    },
    {
      id: 880,
      question: "This state experiences the strong, dry, downslope Santa Ana winds every year, which often fuel massive wildfires.",
      options: ["California", "Arizona", "Colorado", "Oregon"],
      correctAnswer: "California",
      explanation: "They are katabatic winds, meaning they bring high-density air from higher elevations down toward sea level."
    },
    {
      id: 881,
      question: "98% of the pistachios grown in the US are grown in this state, and fortunately they do not require as much water as almonds.",
      options: ["California", "Oregon", "Nevada", "Oklahoma"],
      correctAnswer: "California",
      explanation: "Pistachios are a member of the cashew family, and if stored or processed improperly can produce aflatoxin which can be fatal."
    },
    {
      id: 882,
      question: "This state's economy is the 4th largest in the world as of April 2025, just below Japan and above India.",
      options: ["California", "Texas", "Alaska", "New York"],
      correctAnswer: "California",
      explanation: "With a $4.1 trillion gross state product, it still faces a $12-$20 billion deficit in 2025 (an amount greater than the entire budget of 19 other states)."
    },
    {
      id: 883,
      question: "This state has the largest county in the contiguous US, by area, at over 20,000 square miles.",
      options: ["California", "Texas", "Alaska", "Nevada"],
      correctAnswer: "California",
      explanation: "San Bernardino county is close to the size of West Virginia and has over 2,000,000 people. (Alaska has boroughs, not counties.)"
    },
    {
      id: 884,
      question: "The hottest, driest and lowest National Park is found in this state.",
      options: ["California", "Texas", "Arizona", "Utah"],
      correctAnswer: "California",
      explanation: "Death Valley is 282 ft (86m) below sea level and has the record for the hottest air temperature ever recorded on Earth as of 2021, at 134 degrees F (56.7 C)."
    },
    {
      id: 885,
      question: "This state has the largest landlocked harbor, meaning most of its sides are surrounded by land and has a small channel to the sea.",
      options: ["California", "Florida", "Maine", "Illinois"],
      correctAnswer: "California",
      explanation: "San Francisco Bay is about 60 mi (97 km) long and 3-12 mi (4.5-20km) wide and drains about 40% of California's water."
    },
    {
      id: 886,
      question: "The oldest known living tree in the world, a bristlecone pine known as Methuselah, is found in this state.",
      options: ["California", "Nevada", "New Mexico", "Florida"],
      correctAnswer: "California",
      explanation: "Core samples indicate it is 4,853 years old."
    },
    {
      id: 887,
      question: "This state has the most mountain peaks over 14,000 feet",
      options: ["Colorado", "California", "Alaska", "Wyoming"],
      correctAnswer: "Colorado",
      explanation: "The highest is Mt Elbert at 14,433 ft (4,400m)."
    },
    {
      id: 888,
      question: "This state has the highest average elevation, at about 6,800 feet",
      options: ["Colorado", "Alaska", "Montana", "Arizona"],
      correctAnswer: "Colorado",
      explanation: "AK is 1,900 ft (580m); MT is 3,400 ft (1,040m); AZ is 4,100 ft (1,250m)."
    },
    {
      id: 889,
      question: "Which state has the highest low point, at 3,317 ft?",
      options: ["Colorado", "Wyoming", "Alaska", "Montana"],
      correctAnswer: "Colorado",
      explanation: "WY is 3,105 ft (946m); AK is sea level; MT is 1,804 ft (550m)."
    },
    {
      id: 890,
      question: "The longest continuous commercial street in the US, Colfax Avenue, is found in this state.",
      options: ["Colorado", "New York", "California", "Alaska"],
      correctAnswer: "Colorado",
      explanation: "Colfax Avenue runs for about 50 miles through the Denver metropolitan area."
    },
    {
      id: 891,
      question: "This state has the highest mountain tunnel in the US, the Eisenhower Tunnel, going through the Continental Divide.",
      options: ["Colorado", "New Mexico", "Wyoming", "Montana"],
      correctAnswer: "Colorado",
      explanation: "The tunnel is at an elevation of 11,158 ft (3,401m) above sea level and is about 1.7 mi (2.7km) long."
    },
    {
      id: 892,
      question: "The Royal Gorge Bridge, above the Arkansas River in this state, is still the highest bridge in the US, despite being built in 1929.",
      options: ["Colorado", "Virginia", "West Virginia", "New Mexico"],
      correctAnswer: "Colorado",
      explanation: "Rising 955 ft (291m) above the Arkansas River, it is 1,260 ft (384m) long and was the highest bridge in the world until 2001."
    },
    {
      id: 893,
      question: "Pagosa hot springs in this state are the deepest ones yet measured in the world, at 1,002 ft (305m).",
      options: ["Colorado", "Oregon", "Nevada", "North Carolina"],
      correctAnswer: "Colorado",
      explanation: "The true depth is unknown because the plumb line used to measure it was only 1,002 ft long."
    },
    {
      id: 894,
      question: "The country's oldest continuously published newspaper originated in this state in 1764.",
      options: ["Connecticut", "Pennsylvania", "Ohio", "Delaware"],
      correctAnswer: "Connecticut",
      explanation: "The Hartford Courant began as a semi-weekly and became a daily publication in 1837. It is still being published as of January 2022."
    },
    {
      id: 895,
      question: "The first telephone book was a list of 50 businesses and individuals in New Haven in this state, and was published in February 1878.",
      options: ["Connecticut", "New York", "Pennsylvania", "Maine"],
      correctAnswer: "Connecticut",
      explanation: "Printed on a piece of cardboard in New Haven, it was not alphabetized and had no numbers associated with the names. It simply indicated that the people and places listed actually had a telephone."
    },
    {
      id: 896,
      question: "This state was the first to adopt a speed limit for cars, in 1901, when the state had 300 registered cars.",
      options: ["Connecticut", "New Jersey", "Ohio", "Oregon"],
      correctAnswer: "Connecticut",
      explanation: "The state adopted a speed limit of 12 mph in cities and 15 mph in rural areas, and specified that the speed must be reduced when passing a horse-drawn vehicle."
    },
    {
      id: 897,
      question: "In 1973, the Austrian company PEZ opened a US factory in the town of Orange in this state.",
      options: ["Connecticut", "New York", "Nebraska", "Florida"],
      correctAnswer: "Connecticut",
      explanation: "Since 1950, there have been over 1500 Pez dispenser types made, and Orange, CT has a Pez Visitor Center open to the public."
    },
    {
      id: 898,
      question: "The first dictionary in the US was compiled by Noah Webster, in Springfield in this state in 1806.",
      options: ["Connecticut", "Pennsylvania", "Rhode Island", "Arkansas"],
      correctAnswer: "Connecticut",
      explanation: "Immediately after publishing A Compendious Dictionary of the English Language, Webster began working on the 2nd edition, which took 27 years to finish."
    },
    {
      id: 899,
      question: "The first publicly funded library was started in Salisbury in this state in 1810.",
      options: ["Connecticut", "Delaware", "North Carolina", "California"],
      correctAnswer: "Connecticut",
      explanation: "The collection of books at Scoville Library began in 1771, but it was an 1810 law that directed the town to use money from the treasury to buy books for the library, making it publicly funded."
    },
    {
      id: 900,
      question: "This state is nicknamed the \"Constitution State\" because its Fundamental Orders were a basis for the US Constitution.",
      options: ["Connecticut", "California", "Virginia", "Maine"],
      correctAnswer: "Connecticut",
      explanation: "Adopted in 1639, the Orders gave the people the right to elect their government officials."
    },
    {
      id: 1198,
      question: "Called the First State, it ratified the Constitution on Dec 7, 1787.",
      options: ["Delaware", "Rhode Island", "Pennsylvania", "Florida"],
      correctAnswer: "Delaware",
      explanation: "The state also has more corporations than people, thanks to its business-friendly laws."
    },
    {
      id: 1199,
      question: "This is the only state with just one unit of the National Park Service.",
      options: ["Delaware", "Hawaii", "Rhode Island", "Arkansas"],
      correctAnswer: "Delaware",
      explanation: "First State National Historic Park was established by Barack Obama, and extends into Pennsylvania."
    },
    {
      id: 1200,
      question: "This state has the fewest counties, with just 3.",
      options: ["Delaware", "Rhode Island", "Alaska", "Hawaii"],
      correctAnswer: "Delaware",
      explanation: "The average number of counties per state is 62, and Texas has the most with 254."
    },
    {
      id: 1201,
      question: "This is the only state with no stand-alone TV stations based in the state.",
      options: ["Delaware", "Hawaii", "Alaska", "Florida"],
      correctAnswer: "Delaware",
      explanation: "The state is served by stations in Philadelphia and Maryland."
    },
    {
      id: 1202,
      question: "Of the following states, which one has just a single US Representative?",
      options: ["Delaware", "New Hampshire", "Maine", "Rhode Island"],
      correctAnswer: "Delaware",
      explanation: "The other three states have 2 Representatives. The number of representatives is based on population."
    },
    {
      id: 1203,
      question: "A university in this state is credited with being the first one to offer a study abroad program.",
      options: ["Delaware", "New York", "Pennsylvania", "Alabama"],
      correctAnswer: "Delaware",
      explanation: "In 1923, a group of 8 University of Delaware students set sail for France for and spent time studying at the Sorbonne."
    },
    {
      id: 1204,
      question: "Bob Marley briefly lived in this state and worked at a Chrysler plant in Newark as a forklift operator.",
      options: ["Delaware", "Ohio", "Michigan", "New Jersey"],
      correctAnswer: "Delaware",
      explanation: "He also worked as a lab assistant at DuPont and used the alias Donald Marley."
    },
    {
      id: 1205,
      question: "Which state has the lowest high point, at just 345 ft?",
      options: ["Florida", "Delaware", "Rhode Island", "Louisiana"],
      correctAnswer: "Florida",
      explanation: "Britton Hill is almost 20,000 (6,090m) ft lower than Denali in Alaska, the highest point in the US."
    },
    {
      id: 1206,
      question: "In which state can you visit Ernest Hemingway's former home, on an island surrounded by turquoise waters?",
      options: ["Florida", "Hawaii", "Louisiana", "South Carolina"],
      correctAnswer: "Florida",
      explanation: "While living in Key West, he wrote To Have and Have Not as well as The Snows of Kilimanjaro."
    },
    {
      id: 1207,
      question: "The longest sidewalk in the US, Bayshore Boulevard, is found in this state.",
      options: ["Florida", "Hawaii", "California", "Texas"],
      correctAnswer: "Florida",
      explanation: "The 4.5 mile long path is in Tampa."
    },
    {
      id: 1208,
      question: "Outside of Alaska, which state has the largest city by square mileage?",
      options: ["Florida", "California", "Nevada", "New York"],
      correctAnswer: "Florida",
      explanation: "At 874 sq mi (2,265 sq km), Jacksonville is the most populous city in the state."
    },
    {
      id: 1209,
      question: "This state is the lightning capital of the US, getting a greater density of strikes than any other (as of 2024).",
      options: ["Florida", "Oregon", "Utah", "Nevada"],
      correctAnswer: "Florida",
      explanation: "Texas typically leads the nation with total number of strikes, but it is roughly 5 times the size of FL."
    },
    {
      id: 1210,
      question: "Which state on the eastern seaboard is partly in the Central time zone?",
      options: ["Florida", "Tennessee", "South Carolina", "Pennsylvania"],
      correctAnswer: "Florida",
      explanation: "The panhandle part of the state south of Alabama is in the Central time zone."
    },
    {
      id: 1211,
      question: "The oldest continuously inhabited European-established (by the Spanish) city in the US is found in this state.",
      options: ["Florida", "Louisiana", "California", "Texas"],
      correctAnswer: "Florida",
      explanation: "Founded in 1565 by the Spanish, St. Augustine was the Spanish capital of Florida for 200 years."
    },
    {
      id: 1212,
      question: "The majority of the Okefenokee Swamp is found in this state",
      options: ["Georgia", "Florida", "South Carolina", "Louisiana"],
      correctAnswer: "Georgia",
      explanation: "It is the largest blackwater swamp in North America at 438,000 acres (177,000 hectares)."
    },
    {
      id: 1213,
      question: "In which state does the Appalachian trail have its southern terminus, at Springer Mountain?",
      options: ["Georgia", "South Carolina", "Tennessee", "North Carolina"],
      correctAnswer: "Georgia",
      explanation: "The northern terminus is at Mt Katahdin in Maine, about 2,200 miles (3,540 km) away."
    },
    {
      id: 1214,
      question: "The movie Deliverance was filmed mostly on the Chattooga River in this state.",
      options: ["Georgia", "Florida", "Louisiana", "Missouri"],
      correctAnswer: "Georgia",
      explanation: "It was the first river east of the Mississippi to be granted Wild & Scenic status, in 1974. The movie was Ned Beatty's first."
    },
    {
      id: 1215,
      question: "The Heisman trophy is named after a coach from this state's Tech school.",
      options: ["Georgia", "Texas", "Tennessee", "California"],
      correctAnswer: "Georgia",
      explanation: "The first recipient in 1935 was University of Chicago halfback Jay Berwanger."
    },
    {
      id: 1216,
      question: "America's first planned city, Savannah, was laid out in 1733 in this state.",
      options: ["Georgia", "Massachusetts", "South Carolina", "Delaware"],
      correctAnswer: "Georgia",
      explanation: "Named after the Savannah River, the design was proposed by General James Edward Oglethorpe."
    },
    {
      id: 1217,
      question: "This state was the last of the original 13 colonies to be granted its charter from England.",
      options: ["Georgia", "Connecticut", "Rhode Island", "Florida"],
      correctAnswer: "Georgia",
      explanation: "Georgia was founded in 1732, 125 years after the first colony of Virginia."
    },
    {
      id: 1218,
      question: "Gainesville in this state has an ordinance that requires fried chicken to be eaten only with your hands, done to promote the town as \"poultry capital of the world.\"",
      options: ["Georgia", "Mississippi", "Idaho", "Florida"],
      correctAnswer: "Georgia",
      explanation: "In January 2021, a poultry plant in Gainesville leaked nitrogen from a refigeration unit and killed 6 people."
    },
    {
      id: 1219,
      question: "This state has only one school district.",
      options: ["Hawaii", "Delaware", "Rhode Island", "Texas"],
      correctAnswer: "Hawaii",
      explanation: "Delaware has 32, Rhode Island has 47 and Texas has the most at 1,241."
    },
    {
      id: 1220,
      question: "The tallest mountain on earth is found in this state.",
      options: ["Hawaii", "Alaska", "California", "Pennsylvania"],
      correctAnswer: "Hawaii",
      explanation: "Mauna Kea volcano is about 33,000 ft (9,966m) tall from seafloor to summit, making it about 4,000 ft taller than Everest."
    },
    {
      id: 1221,
      question: "This state has the only royal palace in the US.",
      options: ["Hawaii", "New Mexico", "Louisiana", "Michigan"],
      correctAnswer: "Hawaii",
      explanation: "Iolani Palace in Honolulu was the royal residence of the rulers of Hawaii until 1893."
    },
    {
      id: 1222,
      question: "This state is the only one physically gaining more area each year.",
      options: ["Hawaii", "Alaska", "California", "Florida"],
      correctAnswer: "Hawaii",
      explanation: "Because of the ongoing eruption of the Kilauea volcano, the state gains about 40 acres of land each year."
    },
    {
      id: 1223,
      question: "The first Asian American to serve in the US Senate was elected in this state.",
      options: ["Hawaii", "Washington", "New York", "California"],
      correctAnswer: "Hawaii",
      explanation: "Hiram Fong fought for HI to become a state and was elected in 1959 to the Senate, the only Republican Senator from HI as of 2024."
    },
    {
      id: 1224,
      question: "Utah is one of two states that completely ban gambling in any form. What is the other?",
      options: ["Hawaii", "Alaska", "New Mexico", "North Dakota"],
      correctAnswer: "Hawaii",
      explanation: "Hawaii does allow \"social gambling\", which it defines as bets between individuals, not in any business or public area, with no \"house take\"."
    },
    {
      id: 1225,
      question: "This state has only one native land mammal, the hoary bat.",
      options: ["Hawaii", "Louisiana", "Arizona", "Maine"],
      correctAnswer: "Hawaii",
      explanation: "Because it is one of the most isolated island groups in the world, there are numerous native birds (all endangered) but only one native mammal."
    },
    {
      id: 1226,
      question: "Which state's north and south are in different time zones?",
      options: ["Idaho", "Indiana", "Oklahoma", "Utah"],
      correctAnswer: "Idaho",
      explanation: "The panhandle follows Pacific time, whereas the southern portion of the state follows Mountain time."
    },
    {
      id: 1227,
      question: "Craters of the Moon National Monument is found in this state and encompasses 3 major lava fields.",
      options: ["Idaho", "New Mexico", "Alaska", "California"],
      correctAnswer: "Idaho",
      explanation: "The lava fields lie along the Great Rift of Idaho, which has the deepest known rift in the world at 800 ft (240m)."
    },
    {
      id: 1228,
      question: "Evel Knievel attempted to jump his Skycycle across the Snake River in this state in 1974.",
      options: ["Idaho", "Oregon", "Wyoming", "Utah"],
      correctAnswer: "Idaho",
      explanation: "The area he tried to jump was a mile wide, and the chute on the steam powered rocket opened early, causing him to not make it across. He did survive."
    },
    {
      id: 1229,
      question: "Albertson's grocery stores were founded in this state in 1939.",
      options: ["Idaho", "California", "New York", "Colorado"],
      correctAnswer: "Idaho",
      explanation: "The store was one of the first to offer free parking and a money-back guarantee, and is the second largest supermarket chain in North America."
    },
    {
      id: 1230,
      question: "The world's first nuclear reactor used to generate electricity was opened in this state in 1951.",
      options: ["Idaho", "Pennsylvania", "California", "Nevada"],
      correctAnswer: "Idaho",
      explanation: "The EBR-1 (Experimental Breeder Reactor) reactor produced about 100 kW of power outside of Arco, ID."
    },
    {
      id: 1231,
      question: "A city in this state has a law prohibiting \"frowns, grimaces, scowls, threatening and lowering looks, gloomy and depressed facial appearances.\"",
      options: ["Idaho", "Utah", "Maine", "Vermont"],
      correctAnswer: "Idaho",
      explanation: "The mayor of Pocatello made the tongue-in-cheek law after a particularly bad winter. It was in effect for one week in August, but is technically still on the books."
    },
    {
      id: 1232,
      question: "The Pulaski, a special hand tool for fighting wildfires, was invented in this state in 1911.",
      options: ["Idaho", "Nevada", "North Carolina", "New Jersey"],
      correctAnswer: "Idaho",
      explanation: "Ed Pulaski is credited with the invention of the tool that is a Forest Service standard issue."
    },
    {
      id: 1233,
      question: "A city in this state is home to the first skyscraper, built in 1885.",
      options: ["Illinois", "New York", "Pennsylvania", "Maryland"],
      correctAnswer: "Illinois",
      explanation: "The Home Insurance Building in Chicago was 138 ft (42m) tall and was the first building to be supported inside and out by steel."
    },
    {
      id: 1234,
      question: "This state was the first to ratify the 13th Amendment, abolishing slavery.",
      options: ["Illinois", "Pennsylvania", "New York", "Ohio"],
      correctAnswer: "Illinois",
      explanation: "On February 1, 1865, IL was the first of the 27 states needed to ratify the Amendment."
    },
    {
      id: 1235,
      question: "On December 2, 1942, the world's first human generated nuclear reaction occurred in this state.",
      options: ["Illinois", "Nevada", "New Mexico", "California"],
      correctAnswer: "Illinois",
      explanation: "Enrico Fermi led the Chicago Pile-1 experiment, a key part of the Manhattan Project."
    },
    {
      id: 1236,
      question: "This state's capital is also the site of the Lincoln Home National Historic Site.",
      options: ["Illinois", "Kentucky", "Indiana", "Ohio"],
      correctAnswer: "Illinois",
      explanation: "Lincoln lived in Springfield for 17 years before becoming President in 1861."
    },
    {
      id: 1237,
      question: "The tallest person in the world (with irrefutable evidence) was Robert Wadlow, born in Alton in this state in 1918.",
      options: ["Illinois", "Oregon", "Colorado", "Kansas"],
      correctAnswer: "Illinois",
      explanation: "He was 8'11\" (2.72m) tall (and 439 lbs/199 kg) due to a pituitary disorder, and died at age 22 from complications of that."
    },
    {
      id: 1238,
      question: "The largest bakery in the world, a Nabisco facility, is in a city in this state.",
      options: ["Illinois", "Ohio", "California", "Virginia"],
      correctAnswer: "Illinois",
      explanation: "The Chicago plant is 1.8 million sq ft (170,000 sq m) and employs 1200 people making Chips Ahoy!, Oreos and other health foods."
    },
    {
      id: 1239,
      question: "This state has the greatest nuclear power capacity, at over 98,000 gigawatts per year.",
      options: ["Illinois", "California", "Pennsylvania", "Tennessee"],
      correctAnswer: "Illinois",
      explanation: "The state generates about 54% of its power from 11 nuclear reactors, more than any other state."
    },
    {
      id: 1240,
      question: "Although the origin is unclear, people from this state are referred to as Hoosiers.",
      options: ["Indiana", "Illinois", "Kansas", "Pennsylvania"],
      correctAnswer: "Indiana",
      explanation: "One origin theory says it comes from yelling out \"Who's here?\" when a stranger approached your farm."
    },
    {
      id: 1241,
      question: "The town of Speedway in this state is named after the very large car race held each Memorial Day.",
      options: ["Indiana", "Florida", "California", "New Jersey"],
      correctAnswer: "Indiana",
      explanation: "The Indianapolis 500 started in 1911, and the track referred to as the Brickyard was originally paved in brick (go figure)."
    },
    {
      id: 1242,
      question: "French Lick, Gnaw Bone and Gas City are all towns you can find in this state.",
      options: ["Indiana", "Arkansas", "Alabama", "Nebraska"],
      correctAnswer: "Indiana",
      explanation: "French Lick is the home of NBA legend Larry Bird. Gas City is named after the natural gas deposits found there. And Gnaw Bone may relate to a French settlement in the area called Narbonne. Or maybe it was named by a dog."
    },
    {
      id: 1243,
      question: "Dan Quayle, the famously dim-witted vice president who misspelled potato in front of a class of 6th graders, was a Senator from this state.",
      options: ["Indiana", "Mississippi", "Missouri", "Ohio"],
      correctAnswer: "Indiana",
      explanation: "Among his many moronic statements, he once said, \"I have made good judgments in the past. I have made good judgments in the future.\""
    },
    {
      id: 1244,
      question: "Elvis Presley performed his final concert at the Market City Arena in the most populous city in this state, in 1977.",
      options: ["Indiana", "New York", "Tennessee", "Nevada"],
      correctAnswer: "Indiana",
      explanation: "Presley died 7 weeks later from a drug overdose. The Arena was built in 1974 for $23 million, and was demolished in 2001."
    },
    {
      id: 1245,
      question: "A town in this state is the home of the Jackson 5, including the youngest, Michael.",
      options: ["Indiana", "New York", "California", "Louisiana"],
      correctAnswer: "Indiana",
      explanation: "The town of Gary was once a prosperous steel town, but it is now estimated that 1/3 of its houses are abandoned."
    },
    {
      id: 1246,
      question: "The iconic shape of the Coca Cola bottle was designed in this state in 1915.",
      options: ["Indiana", "South Carolina", "Georgia", "New Jersey"],
      correctAnswer: "Indiana",
      explanation: "A designer at the Root Glass Company of Terre Haute designed it and was given a \"lifetime\" job at the company - which lasted until the company was sold in the mid-1930s."
    },
    {
      id: 1247,
      question: "The Field of Dreams, from the Kevin Costner film, can be found in this state outside the town of Dyersville.",
      options: ["Iowa", "New York", "Kansas", "Ohio"],
      correctAnswer: "Iowa",
      explanation: "It was built as a set for the film but has continued to draw thousands of tourists each year, and even hosted a Major League Baseball game in Aug 2021."
    },
    {
      id: 1248,
      question: "The town of Washington in this state is home to the oldest continuously operating movie theater, opening in 1897.",
      options: ["Iowa", "California", "Pennsylvania", "Ohio"],
      correctAnswer: "Iowa",
      explanation: "The State Theater is now owned by the Fridley Theatres chain, but is still showing first run films as of January 2025."
    },
    {
      id: 1249,
      question: "What is the only state to have two vowels as its two letter abbreviation.",
      options: ["Iowa", "Alabama", "Arkansas", "Alaska"],
      correctAnswer: "Iowa",
      explanation: "Iowa is bordered by six states, as well as the Mississippi River to the east and the Missouri River to the west."
    },
    {
      id: 1250,
      question: "The first president born west of the Mississippi River, Herbert Hoover, was born in 1874 in West Branch in this state.",
      options: ["Iowa", "Oregon", "North Dakota", "New Mexico"],
      correctAnswer: "Iowa",
      explanation: "He is considered the 36th best president!"
    },
    {
      id: 1251,
      question: "John Wayne grew up in southern California before becoming a film icon, but he was born in this state.",
      options: ["Iowa", "South Dakota", "Missouri", "Vermont"],
      correctAnswer: "Iowa",
      explanation: "Born Marion Robert Morrison, he appeared in 142 films from the 1920s to the 1970s."
    },
    {
      id: 1252,
      question: "WInnebago, the maker of iconic RVs, was founded in this state in 1958.",
      options: ["Iowa", "Minnesota", "Florida", "New York"],
      correctAnswer: "Iowa",
      explanation: "A highly modified Winnebago was fitted with wings and rocket engines in the 1987 comedy Spaceballs."
    },
    {
      id: 1253,
      question: "This is the only state to have its entire eastern and western borders formed by 2 rivers, the Missouri and Mississippi.",
      options: ["Iowa", "Missouri", "Minnesota", "Louisiana"],
      correctAnswer: "Iowa",
      explanation: "The Missouri and Mississippi Rivers are the longest and second longest, respectively, rivers in North America."
    },
    {
      id: 1254,
      question: "What state's official song is \"Home on the Range?\"",
      options: ["Kansas", "Texas", "Colorado", "Wyoming"],
      correctAnswer: "Kansas",
      explanation: "Credit is given to Dr. Brewster Higley of Smith County, KS, who wrote the poem sometime around 1872 that was later turned into a song."
    },
    {
      id: 1255,
      question: "Hattie McDaniel, the first black woman to win an Oscar (for Gone With the Wind), hailed from this state.",
      options: ["Kansas", "Louisiana", "Mississippi", "Florida"],
      correctAnswer: "Kansas",
      explanation: "She won a Best Supporting Actress award for her role as Mammy, who served as the slave/guardian of Scarlett O'Hara."
    },
    {
      id: 1256,
      question: "The geographic center of the contiguous 48 states is found outside Lebanon, in this state.",
      options: ["Kansas", "Missouri", "Florida", "Illinois"],
      correctAnswer: "Kansas",
      explanation: "If AK and HI are included, the center shifts to South Dakota."
    },
    {
      id: 1257,
      question: "The first Pizza Hut opened in this state in 1958.",
      options: ["Kansas", "California", "New York", "Illinois"],
      correctAnswer: "Kansas",
      explanation: "Dan and Frank Carney opened the first one in Wichita while students at Wichita State University. Later in life, Frank became a franchisee for Papa John's Pizza."
    },
    {
      id: 1258,
      question: "White Castle was founded in a college town in 1921 in this state known for beef cattle.",
      options: ["Kansas", "Nebraska", "Texas", "Nevada"],
      correctAnswer: "Kansas",
      explanation: "Despite being founded in Wichita and being considered the first fast food restaurant, there are no White Castles in all of Kansas as of 2025."
    },
    {
      id: 1259,
      question: "Until 1989, the geodetic center - the point from which all latitude and longitude measurements in the US are taken - was at Meade's Ranch, 20 miles south of Osborne in this state.",
      options: ["Kansas", "Colorado", "Florida", "Nebraska"],
      correctAnswer: "Kansas",
      explanation: "This spot was the basis for the NAD27 datum. It has been mostly replaced by the NAD83 and WGS84. But you knew that."
    },
    {
      id: 1260,
      question: "The case that ended public school segregation, Brown vs. Board of Education, was initially filed in this state in 1951.",
      options: ["Kansas", "Georgia", "Maine", "Arkansas"],
      correctAnswer: "Kansas",
      explanation: "The Topeka school board was sued by 13 local black families in the landmark case decided by the Warren Court in 1954."
    },
    {
      id: 1261,
      question: "Dorothy in The Wonderful Wizard of Oz was swept away from her farm in this state by a tornado.",
      options: ["Kansas", "Iowa", "Nebraska", "Georgia"],
      correctAnswer: "Kansas",
      explanation: "Her ruby slippers were silver in the L. Frank Baum book, but changed in the movie to take advantage of the new technology of Technicolor!"
    },
    {
      id: 1262,
      question: "Abraham Lincoln was born near Hodgenville in this state.",
      options: ["Kentucky", "Illinois", "Missouri", "Indiana"],
      correctAnswer: "Kentucky",
      explanation: "Born near Hodgenville, his family moved to Indiana when he was 7, then again to Illinois at age 21."
    },
    {
      id: 1263,
      question: "Churchill Downs, where a famous horse race is held, is in this state.",
      options: ["Kentucky", "New York", "California", "Virginia"],
      correctAnswer: "Kentucky",
      explanation: "It officially opened in 1875, and held the first Kentucky Derby that same year."
    },
    {
      id: 1264,
      question: "This state opened the first commercial winery in the US, called First Vineyard, started by the Dufour family in 1799, and it is still operating outside Nicholasville.",
      options: ["Kentucky", "California", "New York", "Virginia"],
      correctAnswer: "Kentucky",
      explanation: "It produced wine for about 10 years until a bad frost killed the plants, but the winery was re-established in 2012 and has been making wine since."
    },
    {
      id: 1265,
      question: "Transylvania University, a private school founded in 1780, is found in this state.",
      options: ["Kentucky", "Pennsylvania", "New York", "Virginia"],
      correctAnswer: "Kentucky",
      explanation: "It is the first university founded in Kentucky and offers 48 majors (and none of them in coal mining!)."
    },
    {
      id: 1266,
      question: "The longest cave system in the world, Mammoth Cave, is located in this state.",
      options: ["Kentucky", "Alabama", "California", "Ohio"],
      correctAnswer: "Kentucky",
      explanation: "With over 420 miles (680 km) mapped, it is almost twice as long as the next largest cave system in Mexico."
    },
    {
      id: 1267,
      question: "While the first franchise was opened in Utah in 1952, Kentucky Fried Chicken was actually started in this state in the 1930s.",
      options: ["Kentucky", "North Carolina", "New Jersey", "Michigan"],
      correctAnswer: "Kentucky",
      explanation: "The original recipe and method of preparation was developed by Harlan Sanders, who opened his first restaurant in 1930 as part of a Shell gas station."
    },
    {
      id: 1268,
      question: "Abe Lincoln, President of the Union, and Jefferson Davis, President of the Confederacy, were both born in this state, less than 1 year and 100 miles apart.",
      options: ["Kentucky", "Illinois", "Indiana", "Virginia"],
      correctAnswer: "Kentucky",
      explanation: "Lincoln was born in Hodgenville in Feb 1809, and Davis was born in June 1808 in Fairview."
    },
    {
      id: 1269,
      question: "This state's capitol building is the tallest in the US, at 460 feet, and is 150 ft taller than any other building in the city.",
      options: ["Louisiana", "New York", "Oregon", "Hawaii"],
      correctAnswer: "Louisiana",
      explanation: "The Baton Rouge capitol building was completed in 1932 in a classical / Art Deco style."
    },
    {
      id: 1270,
      question: "The longest continuous bridge over water is just under 24 mi (38km) long and is found in this state.",
      options: ["Louisiana", "California", "Wisconsin", "Michigan"],
      correctAnswer: "Louisiana",
      explanation: "The Lake Pontchartrain Causeway holds the Guinness record for longest continuous span over water."
    },
    {
      id: 1271,
      question: "One of the two \"mobile\" National Historic Landmarks is the St Charles Streetcar line found in this state.",
      options: ["Louisiana", "Florida", "New York", "New Mexico"],
      correctAnswer: "Louisiana",
      explanation: "Found in New Orleans, it is the oldest continuously operating streetcar line in the world, in use since 1835."
    },
    {
      id: 1272,
      question: "The only commercial Elvis Presley ever did was in 1954 for the Southern Maid donut store, which was started in this state.",
      options: ["Louisiana", "Tennessee", "Georgia", "Alabama"],
      correctAnswer: "Louisiana",
      explanation: "He sang the jingle in exchange for a box of glazed donuts."
    },
    {
      id: 1273,
      question: "Tabasco sauce originated on Avery Island in this state, in 1868.",
      options: ["Louisiana", "North Carolina", "South Carolina", "Alabama"],
      correctAnswer: "Louisiana",
      explanation: "The tabasco pepper is native to Mexico and rates from 30,000-50,000 on the Scoville scale."
    },
    {
      id: 1274,
      question: "Of the 6 states that have a designated state crustacean, this is the only state that uses the crawfish for this honor.",
      options: ["Louisiana", "Maryland", "Alabama", "Texas"],
      correctAnswer: "Louisiana",
      explanation: "They are also known as crayfish, crawdads, craydids, mountain lobsters, rock lobsters and mudbugs."
    },
    {
      id: 1275,
      question: "The Hurricane cocktail was created at Pat O'Brien's bar in the 1940s in this state and is now an iconic drink.",
      options: ["Louisiana", "Texas", "Florida", "Oklahoma"],
      correctAnswer: "Louisiana",
      explanation: "During Prohibition, the New Orleans bar was known as Mr O'Brien's Club Tipperary, with a password of \"storm's brewin\" to get in."
    },
    {
      id: 1276,
      question: "The Appalachian trail typically ends (for those traveling south to north) at Mt Katahdin in this state",
      options: ["Maine", "New York", "Vermont", "New Hampshire"],
      correctAnswer: "Maine",
      explanation: "It is the highest point in Maine at 5,269 ft (1,606m) and its name means \"the greatest mountain\"."
    },
    {
      id: 1277,
      question: "This state is home of the first national park (Acadia NP) east of the Mississippi.",
      options: ["Maine", "North Carolina", "West Virginia", "Virginia"],
      correctAnswer: "Maine",
      explanation: "Designated in 1919, it was also the first national park created from private lands that were gifted to the government."
    },
    {
      id: 1278,
      question: "Which state's official slogan is Vacationland?",
      options: ["Maine", "Florida", "Hawaii", "New Jersey"],
      correctAnswer: "Maine",
      explanation: "The origins are unclear, but it has been on state license plates since 1936."
    },
    {
      id: 1279,
      question: "This state's state flower, the eastern pine cone, is not actually a flower, and was chosen because the state is often called the Pine Tree state.",
      options: ["Maine", "Oregon", "Washington", "Arkansas"],
      correctAnswer: "Maine",
      explanation: "The pine tree is featured on the state's flag, seal and quarter, and over 80% of the state is forested."
    },
    {
      id: 1280,
      question: "This state is the closest to Africa, \"as the crow flies\".",
      options: ["Maine", "Florida", "Hawaii", "North Carolina"],
      correctAnswer: "Maine",
      explanation: "If you really thought Hawaii was an option, then you need to look at a globe tonight."
    },
    {
      id: 1281,
      question: "Stephen King was born in, and still resides in, this state.",
      options: ["Maine", "California", "New York", "Connecticut"],
      correctAnswer: "Maine",
      explanation: "He has written 63 novels and sold over 350 million copies, and Carrie was his first novel to be published."
    },
    {
      id: 1282,
      question: "The first naval battle of the Revolutionary War took place in the waters off Machias in this state.",
      options: ["Maine", "New York", "Florida", "Ohio"],
      correctAnswer: "Maine",
      explanation: "The Revolutionary War began just 2 months prior to this battle in Maine, and Maine was still a territory of Massachusetts."
    },
    {
      id: 1283,
      question: "This state was one of two that never passed local laws supporting Prohibition, because the residents thought it infringed on their rights.",
      options: ["Maryland", "Texas", "Alaska", "South Carolina"],
      correctAnswer: "Maryland",
      explanation: "The 18th Amendment banned alcohol staring in 1920, but Maryland and New York did not ratify it. The 21st Amendment repealed it in 1933."
    },
    {
      id: 1284,
      question: "The US Naval Academy has been in this state since its founding in 1845.",
      options: ["Maryland", "New York", "California", "Virginia"],
      correctAnswer: "Maryland",
      explanation: "Annapolis is the capital of Maryland and sits on the Chesapeake Bay. Which is handy for boats and subs."
    },
    {
      id: 1285,
      question: "The B&O railroad, the first common carrier railroad in the US, began operations in this state in 1830.",
      options: ["Maryland", "Utah", "Virginia", "Ohio"],
      correctAnswer: "Maryland",
      explanation: "It was the only railroad featured in Monopoly that did not directly serve Atlantic City."
    },
    {
      id: 1286,
      question: "The first dental college in the US was established in this state in 1840.",
      options: ["Maryland", "Pennsylvania", "New Jersey", "Alabama"],
      correctAnswer: "Maryland",
      explanation: "The Baltimore College of Dental Surgery is now known as the University of Maryland Dental School and was the birthplace of the DDS degree."
    },
    {
      id: 1287,
      question: "The Star Spangled Banner was written by Francis Scott Key after watching a naval battle in this state.",
      options: ["Maryland", "Virginia", "Connecticut", "Pennsylvania"],
      correctAnswer: "Maryland",
      explanation: "Key wrote the poem and set it to the music of \"To Anacreon in Heaven\", a song that spanned one and a half octaves. Which is why it's so easy to sing it well. Like"
    },
    {
      id: 1288,
      question: "This state's capitol building is the oldest one in continuous use, built in 1772.",
      options: ["Maryland", "New Jersey", "Delaware", "New Mexico"],
      correctAnswer: "Maryland",
      explanation: "Annapolis is also the only state capital to have served as the nation's capital, for a brief period from November 1783 to August 1784."
    },
    {
      id: 1289,
      question: "This state was the first one to adopt an official state exercise, walking, in 2008.",
      options: ["Maryland", "Missouri", "Arkansas", "Alabama"],
      correctAnswer: "Maryland",
      explanation: "Interestingly, Missouri adopted jumping jacks in 2014. Alabama has proposed 'chasing heathens' and Arkansas is considering 'muddin' as their respective state exercises."
    },
    {
      id: 1290,
      question: "Plymouth Rock is found in this state.",
      options: ["Massachusetts", "Connecticut", "Rhode Island", "New Hampshire"],
      correctAnswer: "Massachusetts",
      explanation: "While not referred to until 121 years after the 1620 landing of the Mayflower, it is still considered the symbolic site of the landing."
    },
    {
      id: 1291,
      question: "The nation's first public school was opened in this state.",
      options: ["Massachusetts", "New York", "Pennsylvania", "Virginia"],
      correctAnswer: "Massachusetts",
      explanation: "The Boston Latin School was founded in 1635 and was for boys only until 1972. It is a public school where entrance is determined by exam."
    },
    {
      id: 1292,
      question: "Have some cranberry juice and you'd be drinking the official state beverage of this state.",
      options: ["Massachusetts", "Louisiana", "Oregon", "Georgia"],
      correctAnswer: "Massachusetts",
      explanation: "While Wisconsin produces the most cranberries, Massachussets made it the official beverage in 1970."
    },
    {
      id: 1293,
      question: "Vulcanized rubber, as used in Goodyear tires, was developed in Woburn in this state in 1839.",
      options: ["Massachusetts", "Ohio", "Oklahoma", "Missouri"],
      correctAnswer: "Massachusetts",
      explanation: "Charles Goodyear accidentally dropped a mixture of rubber and sulfur in a frying pan, discovering a way to permanently harden the rubber."
    },
    {
      id: 1294,
      question: "The first subway in the US was built in a city in this state in 1897, a full 7 years before New York's first subway.",
      options: ["Massachusetts", "New Jersey", "Pennsylvania", "Maryland"],
      correctAnswer: "Massachusetts",
      explanation: "Boston's Tremont Street subway opened 7 years before New York's IRT line, which took 20 years of debate before approval."
    },
    {
      id: 1295,
      question: "In 1895, William Morgan invented volleyball at a YMCA in this state.",
      options: ["Massachusetts", "California", "Utah", "Illinois"],
      correctAnswer: "Massachusetts",
      explanation: "He originally called the game mintonette because of its similarities to badminton. And he most certainly did not invent volleyball shorts."
    },
    {
      id: 1296,
      question: "The basketball Hall of Fame is located in Springfield in this state, in honor of where the sport was invented.",
      options: ["Massachusetts", "Ohio", "Kentucky", "Illinois"],
      correctAnswer: "Massachusetts",
      explanation: "James Naismith invented the game in response to a particularly rowdy class that needed an indoor game to play during harsh New England winters."
    },
    {
      id: 1297,
      question: "This state has the greatest percentage of water-to-land, at 41.5%",
      options: ["Michigan", "Alaska", "Minnesota", "Florida"],
      correctAnswer: "Michigan",
      explanation: "While Alaska has the most total water surface, it only accounts for about 14% of the state area. And the famous \"10,000 lakes\" of Minnesota only cover about 8% of the land."
    },
    {
      id: 1298,
      question: "This state's official sport is wakeboarding, because it was so popular on the many large lakes.",
      options: ["Michigan", "Minnesota", "Florida", "Texas"],
      correctAnswer: "Michigan",
      explanation: "In wakeboarding, the rider stands on a short board with two bindings and is towed by a boat or other similar craft."
    },
    {
      id: 1299,
      question: "The largest stadium in the western hemisphere can be found in this state.",
      options: ["Michigan", "Pennsylvania", "Ohio", "Texas"],
      correctAnswer: "Michigan",
      explanation: "Known as \"The Big House\", the University of Michigan stadium in Ann Arbor seats over 107,000 people. Eight of the top 10 largest stadiums are in the US and are all used for college football."
    },
    {
      id: 1300,
      question: "The city of Battle Creek, nicknamed \"Cereal City\", is found in this state.",
      options: ["Michigan", "Ohio", "Minnesota", "Pennsylvania"],
      correctAnswer: "Michigan",
      explanation: "Battle Creek is the home of Kellogg's and is where Post cereals was founded."
    },
    {
      id: 1301,
      question: "This state is the only one with a floating zip code, one that is based on a boat.",
      options: ["Michigan", "Minnesota", "Ohio", "Louisiana"],
      correctAnswer: "Michigan",
      explanation: "The J.W.Westcott II is a boat that provides mail service to ships transiting the Detroit River, and has a zip code of 48222."
    },
    {
      id: 1302,
      question: "The 2nd largest crucifix in the world, known as Cross in the Woods, is found in this state.",
      options: ["Michigan", "Arkansas", "Mississippi", "Georgia"],
      correctAnswer: "Michigan",
      explanation: "At 55 ft (16.7 m) tall, it was surpassed in 1986 by a 60 ft (18.5m) crucifix in Kentucky."
    },
    {
      id: 1303,
      question: "The first underwater tunnel between two nations opened in this state in 1891, going from Port Huron to Sarnia.",
      options: ["Michigan", "New York", "Texas", "California"],
      correctAnswer: "Michigan",
      explanation: "It was the first full-sized sub-aqueous tunnel in North America and was 6,025 ft (1,836m) long. It was used for over 100 years until it was replaced in 1994."
    },
    {
      id: 1304,
      question: "In which state does the Mississippi River find its headwaters?",
      options: ["Minnesota", "Mississippi", "Wisconsin", "North Dakota"],
      correctAnswer: "Minnesota",
      explanation: "The 2nd longest river in North America starts in Lake Itasca and drains all or part of 32 states."
    },
    {
      id: 1305,
      question: "The Land of 10,000 Lakes is otherwise known as the state of ___.",
      options: ["Minnesota", "Florida", "Alaska", "Michigan"],
      correctAnswer: "Minnesota",
      explanation: "It actually has over 14,000 bodies of water of at least 10 acres (4 hectares) in size."
    },
    {
      id: 1306,
      question: "This state's unofficial nickname is the Gopher State, relating to a political cartoon from 1857 ridiculing a $5 million loan to railroad barons.",
      options: ["Minnesota", "Wisconsin", "West Virginia", "Kansas"],
      correctAnswer: "Minnesota",
      explanation: "Most humor in the 1850s revolved around gophers, I guess."
    },
    {
      id: 1307,
      question: "The Mall of America, the largest in the western hemisphere, is found in Bloomington in this state.",
      options: ["Minnesota", "Michigan", "Florida", "California"],
      correctAnswer: "Minnesota",
      explanation: "The Mall has over 11,000 employees, its own zip code, and has 2 hotels on the property."
    },
    {
      id: 1308,
      question: "Which of the following states DOES have a National Park?",
      options: ["Minnesota", "Delaware", "Alabama", "Connecticut"],
      correctAnswer: "Minnesota",
      explanation: "A national park was first proposed in 1891, but it wasn't until Richard Nixon signed a law in 1971 that Voyageurs National Park came into existence."
    },
    {
      id: 1309,
      question: "Masking tape, scotch tape and post-it notes were all invented in this state.",
      options: ["Minnesota", "Arkansas", "Virginia", "Montana"],
      correctAnswer: "Minnesota",
      explanation: "The 3M (Minnesota Mining and Manufacturing) Company was founded in 1902."
    },
    {
      id: 1310,
      question: "The world-renowned Mayo Clinic first opened in 1864 in Rochester, in this state.",
      options: ["Minnesota", "New Jersey", "New York", "Oregon"],
      correctAnswer: "Minnesota",
      explanation: "Dr William Mayo opened his clinic in Rochester, still the home of this pioneering medical group."
    },
    {
      id: 1311,
      question: "Elvis Presley was born in 1935 in this state.",
      options: ["Mississippi", "Tennessee", "Georgia", "Florida"],
      correctAnswer: "Mississippi",
      explanation: "Born in Tupelo in 1935, his family moved to Memphis when he was 13."
    },
    {
      id: 1312,
      question: "This state ranks 51st in healthcare and 2nd in obesity rates, as of 2023, according to the Commonwealth Fund.",
      options: ["Mississippi", "Alabama", "Arkansas", "Texas"],
      correctAnswer: "Mississippi",
      explanation: "With 40.1% of the state obese and the worst health care access and quality, it's a good thing there's no connection between the two."
    },
    {
      id: 1313,
      question: "Dr. James Hardy performed the world's first lung transplant in 1963 and the first heart transplant (using a chimp heart) in 1964 in this state.",
      options: ["Mississippi", "Tennessee", "Georgia", "New York"],
      correctAnswer: "Mississippi",
      explanation: "Both procedures occurred at the University of Mississippi Medical Center. The recipient of the heart lived for an hour before dying. The consent form did not indicate that a chimp heart might be used."
    },
    {
      id: 1314,
      question: "Henry Merrill, who made the first round-trip trans-Atlantic flight (from New York to London and back) in 1936, hailed from the small town of Iuka in this state.",
      options: ["Mississippi", "North Carolina", "North Dakota", "Hawaii"],
      correctAnswer: "Mississippi",
      explanation: "The flight is known as the \"Ping Pong flight\" because he and his co-pilot filled the plane with 41,000 ping pong balls, hoping they would keep the plane afloat if it went down in the ocean."
    },
    {
      id: 1315,
      question: "This was the last of the 36 states in existence at the time to ratify the 13th Amendment, which prohibited slavery.",
      options: ["Mississippi", "Alabama", "Arkansas", "Maine"],
      correctAnswer: "Mississippi",
      explanation: "The amendment passed in 1865. Mississippi did not ratify it until 1995, and because the state never notified the US Archivist, it was not officially certified until 2013."
    },
    {
      id: 1316,
      question: "The world's longest man-made beach, at 26 mi (42 km), is found on the Gulf Coast starting at Henderson Point in this state.",
      options: ["Mississippi", "Alabama", "Florida", "Texas"],
      correctAnswer: "Mississippi",
      explanation: "The section between Biloxi and Henderson Point was made in the 1950s to protect the seawall."
    },
    {
      id: 1317,
      question: "This state has the only city in the US sanctioned to hold the International Ballet Competition, the \"Olympics of Ballet\".",
      options: ["Mississippi", "New York", "Massachusetts", "Illinois"],
      correctAnswer: "Mississippi",
      explanation: "Jackson hosts the competition every 4 years. The other three host cities are Moscow, Helsinki and Varna, Bulgaria."
    },
    {
      id: 1318,
      question: "Iced tea became widely popular after it was introduced at the 1904 World's Fair in this state.",
      options: ["Missouri", "Illinois", "California", "New York"],
      correctAnswer: "Missouri",
      explanation: "St Louis held the fair to commemorate the centennial of the Louisiana Purchase in 1803."
    },
    {
      id: 1319,
      question: "The most powerful earthquakes east of the Rockies occurred along the New Madrid Seismic Zone in 1811-1812, which is named after the town of New Madrid in this state.",
      options: ["Missouri", "Tennessee", "Idaho", "Florida"],
      correctAnswer: "Missouri",
      explanation: "While the area at the time was sparsely populated, it is estimated that the quake could be felt over an area of 1 million square miles."
    },
    {
      id: 1320,
      question: "You can find the Mark Twain National Forest in this state, where Twain was born and raised.",
      options: ["Missouri", "Oklahoma", "Virginia", "Wisconsin"],
      correctAnswer: "Missouri",
      explanation: "Established in 1939, the forest is over 3,000,000 acres (12,000 sq km) and contains designated Wilderness and National Scenic River areas."
    },
    {
      id: 1321,
      question: "The original Anheuser-Busch brewery can still be found and toured in this state.",
      options: ["Missouri", "Texas", "Colorado", "New York"],
      correctAnswer: "Missouri",
      explanation: "The St Louis brewery opened in 1852 and produced over 483 million barrels of beer in 2018, and some of those barrels were even drinkable!"
    },
    {
      id: 1323,
      question: "The Pony Express used horse-mounted riders to deliver mail between California and this state, starting in 1860.",
      options: ["Missouri", "Virginia", "Maine", "Florida"],
      correctAnswer: "Missouri",
      explanation: "It operated for just 18 months in 1860-1861, and went bankrupt once the telegraph went into service in 1861. But it only took 10 days to get mail to California from Missouri, approximately 12 days faster than in 2024."
    },
    {
      id: 1324,
      question: "In 1892, Joseph Pulitzer offered Columbia University $2 million to set up the world's first school of journalism. They turned it down, and instead it was set up in this state.",
      options: ["Missouri", "New Mexico", "Connecticut", "Massachusetts"],
      correctAnswer: "Missouri",
      explanation: "The University of Missouri opened its journalism school in September 1908. Coincidentally, it is located in Columbia, MO."
    },
    {
      id: 1325,
      question: "Going to the Sun Road is found in Glacier National Park in this state",
      options: ["Montana", "Alaska", "Idaho", "Washington"],
      correctAnswer: "Montana",
      explanation: "The 50 mile long road is a National Historic Landmark, a National Historic Place and Historic Civil Engineering Landmark."
    },
    {
      id: 1326,
      question: "This state's official motto is \"Oro y plata\" (gold and silver) because of its significant mining history.",
      options: ["Montana", "Nevada", "California", "New Mexico"],
      correctAnswer: "Montana",
      explanation: "Copper was even more important to the state, but not discovered until the 1880s, 15 years after the motto was adopted."
    },
    {
      id: 1327,
      question: "The town of Loma in this state holds the world record for the greatest temperature rise in a 24 hour period (103 degrees change).",
      options: ["Montana", "Colorado", "New Mexico", "Florida"],
      correctAnswer: "Montana",
      explanation: "Thanks to a chinook wind, the town went from -54 F to +49 F on Jan 14-15, 1972, a change of 103 degrees."
    },
    {
      id: 1328,
      question: "This is the only state to share a land border with 3 Canadian provinces.",
      options: ["Montana", "Minnesota", "Alaska", "Ohio"],
      correctAnswer: "Montana",
      explanation: "It shares a border with British Columbia, Alberta and Saskatchewan provinces."
    },
    {
      id: 1329,
      question: "This state has a peak called Triple Divide (8,025 ft), because water from it flows into 3 different oceans.",
      options: ["Montana", "Wisconsin", "Wyoming", "Colorado"],
      correctAnswer: "Montana",
      explanation: "Water flows into the Pacific ocean via the Columbia River watershed; into the Mississippi River watershed and into the Gulf of Mexico and Atlantic ocean; and into the Nelson River watershed and on to Hudson Bay and the Arctic ocean."
    },
    {
      id: 1330,
      question: "The longest undammed river (the Yellowstone River) in the contiguous US empties into the Missouri River and is found primarily in this state.",
      options: ["Montana", "Colorado", "Wyoming", "Michigan"],
      correctAnswer: "Montana",
      explanation: "The Yellowstone is 692 mi (1,114km) long and has a watershed over 37,000 sq mi (96,000 sq km)."
    },
    {
      id: 1331,
      question: "This state's congressional House district has the largest population, with over 1.1 million people represented.",
      options: ["Montana", "Vermont", "Wyoming", "North Dakota"],
      correctAnswer: "Montana",
      explanation: "Each state gets a minimum of one Representative, based on total population and the total number of House seats delegated."
    },
    {
      id: 1332,
      question: "This state's two letter abbreviation is the only one that has changed since it was first introduced, because the original abberviation was getting confused with a province in Canada.",
      options: ["Nebraska", "Hawaii", "New Hampshire", "Missouri"],
      correctAnswer: "Nebraska",
      explanation: "The original designation was NB, but this was confused with New Brunswick in Canada, so it was changed to NE in 1969."
    },
    {
      id: 1333,
      question: "The College World Series has been held in the largest city in this state since 1950.",
      options: ["Nebraska", "New Hampshire", "Alaska", "Delaware"],
      correctAnswer: "Nebraska",
      explanation: "Omaha hosted the series in Rosenblatt Stadium from 1950-2010, and in TD Ameritrade Park since 2011."
    },
    {
      id: 1334,
      question: "Kool-Aid was invented in Hastings in this state in 1927, and originally called Fruit Smack.",
      options: ["Nebraska", "Illinois", "Kansas", "Pennsylvania"],
      correctAnswer: "Nebraska",
      explanation: "In 1927, Edwin Perkins discovered a way to remove the liquid from Fruit Smack, leaving only a powder, to save on shipping costs."
    },
    {
      id: 1335,
      question: "This state's Oto Indian name means 'flat water', referencing the Platte River in the state.",
      options: ["Nebraska", "Missouri", "Oklahoma", "Arkansas"],
      correctAnswer: "Nebraska",
      explanation: "The Platte is a tributary of the Missouri and was a major route for many westward emigrants."
    },
    {
      id: 1336,
      question: "Warren Buffet is the \"sage\" of the largest city in this state.",
      options: ["Nebraska", "Kansas", "Missouri", "Texas"],
      correctAnswer: "Nebraska",
      explanation: "He is also known as the Oracle of Omaha for his superb investment skills and was worth over $150 billion as of July4 2025."
    },
    {
      id: 1337,
      question: "Tourism to this state actually increased after introducing its new slogan, \"Honestly, it's not for everyone.\"",
      options: ["Nebraska", "Utah", "Idaho", "New Jersey"],
      correctAnswer: "Nebraska",
      explanation: "Sadly the slogan was ended in February 2024, and no replacement has been offered as of December 2024. A leading candidate is, \"Nebraska - just mid\"."
    },
    {
      id: 1338,
      question: "This is the only state with a unicameral (one legislative chamber) legislature.",
      options: ["Nebraska", "Iowa", "New Hampshire", "California"],
      correctAnswer: "Nebraska",
      explanation: "It is also the only state legislature that is non-partisan, with no party affiliation shown next to their names on the ballot."
    },
    {
      id: 1339,
      question: "Bailey Yard, the world's largest railroad yard, is found in North Platte in this state.",
      options: ["Nebraska", "Minnesota", "Arkansas", "North Dakota"],
      correctAnswer: "Nebraska",
      explanation: "Operated by the Union Pacific railroad, it is 8 miles (13km) long and 2 miles (3.2km) wide at its widest."
    },
    {
      id: 1340,
      question: "This was the 36th state admitted to the union, on Halloween 1864, just a few days before the election so the residents could help with Lincoln's re-election.",
      options: ["Nevada", "Colorado", "Utah", "New Mexico"],
      correctAnswer: "Nevada",
      explanation: "Although the state only had 10,000 residents, far fewer than the minimum 60,000 required for statehood at the time, it was believed that Lincoln would need their votes."
    },
    {
      id: 1341,
      question: "This state's name, in Spanish, means 'snow clad'",
      options: ["Nevada", "Alaska", "Montana", "Utah"],
      correctAnswer: "Nevada",
      explanation: "The Spanish explorers named the state after the snow-covered mountains, which reminded them of the Sierra Nevada mountains in Spain."
    },
    {
      id: 1342,
      question: "This state is the largest gold producer in the nation.",
      options: ["Nevada", "California", "Utah", "West Virginia"],
      correctAnswer: "Nevada",
      explanation: "Nevada is home to 7 of the top 10 US gold mines, and 3 of the world's top 10 mines."
    },
    {
      id: 1343,
      question: "Groom Lake or Homey Airport, where conspiracy theorists think UFOs are stored, is found in this state.",
      options: ["Nevada", "New York", "Utah", "California"],
      correctAnswer: "Nevada",
      explanation: "The US Air Force facility is informally known as Area 51, and is where alien life forms live and control the US government, the internet, and Hollywood."
    },
    {
      id: 1344,
      question: "This state has the ZIP code (89049) that covers the greatest land area in the lower 48 states, about 10,000 square miles.",
      options: ["Nevada", "Texas", "California", "Montana"],
      correctAnswer: "Nevada",
      explanation: "There are about 44,000 zip codes in the US, based on population density."
    },
    {
      id: 1345,
      question: "A city in this state has more hotel rooms than any other (as of 2024).",
      options: ["Nevada", "New York", "Florida", "California"],
      correctAnswer: "Nevada",
      explanation: "With over 150,000 rooms, Las Vegas has more than any other city on earth as of 2024."
    },
    {
      id: 1346,
      question: "The Comstock Lode, one of the largest silver deposits in the US, was found near Virginia City in 1859 in this state.",
      options: ["Nevada", "Virginia", "West Virginia", "California"],
      correctAnswer: "Nevada",
      explanation: "At the time, what would become Nevada was still part of the Utah Territory."
    },
    {
      id: 1347,
      question: "The Old Man of the Mountain, a stone formation in the White Mountains, broke off in a storm in 2003 in this state",
      options: ["New Hampshire", "New York", "Vermont", "Maine"],
      correctAnswer: "New Hampshire",
      explanation: "It was a series of 5 cliff ledges on Cannon Mountain, a popular site for rock and ice climbing and skiing."
    },
    {
      id: 1348,
      question: "This state is the only one to host the end of a foreign war (the Russo-Japanese War).",
      options: ["New Hampshire", "Maine", "California", "New Mexico"],
      correctAnswer: "New Hampshire",
      explanation: "The Treaty of Portsmouth in September 1905 ended the 18-month long conflict, and the defeats Russia suffered contributed to its long decline."
    },
    {
      id: 1349,
      question: "The first civilian in space, Christa McAuliffe, was a teacher in Concord in this state.",
      options: ["New Hampshire", "Massachusetts", "New Jersey", "Nevada"],
      correctAnswer: "New Hampshire",
      explanation: "She was on the ill-fated Challenger shuttle, which broke up 1 minute 13 seconds after launch in January 1986 due to a faulty O-ring. The entire crew of 7 was killed."
    },
    {
      id: 1350,
      question: "Which state recorded the highest non-tornado wind speed ever, at 231 mph, on April 12, 1934?",
      options: ["New Hampshire", "Colorado", "Alaska", "Hawaii"],
      correctAnswer: "New Hampshire",
      explanation: "The top of Mt Washington is only 6,288 ft but it regularly has some of the most severe weather in the world."
    },
    {
      id: 1351,
      question: "In what state would you find \"America's Stonehenge\", in the town of Salem?",
      options: ["New Hampshire", "Oregon", "Massachusetts", "Georgia"],
      correctAnswer: "New Hampshire",
      explanation: "It is estimated to be 4,000 years old, not much younger than the Stonehenge in England that dates to about 5,000 years ago."
    },
    {
      id: 1352,
      question: "This state's official fruit is the pumpkin, prompted by a grade school campaign, even though Illinois by far produces the most pumpkins of any state.",
      options: ["New Hampshire", "Hawaii", "Iowa", "Ohio"],
      correctAnswer: "New Hampshire",
      explanation: "Carving pumpkins for Halloween likely originates with the Irish myth of \"Stingy Jack\", a drunk doomed to wander the world forever caught between good and evil."
    },
    {
      id: 1353,
      question: "The Zach Braff movie Garden State is a reference to this state's nickname.",
      options: ["New Jersey", "Vermont", "Pennsylvania", "Delaware"],
      correctAnswer: "New Jersey",
      explanation: "The plot is derived from Braff's own experiences after his mother died."
    },
    {
      id: 1354,
      question: "The most densely populated state with the most roadway per square mile is ___.",
      options: ["New Jersey", "California", "New York", "Maryland"],
      correctAnswer: "New Jersey",
      explanation: "With over 1200 people AND 4.5 miles of road per square mile, Jersey truly is a nature-lover's paradise."
    },
    {
      id: 1355,
      question: "This state is home to the first drive-in movie theater, which opened in 1933 in Camden.",
      options: ["New Jersey", "Pennsylvania", "California", "Maine"],
      correctAnswer: "New Jersey",
      explanation: "Wives Beware, a British comedy also known as Two White Arms, was the first movie shown."
    },
    {
      id: 1356,
      question: "The first native American reservation, initially called Brotherton and now known as Indian Mills, was in this state in 1758.",
      options: ["New Jersey", "Oklahoma", "Pennsylvania", "Oregon"],
      correctAnswer: "New Jersey",
      explanation: "It was founded for the Lenape tribe, whose members were relocated mostly to Oklahoma under the Indian removal policies of the government at that time."
    },
    {
      id: 1357,
      question: "The first officially recorded baseball game was played in 1846 in Hoboken in this state",
      options: ["New Jersey", "Massachusetts", "Connecticut", "Ohio"],
      correctAnswer: "New Jersey",
      explanation: "The New York Nine defeated the New York Knickerbockers, 23-1 in 4 innings in Hoboken."
    },
    {
      id: 1358,
      question: "The street names of a city in this state provided the names of the properties in Monopoly.",
      options: ["New Jersey", "New York", "California", "Massachusetts"],
      correctAnswer: "New Jersey",
      explanation: "The famous place names of the game are based on the streets of Atlantic City."
    },
    {
      id: 1359,
      question: "This state ranks 47th in size, but first in population density.",
      options: ["New Jersey", "Delaware", "Rhode Island", "Vermont"],
      correctAnswer: "New Jersey",
      explanation: "With 1,218 people per square mile, NJ is over 1200 times more densely populated than Alaska."
    },
    {
      id: 1360,
      question: "The candy apple was invented in 1908 in Newark in this state.",
      options: ["New Jersey", "Delaware", "Florida", "Massachusetts"],
      correctAnswer: "New Jersey",
      explanation: "Candy apples are made by dipping apples in a mix of sugar, corn syrup, water, cinnamon and red food coloring."
    },
    {
      id: 1361,
      question: "The only state with no self-serve gasoline option (as of 2024) is ___.",
      options: ["New Jersey", "Oregon", "Utah", "Kentucky"],
      correctAnswer: "New Jersey",
      explanation: "Oregon was the other, but began allowing limited self serve in rural areas in 2015 and expanded it state wide in 2023."
    },
    {
      id: 1362,
      question: "This state contains the oldest and longest boardwalk in the world.",
      options: ["New Jersey", "California", "New York", "Florida"],
      correctAnswer: "New Jersey",
      explanation: "The Atlantic City boardwalk was first built in 1870 and is over 5 miles (8km) long, and has been rebuilt at least 5 times."
    },
    {
      id: 1363,
      question: "This state's capital is the highest, at 7,199 feet.",
      options: ["New Mexico", "Colorado", "Wyoming", "Alaska"],
      correctAnswer: "New Mexico",
      explanation: "Santa Fe was founded in 1610 and is only the 4th most populated city in the state."
    },
    {
      id: 1364,
      question: "The first atomic bomb was exploded in Alamogordo in this state, on July 6, 1945, as part of the Trinity program.",
      options: ["New Mexico", "Utah", "Arizona", "Hawaii"],
      correctAnswer: "New Mexico",
      explanation: "The Manhattan Project was a collaboration between the US, UK and Canada to develop the first nuclear weapon during WWII."
    },
    {
      id: 1365,
      question: "This state has the lowest water-to-land ratio, at 0.2%",
      options: ["New Mexico", "Arizona", "Utah", "Pennsylvania"],
      correctAnswer: "New Mexico",
      explanation: "Only 0.20% of the state is covered in water, followed by Arizona at 0.30%, PA at 2.8% and UT at 3.2%."
    },
    {
      id: 1366,
      question: "The oldest continuously occupied public building in the US, The Palace of the Governors, dates from 1610 and is in this state.",
      options: ["New Mexico", "Pennsylvania", "Massachusetts", "California"],
      correctAnswer: "New Mexico",
      explanation: "There are buildings that are centuries older, but they have been abandoned. The Palace served as the government seat of Santa Fe for centuries, and since 1909 has been the home of the Museum of New Mexico."
    },
    {
      id: 1367,
      question: "Smokey Bear was born in this state, after he was found stuck in a tree due to a forest fire in the Capitan Mountains.",
      options: ["New Mexico", "California", "Arizona", "Colorado"],
      correctAnswer: "New Mexico",
      explanation: "The original fire prevention ads used Disney's Bambi for a year in 1942, then a bear was chosen as the symbol in 1943."
    },
    {
      id: 1368,
      question: "This state is the only one with \"USA\" on its standard license plate",
      options: ["New Mexico", "New Jersey", "Delaware", "Texas"],
      correctAnswer: "New Mexico",
      explanation: "The letters were added in 1969 to help geography-challenged Americans (otherwise known as typical Americans) understand that the state was part of the US."
    },
    {
      id: 1369,
      question: "The largest hot air balloon festival in the world is held each October in a city in this state.",
      options: ["New Mexico", "California", "New York", "Florida"],
      correctAnswer: "New Mexico",
      explanation: "The International Balloon Fiesta in Albuquerque brings in over 600 balloons to participate in the 9-day event."
    },
    {
      id: 1370,
      question: "As of 2024, the only state to have hosted two Winter Olympics is ___.",
      options: ["New York", "Utah", "Colorado", "California"],
      correctAnswer: "New York",
      explanation: "Both were hosted in the small village of Lake Placid in the Adirondacks, in 1932 and 1980. Salt Lake is set to host the 2034 Winter Games, which will be its 2nd time."
    },
    {
      id: 1371,
      question: "The longest toll road in the US, the Dewey Thruway, is found in this state",
      options: ["New York", "California", "Pennsylvania", "Massachusetts"],
      correctAnswer: "New York",
      explanation: "With 570 miles over one mainline and 6 connectors, the average cost per mile to build it was $1.75 million."
    },
    {
      id: 1372,
      question: "The \"Miracle on Ice\", when the US beat the USSR in ice hockey at the Olympics, occurred in this state in 1980",
      options: ["New York", "Utah", "Vermont", "California"],
      correctAnswer: "New York",
      explanation: "Lake Placid saw the US beat the USSR, 4-3, in one of the most iconic wins in all of sport, to advance to the gold medal match against Finland (which the US won)."
    },
    {
      id: 1373,
      question: "This state has a subway system with one line that is over 31 miles long",
      options: ["New York", "Massachusetts", "California", "Pennsylvania"],
      correctAnswer: "New York",
      explanation: "The A train runs from 207th St in Manhattan to Far Rockaway in Queens, and costs $2.90 as of 2024."
    },
    {
      id: 1374,
      question: "This state is home to the world's smallest church, Cross Island Chapel",
      options: ["New York", "Rhode Island", "Delaware", "Idaho"],
      correctAnswer: "New York",
      explanation: "It sits on a platform in a lake in Oneida, and is 51 inches long by 81 inches wide."
    },
    {
      id: 1375,
      question: "Modern commercial toilet paper was invented in this state in 1857, with JC Gayetty selling his \"Medicated Paper for the Water Closet\"",
      options: ["New York", "Idaho", "Pennsylvania", "South Carolina"],
      correctAnswer: "New York",
      explanation: "Prior to that, people improvised with things like corn cobs, newspapers and 'wiping stones'."
    },
    {
      id: 1376,
      question: "America's oldest cattle ranch (now part of Suffolk County parks) is found in this state.",
      options: ["New York", "Virginia", "Wyoming", "Texas"],
      correctAnswer: "New York",
      explanation: "Deep Hollow Ranch in Montauk was pasturing cattle starting in the 1650s."
    },
    {
      id: 1377,
      question: "This state has the largest park in the lower 48, at over 6,000,000 acres (9,375 sq mi).",
      options: ["New York", "California", "Wyoming", "Montana"],
      correctAnswer: "New York",
      explanation: "Adirondack Park is protected under an 1885 state law that ensures it will stay \"forever wild\"."
    },
    {
      id: 1378,
      question: "The first state to require license plates on cars was ___, in 1901, and they were handmade by the car owner",
      options: ["New York", "California", "Ohio", "Michigan"],
      correctAnswer: "New York",
      explanation: "They were typically made of leather or metal and had the owner's initials on them. The state had 954 cars at that time."
    },
    {
      id: 1379,
      question: "This state has the nation's first department store, Arnold Constable and Co, which operated from 1825 until 1975.",
      options: ["New York", "New Jersey", "Utah", "Florida"],
      correctAnswer: "New York",
      explanation: "It was where the rich and elite of the city shopped and was known as the \"Palace of Trade\", but over time fell victim to the growth of malls."
    },
    {
      id: 1380,
      question: "An amusement park in this state was home to America's first roller coaster in 1884, going 6 miles an hour and costing a nickel.",
      options: ["New York", "Massachusetts", "Ohio", "Texas"],
      correctAnswer: "New York",
      explanation: "Coney Island drew 1 million visitors per day at its peak in the 1920s, as it was accessible by subway. A ride now costs $10."
    },
    {
      id: 1381,
      question: "This state has the most Ivy League schools, with two of the 8 schools located here.",
      options: ["New York", "Pennsylvania", "Massachusetts", "Rhode Island"],
      correctAnswer: "New York",
      explanation: "Columbia and Cornell are both in New York."
    },
    {
      id: 1382,
      question: "The first state to pass a mandatory seat belt law, in 1984, was ________",
      options: ["New York", "California", "Delaware", "Utah"],
      correctAnswer: "New York",
      explanation: "Seat belt laws are up to individual states, and New Hampshire still has no mandatory seat belt law for adults as of 2025."
    },
    {
      id: 1383,
      question: "The first successful flight by the Wright Brothers occurred at Kitty Hawk in this state",
      options: ["North Carolina", "Ohio", "Virginia", "Pennsylvania"],
      correctAnswer: "North Carolina",
      explanation: "The first controlled powered flights were at what are now called Kill Devil Hills, a few miles south of town, in 1903."
    },
    {
      id: 1384,
      question: "Krispy Kreme donuts were founded in \"Old Salem\" in this state in 1937.",
      options: ["North Carolina", "Massachusetts", "Oregon", "New Jersey"],
      correctAnswer: "North Carolina",
      explanation: "Vernon Rudolph bought a yeast-raised recipe from a New Orleans baker and first began selling to grocery stores."
    },
    {
      id: 1385,
      question: "Thistle Dhu, the first commercial mini-golf course, was opened in 1919 in Pinehurst in this state.",
      options: ["North Carolina", "New Jersey", "California", "Florida"],
      correctAnswer: "North Carolina",
      explanation: "After it was completed, the owner allegedly looked out upon the course and stated, \"This'll do\", giving rise to its name."
    },
    {
      id: 1386,
      question: "The largest privately owned home, the Biltmore Estate, was built by George Vanderbilt and is located in this state.",
      options: ["North Carolina", "California", "New York", "Florida"],
      correctAnswer: "North Carolina",
      explanation: "It is 178,962 sq ft (16,622 sq m), has 250 rooms, cost about $6 million to build, and is still owned by the Vanderbilts."
    },
    {
      id: 1387,
      question: "Introduced as \"Brad's Drink\" in 1893 and invented in this state, it went on to become Pepsi Cola, the biggest rival of Coke.",
      options: ["North Carolina", "New Jersey", "Utah", "Iowa"],
      correctAnswer: "North Carolina",
      explanation: "It contained the digestive enzyme pepsin as well as cola nut, likely leading to its new name."
    },
    {
      id: 1388,
      question: "They Might Be Giants wrote a song about James K Polk, the 11th president, who was born in Pineville in this state.",
      options: ["North Carolina", "Ohio", "Pennsylvania", "Tennessee"],
      correctAnswer: "North Carolina",
      explanation: "The two founders of TMBG knew each others as teens in Lincoln, MA and then reunited when they coincidentally moved into the same Brooklyn apartment on the same day in 1981."
    },
    {
      id: 1389,
      question: "Which state has stock car racing as its official sport?",
      options: ["North Carolina", "Tennessee", "Florida", "New York"],
      correctAnswer: "North Carolina",
      explanation: "Initially the cars were production models that went around an oval track, but the cars now are specifically engineered for racing. And still go around an oval track. Wheee!"
    },
    {
      id: 1390,
      question: "Mount Mitchell, in this state, is the tallest point (6,684 ft, 2,037m) east of the Mississippi.",
      options: ["North Carolina", "New York", "Maine", "Georgia"],
      correctAnswer: "North Carolina",
      explanation: "The tomb of Elisha Mitchell is on the summit, a University of North Carolina professor who explored the area in 1835."
    },
    {
      id: 1391,
      question: "60% of all furniture made in the US comes from within a 125 mile radius of the town of High Point in this state.",
      options: ["North Carolina", "California", "Georgia", "Michigan"],
      correctAnswer: "North Carolina",
      explanation: "The city had access to cheap labor, good transportation and the large hardwood forests in the center of the state."
    },
    {
      id: 1392,
      question: "This is the only state with an official state toast, based on a poem called \"The Old North State\" written in 1904.",
      options: ["North Carolina", "Virginia", "North Dakota", "New Mexico"],
      correctAnswer: "North Carolina",
      explanation: "Written by Leonora Martin, it was turned into a song in the 1930s, and begins \"Here's the land of the long leaf pine\"."
    },
    {
      id: 1393,
      question: "The geographic center of North America is found in this state",
      options: ["North Dakota", "Colorado", "Missouri", "Iowa"],
      correctAnswer: "North Dakota",
      explanation: "The actual geogrpahic center is about 100 miles south of Rugby, based on current calculations, but Rugby is holding fast to its claim."
    },
    {
      id: 1394,
      question: "The tallest man-made structure in the western hemisphere is a 2,063 foot (629 m) TV mast just west of Blanchard, in this state.",
      options: ["North Dakota", "Ohio", "New York", "Colorado"],
      correctAnswer: "North Dakota",
      explanation: "There is an oil rig tower in the Gulf of Mexico that is a little taller, but all but 246 ft (75 m) are supported under water."
    },
    {
      id: 1395,
      question: "Due to a technical error in its state constitution, this state was theoretically still a territory until 2012, when it finally became a state",
      options: ["North Dakota", "Idaho", "Texas", "Alaska"],
      correctAnswer: "North Dakota",
      explanation: "While admitted to the Union in 1889, because of the absence of one word from its constitution, it technically was not a state until that omission was fixed."
    },
    {
      id: 1396,
      question: "The only national park named after a single person, Theodore Roosevelt National Park, is located in this state.",
      options: ["North Dakota", "Washington", "Idaho", "New York"],
      correctAnswer: "North Dakota",
      explanation: "Roosevelt first went to North Dakota in 1883 and his time in the state was key to his later conservation efforts as President."
    },
    {
      id: 1397,
      question: "This state produces more honey than any other, at over 38,000,000 pounds (17.2 million kg) in 2020.",
      options: ["North Dakota", "California", "New York", "Arkansas"],
      correctAnswer: "North Dakota",
      explanation: "It has more than double the production of the runner-up state, South Dakota. Haha, suck it, SoDak!"
    },
    {
      id: 1398,
      question: "The only government-owned general services bank (meaning, it is a bank that the general public can use) in the US is found in this state.",
      options: ["North Dakota", "Alaska", "Delaware", "Hawaii"],
      correctAnswer: "North Dakota",
      explanation: "The Bank of North Dakota was founded in 1909 and has been profitable every year since, and those profits either fund development projects or go into the state's general fund."
    },
    {
      id: 1399,
      question: "This state has a Pharmacy Ownership Law that means pharmacies must be at least 51% owned by pharmacists, meaning the big chains do not operate there.",
      options: ["North Dakota", "Hawaii", "Utah", "Pennsylvania"],
      correctAnswer: "North Dakota",
      explanation: "The state does have some CVS stores that were in existence before the law passed in 1963. It also has one Walgreens that cannot dispense prescription meds."
    },
    {
      id: 1400,
      question: "The world's largest scrap metal sculpture (Geese in Flight) was made by Gary Greff in 2001 in this state, on a road running between Regent and Gladstone south of I-94.",
      options: ["North Dakota", "Ohio", "Maine", "Florida"],
      correctAnswer: "North Dakota",
      explanation: "At 110 ft (33m) tall and 154 ft (47m) wide, it is part of a series of 8 sculptures on the 32 mile (51 km) long \"Enchanted Highway\"."
    },
    {
      id: 1401,
      question: "A city (at one point nicknamed 'the mistake on the lake') in this state was the first to be lit by electric lights, in 1879.",
      options: ["Ohio", "Pennsylvania", "Wisconsin", "Indiana"],
      correctAnswer: "Ohio",
      explanation: "Cleveland had 12 lights installed around the Public Square as a test of the newly developed electric lights."
    },
    {
      id: 1402,
      question: "The first traffic light in the US was installed in 1914 in this state",
      options: ["Ohio", "Massachusetts", "Oklahoma", "Alabama"],
      correctAnswer: "Ohio",
      explanation: "The first person to run a red light occurred 6 minutes after this light was installed."
    },
    {
      id: 1403,
      question: "The first professional, paid baseball team, the Red Stockings, was established in 1869 in this state, and eventually became the Atlanta Braves.",
      options: ["Ohio", "Pennsylvania", "Massachusetts", "Georgia"],
      correctAnswer: "Ohio",
      explanation: "The Red Socks were a founding member of the National League in 1876 in Cincinnati, but played one season there before moving to Boston for 83 years, then Milwaukee for 12 years, and finally Atlanta since 1966."
    },
    {
      id: 1404,
      question: "The Rock and Roll Hall of Fame can be found in this state",
      options: ["Ohio", "New York", "California", "New Mexico"],
      correctAnswer: "Ohio",
      explanation: "The museum was designed by I.M. Pei and was sited in Cleveland in part because local DJ Alan Freed coined the term 'rock and roll' in the 1950s. It had nothing to do with the city's pledge of $65 million in public money to fund construction."
    },
    {
      id: 1405,
      question: "The Pro Football Hall of Fame is located in Canton in this state",
      options: ["Ohio", "Florida", "New York", "Texas"],
      correctAnswer: "Ohio",
      explanation: "Canton was where what would become the NFL was founded in 1920."
    },
    {
      id: 1406,
      question: "The first man to walk on the moon (in July 1969), Neil Armstrong, hailed from Wapakoneta in this state.",
      options: ["Ohio", "Oklahoma", "Minnesota", "Pennsylvania"],
      correctAnswer: "Ohio",
      explanation: "In 1985, he was part of a group including Edmund Hillary, Steve Fossett and Patrick Morrow that went to the North Pole."
    },
    {
      id: 1407,
      question: "This state's flag is the only one that is not a rectangular design, and is known as a \"burgee\"",
      options: ["Ohio", "Minnesota", "Arkansas", "Kansas"],
      correctAnswer: "Ohio",
      explanation: "It is a triangular swallowtail flag, and has an official 17-step folding process, symbolizing that it was the 17th state in the Union."
    },
    {
      id: 1408,
      question: "The first co-educational college, Oberlin, in the US is in this state",
      options: ["Ohio", "New Jersey", "Vermont", "Michigan"],
      correctAnswer: "Ohio",
      explanation: "The town of Oberlin is also where the Anti-Saloon League was founded in 1893, which was a major force behind Prohibition."
    },
    {
      id: 1409,
      question: "Thomas Edison was born in Milan in this state in 1847, but grew up in Michigan",
      options: ["Ohio", "New Jersey", "New York", "Mississippi"],
      correctAnswer: "Ohio",
      explanation: "Edison had 1,093 US patents in his name, and 2,332 patents worldwide."
    },
    {
      id: 1410,
      question: "The Olympic gold medalist Jesse Owens was born in Alabama but grew up in this state when his family moved north for better opportunities.",
      options: ["Ohio", "California", "Kentucky", "Minnesota"],
      correctAnswer: "Ohio",
      explanation: "At a 1935 track meet in Ann Arbor, MI, he broke 3 world records and tied a fourth, all in less than an hour, in a feat known as the \"greatest 45 minutes ever in sport.\""
    },
    {
      id: 1411,
      question: "This state is known as the Buckeye state, named after a common tree in the area",
      options: ["Ohio", "Kansas", "Nebraska", "Illinois"],
      correctAnswer: "Ohio",
      explanation: "Buckeye candy is made from peanut butter fudge partially dipped in chocolate and is made to look like a buckeye seed."
    },
    {
      id: 1412,
      question: "Which state's first permanent settlement was named Marietta, after Marie Antoinette?",
      options: ["Ohio", "Georgia", "Iowa", "Connecticut"],
      correctAnswer: "Ohio",
      explanation: "She ordered that France help the US in its battle for independence from Britain."
    },
    {
      id: 1413,
      question: "The world's first parking meter was installed in this state in July 1935.",
      options: ["Oklahoma", "New Jersey", "California", "Ohio"],
      correctAnswer: "Oklahoma",
      explanation: "The first contested parking ticket was issued a month later to Rev. C.H. North, a preacher claiming he went into a store to get change for the meter. A judge dismissed the ticket, possibly the last time that excuse worked."
    },
    {
      id: 1414,
      question: "The National Cowboy Hall of Fame is located in this state",
      options: ["Oklahoma", "Pennsylvania", "New Jersey", "Wyoming"],
      correctAnswer: "Oklahoma",
      explanation: "The museum has the world's most extensive collection of rodeo photographs as well as one of the largest barbed wire collections."
    },
    {
      id: 1415,
      question: "The first shopping cart was introduced at the Humpty Dumpty store in this state in 1937",
      options: ["Oklahoma", "North Carolina", "South Carolina", "Virgina"],
      correctAnswer: "Oklahoma",
      explanation: "It took a while for customers to accept Sylvan Goldman's invention, as women thought it was too much like pushing a baby carriage."
    },
    {
      id: 1416,
      question: "The only state with an official state meal is _____, and includes chicken fried steak, barbecue pork, sausage and gravy.",
      options: ["Oklahoma", "Virginia", "Georgia", "Alabama"],
      correctAnswer: "Oklahoma",
      explanation: "It also includes fried okra, squash, cornbread, grits, corn, black-eyed peas, strawberries, and pecan pie. The ensuing cardiac event is just a bonus."
    },
    {
      id: 1417,
      question: "This state's state vegetable is actually the watermelon, a fruit, because the spot of state fruit was already claimed by the strawberry.",
      options: ["Oklahoma", "Arizona", "Washington", "Alaska"],
      correctAnswer: "Oklahoma",
      explanation: "A watermelon is a type of berry called a pepo, meaning it produces a large amount of seeds and has a tough outer skin."
    },
    {
      id: 1418,
      question: "This state is where Garth Brooks, the artist with the most diamond-status (10 million or more copies) records, grew up.",
      options: ["Oklahoma", "Tennessee", "California", "Louisiana"],
      correctAnswer: "Oklahoma",
      explanation: "Garth Brooks has more diamond certified albums (9) than any other performer, including the Beatles and Led Zeppelin. He has lived in TN since 1990, but was born and grew up in OK."
    },
    {
      id: 1419,
      question: "This is the only state capital with an oil well underneath it, even though it ran dry in 1986.",
      options: ["Oklahoma", "Alaska", "California", "Louisiana"],
      correctAnswer: "Oklahoma",
      explanation: "The well, known as Petunia #1 because it was drilled through a flower bed, produced over 1.5 million barrels of oil during its life."
    },
    {
      id: 1420,
      question: "This state produces the most hazelnuts of any state in the US",
      options: ["Oregon", "Vermont", "California", "Arizona"],
      correctAnswer: "Oregon",
      explanation: "Also known as filberts, Turkey produces about 70% of the world's hazelnuts. Oregon produces 99% of the US crop."
    },
    {
      id: 1421,
      question: "The Lewis and Clark expedition officially reached the Pacific Ocean in this state in 1805.",
      options: ["Oregon", "California", "Washington", "Virginia"],
      correctAnswer: "Oregon",
      explanation: "Astoria is the oldest city in Oregon and the first American settlement west of the Rockies. It is also where Goonies was filmed."
    },
    {
      id: 1422,
      question: "This is the only state with a flag that has a different design on each side, with one side having the state mammal.",
      options: ["Oregon", "Montana", "Illinois", "Maine"],
      correctAnswer: "Oregon",
      explanation: "The front side has the state seal, and the reverse has a beaver."
    },
    {
      id: 1423,
      question: "The deepest lake in the US is found in this state",
      options: ["Oregon", "Michigan", "Pennsylvania", "Ohio"],
      correctAnswer: "Oregon",
      explanation: "Crater Lake has no inlet or outlet rivers, is 1,949 ft (594m) deep, and 9th deepest in the world."
    },
    {
      id: 1424,
      question: "The deepest river gorge in the US is found on the border of Idaho and this state.",
      options: ["Oregon", "Montana", "Wyoming", "Nevada"],
      correctAnswer: "Oregon",
      explanation: "Hell's Canyon is 7,993 ft (2,436m) deep (1,800 ft deeper than the Grand Canyon) and is carved by the Snake River."
    },
    {
      id: 1425,
      question: "The largest sea cave in the US is found in this state",
      options: ["Oregon", "Hawaii", "California", "Alaska"],
      correctAnswer: "Oregon",
      explanation: "At 1,315 ft (400m), it is the longest sea cave in the US and is the only known mainland rookery for the Steller's sea lion."
    },
    {
      id: 1426,
      question: "The largest clear-span wooden structure in the world housed blimps during WWII in this state",
      options: ["Oregon", "Colorado", "Florida", "New York"],
      correctAnswer: "Oregon",
      explanation: "At 1,072 ft (327m) long, 296 ft (90m) wide and 192 ft (59m) tall, hangar B of Naval Air Station Tillamook was built to house blimps during WWII."
    },
    {
      id: 1427,
      question: "In which state would you find Powell's City of Books, the largest independent bookstore in the world?",
      options: ["Oregon", "New York", "Massachusetts", "Georgia"],
      correctAnswer: "Oregon",
      explanation: "Founded in 1971 by Michael Powell, the City of Books flagship store has 68,000 sq ft and 3,500 different sections."
    },
    {
      id: 1428,
      question: "One of the state universities of this state uses orange as one of its colors (the other being black) in honor of the tooth color of its mascot (which is also the state mammal).",
      options: ["Oregon", "Minnesota", "Wisconsin", "Ohio"],
      correctAnswer: "Oregon",
      explanation: "Beavers are the second largest rodent and they have orange teeth due to iron-rich enamel."
    },
    {
      id: 1429,
      question: "The nation's first commercial oil well was in this state in 1859",
      options: ["Pennsylvania", "Texas", "California", "New York"],
      correctAnswer: "Pennsylvania",
      explanation: "The Drake Well outside Titusville was 69 ft (21m) deep and was the first that was drilled specifically to obtain oil."
    },
    {
      id: 1430,
      question: "This state has 2 of the original teams that formed what became Major League Baseball.",
      options: ["Pennsylvania", "Indiana", "New York", "Ohio"],
      correctAnswer: "Pennsylvania",
      explanation: "The Pittsburgh Pirates were formed in 1882 and the Philadelphia Phillies started in 1883."
    },
    {
      id: 1431,
      question: "The chocolate capital of the US is in Hershey, in this state",
      options: ["Pennsylvania", "Connecticut", "Massachusetts", "Indiana"],
      correctAnswer: "Pennsylvania",
      explanation: "Milton Hershey also founded a private school for 'impoverished children' and it has a $17 billion endowment, making it the wealthiest private K-12 school in the US."
    },
    {
      id: 1432,
      question: "ENIAC, the first programmable electronic computer, was made in this state in 1946",
      options: ["Pennsylvania", "Massachusetts", "New York", "New Jersey"],
      correctAnswer: "Pennsylvania",
      explanation: "Designed at the University of Pennsylvania to help the Army calculate artillery firing tables, it cost about $6 million in current dollars."
    },
    {
      id: 1433,
      question: "The nation's first daily newspaper came out in 1784 in this state",
      options: ["Pennsylvania", "Delaware", "Virginia", "California"],
      correctAnswer: "Pennsylvania",
      explanation: "The Pennsylvania Packet and Daily Advertiser started daily publication in September of that year."
    },
    {
      id: 1434,
      question: "Myth holds that he first American flag was made by Betsy Ross in this state in 1776.",
      options: ["Pennsylvania", "New York", "New Jersey", "Virginia"],
      correctAnswer: "Pennsylvania",
      explanation: "Ross did make flags for the Pennsylvania Navy, but there is no solid evidence that she made any official US flag. The first official 'stars and stripes' was designed by Francis Hopkinson of New Jersey in 1777."
    },
    {
      id: 1435,
      question: "The longest stone arch bridge in the world, the Rockville Bridge, was built in 1902 and is found in this state.",
      options: ["Pennsylvania", "New Mexico", "Maryland", "Washington"],
      correctAnswer: "Pennsylvania",
      explanation: "It is 3,820 ft (1,160m) long and crosses the Susquehanna River, and is still in use by the Norfolk Southern Railway and Amtrak."
    },
    {
      id: 1436,
      question: "The world's first commercial radio station went on the air in 1920 in this state.",
      options: ["Pennsylvania", "Massachusetts", "Rhode Island", "South Carolina"],
      correctAnswer: "Pennsylvania",
      explanation: "While other stations were operating at the time, KDKA in Pittsburgh was the first to go on the air as a licensed commercial station."
    },
    {
      id: 1437,
      question: "This state is the only one of the 13 original colonies not bordered by the Atlantic Ocean.",
      options: ["Pennsylvania", "Ohio", "Vermont", "West Virginia"],
      correctAnswer: "Pennsylvania",
      explanation: "OH, VT and WV, while not bordering the Atlantic, were also not part of the original 13 colonies."
    },
    {
      id: 1438,
      question: "The first public zoo in the US was founded in this state in 1874 and is still operating today.",
      options: ["Pennsylvania", "Missouri", "Washington", "New York"],
      correctAnswer: "Pennsylvania",
      explanation: "The Philadelphia Zoo was founded in 1859, but did not officially open until 1874 due to the Civil War, but it was still the first of its kind in the US."
    },
    {
      id: 1439,
      question: "The first Little League World Series was held in this state in 1946, and is still held there every August.",
      options: ["Pennsylvania", "New Jersey", "Ohio", "New York"],
      correctAnswer: "Pennsylvania",
      explanation: "Originally called the National Little League Tournament, it has been held since 1947 in South Williamsport."
    },
    {
      id: 1440,
      question: "The first driver's education class was taught in this state in 1934.",
      options: ["Pennsylvania", "New Jersey", "Massachusetts", "Nebraska"],
      correctAnswer: "Pennsylvania",
      explanation: "And Pennsylvania drivers have been the best in the country ever since..."
    },
    {
      id: 1441,
      question: "Zippo lighters were developed and made in Bradford in this state",
      options: ["Pennsylvania", "California", "Texas", "North Carolina"],
      correctAnswer: "Pennsylvania",
      explanation: "They have been made there since 1933, and the founder liked the word 'zipper' but thought 'zippo' sounded more modern."
    },
    {
      id: 1442,
      question: "This state forms the northern border of the Mason-Dixon line",
      options: ["Pennsylvania", "Virginia", "Maryland", "North Carolina"],
      correctAnswer: "Pennsylvania",
      explanation: "Originally made to end a boundary dispute between two British colonies, it came to denote the separation between southern slave states and northern free states."
    },
    {
      id: 1443,
      question: "The weather-predicting groundhog Punxsutawney Phil lives in this state",
      options: ["Pennsylvania", "Vermont", "Maine", "Michigan"],
      correctAnswer: "Pennsylvania",
      explanation: "Each February 2, if he sees his shadow from his temporary home on Gobbler's Knob, there will be 6 more weeks of people complaining about completely typical winter weather."
    },
    {
      id: 1444,
      question: "The towns of Blue Ball, Bird In Hand, Intercourse and Pleasureville are all found in this state",
      options: ["Pennsylvania", "New York", "Wisconsin", "Minnesota"],
      correctAnswer: "Pennsylvania",
      explanation: "All these towns are found in Pennsylvania Dutch country, which has a high population of apparently sex-obsessed Amish."
    },
    {
      id: 1445,
      question: "A city in this state is known for its cheesesteak sandwiches, often credited to brothers Pat and Harry Olivieri.",
      options: ["Pennsylvania", "New York", "New Jersey", "Louisiana"],
      correctAnswer: "Pennsylvania",
      explanation: "In Philadelphia, families are divided and friendships are made or broken over whether one prefers their cheesesteak from Pat's or Geno's."
    },
    {
      id: 1446,
      question: "You can visit the Big Mac museum in this state, where the sandwich was invented in 1967.",
      options: ["Pennsylvania", "Illinois", "California", "Wisconsin"],
      correctAnswer: "Pennsylvania",
      explanation: "It was created by Jim Delligatti in Pittsburgh, who was operating a number of McDonald's franchises, and was originally called The Aristocrat, then the Blue RIbbon Burger."
    },
    {
      id: 1447,
      question: "The oldest surviving roadway bridge in the US, built in 1697, crosses Pennypack Creek in this state.",
      options: ["Pennsylvania", "New York", "Connecticut", "Oklahoma"],
      correctAnswer: "Pennsylvania",
      explanation: "The Frankford Avenue bridge has 3 spans and is 73 ft (22m) long and was built to connect William Penn's mansion to the city of Philadelphia."
    },
    {
      id: 1448,
      question: "The oldest funicular railway, overlooking the Monongahela River, is found in this state.",
      options: ["Pennsylvania", "Ohio", "New Jersey", "Colorado"],
      correctAnswer: "Pennsylvania",
      explanation: "A funicular has two counterbalanced rail cars that climb a steep track."
    },
    {
      id: 1449,
      question: "After 2 trains collided head-on in this state in 1853 due to engineers having the wrong time, the 4 continental time zones were created.",
      options: ["Rhode Island", "New Jersey", "Utah", "California"],
      correctAnswer: "Rhode Island",
      explanation: "It still took 30 years for the railroads to adopt the 4 continental time zones, and it wasn't until 1918 that Congress made it national."
    },
    {
      id: 1450,
      question: "The smallest state by land area is this state",
      options: ["Rhode Island", "Delaware", "Hawaii", "Texas"],
      correctAnswer: "Rhode Island",
      explanation: "Delaware is second smallest in area, Texas is second largest."
    },
    {
      id: 1451,
      question: "The tennis Hall of Fame is located in Newport in this state",
      options: ["Rhode Island", "Connecticut", "Massachusetts", "New York"],
      correctAnswer: "Rhode Island",
      explanation: "The site in Newport was a former resort for the wealthy and hosted the first US Lawn Tennis championship in 1881."
    },
    {
      id: 1452,
      question: "The oldest tavern in the US is found in this state, operating since 1673.",
      options: ["Rhode Island", "Pennsylvania", "New York", "Delaware"],
      correctAnswer: "Rhode Island",
      explanation: "The White Horse Tavern in Newport has been operating since 1673 in a building that was built in 1652 and originally used as a home."
    },
    {
      id: 1453,
      question: "The Quonset hut was developed at Quonset Point in this state",
      options: ["Rhode Island", "Washington", "Florida", "Georgia"],
      correctAnswer: "Rhode Island",
      explanation: "In 1941 the US Navy needed a cheap, all-purpose structure, and between 150,000 and 170,000 of the semi-cylindrical structures were built during WWII."
    },
    {
      id: 1454,
      question: "This colony (state) was the first to declare independence from Britain, on May 4, 1776, and yet the last to ratify the Constitution.",
      options: ["Rhode Island", "Delaware", "Virginia", "Pennsylvania"],
      correctAnswer: "Rhode Island",
      explanation: "The state ratified the Constitution in 1790 under threats of tariffs by the other former colonies."
    },
    {
      id: 1455,
      question: "Which state has an official appetizer, of calamari?",
      options: ["Rhode Island", "Louisiana", "Hawaii", "Florida"],
      correctAnswer: "Rhode Island",
      explanation: "The state claims to have the largest squid fishing fleet in the nation."
    },
    {
      id: 1456,
      question: "The first battle of the Civil War took place at Fort Sumter in this state.",
      options: ["South Carolina", "Virginia", "Maryland", "Pennsylvania"],
      correctAnswer: "South Carolina",
      explanation: "The fort was originally begun in 1829 as a defense against a foreign navy, but in 1861 it was attacked by the South Carolina militia to start the Civil War."
    },
    {
      id: 1457,
      question: "This was the first state to secede from the Union, on Dec 20, 1860.",
      options: ["South Carolina", "Delaware", "Tennessee", "Kansas"],
      correctAnswer: "South Carolina",
      explanation: "Over the following 6 months, 10 other states would join South Carolina to form the Confederate States of America."
    },
    {
      id: 1458,
      question: "Morgan Island, aka Monkey Island, found off the coast of this state, is the only island in the US inhabited entirely by about 3,500 rhesus monkeys.",
      options: ["South Carolina", "Michigan", "California", "North Dakota"],
      correctAnswer: "South Carolina",
      explanation: "The original colony of 1,400 monkeys was moved from a research lab in Puerto Rico in 1979 because they were spreading disease to humans."
    },
    {
      id: 1459,
      question: "The longest single-person filibuster in history was given by Strom Thurmond, a segregationist Senator from this state.",
      options: ["South Carolina", "Utah", "Texas", "Louisiana"],
      correctAnswer: "South Carolina",
      explanation: "He talked for 24 hours and 18 minutes in opposition to the Civil Rights Act in 1957. He represented the state for 48 years until he died at age 100. Cory Booker spoke for over 25 hours in April 2025, but it was not technically a filibuster."
    },
    {
      id: 1460,
      question: "This is the only state with a state-run school bus system, begun in the 1950s when its schools were being integrated.",
      options: ["South Carolina", "California", "New Mexico", "Colorado"],
      correctAnswer: "South Carolina",
      explanation: "One version of why the state does this is that they were trying to ensure equality among all students."
    },
    {
      id: 1461,
      question: "The \"Godfather of Soul\", James Brown, was born in this state in 1933 and lived here until he was 5.",
      options: ["South Carolina", "Maine", "Vermont", "New York"],
      correctAnswer: "South Carolina",
      explanation: "Brown was one of the first ten original inductees into the Rock and Roll Hall of Fame in 1986."
    },
    {
      id: 1462,
      question: "Despite other states' claims, this state is second only to California in peach production.",
      options: ["South Carolina", "Georgia", "New Jersey", "Florida"],
      correctAnswer: "South Carolina",
      explanation: "The 1996 song Peaches by The Presidents of the United States of America topped the charts in Iceland and Canada."
    },
    {
      id: 1463,
      question: "Mount Rushmore is found in this state.",
      options: ["South Dakota", "North Dakota", "Wyoming", "Idaho"],
      correctAnswer: "South Dakota",
      explanation: "Carved between 1927 and 1941 by Gutzon Borglum and his team, it was supposed to show the 4 presidents down to their waist, but the project ran out of funding."
    },
    {
      id: 1464,
      question: "The Corn Palace can be found in Mitchell, in this state.",
      options: ["South Dakota", "North Dakota", "Iowa", "Kansas"],
      correctAnswer: "South Dakota",
      explanation: "The interior and exterior are covered with different crop art-based murals every year since 1921."
    },
    {
      id: 1465,
      question: "A gold strike in 1875 and the murder of Wild Bill Hickok in 1876 made Deadwood, in this state, world famous.",
      options: ["South Dakota", "California", "Montana", "North Dakota"],
      correctAnswer: "South Dakota",
      explanation: "Wild Bill was killed while playing cards, purportedly holding 2 pairs, black aces and eights, called the Dead Man's Hand in his honor."
    },
    {
      id: 1466,
      question: "The geographic center of all 50 states is found north of the town of Belle Fourche, in this state.",
      options: ["South Dakota", "North Dakota", "Montana", "Nebraska"],
      correctAnswer: "South Dakota",
      explanation: "Excluding Hawaii and Alaska, the geographic center is in Kansas."
    },
    {
      id: 1467,
      question: "This state has the highest peak east of the Rockies, Harney Peak, which was recently renamed Black Elk Peak in honor of the Lakota Sioux medicine man.",
      options: ["South Dakota", "New York", "Vermont", "Michigan"],
      correctAnswer: "South Dakota",
      explanation: "At 7,231 feet (2,204 m) it is geologically separate from the Rocky Mountains."
    },
    {
      id: 1468,
      question: "The biggest motorcycle rally in the world occurs each year in Sturgis, in this state.",
      options: ["South Dakota", "California", "New York", "Arizona"],
      correctAnswer: "South Dakota",
      explanation: "Held every August since 1938 (except for during WWII), it is closely trailed by the biggest mobile STD clinic in the world."
    },
    {
      id: 1469,
      question: "Badlands National Park is found in the southwest part of this state.",
      options: ["South Dakota", "Virginia", "Kansas", "Utah"],
      correctAnswer: "South Dakota",
      explanation: "Originally the area was promised to the Oglala Sioux in 1868 in a treaty, but by 1889 the US had broken the treaty and taken the land to use for homesteaders."
    },
    {
      id: 1470,
      question: "The 1982 World's Fair was held in a city in this southeastern state.",
      options: ["Tennessee", "Kentucky", "Kansas", "Alabama"],
      correctAnswer: "Tennessee",
      explanation: "Held in Knoxville, it was officially known as the Knoxville International Energy Exposition and had 11 million visitors."
    },
    {
      id: 1471,
      question: "This state has the most known caves, with over 10,000.",
      options: ["Tennessee", "Kentucky", "California", "Pennsylvania"],
      correctAnswer: "Tennessee",
      explanation: "While Missouri calls itself the cave state, Tennessee has almost twice as many known caves."
    },
    {
      id: 1472,
      question: "The second (to the White House) most visited home in the US is Graceland, the former home of Elvis Presley, found in this state.",
      options: ["Tennessee", "Virginia", "Kentucky", "Alabama"],
      correctAnswer: "Tennessee",
      explanation: "Purchased by Presley in 1957 for $102,500, the estate is now valued at around $55 million."
    },
    {
      id: 1473,
      question: "Martin Luther King Jr was assassinated in this state in 1968.",
      options: ["Tennessee", "Georgia", "Mississippi", "Alabama"],
      correctAnswer: "Tennessee",
      explanation: "Killed while standing on the balcony of the Lorraine Motel, which has since been converted into the National Civil Rights Museum."
    },
    {
      id: 1474,
      question: "Maxwell House coffee is named after the Maxwell House Hotel in this state, which was also its first major customer.",
      options: ["Tennessee", "North Carolina", "New Jersey", "Illinois"],
      correctAnswer: "Tennessee",
      explanation: "It was Nashville's largest hotel, with 240 beds, and cost $500,000 to build in 1869."
    },
    {
      id: 1475,
      question: "This state has a city, known for its thriving blues scene, that shares a name with an ancient capital of Egypt.",
      options: ["Tennessee", "Kentucky", "Louisiana", "Georgia"],
      correctAnswer: "Tennessee",
      explanation: "The Egyptian Memphis and its ruins were designated a World Heritage site in 1979."
    },
    {
      id: 1476,
      question: "This state has 14 official state songs, with the most recent one adopted in 2024.",
      options: ["Tennessee", "California", "Texas", "Florida"],
      correctAnswer: "Tennessee",
      explanation: "Among the songs is a rap song written by an elderly white woman in honor of the state's bicentennial in 1996."
    },
    {
      id: 1477,
      question: "Six nations have had sovereignty over this state at one time, giving rise to the name of the Six Flags amusement parks, headquartered here.",
      options: ["Texas", "California", "New York", "New Mexico"],
      correctAnswer: "Texas",
      explanation: "Spain, France and Mexico were the 3 foreign countries that once ruled Texas, along with the Republic of Texas, the Confederacy, and finally the USA."
    },
    {
      id: 1478,
      question: "This state produces more wool than any other.",
      options: ["Texas", "Colorado", "Kansas", "California"],
      correctAnswer: "Texas",
      explanation: "The average production of wool per shorn sheep is 7.2 pounds (3.2 kg)."
    },
    {
      id: 1479,
      question: "This state's capital is the only one located on the banks of the Colorado River.",
      options: ["Texas", "Colorado", "Arizona", "Utah"],
      correctAnswer: "Texas",
      explanation: "Originally known as Waterloo, it was named Austin in honor of Stephen Austin, the \"father of Texas\"."
    },
    {
      id: 1480,
      question: "Dr Pepper was invented in this state in 1885, one year before Coca Cola.",
      options: ["Texas", "New York", "Georgia", "Louisiana"],
      correctAnswer: "Texas",
      explanation: "First served in 1885 in Waco, it actually has its own food category at the FDA, \"pepper soda\"."
    },
    {
      id: 1481,
      question: "The first words allegedly spoken from the surface of the moon (\"___, Tranquility Base here. The Eagle has landed\") was the name of a city in this state, where NASA control was located.",
      options: ["Texas", "Florida", "Virginia", "California"],
      correctAnswer: "Texas",
      explanation: "Houston is still the home of the Johnson Space Center. The first words actually spoken were \"contact light\" spoken by Buzz Aldrin upon the lander setting down."
    },
    {
      id: 1482,
      question: "Which state is the only state to have sold Ben & Jerry's \"Bourbon Pecan Pie\" ice cream?",
      options: ["Texas", "Louisiana", "Kentucky", "West Virginia"],
      correctAnswer: "Texas",
      explanation: "It was introduced in 2015 after a statewide taste test and is no longer available."
    },
    {
      id: 1483,
      question: "This state has the most miles of interstate highway, with 3,232 miles.",
      options: ["Texas", "Alaska", "New Jersey", "California"],
      correctAnswer: "Texas",
      explanation: "It also has the most lane miles, at over 683,000. And you still can't find a clean rest stop among them all."
    },
    {
      id: 1484,
      question: "This state was named after the Indian tribe whose name means \"people of the mountains\"",
      options: ["Utah", "Minnesota", "Iowa", "Wyoming"],
      correctAnswer: "Utah",
      explanation: "The Ute tribe had 12 historic bands that occupied present day Utah and Colorado."
    },
    {
      id: 1485,
      question: "The world's first transcontinental railroad was completed in this state in 1869, at Promontory Summit.",
      options: ["Utah", "Kansas", "Oklahoma", "Colorado"],
      correctAnswer: "Utah",
      explanation: "The Summit was at 4,902 ft (1,494m) and was the spot where the rail line from Sacramento to Omaha was completed."
    },
    {
      id: 1486,
      question: "Landscape Arch, at 290 ft (88m) the largest natural rock span in the US and 5th largest in the world, can be found in this state in, oddly enough, Arches National Park.",
      options: ["Utah", "California", "Colorado", "Idaho"],
      correctAnswer: "Utah",
      explanation: "The four largest rock arches are all found in China (and were NOT made with child labor)."
    },
    {
      id: 1487,
      question: "This state's symbol, the beehive, symbolizes industry, which the early pioneers had to rely on.",
      options: ["Utah", "Arkansas", "Iowa", "Nebraska"],
      correctAnswer: "Utah",
      explanation: "The wicker hive used in the state logo is actually called a skep, and is illegal in the US to use them because the bees inside are killed when the honey is collected."
    },
    {
      id: 1488,
      question: "Miami, FL has the most plastic surgeons per capita, at 3.9/100,000 residents. A city in this state has the second most.",
      options: ["Utah", "California", "New York", "Illinois"],
      correctAnswer: "Utah",
      explanation: "With 3.1 plastic surgeons per 100,000 people, the number one procedure done in Utah is a toothy, judgy perma-smile."
    },
    {
      id: 1489,
      question: "The world's longest skid occurred in 1964 at the Bonneville Salt Flats in this state.",
      options: ["Utah", "Washington", "Texas", "New Mexico"],
      correctAnswer: "Utah",
      explanation: "Craig Breedlove set a land speed record at over 527 mph (850 km/hr), but when his parachute broke, he skidded for over 5 miles until finally coming to rest in a pond."
    },
    {
      id: 1490,
      question: "This state donates the most to charity and has the highest volunteerism rate in the nation.",
      options: ["Utah", "Tennessee", "Florida", "Texas"],
      correctAnswer: "Utah",
      explanation: "Due to their 10% tithe to the Mormon church, they donate more than any other state. And 51% of state residents volunteer. Florida has the lowest volunteer rate, at 21%."
    },
    {
      id: 1491,
      question: "The smallest state capital, with a population of only around 8,000, is in this state.",
      options: ["Vermont", "Delaware", "Rhode Island", "Wyoming"],
      correctAnswer: "Vermont",
      explanation: "Montpelier had 7,991 people as of 2023 and its sister city is Zapopan, Mexico, with a population of 1.3 million."
    },
    {
      id: 1492,
      question: "The only state capital without a McDonald's is in this state.",
      options: ["Vermont", "Alaska", "Rhode Island", "Maine"],
      correctAnswer: "Vermont",
      explanation: "It does not have a Burger King, either, but both can be found in the nearby town of Barre."
    },
    {
      id: 1493,
      question: "The only US president born on the 4th of July, Calvin Coolidge, was born in Plymouth in this state in 1872.",
      options: ["Vermont", "New Jersey", "Pennsylvania", "Massachusetts"],
      correctAnswer: "Vermont",
      explanation: "He was the VP for President Harding and became president in 1923 when Harding died halfway through his term."
    },
    {
      id: 1494,
      question: "It is illegal to throw away scraps of food in this state (it must be composted).",
      options: ["Vermont", "Oregon", "Maine", "Kansas"],
      correctAnswer: "Vermont",
      explanation: "Food waste in a dump produces methane gas, whereas composted food does not produce this extremely potent greenhouse gas."
    },
    {
      id: 1495,
      question: "Two states have a smaller population than Washington DC (about 678,000). Wyoming is one, with about 585,000. What's the other?",
      options: ["Vermont", "Alaska", "Delaware", "Montana"],
      correctAnswer: "Vermont",
      explanation: "Vermont has about 625,000, while Alaska has about 733,000, and Delaware and Montana are each over a million."
    },
    {
      id: 1496,
      question: "Which state was the first admitted to the union after the original 13 colonies?",
      options: ["Vermont", "New Hampshire", "Ohio", "Washington"],
      correctAnswer: "Vermont",
      explanation: "It was admitted in 1791, just 10 months after Rhode Island."
    },
    {
      id: 1497,
      question: "This state has more covered bridges per square mile than any other state.",
      options: ["Vermont", "New York", "Georgia", "Pennsylvania"],
      correctAnswer: "Vermont",
      explanation: "With over 100 covered bridges, each one also has at least one retired person trying to paint a watercolor of that bridge at any given time."
    },
    {
      id: 1498,
      question: "This state was named for the virgin queen, Elizabeth I.",
      options: ["Virginia", "Louisiana", "Georgia", "Massachusetts"],
      correctAnswer: "Virginia",
      explanation: "Serving from 1558-1603, she was the last of the five monarchs of the House of Tudor."
    },
    {
      id: 1499,
      question: "Thomas Jefferson's estate of Monticello can be found in this state.",
      options: ["Virginia", "Maryland", "South Carolina", "North Carolina"],
      correctAnswer: "Virginia",
      explanation: "He began designing it at age 14, and it is the only private residence to be designated a UNESCO World Heritage Site."
    },
    {
      id: 1500,
      question: "The first permanent English settlement in America was in Jamestown, established in 1607 in this state.",
      options: ["Virginia", "Rhode Island", "Massachusetts", "New York"],
      correctAnswer: "Virginia",
      explanation: "The Roanoke colony was established in 1585, but its inhabitants had all mysteriously disappeared by 1590 and are known as the Lost Colony."
    },
    {
      id: 1501,
      question: "Smithfield ham is a type of ham that can only be made in the town of that name in this state.",
      options: ["Virginia", "Ohio", "New Jersey", "Massachusetts"],
      correctAnswer: "Virginia",
      explanation: "The first recorded sale of a Smithfield ham was in 1779, and sadly production stopped in 2024 due to reduced demand."
    },
    {
      id: 1502,
      question: "The eastern tiger swallowtail butterfly is the state butterfly of 5 different states, but is the state insect of only this state.",
      options: ["Virginia", "North Carolina", "Delaware", "Texas"],
      correctAnswer: "Virginia",
      explanation: "The insect lays green eggs, has a wingspan of 3-5.5 inches, and seems to prefer to feed from plants with red or pink flowers."
    },
    {
      id: 1503,
      question: "Peanuts were first grown in the US in this state in the early 1800s.",
      options: ["Virginia", "Alabama", "Georgia", "New York"],
      correctAnswer: "Virginia",
      explanation: "Georgia now grows over 50% of the peanuts in the US."
    },
    {
      id: 1504,
      question: "The British surrendered to the Americans to effectively end the Revolutionary War in 1781 at Yorktown, in this state.",
      options: ["Virginia", "Maryland", "New York", "Massachusetts"],
      correctAnswer: "Virginia",
      explanation: "General George Cornwallis surrendered to George Washington on October 9, 1781, but the war continued for another year."
    },
    {
      id: 1505,
      question: "This state was the site of the most battles fought in the Civil War.",
      options: ["Virginia", "Georgia", "North Carolina", "Pennsylvania"],
      correctAnswer: "Virginia",
      explanation: "There were 384 \"principal battles\" in the Civil War, and 123 of them occurred in Virginia, as well as upwards of 2,000 skirmishes."
    },
    {
      id: 1506,
      question: "The Tomb of the Unknown Soldier is found in this state.",
      options: ["Virginia", "Maryland", "Pennsylvania", "New York"],
      correctAnswer: "Virginia",
      explanation: "Dedicated to US service members whose remains have not been identified, it is located in Arlington National Cemetery."
    },
    {
      id: 1507,
      question: "George Washington's Mount Vernon estate is located in this state.",
      options: ["Virginia", "New York", "Pennsylvania", "Massachusetts"],
      correctAnswer: "Virginia",
      explanation: "Washington and his wife Martha both died there and are buried there."
    },
    {
      id: 1508,
      question: "This state produces more apples than any other.",
      options: ["Washington", "New York", "Kansas", "Iowa"],
      correctAnswer: "Washington",
      explanation: "Washington produces over half the nation's apple crop, and the US is 2nd (to China) in global apple production."
    },
    {
      id: 1509,
      question: "This state has the largest building in the world, by volume, at the Boeing plant in Everett.",
      options: ["Washington", "Florida", "Texas", "Arizona"],
      correctAnswer: "Washington",
      explanation: "At 13.3 million cubic meters (472 million cubic ft), it is twice as large as the next largest building and is where Boeing makes those EZ-off door plugs."
    },
    {
      id: 1510,
      question: "The highest point in this state (at 14,411 ft / 4,392 m) was named after Peter Rainier, a British soldier who fought against America.",
      options: ["Washington", "Colorado", "New Hampshire", "Massachusetts"],
      correctAnswer: "Washington",
      explanation: "Also known as Tahoma or Tacoma, it also loaned its name to Rainier beer, the Pabst of the Northwest (Pabst bought Rainier in 1999)."
    },
    {
      id: 1511,
      question: "The longest floating bridge in the world crosses Lake Washington in this state.",
      options: ["Washington", "Texas", "Alaska", "Maine"],
      correctAnswer: "Washington",
      explanation: "Connecting Seattle to Bellevue, the Evergreen Point Floating Bridge is 7,708 ft (2,349m) long."
    },
    {
      id: 1512,
      question: "This state is the birthplace of both Jimi Hendrix and Bing Crosby.",
      options: ["Washington", "Ohio", "New York", "Missouri"],
      correctAnswer: "Washington",
      explanation: "\"Bob Hope to Die\" was an English indie rock band in the 1980s that released a 12\" mini album called \"The Living Embodiment of Jimi Hendrix\"."
    },
    {
      id: 1513,
      question: "The largest power generating dam in the country is in this state.",
      options: ["Washington", "Nevada", "Colorado", "California"],
      correctAnswer: "Washington",
      explanation: "The Grand Coulee on the Columbia River has a capacity of 6,809 megawatts, enough to power 2.1 million homes (or one AI data center) per year."
    },
    {
      id: 1514,
      question: "The volcanic peak in this state lost over 1,300 feet when it erupted in 1980.",
      options: ["Washington", "Hawaii", "Alaska", "Oregon"],
      correctAnswer: "Washington",
      explanation: "Mt St Helens had continuous volcanic activity until 2008, and is still the deadliest and costliest volcanic eruption in US history."
    },
    {
      id: 1515,
      question: "Of these states, which has the most national parks, with 3?",
      options: ["Washington", "Nevada", "South Dakota", "Wyoming"],
      correctAnswer: "Washington",
      explanation: "The other states listed each have 2 National Parks."
    },
    {
      id: 1516,
      question: "Mother's Day was originated in this state, by Anna Jarvis in 1908.",
      options: ["West Virginia", "Pennsylvania", "Texas", "Oklahoma"],
      correctAnswer: "West Virginia",
      explanation: "The state is the home of the International Mother's Day Shrine, where mothers can go and wonder why their kids don't call more often."
    },
    {
      id: 1517,
      question: "This state was originally part of Virginia, but it decided to break away when Virginia voted to secede from the Union.",
      options: ["West Virginia", "Kentucky", "North Carolina", "Maryland"],
      correctAnswer: "West Virginia",
      explanation: "It is the only state to form from a Confederate state, and was one of 2 states (the other is Nevada) admitted to the Union during the Civil War."
    },
    {
      id: 1518,
      question: "In May, 1921, this state was the first to enact a statewide sales tax.",
      options: ["West Virginia", "Ohio", "Kentucky", "Idaho"],
      correctAnswer: "West Virginia",
      explanation: "The original tax was well under 1%, and currently stands at 6%."
    },
    {
      id: 1519,
      question: "In 1927, the first federal prison for women opened in this state.",
      options: ["West Virginia", "New Jersey", "Delaware", "Nevada"],
      correctAnswer: "West Virginia",
      explanation: "Prior to this, women were housed separately and alone in all-male prisons."
    },
    {
      id: 1520,
      question: "The New River Gorge bridge, found in this state, is the longest steel arch bridge in the US.",
      options: ["West Virginia", "Idaho", "Colorado", "Washington"],
      correctAnswer: "West Virginia",
      explanation: "At 1,699 ft (518 m), it was the longest isingle span arch in the world for the first 26 years after it opened. Once a year (the 3rd Saturday of October), it is legal for people to climb on or jump from the bridge."
    },
    {
      id: 1521,
      question: "This state's motto is \"montani semper liberi\" (\"Mountaineers are always free\").",
      options: ["West Virginia", "Colorado", "Wyoming", "Montana"],
      correctAnswer: "West Virginia",
      explanation: "The state is almost entirely mountainous, and is the 2nd most dependent on federal financial support (getting almost $3 back for each $1 sent to the feds in taxes). Freedom!"
    },
    {
      id: 1522,
      question: "The Greenbrier Hotel in this state was the location of Project Greek Island, a huge underground bunker meant to house Congress in case of national emergency.",
      options: ["West Virginia", "Delaware", "Florida", "Pennsylvania"],
      correctAnswer: "West Virginia",
      explanation: "It functioned in this role from 1962 until 1992, when it was exposed by The Washington Post and now serves as a data storage center and can be toured."
    },
    {
      id: 1523,
      question: "The American Birkebeiner, the largest cross country ski race in the US, takes place each February in this state.",
      options: ["Wisconsin", "Minnesota", "Colorado", "New York"],
      correctAnswer: "Wisconsin",
      explanation: "Started in 1973, the 55km (34 mi) classic style event goes from Cable to Hayward, WI and attracts 10,000 competitors each year."
    },
    {
      id: 1524,
      question: "The nation's first kindergarten was established in Watertown in this state in 1854.",
      options: ["Wisconsin", "New York", "Delaware", "Maine"],
      correctAnswer: "Wisconsin",
      explanation: "Margarethe Schurz opened a German language kindergarten. It operated for 2 years until Schurz's health caused her to close it."
    },
    {
      id: 1525,
      question: "The home of Harley Davidson motorcycles is in this state.",
      options: ["Wisconsin", "Indiana", "Georgia", "Texas"],
      correctAnswer: "Wisconsin",
      explanation: "Founded in Milwaukee and still headquartered there, their bikes are now also made in York, PA, Brazil, and Thailand. (A plant in India closed in 2020.)"
    },
    {
      id: 1526,
      question: "A 1917 state law made this state the first one to use numbers for its highways, instead of names, a practice that was soon adopted nationwide.",
      options: ["Wisconsin", "Arizona", "New Mexico", "Pennsylvania"],
      correctAnswer: "Wisconsin",
      explanation: "The distinctive shield design for signs was adopted in 1925, and the most current version was adopted in 1971."
    },
    {
      id: 1527,
      question: "Harry Houdini was born in Budapest but grew up in Appleton in this state, before escaping (see what I did there?) to New York.",
      options: ["Wisconsin", "Pennsylvania", "Washington", "Massachusetts"],
      correctAnswer: "Wisconsin",
      explanation: "Houdini died at age 52 from complications of a ruptured appendix. Apparently he could not escape peritonitis."
    },
    {
      id: 1528,
      question: "The toilet paper capital of the world is in this state due to Northern Paper Mill figuring out how to make splinter-free TP in 1935.",
      options: ["Wisconsin", "Michigan", "Minnesota", "Maine"],
      correctAnswer: "Wisconsin",
      explanation: "The mill led the world in TP production, making Green Bay number 1 with number 2!"
    },
    {
      id: 1529,
      question: "The only community owned pro sports team is located in this state, in the smallest sports market in North America.",
      options: ["Wisconsin", "Michigan", "New York", "Pennsylvania"],
      correctAnswer: "Wisconsin",
      explanation: "The Green Bay Packers are worth about $7 billion as of 2025, but owning shares does not entitle you to dividends, cannot be traded, has no ticket privileges and has no equity interest."
    },
    {
      id: 1530,
      question: "The Cunninghams, Potsie, Ralph Malph and the Fonz, from Happy Days, were fictitious residents of this state.",
      options: ["Wisconsin", "Michigan", "Minnesota", "New York"],
      correctAnswer: "Wisconsin",
      explanation: "Happy Days ran for 11 seasons and spun off 7 different shows and was the show that gave rise to the phrase \"jumped the shark\", indicating when a show has lost its way or purpose."
    },
    {
      id: 1531,
      question: "This state's license plate features a man on a bucking bronco.",
      options: ["Wyoming", "Colorado", "Montana", "New Mexico"],
      correctAnswer: "Wyoming",
      explanation: "The Bucking Horse and Rider logo is trademarked by the state of WY since 1936 and has been used on plates since 1918."
    },
    {
      id: 1532,
      question: "The first national monument was Devil's Tower, found in this state.",
      options: ["Wyoming", "Utah", "Arizona", "California"],
      correctAnswer: "Wyoming",
      explanation: "Established in September 1906 by President Theodore Roosevelt, it is an igneous rock butte rising 1,267 ft (386m) and played a key part in Close Encounters of the Third Kind."
    },
    {
      id: 1533,
      question: "JCPenney stores originated in the town of Kemmerer in this state, in 1902.",
      options: ["Wyoming", "Massachusetts", "Maine", "Montana"],
      correctAnswer: "Wyoming",
      explanation: "James Cash Penney opened the store with 2 partners, but bought them out in 1907 and by 1909 moved his headquarters to Salt Lake City."
    },
    {
      id: 1534,
      question: "This state is known as the Equality State, because it was the first to give full suffrage to women in 1869.",
      options: ["Wyoming", "Arkansas", "Utah", "Indiana"],
      correctAnswer: "Wyoming",
      explanation: "Louisa Swain was the first woman in the US to cast a ballot in a general election, in 1870. She was 69 years old at the time."
    },
    {
      id: 1535,
      question: "The first female governor, Nellie Ross, became governor of this state (the same state where women first voted) in January 1925 when her husband died while in office.",
      options: ["Wyoming", "New Jersey", "New Hampshire", "New York"],
      correctAnswer: "Wyoming",
      explanation: "Ross went on to become the first female director of the US Mint in 1933."
    },
    {
      id: 1536,
      question: "The largest source of trona (a source of sodium carbonate, or soda ash) in the world is found near Green River in this state.",
      options: ["Wyoming", "California", "Idaho", "Vermont"],
      correctAnswer: "Wyoming",
      explanation: "Sodium carbonate is used to make glass, textiles, chemicals, paper and detergent, among other uses."
    },
    {
      id: 1537,
      question: "The first National Park in the US, Yellowstone, is located primarily in this state.",
      options: ["Wyoming", "California", "Colorado", "Washington"],
      correctAnswer: "Wyoming",
      explanation: "Established in 1872 by Pres. Ulysses S Grant, the park also has portions in Montana and Idaho, and contains the continent's largest supervolcano."
    },
    {
      id: 1538,
      question: "The Breakers was the summer home for the Vanderbilts, and it is located in this state.",
      options: ["Rhode Island", "Maine", "California", "New Jersey"],
      correctAnswer: "Rhode Island",
      explanation: "The designer Gloria Vanderbilt, the mother of Anderson Cooper, grew up at the Breakers."
    },
    {
      id: 1539,
      question: "Ca' d'Zan, often called the Ringling Mansion, was the home of John Ringling, one of the founding brothers of the Ringling Brothers Circus and it is found in this state.",
      options: ["Florida", "Nevada", "Kansas", "Georgia"],
      correctAnswer: "Florida",
      explanation: "Ca' d'Zan translates as 'House of John' in the Venetian dialect, because Ringling loved his travels to Venice."
    },
    {
      id: 1540,
      question: "Citizen Kane's Xanadu was based on the Hearst Castle, found in this state.",
      options: ["California", "New York", "North Carolina", "Montana"],
      correctAnswer: "California",
      explanation: "Hearst Castle sits on 250,000 acres and has 60 bathrooms, 41 fireplaces and 58 bedrooms."
    },
    {
      id: 1541,
      question: "The Nemours Estate, built by Alfred duPont, can be found in this state.",
      options: ["Delaware", "Connecticut", "South Dakota", "Virginia"],
      correctAnswer: "Delaware",
      explanation: "It has the largest French formal garden in the US, at 200 acres, with the largest jardin a la francaise coming in at over 37,000 acres at Versailles."
    },
    {
      id: 1542,
      question: "This state's capital is the most populous in the country.",
      options: ["Arizona", "Texas", "California", "Florida"],
      correctAnswer: "Arizona",
      explanation: "Phoenix has a population of about 1.7 million (as of 2020), about 70% more than runner-up Austin."
    },
    {
      id: 1543,
      question: "The official bat of Major League Baseball was made in a city in this state (even though the parent company is now Chinese-owned).",
      options: ["Kentucky", "Tennessee", "North Carolina", "Pennsylvania"],
      correctAnswer: "Kentucky",
      explanation: "Up until 2025, the Louisville Slugger was the official bat of MLB. It has been replaced by Marucci and Victus bats."
    },
    {
      id: 1544,
      question: "The first McDonald's drive through appeared in this state in 1975.",
      options: ["Arizona", "Oklahoma", "California", "Texas"],
      correctAnswer: "Arizona",
      explanation: "It was installed because it was very close to a military base, and at the time military personnel could not go into public establishments in uniform."
    },
    {
      id: 1545,
      question: "This state has the longest coastline relative to the state's overall square mileage.",
      options: ["Maryland", "Alaska", "Florida", "Michigan"],
      correctAnswer: "Maryland",
      explanation: "With 1,400 ft of coastline for every square mile of state, it is about 6 times the ratio of Alaska's coastline."
    },
    {
      id: 1546,
      question: "The oldest professional baseball park (Rickwood Field) opened in 1910 in this state.",
      options: ["Alabama", "Connecticut", "New York", "Georgia"],
      correctAnswer: "Alabama",
      explanation: "Found in Birmingham, it was where Willie Mays first played professionally at age 16."
    },
    {
      id: 1547,
      question: "This state has the longest state constitution, with over 370,000 words.",
      options: ["Alabama", "California", "Texas", "Utah"],
      correctAnswer: "Alabama",
      explanation: "Even after significant revisions in 2022, it still is about 3.5 times as long as second-longest Texas."
    },
    {
      id: 1548,
      question: "The three highest waterfalls in the United States are all found in this state.",
      options: ["Hawaii", "California", "New York", "Washington"],
      correctAnswer: "Hawaii",
      explanation: "Olo'upena Falls are 2,953 ft, Pu'uka'oku Falls are 2,756 ft, and Waihilau Falls are 2,598 ft. Niagra Falls are a paltry 187 ft high."
    }
  ],
  'government-trivia': [
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
      question: "This was the first and only president to serve more than 2 terms (as of 2025).",
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
      explanation: "Biden was born in 1942. Carter and Bush were 1924, and Clinton was 1946."
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
      explanation: "There were 12 amendments proposed, but only numbers 3-12 were ratified, giving us the current Bill of Rights."
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
      correctAnswer: "Martin Van Buren",
      explanation: "Van Buren was born in 1782, just a year after the US was founded. He was also the only president to have English as a second language (George W Bush just sounded like English was his second language)."
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
      explanation: "It also requires a 2/3 vote in both houses of Congress to propose an amendment, and each state's vote carries equal weight in ratifying an amendment, regardless of population."
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
      explanation: "Washington chose the site but never got to live in it before leaving office."
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
      question: "In 1877, this president had the first phone in the White House installed.",
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
      explanation: "Reagan divorced Jane Wyman before marrying Nancy. Trump has had at least 2 divorces (as well as being divorced from reality)."
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
      question: "He had the shortest presidency on record, lasting just 31 days in 1841.",
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
      explanation: "The Declaration was ratified by the Second Continental Congress on July 4, 1776, and it declared that the 13 colonies were no longer subjects of King George."
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
      explanation: "The line was delivered during the final New Hampshire primary debate and was meant to be friendly and self-deprecating of Obama, but it was not perceived that way by many. Clinton went on to win New Hampshire."
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
      explanation: "The original is on display in the National Archives in DC, in a titanium-reinforced display filled with argon gas. There is technically a fifth page, but it simply describes how the Constitution was to be ratified and enacted."
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
      explanation: "The election was lost by just 35 electoral votes, and gave Americans a deep understanding of hanging chads."
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
      id: 977,
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
      id: 978,
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
      id: 979,
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
      id: 980,
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
      id: 981,
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
      id: 982,
      question: "The first female National Security Advisor, Condoleeza RIce, served under this president during his second term.",
      options: [
        "George W. Bush",
        "George HW Bush",
        "Barack Obama",
        "Jimmy Carter"
      ],
      correctAnswer: "George W. Bush",
      explanation: "She also served in the elder Bush's administration, as senior director of Soviet and Eastern European affairs in the National Security Council."
    },
    {
      id: 983,
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
      id: 984,
      question: "This president established the most National Parks?",
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
      id: 985,
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
      id: 1549,
      question: "This president's Secret Service codename was Rawhide.",
      options: ["Ronald Reagan", "Teddy Roosevelt", "Bill Clinton", "Gerald Ford"],
      correctAnswer: "Ronald Reagan",
      explanation: "The names are actually chosen by the presidential candidate from a list of options, usually meant to reflect some aspect of their personality. Reagan fancied himself a cowboy, since he played one in numerous movies."
    },
    {
      id: 1550,
      question: "Jimmy Carter's Secret Service codename was ____, in recognition of his strong religious faith.",
      options: ["Deacon", "Father", "Friar", "Preacher"],
      correctAnswer: "Deacon",
      explanation: "He was initially given the codename Dasher when he was a candidate. He had been a deacon since 1942, when he was only 18 years old."
    },
    {
      id: 1551,
      question: "Which president signed the Civil Rights Act of 1964 into law?",
      options: ["Lyndon B Johnson", "Barack Obama", "Teddy Roosevelt", "Richard Nixon"],
      correctAnswer: "Lyndon B Johnson",
      explanation: "The legislation was originally proposed by John F Kennedy but it was filibustered. After JFK was killed, LBJ was able to get it passed."
    },
    {
      id: 1552,
      question: "This president was the first to die in office.",
      options: ["William Henry Harrison", "John F Kennedy", "Abraham Lincoln", "George Washington"],
      correctAnswer: "William Henry Harrison",
      explanation: "Dying after just 31 days in office, his death set off a bit of a crisis in the government as up until that point, there was no plan for presidential succession."
    },
    {
      id: 1553,
      question: "Where was Abraham Lincoln when he was assassinated by John Wilkes Booth?",
      options: ["At the theater", "In the bathroom", "Giving a speech to Congress", "On a camping trip"],
      correctAnswer: "At the theater",
      explanation: "He was sitting in a theater box when Booth crept in and shot him in the back of the head. The theater is now a National Historic Site."
    },
    {
      id: 1554,
      question: "A mentally-ill, attempted-assassin named John Hinckley tried to kill Ronald Reagan in 1981 because he was trying to impress this movie star after seeing her in Taxi Driver.",
      options: ["Jodie Foster", "Racquel Welch", "Diane Keaton", "Meryl Streep"],
      correctAnswer: "Jodie Foster",
      explanation: "The lead character in the movie plans to assassinate a presidential candidate, and Hinckley initially targeted Jimmy Carter."
    },
    {
      id: 1555,
      question: "This president created the funding for the interstate highway system in 1956, by signing the Federal Aid Highway Act.",
      options: ["Dwight D Eisenhower", "John F Kennedy", "Franklin D Roosevelt", "Harry S Truman"],
      correctAnswer: "Dwight D Eisenhower",
      explanation: "The need for such a system was brought into focus when the Army sent a convoy across the country in 1919, and it took 62 days. A young Eisenhower was in the Army and part of that expedition."
    },
    {
      id: 1556,
      question: "He was the only president born in New Jersey.",
      options: ["Grover Cleveland", "Donald Trump", "Jimmy Carter", "Anthony Soprano"],
      correctAnswer: "Grover Cleveland",
      explanation: "He is also the only president to have spent his time in office being asked, \"What exit?\" at every press conference."
    },
    {
      id: 1557,
      question: "Richard Nixon liked to top his morning cottage cheese with this common condiment.",
      options: ["Ketchup", "Salt", "Soy sauce", "Mustard"],
      correctAnswer: "Ketchup",
      explanation: "Ketchup is made with tomatoes, sugar and vinegar, and \"fancy\" ketchup has 33% tomato solids, vs 25% in regular ketchup. And 'catsup' is an abomination that should never be spoken."
    },
    {
      id: 1558,
      question: "This president's favorite snack in the 1980s was pork rinds.",
      options: ["George H.W. Bush", "Bill Clinton", "Donald Trump", "Jimmy Carter"],
      correctAnswer: "George H.W. Bush",
      explanation: "Pork rinds were also a favorite snack of Homer Simpson, and they have enjoyed a popularity resurgence with the keto fad diet, as they are low in carbs."
    },
    {
      id: 1559,
      question: "This president put Jelly Bellys on the map, as he was known for always having a jar of them on his desk after using them to help him quit pipe smoking in 1966.",
      options: ["Ronald Reagan", "George W Bush", "Lyndon B Johnson", "Harry S Truman"],
      correctAnswer: "Ronald Reagan",
      explanation: "As President, Reagan had over 300,000 Jelly Bellys shipped to the White House each month, and he would distribute them to Capitol Hill and other federal buildings."
    },
    {
      id: 1560,
      question: "This amendment, passed in 1933, negated the 18th, which prohibited the manufacture, sale or transport of alcohol.",
      options: ["21st", "28th", "3rd", "19th"],
      correctAnswer: "21st",
      explanation: "One of the theories behind why Rolling Rock beer has \"33\" on its label is that it is a tribute to when Prohibition ended. "
    },
    {
      id: 1561,
      question: "This president, who served from 1923, after Warren Harding died of a heart attack, until 1929, had an electric horse installed in the White House, so he could still \"ride\".",
      options: ["Calvin Coolidge", "Lyndon B Johnson", "Thomas Jefferson", "Teddy Roosevelt"],
      correctAnswer: "Calvin Coolidge",
      explanation: "The Secret Service prohibited him from riding real horses, so he had this installed so he could blow off steam and get some exercise as President."
    },
    {
      id: 1562,
      question: "This president, born in 1874 in Iowa and growing up in Oregon, was the first president born west of the Mississippi River, and served from 1929-1933.",
      options: ["Herbert Hoover", "Abraham Lincoln", "Gerald Ford", "James K Polk"],
      correctAnswer: "Herbert Hoover",
      explanation: "Serving during the Great Depression, he signed the Smoot-Hawley Tariff Act which raised tariffs on foreign imports and crashed the economy further. Good thing that will never happen again!"
    },
    {
      id: 1563,
      question: "He was the first president to be impeached.",
      options: ["Andrew Johnson", "Andrew Jackson", "James Monroe", "Franklin D Roosevelt"],
      correctAnswer: "Andrew Johnson",
      explanation: "He tried to use the Tenure of Office Act to get rid of his Secretary of War, Edwin Stanton. Congress took offense and impeached him."
    },
    {
      id: 1564,
      question: "This president fathered more children (15) than any other, and became president only after William Harrison died after 31 days in office.",
      options: ["John Tyler", "John F Kennedy", "Thomas Jefferson", "Donald Trump"],
      correctAnswer: "John Tyler",
      explanation: "His last grandchild (Harrison Ruffin Tyler) died in May 2025 at age 96. He was born in 1928, while President Tyler was born in 1790."
    },
    {
      id: 1565,
      question: "He was the first left-handed president, elected in 1880, and he only served for 6 months before being assassinated (but not for being a lefty).",
      options: ["James Garfield", "Martin Van Buren", "Woodrow Wilson", "Warren Harding"],
      correctAnswer: "James Garfield",
      explanation: "Garfield was killed by a mentally ill man who was convinced that Garfield was preventing him being named consul to Paris."
    },
    {
      id: 1566,
      question: "He was the second president to be assassinated in office in 1881, only 16 years after Lincoln was killed.",
      options: ["James Garfield", "Chester D Witherington", "Ulysses S Grant", "Millard Fillmore"],
      correctAnswer: "James Garfield",
      explanation: "He was not running for president when nominated, and his nomination was meant to break a deadlock between two Republican factions at the time, the Stalwarts and the Half Breeds."
    },
    {
      id: 1567,
      question: "This president married a woman for whom he was previously a guardian (after her father died). It was and still is the only wedding held at the White House, in 1886. She was 21 and he was 49.",
      options: ["Grover Cleveland", "Ulysses S Grant", "Millard Fillmore", "Teddy Roosevelt"],
      correctAnswer: "Grover Cleveland",
      explanation: "She is still the youngest First Lady in history, and they had 5 children."
    },
    {
      id: 1568,
      question: "This beloved president - the only one to serve more than two terms - married his cousin.",
      options: ["Franklin D Roosevelt", "George Washington", "Grover Cleveland", "Donald Trump"],
      correctAnswer: "Franklin D Roosevelt",
      explanation: "FDR's parents were sixth cousins, so marrying his 5th cousin once removed was no big deal in his mind."
    },
    {
      id: 1569,
      question: "He was the only president, and prior to that, vice president, never elected to either position.",
      options: ["Gerald Ford", "George W Bush", "Ronald Reagan", "Franklin D Roosevelt"],
      correctAnswer: "Gerald Ford",
      explanation: "Appointed VP after Nixon's VP Spiro Agnew resigned after being convicted of tax evasion. Then he became President when Nixon resigned while facing certain impeachment for the Watergate scandal."
    },
    {
      id: 1570,
      question: "His birth name was Leslie Lynch King, but by the time he was our 38th president, we knew him as ____.",
      options: ["Gerald Ford", "Jimmy Carter", "Richard Nixon", "Ronald Reagan"],
      correctAnswer: "Gerald Ford",
      explanation: "His birth parents separated 16 days after his birth, and his mother remarried a man named Gerald Rudolff Ford when the future president was 3 years old. The official name change did not occur until he was 22 years old."
    },
    {
      id: 1571,
      question: "This president hosted his daughter Susan's prom at the White House in 1975, the only prom held there.",
      options: ["Gerald Ford", "Jimmy Carter", "Ronald Reagan", "Richard Nixon"],
      correctAnswer: "Gerald Ford",
      explanation: "His daughte's senior class had to pay $1,300 to cover expenses, and had to agree to hire a band that had no outstanding drug charges. The President and his wife were in Europe for a NATO summit at the time."
    },
    {
      id: 1572,
      question: "Prior to Barack Obama, he was the last president to win the Nobel Peace Prize",
      options: ["Jimmy Carter", "Woodrow Wilson", "Theodore Roosevelt", "George W Bush"],
      correctAnswer: "Jimmy Carter",
      explanation: "All except Bush were winners of the Nobel Peace Prize. But Bush does have a street named after him in Tbilisi, Georgia."
    },
    {
      id: 1573,
      question: "This presidential candidate told Playboy magazine that he \"committed adultery in my heart\" in 1976.",
      options: ["Jimmy Carter", "Ronald Reagan", "Gerald Ford", "Bill Clinton"],
      correctAnswer: "Jimmy Carter",
      explanation: "In the interview, Carter was trying to explain that he would not be a rigid religious zealot if he were elected, but the comment was taken out of context and almost cost him the election."
    },
    {
      id: 1574,
      question: "This president installed solar panels on the grounds of the White House, to promote renewable energy during the midst of an energy crisis.",
      options: ["Jimmy Carter", "Ronald Reagan", "Donald Trump", "Joe Biden"],
      correctAnswer: "Jimmy Carter",
      explanation: "The panels were used to supply power to water heaters. Reagan had them removed during his presidency because...oil. One of the panels found its way to a museum in China."
    },
    {
      id: 1575,
      question: "This president prevented the USA from competing in the summer Olympics in Moscow in 1980.",
      options: ["Jimmy Carter", "Ronald Reagan", "Gerald Ford", "George HW Bush"],
      correctAnswer: "Jimmy Carter",
      explanation: "The boycott was done to protest the Soviet Union's invasion of Afghanistan in 1979. The USSR spent 10 years there and lost, in part due to weapons we gave the mujaheddin. The same weapons were used against us 12 years later when we invaded."
    },
    {
      id: 1576,
      question: "He was the first president to send and recieve email while in office.",
      options: ["Bill Clinton", "George HW Bush", "Ronald Reagan", "Gerald Ford"],
      correctAnswer: "Bill Clinton",
      explanation: "Email was introduced to the White House toward the end of Bush's presidency, but Clinton was the first to have a public email address (ClintonPz@aol.com). He sent two emails as President."
    },
    {
      id: 1577,
      question: "This future president appeared on the game show What's My Line? while serving as governor in 1973.",
      options: ["Jimmy Carter", "Bill Clinton", "Ronald Reagan", "Herbert Hoover"],
      correctAnswer: "Jimmy Carter",
      explanation: "What's My Line? was a game show where people asked yes/no questions of a mystery guest to try and figure out who they were. It aired from 1950-1975."
    },
    {
      id: 1578,
      question: "Jimmy Carter brokered a peace deal between Israel and ___ in 1978, the first such agreement between Israel and any of its neighbors.",
      options: ["Egypt", "Syria", "Iran", "Iraq"],
      correctAnswer: "Egypt",
      explanation: "In 1978, secret talks were held at Camp David between Israel and Egypt, after 14 months of effort by Carter to get the two nations to talk."
    },
    {
      id: 1579,
      question: "He was the first president to be born in a hospital, in 1924, in Georgia.",
      options: ["Jimmy Carter", "Calvin Coolidge", "John F Kennedy", "Richard Nixon"],
      correctAnswer: "Jimmy Carter",
      explanation: "Prior to this time, most births were done at home. Hospital births did not start becoming common until the 1920s."
    },
    {
      id: 1580,
      question: "The desk in the Oval Office that has been used by almost all presidents since 1880 is known as the ____ desk.",
      options: ["Resolute", "Decision", "Commander's", "President's"],
      correctAnswer: "Resolute",
      explanation: "It was a gift from Queen Victoria and made from timbers from the HMS Resolute, a British Navy ship lost in the Arctic in 1854."
    },
    {
      id: 1581,
      question: "This amendment, which gave black men the right to vote, at least theoretically, was passed in 1870.",
      options: ["15th", "19th", "13th", "14th"],
      correctAnswer: "15th",
      explanation: "It wasn't until 1965 with the Voting Rights Act that all deterrents to minority voting were abolished. And thanks to current efforts in many states, attempts are being made to once again disenfranchise minority voters."
    },
    {
      id: 1582,
      question: "Which of these presidents did NOT have a poetry reading at their inauguration?",
      options: ["George HW Bush", "Bill Clinton", "John F Kennedy", "Barack Obama"],
      correctAnswer: "George HW Bush",
      explanation: "No Republican president to date has had poetry read at their inauguration."
    },
    {
      id: 1583,
      question: "Who was the first black man to serve in the US Congress?",
      options: ["Hiram Revels", "John Lewis", "Edward Brooke", "Blanche Kelso Bruce"],
      correctAnswer: "Hiram Revels",
      explanation: "Appointed by the Mississippi legislature in 1870, he did not seek re-election in 1871. The second black congressman was also from Mississippi in 1875, Blanche Kelso Bruce."
    },
    {
      id: 1584,
      question: "Baby Ruth candy bars, developed in 1920, are allegedly named after this president's daughter, who was named Ruth but nicknamed Baby, and not after Babe Ruth, as commonly believed.",
      options: ["Grover Cleveland", "Bill Clinton", "Jimmy Carter", "Thomas Jefferson"],
      correctAnswer: "Grover Cleveland",
      explanation: "There is also a hypothesis that the candy maker wanted to avoid paying royalties to Babe Ruth, and made up the story about naming the bar after the president's daughter."
    },
    {
      id: 1585,
      question: "Abraham Lincoln was known for being a lawyer, but he also held numerous other jobs before becoming president. Which of the following jobs did he NOT hold?",
      options: ["Bartender", "Store clerk", "Railsplitter", "Boatman"],
      correctAnswer: "Bartender",
      explanation: "He was self educated and had to work many jobs as a young man to help support his family after his mother died when he was 9 years old. "
    },
    {
      id: 1586,
      question: "Andrew Johnson worked as a ____ before being elected president in 1864.",
      options: ["Tailor", "Tinker", "Soldier", "Spy"],
      correctAnswer: "Tailor",
      explanation: "His mother apprenticed him to a local tailor at age 10 and he was legally obligated to serve as an apprentice until age 21, but he ran away at age 15."
    },
    {
      id: 1587,
      question: "Joe Biden had a job in college working as a(n) _____.",
      options: ["Lifeguard", "Encyclopedia salesman", "Short order cook", "Ski instructor"],
      correctAnswer: "Lifeguard",
      explanation: "While working there, he had a run in with a local gang member named Corn Pop who threatened to cut the future politician with a straight razor."
    },
    {
      id: 1588,
      question: "If the Electoral College vote is tied, who/what determines who the President will be?",
      options: ["House of Representatives", "Senate", "Supreme Court", "The current sitting president"],
      correctAnswer: "House of Representatives",
      explanation: "In the House, each state gets one vote and one person needs to get 26 or more votes to win. The Senate determines the Vice President by the same process."
    },
    {
      id: 1589,
      question: "The color blue on the US flag represents a number of things. Which of the following is NOT one of those things?",
      options: ["Valor", "Vigilence", "Perseverence", "Justice"],
      correctAnswer: "Valor",
      explanation: "Valor is one of the meanings of the color red (the other is hardiness), and white stands for purity and innocence."
    },
    {
      id: 1590,
      question: "This university has produced the most US presidents, at 8 as of 2024.",
      options: ["Harvard", "Yale", "Princeton", "Slippery Rock State University"],
      correctAnswer: "Harvard",
      explanation: "The last president who did not have a college degree was Harry S Truman, elected in 1944. "
    },
    {
      id: 1591,
      question: "This then-intern and her blue dress almost brought down the presidency of Bill Clinton.",
      options: ["Monica Lewinsky", "Juanita Broaddrick", "Gennifer Flowers", "Paula Jones"],
      correctAnswer: "Monica Lewinsky",
      explanation: "The affair led to an impeachment of Clinton. Lewinsky is now an activist against cyberbullying."
    },
    {
      id: 1592,
      question: "Ruth Bader Ginsburg was appointed to the Supreme Court by this president.",
      options: ["Bill Clinton", "Barack Obama", "George W Bush", "George HW Bush"],
      correctAnswer: "Bill Clinton",
      explanation: "Known as \"the Notorious RBG\", she was a liberal icon whose determination to stay on the Court until her death in 2020 led to Trump getting another Supreme Court nominee."
    },
    {
      id: 1593,
      question: "The Family and Medical Leave Act, giving up to 12 weeks of leave, was signed into law by this president.",
      options: ["Bill Clinton", "Barack Obama", "George W Bush", "Jimmy Carter"],
      correctAnswer: "Bill Clinton",
      explanation: "To be eligible for FMLA, a person must have worked for their employer for at least 12 months, have worked at least 1,250 hours, and the employer must have at least 50 employees."
    },
    {
      id: 1594,
      question: "He was the first sitting president to visit an Olympic games outside the US, when he attended the Summer Olympics in Beijing.",
      options: ["George W Bush", "Barack Obama", "Joe Biden", "Donald Trump"],
      correctAnswer: "George W Bush",
      explanation: "Bush was a well-known sports fan, and was hoping to separate the Olympics from politics by attending the Games as a fan."
    },
    {
      id: 1595,
      question: "He was the first elected president to be impeached.",
      options: ["Bill Clinton", "Andrew Johnson", "Donald Trump", "Richard Nixon"],
      correctAnswer: "Bill Clinton",
      explanation: "Johnson was the first to be impeached in 1868, but he became president upon Lincoln's assassination. Nixon resigned before impeachment. Trump was impeached twice so far (as of 2025)."
    },
    {
      id: 1596,
      question: "He was the only president to have been a Rhodes Scholar.",
      options: ["Bill Clinton", "George Washington", "Abraham Lincoln", "George W Bush"],
      correctAnswer: "Bill Clinton",
      explanation: "Rhodes Scholars are selected from American universities based on their scholarly achievements, commitment to others and the common good, and their potential for leadership in their field."
    },
    {
      id: 1597,
      question: "Al Gore defeated this Republican by more than 500,000 votes in 2000 but lost the Electoral College vote by 5.",
      options: ["George W Bush", "Bill Clinton", "John McCain", "Mitt Romney"],
      correctAnswer: "George W Bush",
      explanation: "It was the first election since 1888 where the candidate who won the popular vote did not win the presidency."
    },
    {
      id: 1598,
      question: "This president's approach to gays and lesbians in the military was summarized as \"Don't ask, don't tell.\"",
      options: ["Bill Clinton", "Ronald Reagan", "George HW Bush", "Barack Obama"],
      correctAnswer: "Bill Clinton",
      explanation: "Meant to be a compromise that would allow gays to serve without fear of punishment as long as they didn't admit they were gay, it was in effect from 1994-2011. Gays and lesbians can now serve openly."
    },
    {
      id: 1599,
      question: "Who was president during the 9/11 attacks?",
      options: ["George W Bush", "Bill Clinton", "Barack Obama", "Dick Cheney"],
      correctAnswer: "George W Bush",
      explanation: "He was reading a story called \"The Pet Goat\" to a class of first graders, and he pronounced almost every word correctly!"
    },
    {
      id: 1600,
      question: "His administration oversaw the botched response to Hurricane Katrina.",
      options: ["George W Bush", "Bill Clinton", "Barack Obama", "George HW Bush"],
      correctAnswer: "George W Bush",
      explanation: "Bush infamously praised his FEMA director Michael Brown saying, \"Brownie, you're doing a heckuva job!\" Katrina killed 1,833 and cost $170 billion."
    },
    {
      id: 1601,
      question: "He was the only president to have been a part owner of a MLB team.",
      options: ["George W Bush", "Ronald Reagan", "Franklin Delano Roosevelt", "Donald Trump"],
      correctAnswer: "George W Bush",
      explanation: "He purchased part of the Houston Astros with a loan financed in part by his sale of stock in Harken Energy, which created suspicion of insider trading as he was on the board of Harken."
    },
    {
      id: 1602,
      question: "He was the only president to have twin daughters.",
      options: ["George W Bush", "Barack Obama", "Herbert Hoover", "George Washington"],
      correctAnswer: "George W Bush",
      explanation: "Jenna and Barbra are fraternal twins born in 1981. George Washington had no children, Obama had 2 non-twin girls, and Hoover had 2 boys."
    },
    {
      id: 1603,
      question: "He is the only president to have an MBA.",
      options: ["George W Bush", "Bill Clinton", "Donald Trump", "Barack Obama"],
      correctAnswer: "George W Bush",
      explanation: "JFK was the only other president to have gone to graduate school for business, but he audited classes and did not get a degree."
    },
    {
      id: 1604,
      question: "Who was the first president to have their State of the Union address broadcast live on the internet?",
      options: ["Bill Clinton", "Barack Obama", "George HW Bush", "George W Bush"],
      correctAnswer: "Bill Clinton",
      explanation: "His second inauguration in 1997 was the first to be live streamed."
    },
    {
      id: 1605,
      question: "George Washington's inauguration as the first president took place in what city?",
      options: ["New York", "Philadelphia", "Washington D.C.", "Baltimore"],
      correctAnswer: "New York",
      explanation: "The initial Federal Congress was in New York in 1789, but his inauguration was almost 2 months after he started his term."
    },
    {
      id: 1606,
      question: "Until 1937, inaugurations took place in which month?",
      options: ["March", "April", "November", "January"],
      correctAnswer: "March",
      explanation: "It used to be on March 4 (or the 5th if the 4th was a Sunday) as that was the traditional start of the year for government operations. It was moved to January after the 1933 ratification of the 20th amendment."
    },
    {
      id: 1607,
      question: "Who normally officiates at the swearing-in of the new president?",
      options: ["Chief Justice of Supreme Court", "The outgoing president", "The Speaker of the House", "The Secretary of Defense"],
      correctAnswer: "Chief Justice of Supreme Court",
      explanation: "The Chief Justice also presides during a presidential impeachment."
    },
    {
      id: 1608,
      question: "The first plane with the official designation of Air Force One was flown in by this president, in 1953.",
      options: ["Dwight D Eisenhower", "John F Kennedy", "Richard Nixon", "Harry S Truman"],
      correctAnswer: "Dwight D Eisenhower",
      explanation: "The plane was the Columbine II, a 4-prop Lockheed Constellation, and is the only presidential plane to be sold to a private party."
    },
    {
      id: 1609,
      question: "How many of the 55 delegates to the Constitutional Convention actually signed the Constitution?",
      options: ["39", "42", "54", "55"],
      correctAnswer: "39",
      explanation: "Numerous appointed delegates did not actually attend (but still submitted an expense report), and 3 of the attending delegates did not sign because there was no Bill of Rights."
    },
    {
      id: 1610,
      question: "The youngest person to sign the Constitution was James Dayton, 26, a New Jersey delegate. Who was the oldest?",
      options: ["Benjamin Franklin", "George Washington", "Alexander Hamilton", "John Hancock"],
      correctAnswer: "Benjamin Franklin",
      explanation: "Franklin was 81 when he signed, and needed help to do so due to his infirmities."
    },
    {
      id: 1611,
      question: "Of the states in existence at the time of the Constitutional Convention, this is the only one that did not send any delegates.",
      options: ["Rhode Island", "Georgia", "Maine", "Vermont"],
      correctAnswer: "Rhode Island",
      explanation: "Rhode Island was concerned that too much power would be put in a central government, and they feared a loss of religious freedom. Plus they wanted to continue printing their own money."
    },
    {
      id: 1612,
      question: "This state sent the most delegates at the Constitutional Convention, with 8.",
      options: ["Pennsylvania", "New Jersey", "Virginia", "North Carolina"],
      correctAnswer: "Pennsylvania",
      explanation: "The number of delegates was determined by each state. The original purpose of the convention was to fix the Articles of Confederation, but framers quickly moved toward creating an entirely new government."
    },
    {
      id: 1613,
      question: "This state's name was misspelled on the US Constitution.",
      options: ["Pennsylvania", "Connecticut", "California", "Massachusetts"],
      correctAnswer: "Pennsylvania",
      explanation: "Spelled 'Pensylvania' in the spot where the signers signed, it has also been spelled 'Pennsilvania', 'Pensilvania' and 'Pennsyltucky' over the centuries."
    },
    {
      id: 1614,
      question: "Ronald Reagan promoted a space-based laser and particle beam defense system commonly referred to as \"Star Wars\". It's real name was ___.",
      options: ["SDI - Strategic Defense Initiative", "SSS - Stratospheric Shield System", "STOP - Strategic Tropospheric Operations for Protection", "MSM - Missiles Stopping Missiles"],
      correctAnswer: "SDI - Strategic Defense Initiative",
      explanation: "While the system was never successful, some argue that it still helped to bankrupt the Soviet military."
    },
    {
      id: 1615,
      question: "The term for when an accused person is deliverd from one jurisdiction to the law enforcement in another jurisdiction is ____.",
      options: ["Extradition", "Elocution", "Ejectment", "Estoppel"],
      correctAnswer: "Extradition",
      explanation: "The US has extradition treaties with 116 nations, and the very first one was with Ecuador in 1873."
    },
    {
      id: 1616,
      question: "The highest ranking Asian American in US Government was Kamala Harris (who is half Indian American) when she was Vice President. Prior to her, who was the highest ranking Asian American?",
      options: ["Daniel Inouye", "Norman Mineta", "Daniel Akaka", "Bob Matsui"],
      correctAnswer: "Daniel Inouye",
      explanation: "He represented Hawaii for just shy of 50 years, and died in office in 2012."
    },
    {
      id: 1617,
      question: "Who was the first black woman to serve as mayor of Chicago?",
      options: ["Lori Lightfoot", "Keisha Lance Bottoms", "London Breed", "Queen Latifah"],
      correctAnswer: "Lori Lightfoot",
      explanation: "Elected in 2019, she was the first incumbent Chicago mayor in 40 years to not win re-election in 2023. "
    },
    {
      id: 1618,
      question: "The street in Washington, DC, most associated with lobbying is ____ Street.",
      options: ["K", "M", "18th", "L"],
      correctAnswer: "K",
      explanation: "Lobbyists serve a vital role in making sure that large corporations and the wealthy are not unjustly discriminated against by all the poor and middle class people."
    },
    {
      id: 1619,
      question: "How long does a Supreme Court justice serve?",
      options: ["As long as they want", "Until age 72", "For 25 years, regardless of age", "Until their death"],
      correctAnswer: "As long as they want",
      explanation: "Fortunately, Justices practice at the highest ethical, legal and moral standards, and would never do things like take large gifts from donors, rule on cases where they have a conflict of interest, or show support for insurrectionists. "
    },
    {
      id: 1620,
      question: "What word/phrase describes the practice of manipulating district boundaries to give an advantage to one political party?",
      options: ["Gerrymandering", "Filibustering", "Vulcanizing", "Stacking and packing"],
      correctAnswer: "Gerrymandering",
      explanation: "Named after Gov. Eldridge Gerry of Massachusetts, the practice has been widely and illegally (as determined by courts) used by Republicans since 2008 with their project REDMAP."
    },
    {
      id: 1621,
      question: "The \"No Child Left Behind\" Act was signed into law in 2002 by this President.",
      options: ["George W Bush", "Barack Obama", "Bill Clinton", "George HW Bush"],
      correctAnswer: "George W Bush",
      explanation: "The NCLB Act made sure that US school children were no longer at the bottom in math and reading scores, and guaranteed that all children would be above average. The law performed so well that it was completely abandoned in 2015, because the US had clearly become the smartest country in the world! USA! USA! USA!"
    },
    {
      id: 1622,
      question: "Arising from the Dutch term for \"free booter\" (meaning a plunderer), this is the word used to describe the delaying tactic often used in Congress.",
      options: ["Filibuster", "Gerrymander", "Cloture", "Adjournment sine die"],
      correctAnswer: "Filibuster",
      explanation: "The first filibuster occurred at the very first Senate meeting in 1789, when Virginia representatives spoke at length to delay passage of a bill."
    },
    {
      id: 1623,
      question: "The Super PAC \"Americans for a Better Tomorrow, Tomorrow\" was founded by this late night comedian in 2012.",
      options: ["Stephen Colbert", "Jimmy Kimmel", "Jimmy Fallon", "Jon Stewart"],
      correctAnswer: "Stephen Colbert",
      explanation: "Colbert also ran for President in 2008 and hosted a Rally to Restore Sanity and/or Fear in 2010 along with Jon Stewart."
    },
    {
      id: 1624,
      question: "Who lives at #10 Downing Street?",
      options: ["The Prime Minister of the UK", "Oscar the Grouch", "The Vice President of the US", "The Speaker of the House"],
      correctAnswer: "The Prime Minister of the UK",
      explanation: "It is actually a combination of 3 houses that has over 100 rooms and a half-acre garden in the back, all right next to St James Park."
    },
    {
      id: 1625,
      question: "In June 1987, who did Ronald Reagan demand tear down the Berlin wall?",
      options: ["Mikhail Gorbachev", "Helmut Kohl", "Margaret Thatcher", "Vladimir Putin"],
      correctAnswer: "Mikhail Gorbachev",
      explanation: "Standing in front of the Brandenburg Gate, Reagan gave the speech that many of his advisors did not want him to give. The wall came down in 1989."
    },
    {
      id: 1626,
      question: "This document was the first governing document for the newly formed United States. ",
      options: ["Articles of Confederation", "Declaration of Independence", "US Constitution", "Magna Carta"],
      correctAnswer: "Articles of Confederation",
      explanation: "The Articles went into effect in 1781 and served as the first framework for the new government, and it purposely kept the central government weak. The Constitution replaced the Articles in 1789."
    },
    {
      id: 1627,
      question: "Who presided over the Constitutional Convention in Philadelphia in 1787, that wound up writing the US Constitution?",
      options: ["George Washington", "James Madison", "Alexander Hamilton", "Benjamin Franklin"],
      correctAnswer: "George Washington",
      explanation: "Its purpose was to revise the Article of Confederation, not to rewrite a constitution, and it was not even called the Constitutional Convention, but rather, the Philadelphia Convention or the Federal Convention."
    },
    {
      id: 1628,
      question: "Which of the following countries does NOT have an extradition agreement with the US?",
      options: ["China", "Egypt", "Mexico", "Kenya"],
      correctAnswer: "China",
      explanation: "While many US criminals may flee to Mexico, they do, in fact, have an extradition agreement with the US."
    },
    {
      id: 1629,
      question: "Martin Sheen's character on The West Wing was named _____, who was a direct descendent of a signer of the Declaration of Independence of the same name.",
      options: ["Josiah Bartlet", "George Taylor", "James Wilson", "Button Gwinnett"],
      correctAnswer: "Josiah Bartlet",
      explanation: "The fictional Jed Bartlet served 2 terms as President. Button Gwinnett was one of 8 foreign-born signers of the Declaration."
    },
    {
      id: 1630,
      question: "This president, elected in 1856, never married during his life, but came close a few times.",
      options: ["James Buchanan", "Andrew Jackson", "Andrew Johnson", "James K Polk"],
      correctAnswer: "James Buchanan",
      explanation: "His brief engagement to Anna Coleman was ended by her after a few months, and shortly after she died from \"hysterical convulsions\". "
    },
    {
      id: 1631,
      question: "The Vice President's home has been _________ since 1974.",
      options: ["The Naval Observatory", "The Old Executive Building", "The Pentagon", "The Smithsonian Institution Castle"],
      correctAnswer: "The Naval Observatory",
      explanation: "The building at Number One Observatory Circle was built in 1893 and previously housed the Chief of Naval Operations. It is believed that a nuclear bunker was built under the building after the 9/11 attacks."
    },
    {
      id: 1632,
      question: "This person holds the record (as of 2024) for running for president the most times, at nine.",
      options: ["Harold Stassen", "Ralph Nader", "Bernie Sanders", "Lyndon Larouche"],
      correctAnswer: "Harold Stassen",
      explanation: "He was the youngest governor MN has ever had, and he ran for president 9 times between 1944 and 1992, as well as running for various other political offices in MN and PA. Larouche ran for president 8 times."
    },
    {
      id: 1633,
      question: "He was the first US President to visit all 50 states while in office.",
      options: ["Richard Nixon", "Gerald Ford", "Ronald Reagan", "Jimmy Carter"],
      correctAnswer: "Richard Nixon",
      explanation: "Nixon visited all 50 during his unsuccessful bid for president in 1960, and did it again during his first term starting in 1969. George HW Bush, Bill Clinton and Barack Obama are the other 3 who have done this. "
    },
    {
      id: 1634,
      question: "He is the only president to have served as a ranger for the National Park Service.",
      options: ["Gerald Ford", "Jimmy Carter", "Theodore Roosevelt", "Barack Obama"],
      correctAnswer: "Gerald Ford",
      explanation: "He worked at Yellowstone in 1936 as a ranger and called it \"the greatest summer of my life\"."
    },
    {
      id: 1635,
      question: "He is the only president to have earned a PhD, in history and political science from Johns Hopkins.",
      options: ["Woodrow Wilson", "Bill Clinton", "Herbert Hoover", "Dwight D Eisenhower"],
      correctAnswer: "Woodrow Wilson",
      explanation: "Wilson was considered to be the father of modern liberalism and was the leading architect of the League of Nations, dedicated to world peace."
    },
    {
      id: 1636,
      question: "He was the first president to be arrested while in office.",
      options: ["Ulysses S Grant", "Donald Trump", "Richard Nixon", "George W Bush"],
      correctAnswer: "Ulysses S Grant",
      explanation: "While there is some question as to the details, it appears Grant was arrested in 1872 for speeding on a horse in Washington DC. Trump was arrested for interfering with the election in Georgia, and indicted 3 other times, with 91 total charges as of 2024. Bush was arrested prior to elected office, for DUI. Nixon was never arrested or charged with crimes."
    },
    {
      id: 1637,
      question: "Which of these two-term presidents had a VP that did not go on to become president?",
      options: ["Bill Clinton", "Ronald Reagan", "Barack Obama", "George HW Bush"],
      correctAnswer: "Bill Clinton",
      explanation: "Clinton's VP was Al Gore, who conceded the 2000 election after the Supreme Court stepped in. George HW Bush only served one term, but it would have been very funny to have a President Quayle."
    },
    {
      id: 1638,
      question: "The long-running TV show M*A*S*H was set during the Korean War. Who was the president during this time?",
      options: ["Harry S Truman", "John F Kennedy", "Lyndon Johnson", "Dwight D Eisenhower"],
      correctAnswer: "Harry S Truman",
      explanation: "The US involvement in the 'police action' lasted from 1950-1953, whereas the show ran from 1972-1983. There is no truce between North and South Korea to this day."
    },
    {
      id: 1639,
      question: "The majority of presidents have been inaugurated in this month.",
      options: ["March", "January", "November", "December"],
      correctAnswer: "March",
      explanation: "Until 1933, inaugurations were held in March, and it was the 20th Amendment that changed the month to January."
    },
    {
      id: 1640,
      question: "Which of these presidents DID attend the swearing in of their successor?",
      options: ["George Washington", "Donald Trump", "John Adams", "John Quincy Adams"],
      correctAnswer: "George Washington",
      explanation: "John Adams was the first to not attend, because his successor, Thomas Jefferson, was previously a good friend, but the men had a falling out. They eventually reconciled, and died within hours of each other on July 4, 1826"
    },
    {
      id: 1641,
      question: "David Rice Atchison may have served one day as President in 1849 because the man elected President, ___, refused to be sworn in on a Sunday.",
      options: ["Zachary Taylor", "Abraham Lincoln", "Ulysses S Grant", "Theodore Roosevelt"],
      correctAnswer: "Zachary Taylor",
      explanation: "Atchison's tombstone reads, \"President of the United States for One Day\". But legal scholars say Taylor was the elected President, he just had not taken the oath of office yet."
    },
    {
      id: 1642,
      question: "In the rom-com Dave, this actor plays both the President and the President's body double, and falls in love with Sigourney Weaver.",
      options: ["Kevin Kline", "Harrison Ford", "Kurt Russell", "Charles Durning"],
      correctAnswer: "Kevin Kline",
      explanation: "Kline's character was initially hired to stand in for the President while he had an affair with a staffer, but he suffered a major stroke during the 'interlude'."
    },
    {
      id: 1643,
      question: "Kevin Spacey played a power-hungry politician who connived his way into the presidency in the Netflix series House of Cards. It was based on a 1990 British series, called ___.",
      options: ["House of Cards", "At Her Majesty's Pleasure", "King for a Day", "All the Queen's Men"],
      correctAnswer: "House of Cards",
      explanation: "Spacey was unceremnously dumped from the show in 2017 after sexual misconduct allegations, and the final season of the show was in 2018 with his wife serving as newly appointed President after his resignation and mysterious death."
    },
    {
      id: 1644,
      question: "In the movie Air Force One, the President, played by _____, is a prior Vietnam War Medal of Honor recipient.",
      options: ["Harrison Ford", "Liam Neeson", "Daniel Day Lewis", "George Clooney"],
      correctAnswer: "Harrison Ford",
      explanation: "Ford's character single-handedly kills most of the terrorists, saves his family and dozens of hostages, and pilots Air Force One until seconds before it crashes into the Caspian Sea."
    },
    {
      id: 1645,
      question: "This President set the size of the Supreme Court at nine, by signing the Judiciary Act of 1869.",
      options: ["Ulysses S Grant", "Abraham Lincoln", "Grover Cleveland", "Chester Arthur"],
      correctAnswer: "Ulysses S Grant",
      explanation: "Prior to this Act, the size of the Court varied from 5 to 10 members, depending on which party was in power. It is felt by many current legal scholars that the current size of the Court is much too small for the size of the country."
    },
    {
      id: 1646,
      question: "Which power is NOT exclusive to the US Senate?",
      options: ["Ability to declare war", "Give consent to treaties", "Tries all impeachments", "Approve Supreme Court justices"],
      correctAnswer: "Ability to declare war",
      explanation: "Both the House and the Senate must jointly declare war."
    },
    {
      id: 1647,
      question: "The last formal declaration of war issued by the US was for this war.",
      options: ["World War II", "Korean War", "Vietnam War", "War on Terror"],
      correctAnswer: "World War II",
      explanation: "All 'wars' since then have been mostly Presidents sending troops into countries for \"limited duration\" (such as 20 years in Afghanistan), with Congress giving its \"authorization\"."
    },
    {
      id: 1648,
      question: "Which of the following is a requirement to be a US Senator?",
      options: ["Must be at least 30 years old", "Must be US born", "Must live in the state they want to represent", "Must have held some prior elected office"],
      correctAnswer: "Must be at least 30 years old",
      explanation: "They are only required to be US citizens for 9 years, according to Article 1 Section 3 of the Constitution."
    },
    {
      id: 1649,
      question: "Who presides over the Senate in the absence of the Vice President?",
      options: ["President pro tempore", "Majority whip", "Senate parliamentarian", "Secretary of the Senate"],
      correctAnswer: "President pro tempore",
      explanation: "Typically the longest-serving Senator of the majority party, the president pro tem usually concedes their authority to the majority leader."
    },
    {
      id: 1650,
      question: "How many standing committees does the US House of Representatives have?",
      options: ["20", "11", "6", "26"],
      correctAnswer: "20",
      explanation: "Committee chairs are typically chosen by the party in power. In addition to the 20 standing committees, there are numerous subcommittees and select committees."
    },
    {
      id: 1651,
      question: "This president was responsible for the greatest percent increase in federal debt, growing by a whopping 2,860% during his presidency.",
      options: ["Abraham Lincoln", "Donald Trump", "Ronald Reagan", "George W Bush"],
      correctAnswer: "Abraham Lincoln",
      explanation: "The debt during the Civil War grew from $90 million to $2.68 billion."
    },
    {
      id: 1652,
      question: "He was the first president to ride in a car while on official duties, in 1902.",
      options: ["Theodore Roosevelt", "William McKinley", "Franklin D Roosevelt", "Woodrow Wilson"],
      correctAnswer: "Theodore Roosevelt",
      explanation: "McKinley briefly rode in a private vehicle while visiting family, but Teddy rode in an electric car for an official trip to Connecticutt."
    },
    {
      id: 1653,
      question: "The first car designed to transport the president with Secret Service was a Lincoln V12 convertible nicknamed the Sunshine Special, given to this president in 1939.",
      options: ["Franklin D Roosevelt", "Harry S Truman", "Dwight D Eisenhower", "John F Kennedy"],
      correctAnswer: "Franklin D Roosevelt",
      explanation: "After the attacks on Pearl Harbor, the car was further modified to have underarmor, 1 inch thick bulletproof glass, flat-proof tires and a compartment for machine guns. "
    },
    {
      id: 1654,
      question: "The first White House website was developed during this president's term.",
      options: ["Bill Clinton", "George HW Bush", "George W Bush", "Ronald Reagan"],
      correctAnswer: "Bill Clinton",
      explanation: "George HW Bush's administration was the first to use email, in 1992, and the first White House website was 2 years later."
    },
    {
      id: 1655,
      question: "The tallest US President, as of 2024, was ___.",
      options: ["Abraham Lincoln", "Lyndon Johnson", "James Madison", "Thomas Jefferson"],
      correctAnswer: "Abraham Lincoln",
      explanation: "At 6'4\", he ranks as tallest, while the tallest world leader ever was a former president of Montenegro, Filip Vujanovich, who was 6'7\"."
    },
    {
      id: 1656,
      question: "The shortest US President, as of 2024, was ___.",
      options: ["James Madison", "Willam H Taft", "George Washington", "Lyndon Johnson"],
      correctAnswer: "James Madison",
      explanation: "At 5'4\", he was the shortest, and at 122 pounds (55 kg) he was also the lightest."
    },
    {
      id: 1657,
      question: "Colonists were protesting this tax when they tossed tea into Boston Harbor in 1773.",
      options: ["Tea Act", "Stamp Act", "Coercive Act", "Sugar Act"],
      correctAnswer: "Tea Act",
      explanation: "The Tea Act was the culmination of \"taxation without representation\" and directly led to the start of the Revolutionary War in 1775."
    },
    {
      id: 1658,
      question: "Which of the following presidents was NOT left-handed?",
      options: ["George W Bush", "Gerald Ford", "Barack Obama", "George HW Bush"],
      correctAnswer: "George W Bush",
      explanation: "Of the last 14 presidents, 6 have been left handed. Whereas in the general population, only about 13% of people are lefties."
    },
    {
      id: 1659,
      question: "Which of the following presidents was NOT obese (medically classified as a BMI of 30 or greater)?",
      options: ["Bill Clinton", "Donald Trump", "William Taft", "Grover Cleveland"],
      correctAnswer: "Bill Clinton",
      explanation: "Clinton's BMI peaked at 28.3 during his term. Taft was the fattest, with a BMI of 42.3."
    },
    {
      id: 1660,
      question: "Teddy Roosevelt was the first to decree that the building he lived in be called the White House. Which of the following was NOT one of the names used for the building prior to that?",
      options: ["White Palace", "President's House", "Presidential Mansion", "President's Palace"],
      correctAnswer: "White Palace",
      explanation: "The building's exterior is a white-painted Aquia Creek sandstone, which is naturally brown to light gray."
    },
    {
      id: 1661,
      question: "The designer of the White House was this Irish architect, personally chosen by George Washington.",
      options: ["James Hoban", "Pierre Charles L'Enfant", "Seamus O'Malley", "Peter Whelihan"],
      correctAnswer: "James Hoban",
      explanation: "Hoban previously designed the Columbia, SC capitol building and the Charleston, SC courthouse, which apparently impressed George Washington who chose Hoban."
    },
    {
      id: 1662,
      question: "This president oversaw a massive remodel of the White House from 1949-1952, as it was deemed unsafe for occupancy in 1948.",
      options: ["Harry S Truman", "Dwight D Eisenhower", "Franklin D Roosevelt", "Theodore Roosevelt"],
      correctAnswer: "Harry S Truman",
      explanation: "The original wood timber framing was damaged beyond repair and replaced with steel. Some of the old timbers were sawn into paneling that still lines some of the rooms in the White House today."
    },
    {
      id: 1663,
      question: "This Trump cabinet member in 2025 used the unsecured app Signal to share classified military information among a group including a journalist.",
      options: ["Pete Hegseth", "Kash Patel", "Marco Rubio", "Kristi Noem"],
      correctAnswer: "Pete Hegseth",
      explanation: "But considering his history with alcohol abuse and domestic violence, what's a little national security breach among friends?"
    },
    {
      id: 1664,
      question: "During this war, the White House (and large parts of Washington) were burned, resulting in almost all of the White House being rebuilt.",
      options: ["War of 1812", "World War I", "Spanish American War", "Second Barbary War"],
      correctAnswer: "War of 1812",
      explanation: "The British burned it in 1814 in retaliation for America's attack on York in Canada, and the entire building had to be rebuilt except for the south wall."
    },
    {
      id: 1665,
      question: "This president served in Congress for 18 years after his presidency, and died in Congress in 1848 from a massive stroke.",
      options: ["John Quincy Adams", "William Taft", "Calvin Coolidge", "Grover Cleveland"],
      correctAnswer: "John Quincy Adams",
      explanation: "He had his first known stroke 2 years prior but recovered. His died in the Speaker's Chambers, where his last words were, \"This is the last of earth, but I am content\"."
    },
    {
      id: 1666,
      question: "This president was instrumental in ensuring that football was not abolished, due to the many deaths that were occurring at the time.",
      options: ["Theodore Roosevelt", "Ronald Reagan", "John F Kennedy", "Warren Harding"],
      correctAnswer: "Theodore Roosevelt",
      explanation: "In its earliest days, football was even more brutal than it is now. Many schools were dropping the sport, and Roosevelt stepped in to urge the game to reform its rules to make the game safer."
    },
    {
      id: 1667,
      question: "In 1953, President ___ named Camp David, the presidential retreat in Maryland, after his 5 year old grandson.",
      options: ["Dwight D Eisenhower", "Herbert Hoover", "Franklin D Roosevelt", "Harry S Truman"],
      correctAnswer: "Dwight D Eisenhower",
      explanation: "Built in 1938 by the Works Progress Administration, it was originally called \"Shangri-La\" by Roosevelt."
    },
    {
      id: 1668,
      question: "The Civilian Conservation Corp (CCC) was implemented by this president in 1933 as part of his New Deal.",
      options: ["Franklin D Roosevelt", "Theodore Roosvelt", "Herbert Hoover", "John F Kennedy"],
      correctAnswer: "Franklin D Roosevelt",
      explanation: "Giving conservation jobs to single unemployed men aged 17-28, this part of the New Deal was one of the most successful government programs ever, and ended mainly because of WWII."
    },
    {
      id: 1669,
      question: "Which of the following presidents did NOT have a beard?",
      options: ["Woodrow Wilson", "Abraham Lincoln", "Rutherford Hayes", "Benjamin Harrison"],
      correctAnswer: "Woodrow Wilson",
      explanation: "Hayes had the longest beard of the 5 presidents who have had beards in office, which may have been his greatest accomplishment as president."
    },
    {
      id: 1670,
      question: "As of 2025, he was the only man to be elected twice as VP and twice as President.",
      options: ["Richard Nixon", "Ronald Reagan", "Franklin D Roosevelt", "Bill Clinton"],
      correctAnswer: "Richard Nixon",
      explanation: "He served 2 terms as VP to Dwight Eisenhower, from 1953-1961, and was elected president in 1968 and 1972. He resigned before impeachment for the Watergate scandal in 1974."
    },
    {
      id: 1671,
      question: "The largest currency note ever printed in the US was the $100,000 bill, issued in 1934. Which president's face was on the bill?",
      options: ["Woodrow Wilson", "Frankling D Roosevelt", "George Washington", "Abraham Lincoln"],
      correctAnswer: "Woodrow Wilson",
      explanation: "The bill was only used in interbank transfers and was illegal for the public to own. It was issued as part of a plan to stop gold hoarding among the general public."
    },
    {
      id: 1672,
      question: "Walt Whitman's famous poem, \"O Captain, My Captain\", was written in 1865 as a tribute to this president.",
      options: ["Abraham Lincoln", "George Washington", "Ulysses S Grant", "Thomas Jefferson"],
      correctAnswer: "Abraham Lincoln",
      explanation: "The poem describes a ship's captain dying after piloting the ship through rough and dangerous waters. It was also immortalized in Dead Poet's Society."
    },
    {
      id: 1673,
      question: "Lyndon Johnson's wife was known as \"Lady Bird\" from the time she was an infant. What was her actual first name? ",
      options: ["Claudia", "Lydia", "Sarah", "Penelope"],
      correctAnswer: "Claudia",
      explanation: "She was named after her uncle Claud, but her nanny described her as \"pretty as a ladybird\", and the name stuck."
    },
    {
      id: 1674,
      question: "Which president's administration was commonly referred to as Camelot?",
      options: ["John F Kennedy", "Ronald Reagan", "Franklin D Roosevelt", "George Washington"],
      correctAnswer: "John F Kennedy",
      explanation: "The public overall has a fond memory of Kennedy, his administration, and the US in general at that time, hence the nickname Camelot."
    },
    {
      id: 1675,
      question: "\"Speak softly and carry a big stick\" was a favorite saying of this president.",
      options: ["Theodore Roosevelt", "Richard Nixon", "Thomas Jefferson", "George W Bush"],
      correctAnswer: "Theodore Roosevelt",
      explanation: "He described his approach to foreign policy as \"the exercise of intelligent forethought and of decisive action sufficiently far in advance of any likely crisis\"."
    },
    {
      id: 1676,
      question: "Which of the following presidents did NOT die in office?",
      options: ["William H Taft", "Wiliam McKinley", "Zacharay Taylor", "Franklin Roosevelt"],
      correctAnswer: "William H Taft",
      explanation: "Despite his profound obesity, Taft lived until age 73. The others died in their late 50s or early 60s while serving as president."
    },
    {
      id: 1677,
      question: "Before Watergate, this scandal of the Harding administration was considered the biggest political scandal in the nation's history. (All scandal options offered are real)",
      options: ["Teapot Dome", "Abscam", "XYZ Affair", "Petticoat Affair"],
      correctAnswer: "Teapot Dome",
      explanation: "The scandal involved a cabinet member taking bribes from oil companies to gain access to Navy petroleum reserves in Wyoming and California."
    },
    {
      id: 1678,
      question: "In the 1995 movie The American President, Annette Benning's character, Sydney Wade, pursues the widower President Andrew Shepherd, played by this actor.",
      options: ["Michael Douglas", "John Travolta", "Harrison Ford", "Paul Newman"],
      correctAnswer: "Michael Douglas",
      explanation: "The film was directed by Rob Reiner, written by Aaron Sorkin, grossed $108 million on a $62 million budget, and was nominated for Best Original Musical or Comedy Score Academy Award."
    },
    {
      id: 1679,
      question: "The first woman to run for US president was ___.",
      options: ["Victoria Woodhull", "Geraldine Ferraro", "Hillary Clinton", "Margaret Chase Smith"],
      correctAnswer: "Victoria Woodhull",
      explanation: "She was a suffragist who ran for president in 1872, although she was not technically old enough to legally run for president."
    },
    {
      id: 1680,
      question: "He was the only president to have served as both President of the US and Chief Justice of the Supreme Court.",
      options: ["William H Taft", "George HW Bush", "Calvin Coolidge", "Richard Nixon"],
      correctAnswer: "William H Taft",
      explanation: "He was President from 1909-1913, and was on the Court from 1921 until his death in 1930. "
    },
    {
      id: 1681,
      question: "He was the last non-Democrat or non-Republican to win the Presidency, serving in the mid-19th century.",
      options: ["Millard Fillmore", "Ulysses S Grant", "Theodore Roosevelt", "Franklin Pierce"],
      correctAnswer: "Millard Fillmore",
      explanation: "He was the last president from the Whig Party, a conservative party that produced 4 presidents over a roughly 30 year span."
    },
    {
      id: 1682,
      question: "He was the only president to have run a marathon before becoming president.",
      options: ["George W Bush", "Jimmy Carter", "Bill Clinton", "Barack Obama"],
      correctAnswer: "George W Bush",
      explanation: "He ran the Houston Marathon at age 46, finishing in 3:44."
    },
    {
      id: 1683,
      question: "He was the first vice president to become president after the death of the president, William Harrison, in 1841.",
      options: ["John Tyler", "Millard Fillmore", "Chester Arthur", "Ulysses S Grant"],
      correctAnswer: "John Tyler",
      explanation: "Harrison died just 31 days after inauguration, causing a bit of a crisis for the country, as there was no policy of succession in place at the time."
    },
    {
      id: 1684,
      question: "Fala, who lived from 1940 to 1952, was the famous Scottish terrier belonging to this president, and he was by the President's side until his death in 1945.",
      options: ["Franklin D Roosevelt", "Abraham Lincoln", "Herbert Hoover", "Woodrow Wilson"],
      correctAnswer: "Franklin D Roosevelt",
      explanation: "Soldiers in WWII would ask \"who is the President's dog?\" as a way to check for German infiltrators."
    },
    {
      id: 1685,
      question: "This former president is credited with numerous inventions, among them the swivel chair.",
      options: ["Thomas Jefferson", "Benjamin Franklin", "Abraham Lincoln", "Theodore Roosevelt"],
      correctAnswer: "Thomas Jefferson",
      explanation: "He wrote parts of the Declaration of Independence from his swivel chair. Jefferson also invented a revolving book stand, and improved the design of a pedometer. He even served on a patent review board before becoming president."
    },
    {
      id: 1686,
      question: "He was the last president to have any facial hair (mustache or beard).",
      options: ["William H Taft", "Herbert Hoover", "Calvin Coolidge", "Franklin D Roosevelt"],
      correctAnswer: "William H Taft",
      explanation: "It's thought that facial hair fell out of favor once women gained the right to vote, as well as with the introduction of the double-edged safety razor."
    },
    {
      id: 1687,
      question: "Calvin Coolidge pardoned this animal that was sent to the White House for Thanksgiving dinner in 1926.",
      options: ["Raccoon", "Turkey", "Chicken", "Pig"],
      correctAnswer: "Raccoon",
      explanation: "He would keep the raccoon as a pet, naming it Rebecca. At the time, many farmers would send animals for Thanksgiving, hoping to be chosen as the official provider of the Thanksgiving meal.  "
    },
    {
      id: 1688,
      question: "The first president to ever be featured on a US coin was ____.",
      options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Warren Harding"],
      correctAnswer: "Abraham Lincoln",
      explanation: "In 1909, the penny was redesigned to honor Lincoln. Prior to this time, coins typically had an image of \"Lady Liberty\"."
    },
    {
      id: 1689,
      question: "How many vice presidents have held the office under two different presidents?",
      options: ["2", "0", "1", "11"],
      correctAnswer: "2",
      explanation: "John C Calhoun served under John Quincy Adams and Andrew Jackson, and George Clinton served under Thomas Jefferson and James Madison."
    },
    {
      id: 1690,
      question: "This president was related to 11 other presidents, either by blood or marriage.",
      options: ["Franklin D Roosevelt", "John F Kennedy", "George W Bush", "Thomas Jefferson"],
      correctAnswer: "Franklin D Roosevelt",
      explanation: "He was also related to his wife, Eleanor, as they were 5th cousins once removed."
    },
    {
      id: 1691,
      question: "Only 3 presidents have not had a family pet while in office. Of the following 4 presidents, which one DID have a pet in office?",
      options: ["George HW Bush", "Donald Trump", "James K Polk", "Andrew Johnson"],
      correctAnswer: "George HW Bush",
      explanation: "The Bushes had Millie, an English Springer Spaniel who even wrote her own book, Millie's Book, in 1990."
    },
    {
      id: 1692,
      question: "The first president to host an Easter Egg Roll at the White House was our 19th president, in 1878.",
      options: ["Rutherford B Hayes", "Theodore Roosevelt", "William McKinley", "Abraham Lincoln"],
      correctAnswer: "Rutherford B Hayes",
      explanation: "Prior to the first one on the South Lawn, they were held on the Capitol grounds but caused a lot of damage to the grass. It has been held every year since on the South Lawn, except for 2020 and 2021 (due to COVID-19)."
    },
    {
      id: 1693,
      question: "The tradition of a sitting president throwing out the ceremonial first pitch at a baseball game began in 1910 with this president, throwing out a ball at the Washington Senators opening day.",
      options: ["William H Taft", "Theodore Roosevelt", "Calvin Coolidge", "Woodrow Wilson"],
      correctAnswer: "William H Taft",
      explanation: "The only presidents to not do it during their time in office (as of 2025) are Jimmy Carter (but he did do it after leaving office), Joe Biden (but he did do it while Vice President), and Donald Trump (who said he was going to do it in 2020 but oddly never did)."
    },
    {
      id: 1694,
      question: "As of 2024, which state has produced the most presidents, at 8?",
      options: ["Virginia", "Illinois", "Texas", "New York"],
      correctAnswer: "Virginia",
      explanation: "The eight men that were born there are George Washington, Thomas Jefferson, James Madison, James Monroe, William Henry Harrison, John Tyler, Zachary Taylor, and Woodrow Wilson."
    },
    {
      id: 1695,
      question: "While campaigning for office, this president was shot in the chest, but he still gave his 50-minute speech.",
      options: ["Theodore Roosevelt", "Ronald Reagan", "Abraham Lincoln", "Calvin Coolidge"],
      correctAnswer: "Theodore Roosevelt",
      explanation: "The bullet passed through a steel eyeglass case as well as a 50-page speech in his pocket, but still lodged in the left side of his chest, where it remained til his death in 1919."
    },
    {
      id: 1696,
      question: "Which of the following treatments was NOT done for William Harrison, the 9th president in 1841, who died after just 31 days in office?",
      options: ["Antibiotics", "Mustard plaster", "Bloodletting", "Cupping"],
      correctAnswer: "Antibiotics",
      explanation: "The first true antibiotic, penicillin, was discovered in 1928 by Alexander Fleming."
    },
    {
      id: 1697,
      question: "This president signed an order in 1948 to desegregate the military.",
      options: ["Harry S Truman", "Franklin D Roosevelt", "Dwight D Eisenhower", "John F Kennedy"],
      correctAnswer: "Harry S Truman",
      explanation: "He tried to get Congress to pass a comprehensive civil rights law, but they refused, so he signed an Executive Order which desegregated the military."
    },
    {
      id: 1698,
      question: "Which of these presidents did NOT die on July 4th?",
      options: ["Calvin Coolidge", "Thomas Jefferson", "James Monroe", "John Adams"],
      correctAnswer: "Calvin Coolidge",
      explanation: "Coolidge was actually born on July 4, 1872, the only president born on July 4."
    },
    {
      id: 1699,
      question: "This president was the only person with a physical disability elected to the presidency (as of 2024).",
      options: ["Franklin D Roosevelt", "Herbert Hoover", "Woodrow Wilson", "William McKinley"],
      correctAnswer: "Franklin D Roosevelt",
      explanation: "He came down with a flaccid paralysis at age 39, which was assumed to be 'infantile paralysis', and he was paralyzed from the waist down. Current medical thinking is that he may have had a condition called Guillain-Barre Syndrome instead, which was not a well known condition at that time. "
    },
    {
      id: 1700,
      question: "This Washington, DC street is synonymous with lobbying and lobbyists.",
      options: ["K Street", "L Street", "M Street", "P Street"],
      correctAnswer: "K Street",
      explanation: "In recent years, most of the large lobbying and advocacy groups have moved from their K Street addresses to larger sites nearby. Because buying politicians is the true American pasttime."
    },
    {
      id: 1701,
      question: "This political party started in the 1850s as a secret society, and was anti-immigrant and other minorities, nativist, and anti-Catholic. ",
      options: ["Know Nothing Party", "Republican Party", "Whig Party", "Personal Choice Party"],
      correctAnswer: "Know Nothing Party",
      explanation: "Officially known as the American Party, its members were required to answer \"I know nothing\" in response to any questions about the party and its platforms by outsiders."
    },
    {
      id: 1702,
      question: "This president established NASA, the National Aeronautics and Space Administration, in 1958.",
      options: ["Dwight D Eisenhower", "John F Kennedy", "Franklin D Roosevelt", "Gerald Ford"],
      correctAnswer: "Dwight D Eisenhower",
      explanation: "NASA succeeded the National Advisory Committee for Aeronatics which was established in 1915."
    },
    {
      id: 1703,
      question: "This Amendment, passed in 1961, gave the District of Columbia the right to participate in presidential elections and granted it 3 electoral votes.",
      options: ["23rd", "17th", "25th", "26th"],
      correctAnswer: "23rd",
      explanation: "The district can never have more electoral votes than the least populated state. The district also does not have full voting rights in Congress."
    },
    {
      id: 1704,
      question: "This form of government involves rulers who enrich themselves at the expense of those who are governed, with no regard for the rule of law.",
      options: ["Kleptocracy", "Plutocracy", "Oligarchy", "Kakistocracy"],
      correctAnswer: "Kleptocracy",
      explanation: "While normally associated with dictatorships, kleptocracies can also be found in democracies where there is cronyism and lack of government oversight and accountability. Fun fact for 2025: A kakistocracy is a government run by the least qualified, most unscrupulous people."
    },
    {
      id: 1705,
      question: "The G7 is a group made of the 7 largest democracies in the world. Which of these countries is NOT part of the G7?",
      options: ["Spain", "Italy", "France", "Germany"],
      correctAnswer: "Spain",
      explanation: "The group tries to discuss and devise solutions to major global challenges, such as trade, security and climate change."
    },
    {
      id: 1706,
      question: "William H Seward was the Secretary of State for this president, when he helped arrange for the purchase of Alaska from Russia in 1867.",
      options: ["Andrew Johnson", "Theodore Roosevelt", "Calvin Coolidge", "Thomas Jefferson"],
      correctAnswer: "Andrew Johnson",
      explanation: "At a cost of $0.36 per acre, the purchase was considered the biggest accomplishment of the otherwise dismal Johnson presidency."
    },
    {
      id: 1707,
      question: "Shirley Chisholm was the first black woman to serve in the US Congress, elected in 1968 to represent the Bedford-Stuyvesent district in this state. ",
      options: ["New York", "Arizona", "Arkansas", "Florida"],
      correctAnswer: "New York",
      explanation: "Her campaign slogan was \"unbought and unbossed\", and she served 7 terms. She even unsuccessfully ran for president in 1972."
    },
    {
      id: 1708,
      question: "In 1958, high school junior Robert Heft designed this item for the government, which is still in use today.",
      options: ["US Flag", "$2 bill", "Official census format", "Logo for the National Park Service"],
      correctAnswer: "US Flag",
      explanation: "He designed the flag for a school project in anticipation of AK and HI becoming states. His teacher initially gave him a B-, but raised it to an A when the flag was chosen by President Eisenhower to be the official flag. "
    },
    {
      id: 1709,
      question: "This Constitutional amendment states that any Congressional pay changes do not take effect until the next House election cycle, and took almost 203 years to be passed.",
      options: ["27th", "22nd", "3rd", "16th"],
      correctAnswer: "27th",
      explanation: "The final amendment was first proposed in September 1789 (at the same time as the original Bill of Rights) but did not get passed until May 1992, and even then only due to the work of a college sophomore named Greg Watson starting in 1982."
    },
    {
      id: 1710,
      question: "This Amendment allows for the removal of a president who is unfit, and also specifies that the VP becomes president if the existing president dies or leaves office.",
      options: ["25th", "20th", "13th", "8th"],
      correctAnswer: "25th",
      explanation: "It is section 4 of the amendment that addresses the Vice President and Cabinet declaring a president incapacitated or unable to fulfill their duties, if the President him/herself does not voluntarily declare themselves unable to fulfill their duties. "
    },
    {
      id: 1711,
      question: "This Amendment allowed 18 year olds to vote in federal elecations, and was the fastest to be passed in just 100 days in 1971.",
      options: ["26th", "23rd", "24th", "25th"],
      correctAnswer: "26th",
      explanation: "It was developed largely in response to the Vietnam War draft, which drafted men at age 18, while federal voting age was 21 at the time."
    },
    {
      id: 1712,
      question: "Which of the following does NOT fall under the power of the National Archives?",
      options: ["Enforcing federal laws", "Preserving the original Declaration of Indepence", "Ensuring public access to government documents", "Transmitting Electoral College votes to Congress"],
      correctAnswer: "Enforcing federal laws",
      explanation: "Enforcing federal laws is the function of the Department of Justice. The National Archives and Records Administration was established in 1934 and became an independent agency in 1984."
    },
    {
      id: 1713,
      question: "This act, formally known as the Wall Street Reform and Consumer Protection Act, was passed in 2010 in response to the Great Recession, but is more commonly known by this name, reflecting the names of its two sponsors.",
      options: ["Dodd-Frank", "Glass-Steagall", "Bankhead-Jones", "Lee-Lifeson"],
      correctAnswer: "Dodd-Frank",
      explanation: "Among other things, the act created the Consumer Financial Protection Bureau, designed to protect consumers from credit card and mortgage abuses. As of 2025, Trump is dismantling it, because clearly consumers need no protection from companies anymore."
    },
    {
      id: 1714,
      question: "The 16th Amendment, passed in 1909 and ratified in 1913, allowed Congress to levy a tax on this.",
      options: ["Income", "Alcohol", "Tobacco", "Capital gains"],
      correctAnswer: "Income",
      explanation: "The first federal income tax was actually levied in 1861 to help pay for the Civil War. It was 3% of all income over the equivalent of $21,000."
    },
    {
      id: 1715,
      question: "Which one of these is NOT a presidential power?",
      options: ["Approving foreign treaties", "Vetoing legislation", "Nominating Supreme Court justices", "Receiving ambassadors"],
      correctAnswer: "Approving foreign treaties",
      explanation: "The president can negotiate and sign treaties with the advice and consent of the Senate, which must approve the treaty by a 2/3 majority."
    },
    {
      id: 1716,
      question: "The highest peak in North America, Denali, was previously named in honor of this President elected in 1896.",
      options: ["McKinley", "Taft", "Monroe", "Roosevelt"],
      correctAnswer: "McKinley",
      explanation: "At 20,310 ft (6,190m), it also has one of the highest base-to-peak heights of about 18,000 ft (greater than Everest) and has the longest glacier in the Alaska range, at 44 miles long."
    },
    {
      id: 1717,
      question: "In what year did a divided US Supreme Court rule that same sex marriage was legal in all 50 states, DC and US territories?",
      options: ["2015", "2013", "2009", "2017"],
      correctAnswer: "2015",
      explanation: "The case, Obergefell v Hodges, was a 5-4 decision that argued the plaintiffs' 14th amendment rights were violated."
    },
    {
      id: 1718,
      question: "Former VP Al Gore won a Nobel Peace Prize. Only one other VP has done this, Charles Gates Dawes, who was VP under this President from 1925-1929.",
      options: ["Calvin Coolidge", "Warren Harding", "Herbert Hoover", "Franklin Roosevelt"],
      correctAnswer: "Calvin Coolidge",
      explanation: "He won for his post-WWI peace plan. He also co-wrote a song that became a #1 hit in 1951, \"It's All In The Game\"."
    },
    {
      id: 1719,
      question: "Who was president during the space shuttle Challenger disaster?",
      options: ["Ronald Reagan", "George HW Bush", "Jimmy Carter", "Bill Clinton"],
      correctAnswer: "Ronald Reagan",
      explanation: "The shuttle broke up 73 seconds into its flight in 1986 due to a known faulty O-ring, killing all 7 aboard including classroom teacher Christa McAuliffe."
    },
    {
      id: 1720,
      question: "This president issued the official government apology to the survivors of the Tuskegee Study, which purposefully did not treat 400 black men who had syphilis despite an easy treatment being available for decades.",
      options: ["Bill Clinton", "Donald Trump", "Barack Obama", "George W Bush"],
      correctAnswer: "Bill Clinton",
      explanation: "The study was meant to last for only 6 months, but instead went from 1932-1972 and resulted in the death of 128 of the men. It is considered the worst breach of medical ethics in the US. "
    },
    {
      id: 1721,
      question: "The first woman to hold federal office was ___, elected from Montana in 1916 to the US House.",
      options: ["Jeanette Rankin", "Harriet Tubman", "Elizabeth Cady Stanton", "Rebecca Latimer Felton"],
      correctAnswer: "Jeanette Rankin",
      explanation: "A life-long Pacifist elected before women even had the right to vote, she served one term but was elected again in 1940. To this day, she is the only woman elected to Congress from Montana."
    },
    {
      id: 1722,
      question: "____ was the first woman to serve in the US Senate, representing Georgia in 1922, and she was also an avowed white supremacist.",
      options: ["Rebecca Latimer Felton", "Rosa Parks", "Shirley Chisholm", "Doris A Davis"],
      correctAnswer: "Rebecca Latimer Felton",
      explanation: "Serving for just one day, she was also the last slave-holding member of Congress."
    },
    {
      id: 1723,
      question: "Robert E Lee surrendered to Ulysses S Grant at this Civil War battle site in Virginia, effectively ending the Civil War in 1865.",
      options: ["Appomattox Courthouse", "Gettysburg", "Bull Run", "Antietam"],
      correctAnswer: "Appomattox Courthouse",
      explanation: "The final battle for Lee occurred as he was trying to retreat west after a bruising and unsuccessful battle for Richmond, VA."
    },
    {
      id: 1724,
      question: "This president signed the Indian Removal Act of 1830, which forcibly moved over 60,000 native Americans west of the Mississippi.",
      options: ["Andrew Jackson", "John Quincy Adams", "John Tyler", "Zachary Taylor"],
      correctAnswer: "Andrew Jackson",
      explanation: "The \"Trail of Tears\" was designed to effectively remove all natives east of the Mississippi and south of the Great Lakes, and meant to appease southern states by removing native land claims and expanding white settlement and slavery. "
    },
    {
      id: 1725,
      question: "The website FiveThirtyEight (538) was created by this person to serve as a place for political analysis, opinion polls and economics.",
      options: ["Nate Silver", "Sam Bankman Fried", "Elon Musk", "Al Gore"],
      correctAnswer: "Nate Silver",
      explanation: "First gaining notoriety during the 2008 presidential election, 538 was known for incorporating both polls and demographics and has generally been more accurate than just polls alone. Silver left in 2023, and its new owner, Disney, closed it in 2025."
    },
    {
      id: 1726,
      question: "He is the only Eagle Scout to have become President, even though he was never actually elected to the office.",
      options: ["Gerald Ford", "John F Kennedy", "Bill Clinton", "Donald Trump"],
      correctAnswer: "Gerald Ford",
      explanation: "JFK was the first President who was a Scout as a kid, reaching the level of Star Scout. Clinton was a Cub Scout. Trump says he tried to join, but couldn't pass the physical due to bone spurs in his feet."
    },
    {
      id: 1727,
      question: "She was the first female Speaker of the House, elected during George W Bush's tenure.",
      options: ["Nancy Pelosi", "Alexandria Ocasio Cortez", "Tammy Baldwin", "Hillary Clinton"],
      correctAnswer: "Nancy Pelosi",
      explanation: "A completely non-polarizing figure on both the left and the right, she even has a street named in her honor in her hometown of San Francisco."
    },
    {
      id: 1728,
      question: "This radio personality ran for governor of New York in 1994, on a platform of reinstating the death penalty, removing highway tolls, and having road work only done at night.",
      options: ["Howard Stern", "Rush Limbaugh", "Terry Gross", "Ira Glass"],
      correctAnswer: "Howard Stern",
      explanation: "Running under the Libertarian ticket, he promised to resign as soon as he achieved these 3 platform goals. He withdrew from the race as he refused to complete the required financial disclosure form. "
    },
    {
      id: 1729,
      question: "This person was the first black Secretary of State, serving from 2001 to 2005.",
      options: ["Colin Powell", "Condoleeza Rice", "Barack Obama", "Jesse Jackson"],
      correctAnswer: "Colin Powell",
      explanation: "Powell served in the Army and rose to become a general, and has earned both the Purple Heart and the Presidential Medal of Freedom (twice)."
    },
    {
      id: 1730,
      question: "Who was the first sitting president to use a dedicated official Twitter / X account?",
      options: ["Barack Obama", "Donald Trump", "Bill Clinton", "George W Bush"],
      correctAnswer: "Barack Obama",
      explanation: "Obama launched the @POTUS handle, but only Trump has used it like an angry tween mean girl since day 1."
    },
    {
      id: 1731,
      question: "Which of the following members of the second Trump administration were NOT former Fox News hosts?",
      options: ["JD Vance", "Dan Bongino", "Pete Hegseth", "Sean Duffy"],
      correctAnswer: "JD Vance",
      explanation: "Despite his frat boy vibes and love of conspiracy theories, he did not work at Fox. Vance was a Yale Law school grad who once described Trump as \"an idiot\" and \"reprehensible\", and compared him to Hitler. "
    },
    {
      id: 1732,
      question: "This president signed the fewest executive orders during their time in office.",
      options: ["William Harrison", "Donald Trump", "Franklin D Roosevelt", "George Washington"],
      correctAnswer: "William Harrison",
      explanation: "FDR signed 3,726 over his 12 years in office, for an average of 307 per year. Trump has signed 427 as of September 2025. Washington signed one. Harrison signed zero."
    },
    {
      id: 1733,
      question: "Which of the following sitting Vice Presidents shot and killed a man?",
      options: ["Aaron Burr", "Dick Cheney", "Richard Nixon", "Dan Quayle"],
      correctAnswer: "Aaron Burr",
      explanation: "Burr killed Alexander Hamilton in a duel. Cheney shot a 78 year attorney in the face, neck and chest in a 'hunting accident' but the man lived."
    }
  ],
  'custom-trivia': []
};

export function getQuestionsByCategory(category: string): Question[] {
  const baseQuestions = JSON.parse(JSON.stringify(triviaData[category] || []));
  const loadedQuestionIds = new Set(baseQuestions.map((q: Question) => q.id));

  if (typeof window !== 'undefined') {
    try {
      const storedQuestionsRaw = localStorage.getItem(category);
      if (storedQuestionsRaw) {
        const storedQuestions: Question[] = JSON.parse(storedQuestionsRaw);
        
        if (Array.isArray(storedQuestions)) {
          for (const storedQ of storedQuestions) {
            if (storedQ && typeof storedQ.id !== 'undefined' && !loadedQuestionIds.has(storedQ.id)) {
              baseQuestions.push(storedQ);
              loadedQuestionIds.add(storedQ.id);
            }
          }
        }
      }
    } catch (error) {
      console.error("Error parsing questions from localStorage:", error);
    }
  }
  
  return baseQuestions;
}
