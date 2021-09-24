import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'content-type': 'aplication/json;charset=utf-8',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDNkOGI3MGM5ZTM4NTczNzM4NWQ2OTU4OTZkODU5ZSIsInN1YiI6IjYxNDEzZDBjZmQ3YWE0MDAyOTQ1ZDNmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PhWHRxr5JdPTDHGzIQ-t6YFNU2z7omxjeqLKf7QiNvs'
    }
})

export default apiFilmes;