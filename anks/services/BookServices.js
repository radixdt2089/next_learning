const BASE_URL = 'http://localhost:1337';


class BookService {

    static async getAllBooks() {
        const res = await fetch(`${BASE_URL}/books?_sort=published_at:desc`);
        const data = await res.json()
        return data;
    }
}
export default  BookService;