import './App.css';
import './index.css';
import {Navbar} from './components'
import {Home, Item, Envisager, Space, SecurityController, RegisterController, AdminBoardController} from './pages'
import { Routes, Route,  } from "react-router-dom";


export default function App(props) {

  return (
    <>
      <Navbar user={props.user}  setUser={props.setUser} setStepTasksDisplayArray={(newStepTasksDisplays)=>props.setStepTasksDisplayArray(newStepTasksDisplays)}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":item/:id" element={<Item />} />
            <Route path="/envisager"
                   element={<Envisager user={props.user} setUser={props.setUser}
                                       tasks={props.stepTasks}
                                       setTasks={props.setStepTasks}
                                       stepTasksRender={()=>props.stepTasksRender()}
                                       stepTasksDisplay={props.stepTasksDisplay}
                                       fetchUserStepTasks={props.fetchUserStepTasks}
                                       fetchDefaultStepTasks={props.fetchDefaultStepTasks}
                                       saveStepListTasks={props.saveStepListTasks}
                                       setStepTasksDisplayArray={(newStepTasksDisplays)=>props.setStepTasksDisplayArray(newStepTasksDisplays)}/>} />
            <Route path="/space/:id" element={<Space />} />
            <Route path="/login" element={<SecurityController user={props.user} setUser={props.setUser} addStepTasks={props.addStepTask}/>} />
            <Route path="/register" element={ <RegisterController user={props.user} setUser={props.setUser}/>} />
            <Route path="/register/validation"  user={props.user} setUser={props.setUser}/>}
            <Route path="/adminboard" element={<AdminBoardController user={props.user}
                                                                     setUser={props.setUser}
                                                                     fetchDefaultStepTasks={props.fetchDefaultStepTasks}
                                                                     addStepTask={(newStepTask)=>props.addStepTask(newStepTask)}
                                                                     stepTasks={props.stepTasks}
                                                                     setStepTasksDisplayArray={props.setStepTasksDisplayArray}
                                                                     stepTasksDisplay={props.stepTasksDisplay} />}
            />
          </Routes>
    </>
  );
}

