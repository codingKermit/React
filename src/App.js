import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [loading, setLoading] = useState(true);

  const [coins, setCoins] = useState([]);

  useEffect(()=>{
    // fetch("https://api.coinpaprika.com/v1/tickers")
    // .then((res)=> res.json())
    // .then((json)=>console.log(json));

    axios.get("https://api.coinpaprika.com/v1/tickers")
    .then((res)=>{
      console.log(res)
      setCoins(res.data);
      setLoading(false);
    })
    .catch((err)=>{console.log(err)});



  },[])

  return (
    <div className="App">
      <h1>The Coins! ({coins.length})</h1>
      {loading ? (<strong>Loading...</strong>) : 
      (
        <div>
          <select>
            {coins.map((coin, index)=>{
              return(
                <option key={index}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>
              )
            })}
          </select>
          <ul>
            {coins.map((coin,index)=>{
              return(
                <li key={index}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
