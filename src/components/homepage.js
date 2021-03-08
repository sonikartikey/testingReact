import React from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class Homepage extends React.Component {
  constructor() {
    super()
    this.state = {}

  }
  addItem = () => {
    var tit = document.getElementById('title').value
    var desc = document.getElementById('description').value
    if (localStorage.getItem('itemsJson') == null) {
      console.log("hello add item", tit, desc)
      var itemJsonArray = [];
      itemJsonArray.push([tit, desc])
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
      var itemJsonArrayStr = localStorage.getItem('itemsJson')
      itemJsonArray = JSON.parse(itemJsonArrayStr)
      itemJsonArray.push([tit, desc])
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    let tableBody = document.getElementById("tableBody")
    let str = "";

    itemJsonArray.forEach(element => {
      str += `
      <tr>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td><button>Delete</button></td>
            </tr>
      `;
    });

    tableBody.innerHTML = str;

  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <h1>To Do List </h1>

        <div className="form-group">
          <label htmlfor="name">Title : </label>
          <select id="title">
            <option value="">-- Please choose a Category--</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Business">Business</option>
            <option value="Home">Home</option>
            <option value="IT">IT</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlfor="name"> Description </label>
          <textarea rows="2" cols="40" id="description"></textarea>
        </div>
        <button className="btn btn-primary" onClick={this.addItem}>Add Item</button>

        <h2>Items List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Item Categoy</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tr>
              <td>Food</td>
              <td>msdmsldklsdksldksld</td>
              <td><button>Delete</button></td>
            </tr>
          <tbody id="tableBody">
            <tr>
              <td>Food</td>
              <td>msdmsldklsdksldksld</td>
              <td><button>Delete</button></td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}
export default Homepage;
