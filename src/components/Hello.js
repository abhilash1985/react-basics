import React from "react";

const Hello = () => {
    // return (
    //     <div className='dummyClass' id="hello">
    //         <h1>Hello JSX</h1>
    //     </div>
    // )
    return React.createElement(
      'div', 
      {id: 'hello', className: 'dummyClass'}, 
      React.createElement('h1', null, 'Hello JSX')
    );
}

export default Hello