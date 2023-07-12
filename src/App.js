import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Dash from './Dash';
import Transactions from './Transactions';
import Schedules from './Schedules';
import Users from './Users';
import Settings from './Settings';



const App = () => {
    return (
        <div>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='dash'  element={<Dash/>}/>
            <Route path='transactions' element={<Transactions/>}/>
            <Route path='schedules' element={<Schedules/>}/>
            <Route path='users' element={<Users/>}/>
            <Route path='settings' element={<Settings/>}/>

            </Route>
          </Routes>
          </BrowserRouter>
          
          

        </div>
    )
}

export default App
