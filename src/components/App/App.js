import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Ohoho Restaurant</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}
