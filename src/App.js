import './App.css';
import WebcamPlayer1 from "./components/WebCamPlayer1";
import WebcamPlayer2 from "./components/WebcamPlayer2";
import Flexbox from 'flexbox-react';

function App() {
  return (
    <Flexbox flexDirection="column">
      <Flexbox element="header" height="100px" justifyContent="center" >
        <h1>Harria - Papera - Guraizea</h1>
      </Flexbox>
      <Flexbox justifyContent="space-between" marginLeft="3%" marginRight="3%">   
        <WebcamPlayer1></WebcamPlayer1>
      </Flexbox>


    
    </Flexbox>
  );
}

export default App;
