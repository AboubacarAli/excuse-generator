import { useState } from "react";

export default function excuseGenerator() {
  let [userInput, setUserInput] = useState();
  let [genratedExcuse, setGeneratedExcuse] = useState();
  function textRecieved(text) {
    setGeneratedExcuse(text);
  }
  function handleResponse(response) {
    response.text().then(textRecieved);
  }
  function handleClick() {
    console.log("Generating excuse");

    fetch("api/generate-excuse?user_input=" + userInput).then(handleResponse);
  }
  function onInputChanged(event) {
    setUserInput(event.target.value);
  }
  return (
    <div className="h-screen bg-gray-300 flex items-center justify-center">
      <div className="bg-white w-80 shadow-lg rounded p-6 ">
        <div className="text-lg text-black font-bold mb-4">Excuse generator</div>
        <div className="text-sm mb-2 text-gray-600">How can i help?</div>
        <input onChange={onInputChanged} className=" text-black p-2 rounded w-full border mb-4"></input>
        <div>
          <button onClick={handleClick} className="bg-blue-600 rounded p-4 text-white text-bold w-full">
            Generate excuse
          </button>
        </div>
        <div className="mt-4 font-bold text-blue-300">{genratedExcuse}</div>
      </div>
    </div>
  );
}
