import './App.css';
import Userlist from './Component/Userlist';
import Navbar1 from './Component/Navbar';
import SignUp from './Component/Register';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/users" element={ <Userlist/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
