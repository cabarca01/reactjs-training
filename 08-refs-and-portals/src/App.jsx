import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" duration={1} />
        <TimerChallenge title="Not So Easy" duration={5} />
        <TimerChallenge title="Getting Difficult" duration={10} />
        <TimerChallenge title="Only for Pros" duration={15} />
      </div>
    </>
  );
}

export default App;
