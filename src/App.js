import './App.css';
import WebcamPlayer from "./components/WebcamPlayer";
import Flexbox from 'flexbox-react';
import PlayerCards from './components/PlayerCards';

function App() {
  return (
    <Flexbox flexDirection="column">
      <Flexbox element="header" height="100px" justifyContent="center" >
        <h1>Harria - Papera - Guraizea</h1>
      </Flexbox>
      <Flexbox justifyContent="space-between" marginLeft="3%" marginRight="3%">   
        <WebcamPlayer></WebcamPlayer>
        <PlayerCards></PlayerCards>
      </Flexbox>


    
    </Flexbox>
  );
}

export default App;
