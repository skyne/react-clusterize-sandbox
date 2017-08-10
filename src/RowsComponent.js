import React, { Component } from 'react';

class Rows extends Component {
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
               <div key={i} style={{ borderBottom: '1px solid #f0f0f0', padding: '5px 10px' }}>
                   Item #{i + 1}
               </div>
           );
       }
       return rows;
   }

  render() {
    return (
        <div className='col-md-3 col-md-offset-1 scrollable'>
            <div style={{'height': '100%', 'overflow': 'auto'}}>
                {this.state.rows.map((row) => {
                    return row;
                })}
            </div>
        </div>
    );
  }
}

export default Rows;
