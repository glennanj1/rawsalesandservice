import BuildIcon from '@material-ui/icons/Build';
import './App.css';
const video = 'https://d3ddatyom1hv87.cloudfront.net/rawsales.mp4'

function App() {
  return (
    <div className="App">
      <video className='video' autoPlay loop playsInline defaultMuted muted>
            <source src={video} type='video/mp4' />
      </video>
      <header className="App-header">
        <h5>(302)448-0168</h5>
        <BuildIcon className="App-logo"/>
        <h5>110 McCaulley Ave, PO Box 3, Ellendale, DE 19941</h5>
      </header>
      <div className="container">
        <h1>Raw Sales & Service LLC</h1>
          <p>
            <h2>Est: 2012</h2>
            <ol>
              <li>
                <h3>Heavy Duty diesel repair</h3>
              </li>
              <li>
                <h3>Tires, Body & Custom Work</h3>
              </li>
              <li>
                <h3> Rebuilds</h3>
              </li>
              <li>
                  <h3>Paint Specilists</h3>
                </li>
                <li>
                    <h3>Heavy Duty Sales</h3>
                </li>
                <li>
                    <h3>Auto Repair & Sales</h3>
                </li>
            </ol>
            <h4>The gold standard in heavy duty repair</h4>
          </p>
      </div>
    </div>
  );
}

export default App;
