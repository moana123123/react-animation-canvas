import React, { useEffect } from "react";

const Click = props=> {

    const {handleClick, ...rest} = props; 
    useEffect(() =>{

    })
    return (      
        <div className="Display" onClick={handleClick}>
          {/* <h1>{this.props.front}</h1> */}
        </div>
    );
}
export default Click;