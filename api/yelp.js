import axios from "axios";
import keys from "../keys";

export default axios.create({
    baseURL: `https://api.yelp.com/v3/businesses`,
    headers: {
        Authorization: `Bearer ${keys.yelpKey}`,
    },
});
