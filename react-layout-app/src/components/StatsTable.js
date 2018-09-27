import React, { Component } from 'react';


class StatsTable extends Component {
  render() {
    return (
      <div className="content">
        <div className="subcontent_center stats">
          <h1>Property sale status report</h1>
          <div className="container">
            <table id="stats">
              <thead>
                <tr>
                  <th>45755</th>
                  <th>5755</th>
                  <th>2745</th>
                  <th>5755</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Property Sale Status Report</td>
                  <td>Signed Confis for the property & received info</td>
                  <td>Have expressed interested to tour</td>
                  <td>Submitted offers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default StatsTable;