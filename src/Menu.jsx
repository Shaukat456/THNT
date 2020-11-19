import React from 'react'
import {NavLink} from 'react-router-dom'
import  './index.css'



const Menu=()=>{
    return(
        <>
        <div className="navba">
        <NavLink  id='a1' exact className='items' activeClassName='acticlass' to='/'  > About US</NavLink>
        <NavLink  id='a2'className='items' exact    to='./contact'  activeClassName='acticlass' > Contact US</NavLink>
        <NavLink  id='a3'className='items' exact    to='./services'  activeClassName='acticlass' > Service </NavLink>
        <NavLink  id='a4'className='items' exact    to='./works'  activeClassName='acticlass' > Works</NavLink>
        <NavLink  id='a5' className='items'exact    to='./me'  activeClassName='acticlass' > ME</NavLink>
        <br/>
        </div>

        
        
        </>
    )
}

export default Menu;