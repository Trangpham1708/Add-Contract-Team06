import React, { Component } from 'react';
import axios from 'axios';
import './styles.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: '',
      txtName: '',
      txtPhone: '',
      txtEmail: '',
      showPassword: false,
    };
  }

  render() {
    const { showPassword } = this.state;

    return (
      <div className="containerr">
        <div className="left">
          <div className="header">
            <h2>Welcome to Chanchan</h2>
            <h4>Please Sign Up</h4>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="User Name"
              value={this.state.txtUsername}
              onChange={(e) => this.handleInputChange('txtUsername', e.target.value)}
              required
            />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="input">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={this.state.txtPassword}
              onChange={(e) => this.handleInputChange('txtPassword', e.target.value)}
              required
            />
            <i className="fa-solid fa-lock"></i>
            <span onClick={this.toggleShowPassword} style={{ marginLeft: '-25px', position: 'absolute', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
              {showPassword ? '👁️‍🗨️' : '👁️‍🗨️'}
            </span>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Name"
              value={this.state.txtName}
              onChange={(e) => this.handleInputChange('txtName', e.target.value)}
              required
            />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="input">
            <input
              type="tel"
              placeholder="Phone"
              value={this.state.txtPhone}
              onChange={(e) => this.handleInputChange('txtPhone', e.target.value)}
              required
            />
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className="input">
            <input
              type="email"
              placeholder="Email"
              value={this.state.txtEmail}
              onChange={(e) => this.handleInputChange('txtEmail', e.target.value)}
              required
            />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="btn">
            <button onClick={(e) => this.btnSignupClick(e)}>Sign Up</button>
          </div>
        </div>
        <div className="right">
          {/* You can replace the following line with your image source */}
          <img src="hihii.jpg" alt="Avatar" />
        </div>
      </div>
    );
  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  btnSignupClick(e) {
    e.preventDefault();
    const { txtUsername, txtPassword, txtName, txtPhone, txtEmail } = this.state;

    if (txtUsername && txtPassword && txtName && txtPhone && txtEmail) {
      const account = { username: txtUsername, password: txtPassword, name: txtName, phone: txtPhone, email: txtEmail };
      this.apiSignup(account);
    } else {
      alert('Please input all required fields');
    }
  }

  apiSignup(account) {
    axios.post('/api/customer/signup', account).then((res) => {
      const result = res.data;
      alert(result.message);
    });
  }

  toggleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };
}

export default Signup;
