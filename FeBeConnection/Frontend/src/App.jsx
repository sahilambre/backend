import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  }, []);

  return (
    <>
      <h1>Backend Jokes</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
