import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/DeleteForeverOutlined';
import PropTypes from 'prop-types';

class RepoData extends Component {
  deleteRepo = (fullName) => {
    this.props.deleteRepo(fullName);
  };

  renderTableRows = (repos) => {
    return repos.map((repo) => {
      const fullName = repo.full_name;
      const license =
        repo.license && repo.license.name ? repo.license.name : '';

      return (
        <TableRow key={fullName}>
          <TableCell component="th" scope="row">
            {fullName}
          </TableCell>
          <TableCell numeric>
            {repo.stargazers_count.toLocaleString('en-US')}
          </TableCell>
          <TableCell numeric>
            {repo.forks_count.toLocaleString('en-US')}
          </TableCell>
          <TableCell>{license}</TableCell>
          <TableCell>{repo.created_at}</TableCell>
          <TableCell>
            <DeleteIcon
              cursor="pointer"
              onClick={() => this.deleteRepo(fullName)}
            />
          </TableCell>
        </TableRow>
      );
    });
  };

  renderTable = () => {
    return (
      <Grid container justify="center">
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ textAlign: 'center' }}>Repo</TableCell>
                <TableCell numeric style={{ textAlign: 'center' }}>
                  Stars
                </TableCell>
                <TableCell numeric style={{ textAlign: 'center' }}>
                  Forks
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>License</TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  Created At
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>{this.renderTableRows(this.props.repos)}</TableBody>
          </Table>
        </Paper>
      </Grid>
    );
  };

  render() {
    if (this.props.repos.length === 0) {
      return null;
    }

    return this.renderTable();
  }
}

RepoData.propTypes = {
  deleteRepo: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};

function mapStateToProps({ repoData }) {
  return { repos: repoData.repos };
}

export default connect(
  mapStateToProps,
  actions
)(RepoData);
