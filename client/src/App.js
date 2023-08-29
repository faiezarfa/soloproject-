import {Routes ,Route} from 'react-router-dom'
import './App.css';
import Allbookss from './views/Allbookss';
import Createones from './views/Createones';
import { useState } from 'react';
import One from './views/One';
import Updates from './views/Updates';
import Login from './views/Login';

function App() {
  const [refresh,setrefresh]=useState(false)
  const refreshy=()=>{
    setrefresh(!refresh)
  }
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}  />
        <Route path="/allbooks" element={<Allbookss refreshy={refreshy} refresh={refresh} />}  />
        <Route path="/create" element={<Createones/>}    />
        <Route path="/onebook/:id" element={<One />}  />
        <Route path="/update/:id" element ={<Updates/>} />
      </Routes>
    
    </div>
  );
}

export default App;
