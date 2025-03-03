import { Component } from "react";
// import { useState } from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonClickMe from "./components/buttons";
import { Profile, Gallery } from "./components/Gallery"; // Importing named exports
import ButtonGallery, { Gallerys } from "./components/GalleryButton";
import Frameworks from "./components/MultipleComponents";
import Box from "./components/Box";
import Avatar from "./components/Avatar";

class App extends Component {
  constructor() {
    super();
    // local state is always a json object
    this.state = {
      filename: "App.jsx",
      lang: { one: "Vite", two: "React" },
      type: { one: "tool", two: "framework" },
    };
  }

  render() {
    const Box1 = {
      backgroundColor: "blue",
      color: "white",
      padding: "10px 20px",
      width: "20px",
      height: "50px",
      margin: "9px",
    };

    const Box2 = {
      backgroundColor: "red",
      color: "white",
      padding: "12px 25px",
      width: "30px",
      height: "50px",
      margin: "3px",
    };
    return (
      <>
        <div>
          <Avatar
            style={{ height: "30px", width: "30px", margin: "10px" }}
            srcPath={viteLogo}
            altText={this.state.lang.one}
            linkPath="www.vite.dev"
          />
          <Avatar
            style={{ height: "30px", width: "30px", margin: "10px" }}
            srcPath={reactLogo}
            altText={this.state.lang.two}
            linkPath="www.react.dev"
          />
        </div>
        <h1>
          {this.state.lang.one} + {this.state.lang.two}
        </h1>
        <div className="card">
          {/* Below is an example of Shallow merge, 
        we need to make sure that json object structure remains same so that values are updated & rendered properly
        Also it happens asynchronously, that is why at runtime, in console, old value is printed */}
          <button
            onClick={() => {
              this.setState({
                filename: "Main.jsx",
                lang: { one: "ViteJS", two: "ReactJS" },
              });
              console.log(this.state);
            }}
          >
            Change Filename
          </button>
          <p>
            Edit <code>src/{this.state.filename}</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <ButtonClickMe />
        <div>
          <Gallery />
          <Profile />
        </div>
        <div>
          <p>
            <ButtonGallery />
          </p>
          <Gallerys />
        </div>
        <div>
          <Frameworks
            imgPath={reactLogo}
            altText={this.state.lang.two}
            type={this.state.type.two}
          />
          <Frameworks
            imgPath={viteLogo}
            altText={this.state.lang.one}
            type={this.state.type.one}
          />
        </div>
        <div>
          <Box text="Box1" style={Box1} />
          <Box text="Box2" style={Box2} />
        </div>
        {/* JsxReceiver is a Wrapper Component */}
        {/* <JsxReceiver render={(data) => <h1>{data}</h1>} /> */}
      </>
    );
  }
}

export default App;
