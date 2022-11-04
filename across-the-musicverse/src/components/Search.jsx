import { useEffect, useState } from "react";

function Search() {
  //Initial State. This is an object. Form will have 3 key value pairs, each a blank string
  const initialState = {
    issueType: "",
    subject: "",
    message: "",
  };
  const [formState, setFormState] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setFormState(initialState);
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  //Call to API to intiate search goes here
  //How to change variable in the API call
  //use State with a handlechange and a handlesubmit function
  //like in the React forms lesson

  return (
    <div className="App">
      {/* <h2> Search Bar Goes Here</h2> */}

      <form onSubmit={handleSubmit}>
        <label htmlFor="issueType"> Type of Issue:</label>
        <select
          id="issueType"
          onChange={handleChange}
          value={formState.issueType}
        >
          <option value="outage">Service Outage</option>
          <option value="billing">Billing</option>
          <option value="cancel">Cancel</option>
        </select>
        <br />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          onChange={handleChange}
          value={formState.subject}
        ></input>
        <br />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={formState.message}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Search;
