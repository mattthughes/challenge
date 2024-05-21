import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className='App'>
      <StatefulGreeting greeting="I'm a stateful class Component" name="matt" />
    </div>
  );
}

export default App;