import { React } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
