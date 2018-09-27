import React, { Component } from 'react';


class AskingForm extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  handleChange = e => {
    this.props.onHandleChange;
  };

  handleFileUpload = (e) => {
    if (!e.target.files[0]) {
      return;
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    setTimeout(function () {
      console.log(`Your info received!`);
    }, 2000);
  };

  render() {
    return (
      <div className="subcontent_center asking_price">
        <form onSubmit={this.handleSubmit}>
          <label>
            Asking Price <br />
            <input type="text" onChange={this.handleChange} value={this.props.askValue} name="price" />
          </label>
          <div>
            <label>
              <input type="file" ref={this.fileInput} onChange={this.handleFileUpload} />
              Attach Rent Roll & Expenses
              </label>
          </div>
          <div>
            Comments<br />
            <textarea onChange={this.handleChange} value={this.props.comments} name="comments"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AskingForm;