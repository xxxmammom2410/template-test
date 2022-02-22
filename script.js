const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];

// Show Loading
function loading(){
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading
function complete(){
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// Show New Quote
function newQuote() {
  loading();
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  //ローカルでのAPIバックアップを利用する場合
  // const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
 authorText.textContent = quote.author ;
//  Check if Author field is blank and replace it wht 'Unknown'
if (!quote.author){
  authorText.textContent = 'Unknown';
}else{
  authorText.textContent = quote.author;
}
  // Check Quote length to determine styling
  if(quote.text.length > 120){
    quoteText.classList.add('long-quote');
  } else{
    quoteText.classList.remove('long-quote');
  }
  // Set Quote, Hide Loader
 quoteText.textContent = quote.text;
 complete();
}

// Get Quotes From API
async function getQuotes(){
  loading();

  const apiUrl = 'https://type.fit/api/quotes';
  try{
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
    // console.log(apiQuotes);
    
  }catch(error){
    // Catch Error Here
    
  }
}

//  Tweet Quote
function tweetQuote(){
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  // window.open(twitterUrl, '_blank')
  window.open(twitterUrl,
  // "https://programmercollege.jp/",
  // "_self"
  );
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote)


// On Load
getQuotes();