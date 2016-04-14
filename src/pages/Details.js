 import React from 'react';
 import Chance from 'chance';

 class Detail extends React.Component {
 		buttonClicked() {
 			console.log('Button was clicked!')
 		}
 		render() {
    return (<div>
        <p>Hello, {this.state.name}.</p>
        <p>You are from {this.state.country}.</p>
        
        buttonClicked() {
    const newState = {
        name: chance.first()
    };

    this.setState(newState);
}
}

 				export default Detail;