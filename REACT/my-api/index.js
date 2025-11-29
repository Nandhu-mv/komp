const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Simple API Route
// app.get("/hello", (req, res) => {
//   res.json({ message: "Hello from your API!" });
// });

// Example Wordle API Route
app.get("/random-word", (req, res) => {
  const words = [
  "apple", "chair", "bread", "stone", "plant",
  "robot", "light", "house", "snake", "train",
  "quiet", "crowd", "flame", "glass", "storm",
  "water", "smile", "night", "dream", "heart",
  "beach", "table", "mouse", "river", "earth",
  "sound", "flock", "cloud", "blaze", "crisp",
  "grain", "sweet", "laugh", "fruit", "sword",
  "magic", "point", "level", "speed", "track",
  "field", "truck", "sugar", "north", "south",
  "eagle", "piano", "tower", "cabin", "reset",
  "focus", "honor", "index", "shell", "queen",
  "sport", "pride", "brave", "round", "spice",
  "grape", "shine", "dream", "angel", "flute",
  "bliss", "cycle", "lucky", "peace", "spade"
];

//   const random = words[Math.floor(Math.random() * words.length)];
  res.json({ words });
});

// Start server
app.listen(5000, () => console.log("API running on http://localhost:5000"));
