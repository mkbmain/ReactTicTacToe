import React, {useState} from 'react';

const Button = (props)=>
{
   const [title,setTitle] = useState("-");
 return <button style={{"height": "50px", "width" : "50px", "margin" : "10px"}}    
          onClick={()=>{if(title == "-"){setTitle( props.fire(props.number))}}}>  
   <div style={{ visibility: title !='-' ? 'visible' : 'hidden' }}>{title}</div>       
   </button>
};


export default Button;