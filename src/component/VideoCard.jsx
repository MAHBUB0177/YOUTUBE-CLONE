import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia, Box } from '@mui/material'
import { demoChannelTitle,demoChannelUrl,demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoProfilePicture } from '../utils/Constants'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const VideoCard = ({video:{id:{videoId},snippet}}) => {
  console.log(snippet,videoId,'======')
  return (
   <Card sx={{ width: '250px', boxShadow: "none", borderRadius: 0 ,bgcolor:'pink'}}>
    <Link to={videoId? `/video/${videoId}` : demoVideoUrl} >
    {/* <CardMedia image={snippet?.thumbnails?.high?.url} 
    alt='logo'
    sx={{width:'250px',height:180 }}/> */}
    <Box sx={{width:'250px',height:180 }}>
    <CardMedia image={snippet?.thumbnails?.high?.url} 
    alt='logo'
    sx={{width:'250px',height:180 }}/>

    </Box>
    </Link>
    

    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px',marginTop:'-20px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } style={{textDecoration:'none'}}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{textDecoration:'none'}}>
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
   </Card>
  )
}

export default VideoCard