import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//////// COMPONENTS & SCREENS ////////
import Nav from './components/global/Navigation';
import Home from './screens/Home';

//////// Styles ////////
require('./css/Global.css');
// THEME for Material UI
const theme = getMuiTheme({
  palette: {
    primary1Color: '#8BC34A',
    primary2Color: '#DCEDC8',
    primary3Color: '#689F38',
    accent1Color: '#FF4081',
    textColor: '#212121',
    alternateTextColor: '#757575',
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
        <MuiThemeProvider muiTheme={theme} className="App">
          <Nav />
          <Route path='/' component={Home} />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
