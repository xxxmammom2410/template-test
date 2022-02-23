// Get Quote From API
async function getQuote(){

  // const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const proxyUrl = 'https://young-stream-67624.herokuapp.com/'//herokuにデプロイしたnode.jsによるプロキシサーバー(https://github.com/Rob--W/cors-anywhere/)
  
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';//CORS非対応API URL
  try{
    // const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
    const response = await fetch(proxyUrl + apiUrl);
    // const response = await fetch( apiUrl);
    const data = response.json();
    console.log(response)
    console.log(data);
  }catch(error){
    getQuote();
    console.log(error);
  }
}


// On Load
getQuote();