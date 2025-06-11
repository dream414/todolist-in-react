import Navbar from "./Component/Navbar"
import "./index.css"
import "./App.css"
import { useState } from "react"



function App() {
  let [todolist,settodolist]=useState([]);
let savetodolist=(event)=>{
event.preventDefault();
let input1= event.target.input.value;
 if(!todolist.includes(input1)){
 let finaltodo=[...todolist,{ text: input1, status: false }];
 settodolist(finaltodo)}
else{alert("Already exist")}}



  return (
    <>
      <Navbar />
   
      <form onSubmit={savetodolist}><div className="bg-purple-700 w-[500px] m-auto h-[400px] rounded-xl border-1 border-amber-300 my-2 ">
        <div className="flex justify-center my-3.5 p-2.5
        ">
          <input type="text" name="input" placeholder=" Type your work" className=" bg-purple-200 border-2 border-e-slate-600 rounded-xl mx-2.5 w-70  text-center" />
          <button className="	hover:scale-105 + transition text-amber-50 border-2  border-amber-300 hover:bg-red-500 bg-red-900 w-28 rounded-xl cursor-pointer">Add</button>
       </div>
       {todolist.map((value,index)=>{
 return <TodolistItems 
 value={value}
  key={index}
 numberindex={index} 
 todolist={todolist}
 settodolist={settodolist} 
 />
})}
        </div>
      </form>
   
    </>
  )
}

export default App



function TodolistItems({value,numberindex,todolist,settodolist}){
let [status,setstatus]=useState(false)

  let deleterow=(numberindex)=>{
    let finalData=todolist.filter((_,i)=>i!==numberindex);
    settodolist(finalData)
  }



  return(
 <div id="outerdiv" className=" hover:border-amber-300 border-1 border-purple-200 flex justify-between  bg-purple-200 mb-1 flex-row h-7  w-100   m-auto ">
                    <h2  className={status ? "line-through mx-3 cursor-pointer" : ""} onClick={()=>setstatus(!status)}  > {numberindex + 1}.{value.text} </h2>
            <span onClick={() => deleterow(numberindex)}className=" mx-4 hover:bg-red-500 hover:scale-105 + transition font-bold  w-5 h-5 p-3 border-2  border-black bg-red-900 rounded-full cursor-pointer flex justify-center items-center ">&times;</span>
        </div>
  )
 }