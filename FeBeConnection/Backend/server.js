import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  try {
    const jokes = [
      {
        id: 1,
        title: "Joke 1",
        content: "What do you call a bear with no teeth? A gummy bear.",
      },
      {
        id: 2,
        title: "Joke 2",
        content:
          "Why did the scarecrow win an award? Because he was outstanding in his field.",
      },
      {
        id: 3,
        title: "Joke 3",
        content:
          "What do you get when you cross a snowman and a vampire? Frostbite.",
      },
      {
        id: 4,
        title: "Joke 4",
        content:
          "Why don't scientists trust atoms? Because they make up everything.",
      },
      {
        id: 5,
        title: "Joke 5",
        content: "What do you call a fake noodle? An impasta.",
      },
    ];

    res.send(jokes);
  } catch (error) {
    console.error("Error fetching jokes:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
