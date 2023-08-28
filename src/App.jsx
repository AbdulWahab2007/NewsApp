import './App.css'

import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  state = {
    progress : 0
  }
  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  render() {
    let NewsCountry = "us"
    return (
<>
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
          <Navbar/>
        <Routes>
          <Route path="/" element = {<News setProgress = {this.setProgress}  key = "general" country = {NewsCountry} category = "general"/>}></Route>
          <Route path="/Business" element = {<News setProgress = {this.setProgress}  key = "business" country = {NewsCountry} category = "business"/>}></Route>
          <Route path="/Entertainment" element = {<News setProgress = {this.setProgress}  key = "entertainment" country = {NewsCountry} category = "entertainment"/>}></Route>
          <Route path="/Health" element = {<News setProgress = {this.setProgress}  key = "health" country = {NewsCountry} category = "health"/>}></Route>
          <Route path="/Science" element = {<News setProgress = {this.setProgress}  key = "science" country = {NewsCountry} category = "science"/>}></Route>
          <Route path="/Sports" element = {<News setProgress = {this.setProgress}  key = "sports" country = {NewsCountry} category = "sports"/>}></Route>
          <Route path="/Technology" element = {<News setProgress = {this.setProgress}  key = "technology" country = {NewsCountry} category = "technology"/>}></Route>
        </Routes>
    </BrowserRouter>
      </>
    )
  }
}
