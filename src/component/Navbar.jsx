import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {logo} from '../utils/Constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  
  return (
    <Stack 
    direction={'row'} p={2} 
    alignItems='center'
    sx={{position:'sticky',background:'#000',top:0,justifyContent:'space-between',zIndex:'999'}}>
    <Link to={'/'} style={{display:'flex',alignItems:'center'}}>
      <img src={logo} alt='logo' height={'45px'}/>
    </Link>
    <SearchBar/>
    </Stack>
  )
}

export default Navbar