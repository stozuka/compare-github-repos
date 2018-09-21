import React, { Component } from 'react';
import Header from './Header';
import SubmitForm from './SubmitForm';
import RepoData from './RepoData';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <CssBaseline>
        <Header />
        <SubmitForm />
        <RepoData />
      </CssBaseline>
    );
  }
}

export default App;
