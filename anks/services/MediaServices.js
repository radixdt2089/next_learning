const BASE_URL = 'http://localhost:1337';
import axios from "axios";

class MediaService {

    static async addMedia(formData) {
        console.log(formData);
        const res = await axios.post(`${BASE_URL}/upload` , formData, {headers : {
            "Content-Type" : "multipart/form-data"
        }});
        return await res.data
        //return data;
    }
}
export default  MediaService;