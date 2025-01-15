
import axios from 'axios';
const AxiosPublic = () => {

    const instance = axios.create({
        baseURL: 'https://some-domain.com/api/',
        
      });
    return instance
};

export default AxiosPublic;