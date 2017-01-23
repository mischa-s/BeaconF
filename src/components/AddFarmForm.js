import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const request = require ('superagent')

const SubmitName = React.createClass ({
  handleSubmit: function (e) {
    e.preventDefault()

    const farmName = this.refs.farmName.value
    const farmLocation = this.refs.farmLocation.value
    const farmType = this.refs.farmType.value
    const mainImage = this.refs.mainImage.value
    // this.props.store.dispatch({type: 'UPDATE_HIGHSCORES', payload: data.body.highScores})

    if (farmName.length > 0) {
      request.post('api/v1/farms')
        .send({name:farmName, location:farmLocation, type:farmType, mainImage:mainImage })
        .end((err, data) => {
          console.log('heard back from api', data, err)
        })

      // this.refs.farmName.value = ''
      // this.refs.farmLocation.value = ''
      // this.refs.farmType.value = ''
      // this.refs.mainImage.value = ''

    } else {
      this.refs.farmName.focus()
    }
  },
  render: function () {
    console.log("state from submit name", state);

    const style = {
    marginLeft: 20,
    }

    return (
      <div>
          <Paper zDepth={2}>
            <TextField hintText="Farm Name" ref='farmName' style={style} underlineShow={true} />
            <br/>
            <TextField hintText="Farm Location" ref='farmLocation' style={style} underlineShow={true} />
            <br/>
            <TextField hintText="Type of Farm" ref='farmType' style={style} underlineShow={true} />
            <br/>
            <TextField hintText="Image URL" ref='mainImage' style={style} underlineShow={true} />
          </Paper>
      </div>
    )
  }
})

module.exports = SubmitFarm

// return (
// module.exports = function() {
//
//         <div className="container-name">
//           <form onSubmit={this.handleSubmit}>
//             <input type='number' ref='score' value ={this.props.state.turnCount}/>
//             <input type='text' ref='submitText' placeholder='Write your name here' />
//
//             <button className='button expanded hollow'>Add Score</button>
//           </form>
//         </div>
//       )
//
// }
//

//value={this.state.name} onChange={e => this.setState({ name: e.target.value })}
