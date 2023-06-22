import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { categories } from '../utils/Constants'

const SideBar = ({selectedCategory,setSelectedCategory,setVideos}) => {
  
  return (
    <Stack 
    direction={'row'}
    sx={{overflowY:'hidden',
    height:{xs:'auto',md:'95%'},
    flexDirection:{md:'column'}
  }}
    >
        {
            categories.map((category,i)=>
            <Button className='category-btn' 
            onClick={()=>{
              setVideos()
              setSelectedCategory(category.name)}}
             style={{
                background: category.name === selectedCategory && 
                "#FC1503",
                color: "gary",borderRadius:'20px',
                hover: {
                  backgroundColor: '#fff',
                  color: '#3c52b2',
              }}}
              key={category.name}>

                <Box style={{display:'flex',justifyContent:'space-between',}}>
                <Typography style={{color:category.name === selectedCategory ?
                   'white' :'red',fontSize:'13px',width:'30px',marginRight:'12px'}}>
                    {category.icon}
                </Typography>
                <Typography style={{opacity:category.name ===
                   selectedCategory ? '1' : '0.8',fontSize:'13px',width:'60px',
                   textAlign:'left'}}>
                    {category.name}
                </Typography>
                </Box>
            </Button>)
        }



    </Stack>
  )
}

export default SideBar