// import logo from './logo.svg';
import './App.css';
import Person from './components/PersonCard';

function App() {
  return (
    <div className="App">

      <Person firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />

      <Person firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} />

      <Person firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"} />

      <Person firstName={"Toph"} lastName={"Beifong"} age={13} hairColor={"Brown"} />

    </div>
  );
}

export default App;
