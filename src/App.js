import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import BeerList from './components/BeerList';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import HomePage from './components/HomePage';
import SingleBeer from './components/SingleBeer';

class App extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({
        beers: response.data,
      });
    });
  }

  handleAdd = (event) => {
    event.preventDefault();
    const {
      name,
      tagline,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
      description,
    } = event.target;

    let newBeer = {
      name: name.value,
      tagline: tagline.value,
      first_brewed: first_brewed.value,
      brewers_tips: brewers_tips.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value,
      description: description.value,
    };

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then((response) => {
        this.setState(
          {
            beers: [response.data, ...this.state.beers],
          },
          () => {
            this.props.history.push('/');
          }
        );
      });
  };

  handleSearch = (event) => {
    event.preventDefault();
    let search = event.target.value;

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      .then((response) => {
        this.setState({
          beers: response.data,
        });
      });
  };

  render() {
    return (
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <HomePage />;
            }}
          />
          <Route
            exact
            path="/beers"
            render={() => {
              return (
                <BeerList
                  beers={this.state.beers}
                  onSearch={this.handleSearch}
                />
              );
            }}
          />
          <Route
            path="/random-beer"
            render={() => {
              return <RandomBeer />;
            }}
          />
          <Route
            path="/new-beer"
            render={() => {
              return <NewBeer onAdd={this.handleAdd} />;
            }}
          />
          <Route path="/beers/:beerId" component={SingleBeer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
