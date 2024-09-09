import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pageinitiaton from './components/Pageinitiation';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Route,Routes, useLocation, useSearchParams } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import TagsPage from './pages/TagsPage';
import CategoryPage from './pages/CategoryPage';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';


function App() {

  const {fetchData}=useContext(AppContext);
  const [searchParams,setSearchParams]=useSearchParams();//current Route's query parameter's value can be fetched as well as updated.
  const location=useLocation(); // Current location's information can be fetched using this hook.

  useEffect(()=>{
    // console.log(searchParams.get("Page"));  
    // console.log(searchParams);
    console.log(location);
   
    const page=searchParams.get("page") ?? 1;
    console.log("Page is "+page);
 
    if(location.pathname.includes('tags')){
      // splitting the path and getting right most term.
      const tag=location.pathname.split('/').at(-1).replace("-"," ");
      fetchData(Number(page),tag)
    }
    else if(location.pathname.includes("category")){

      const category=location.pathname.split('/').at(-1).replace("-"," ");
      fetchData(Number(page),null,category);
    }

    else{
      // when we don't have tag as well as category inside the route then this call;
      fetchData(Number(page));
    }
  
    
    

   },[location.pathname,location.search])
  return (
    <div className=' '>
      <Header/>
       
       <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/blog/:id' element={<BlogsPage/>}/>
          <Route path='/category/:category' element={<CategoryPage/>}/>
          <Route path='/tags/:tag' element={<TagsPage/>}/>
       </Routes>
    </div>
  );
}

export default App;
