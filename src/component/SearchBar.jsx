import React,{useState} from 'react'
import {useNavigate } from "react-router-dom";
import { Paper,IconButton, Input } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper component={'form'}
    onSubmit={onhandleSubmit}
    width='200px'
    sx={{borderRadius:'20px',border:'1px solid #e3e3e3',
    pl:2,
    boxShadow:'none',
    mr:{sm:5}}}>
        <Input
        className='search-bar'
        placeholder='Search...'
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar