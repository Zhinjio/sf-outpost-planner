import logo from './logo.svg';
import './App.css';
import { longNames } from './data.js';

const argon = longNames.filter(element => element.name === 'Xe');
const listItems = argon.map(element =>
  <li key={element.key}>Element with symbol {element.name} has long name: {element.longName} (and id: {element.key})</li>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{listItems}</ul>
      </header>
    </div>
  );
}

export default App;
