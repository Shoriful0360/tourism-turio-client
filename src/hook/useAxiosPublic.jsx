
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://trippo-server.vercel.app',
  
});
const useAxiosPublic = () => {


    return instance
};

export default useAxiosPublic;

