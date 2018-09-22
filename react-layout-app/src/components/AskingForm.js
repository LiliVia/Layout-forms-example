import React, { Component } from 'react';


class AskingForm extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Your info received!`);
  }

  render() {
    return (
      <div className="subcontent_center asking_price">
        <form onSubmit={this.handleSubmit}>
          <label>
            Asking Price <br />
            <input type="text" name="price" />
          </label>
          <div>
            <label>
              <input type="file" ref={this.fileInput} />
              Attach Rent Roll & Expenses
              </label>
          </div>
          <div>
            Comments<br />
            <textarea></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AskingForm;