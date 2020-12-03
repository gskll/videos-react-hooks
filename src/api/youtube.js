import axios from "axios";

import {YT_API_KEY} from './config'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: YT_API_KEY,
  },
});
