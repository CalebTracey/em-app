// import {useState, useCallback, useSelector} from 'react';
// import axios from 'axios';

// const useFetchMyApi = ({url, headers, payload}) => {
//     const [resGet, setGet] = useState({ data: null, error: null, isLoading: false });
//     //const [error, setError] = useState("")
    
//     const callGetApi = useCallback(() => {
//         // console.log(headers)
//         if (resGet.data === null) {

//         setGet(prevState => ({ ...prevState, isLoading: true }));
//         axios.get(url, headers, payload).then(res => {
//             console.log(res)
//             setGet({ data: res.data._embedded, isLoading: false, error: null });
//         }).catch((error) => {
//             setGet({ data: null, isLoading: false, error });
//         })
//     }
//     }, [url, headers, payload, resGet]);

//     console.log(resGet)
//     return [resGet, callGetApi];

// }

// export default useFetchMyApi;