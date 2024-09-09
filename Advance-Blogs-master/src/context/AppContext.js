import axios from "axios";
import {  createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Context creation
export const AppContext = createContext();


export default function AppContextProvider(props) {
    const [loading,setLoading]=useState(false);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(null);
    const [posts, setPosts] = useState([]);
    const navigator=useNavigate();
    const baseUrl = 'https://codehelp-apis.vercel.app/api/get-blogs';
    async function fetchData(page,tag=null,category=null) {
        var url=`${baseUrl}?page=${page}`;
        if(tag){
            url+=`&tag=${tag}`;
        }
        if(category){
            url+=`&category=${category}`;
        }
        
        try {
            
            setLoading(true);
            console.log("main url "+ url);
            const data = await axios.get(url);
            setPage(data.data.page);
            setPages(data.data.totalPages);
            setPosts(data.data.posts);

            setLoading(false)
        }
        catch (error) {
                console.log(error);
                toast.error("Couldn't fetch Api");
        }

    }

    function changeHandler(page){
       navigator({search:`?page=${page}`})
        setPage(page);
        // fetchData(page);


    }
    const value = {
       loading,setLoading, page, setPage, pages, setPages, posts, setPosts,fetchData,changeHandler,baseUrl
    }
    // Context provider.
    return (<AppContext.Provider value={value}>{props.children}</AppContext.Provider>)
}
