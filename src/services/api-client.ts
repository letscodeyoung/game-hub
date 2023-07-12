import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'1ba8de49209a473ea66e5fb1d820d22e'
    }
})