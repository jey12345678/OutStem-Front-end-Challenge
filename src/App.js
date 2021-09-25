import './App.css';
import HeadingDetails from './Components/HeadingDetails.js';
import Form from './Components/Form.js';
import image from './Images/hero.webp';

function App() {
  return (
    <div className = "App">
      <img src={image} className="App-logo" alt="logo" style= {{width: "100%"}}/>

      <Form/>

    </div>
    

  );
}

export default App;
