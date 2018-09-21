import React, { Component } from 'react';
import Promo from '../components/Promo';
import AsqForm from './AsqForm';
import List from '../components/List';

import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      neighborhood: "",
      propertyType: "",
      minimalRate: "",
      minVolume: "",
      maxVolume: "",
      pageNav: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  }

  onHandleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  

  render() {
    return (
      <div className="Main">
        <nav id="menu">
          <List 
            list={this.state.pageNav}
            type="nav"
            className="item_menu btn"
             />
        </nav>
        <section id="#section1" className="main_content">
          <Promo 
          name="promo"
          header="The first virtual real estate marketplace"
          paragr="where buyers are conected & transact directly with the most likely sellers via carefully crafted
              artificial
            intelligence algorithms"
           />
        </section>

        <section id="#section2" className="main_content">
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
        </section>
        <section id="#section3" className="main_content">
        <Promo 
          name="analize"
          header="Collider"
          paragr="Analyzing Data"
           />
          
        </section>
        <section id="#section4" className="main_content">
        <Promo name=""
          header="Based on provided"
          paragr="info your property is worth in the <span>$5 - 6.2M range</span> Collider has identified 25 most likely
            buyers">
            
        </Promo>
        <div className="subcontent_rigth">
              <label>
                <input type="radio" name="sale" value="buyers" checked /> Comparables <br />
              </label>
              <label>
                <input type="radio" name="sale" value="brokers" /> Sell with us?<br />
              </label>
            </div>
        </section>
        <section id="#section5" className="main_content">
          <div className="content">
            <div className="subcontent_center asking_price">
              <form>
                <div>
                  Asking Price <br />
                  <input type="text" name="price" />
                </div>
                <div>
                  <input type="file" id="rent-role" name="rent-role" accept=".doc, .docx, .txt, .pdf, .md" multiple />
                  <label for="rent-role" className="btn-attach">
                    <i className="fas fa-paperclip"></i> Attach Rent Roll & Expenses
              </label>
                </div>
                <div>
                  Comments<br />
                  <textarea></textarea>
                </div>
                <input type="submit" className="btn active" value="Submit" />
              </form>
            </div>
          </div>
        </section>
        <section id="#section6" className="main_content">
          <AsqForm 
            handleChange={this.onHandleChange}
            />
        </section>
        <section id="#section7" className="main_content">
          <div className="content">
            <div className="subcontent_center report">
              <h1>We have received your</h1>
              <ul>
                <li>Property info</li>
                <li>Signed Commission Agreement</li>
                <li>Rent roll & expenses</li>
                <li>You will receive your first Property Sale Report in 7 days</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="#section8" className="main_content">
          <div className="content">
            <div className="subcontent_center preview">
              <ol>
                <li>
                  <h2>Tour & Offer</h2>
                  <ul>
                    <li>Schedule Tour</li>
                    <li>Make Offer</li>
                    <li>COR</li>
                    <li>OA</li>
                  </ul>
                </li>
                <li>
                  <h2>3d Party Providers for Buyers</h2>
                  <ul>
                    <li>Broker Colider</li>
                    <li>Choose Lender</li>
                    <li>OTS</li>
                    <li>CI</li>
                  </ul>
                </li>
                <li>
                  <h2>Contract</h2>
                  <ul>
                    <li>Contract isuued</li>
                    <li>CC</li>
                    <li>Contract Ready</li>
                    <li>Contract Signed</li>
                  </ul>
                </li>
                <li>
                  <h2>Closing</h2>
                  <section className="calendar">Calendar with marked days</section>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
