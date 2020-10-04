import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${REACT_APP_EXPO_YELP_API_KEY}`
  }
});     