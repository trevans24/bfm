import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//////// COMPONENTS & SCREENS ////////
import Nav from './components/global/Navigation';
import Footer from './components/global/Footer';
import Home from './screens/Home';

//////// Styles ////////
require('./css/Global.css');
// THEME for Material UI
const theme = getMuiTheme({
  palette: {
    primary1Color: '#689F38',
    primary2Color: '#8BC34A',
    primary3Color: '#DCEDC8',
    accent1Color: '#FF4081',
    textColor: '#757575',
    alternateTextColor: '#212121',
    shadowColor: '#BDBDBD'
  },
});

//////// ROUTER ////////
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={theme}>
          <div className="App">
            <Nav />
            <Route exact path='/' component={Home} />
            <Footer />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
