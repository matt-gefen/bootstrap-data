function getRandomKanyeQuote() {
  return kanyeQuotes[Math.floor(Math.random() * (kanyeQuotes.length - 1))]
}

function getRandomTaylorQuote() {
  return taylorQuotes[Math.floor(Math.random() * (taylorQuotes.length - 1))]
}

const kanyeQuotes = [
  "2024",
  "All you have to be is yourself",
  "Believe in your flyness...conquer your shyness.",
  "Burn that excel spreadsheet",
  "Decentralize",
  "Distraction is the enemy of vision",
  "Everything you do in life stems from either fear or love",
  "For me giving up is way harder than trying.",
  "For me, money is not my definition of success. Inspiring people is a definition of success",
  "Fur pillows are hard to actually sleep on",
  "Have you ever thought you were in love with someone but then realized you were just staring in a mirror for 20 minutes?",
  "I feel calm but energized",
  "I feel like I'm too busy writing history to read it.",
  "I give up drinking every week",
  "I leave my emojis bart Simpson color",
  "I love sleep; it's my favorite.",
  "I make awesome decisions in bike stores!!!",
  "I really love my Tesla. I'm in the future. Thank you Elon.",
  "I still think I am the greatest.",
  "I think I do myself a disservice by comparing myself to Steve Jobs and Walt Disney and human beings that we've seen before. It should be more like Willy Wonka...and welcome to my chocolate factory.",
  "I want the world to be better! All I want is positive! All I want is dopeness!",
  "I wish I had a friend like me",
  "I'd like to meet with Tim Cook. I got some ideas",
  "I'll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying.",
  "I'm a creative genius",
  "I'm nice at ping pong",
  "I'm the best",
  "If I don't scream, if I don't say something then no one's going to say anything.",
  "If I got any cooler I would freeze to death",
  "Keep squares out yo circle",
  "Let's be like water",
  "Man... whatever happened to my antique fish tank?",
  "My dad got me a drone for Christmas",
  "My greatest award is what I'm about to do.",
  "My greatest pain in life is that I will never be able to see myself perform live.",
  "Only free thinkers",
  "People always say that you can't please everybody. I think that's a cop-out. Why not attempt it? Cause think of all the people that you will please if you try.",
  "People always tell you 'Be humble. Be humble.' When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome!",
  "People only get jealous when they care.",
  "Perhaps I should have been more like water today",
  "Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary.",
  "Sometimes you have to get rid of everything",
  "Style is genderless",
  "The world is our family",
  "The world is our office",
  "Today is the best day ever and tomorrow's going to be even better",
  "Tweeting is legal and also therapeutic",
  "We all self-conscious. I'm just the first to admit it.",
  "We came into a broken world. And we're the cleanup crew.",
  "You can't look at a glass half full or empty if it's overflowing.",
  "I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle",
  "All the musicians will be free",
  "Artists are founders",
  "Buy property",
  "Culture is the most powerful force in humanity under God",
  "Empathy is the glue",
  "I am one of the most famous people on the planet",
  "I am running for President of the United States",
  "I am the head of Adidas. I will bring Adidas and Puma back together and bring me and jay back together",
  "I hear people say this person is cool and this person is not cool. People are cool. Man has never invented anything as awesome as a an actual person but sometimes we value the objects we create over life itself",
  "I love UZI. I be saying the same thing about Steve Jobs. I be feeling just like UZI",
  "I need an army of angels to cover me while I pull this sword out of the stone",
  "I spoke to Dave Chapelle for two hours this morning. He is our modern day Socrates",
  "I was just speaking with someone that told me their life story and they used to be homeless.",
  "I watch Bladerunner on repeat",
  "I'm giving all Good music artists back the 50% share I have of their masters",
  "I'm going to personally see to it that Taylor Swift gets her masters back. Scooter is a close family friend",
  "I'm the new Moses",
  "Life is the ultimate gift",
  "Manga all day",
  "My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth",
  "My mama was a' English teacher. I know how to use correct English but sometimes I just don't feel like it aaaand I ain't got to",
  "My memories are from the future",
  "My mother in law Kris Jenner ... makes the best music playlist",
  "People say it's enough and I got my point across ... the point isn't across until we cross the point",
  "So many of us need so much less than we have especially when so many of us are in need",
  "The world needs more Joy... this idea is super fresh",
  "There are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likeness",
  "There's so many lonely emojis man",
  "Trust me ... I won't stop",
  "Two years ago we had 50 million people subscribed to music streaming services around the world. Today we have 400 million.",
  "We are here to complete the revolution. We are building the future",
  "We as a people will heal. We will insure the well being of each other",
  "We have to evolve",
  "We must and will cure homelessness and hunger. We have the capability as a species",
  "We must form a union. We must unify",
  "We will be recognized",
  "We will change the paradigm",
  "We will cure hunger",
  "We will heal. We will cure.",
  "We're going to move the entire music industry into the 21st Century",
  "We've gotten comfortable with not having what we deserve",
  "Who made up the term major label in the first place???",
  "Winning is the only option"
]

