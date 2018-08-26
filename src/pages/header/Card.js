import React, { Component } from 'react';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
import login from '../images/login.png';
export default class Card extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showMenu: false,
      email:'',
      username:'Nguyễn Quang Linh Linh Linh'
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div className='user'>
        <button className='user-button' onClick={this.showMenu}>
          <img src={login} style={{height:'100%',marginRight:'5px'}}/>
          Hi,{this.state.username} <i className="fa fa-angle-down" style={{fontSize:'15px',color:'white',marginLeft:'5px'}}></i>
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <div className='user-content'>
                    <a href='./profile'>View profile</a><br/>
                    <a href=''>Sign out </a>
                </div>
                
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}