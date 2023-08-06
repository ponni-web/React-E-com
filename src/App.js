import './App.css';
import  {LogIn}  from './login';
import {HomePage} from './home';
import './style.css'
import { Route, Routes } from "react-router-dom";

function App() {


  // let [isLoggedIn, setIsLoggedIn] = useState(false);

return (
    <div className="App">
      {/* {isLoggedIn==false  &&  <LogIn changeState={setIsLoggedIn}></LogIn>}
      {isLoggedIn==true && <HomePage></HomePage>}
       */}
    <Routes>
        <Route path="/" element={<LogIn></LogIn>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
      </Routes>

     </div>
  );
}

export default App;
