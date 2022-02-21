let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  //ローカルでのAPIバックアップを利用する場合
  // const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
  console.log(quote);
}

// Get Quotes From API
async function getQuotes(){
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

// On Load
getQuotes();