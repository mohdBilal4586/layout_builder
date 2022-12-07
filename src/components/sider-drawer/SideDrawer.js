import React from 'react'
import Model from '../UI/Model'
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import classes from './SideDrawer.module.css'

const SideDrawer = props => {
  return (
    <Model onClose={props.onClose}>
     <section className={classes.drawer}>
        <CloseIcon className={classes.icon} onClick = {props.onClose}/>
        <h1>Hello</h1>
        <div>
        <NavLink>TAB ONE</NavLink>
        <br/>
        <NavLink>TAB TWO</NavLink>
        <br/>
        <NavLink>TAB THREE</NavLink>
        </div>
        </section>
    </Model>
  )
}

export default SideDrawer