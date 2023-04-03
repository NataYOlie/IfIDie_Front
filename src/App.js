import './App.css';
import {Navbar,Footer} from './components'
import {Home,Item, Create,Login,Register} from './pages'
import { Routes, Route,  } from "react-router-dom";
import SecurityController from "./pages/login/SecurityController";
import {useState} from "react";
import RegisterController from "./pages/register/RegisterController";
import Space from "./pages/space/Space";

function App() {

    const [user, setUser] = useState(null);

    //Retourne le nom et le prénom du user
    function userName() {
        return user != null ? user.name + " " + user.surname : "";
    }


  return (
    <div>
      <Navbar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":item/:id" element={<Item />} />
            <Route path="/create" element={<Create /> } />
            <Route path="/space/:id" element={<Space />} />
            <Route path="/login" element={<SecurityController user={user} setUser={setUser} />} />
            <Route path="/register" element={ <RegisterController user={user} setUser={setUser}/>} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
