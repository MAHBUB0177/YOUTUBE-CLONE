import React from 'react'
import { Stack,Box } from '@mui/material'
import {ChannelCard, VideoCard} from './index'
import axios from 'axios'

const Video = ({videos}) => {
  console.log(videos,'video====>')

  
  

  return (
    <Stack direction={'row'} flexWrap='wrap' gap={2} justifyContent='start'>
    {videos?.map((item, idx) => 
    // console.log(item,'item')

    (

        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      )
      
      )}


    </Stack>
  )
}

export default Video