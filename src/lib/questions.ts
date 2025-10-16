
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
      id: 501,
      question: "Which land mammal has the most teeth?",
      options: ["Giant armadillo","Domestic dog","Lion","Sloth"],
      correctAnswer: "Giant armadillo",
      explanation: "They have 80-100 teeth, but snails win the award for most teeth of any animal, with up to 25,000 tiny teeth to chew on the vegetables you are trying to grow."
    },
    {
      id: 502,
      question: "What is the name of the patient in the game Operation?",
      options: ["Cavity Sam","Bob the Body","Fat Freddy","He has no name"],
      correctAnswer: "Cavity Sam",
      explanation: "John Spinello designed the game and sold it to a toy designer for $500 and the promise of a job when he graduated - which he did not get."
    },
    {
      id: 503,
      question: "Where did Calypso music originate?",
      options: ["Trinidad & Tobago","Jamaica","Barbados","Cuba"],
      correctAnswer: "Trinidad & Tobago",
      explanation: "It has its origins in West Africa and the word may come from the Efik phrase \"ka isu\", meaning \"go on!\""
    },
    {
      id: 504,
      question: "The tiny pocket in Levi's denim jeans was meant to hold this.",
      options: ["A pocket watch","Coins","A key","One extra bullet"],
      correctAnswer: "A pocket watch",
      explanation: "The famous copper rivets were placed at all the stress points to make the pants last longer."
    },
    {
      id: 505,
      question: "What is the term for when flocks of starlings swoop and swirl in unison?",
      options: ["Murmuration","Confabulation","Auscultation","Ornithation"],
      correctAnswer: "Murmuration",
      explanation: "Clarice Starling, plyaed by Jodie Foster in the movie, was the fictional protagonist of the Silence of the Lambs."
    },
    {
      id: 506,
      question: "Which of the following is NOT considered a star (stellar) remnant?",
      options: ["Red giant","White dwarf","Black hole","Neutron star"],
      correctAnswer: "Red giant",
      explanation: "A red giant is a late phase star, and our own sun will become one in about 5 billion years, at which point it will likely consume Mars, Venus and Earth."
    },
    {
      id: 507,
      question: "If you straightened the groove on a typical 12-inch music album, how far would the line be (in feet)?",
      options: ["1,500","500","3,000","5,280"],
      correctAnswer: "1,500",
      explanation: "A typical LP would have about 18-22 minutes of music per side, with about 667 threads."
    },
    {
      id: 508,
      question: "This product was originally designed in Cincinnatti in the 1930s by a soap manufacturer and went on to become a child's toy still sold today.",
      options: ["Play Doh","Slinky","Shrinky Dinks","Slime"],
      correctAnswer: "Play Doh",
      explanation: "It was originally used to remove coal residue from walls when coal was used to heat homes."
    },
    {
      id: 509,
      question: "The inventor of this widely consumed drink hoped to combat morphine addiction with his product.",
      options: ["Coca Cola","Dr Pepper","Vernor's Ginger Ale","Moxie"],
      correctAnswer: "Coca Cola",
      explanation: "It should not be confused with Coca Colla, a Bolivian energy drink made since 2010 that contains actual coca leaf extract."
    },
    {
      id: 510,
      question: "This mouthwash was originally developed as a surgical antiseptic.",
      options: ["Listerine","Scope","Cepacol","Oral B"],
      correctAnswer: "Listerine",
      explanation: "Dr Joseph Lister was the first to note that surgical dressings treated with phenol would cause fewer infections. The antiseptic was named in honor of him."
    },
    {
      id: 511,
      question: "Rogaine's original purpose was to treat this common medical condition.",
      options: ["High blood pressure","Erectile dysfunction","High cholesterol","Diabetes"],
      correctAnswer: "High blood pressure",
      explanation: "Interestingly, rogaining is an orienteering sport of long-distance cross-country navigation where events can last 24 hours."
    },
    {
      id: 512,
      question: "Bubble wrap was originally intended to be a new kind of _____.",
      options: ["Wallpaper","Children's toy","Surgical dressing","Furniture cover"],
      correctAnswer: "Wallpaper",
      explanation: "The first widespread use of the material in packaging was in 1960 with IBM 1401 computers, the \"Model T\" of computers."
    },
    {
      id: 513,
      question: "This British royal is pictured on every bottle of Bombay Sapphire gin, even though the gin was first released in 1986, long after this ruler had died.",
      options: ["Queen Victoria","King George","Queen Elizabeth","King Edward"],
      correctAnswer: "Queen Victoria",
      explanation: "Some of the unique ingredients of this gin include orris root, cubeb and grains of paradise."
    },
    {
      id: 514,
      question: "A group of cobras is known as a(n) ________.",
      options: ["Quiver","Gaggle","Murder","Aspen"],
      correctAnswer: "Quiver",
      explanation: "Quiver of Cobras is also book 2 of 3 in the Fractured Faery series by Helen Harper."
    },
    {
      id: 515,
      question: "This airline was the first to introduce online check in, in 1999.",
      options: ["Alaska Airlines","Southwest","United","American"],
      correctAnswer: "Alaska Airlines",
      explanation: "It began as McGee Airways in 1932, flying between Anchorage and Bristol Bay."
    },
    {
      id: 516,
      question: "Niagara Falls consists of three falls, American, Horseshoe, and _____ (the smallest).",
      options: ["Bridal Veil","Canadian","Saddle","Horsetail"],
      correctAnswer: "Bridal Veil",
      explanation: "Formed by the Niagara River, which flows north from Lake Erie to Lake Ontario, the Falls have a height of 187 ft (57 m)."
    },
    {
      id: 517,
      question: "The only two airlines that ever flew the Concorde were British Air and ___.",
      options: ["Air France","American Airlines","Lufthansa","Virgin Air"],
      correctAnswer: "Air France",
      explanation: "The plane could cruise at Mach 2.04 (1,347 mph / 2,167 km/h) and burned 4,800 gallons of fuel per hour at 60,000 feet."
    },
    {
      id: 518,
      question: "This extremely busy airport was initially called Idlewild airport, before it was named after the 35th president.",
      options: ["John F Kennedy International","Reagan Washington National","George Bush Intercontinental","Gerald Ford International"],
      correctAnswer: "John F Kennedy International",
      explanation: "Initially built to relieve some of the crowding at LaGuardia Airport, it was named after a golf course that it was built over."
    },
    {
      id: 519,
      question: "The world's oldest writing system originated in Mesopotamia about 5,000 years ago.",
      options: ["Cuneiform","Hieroglyphics","Elamite","Indus"],
      correctAnswer: "Cuneiform",
      explanation: "Originally used for the Sumerian language starting around 3,300 BCE, it was used until the first century CE."
    },
    {
      id: 520,
      question: "This transcontinental city used to be known as Constantinople.",
      options: ["Istanbul","Thessaloniki","Ankara","Sarajevo"],
      correctAnswer: "Istanbul",
      explanation: "The song \"Istanbul (Not Constantinople)\" by They Might Be Giants appeared on the 1990 album Flood, and includes the line, \"Why did Constantinople get the works? That's nobody's business but the Turks.\""
    },
    {
      id: 521,
      question: "The world's tallest (at 984 ft) and longest (at 1486 ft) glass bridge is found in this country.",
      options: ["China","USA","France","Germany"],
      correctAnswer: "China",
      explanation: "A bridge in Vietnam that opened in 2022 is now longer including its lead-up walkways, but the Zhangjiajie bridge has a much longer open span."
    },
    {
      id: 522,
      question: "Meryl Streep's first name at birth was _____.",
      options: ["Mary Louise","Marilyn","Meerkaacht","Gertrude"],
      correctAnswer: "Mary Louise",
      explanation: "She has a record 21 Oscar nominations with 3 wins, but sadly did NOT win for The Bridges of Madison County (losing to Susan Sarandon that year for her work in Dead Man Walking)."
    },
    {
      id: 523,
      question: "Vexillology, rooted in the Latin word vexillum, is the study of ____.",
      options: ["Flags","Curses and hexes","Fungal diseases","Zombie themed films or shows"],
      correctAnswer: "Flags",
      explanation: "There are currently 254 flags of all countries and territories, but only 193 flags of United Nations members."
    },
    {
      id: 524,
      question: "The longest road in the US, stretching 3,365 miles (5,415 km) from Boston,MA to Newport, OR is ____.",
      options: ["US 20","Route 66","Route 1","I-95"],
      correctAnswer: "US 20",
      explanation: "US 20 was not planned to be coast-to-coast and initially it stopped at Yellowstone National Park. It was extended to the Pacific in 1940."
    },
    {
      id: 525,
      question: "What South American country is on the exact opposite side of earth from Beijing, China?",
      options: ["Argentina","Bolivia","Peru","Chile"],
      correctAnswer: "Argentina",
      explanation: "The antipode is the exact opposite location of anywhere on earth, and Australia is the largest land mass whose antipode is entirely in water (in the Atlantic Ocean)."
    },
    {
      id: 526,
      question: "What vegetable did the British use to substitute for bananas during WWII?",
      options: ["Rutabagas","Potatoes","Carrots","Squash"],
      correctAnswer: "Rutabagas",
      explanation: "Known as swede in England, it is one of the four traditional ingredients in the Cornwall pasty."
    },
    {
      id: 527,
      question: "What was the name of the Lone Ranger's horse?",
      options: ["Silver","Tonto","Kemosabe","Victor"],
      correctAnswer: "Silver",
      explanation: "Tonto was the Lone Ranger's sidekick, but since \"tonto\" means stupid in Spanish, he was renamed \"Toro\" or \"Ponto\" in Spanish-language countries."
    },
    {
      id: 528,
      question: "A mule is the offspring of which two animals?",
      options: ["Donkey and horse","Horse and zebra","Donkey and zebra","Two mules, duh"],
      correctAnswer: "Donkey and horse",
      explanation: "A cross between a male donkey, with 62 chromosomes, and a female horse, with 64 chromosomes, results in a 63 chromosome mule that is usually infertile."
    },
    {
      id: 529,
      question: "What is the last name of Barbie's (the doll) boyfriend Ken?",
      options: ["Carson","Jennings","Griffey","Chesney"],
      correctAnswer: "Carson",
      explanation: "He was named after the son of Barbie creator Ruth Handler, and he died in 1994 of AIDS related complications."
    },
    {
      id: 530,
      question: "What is the most common official state beverage?",
      options: ["Milk","Water","Whiskey","Orange juice"],
      correctAnswer: "Milk",
      explanation: "22 states list milk as their state beverage, with Rhode Island having 'coffee milk' as their choice."
    },
    {
      id: 531,
      question: "What is the only Canadian province with a majority that speaks French?",
      options: ["Quebec","Ontario","New Brunswick","Nova Scotia"],
      correctAnswer: "Quebec",
      explanation: "Quebec is the largest province by area, and second largest by population, and is largely responsible for making hockey one of Canada's most popular sports."
    },
    {
      id: 532,
      question: "What was the first name of F. Scott Fitzgerald?",
      options: ["Francis","Fernando","Felix","Finnegan"],
      correctAnswer: "Francis",
      explanation: "His best known novel, The Great Gatsby, was a commercial failure on release, only selling 23,000 copies. It's now considered by many to be one of the greatest American novels ever written."
    },
    {
      id: 533,
      question: "Which state did the Oregon Trail originate in?",
      options: ["Missouri","Kansas","Oklahoma","Oregon"],
      correctAnswer: "Missouri",
      explanation: "The trail was 2,170 miles (3,490 km) long and connected the Missouri River to the Willamette Valley in Oregon."
    },
    {
      id: 534,
      question: "Which unit of measurement, corresponding to 4 inches, is used to measure the height of horses?",
      options: ["Hand","Fetlock","Hock","Wither"],
      correctAnswer: "Hand",
      explanation: "The height is measured at the withers, the point where the neck meets the back. The largest known horse was a Shire horse (named Mammoth) that stood over 21 hands tall."
    },
    {
      id: 535,
      question: "In which country would you find the largest beaver dam in the world, in Wood Buffalo National Park?",
      options: ["Canada","USA","United Kingdom","Finland"],
      correctAnswer: "Canada",
      explanation: "It has at least 2 lodges and is almost 2,800 ft (850 m) long, and is rumored to have strict rent-control measures in place."
    },
    {
      id: 536,
      question: "The main ingredients of the French dish 'escargot' are ____.",
      options: ["Snails","Clams","Frog legs","Mussels"],
      correctAnswer: "Snails",
      explanation: "Snail farming is known as heliciculture, and since snails are mollusks, they are classified as seafood."
    },
    {
      id: 537,
      question: "The color of the Golden Gate Bridge is officially known as _____.",
      options: ["International orange","Burnt sienna","Vermillion","Golden Gate terra cotta"],
      correctAnswer: "International orange",
      explanation: "The bridge connects San Francisco to Marin county, not (as is often mistakenly believed) to Oakland."
    },
    {
      id: 538,
      question: "Which Latin phrase, associated with diplomas, means \"with praise?\"",
      options: ["Cum laude","Magnus opum","Opus Dei","Carpe Diem"],
      correctAnswer: "Cum laude",
      explanation: "Typically a GPA needs to be at least 3.5 on a 4.0 scale to qualify for cum laude, but it may vary at different institutions."
    },
    {
      id: 539,
      question: "Which country has a river known as the Liquid Rainbow, because of its many colors largely due to the aquatic plant Macarenia claviger?",
      options: ["Colombia","United States","France","Australia"],
      correctAnswer: "Colombia",
      explanation: "The river is known as the Cana Cristales, and the colors usually only appear from July to November."
    },
    {
      id: 540,
      question: "The shape of a traditional loaf of sourdough bread is known as a(n) _____.",
      options: ["Boule","Carree","Decollete","Rendezvous"],
      correctAnswer: "Boule",
      explanation: "Boule is French for 'ball', because the loaf is shaped like a ball. It is where the word boulangerie, for bread bakery, derives."
    },
    {
      id: 541,
      question: "What nation is growing wider by about 2-5 cm each year, due to volcanic activity?",
      options: ["Iceland","Hawaii","Kenya","Greenland"],
      correctAnswer: "Iceland",
      explanation: "Because of high volcanic activity, the country itself is growing, not its people. Were that the case, then the US would win hands down."
    },
    {
      id: 542,
      question: "Which of these is not a capital city in World of Warcraft?",
      options: ["Akureyri","Darnassuss","Orgrimmar","Stormwind"],
      correctAnswer: "Akureyri",
      explanation: "Akureyri is a town in Iceland known as the capital of the north, and is an excellent spot to see the Northern Lights."
    },
    {
      id: 543,
      question: "Which letter is the only one that does not appear at the beginning of at least one element in the periodic table?",
      options: ["J","Z","X","Y"],
      correctAnswer: "J",
      explanation: "Z for Zinc, Y for Ytterbium and X for Xenon, but sadly, J appears nowhere in any element name."
    },
    {
      id: 544,
      question: "Which muppet once testified before Congress, over spending on music in schools?",
      options: ["Elmo","Kermit","Miss Piggy","Animal, the drummer"],
      correctAnswer: "Elmo",
      explanation: "He was the first non-human to testify in front of Congress. (insert your own joke here)"
    },
    {
      id: 545,
      question: "What iconic Washington DC building contains a basketball court inside?",
      options: ["US Supreme Court","White House","Lincoln Memorial","US Capitol"],
      correctAnswer: "US Supreme Court",
      explanation: "Known as \"The Highest Court in the Land\", it sits on the 4th floor, and cannot be used on days court is in session."
    },
    {
      id: 546,
      question: "Roquefort cheeses are made from the milk of this animal.",
      options: ["Sheep","Goats","Cows","Camels"],
      correctAnswer: "Sheep",
      explanation: "A cheese can only be called Roquefort if it is aged in the Combalou caves of the Roquefort region of France. Because those caves have the best Penicillium roquefort mold..."
    },
    {
      id: 547,
      question: "What is the longest muscle in the human body?",
      options: ["Sartorius","Latissimus","Flexor pollicus longus","Rectus abdominus"],
      correctAnswer: "Sartorius",
      explanation: "It runs from a part of the hip to just below the inside of the knee. The Latin word for tailor is sartor, and this muscle is often well-developed in tailors because of how they would sit."
    },
    {
      id: 548,
      question: "Which island off of California is considered the \"Ellis Island of the West\"?",
      options: ["Angel Island","Catalina Island","Fantasy Island","Isla de los Inmigrantes"],
      correctAnswer: "Angel Island",
      explanation: "The island was used as a processing center during most of the Chinese Exclusion Act of 1882, which helped keep Chinese from entering the country. The law existed until 1943."
    },
    {
      id: 549,
      question: "In which US National Park can you find El Capitan?",
      options: ["Yosemite NP","Yellowstone NP","Great Smoky Mountains NP","Glacier NP"],
      correctAnswer: "Yosemite NP",
      explanation: "Alex Honnold did the first free solo - with no protection, ropes or equipment - of El Cap in June 2017, in just under 4 hours."
    },
    {
      id: 550,
      question: "The only US National Park found in the southern hemisphere is found in this territory.",
      options: ["American Samoa","Guam","Republic of Palau","Northern Mariana Islands"],
      correctAnswer: "American Samoa",
      explanation: "The National Park or American Samoa is spread out over three of the five islands that make up Samoa, and includes about 4,000 acres of Park that are underwater."
    },
    {
      id: 551,
      question: "What sporting event is known as the \"Run for the Roses\"?",
      options: ["Kentucky Derby","Rose Bowl","Portland (OR) Marathon","Super Bowl"],
      correctAnswer: "Kentucky Derby",
      explanation: "For the 3-year-old thoroughbreds that run it, it is the first time they will have run the one and a quarter mile length."
    },
    {
      id: 552,
      question: "After Mexico and Canada, which country is closest to the US?",
      options: ["Russia","Cuba","Jamaica","The Bahamas"],
      correctAnswer: "Russia",
      explanation: "Despite Sarah Palin's claims, the only spot where Russia is visible from Alaska is in the Diomedes Islands, which are 2.4 miles apart. The westernmost island lies in Russia, and the easternmost lies in Alaska"
    },
    {
      id: 553,
      question: "Sitting in the Bering Strait, Little Diomede Island is part of the US, and Big Diomede Island is part of _____.",
      options: ["Russia","USA","Canada","Cuba"],
      correctAnswer: "Russia",
      explanation: "They lie in the Bering Sea and are separated by the international date line. For this reason, Big Diomede is sometimes called Tomorrow Island, and Little Diomede is called Yesterday Island"
    },
    {
      id: 554,
      question: "Which is the best selling Girl Scout cookie?",
      options: ["Thin Mints","Caramel Delites / Samoas","Trefoils","Peanut butter patties / Tagalongs"],
      correctAnswer: "Thin Mints",
      explanation: "Selling over 50 million boxes a year (about 1.6 billion thin mints), they easily surpass Samoas and Tagalongs, the second and third place cookies."
    },
    {
      id: 555,
      question: "In the cartoon series Scooby-Doo, Scooby's best friend was amateur detective Shaggy. What was Shaggy's real first name?",
      options: ["Norville","Fred","Malachi","Bob"],
      correctAnswer: "Norville",
      explanation: "Norville 'Shaggy' Rogers was the only character with facial hair, and for over 30 years he was voiced by Casey Kasem"
    },
    {
      id: 556,
      question: "Wilt Chamberlain scored 100 points in a basketball game for this team in 1962, at the HersheyPark Arena.",
      options: ["Philadelphia Warriors","New York Knicks","Minnesota Timberwolves","LA Lakers"],
      correctAnswer: "Philadelphia Warriors",
      explanation: "The Warriors beat the New York Knicks, 169-147. The team moved to California after that season and became the San Francisco Warriors."
    },
    {
      id: 557,
      question: "The original Smokey the Bear was rescued from a fire in these mountains in New Mexico.",
      options: ["Capitan Mountains","Cascade mountains","Sierra Nevadas","Appalachian mountains"],
      correctAnswer: "Capitan Mountains",
      explanation: "The ad campaign to stop forest fires first began in 1944, but Smokey was not found and identified until 1950. The ad campaign is the longest running one in the US."
    },
    {
      id: 558,
      question: "Which US city was originally designed by French engineer Pierre L'Enfant in 1791?",
      options: ["Washington DC","Philadelphia","Las Vegas","New York City"],
      correctAnswer: "Washington DC",
      explanation: "His design inspired many other cities and capitals, such as Sacramento, New Delhi India and Canberra Australia."
    },
    {
      id: 559,
      question: "In what city did the Beatles have their first concert in the US, in February 1964?",
      options: ["Washington DC","New York, NY","Harrisburg, PA","Detroit, MI"],
      correctAnswer: "Washington DC",
      explanation: "They appeared on the Ed Sullivan Show 2 days prior, on February 9, with their first song being \"All My Loving\"."
    },
    {
      id: 560,
      question: "This country produces more cocoa than any other.",
      options: ["Côte D'Ivoire","United States","Iceland","Switzerland"],
      correctAnswer: "Côte D'Ivoire",
      explanation: "It produces almost 40% of the world's cocoa and half the country works in agriculture."
    },
    {
      id: 561,
      question: "What country has appointed cats as train station masters?",
      options: ["Japan","Poland","Russia","Australia"],
      correctAnswer: "Japan",
      explanation: "Tama was the first stationmaster cat, until 2015 when she died and was replaced by Nitama."
    },
    {
      id: 562,
      question: "This nation's motto is \"Truth Prevails\" (or \"Pravda vitezi\"), a reference to famed religious reformer Jan Hus.",
      options: ["Czech Republic","Poland","Russia","Kenya"],
      correctAnswer: "Czech Republic",
      explanation: "Hus was a reformer whose beliefs led to the founding of Protestantism."
    },
    {
      id: 563,
      question: "Mrs. O'Leary's _____ allegedly started the Great Chicago Fire in 1871 by knocking over a lantern, where now sits a fire academy.",
      options: ["Cow","Husband","Goat","Son"],
      correctAnswer: "Cow",
      explanation: "It is unknown how the fire actually started, but it destroyed about 1/3 of the city."
    },
    {
      id: 564,
      question: "What drink is made from steeping the dried skins and pulp (not the seeds) of the coffee tree?",
      options: ["Cascara","Rum","Gin","Four Loko"],
      correctAnswer: "Cascara",
      explanation: "Also known as coffee cherry tea, it has a caffeine content similar to black tea."
    },
    {
      id: 565,
      question: "What soda was the first to use 2 liter bottles, starting in 1970?",
      options: ["Pepsi","Fresca","Coca Cola","Tab"],
      correctAnswer: "Pepsi",
      explanation: "PET, the type of thermoplastic used for these bottles, is one of the few plastics that actually can be and does get recycled."
    },
    {
      id: 566,
      question: "While Alexander Graham Bell is given the credit for inventing the telephone, this Italian inventor was actually the first to develop a voice-cummunication apparatus.",
      options: ["Antonio Meucci","Antonio Soprano","Amerigo Vespucci","Benito Mussolini"],
      correctAnswer: "Antonio Meucci",
      explanation: "He submitted a patent request in 1871 that was never approved, 5 years before Bell submitted his, although Meucci's lacked significant details."
    },
    {
      id: 567,
      question: "This town in Wisconsin is nicknamed \"Malibu of the Midwest\" because of its strong surf culture.",
      options: ["Sheboygan","Milwaukee","Madison","Green Bay"],
      correctAnswer: "Sheboygan",
      explanation: "Lake Michigan is the most-surfed lake in the US, with over 70 designated spots."
    },
    {
      id: 568,
      question: "Which is the only NFL team to have two winless seasons (as of 2024)?",
      options: ["Detroit Lions","Cleveland Browns","Dallas Cowboys","Tampa Bay Buccaneers"],
      correctAnswer: "Detroit Lions",
      explanation: "They went 0-10 in 1942 and 0-16 in 2008. In 2023 they went 12-5, tying a franchise record for wins. As of early 2025, the Cleveland Browns are the most recent team to have a winless season, in 2017."
    },
    {
      id: 569,
      question: "The emperor Shah Jahan had this built in Agra, in 1631, as a tomb for his wife, who died the same year.",
      options: ["Taj Mahal","The Great Pyramid","The Pantheon","The Parthenon"],
      correctAnswer: "Taj Mahal",
      explanation: "It costs about $13 for foreigners to visit, and visitors get fined if they stay longer than 3 hours."
    },
    {
      id: 570,
      question: "In which country was true paper first produced?",
      options: ["China","Egypt","Greece","India"],
      correctAnswer: "China",
      explanation: "While Egyptian papyrus predates the Chinese paper and gave rise to the word paper, papyrus was not really a true paper."
    },
    {
      id: 571,
      question: "This Asian country's current capitol (whose name used to be Edo before it was changed to its current name in 1868) is an anagram of its former capitol.",
      options: ["Japan","Malaysia","China","Thailand"],
      correctAnswer: "Japan",
      explanation: "Tokyo is the current capital, and Kyoto was its former capital. Tokyo was named Edo up until 1868, when it was renamed Tokyo and became the capital in 1869."
    },
    {
      id: 572,
      question: "What was the first slogan for Oreo cookies?",
      options: ["Oh! Oh! Oreo!","Milk's Favorite Cookie","For the Kid in All of Us","Dip It, Beeyatch!"],
      correctAnswer: "Oh! Oh! Oreo!",
      explanation: "Oreo, which is an imitation of the Hydrox cookie, is the best selling cookie worldwide, selling over 40 billion cookies per year worldwide."
    },
    {
      id: 573,
      question: "In the comic strip Garfield, what is the name of the dog that shares Garfield's home?",
      options: ["Odie","Rufus","Cletus","Jason"],
      correctAnswer: "Odie",
      explanation: "Published since 1978, it follows the thrilling adventures of an obese cat in Muncie, Indiana."
    },
    {
      id: 574,
      question: "George Lucas lost a $40 million bet with _____, over how well Star Wars would do compared to Close Encounters of the Third Kind.",
      options: ["Steven Spielberg","Harrison Ford","Elon Musk","Francis Ford Coppola"],
      correctAnswer: "Steven Spielberg",
      explanation: "They bet each other 2.5% of the gross of their respective films, as Lucas was convinced that Close Encounters was going to be much bigger than Star Wars."
    },
    {
      id: 575,
      question: "The gin and tonic was invented in this country, as something that would ward off malaria.",
      options: ["India","France","Great Britain","Kenya"],
      correctAnswer: "India",
      explanation: "Tonic water used to contain higher amounts of quinine, which has some anti-malarial properties. The gin made it go down easier."
    },
    {
      id: 576,
      question: "This country has the greatest per capita bread consumption, at around 440 pounds per person.",
      options: ["Turkey","United States","Germany","United Kingdom"],
      correctAnswer: "Turkey",
      explanation: "Americans eat about 37 pounds per person. India consumes the least, about 4 pounds per person."
    },
    {
      id: 577,
      question: "The clocktower in the Balmoral Hotel, found on Princes Street in this city, has purposely been running 3 minutes fast since 1902, so passengers don't miss their trains at the adjacent train station.",
      options: ["Edinburgh","Boston","Prague","Nairobi"],
      correctAnswer: "Edinburgh",
      explanation: "The only day of the year it shows the correct time is December 31, for New Year's celebrations (except in 2020, when it was more than happy to have 3 fewer minutes of that year)."
    },
    {
      id: 578,
      question: "What country is considered the birthplace of chimney sweeps and has a yearly festival honoring them?",
      options: ["England","Italy","Germany","United States"],
      correctAnswer: "England",
      explanation: "In Great Britain, it is considered lucky for a bride to see a chimney sweep on her wedding day, so many modern sweeps hire themselves out for this purpose."
    },
    {
      id: 579,
      question: "Peaches, plums, cherries and apricots are in the same genus as this nut.",
      options: ["Almond","Peanut","Hazelnut","Coconut"],
      correctAnswer: "Almond",
      explanation: "One almond requires 1.1 gallons (4.2 liters) of water to grow."
    },
    {
      id: 580,
      question: "The winds blowing in from the Great Basin that fuel many of California's wildfires every year are called the ____ winds.",
      options: ["Santa Ana","Diabatic","Chinook","Papagayo"],
      correctAnswer: "Santa Ana",
      explanation: "Also called 'devil winds', they originate in the inland desert and bring very hot, dry winds to coastal southern California."
    },
    {
      id: 581,
      question: "This country consumes the most Kraft Mac & Cheese per capita, buying almost 25% of all boxes sold globally.",
      options: ["Canada","United States","United Kingdom","Italy"],
      correctAnswer: "Canada",
      explanation: "Made with mostly Canadian ingredients in Canada, it rivals poutine as the national dish."
    },
    {
      id: 582,
      question: "The spire on the Empire State building (finished in 1931) was originally meant to be used as a(n) ____",
      options: ["Blimp docking station","Radio station","TV station","Cell phone tower"],
      correctAnswer: "Blimp docking station",
      explanation: "The plans were abandoned when it was realized the winds would be too strong for such uses."
    },
    {
      id: 583,
      question: "The name Alexa, for Amazon's smart devices, was named for the ____.",
      options: ["Library of Alexandria","Device designer's daughter","Heck of it","Jeff Bezos' wife at the time"],
      correctAnswer: "Library of Alexandria",
      explanation: "The Library of Alexandria was considered to be the repository of all knowledge at the time."
    },
    {
      id: 584,
      question: "What do the 36 columns of the Lincoln Memorial (honoring Abraham Lincoln, our 16th president) represent?",
      options: ["States in the Union at the time","Number of months Lincoln served as President","The year he was born (1836)","Nothing, it was just the number of columns that needed to be present"],
      correctAnswer: "States in the Union at the time",
      explanation: "The Memorial has appeared on the back of the $5 bill since 1929 (with Lincoln on the front)."
    },
    {
      id: 585,
      question: "This country has the most electric vehicles per capita.",
      options: ["Norway","China","United States","Germany"],
      correctAnswer: "Norway",
      explanation: "About 29% of cars in Norway are EV as of 2024, with 90% of new car sales being EVs. (The US overall EV number is less than 2%) China has the most EVs on the road, at about 20 million."
    },
    {
      id: 586,
      question: "The phrase \"hands down\" (meaning easily, or unquestionably) was popularized by this sport.",
      options: ["Horse racing","Boxing","Baseball","Handball"],
      correctAnswer: "Horse racing",
      explanation: "If a horse was far ahead of the others in a race, the jockey would loosen his grip on the reins and drop his hands down."
    },
    {
      id: 587,
      question: "Hawaiian pizza (pineapple and ham or bacon) originated in this country in 1962, and was not actually named after the state of Hawaii.",
      options: ["Canada","Italy","Russia","United States"],
      correctAnswer: "Canada",
      explanation: "The Greek-born Canadian named it after the brand of canned pineapple they were using. A version without the ham or bacon first appeared in Portland, OR in 1957."
    },
    {
      id: 588,
      question: "This famous rock guitarist played the iconic solo on Michael Jackson's \"Beat It\"",
      options: ["Eddie Van Halen","Jimi Hendrix","Eric Clapton","Alex Lifeson"],
      correctAnswer: "Eddie Van Halen",
      explanation: "He formed Van Halen with his brother Alex in 1973, and their only #1 Billboard hit was Jump from 1984."
    },
    {
      id: 589,
      question: "In what country are all unmarked mute swans considered property of the royal family?",
      options: ["United Kingdom","India","Mongolia","Ghana"],
      correctAnswer: "United Kingdom",
      explanation: "Swan upping occurs in the 3rd week of July, where the 'swan uppers' count all the swans and check their health."
    },
    {
      id: 590,
      question: "Tennis balls used at Wimbledon are kept at ___ degrees Fahrenheit, as this gives the appropriate bounce.",
      options: ["68","32","0","100"],
      correctAnswer: "68",
      explanation: "Over 54,000 tennis balls are used throughout the 2-week tournament each summer."
    },
    {
      id: 591,
      question: "Nicolas Appert is considered the father of ___, also known as 'appertization' in his honor, because of his use of champagne bottles to get fresh food to French troops.",
      options: ["Canning","Pasteurization","Pickling","Fermentation"],
      correctAnswer: "Canning",
      explanation: "The original seal for the bottles was a mix of cheese and mineral lime. The sealed bottle would then be placed in boiling water to cook the contents thoroughly."
    },
    {
      id: 592,
      question: "The oldest Major League Baseball stadium still in use, and built in 1912, is ____.",
      options: ["Fenway Park","Yankee Stadium","Wrigley Field","Dodger Stadium"],
      correctAnswer: "Fenway Park",
      explanation: "The infamous \"Green Monster\" in left field is 37 ft 2 inches high and makes hitting a home run over it very difficult."
    },
    {
      id: 593,
      question: "The first American League baseball team to sign a black player, Larry Doby, was the ____ in 1947.",
      options: ["Cleveland Indians","New York Yankees","Philadelphia Phillies","Atlanta Braves"],
      correctAnswer: "Cleveland Indians",
      explanation: "Jackie Robinson was the first black player in MLB, signed in 1945 to play for the National League's Brooklyn Dodgers starting in 1947."
    },
    {
      id: 594,
      question: "The original name for this popular animated Pixar character was Lunar Larry.",
      options: ["Buzz Lightyear","Woody","Lightning McQueen","WALL-E"],
      correctAnswer: "Buzz Lightyear",
      explanation: "Toy Story was the second highest grossing film (globally) of 1995, making $363 million (just behind Die Hard with a Vengeance at $366 million)."
    },
    {
      id: 595,
      question: "The first Beatles song to be longer than 3 minutes was ____, on the album \"Help!\" in 1965.",
      options: ["Ticket to Ride","Help!","I Want to Hold Your Hand","Imagine"],
      correctAnswer: "Ticket to Ride",
      explanation: "Many critics felt this was the song where the Beatles began transitioning from pure pop to a more complex and nuanced style."
    },
    {
      id: 596,
      question: "This famous bridge in London, built in the late 1800s, actually has a chimney on it, which was used by the guards stationed below.",
      options: ["Tower Bridge","London Bridge","Westminster Bridge","Pont Neuf"],
      correctAnswer: "Tower Bridge",
      explanation: "It was connected to a guardroom fireplace and painted to look like one of the lamp posts (but with no lamp on top)."
    },
    {
      id: 597,
      question: "Nea Kameni is part of the Santorini caldera, an active volcano in this country.",
      options: ["Greece","United States","Japan","Italy"],
      correctAnswer: "Greece",
      explanation: "It is part of the Decade Volcanoes, a group of 16 volcanoes that have a history of large eruptions near highly populated regions."
    },
    {
      id: 598,
      question: "This Canadian city in the province of Manitoba is the polar bear capital of the world.",
      options: ["Churchill","Montreal","Canuckville","Vancouver"],
      correctAnswer: "Churchill",
      explanation: "Thanks to climate change, polar bears have a shorter hunting season due to loss of sea ice."
    },
    {
      id: 599,
      question: "Who was the main Sith villain in Star Wars: The Phantom Menace?",
      options: ["Darth Maul","Darth Vader","Darth Tyranus","Darth Bane"],
      correctAnswer: "Darth Maul",
      explanation: "The Phantom Menace also introduced the world to one of the most beloved characters in the Star Wars pantheon, Jar Jar Binks."
    },
    {
      id: 600,
      question: "In the movie \"Titanic\", who actually drew a naked Rose as one of Jack's \"French girls\"?",
      options: ["James Cameron","Leonardo DiCaprio","Michelangelo","Kate Winslet"],
      correctAnswer: "James Cameron",
      explanation: "Winslet was not naked during the scene but was wearing a bathing suit (along with the fictitious Heart of the Ocean diamond)."
    },
    {
      id: 601,
      question: "This Central American country's name translates as \"abundance of fish, trees and butterflies\".",
      options: ["Panama","Venezuela","Guyana","Costa Rica"],
      correctAnswer: "Panama",
      explanation: "While the actual origin is unclear, this meaning is the official one put forth by Panama's Ministry of Education."
    },
    {
      id: 602,
      question: "The Louvre in Paris and the Rock and Roll Hall of Fame in Cleveland both have designs by this famous architect who died in 2019 at age 102.",
      options: ["I.M. Pei","Eero Saarinen","Howard Roark","Frank Lloyd Wright"],
      correctAnswer: "I.M. Pei",
      explanation: "He even spent two years working for the National Defense Research Committee during WWII."
    },
    {
      id: 603,
      question: "This item is banned in Los Angeles every October 31, because of the hazard it created on Hollywood Boulevard.",
      options: ["Silly String","Fireworks","Silly Putty","Play Doh"],
      correctAnswer: "Silly String",
      explanation: "Violators face fines up to $1,000 and 6 months in jail. Because this is the biggest problem in Hollywood..."
    },
    {
      id: 604,
      question: "The first woman to be Sports Illustrated's \"Sportsperson of the Year\", in 1972, was ____.",
      options: ["Billie Jean King","Venus Williams","Caitlyn Jenner","Simone Biles"],
      correctAnswer: "Billie Jean King",
      explanation: "King was a former tennis star who won 39 Grand Slam titles. Jenner was also on the cover of SI in the 1970s, but as her former male self, Bruce."
    },
    {
      id: 605,
      question: "\"Once upon a midnight dreary\" is the famous first line to this poem by Edgar Allan Poe.",
      options: ["The Raven","The Telltale Heart","Lenore","The Fall of the House of Usher"],
      correctAnswer: "The Raven",
      explanation: "Poe died under mysterious circumstances at age 40 in Baltimore, which is how most people in Baltimore die."
    },
    {
      id: 606,
      question: "Which Persian Gulf country is the smallest by land area?",
      options: ["Bahrain","Qatar","Kuwait","Saudi Arabia"],
      correctAnswer: "Bahrain",
      explanation: "It is 92% desert and is also the smallest in population, with about 1.5 million people."
    },
    {
      id: 607,
      question: "This country was the first to make broadband internet access a legal right, in 2009.",
      options: ["Finland","Japan","Burundi","Greenland"],
      correctAnswer: "Finland",
      explanation: "Finland also said that the internet service must be reasonably priced, competetive and high quality. Just like Comcast/Xfinity."
    },
    {
      id: 608,
      question: "The final stone or rock in curling is known as the ____ because of its potential to break up the other team's play.",
      options: ["Hammer","Other Woman","Yoko","Megastone"],
      correctAnswer: "Hammer",
      explanation: "The fast-paced game involves sliding stones toward the target called the house to amass points."
    },
    {
      id: 609,
      question: "The title character in this famous novel by Bram Stoker was initially called Wampyr, before getting his much more iconic name.",
      options: ["Dracula","Dr Jekyll","The Wolf Man","Frankenstein"],
      correctAnswer: "Dracula",
      explanation: "Abraham Van Helsing, played by Edward Van Sloan in the original Dracula movie, led a group that killed the Count when he moved to England."
    },
    {
      id: 610,
      question: "In the local African dialect, these famous waterfalls are known as \"the smoke that thunders\", but we call them ____.",
      options: ["Victoria Falls","Angel Falls","Kaieteur Falls","Iguazu Falls"],
      correctAnswer: "Victoria Falls",
      explanation: "The Zambezi River, on the border between Zambia and Zimbabwe, gives rise to the falls and is the 33rd longest in the world. All the other falls are in South America."
    },
    {
      id: 611,
      question: "Which of the following cereals is NOT made by General Mills?",
      options: ["Honey Smacks","Lucky Charms","Cheerios","Cocoa Puffs"],
      correctAnswer: "Honey Smacks",
      explanation: "Originally called \"Sugar Smacks\", the name was changed to \"Honey Smacks\" in the 1980s to make it seem like they didn't have that much sugar, but in fact it has the most sugar by weight of any cereal (56%)."
    },
    {
      id: 612,
      question: "This country is the top producer of kiwifruit.",
      options: ["China","New Zealand","United States","Australia"],
      correctAnswer: "China",
      explanation: "Also known as Chinese gooseberry, it is native to China and spread to New Zealand in the early 1900s."
    },
    {
      id: 613,
      question: "This author of famous children's books such as \"James and the Giant Peach\" also invented a medical device.",
      options: ["Roald Dahl","Theodor Geisel","Maurice Sendak","Beatrix Potter"],
      correctAnswer: "Roald Dahl",
      explanation: "He helped develop the Wade-Dahl-Till valve, which prevented a brain shunt from getting clogged."
    },
    {
      id: 614,
      question: "This West African country got its name from the Portuguese word for shrimp.",
      options: ["Cameroon","Ghana","Gabon","Somalia"],
      correctAnswer: "Cameroon",
      explanation: "The Cameroon ghost shrimp is a type of mud lobster native to west Africa."
    },
    {
      id: 615,
      question: "Lake Titicaca, one of the world's oldest lakes and the highest navigable one by commercial craft, is on the border between Peru and ___.",
      options: ["Bolivia","Argentina","Guyana","Guinea"],
      correctAnswer: "Bolivia",
      explanation: "At 12,507 ft (3,812 m), it is over 9,000 ft lower than the highest lake in the world, Ojos del Salado."
    },
    {
      id: 616,
      question: "Euskara, the oldest language still spoken in Europe, can be heard in the ____ region of Spain.",
      options: ["Basque","Andalusia","Normandy","Catalonia"],
      correctAnswer: "Basque",
      explanation: "The language is considered unrelated to any other known language and is spoken by about 800,000 people."
    },
    {
      id: 617,
      question: "This country produces the most garlic in the world, about 24 million tons per year.",
      options: ["China","Italy","United States","Iran"],
      correctAnswer: "China",
      explanation: "Producing about 75% of the world's garlic, this is almost certainly why you never hear about Chinese vampires."
    },
    {
      id: 618,
      question: "This country has 20% of the world's bird species, with an estimated 1,900 species found there.",
      options: ["Colombia","China","Iceland","Costa Rica"],
      correctAnswer: "Colombia",
      explanation: "Six of the top 7 countries in terms of bird diversity are in South America."
    },
    {
      id: 619,
      question: "In 1968, this founding father (and inventor) was posthumously inducted into the International Swimming Hall of Fame for his many swimming achievements.",
      options: ["Benjamin Franklin","Abraham Lincoln","George Washington","Alexander Hamilton"],
      correctAnswer: "Benjamin Franklin",
      explanation: "He was a passionate swimmer who invented swim fins for the hands and was a swimming coach."
    },
    {
      id: 620,
      question: "You can attend Elfschool in this country (where about 1/3 of the people still believe in the \"hidden folk\"), to learn all about elves, gnomes, trolls and fairies.",
      options: ["Iceland","Germany","Greenland","Mexico"],
      correctAnswer: "Iceland",
      explanation: "The elves even help Will Ferrell's character in Eurovision Song Contest: The Story of Fire Saga get into the singing competition."
    },
    {
      id: 621,
      question: "The leek is a symbol of this European country, which happens to also be where the groundbreaking 1960s series The Prisoner was filmed.",
      options: ["Wales","Germany","France","Spain"],
      correctAnswer: "Wales",
      explanation: "The leek genus also contains onions, garlic, shallot, scallions and chives."
    },
    {
      id: 622,
      question: "Before becoming the first national park, ____ was initially called Wonderland because of all the curious features there.",
      options: ["Yellowstone NP","Yosemite NP","Great Smoky Mountain NP","Zion NP"],
      correctAnswer: "Yellowstone NP",
      explanation: "The Yellowstone caldera is the largest volcano system in North America, and when it has erupted in the past, it has basically covered much of North America in ash."
    },
    {
      id: 623,
      question: "The world's first casino (gambling house) called the Il Ridotto opened in 1638 and can be found in this Italian city, known as \"Queen of the Adriatic\", among other things.",
      options: ["Venice","Rome","Florence","Naples"],
      correctAnswer: "Venice",
      explanation: "The city is built on 126 islands, has 472 bridges and lies between the Po and Piave rivers."
    },
    {
      id: 624,
      question: "The world's largest hourglass, at 17 feet tall, is found in this country and was built to feature the local 'singing' sands of this beach.",
      options: ["Japan","Andorra","Luxembourg","Liechtenstein"],
      correctAnswer: "Japan",
      explanation: "It is filled with 629.1 billion grains of sand and is flipped at midnight each December 31 as it takes exactly one year to empty into the lower globe."
    },
    {
      id: 625,
      question: "While he was alive, how many of the 2,100 works of art that Vincent Van Gogh made did he sell?",
      options: ["1","725","2,100","1,000"],
      correctAnswer: "1",
      explanation: "Only one painting, The Red Vineyard, sold before he killed himself at age 37."
    },
    {
      id: 626,
      question: "She is the only actress to be nominated for an Oscar twice, for playing the same character (Queen Elizabeth I) in 2 different films.",
      options: ["Cate Blanchett","Meryl Streep","Helen Mirren","Nicole Kidman"],
      correctAnswer: "Cate Blanchett",
      explanation: "She is the only woman born in Australia to win an acting Oscar. (Kidman was born in Hawaii to Australian parents.)"
    },
    {
      id: 627,
      question: "This European country is the only place where they fish for shrimp on horseback, something that used to be widely practiced along the North Sea coast.",
      options: ["Belgium","Monaco","Spain","France"],
      correctAnswer: "Belgium",
      explanation: "It is a UNESCO recognized tradition that was once a common way to catch shrimp for 500 years, but is now only practiced by 17 people."
    },
    {
      id: 628,
      question: "This European capital city is completely powered by geothermal energy, thanks to sitting over a volcanic hotspot that constantly heats the underground water reservoirs.",
      options: ["Reykjavik, Iceland","Rome, Italy","Berlin, Germany","Vaduz, Liechtenstein"],
      correctAnswer: "Reykjavik, Iceland",
      explanation: "Iceland is also one of the few countries that dispenses hydrogen fuel for cars running on fuel cells."
    },
    {
      id: 629,
      question: "Prior to settling in Washington, D.C. in 1937, where was the city's (American) football team originally from?",
      options: ["Boston","Philadelphia","Peoria","Hoboken"],
      correctAnswer: "Boston",
      explanation: "Initially called the Boston Braves, they became the Redskins in 1933 and moved to DC in 1937."
    },
    {
      id: 630,
      question: "In 2004, after decades of struggle, the Montreal Expos (named after the 67 Expo World's Fair) moved and became the ____.",
      options: ["Washington Nationals","Milwaukee Brewers","Los Angeles Dodgers","Arizona Diamondbacks"],
      correctAnswer: "Washington Nationals",
      explanation: "The Expos all time win-loss percentage was 0.483. Since the move to DC, that percentage has been 0.482."
    },
    {
      id: 631,
      question: "Founded in 1901 in this city, the Oakland A's also spent 13 years in Kansas City.",
      options: ["Philadelphia","Brooklyn","Milwaukee","St Louis"],
      correctAnswer: "Philadelphia",
      explanation: "Starting  n 2025, they will be known simply as the Athletics and will play temporarily for a few years in Sacramento before 'permanently' relocating to Las Vegas in 2028."
    },
    {
      id: 632,
      question: "This pasta type's name translates as \"little tongues\", describing its narrow flat shape.",
      options: ["Linguini","Fettucine","Trenette","Farfalle"],
      correctAnswer: "Linguini",
      explanation: "The word has its origins in Latin, specifically the word lingua, meaning tongue."
    },
    {
      id: 633,
      question: "Who is the only man to have won three Best Actor Academy Awards?",
      options: ["Daniel Day Lewis","Anthony Hopkins","Tom Hanks","Anthony Hopkins"],
      correctAnswer: "Daniel Day Lewis",
      explanation: "Each of the other three has won two Oscars each for Best Actor."
    },
    {
      id: 634,
      question: "Dennis the Menace's, from the eponymous comic strip, last name is ___.",
      options: ["Mitchell","Wilson","Fonzarelli","Johnson"],
      correctAnswer: "Mitchell",
      explanation: "The strip has been running since 1951, and a UK comic strip of the same name debuted on the same day, but they are not related."
    },
    {
      id: 635,
      question: "Bassetts ice cream shop, the oldest in America and established in 1861, is located in this city.",
      options: ["Philadelphia","Atlanta","Tampa Bay","Cleveland"],
      correctAnswer: "Philadelphia",
      explanation: "They were the first vendor to sign a lease at Reading Terminal Market in 1892, and have been there since."
    },
    {
      id: 636,
      question: "The tendency to see images, such as faces, in vague stimuli is known as ____.",
      options: ["Pareidolia","Triskaidekaphilia","Dysphagia","Munchausen syndrome"],
      correctAnswer: "Pareidolia",
      explanation: "Examples would be when people think they see a \"Man in the moon\", or Jesus on a piece of burnt toast."
    },
    {
      id: 637,
      question: "What is between the earth's core and its crust?",
      options: ["Mantle","A layer of sharp, aged cheddar","Lithosphere","Terrosphere"],
      correctAnswer: "Mantle",
      explanation: "The mantle is about 2/3 of the earth's mass, is 1,800 miles (2,900 km) thick, and ranges in temperature from 440 F to 7,100 F."
    },
    {
      id: 638,
      question: "This country, known for its tea and rubber exports (among other things), elected the first female head of government, in 1960.",
      options: ["Sri Lanka","United Kingdom","Iceland","Greenland"],
      correctAnswer: "Sri Lanka",
      explanation: "The national sport is volleyball, but cricket is far more popular especially after the young underdog team of 1996 won the Cricket World Cup against the powerful Australians, winning by 7 wickets!"
    },
    {
      id: 639,
      question: "This Caribbean country's name is Latin for \"Sunday\", commemorating the day Columbus landed there.",
      options: ["Dominica","Jamaica","Haiti","Antigua"],
      correctAnswer: "Dominica",
      explanation: "It is the youngest island in the Lesser Antilles chain, still volcanically active and has the world's second largest hot spring."
    },
    {
      id: 640,
      question: "A vespiary is a nest for this type of animal.",
      options: ["Wasp","Bat","Gorilla","Sea turtle"],
      correctAnswer: "Wasp",
      explanation: "The Asian giant hornet is the largest social wasp, at 2 inches (5 cm) long, and they inject a potent neurotoxin called mandaratoxin."
    },
    {
      "id": 641,
      "question": "In \"Ferris Bueller's Day Off\", director John Hughes paid tribute to his childhood hero Gordie Howe by having the character of Cameron wear a hockey jersey from this team.",
      "options": [
        "Detroit Red Wings",
        "Chicago Blackhawks",
        "Philadelphia Flyers",
        "St Louis Blues"
      ],
      "correctAnswer": "Detroit Red Wings",
      "explanation": "Howe played 25 of his 26 seasons with the Red Wings and was known as Mr Hockey."
    },
    {
      "id": 642,
      "question": "What does Jareth the Goblin King, played by David Bowie, twirl in his hands in \"Labyrinth\"?",
      "options": [
        "A crystal ball",
        "A sceptre",
        "A spell book",
        "A baby"
      ],
      "correctAnswer": "A crystal ball",
      "explanation": "The director Jim Henson also considered Prince, Sting and Michael Jackson for the role played by Bowie."
    },
    {
      "id": 643,
      "question": "In what language was the New Testament originally written?",
      "options": [
        "Greek",
        "Hebrew",
        "Heiroglyphics",
        "German"
      ],
      "correctAnswer": "Greek",
      "explanation": "The original text of the bible was a giant run-on sentence with no punctuation, known as scriptio continua."
    },
    {
      "id": 644,
      "question": "What snack is named after a city in Massachusetts?",
      "options": [
        "Fig newtons",
        "Worcester pies",
        "Malden malts",
        "Taunton puffs"
      ],
      "correctAnswer": "Fig newtons",
      "explanation": "The original fig roll was developed by a Philadelphia baker, but named \"Newton\" when sold to the Kennedy Biscuit company near Newton, MA."
    },
    {
      "id": 645,
      "question": "Sternutation is the medical term for this common bodily function.",
      "options": [
        "Sneezing",
        "Burping",
        "Farting",
        "Coughing"
      ],
      "correctAnswer": "Sneezing",
      "explanation": "It is not possible to sneeze while asleep due to something called REM atonia."
    },
    {
      "id": 646,
      "question": "Which of these animals has the most number of bones in its skeleton?",
      "options": [
        "Python",
        "Elephant",
        "Giraffe",
        "Armadillo"
      ],
      "correctAnswer": "Python",
      "explanation": "A python can have over 1,800 bones due to the hundreds of vertebrae and ribs."
    },
    {
      "id": 647,
      "question": "The smallest bone in the human body can be found in this body part/area.",
      "options": [
        "Ear",
        "Knee",
        "Shoulder",
        "Throat"
      ],
      "correctAnswer": "Ear",
      "explanation": "The middle ear has the 3 smallest bones, the hammer, anvil and stirrup, that aid in transmitting sound. The stirrup (stapes) is the smallest of them."
    },
    {
      "id": 648,
      "question": "This bone disorder causes a left-right curvature of the spine.",
      "options": [
        "Scoliosis",
        "Osteoporosis",
        "Lordosis",
        "Kyphosis"
      ],
      "correctAnswer": "Scoliosis",
      "explanation": "The condition is found in about 3% of people and the word comes from the Greek word meaning 'a bending'."
    },
    {
      "id": 649,
      "question": "Which solo artist had the most #1 songs on the charts?",
      "options": [
        "Mariah Carey",
        "Elvis Presley",
        "Michael Jackson",
        "Taylor Swift"
      ],
      "correctAnswer": "Mariah Carey",
      "explanation": "Carey has 19 #1 songs. Presley had 18 as a solo artist. Jackson had 13, Swift has 12."
    },
    {
      "id": 650,
      "question": "Ian Fleming, author of the James Bond novels, has an airport named after him in this country.",
      "options": [
        "Jamaica",
        "England",
        "Scotland",
        "Greece"
      ],
      "correctAnswer": "Jamaica",
      "explanation": "Fleming died in 1964, and while he was British, he had a home in Jamaica and wrote all 14 of his Bond books there."
    },
    {
      "id": 651,
      "question": "The youngest solo artist to reach the Billboard Hot 100, in 1963, was Stevland Hardaway Judkins, who was born in 1950 and was better known as ___.",
      "options": [
        "Stevie Wonder",
        "George Thorogood",
        "Peter Gabriel",
        "Billie Ocean"
      ],
      "correctAnswer": "Stevie Wonder",
      "explanation": "He was 13 when he released 'Fingertips', and he has won 25 Grammys and sold over 100 million albums."
    },
    {
      "id": 652,
      "question": "This acronym is named in part for Alan Turing, and it proves that you are a human on a website and not a bot.",
      "options": [
        "Captcha test",
        "Black box test",
        "Moore's test",
        "Honeypot test"
      ],
      "correctAnswer": "Captcha test",
      "explanation": "It stands for \"Completely Automated Public Turing test to tell Computers and Humans Apart.\""
    },
    {
      "id": 653,
      "question": "This was the first scripted TV show to shoot on 35mm film in front of a live audience, starting in 1951, and starred (among others) Desi Arnaz.",
      "options": [
        "I Love Lucy",
        "The Ed Sullivan Show",
        "Gunsmoke",
        "The Twilight Zone"
      ],
      "correctAnswer": "I Love Lucy",
      "explanation": "The show was the highest rated show 4 of the 6 years it aired, and won 5 Emmys."
    },
    {
      "id": 654,
      "question": "The highest point in this European country is Signal de Botrange at 700 meters (2,300 ft), with the last 6 meters a staircase to nowhere.",
      "options": [
        "Belgium",
        "France",
        "Switzerland",
        "Spain"
      ],
      "correctAnswer": "Belgium",
      "explanation": "In 2013, an additional 160 ft tower was added that allowed for real-time transfer of data between the London and Frankfurt stock exchanges."
    },
    {
      "id": 655,
      "question": "Which of these vehicles has sold the most units, as of 2024?",
      "options": [
        "Toyota Corolla",
        "Ford Model T",
        "Volkswagen Beetle",
        "Chevrolet Impala"
      ],
      "correctAnswer": "Toyota Corolla",
      "explanation": "Selling over 50 million units since it's introduction in 1966, it is the Q-tip of vehicles."
    },
    {
      "id": 656,
      "question": "This colorful candy, popular around halloween, was originally known as \"chicken feed\" when introduced in 1888.",
      "options": [
        "Candy corn",
        "Peeps",
        "Snickers",
        "Skittles"
      ],
      "correctAnswer": "Candy corn",
      "explanation": "It was called 'chicken feed' as most people at the time associated corn with animal feed."
    },
    {
      "id": 657,
      "question": "This popular Canadian dish's name translates as \"mess\".",
      "options": [
        "Poutine",
        "Justin Trudeau",
        "Timbits",
        "Tourtiere"
      ],
      "correctAnswer": "Poutine",
      "explanation": "Poutine is a dish of french fries with cheese curds and gravy. Just kidding about Trudeau...he's not that good looking."
    },
    {
      "id": 658,
      "question": "The breakdown of this plant pigment is responsible for the colorful leaves we see in the fall.",
      "options": [
        "Chlorophyll",
        "Actin",
        "Betalain",
        "Anthoxanthin"
      ],
      "correctAnswer": "Chlorophyll",
      "explanation": "As the chlorophyll breaks down each fall it allows the colorful carotenoids to be displayed."
    },
    {
      "id": 659,
      "question": "Russia is the largest country by land area. What is the second largest?",
      "options": [
        "Canada",
        "Brazil",
        "India",
        "China"
      ],
      "correctAnswer": "Canada",
      "explanation": "Canada also has the world's longest coastline and the longest international land border (with the US). And they were the second country to legalize weed (in 2018)."
    },
    {
      "id": 660,
      "question": "This common English word comes from an ancient Latin word describing where one road splits into two roads.",
      "options": [
        "Trivia",
        "Fork",
        "Interchange",
        "Avenue"
      ],
      "correctAnswer": "Trivia",
      "explanation": "The Great Midwest Trivia Contest, held each year in January in Appleton, WI, since 1966, is the longest running trivia contest in the world."
    },
    {
      "id": 661,
      "question": "This monument is the tallest manmade monument in the US, and is a tribute to the westward expansion of the US.",
      "options": [
        "Gateway Arch",
        "Jefferson Memorial",
        "Washington Monument",
        "Statue of Liberty"
      ],
      "correctAnswer": "Gateway Arch",
      "explanation": "At 630 ft (192 m), the Arch is covered in stainless steel and is the world's tallest arch."
    },
    {
      "id": 662,
      "question": "A \"business\" or \"busyness\" refers to a group of these furry animals.",
      "options": [
        "Ferrets",
        "Skunks",
        "Lions",
        "Mice"
      ],
      "correctAnswer": "Ferrets",
      "explanation": "The name ferret comes from the Latin word for \"little thief\". A male ferret is called a hob and a female is a jill."
    },
    {
      "id": 663,
      "question": "What nickname has been on every NFL football from 1941 to 1969, and again since 2006, to honor Wellington Mara?",
      "options": [
        "The Duke",
        "The Prince",
        "The King",
        "The Champ"
      ],
      "correctAnswer": "The Duke",
      "explanation": "Mara was the son of the original founder and owner of the NY Giants, and he was named after the Duke of Wellington."
    },
    {
      "id": 664,
      "question": "What is the best-selling ice cream flavor in the US?",
      "options": [
        "Vanilla",
        "Chocolate",
        "Strawberry",
        "Neopolitan"
      ],
      "correctAnswer": "Vanilla",
      "explanation": "During the 1780s, Thomas Jefferson wrote his own recipe for vanilla ice cream. The recipe is housed at the Library of Congress."
    },
    {
      "id": 665,
      "question": "What US territory has the motto \"Where America's Day Begins\"?",
      "options": [
        "Guam",
        "Hawaii",
        "Puerto Rico",
        "American Samoa"
      ],
      "correctAnswer": "Guam",
      "explanation": "Guam is 20 hours ahead of Hawaii and is west of the International Date Line."
    },
    {
      "id": 666,
      "question": "This cartoon originally aired from 1959-1964, featured villains Boris Badenov and Natasha Fatale, and was an inspiration for The Simpsons, among others.",
      "options": [
        "The Adventures of Rocky and Bullwinkle and Friends",
        "Mr Magoo",
        "The Flinstones",
        "The Deputy Dawg Show"
      ],
      "correctAnswer": "The Adventures of Rocky and Bullwinkle and Friends",
      "explanation": "June Foray was the voice of Rocky the Flying Squirrel, Natasha Fatale, and every other female character on the show."
    },
    {
      "id": 846,
      "question": "Which state is known as the yellowhammer state (after the state bird), also called the Cotton State?",
      "options": [
        "Alabama",
        "Louisiana",
        "Ohio",
        "West Virginia"
      ],
      "correctAnswer": "Alabama",
      "explanation": "The northern flicker is also known as the yellowhammer. There was also a company of soldiers in the Civil War known as the yellowhammers."
    },
    {
      "id": 847,
      "question": "In which state will you find \"Rocket City USA\", ",
      "options": [
        "Alabama",
        "California",
        "Texas",
        "Florida"
      ],
      "correctAnswer": "Alabama",
      "explanation": "NASA's Marshall Space Flight Center is in Huntsville, the most populous city in AL, and is where the Saturn rockets were built."
    },
    {
      "id": 848,
      "question": "The Tennessee River starts and ends in Tennessee, but a long stretch in the middle passes into this state",
      "options": [
        "Alabama",
        "Mississippi",
        "Georgia",
        "Oklahoma"
      ],
      "correctAnswer": "Alabama",
      "explanation": "It was once known as the Cherokee River, and it starts in Knoxville before ending in the Ohio River."
    },
    {
      "id": 849,
      "question": "Which state's capital is known as the Cradle of the Confederacy?",
      "options": [
        "Alabama",
        "Arkansas",
        "Mississippi",
        "Georgia"
      ],
      "correctAnswer": "Alabama",
      "explanation": "Montgomery hosted the Southern Convention in 1861, in which 7 seceding southern states established the Confederacy."
    },
    {
      "id": 850,
      "question": "The first 911 call in the US was made in this state.",
      "options": [
        "Alabama",
        "Tennessee",
        "Pennsylvania",
        "New York"
      ],
      "correctAnswer": "Alabama",
      "explanation": "It was in 1968 in Haleyville, AL, and ushered in the era of people considering anything annoying, inconvenient or stressful to be an emergency."
    },
    {
      "id": 851,
      "question": "This state has the most fast food restaurants per capita.",
      "options": [
        "West Virginia",
        "Arkansas",
        "New Jersey",
        "Alabama"
      ],
      "correctAnswer": "West Virginia",
      "explanation": "According to Pricelisto, the state has 49.04 fast food places per 100,000 residents. By complete and utter coincidence, the state is the most obese, with 41.2% of the population meeting criteria for obesity."
    },
    {
      "id": 852,
      "question": "This state outlaws dressing up as a nun, priest or rabbi on Halloween.",
      "options": [
        "Alabama",
        "Utah",
        "Texas",
        "Mississippi"
      ],
      "correctAnswer": "Alabama",
      "explanation": "It is a misdemeanor to dress as clergy any time, with a fine of up to $500 and up to 1 year in jail. The law was enacted during civil rights protests in 1965."
    },
    {
      "id": 853,
      "question": "This state is known as The Last Frontier.",
      "options": [
        "Alaska",
        "Montana",
        "Nevada",
        "Wyoming"
      ],
      "correctAnswer": "Alaska",
      "explanation": "About 90% of the state is not accessible by any road and much of it is still relatively unexplored."
    },
    {
      "id": 854,
      "question": "This state has 6 times the number of pilots per capita, and 16 times the number of aircraft per capita, than any other state.",
      "options": [
        "Alaska",
        "New York",
        "California",
        "Wyoming"
      ],
      "correctAnswer": "Alaska",
      "explanation": "Since there are so few roads in the state, airplanes are the chief way to get around."
    },
    {
      "id": 855,
      "question": "This state has the most coastline, in terms of total miles",
      "options": [
        "Alaska",
        "California",
        "Michigan",
        "Florida"
      ],
      "correctAnswer": "Alaska",
      "explanation": "It has 33,904 miles (54,563 km) of coastline, about 4 times more than runner-up Florida."
    },
    {
      "id": 856,
      "question": "The largest urban park in the world is 495,000 acres and located in this state",
      "options": [
        "Alaska",
        "New York",
        "Pennsylvania",
        "Florida"
      ],
      "correctAnswer": "Alaska",
      "explanation": "Chugach State Park, established in 1970, is located entirely within the Anchorage metropolitan area."
    },
    {
      "id": 857,
      "question": "This state's capital is the largest by land area, at 3,255 sq miles.",
      "options": [
        "Alaska",
        "Oklahoma",
        "Florida",
        "Arizona"
      ],
      "correctAnswer": "Alaska",
      "explanation": "Juneau is also the only mainland North America capital that is not connected by road to the rest of the state or to North America."
    },
    {
      "id": 858,
      "question": "This state has the longest border with another country, at 1,538 miles",
      "options": [
        "Alaska",
        "Michigan",
        "Texas",
        "Maine"
      ],
      "correctAnswer": "Alaska",
      "explanation": "Texas has a 1,241 mile border with Mexico."
    },
    {
      "id": 859,
      "question": "The king, or Chinook, salmon is the official fish of Oregon and of this state.",
      "options": [
        "Alaska",
        "Washington",
        "Maine",
        "Colorado"
      ],
      "correctAnswer": "Alaska",
      "explanation": "The largest of the Pacific salmon, it is anadromous, meaning it migrates from the sea to freshwater rivers to spawn."
    },
    {
      "id": 860,
      "question": "This state has the most volcanoes, with 141.",
      "options": [
        "Alaska",
        "Hawaii",
        "California",
        "Oregon"
      ],
      "correctAnswer": "Alaska",
      "explanation": "California is a distant second, with 18, and Oregon has 17, but the largest volcano in the world is Mauna Loa in Hawaii."
    },
    {
      "id": 861,
      "question": "This state is the easternmost, westernmost and northernmost.",
      "options": [
        "Alaska",
        "Florida",
        "Hawaii",
        "Maine"
      ],
      "correctAnswer": "Alaska",
      "explanation": "The Aleutian Islands cross the 180 degree longitude mark, which makes the state both easternmost and westernmost."
    },
    {
      "id": 862,
      "question": "This state has the highest percentage of men, at over 52%.",
      "options": [
        "Alaska",
        "California",
        "New York",
        "Maine"
      ],
      "correctAnswer": "Alaska",
      "explanation": "The US overall is 50.8% female, and only 10 states have more men than women."
    },
    {
      "id": 863,
      "question": "In this state, you can find the San Francisco mountain range, with its high point of Humphrey's Peak.",
      "options": [
        "Arizona",
        "California",
        "Nevada",
        "New Mexico"
      ],
      "correctAnswer": "Arizona",
      "explanation": "North of Flagstaff, Humphrey's Peak sits at 12,633 ft (3,851m)."
    },
    {
      "id": 864,
      "question": "Hawaii was the 50th state, Alaska was the 49th. Which state was the 48th (in 1912)?",
      "options": [
        "Arizona",
        "Utah",
        "Idaho",
        "Oregon"
      ],
      "correctAnswer": "Arizona",
      "explanation": "It was the last of the contiguous states to be admitted, on Feb 14 of that year."
    },
    {
      "id": 865,
      "question": "Lemonade is the official beverage of this desert state",
      "options": [
        "Arizona",
        "Utah",
        "Nevada",
        "New Mexico"
      ],
      "correctAnswer": "Arizona",
      "explanation": "It became such in 2019, due to the efforts of a local teenager."
    },
    {
      "id": 866,
      "question": "The town of Tombstone in this state is known as \"The Town Too Tough To Die\", and is famous for a gunfight in 1881.",
      "options": [
        "Arizona",
        "New Mexico",
        "Texas",
        "Nevada"
      ],
      "correctAnswer": "Arizona",
      "explanation": "While the shootout is widely believed to have had Wyatt Earp as the central figure, it was actually his brother Virgil who was the marshal of Tombstone at the time."
    },
    {
      "id": 867,
      "question": "You will find the London Bridge, that once spanned the River Thames, in Lake Havasu City in this state.",
      "options": [
        "Arizona",
        "New Mexico",
        "Colorado",
        "Nevada"
      ],
      "correctAnswer": "Arizona",
      "explanation": "It was shipped via the Panama Canal to California, then transported by truck to Arizona in 1968."
    },
    {
      "id": 868,
      "question": "The world's first professional rodeo took place in Prescott, in this state in 1888, before it was even a state.",
      "options": [
        "Arizona",
        "Wyoming",
        "Montana",
        "Texas"
      ],
      "correctAnswer": "Arizona",
      "explanation": "While the first rodeo was held in Cheyenne, WY, Arizona was the first to charge admission and award prizes."
    },
    {
      "id": 869,
      "question": "The only US interstate highway with distances listed in meters and kilometers is found in this state.",
      "options": [
        "Arizona",
        "California",
        "Maine",
        "Michigan"
      ],
      "correctAnswer": "Arizona",
      "explanation": "When I-19 was re-signed in 1980, the US was on a (failed) push to adopt the metric system, so this road connecting Nogales to Tucson has distances in metric, but the speed limit signs use MPH."
    }
  ]
}

// Function to get questions for a specific category, including from localStorage
export function getQuestionsByCategory(category: string): Question[] {
  const baseQuestions = triviaData[category] || [];
  try {
    if (typeof window !== 'undefined' && localStorage) {
      const storedQuestions = JSON.parse(localStorage.getItem(category) || '[]');
      const allQuestions = [...baseQuestions, ...storedQuestions];
      const uniqueQuestions = Array.from(new Set(allQuestions.map(q => q.id)))
        .map(id => allQuestions.find(q => q.id === id)!);
      return uniqueQuestions;
    }
  } catch (error) {
    console.error("Could not parse localStorage questions for category:", category, error);
  }
  return baseQuestions;
}
