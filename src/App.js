import Button from "./Button";
import styles from "./App.module.css"
import {useState,useEffect} from "react"
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev)=>  prev+1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() =>{
    console.log("I run only once.");
  },[]);
  useEffect(() =>{
    console.log("I run when 'keyword' changes.");
    return ()=>{
      console.log("keyword Bye");//cleanUp
    }
  },[keyword]);//keyword가 변화할때 react 에게 실행하라고 알려줌
  useEffect(() =>{
    console.log("I run when 'counter' changes.");
  },[counter]);

  useEffect(() =>{
    console.log("I run when 'counter' and 'keyword' changes.");
  },[keyword,counter]);
  
  return (
    <div>
      <input type={keyword} placeholder="Search here..." onChange={onChange}/>
      <h1>{counter}</h1>
      <button onClick = {onClick}> Click me</button>
    </div>
  );
}

export default App;