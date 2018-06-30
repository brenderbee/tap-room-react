import React from 'react';
import Header from './Header';
import KegList from './Keglist';
import NewKegForm from './NewKegForm';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App(){
  let mainStyles = {
    margin: '0 30%'
  };
  return(
    <div style={mainStyles}>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/newkeg' component={NewKegForm} />
        <Route component={Error404} />
      </Switch>
      <style jsx global>{`
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
        `}</style>
    </div>
  );
}

export default App;
