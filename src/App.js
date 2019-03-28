import React, { Component } from 'react';
import './App.css';
import NavbarHeader from './component/Header/Navbar'
import JumbotronHeader from './component/Header/Jumbotron'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <NavbarHeader></NavbarHeader>
        <JumbotronHeader></JumbotronHeader>
      </div>
    )
  }
}

export default App;
