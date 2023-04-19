import { React, useState } from 'react'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'

function App() {

  const [user,setUser] = useState(null);
  const [pass,setPass] = useState(null);
  const isAuth = Boolean(user) && Boolean(pass);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat user={user} pass={pass} />} />
          {/* <Route path="/" element={isAuth? <Navigate to='/chat'/>: <Login setUser={setUser} setPass={setPass}/>} /> */}
          {/* <Route path="/chat" element={isAuth? <Chat user={user} pass={pass} />:<Navigate to='/'/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
