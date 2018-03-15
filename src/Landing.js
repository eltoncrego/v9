import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Landing.css';
import './index.css';
import logo from './assets//svg/logo/light.svg'

class Landing extends Component {

  componentDidMount(){
  }

  render() {
    return(
      <div class="landing">
        <div class="navbar">
          <img src={logo} class="site-logo" onClick={() => ReactDOM.render(
            <Landing/>,
            document.getElementById('root')
          )}/>
        <div class="nav-links">
          <ul>
            <li><a href="#" class="light-subheader-secondary">about me</a></li>
            <li><a href="#" class="light-subheader-secondary">resume</a></li>
            <li><a href="#" class="light-subheader-secondary">projects</a></li>
          </ul>
        </div>
        </div>
        <div class="content">
          <p class="light-display2">Welcome to my space!</p>
          <p class="light-title-secondary">My name is Elton Rego.
            You can find out more about my background, experience, and goals here.</p>
        </div>
      </div>
    );
  }
}

export default Landing;
