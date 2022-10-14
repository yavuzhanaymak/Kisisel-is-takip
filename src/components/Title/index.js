import React,{useState} from "react"; 
import Container from '@mui/material/Container';

 

const Title = (props) => {
 

  return (
 
     <div className="titleArea">
    <h3 className="title">
        {props.title}
    </h3>
    <p className="subTitle">
        {props.subtitle}
    </p>
   </div>
 
  );
};
export default Title;
