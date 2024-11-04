const homeLink = document.getElementById('home-link');
const dailyExerciseLink = document.getElementById('daily-exercise-link');
const shortstoryLink = document.getElementById('short-stories-link');
const spellingLink = document.getElementById('spelling-link');

const homeSection = document.getElementById('home-section');
const dailyExerciseSection = document.getElementById('daily-exercise-section');
const shortstorySection = document.getElementById('short-stories-section');
const spellingSection = document.getElementById('spelling-section');


function showSection(section) {
  homeSection.style.display = 'none';
  dailyExerciseSection.style.display = 'none';
  shortstorySection.style.display = 'none';
  spellingSection.style.display = 'none';

  section.style.display = 'block';
}

homeLink.addEventListener('click', () => showSection(homeSection));
dailyExerciseLink.addEventListener('click', () => showSection(dailyExerciseSection));
shortstoryLink.addEventListener('click', () => showSection(shortstorySection));
spellingLink.addEventListener('click', () => showSection(spellingSection));
const readButton = document.getElementById('read-button');
const textInput = document.getElementById('text-input');
readButton.addEventListener('click', () => {
  const text = textInput.value;
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'en-US';
  window.speechSynthesis.speak(speech);
});


const dailyWords = ["Empathy", "Resilience", "Gratitude", "Patience", "Apple", "Happy", "Elephant", "Sunflower", "Butterfly",
"Chocolate", "Rainbow", "Ocean", "Tree", "Mountain",
"Smile", "Adventure", "Family", "Dream", "Friend",
"Balloon", "Galaxy", "Starfish", "Ice cream", "Music",
"Wizard", "Pirate", "Robot", "Bicycle", "Cactus",
"Castle", "Dolphin", "Pumpkin", "Snowman", "Treasure",
"Ketchup", "Jungle", "Painting", "Sunset", "Unicorn",
"Dragon", "Cookies", "Thunder", "Marshmallow", "Dinosaur",
"Firefly", "Trolley", "Lollipop", "Hedgehog", "Pudding",
"Octopus", "Sandcastle", "Fireworks", "Waterfall"];
const dailyPhrases = [
  "Understanding begins with listening.",
  "Every day is a new opportunity to learn.",
  "Patience is the key to wisdom.",
  "Together, we are stronger.",
  "The sun is shining brightly.",
"I love chocolate ice cream.",
"Let's go on an exciting adventure!",
"The tree is very tall and strong.",
"She has a beautiful smile.",
"We saw a rainbow today in the sky.",
"The elephant is huge and gentle.",
"He loves to ride his bike fast.",
"The butterfly is colorful and delicate.",
"My family is everything to me.",
"I dreamed of a magical place last night.",
"Can we play outside in the sunshine?",
"The ocean waves are calming and peaceful.",
"Look at the beautiful sunset colors.",
"I found a treasure map while exploring.",
"The robot is very clever and funny.",
"I want to be a pirate on the sea.",
"The pumpkin is big and orange this Halloween.",
"Let’s build a sandcastle at the beach.",
"I like to listen to music every day.",
"The wizard cast a powerful spell.",
"The dragon flew high in the blue sky.",
"She has a pet hedgehog that is cute.",
"The fireworks were stunning and bright.",
"I can see a dolphin swimming in the ocean.",
"Let's eat marshmallows by the campfire.",
"I saw a shooting star last night.",
"The jungle is full of surprises and adventure.",
"He is my best friend forever and always.",
"The chocolate cake is delicious and sweet.",
"The mountain is covered in white snow.",
"I want to visit a castle someday.",
"The octopus changed colors in the water.",
"We made a snowman together in the yard.",
"The trolley goes to the market and back.",
"I found a lollipop on the ground.",
"The cactus is prickly but very pretty.",
"Fireflies light up the night sky beautifully.",
"I love exploring new places every weekend.",
"Let's discover hidden treasures together."
];


function updateDailyExercise() {
  const today = new Date().toDateString(); 
  const savedDate = localStorage.getItem('lastUpdateDate');

  if (savedDate !== today) {
    localStorage.setItem('lastUpdateDate', today);

    const randomWord = dailyWords[Math.floor(Math.random() * dailyWords.length)];
    const randomPhrase = dailyPhrases[Math.floor(Math.random() * dailyPhrases.length)];

    localStorage.setItem('dailyWord', randomWord);
    localStorage.setItem('dailyPhrase', randomPhrase);
  }

  document.getElementById('exercise-word').textContent = localStorage.getItem('dailyWord');
  document.getElementById('exercise-phrase').textContent = localStorage.getItem('dailyPhrase');
}


updateDailyExercise();


const wordActivateButton = document.getElementById('word-activate-button');
wordActivateButton.addEventListener('click', () => {
  const wordText = document.getElementById('exercise-word').textContent;
  const wordSpeech = new SpeechSynthesisUtterance(`Today's word is: ${wordText}`);
  wordSpeech.lang = 'en-US';
  window.speechSynthesis.speak(wordSpeech);
});


