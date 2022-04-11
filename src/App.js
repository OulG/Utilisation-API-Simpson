import React from 'react';
import './App.css';
import axios from 'axios';
import DisplayQuote from './Components/DisplayQuote.jsx';

function App() {
  
  const sampleQuote = {
      quote:
        "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
      character: 'Lisa Simpson',
      image:
        'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
      characterDirection: 'Right',
    }

    const [quote, setQuote] = React.useState(sampleQuote);
    const getQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        setQuote(data[0]);
      });
  };

  return (
    <div className="App">
      <DisplayQuote quote={quote.quote} image={quote.image} character={quote.character}/>
      <button type="button" onClick={getQuote}>Get Simpson quote</button>
    </div>
  );
}

export default App;
