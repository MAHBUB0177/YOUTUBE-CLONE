import React from 'react'
import { Box,CardContent,CardMedia,Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/Constants'



 const ChannelCard = ({channelDetail,marginTop}) => {
  // console.log(channelDetail,'channelDetail')
  return (
   <Box sx={{boxShadow:'none',
   borderRadius:'20px',
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   width:{sx:'250px',md:'250px'},
   height:'180',
   margin:'auto',
   marginTop
   }}>

    <Link to={`/channel/${channelDetail?.id?.channelId}`}  style={{textDecoration:'none'}}>
      <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
        <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        sx={{borderRadius:'50%',height:'180px',width:'180px' ,mb:2,border:'1px solid #e3e3e3'}}/>
        <Typography variant='h6'>
          {channelDetail?.snippet?.channelTitle || channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </CardContent>
    </Link>

   </Box>
  )
}

export default ChannelCard





