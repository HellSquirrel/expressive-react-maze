import { Ball } from "./Ball";
import { Maze } from "./Maze";
import { Rectangle } from "./Rectangle";

const App = () => (
  <div>
    <h1>Собачка и мячик</h1>
    <Rectangle>
      {/* Тут была собачка, но она ушла в лабиринт */}
      <Maze />
      <Ball />
    </Rectangle>
  </div>
);

export default App;