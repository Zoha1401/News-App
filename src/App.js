import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  // c= 'Zoha'
   pageSize=4
   apiKey="8e511e19dc4d4851a92b6a5c46f9028b"
   state={
    progress:0
   }
   setProgress= (progress)=>{
    this.setState({progress:progress})
   }
  render() {
    return (
      <div>
        {/* Hello my first class based component {this.c}  In this way we can define objects here*/}
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
       
      />
        <Routes>
        <Route exact path="/"  element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} key="general" country="in" category="general"/>}/>
          <Route exact path="/general"  element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} key="general" country="in" category="general"/>}/>
          <Route exact path="/business"  element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} key="business" country="in" category="business"/>}/>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize}  key="health"  country="in" category="health"/>}/>
          <Route exact path="/sciences"  element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} key="sciences" country="in" category="sciences"/>}/>
          <Route exact path="/entertainment"  element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} key="entertainment" country="in" category="entertainment"/>}/>
          <Route exact path="/sports"  element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} key="sports" country="in" category="sports"/>}/>
          <Route exact path="/technology"  element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} key="technology" country="in" category="technology"/>}/>
        </Routes>
        
      </div>
    )
  }
}





