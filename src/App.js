import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// components
import Nav from './components/global/Navigation';

// Styles
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={theme} >
          <Nav />
          <h1>fuck you react</h1>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
