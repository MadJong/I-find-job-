import React, { useState } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import DrapAndDrop from './DragDrop/DragAndDrop';
import TodoAPP from './ToDo/TodoAPP';



function App() {
  return (
   <div>
       <nav className='ChooseProject'>
       <NavLink to="/ToDo" className = { navData => navData.isActive ? "nav_item__active nav_item" : "nav_item"}>ToDo</NavLink>
    <NavLink to="/DragAndDrop" className = { navData => navData.isActive ? "nav_item__active nav_item" : "nav_item"}>DragAndDrop</NavLink>
       </nav>
    <Routes>
      <Route path="/ToDo" element={<TodoAPP/>}></Route>
      <Route path="/DragAndDrop" element={<DrapAndDrop/>}></Route>
    </Routes>
   </div>
  );
}

export default App;
