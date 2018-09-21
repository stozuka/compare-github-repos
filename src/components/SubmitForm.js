import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

class SubmitForm extends Component {
  state = {
    fullName: '',
  };

  onInputChange = (event) => {
    this.setState({ fullName: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.setState({ fullName: '' });

    // Check if input repo already exists in the table
    const repo = this.state.fullName.trim();
    const repoNamesInState = this.props.repos.map((repo) => repo.full_name);
    if (repo === '' || repoNamesInState.includes(repo)) {
      return;
    }

    this.props.fetchRepoData(repo);
  };

  render() {
    return (
      <div>
        <Typography variant="headline" align="center">
          Input Project/Repository
        </Typography>
        <Typography variant="subheading" align="center">
          e.g. facebook/react
        </Typography>
        <Grid container justify="center" style={{ marginBottom: 20 }}>
          <form onSubmit={this.onFormSubmit}>
            <TextField
              id="term"
              value={this.state.fullName}
              onChange={this.onInputChange}
              margin="normal"
              autoFocus={true}
              style={{ width: 200 }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ width: 50, marginLeft: 2 }}
            >
              Submit
            </Button>
          </form>
        </Grid>
        {this.props.error && (
          <Typography
            variant="subheading"
            color="error"
            align="center"
            style={{ marginBottom: 20 }}
          >
            {this.props.error}
          </Typography>
        )}
      </div>
    );
  }
}

SubmitForm.propTypes = {
  fetchRepoData: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
};

function mapStateToProps({ repoData }) {
  return { repos: repoData.repos, error: repoData.error };
}

export default connect(
  mapStateToProps,
  actions
)(SubmitForm);
