import React from 'react';
import MenuBar from './menubar/MenuBar';
import Main from './main/Main';

class App extends React.Component {
  render() {
    return (
      <div>
        <MenuBar />
        <Main />
      </div>    );
  }
}

export default App;