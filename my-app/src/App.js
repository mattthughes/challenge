import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';

function App() {
  return (
    <div className='App'>
      <NavBarForm/>
      <Sidebar/>

    </div>
  );
}

export default App;