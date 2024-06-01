import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
// import Spinner from './components/Spinner';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <div className="container">
            <div className="d-flex justify-content-center p-3">
              <h3>Top Headlines</h3>
            </div>
          </div>
        <div style={{ padding: '50px' }}>
        <Routes>
          <Route path="/" element={<NewsCard category="business"/>} />
          <Route path="/business" element={<NewsCard category="business"/>} />
          <Route path="/entertainment" element={<NewsCard category="entertainment"/>} />
          <Route path="/health" element={<NewsCard category="health"/>} />
          <Route path="/science" element={<NewsCard category="science"/>} />
          <Route path="/general" element={<NewsCard category="general"/>} />


        </Routes>

        </div>

          

        </BrowserRouter>

      </div>
    )
  }
}