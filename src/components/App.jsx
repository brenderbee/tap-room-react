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
      masterRemaining: null
    };
    this.handleSellPint = this.handleSellPint.bind(this);
    this.handleSellGrowler = this.handleSellGrowler.bind(this);
    this.handleSellGrowlerLarge = this.handleSellGrowlerLarge.bind(this);
  }

  handleSellPint(clickedKeg) {
    console.log('selected sell pint: ' + clickedKeg.remaining);
  }

  handleSellGrowler(clickedKeg) {
    console.log('selected sell growler: ' + clickedKeg.remaining);
  }

  handleSellGrowlerLarge(clickedKeg) {
    console.log('selected sell large growler: ' + clickedKeg.remaining);
  }

  render() {
    return(
      <div className="main">
        <Header/>
        <Switch>
          <Route exact path='/' render={()=>
              <KegList
                remaining={this.state.masterRemaining}
                onSellPint={this.handleSellPint}
                onSellGrowler={this.handleSellGrowler}
                onSellGrowlerLarge={this.handleSellGrowlerLarge} />}
              />
          <Route path='/newkeg' component={NewKegForm} />
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
