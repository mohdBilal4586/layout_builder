import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Footer.module.css'
import EmailIcon from '@mui/icons-material/Email';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <div>
        <NavLink><EmailIcon /> MAILS </NavLink>
        <NavLink><AccessAlarmsIcon /> ALARMS</NavLink>
        <NavLink><MovieCreationIcon /> MOVIES</NavLink>
        </div>
    </footer>
  )
}

export default Footer