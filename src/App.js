import "./App.css";
import { useState } from "react";
import axios from "axios";

const data = [
  {
    image: "1.png",
    title: "Presentation Design",
  },
  {
    image: "3.png",
    title: "Audio - Visual Production",
  },
  {
    image: "5.png",
    title: "Translation Services",
  },
  {
    image: "6.png",
    title: "Graphic Design",
  },
  {
    image: "2.png",
    title: "Research & Analytics",
  },
  {
    image: "4.png",
    title: "Data Processing",
  },
];

function App() {
  const [state, setState] = useState({
    email: "",
  });
  const [text, setText] = useState("Error");
  const handleSubmit = () => {
    if (state.email === "") {
      setText("Kindly enter the email");
    } else {
      axios
        .post("http://3.228.97.110:9000/api", state)
        .then((res) => {
          console.log(res);
          if (res.data.message === "form submitted") {
            setText("Form Submitted");
          }
        })
        .catch((err) => {
          if (err.message === "Request failed with status code 422") {
            setText("Request failed with status code 422");
          }
        });
      setState({ email: "" });
    }
  };
  return (
    <div className="App">
      <div>
        <div>
          <img className="image" src="logo.png" alt="" />
        </div>
        <h1>Suite Of Business Support Services</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div
          style={
            text === "Error"
              ? {
                  visibility: "hidden",
                }
              : text === "Form Submitted"
              ? {
                  color: "green",
                }
              : {
                  color: "red",
                }
          }
          className="message"
        >
          {text}
        </div>
        <div className="inputbox">
          <input
            type="text"
            placeholder="Email Address"
            value={state.email}
            onInput={(e) => {
              setState({ email: e.target.value });
            }}
          />
          <button onClick={handleSubmit}>Contact Me</button>
        </div>
      </div>
      <div className="card_div">
        {data?.map((item) => {
          return (
            <div>
              <div className="img_p">
                <img src={item.image} alt="" />
                <p>{item.title}</p>
              </div>
              <div className="para">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
