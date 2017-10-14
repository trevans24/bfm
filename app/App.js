import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
require('./styles/globals.scss');

// COMPONENTS
import Home from './screens/Home';

//////// ROUTER ////////
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

// THEME for Material UI
const theme = getMuiTheme({
  palette: {
    primary1Color: '#f06292',
    primary2Color: '#26c6da',
    primary3Color: '#9ccc65',
    accent1Color: '#3d5afe',
    textColor: '#974140',
    alternateTextColor: '#212121',
    shadowColor: '#BDBDBD'
  },
});

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={theme}>
          <div className="App">
            <Route exact path='/' component={Home} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
