import './App.css';

function App() {
  const title = "Welcome to new Blog";
  const likes = 50
  // const person = {name: "John", age:25}
  // boolean and object cant be dynamically inserted in the template
  const link = 'http://www.google.com';
  
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <h2>{likes}</h2>
        {/* this will give error */}
        {/* <p>{person}</p> */}
        <p>{ 10 }</p>
        <p>{ "hello, ninjas" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
