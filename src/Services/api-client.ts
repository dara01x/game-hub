import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'bbff678a72f4481da5429ea8736ae42a'
    }
})