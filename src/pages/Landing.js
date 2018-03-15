import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Landing.css';
import './../index.css';
import logo from './../assets/svg/logo/light.svg'

class Landing extends Component {

  componentDidMount(){
    this.animateIn();
  }

  animateIn() {
    var logo = ReactDOM.findDOMNode(this.refs.logo);
    var links = ReactDOM.findDOMNode(this.refs.links);
  	var content = ReactDOM.findDOMNode(this.refs.content);
    logo.style.opacity = 0;
    logo.style.transform = "translateY(32pt)";
    links.style.opacity = 0;
    links.style.transform = "translateY(32pt)";
  	content.style.opacity = 0;
    content.style.transform = "translateY(32pt)";
  	window.requestAnimationFrame(function() {
      logo.style.transition = "all 500ms ease-in-out";
      links.style.transition = "all 500ms ease-in-out";
  		content.style.transition = "all 500ms ease-in-out";
      links.style.transitionDelay = "250ms";
      content.style.transitionDelay = "250ms";
      logo.style.opacity = 1;
      logo.style.transform = "translateY(0pt)";
      links.style.opacity = 1;
      links.style.transform = "translateY(0pt)";
  		content.style.opacity = 1;
      content.style.transform = "translateY(0pt)";
  	});
  }

  render() {
    return(
      <div class="landing">
        <div class="navbar">
          <img ref="logo" src={logo} class="site-logo" onClick={() => ReactDOM.render(
            <Landing/>,
            document.getElementById('root')
          )}/>
        <div ref="links" class="nav-links">
          <ul>
            <li><a href="#" class="light-subheader-secondary">about me</a></li>
            <li><a href="#" class="light-subheader-secondary">resume</a></li>
            <li><a href="#" class="light-subheader-secondary">projects</a></li>
          </ul>
        </div>
        </div>
        <div ref="content" class="content">
          <p class="light-display2">Welcome to my space!</p>
          <p class="light-title-secondary">My name is Elton Rego.
            You can find out more about my background, experience, and goals here.</p>
        </div>
      </div>
    );
  }
}

export default Landing;
