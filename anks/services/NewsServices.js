const BASE_URL = 'http://localhost:1337';


class NewsService {

    static async getAllNews() {
        const res = await fetch(`${BASE_URL}/blogs?blog_type.BlogType=News`);
        const data = await res.json()
        return data;
    }
}
export default  NewsService;