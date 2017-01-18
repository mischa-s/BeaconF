

function App (props) {

  return `<div>${props.name}</div>`
}



var jsxString = "<App name={'mix'} />"
                  App({name: 'mix'})

var result = parse(jsxString)

// find the name of the function, App
// find the props (attributes) which were passed in (name = mix)
//   build an object with keys and value {name: 'mix'}
//
// then call App({name: 'mix'})

var expected = "<div>mix</div>"

function parse(string) {
  const functionName = string.match(/\W\w+/)[0].replace('<', '')
  const keysAndValues = // findKeysAndValues(string) .... // -> {name: 'mix'}

}
