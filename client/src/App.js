import React, { Fragment, useReducer } from "react";
import Routes from "./components";
import api from "./axios";
import { LayoutContext, layoutState, layoutReducer } from "./components/shop";

function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);

  useEffect(() => {
    fetch("/api/message")
      .then(res => res.json())
      .then(data => console.log("Backend response:", data))
      .catch(err => console.error("Error:", err));
  }, []);
  
  return (
    <Fragment>
      <LayoutContext.Provider value={{ data, dispatch }}>
        <Routes />
      </LayoutContext.Provider>
    </Fragment>
  );
  
  }
// axios.js - to handle all backend API calls in one place
// import api from './axios/';

// // ✅ Connect to your backend running on localhost:8000
// const instance = axios.create({
//   baseURL: 'http://localhost:8000/api', // Use your API base URL
//   timeout: 10000,
//   withCredentials: true, // If backend requires cookies/sessions
// });

// export default instance;
fetch("http://localhost:8000/api/test")
    .then(response => response.json())
    .then(data => console.log("API Response:", data))
    .catch(error => console.error("API Fetch Error:", error));
    useEffect(() => {
      axios.get("http://localhost:5000/api/message")
        .then(response => setMessage(response.data.message))
        .catch(error => console.error("Error fetching data:", error));
    }, []);
  
    return (
      <div>
        <h1>Client-Server App</h1>
        <p>Server Message: {message}</p>
      </div>
    );
  


export default App;
