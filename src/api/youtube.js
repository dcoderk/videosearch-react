import axios from "axios";

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: 'AIzaSyA2wajgkMeCD1Rf36bQLwI3_lLQQt8ljUE'
    }
})