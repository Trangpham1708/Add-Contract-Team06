import axios from 'axios';
import React, { Component } from 'react';

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtID: '',
      txtToken: '',
    };
  }

  render() {
    return (
      <div className="container">
        <div className="left">
          <div className="header">
            <h2>ACTIVE ACCOUNT</h2>
          </div>
          <form>
            <div className="input">
              <input
                type="text"
                placeholder="ID"
                value={this.state.txtID}
                onChange={(e) => this.handleInputChange('txtID', e.target.value)}
                required
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Token"
                value={this.state.txtToken}
                onChange={(e) => this.handleInputChange('txtToken', e.target.value)}
                required
              />
            </div>
             
            <div className="btn">
              <input
                type="submit"
                value="ACTIVE"
                onClick={(e) => this.btnActiveClick(e)}
                style={{ width: '30%', marginTop: '10px' }} // Điều chỉnh chiều rộng và khoảng cách từ trên xuống
              />
            </div>
          </form>
        </div>
      </div>
    );
  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  btnActiveClick(e) {
    e.preventDefault();
    const { txtID, txtToken } = this.state;

    if (txtID && txtToken) {
      this.apiActive(txtID, txtToken);
    } else {
      alert('Please input ID and Token');
    }
  }

  apiActive(id, token) {
    const body = { id: id, token: token };
    axios.post('/api/customer/active', body).then((res) => {
      const result = res.data;
      if (result) {
        alert('OK BABY!');
      } else {
        alert('SORRY BABY!');
      }
    });
  }
}

export default Active;
