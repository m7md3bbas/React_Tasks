
import './App.css';
import CounterClass from './components/CounterApp/counterClass';
import CounterFun from './components/CounterApp/counterFun';
import MovieList from './components/MoveApp/views/movieList';
import TodoApp from './components/TodoApp/main';

function App() {
  return (
    <div className="App">
      {/* <CounterFun name="Fun Counter"  />
      <CounterClass name="Class Counter" />      
      <TodoApp /> */}
      <MovieList />
    </div>
  );
}

export default App;
