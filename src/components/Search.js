import React, { Component } from 'react';
import Results from './Results.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchGif, setMessage } from '../actions/userDataActions.js';

class Search extends Component {
  state = {
    query: '',
    error: false
  };

  handleChange = e => {
    this.setState({ error: false });
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query !== '') {
      this.props.setMessage('');
      this.props.fetchGif(this.state.query, 0);
    } else this.setState({ error: true });
  };

  render() {
    return (
      <div className="Search">
        <div className="Search-Wrapper">
          <div className="Search-Text">
            <p>
              Find out how weird you are by selecting the GIFs that make you
              laugh. We'll show you the least weird ones to start, but you can
              move the slider to make them weirder.
            </p>
            <br />
            <p>
              When you find a GIF you like, press the <i>Like</i> button. Once
              you like 5 GIFs, we'll show you how weird you are.
            </p>
          </div>
          <div className="Search-Input">
            <p>Search Term</p>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Type your search term here ..."
                onChange={this.handleChange}
              />
              <button>Search</button>
            </form>
            {this.state.error && <span>* You must enter some text</span>}
          </div>
        </div>
        <Results
          fetchGif={this.props.fetchGif}
          userData={this.props.userData}
        />
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { fetchGif, setMessage }
  )(Search)
);
