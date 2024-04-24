import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge titlr="Easy" targetTime={1} />
        <TimerChallenge titlr="Not easy" targetTime={5} />
        <TimerChallenge titlr="Getting tough" targetTime={10} />
        <TimerChallenge titlr="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
