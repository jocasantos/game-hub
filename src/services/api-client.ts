import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7ea955664bf1453fbd9858e4422d2558'
    }   
})
