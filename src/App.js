
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Todos from './Components/Todos';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from './Components/About';


function App() {
  let iniTo;
  if(localStorage.getItem("todos")===null)
  {
    iniTo = [];
  }
  else
  {
    iniTo = JSON.parse(localStorage.getItem("todos"));
  }


  


  const onDelete = (todo)=>{
    console.log("I am getting Delete ", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  const addTolist = (title, desc)=>{
    let sno;
    if(todos.length===0)
    {
      sno = 1;
    }
    else
      sno = todos[todos.length-1].sno+1;
    const todo = {
      sno : sno,
      title : title, 
      desp : desc
    }
    setTodos([todo, ...todos]);
    
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [todos, setTodos] = useState(iniTo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <Router>
    <div className="App">
      <Header title = {"Todo List App"} searchBool = {false} />
      <Switch>
          <Route exact path="/" render={()=>{
            return <Todos todos = {todos} onDelete = {onDelete} addToList = {addTolist}/>
          }}>
            
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
      </Switch>

      
      <Footer/>
    </div>
    </Router>
  );
}


export default App;
