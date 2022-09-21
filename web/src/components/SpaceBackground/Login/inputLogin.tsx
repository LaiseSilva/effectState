import React from "react";

interface IInput {
  value : string
  handleChange : (event : React.ChangeEvent<HTMLInputElement>) => void
  name : string
}

const InputLoign = ({value, handleChange, name} : IInput) =>{
  
    return(
      

        <>
         
         
          <input  value={value} onChange={(event : React.ChangeEvent<HTMLInputElement>) => handleChange(event)} type='email' name={name } placeholder="username@mediaspace.com"/>
          
          
        
        </>



    );


}

export default InputLoign;