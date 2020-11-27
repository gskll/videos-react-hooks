import axios from "axios";

const YT_API_KEY = "AIzaSyAzi8ZfUr_cUBfWHLkvFmHwIEOx7aQY8-Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: YT_API_KEY,
  },
});
