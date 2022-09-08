import "./App.css";
import { ListOfTask} from "./components/listOfTask/ListOfTask";
import { Logo } from './components/logo/Logo';

function App() {

  return (
    <main className="App">
      <Logo partOne='My' partTwo='To-Do' partThree='List'/>
      <ListOfTask />
    </main>
  );
}

export default App;
