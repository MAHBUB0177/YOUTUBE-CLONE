import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Box } from '@mui/material';
import{Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from './component'

function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
        <Route  path='/'  element={<Feed/>}/>
        <Route  path='/Video/:id'  element={<VideoDetail/>}/> 
        <Route  path='/channel/:id'  element={<ChannelDetail/>}/> 
        {/* <Route  path='/search/:id'  element={<SearchFeed/>}/>  */}
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
        
      </Routes>
      
    </Box>
    </BrowserRouter>
  );
}

export default App;
