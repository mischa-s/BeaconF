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
      ( <Paper zDepth={2}>
          <TextField hintText="Farm Name" style={style} underlineShow={false} />
          <Divider />
          <TextField hintText="Farm Location" style={style} underlineShow={false} />
          <Divider />
          <TextField hintText="Type of Farm" style={style} underlineShow={false} />
          <Divider />
        </Paper>
        )
    </div>
    )
}
