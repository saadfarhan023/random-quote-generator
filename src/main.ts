import './style.css';

interface Quote {
  quote: string;
  author: string;
}

const quoteEl = document.getElementById("quote") as HTMLElement;
const authorEl = document.getElementById("author") as HTMLElement;
const refetchBtn = document.getElementById("refetchBtn") as HTMLButtonElement;

async function fetchQuotes(): Promise<void> {
  quoteEl.textContent = "loading...";
  authorEl.textContent = "";
  try {
    const response = await fetch("https://quoteslate.vercel.app/api/quotes/random");
    const data: Quote = await response.json();
    quoteEl.textContent = `"${data.quote}"`;
    authorEl.textContent = `~ ${data.author}`;
  } catch (error) {
    console.error(error);
    quoteEl.textContent = "error when fetching a new quote";
  }
}

refetchBtn.addEventListener("click", fetchQuotes);
fetchQuotes();