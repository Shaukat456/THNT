import React from 'react'
import './dark.jpg'
import {    useParams   } from 'react-router-dom'


const Works=()=>{
    const {fname}=useParams()
 return   <h1> i am {fname} page</h1> 
};

export default Works;