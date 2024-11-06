import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Project_api from './Components/Project_api';
import Task_Detail from './Components/Task_Detail';
import AddTask from './Components/AddTask';
import EditTask from './Components/EditTask';
import About from './Components/About';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/getall" element={<Project_api />}></Route>
        <Route path="/getbyid/:id" element={<Task_Detail />}></Route>
        <Route path="/insert" element={<AddTask />}></Route>
        <Route path="/update/:id" element={<EditTask />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/footer" element={<Footer />}></Route>

    </Route>
    </Routes>
</BrowserRouter>
);
