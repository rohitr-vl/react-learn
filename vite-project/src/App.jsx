import { Component } from 'react'
// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonClickMe from './components/buttons'
import { Profile, Gallery } from './components/Gallery';  // Importing named exports
import ButtonGallery, { Gallerys } from './components/GalleryButton'
import Frameworks from './components/MultipleComponents'

class App extends Component {
  constructor() {
    super();
    // local state is always a json object
    this.state = {
      filename: 'App.jsx',
      lang: { one: 'Vite', two: 'React' },
      type: {one:'tool', two:'framework'}
    }
  }
  render() {
    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>{this.state.lang.one} + {this.state.lang.two}</h1>
        <div className="card">
        {/* Below is an example of Shallow merge, 
        we need to make sure that json object structure remains same so that values are updated & rendered properly
        Also it happens asynchronously, that is why at runtime, in console, old value is printed */}
        <button onClick={() => {
          this.setState({filename: 'Main.jsx',lang: {one:'ViteJS', two:'ReactJS'}});
          console.log(this.state);
        }}>Change Filename</button>
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
          <p><ButtonGallery /></p>
          <Gallerys />
        </div>
        <div><Frameworks imgPath={reactLogo} altText={this.state.lang.two} type={this.state.lang.two} /></div>
        <div><Frameworks imgPath={viteLogo} altText={this.state.lang.one} type={this.state.lang.one} /></div>
      </>
    )
  }
}

export default App
