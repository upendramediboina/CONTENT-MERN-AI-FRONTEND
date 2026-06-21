import axios from "axios";

//======= Content Generation =====

export const generateContentAPI = async (userPrompt) => {
  const response = await axios.post(
    "https://content-mern-ai-backend.onrender.com/api/v1/openai/generate-content",
    {
      prompt: userPrompt,
    },
    {
      withCredentials: true,
    }
  );

  return response?.data;
};