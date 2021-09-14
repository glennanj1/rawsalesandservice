import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Specializing in since 2012:
          <ul>
            <li>
              Heavy Duty diesel repair & maintenence
            </li>
            <li>
              Truck Tires, Body & Custom Work
            </li>
            <li>
              Complete Rebuilds
            </li>
            <li>
              Customization & Paint Specilists
            </li>
            <li>
              Heavy Duty Sales
            </li>
            <li>
              Auto Repair & Sales
            </li>
          </ul>
          The gold standard in heavy duty repairs
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default App;
