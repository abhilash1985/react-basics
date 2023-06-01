import React from "react";

// function Greet() {
//     return <h1>Hello, Test</h1>
// }

const Greet = (props) => {
	console.log(props.name)
	const {name, heroName} = props
  return (
		<div>
	    <h1>
				Hello, {name} a.ka. {heroName}
			</h1>
			{props.children}
		</div>
	) 
}

export default Greet
