import './App.css';
import Dashboard from './Components/Dashboard';
import NavBar from './Components/NavBar';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Project from './Components/Project';
import { Route, Routes } from 'react-router-dom';

import React, { Component } from 'react'

export default class App extends Component {

  render() {
    return (
      <>
        <NavBar title="Mohit G" />
        <Routes>
          <Route path='' element={
            <Dashboard />
          } />

          <Route path='resume' element={
            <Resume />
          } />

          <Route path='projects' element={
            <Project />
          } />

          <Route path='contact' element={
            <Contact />
          } />

        </Routes>
      </>
    )
  }
}

