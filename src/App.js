import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import Spinner from './components/Spinner';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h3>Top Headlines</h3>
          
            
              <NewsCard title="first" description="this is first card" />
           
        

        </div>

      </div>
    )
  }
}