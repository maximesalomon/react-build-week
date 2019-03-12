import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

import WebsiteHome from './components/website/WebsiteHome';
import Sidebar from './components/app/Sidebar';
import Navbar from './components/app/Navbar';
import Experiments from './components/app/Experiments';
import ExperimentForm from './components/app/ExperimentForm';
import Experiment from './components/app/Experiment';
import Filter from './components/app/Filter';
import Tags from './components/app/Tags';

const Container = styled.div `
    margin-top: 64px;
    margin-left: 64px;
`

export default class App extends Component {
  render() {
    function hyphen(str) {
      return str.split(' ').join('-');
  }
    return (
      <>
        <Route
            exact path='/'
            render={() => (
                <WebsiteHome />
            )}
        />
        <Route
          exact path='/experiments'
          render={() => (
          <>
            <Sidebar />
            <Navbar />
            <Filter />
            < Tags />
            <Container>
              <Experiments />
            </Container>
          </>
          )}
        />
        <Route
          exact path='/form/add'
          render={() => (
          <>
            <Sidebar />
            <Navbar />
            <Container>
              <ExperimentForm />
            </Container>
          </>
          )}
        />
        <Route
        exact path='/experiments/:id'
        render={(props) => (
        <>
          <Sidebar />
          <Navbar />
          <Container>
            <Experiment {...props} />
          </Container>
        </>
        )}
      />
      </>
    );
  }
}
