import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import {Image} from 'react-bootstrap/Image'
import Image from 'react-bootstrap/Image'
import { Route, Switch } from "react-router-dom";
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Menu from './Menu'
import Me from './Me'
// import  './indexx.css'
import  './index.css'
import Works from './Works'



const App = () => {
    const E=()=>{
        return(
            <>
            <h1>error 404</h1>
            </>
        )
    }
    return (
        <>  
        <Menu/>
        <Switch>
            {/* if we wanna use props thn render otherwise component */}
        <Route  exact path='/' component={()=> <About name='shoukat'/> }/> 
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/services' component={()=><Services name='Services'/>}/>
        <Route exact path='/Me' render={()=> <Me name='Its me page' pict='wood.jpg' />}/>
        <Route exact path='/Works/:my' component={Works}/>
        <Route component={E}></Route>
        </Switch>
</>

    )
}

export default App;