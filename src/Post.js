import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostsAction } from './redux/fetchPostsAction';

function Post(props) {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPostsAction())
    },[])
    return (
        <div>
            <h1>User Data::</h1>
        </div>
    );
}

export default Post;