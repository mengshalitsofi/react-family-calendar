import logo from './Family-clipart-black-and-white.png';
import './App.css';
import CalendarContainer from './calendar/CalendarContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Family Calendar
        </p>                
      </header>
      <CalendarContainer />      
    </div>
  );
}

export default App;
