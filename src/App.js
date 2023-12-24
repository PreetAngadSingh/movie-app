import './App.css';

const Person = () => {
  return (
    <>
      <h1>Name: John</h1>
      <h1>Last Name: Doe</h1>
      <h1>Age: 30</h1>
    </>
  )
}

const App = () => {
  const name = "Preet";
  const isNameShowing = false;

  return (
    <div className="App">
      <Person/>
    </div>
  );
}

export default App;
