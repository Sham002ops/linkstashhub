import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { useContent } from '../hooks/useContent';
import { Card } from '../UI/Card';
import { BACKEND_URL } from '../../Config';
import Sidebar from '../UI/Sidebar';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../hooks/useContent';
import SearchBar from '../SearchBar';


const ContentPage = ({type, searchQuery, setSearchQuery}) => {
    const [content, setContent] = useState([]);
    const [loading, setLoading ] = useState(true);
    const {contents,refresh} = useContent();
    const navigate = useNavigate();
    // const {contents} = useContent();

    const handleDelete = async (id: string) => {
      try {
          const updatedContents = contents.filter((content) => content._id !== id);
          setContent(updatedContents); 
          refresh(); 
      } catch (error) {
          console.error("Error deleting content:", error);
      }
  };
  

  useEffect(() => {
    const fetchContent = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/v1/content/type/${type}`, {
                headers: {
                    "Authorization": localStorage.getItem("token"),
                },
            });
            setContent(response.data.content);
        } catch (error) {
            console.error("Error fetching content:", error);
        } finally {
            setLoading(false);
        }
    };
    fetchContent();
}, [type]);



  if(loading){
     return <div>Loading...</div>;
  }

  const contentHeaders = {
    youtube: "YouTube Content",
    twitter: "Twitter Content",
    instagram: "Instagram Content",
    facebook: " Facebook Content",
  };

  return (

    <div className=' h-40 bg-gray-200 '>
      <Sidebar/> 
      <div className=' justify-between overflow-hidden  relative ml-72 '> 
        <div className=' flex items-center'>
          <h2 className="text-3xl font-bold md-4 p-8 text-purple-700">
            {contentHeaders[type] || "Default Content"}
          </h2>
          <div className=' bg-gray-200 pl-96 ml-10  '>
       <SearchBar setSearchQuery={setSearchQuery}  />
       </div>
       </div>
       </div>
      <div className=' relative ml-72 pl-8 bg-gray-200 min-h-screen overflow-auto'>
       <div className='flex flex-wrap h-40 gap-12'>
    {(() => {
        try {
            return content.filter((content) =>
              content.tags.some((tag) =>
                tag.includes(searchQuery.toLowerCase())
              )
            ).map(({_id,type,tags, link, title}) => <Card 
          key={_id}
          _id={_id}
          tags={tags}
          type={type}
          link={link}
          title={title}
          
          onDelete={handleDelete}
          />

            )
        } catch (error) {
            console.error("Error rendering content:", error);
            return <div>Error loading content cards</div>;
        }
    })()}
</div>


      </div>
      <div className='bg-gray-200  h-24  relative ml-72 pt-10 '>
      <div className=" flex justify-center items-center ">
                    <Button onClick={()=>{
                                    navigate('/dashboard')
                        }} size='sm'  variant='primary'text="Go to Dashboard"/>
            </div>
           
      </div>
    </div>
  )
}

export default ContentPage