const taylorQuotes = [
  "People haven't always been there for me but music always has.",
  "I suffer from girlnextdooritis where the guy is friends with you and that's it.",
  "This is a new year. A new beginning. And things will change.",
  "I never want to change so much that people can't recognize me.",
  "No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind.",
  "I’m intimidated by the fear of being average.",
  "Just be yourself, there is no one better.",
  "It's hard to fight when the fight ain't fair.",
  "The lesson I've learned the most often in life is that you're always going to know more in the future than you know now.",
  "There's more to life than dating the boy on the football team.",
  "If you're horrible to me, I'm going to write a song about it, and you won't like it. That's how I operate.",
  "Being FEARLESS isn't being 100% Not FEARFUL, it's being terrified but you jump anyway...",
  "Giving up doesn't always mean your weak sometimes your just strong enough to let go.",
  "I've wanted one thing for my whole life and I'm not going to be that girl who wants one thing her whole life then gets it and complains.",
  "Love is the one wild card.",
  "We should love, not fall in love, because everything that falls, gets broken.",
  "Life isn't how to survive the storm, it's about how to dance in the rain.",
  "If they don't like you for being yourself, be yourself even more.",
  "I've always been a hugger. If we all hugged more, the world would be a better place :)",
  "I've found time can heal most anything and you just might find who you're supposed to be.",
  "There are two different categories of love. The first category is called a fairytale. The second category of love is called just another lesson.",
  "I haven't had that one great love, which is good. I don't want that to be in the past, I want it to be in the future.",
  "To truly love is to have the courage to walk away and let the other person who wishes to be free go no matter how much it hurts.",
  "At some point you have to forget about grudges because they only hurt.",
  "In high school, I used to think it was so cool if a guy had an awesome car. Now none of that matters. These days I look for character and honesty and trust.",
  "I love you all so much, I just wanted you to know.",
  "Bring on all the pretenders!",
  "Just because as human beings, what we can't have is what we reply in our head over and over again before we go to sleep.",
  "There are two ways you can go with pain: You can let it destroy you or you can use it as fuel to drive you...",
  "Real love still happens sometimes. It's not just something we make up when you're nine. I have to believe that. You do too.",
  "I know my flaws before other people point them out to me.",
  "You did a number on me, but honestly, baby, who’s counting?",
  "Take the words for what they are: A dwindling, mercurial high, a drug that only worked the first few hundred times.",
  "Cyberwar does not determine who is right. Only who is left.",
  "What's the difference between viruses, trojans, worms, etc? It doesn't matter. It's all crap no one wants on their computer. Stop teaching users worthless information they'll never use.",
  "Don’t even get me started on wiretaps. It’s not a good thing for me to talk about socially. I freak out … I have to stop myself from thinking about how many aspects of technology I don’t understand.",
  "The only thing not digital in cyberwar is the blood.",
  "There are two kinds of people who ponder stories of a machine apocolypse: Those who fear an error in machine judgement, and those who fear humans being judged.",
  "As the bulbs flash, I can't help but think of cyberwar - When the arching death of electric transformers will light the night, leaving our nation in darkness.",
  "Some speak of an Armageddon; A time when humans will build machines they neither understand nor control. To myself I whisper, 'we already have'.",
  "Only the dead have seen the end of cyberwar."
]

export {
  getRandomKanyeQuote,
  getRandomTaylorQuote
}