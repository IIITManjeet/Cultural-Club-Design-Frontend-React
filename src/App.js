
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Slider from './Components/Slider';
import Header from './Components/Header';
import AboutUS from './Components/AboutUS';

function App() {
  return (
    <Router>
      <Header />
      <Slider/>
      <AboutUS/>
    </Router>
  );
}

export default App;
