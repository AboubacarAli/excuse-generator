import OpenAI from "openai";

let openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function generateExcuse(request, response) {
  let userInput = request.query.user_input;
  console.log("Text recieved: ", userInput);

  let context = "Keep the excuse short. Keep it realistic. Do not make it to complex. Use the information about me to generate your excuse";

  let aboutMe = "28 years old, CEO of a startup. Content creator. Gym twice a week and salsa every two weeks";

  let prompt = "Generate a realistic excuse for this:" + userInput + " Context:" + context + " About me:" + aboutMe;

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });
  response.send(chatCompletion.choices[0].message.content);
}
