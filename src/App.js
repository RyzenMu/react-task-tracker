

function App() {

  const name = 'Brad';
  const x = 0;

  return (
    <div className="container">
     <h1> Hello from App.js</h1>
     <h2>Hello again {name}</h2>
     <h3>hello {1+6}</h3>
     <h3> hello { x ? name : 45}</h3>
    </div>
    
  );
}

export default App;
