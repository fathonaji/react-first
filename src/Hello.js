import React from "react";

// function Hello(){
//     return <h1>Hello World!</h1>
// }
// const Hello = function(){
//     return <h1>Hello World!</h1>
// }
// const Hello = (props) => {
//     const {name} = props
//     return <h1>Hello {name}!</h1>
// }
// const Hello = ({name}) => {
//     // const {name} = props
//     return <h1>Hello {name}!</h1>
// }
const Hello = ({name, greeting}) => <h1 style={{marginBottom: '1rem', marginTop: 0}}>{greeting} {name}!</h1>
// const Hello = (props) => {
//     props.name = "Test"
//     return <h1>Hello {props.name}!</h1>
// }


Hello.defaultProps = {
    name: "anonim"
}


export default Hello
// export default () => <h1>Test</h1>