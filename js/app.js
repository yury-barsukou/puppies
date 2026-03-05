const facts = [
    "Puppies are born blind, deaf, and toothless.",
    "A puppy sleeps up to 18–20 hours a day — growing is hard work!",
    "Puppies have 28 baby teeth that fall out around 4 months old.",
    "A dog's nose print is as unique as a human fingerprint.",
    "Puppies wag their tails as a learned social behavior, not an instinct.",
    "The average puppy doubles its birth weight in just one week.",
    "Puppies develop their sense of smell 40× stronger than humans.",
    "Playing with puppies for just 10 minutes reduces stress hormones.",
    "Puppies dream just like humans — those tiny leg twitches are real dreams!",
    "The word 'puppy' likely comes from the French 'poupée', meaning doll.",
];

const factText = document.getElementById('fact-text');

function showRandomFact() {
    const idx = Math.floor(Math.random() * facts.length);
    factText.style.opacity = 0;
    setTimeout(() => {
        factText.textContent = facts[idx];
        factText.style.opacity = 1;
    }, 300);
}

factText.style.transition = 'opacity 0.3s ease';
showRandomFact();

document.getElementById('fact-box').addEventListener('click', showRandomFact);
