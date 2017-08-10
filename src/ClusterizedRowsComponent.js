import React, { Component } from 'react';
import Clusterize from 'react-clusterize';

class ClusterizedRows extends Component {
 componentWillMount() {
    const rows = this.generateRows(this.props.rowCount);
    this.setState({rows});
 }

 componentWillReceiveProps(nextProps) {
     const rows = this.generateRows(nextProps.rowCount);
     this.setState({rows});
 }

 generateRows(maxRows) {
     const rows = [];
    for (let i = 0; i < maxRows; ++i) {
        rows[i] = (
            <div style={{ borderBottom: '1px solid #f0f0f0', padding: '5px 10px' }}>
                Item #{i + 1}
            </div>
        );
    }
    return rows;
 }

  render() {
    return (
        <div className='col-md-3 col-md-offset-2 scrollable'>
            <Clusterize rows={this.state.rows} />
        </div>
    );
  }
}

export default ClusterizedRows;
