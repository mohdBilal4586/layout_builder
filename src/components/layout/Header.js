import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import DehazeIcon from '@mui/icons-material/Dehaze';

const Header = props => {

  return (
    <header className={classes.header}>
    <DehazeIcon style={{marginRight: '2rem', fontSize: '30px', cursor: 'pointer'}} onClick={props.onClick}/>
        <img src='/images/tigeen_computing_logo.png' alt='logo'/>
        <div>
        <NavLink>TAB ONE</NavLink>
        <NavLink>TAB TWO</NavLink>
        <NavLink>TAB THREE</NavLink>
        </div>
    </header>
  )
}

export default Header