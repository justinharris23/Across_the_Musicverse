import { useState, useEffect } from "react";
import axios from "axios";

export default function Artist() {
  //we need to create a state for our data
  const [chart, setChart] = useState(null);

  //we need to call an axios function
  useEffect(() => {
    const getChart = async () => {
      const response = await axios.get("https://api.deezer.com/chart");

      //we need to set state of our data
      setChart(response.data.artists.data);
    };

    getChart();
  }, []);

  //we need to see the data

  //let's also make a guard operator
  //so if data takes a few seconds/
  //our site doesn't break

  if (!chart) {
    return <h2>Loading please wait</h2>;
  } else {
    //we have to map all of our songs here in this div. If we don't have an artist we'll get Loading Please Wait
    return (
      <div className="topArtist">
        {chart.map((data) => (
          <div key={data.name} className="artistCard">
            <h3 className="musicName"> {data.name} </h3>
            <div>
              <img className="artistImage" src={data.picture_medium}    width="250px"
                height="250px" />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
