import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';


module.exports = function() {
  const style = {
  marginLeft: 20,
  }

  return (
    <div>
       <Paper Depth={2}>
          <TextField hintText="Farm Name" style={style} underlineShow={true} />
          <br/>
          <TextField hintText="Farm Location" style={style} underlineShow={true} />
          <br/>
          <TextField hintText="Type of Farm" style={style} underlineShow={true} />
        </Paper>
    </div>
    )
}

//value={this.state.name} onChange={e => this.setState({ name: e.target.value })}
