import {useState , useEffect} from 'react';
import {Box , Stack ,Typography } from '@mui/material'

import {useParams} from 'react-router-dom'

import { fetchFromAPI } from '../utils/fetchFromAPI';
import {Sidebar,Videos} from './';

const SearchFeed = () => {

const {searchTerm} = useParams();

const[videos,setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) =>setVideos(data.items))
  }, []);

  return (
    <Box p={2}  sx={{ overflow: "auto" , height: "90vh" , flex :2}}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color : 'white'}}>
    Search results for : <span style={{color:'#F31503'}}>{searchTerm} </span>
    videos
    </Typography>

    <Videos videos={videos}/>   
    </Box>
  )
}

export default SearchFeed