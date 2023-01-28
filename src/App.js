import Header from "./components/Header";
import React from "react";
import Tasks from "./components/Tasks";

function App() {

  const name = 'Brad';
  const x = 0;

  return (
    <div className="container">
     {/* <h1> Hello from App.js</h1>
     <h2>Hello again {name}</h2>
     <h3>hello {1+6}</h3>
     <h3> hello { x ? name : 45}</h3> */}

     <Header title = {'Task'}/>
     <Tasks/>
    </div>
    
  );
}

// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>;
//   }
// }
export default App;
