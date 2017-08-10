import React, { Component } from 'react';
import Rows from './RowsComponent.js';
import ClusterizedRows from './ClusterizedRowsComponent.js';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

class App extends Component {
    componentWillMount() {
        this.setState({
            'count': 1000,
            'clusterizedEnabled': true,
            'normalEnabled': true
        })
    }

     handleChange(event) {
         this.setState({'count': +event.target.value})
     }

     handleClusterizedEnableChanged() {
         this.setState({'clusterizedEnabled': !this.state.clusterizedEnabled,})
     }

     handleNormalEnableChanged() {
         this.setState({'normalEnabled': !this.state.normalEnabled,})
     }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className='row'>
            <div className='col-md-6 col-md-offset-3'>
                <input type="number" value={this.state.count} onChange={(event) => this.handleChange(event)} />
            </div>
        </div>
        <div className='row'>
            <div className='col-md-3 col-md-offset-2'>
                <label className="checkbox-inline"><input type="checkbox" checked={this.state.clusterizedEnabled}  onChange={() => this.handleClusterizedEnableChanged()} />Enabled</label>
            </div>
            <div className='col-md-3 col-md-offset-1'>
                <label className="checkbox-inline"><input type="checkbox" checked={this.state.normalEnabled}  onChange={() => this.handleNormalEnableChanged()} />Enabled</label>
            </div>
        </div>

        <div className='row'>
            {this.state.clusterizedEnabled ?
                <ClusterizedRows rowCount={this.state.count} />
            :
                <div className='col-md-3 col-md-offset-2' ></div>
            }
            {this.state.normalEnabled ?
                <Rows rowCount={this.state.count} />
            :
                <div className='col-md-3 col-md-offset-1' ></div>
            }
        </div>
      </div>
    );
  }
}

export default App;
