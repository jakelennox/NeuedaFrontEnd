import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const URL = 'https://c4rm9elh30.execute-api.us-east-1.amazonaws.com/default/cachedPriceData?ticker=C';
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(URL)
    .then((response) => {
        setData(response.data);
    })
    .catch((error) => {
        console.error('Fetch failed:', error);
    });
  });

  return (
    !data && <div>
        <h2>Ticker: {data.ticker}</h2>
        <h2>Price Data</h2>
        <table>
          <thead>
            <tr>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
              <th>Volume</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {data.price_data.open.map((name, i) => (
              <tr key={i}>
                <td>{data.price_data.open[i]}</td>
                <td>{data.price_data.high[i]}</td>
                <td>{data.price_data.low[i]}</td>
                <td>{data.price_data.close[i]}</td>
                <td>{data.price_data.volume[i]}</td>
                <td>{data.price_data.timestamp[i]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      || 'No data was found.'
  );
}

export default App;