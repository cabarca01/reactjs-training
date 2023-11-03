import PlayerSection from "./components/player/PlayerSection"
import GameBoard from "./components/board/GameBoard"

function App() {

  return (
    <main>
      <div id="game-container">
        <PlayerSection />
        <GameBoard />
      </div>
    </main>
  )
}

export default App
