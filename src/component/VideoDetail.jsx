import { CheckCircle } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import {Link,useParams} from 'react-router-dom'
import {fetchFromAPI} from '../utils/fetchFormApi'

const VideoDetail = () => {
  const {id}=useParams()
  // console.log(id,'++++++++++++')
  const [VideoDetail,setVideoDetails]=useState(null)
  const[videos,setVideos]=useState()

// console.log(VideoDetail,'VideoDetail')
const {snippet:{title,channelId,channelTitle},statistics:{likeCount,viewCount}}=VideoDetail;
  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setVideoDetails(data.items[0]))
    .catch((err)=>{
      console.log(err);
    })


    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}`)
    .then((data)=>setVideos(data.items))
  },[id]);

  if (!VideoDetail?.snippet )return 'Loading.....'
  return (
    <Box minHeight={'95vh'}>
      <Stack direction={{xs:'column',md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
           <ReactPlayer url={`https:/www.youtube.com/watch?v=${id}`}
           className='react-player' controls/>
           <Typography color='#fff' variant='h5' fontWeight='bold' p='2'>
            {title}
           </Typography>
           <Stack direction={'row'} justifyContent='space-between' sx={{color:'#fff'}} py={1} px='2'>
            <Link to={`/channel/${channelId}`}>
              <Typography variant={{sm:'subtitle1',md:'h6'}} color='#fff'>
                {channelTitle}
                <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
              </Typography>
            </Link>
            <Stack direction={'row'} alignItems='center' gap={2}>
              <Typography variant='body1' sx={{opacity:'0.7'}}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>

              <Typography variant='body1' sx={{opacity:'0.7'}}>
                {parseInt(likeCount).toLocaleString()} views
              </Typography>
            </Stack>
           </Stack>
          </Box>
        </Box>

      </Stack>
    </Box>
  )
}

export default VideoDetail