import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';

import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import { firebase } from './firebase';

const App = (props) => {

  console.log(props)
  
  return(
    <BrowserRouter>
       <Routes {...props}/>
    </BrowserRouter>
  )
}

firebase.auth().onAuthStateChanged((user) => {



ReactDOM.render(
  <React.StrictMode>
    <App user={user}/>
  </React.StrictMode>,
  document.getElementById('root')
);

})