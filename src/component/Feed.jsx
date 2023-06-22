import React,{useState,useEffect} from 'react'
import { Stack,Box,Typography } from '@mui/material'
import {SideBar,Video} from './index'
import  { fetchFromAPI } from '../utils/fetchFormApi'

const Feed = () => {
  const [selectedCategory,setSelectedCategory]=useState('New')
  const [videos, setVideos] = useState();

  useEffect(() => {
    // setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setTimeout(()=>{
        setVideos(data.items)
      },1000))
    }, [selectedCategory]);

 

  
  return (
    <Stack sx={{flexDirection:{xs:'column',md:'row'}}} zIndex={-2}>
      <Box sx={{height:{xs:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d', px:{sx:'0',md:2}}}>
        <SideBar 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} setVideos={setVideos}/>
        <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'#fff'}}>Copyright @2022 JSM Media </Typography>
      </Box>

      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant='h5'  fontWeight={'bold'} mb={2} sx={{color:'white',marginLeft:'20px'}}>
         {selectedCategory} <span style={{color:'#F31503',}}>Videos</span>
        </Typography>
        <Video videos={videos}/>
      </Box>

    </Stack>

  )
}

export default Feed