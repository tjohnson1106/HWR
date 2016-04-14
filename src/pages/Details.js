 import React from 'react';
 import Chance from 'chance';

 class Detail extends React.Component {
 	buttonClicked() {
 		console.log('Button was clicked!')
 	}
 render() {
    return (<div>
        <p>Hello, {chance.first()}.</p>
        <p>You are from {chance.country({ full: true })}.</p>
        <button onClick={this.buttonClicked}>Meet Someone New</button>
    </div>);
}

 export default Detail;