const React = require('react')
const RaisedButton = require('material-ui/RaisedButton')
const { Link } = require('react-router')

const MyFarmsButton = (props) => {
  const loggedIn = props.loggedIn
  const myFarms =
  (
    <div className='button'>
      <button><Link to={'/myfarms'}> My Farms </Link></button>
    </div>
  )
  const emptyDiv =
  (
   <div />
  )

  return loggedIn
     ? myFarms
     : emptyDiv

}
module.exports = (MyFarmsButton)
