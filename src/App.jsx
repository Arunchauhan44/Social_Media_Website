
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';
import { useState } from 'react';
import PostListProvider from './Components/Store/Post-List-Store';



function App() {

  const [SelectedTab, setSelectedTab] = useState("Home");
  

  return (
    <PostListProvider value = {{SelectedTab, setSelectedTab }}> 
   
  <div className='Main_Container'> 
     <Sidebar SelectedTab = {SelectedTab} setSelectedTab ={ setSelectedTab}  />
     <div className='Content-Area'>
     <Navbar/>
    {
      SelectedTab === "Home" ? ( <PostList/>) : ( <CreatePost/>)
    }
     <Footer/>
     </div>
    </div> 
    </PostListProvider>
   
  )
}

export default App
