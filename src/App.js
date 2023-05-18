import logo from './current.png';
import './App.css';
import 'animate.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="animate__animated animate__pulse" alt="logo" />
      <ul>
        <li>thecurrentkr@gmail.com</li>
      </ul>
      <div className="animated-title">
        <div className="track">
          <div className="content">
            we are create for your the
            current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we are create for your
            the current&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
