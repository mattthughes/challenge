import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import StatefulGreeting from './components/StatefulGreeting';
import EventsClass from './components/EventsClass';
import EventsFunction from './components/EventsFunction';


function App() {
  return (
    <div className='App'>
      <NavBarSimple/>
      <Sidebar/>
      <EventsClass/>
      <EventsFunction/>

    </div>
  );
}

export default App;