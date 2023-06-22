import { Box } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFormApi'
import {ChannelCard,Video} from './index'

export const ChannelDetail = () => {
  const [ChannelDetail,setChannelDetail]=useState()
  const [videos,setVideos]=useState()
  // console.log(videos,'---------->')
  const {id}=useParams();

  // useEffect(()=>{
  //   fetchFromAPI(`channels?part='snippet&id=${id}`)
  //   .then((data)=>setChannelDetail(data?.items[0]));

  //   fetchFromAPI(`search?channelId=${id}&part='snippet&order=date`)
  //   .then((data)=>setVideos(data?.items));
  // },[id])

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  return (
   
    <Box minHeight={'95vh'}>
      <Box>
        <div 
        style={{
          background: 'pink',
          zIndex:10,
          height:'300px'
        }}/>

        <ChannelCard channelDetail={ChannelDetail} marginTop='-110px'/>
        <Box display={'flex'} p={2} >
          <Box sx={{mr:{sm:'0px'}}}/>
          <Video videos={videos}/>

        </Box>
      </Box>
    </Box>
  )
}
export default ChannelDetail
