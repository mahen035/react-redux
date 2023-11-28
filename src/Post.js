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
            
        </div>
    );
}

export default Post;