import express from "express";
import axios from "axios";

const router = express.Router();
 
router.post("/login", async (req, res) => {
  try {
    const [username,password] = req.body;
    console.log(username,password)
    const chatEngineResponse = axios.get("https://api.chatengine.io/users/me", {
      headers: {
        "Project-ID": process.env.PROJECT_ID,
        "User-Name": username,
        "User-Secret": password,
      },
    });
    res.status(200).json({ response: chatEngineResponse.data });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/register", async (req, res) => {
  try {
    const [username, password] = req.body;
    console.log(username, password);

    const chatEngineResponse = axios.post(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: password,
      },
      {
        headers: { "Private-Key": process.env.PRIVATE_KEY },
      }
    );
    res.status(200).json({ response: chatEngineResponse.data });
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
