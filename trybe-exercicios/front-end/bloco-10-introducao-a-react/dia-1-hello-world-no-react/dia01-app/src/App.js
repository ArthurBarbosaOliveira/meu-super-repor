import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['react', 'github', 'projeto']
const taks = array.map((element) => Task(element))

function App() {
  return (
    <div className="App">
      {Task('Testando')}
      {taks}
    </div>
  );
}

export default App;
