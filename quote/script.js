const quotes = [
  {text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author:"Winston Churchill"},
  {text: "Don't watch the clock; do what it does. Keep going.", author:"Sam Levenson"},
  {text: "Believe you can and you're halfway there.", author:"Theodore Roosevelt"},
  {text: "Your limitation—it’s only your imagination.", author:"pradeep"},
  {text: "Push yourself, because no one else is going to do it for you.", author:"pradeep"},
  {text: "Great things never come from comfort zones.", author:"pradeep"},
  {text: "Dream it. Wish it. Do it.", author:"pradeep"},
  {text: "Sometimes later becomes never. Do it now.", author:"pradeep"}
];

const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');

newQuoteBtn.addEventListener('click', showQuote);

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  // Add simple fade-in effect
  quoteText.style.opacity = 0;
  quoteAuthor.style.opacity = 0;

  setTimeout(() => {
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `- ${quote.author}`;
    quoteText.style.opacity = 1;
    quoteAuthor.style.opacity = 1;
  }, 300);
}

// Footer links
document.getElementById('contact').addEventListener('click', () => {
  alert('Phone Number: 91+8682940603');
});

document.getElementById('linkedin').addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/r-pradeep-b9a440349', '_blank');
});
