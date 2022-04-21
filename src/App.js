import logo from './logo.svg';
import './App.css';
import {FaTwitter,FaFacebook,FaInstagram,FaYoutube} from 'react-icons/fa';
import acfLogo from './images/acfLogo.png';

function App() {
  return (
    <div className="App">
      <div class="navbar">
        <div className='logo'>
  <a href="#home"><img src={acfLogo}/></a>
  </div>
  
  <a href = "#home">Home</a>
  <a href = "#trainingTable">Training Table</a>
  <a href= "#createTraining">Create Training</a>
  
  
  <div class="dropdown">
    <button class="dropbtn">Dropdown 
      
    </button>
    <div class="line"></div>
    <div class="dropdown-content">
         
      <div class="row">
        <div class="column">
          <h3>Category 1</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div class="column">
          <h3>Category 2</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div class="column">
          <h3>Category 3</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  
  </div>
</div>

<div className='mainContent'></div>
     
<div class ="flex-container">
  <div className= 'logo'> <img src = {acfLogo}></img> </div>
  <div className='footerIcons'><FaTwitter/> <FaFacebook/> <FaInstagram/> <FaYoutube/></div>
  <div className='footerMain'><ul><li>Army Cadet Webstore</li><li>Cookie Policy</li><li>Cadet Portal</li><li>Brand Center</li><li>Privacy Policy</li><li>Counties</li></ul></div>
      <footer className="c-footer"></footer>
      </div>
    </div>

  );
}

export default App;
