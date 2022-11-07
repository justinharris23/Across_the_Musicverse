import { useState, useEffect } from "react";
import axios from "axios";

export default function Artist() {
  //we need to create a state for our data
  const [chart, setChart] = useState(null);

  //we need to call an axios function
  useEffect(() => {
    const getChart = async () => {
      const response = await axios.get("https://api.deezer.com/chart");
      console.log(response.data.artists.data);

      //we need to set state of our data
      setChart(response.data.artists.data);
    };

    getChart();
  }, []);

  //we need to see the data
  console.log(chart);
  // console.log(artist[0].title);

  //let's also make a guard operator
  //so if data takes a few seconds/
  //our site doesn't break

  if (!chart) {
    return <h2>Loading please wait</h2>;
  } else {
    //we have to map all 25 of our songs here in this div. If we don't have an artist we'll get Loading Please Wait
    return (
      <div className="grid">
        {chart.map((data) => (
          <div key={data.name} className="card">
            <h3>Artist: {data.name} </h3>
            <div>
              <img className="artistImage" src={data.picture_medium} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
