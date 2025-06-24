import React ,{useState} from "react"
const Todo = ()=>{
    const [task , setTask] = useState([]);
    const [newTask , setNewTask] = useState();
    const [date , setDate] = useState();
    const [importance , setImportance] = useState("");
    const [classs , setClass] = useState([]);

    

    const addTask = ()=>{
            if(newTask.trim()!=""){
                const object = {tasks:newTask ,
                        dates:date,
                        importanceLevel:importance}
            setTask(t => [...t , object]);
            }

    }

    const taskHandler = (e) =>{
        setNewTask(e.target.value);
    }

    const dateHandler = (e) =>{
            
                const currentDate = new Date();
                const deadline = new Date(e.target.value);
                if(deadline!==""){
                    currentDate.setHours(0,0,0,0);
                    deadline.setHours(0,0,0,0);
                    const diff = deadline - currentDate
                    const daysLeft = Math.ceil(diff/(1000*60*60*24));
                    setDate(daysLeft);
                }
                
            
            
        
        
    }

    const importanceHandler = (e)=>{
        setImportance(e.target.value)
    }
    
    const level = (importance)=>{
        
        if(importance==="HIGH"){
            document.getElementById('level').classList.add("high")
        }else if(importance==="MEDIUM"){
            document.getElementsById("level").classList.add("medium")
        }else if(importance==="LOW"){
            document.getElementsById("level").classList.add("low")
        }
        
    }

    const deleteTask =(i)=>{
        const updatedTask = task.filter((_,idx)=> idx!==i);
        setTask(updatedTask);
    }

    const addClass = (idx) =>{
        if(classs.includes(idx)){
            setClass(classs.filter((i)=> i!==idx))
        }else{
            setClass([...classs , idx]);
        }
        
    }
    

    return(
        <div className="box">
            
            <h1>To do List App</h1>
            <p>Stay Organized. Stay Ahead.</p>
            
            <div className="container">
                
                
                <div className="addtask">
                    <div className="task">
                        <h3>Task Name:</h3>
                        <input id="addinput" type="text" onChange={taskHandler}  placeholder="Enter the task" />
                    </div>
                
                <div className="date">
                    <h3>Deadline:</h3>
                    <input onChange={dateHandler} type="date" id="date"/>
                </div>
                
                <div className="importence">
                    <h3>importance level: </h3>
                    <select name="" value={importance} onChange={importanceHandler} className="difficultyLevel">
                        <option value="">Select</option>
                        <option value="HIGH">HIGH</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="LOW">LOW</option>
                    </select>
                </div>
                <button onClick={addTask}>ADD</button>
                </div>
                <div className="list">
                    <ul>
                        
                            {task.map((ele , idx)=> 
                            <div className="listItem">
                                <li onClick={()=>addClass(idx)} className={classs.includes(idx)?"checked":""} key={idx}>{ele.tasks}</li >
                                <h5>
                                {ele.dates!=null ? ele.dates>=0 ?`${ele.dates} days left`: 
                                `deadline passed by ${Math.abs(ele.dates)} days`:""}
                            </h5>
                            <h6 className={ele.importanceLevel==="HIGH"? "high":
                                ele.importanceLevel==="MEDIUM"?"medium":
                                ele.importanceLevel==="LOW" ?"low":""
                            }>
                                {ele.importanceLevel}
                            </h6>
                            <div onClick={()=>deleteTask(idx)}  className="delete">
                                <img src="./public/delete.png" width={24} alt="" />
                            </div>
                            
                            </div>
                        
                             
                            )}
                        
                        
                    </ul>
                </div>
                
            </div>
            
        </div>
    )
}
export default Todo