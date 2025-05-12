import logo from './logo.svg';
import './App.css';
import CounterClass from './components/counterClass';
import CounterFun from './components/counterFun';

function App() {
  return (
    <div className="App">
      <CounterClass counter={0} name="Class Counter" />
      <CounterFun counter={0} name="Function Counter" />
    </div>
  );
}

export default App;
