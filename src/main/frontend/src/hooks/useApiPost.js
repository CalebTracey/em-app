import { useState, useCallback } from 'react';
import axios from 'axios';

const useApiPost = (config) => {
    const [resPost, setPost] = useState({ data: null, error: null, isLoading: false });
    //const [error, setError] = useState("")

    
    const callPostAPI = useCallback(() => {
        // console.log(headers)
        // console.log(data)
        if (config != null){
        setPost(prevState => ({ ...prevState, isLoading: true }));
        axios.post(config).then(res => {
            setPost({ data: res.data, isLoading: false, error: null });
        }).catch((error) => {
            setPost({ data: null, isLoading: false, error });
        })
    }
    }, [config])
    return [resPost, callPostAPI];
}

export default useApiPost;