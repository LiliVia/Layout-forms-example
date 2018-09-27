import React, { Component } from 'react';
import Promo from '../components/Promo';
import AsquisForm from './AsquisForm';
import List from '../components/List';
import AskingForm from '../components/AskingForm';

import './Main.css';
import StatsTable from '../components/StatsTable';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      neighborhood: "",
      propertyType: "",
      minimalRate: "",
      minVolume: "",
      maxVolume: "",
      brokers: null,
      buyers: null,
      askValue: '',
      comments: ''
    };
  }

  onHandleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  getBuyers = (e) => {
    e.preventDefault();
    this.setState({
      buyers: "list of buyers"
    })
    console.log("list of buyers");
  }
  getBrokers = (e) => {
    e.preventDefault();
    this.setState({
      brokers: "list of brokers"
    })
    console.log(this.state.brokers);

  }

  

  render() {
    return (
      <div className="Main">
        <nav id="menu">
          <List 
            list={[1, 2, 3, 4, 5, 6, 7, 8]}
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
          <StatsTable />
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
               <div className="subcontent_rigth">
                <button onClick={this.getBuyers}>Comparables</button>  <br />
                <button onClick={this.getBrokers}>Sell with us?</button>  <br />
              </div>
          </Promo>
        </section>
        <section id="#section5" className="main_content">
            <AskingForm 
              askValue={this.state.askValue}
              comments={this.state.comments}
               />
        </section>
        <section id="#section6" className="main_content">
          <AsquisForm 
            onHandleChange={this.onHandleChange}
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
