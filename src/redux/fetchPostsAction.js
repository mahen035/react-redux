import axios from "axios"
export const fetchPostsAction =  () => {
    return async(dispatch) =>{
    //const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const posts = await axios.get('http://localhost:8081/home/users')
    console.log(posts.data)
    dispatch({
        type: 'FETCH_POSTS',
        payload: posts.data
    })
    }
    
}