import React, { Component } from 'react';

// import './Form.css';

class AsquisForm extends Component {

  handleChange = e => {
    this.props.onHandleChange;
  };

  handleSubmit = e => {
    e.preventDefault();
    setTimeout(function () {
      console.log("data send");
    }, 2000);
  };

  render() {
    return (
      <div className="Form">
        <div className="content">
          <div className="subcontent_center asquisition">
            <h1>Tell us more about your asquisition criteria</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                Neighborhood <br />
                <input
                  type="text"
                  name="neighborhood"
                  value={this.props.neighborhood}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                Property Type<br />
                <input
                  type="text"
                  name="propertyType"
                  value={this.props.propertyType}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                Minimal Cap Rate<br />
                <input
                  type="number"
                  name="minimalRate"
                  value={this.props.minimalRate}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                Deal Volume<br />
                <input
                  type="number"
                  name="minVolume"
                  placeholder="Min"
                  value={this.props.minVolume}
                  onChange={this.handleChange}
                />
                <input
                  type="number"
                  name="maxVolume"
                  placeholder="Max"
                  value={this.props.maxVolume}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AsquisForm;