const phraseActivateButton = document.getElementById('phrase-activate-button');
phraseActivateButton.addEventListener('click', () => {
  const phraseText = document.getElementById('exercise-phrase').textContent;
  const phraseSpeech = new SpeechSynthesisUtterance(`Today's phrase is: ${phraseText}`);
  phraseSpeech.lang = 'en-US';
  window.speechSynthesis.speak(phraseSpeech);
});

document.addEventListener('DOMContentLoaded', () => {
  const stories = [
      { title: "The Traveler's Candle", url: "Short Stories/story1.html" },
      { title: "The Invisible Painter", url: "Short Stories/story2.html" },
      { title: "Song of the Stars", url: "Short Stories/story3.html" },
      { title: "The Keeper's Lantern", url: "Short Stories/story4.html" },
      { title: "The Glass Pen", url: "Short Stories/story5.html" },
      { title: "The Secret Library", url: "Short Stories/story6.html" },
      { title: "The River's Lullaby", url: "Short Stories/story7.html" },
      { title: "The Ephemeral Garden", url: "Short Stories/story8.html" },
      { title: "The Wishing Tree", url: "Short Stories/story9.html" },
      { title: "Voices of the Veil", url: "Short Stories/story10.html" },
      { title: "The Lantern's Secret", url: "Short Stories/story11.html" },
      { title: "The Whispering Flame", url: "Short Stories/story12.html" },
      { title: "Feathers of Fortune", url: "Short Stories/story13.html" },
      { title: "The Clockmaker's Apprentice", url: "Short Stories/story14.html" },
      { title: "Echoes in the Wind", url: "Short Stories/story15.html" },
      { title: "The Midnight Garden", url: "Short Stories/story16.html" },
      { title: "Whispers of the Tides", url: "Short Stories/story17.html" },
      { title: "The Forgotten Melody", url: "Short Stories/story18.html" },
      { title: "The Timeless Garden", url: "Short Stories/story19.html" },
      { title: "The Dream Weaver", url: "Short Stories/story20.html" },
  ];

  const storiesList = document.getElementById('stories-list');
  stories.forEach((story, index) => {

      const storyItem = document.createElement('div');
      storyItem.classList.add('story-item');

      
      const storyTitle = document.createElement('span');
      storyTitle.textContent = story.title;
      storyItem.appendChild(storyTitle);

  
      const readButton = document.createElement('button');
      readButton.textContent = "Read Short Story";
      readButton.onclick = () => {
          window.open(story.url, '_blank');
      };

      storyItem.appendChild(readButton);
      storiesList.appendChild(storyItem);
  });
});
document.getElementById("search-button").addEventListener("click", function() {
  const searchTerm = document.getElementById("search-bar").value.toLowerCase(); 
  const stories = document.querySelectorAll("#stories-list .story-item"); 

  stories.forEach(story => {
      
      if (story.textContent.toLowerCase().includes(searchTerm)) {
          story.style.display = ""; 
      } else {
          story.style.display = "none";
      }
  });
});
const spellingWords = [
  "friend", "imagination", "universe", "wonderful", "beautiful", "harmony", "discovery", "courage", 
  "inspiration", "creativity", "knowledge", "persistence", "exploration", "enthusiasm", "brilliant", "fantasy", "challenge", 
  "happiness", "strength", "wisdom", "kindness", "adventure", "journey", "peaceful", "celebrate", "together", "believe", "trustworthy", 
  "friendship", "success", "dreams", "infinite", "challenges", "motivation", "determination", "improve", "learn", "experience", "improve", 
  "achieve"
];

let currentWord = "";


const playWordButton = document.getElementById("play-word-button");
const spellingInput = document.getElementById("spelling-input");
const checkSpellingButton = document.getElementById("check-spelling-button");
const feedbackMessage = document.getElementById("feedback-message");
const hintButton = document.getElementById("hint-button");


function setNewSpellingWord() {
  currentWord = spellingWords[Math.floor(Math.random() * spellingWords.length)];
}


function playWord() {
  const wordSpeech = new SpeechSynthesisUtterance(currentWord);
  wordSpeech.lang = 'en-US';
  window.speechSynthesis.speak(wordSpeech);
}


playWordButton.addEventListener("click", () => {
  setNewSpellingWord();
  playWord();
  feedbackMessage.textContent = "";  
  spellingInput.value = "";  
});


checkSpellingButton.addEventListener("click", () => {
  const userAnswer = spellingInput.value.toLowerCase().trim();
  
  if (userAnswer === currentWord) {
      feedbackMessage.textContent = "Correct! Well done!";
      feedbackMessage.style.color = "green";
  } else {
      feedbackMessage.textContent = "Oops! Try again.";
      feedbackMessage.style.color = "red";
  }
});


hintButton.addEventListener("click", () => {
  feedbackMessage.textContent = `Hint: The word starts with "${currentWord.charAt(0).toUpperCase()}"`;
  feedbackMessage.style.color = "blue";
});

