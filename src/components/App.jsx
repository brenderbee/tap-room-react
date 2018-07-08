import React from 'react';
import Header from './Header';
import KegList from './Keglist';
import NewKegForm from './NewKegForm';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleSellPint = this.handleSellPint.bind(this);
    this.handleSellGrowler = this.handleSellGrowler.bind(this);
    this.handleSellGrowlerLarge = this.handleSellGrowlerLarge.bind(this);
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.updateKegOnSell = this.updateKegOnSell.bind(this);
  }

  updateKegOnSell(clickedKeg, pintsSold) {
    let index = this.state.masterKegList.indexOf(clickedKeg);
    clickedKeg.remaining = clickedKeg.remaining - pintsSold;
    let newMasterKegList = this.state.masterKegList.slice();
    return newMasterKegList.splice(index, 1, clickedKeg);
  }

  handleSellPint(clickedKeg) {
    this.setState({masterKegList: this.updateKegOnSell(clickedKeg, 1)});
  }

  handleSellGrowler(clickedKeg) {
    this.setState({masterKegList: this.updateKegOnSell(clickedKeg, 2)});
  }

  handleSellGrowlerLarge(clickedKeg) {
    this.setState({masterKegList: this.updateKegOnSell(clickedKeg, 4)});
  }

  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render() {
    return(
      <div className="main">
        <Header/>
        <Switch>
          <Route exact path='/' render={()=>
            <KegList
              onSellPint={this.handleSellPint}
              onSellGrowler={this.handleSellGrowler}
              onSellGrowlerLarge={this.handleSellGrowlerLarge}
              kegList={this.state.masterKegList}
            />}
          />
          <Route path='/newkeg' render={()=>
            <NewKegForm
              onNewKegCreation={this.handleAddingNewKegToList}
            />}
          />
          <Route component={Error404} />
        </Switch>
        <style jsx global>
          {`
            body {
              font-family: 'Helvetica', sans-serif;
              background: black;
              color: white;
              font-size: 1rem;
            }
            a {
              text-decoration: none;
            }

            button {
              font-size: 1rem;
              text-transform: uppercase;
              padding: 1.2rem;
              color: white;
            }

            .main {
              margin: 0 10%;
            }
          `}
        </style>
      </div>
    );
  }
}



export default App;
