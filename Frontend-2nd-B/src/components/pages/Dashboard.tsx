
import { useEffect, useState } from 'react'
import Button from '../UI/Button'
import { Card } from '../UI/Card'
import { PlusIcon } from '../../icons/plusIcon'
import Sidebar from '../../components/UI/Sidebar'
import { useContent } from '../hooks/useContent'
import Header from '../Header'
import SearchBar from '../SearchBar'
import CreateContent from '../UI/CreateContent'

export function Dashboard({searchQuery, setSearchQuery}) {
      const [modalOpen, setModalOpen]= useState(false);
      
      const {contents, refresh, } = useContent();
      
      
      const handleDelete = (id: string) => {
      const updatedContents = contents.filter((content) => content._id !== id);
      refresh();
    }

      useEffect(()=>{
        refresh()
      }, [modalOpen])

     
  


  return (
   <div className=' bg-gray-200 ml-72 relative pl-8'>
      <Sidebar/>
        {/* <CreateContent open={modalOpen} onClose={()=>{
          setModalOpen(false);
        }}/>
        <div className='flex justify-between '> 
          <h1 className='text-2xl font-bold text-gray-800'>All Links</h1> 
        <div className='flex gap-4'>
        <Button onClick={()=>{
          setModalOpen(true)
        }} startIcon={<PlusIcon size={'md'}/>} size='sm'  variant='primary'text="Add Content"/>

        <div >
        <Button onClick={toggelSharing} startIcon={<ShareIcon size={'md'}/>} size='md' variant='secondary' text={isSharing ? 'End Sharing' :'Share Brain'}/>
        </div>
        </div> 
        </div> */} 

        <Header/>
        <SearchBar setSearchQuery={setSearchQuery}  />

        {contents.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-screen text-gray-800'>
            <CreateContent open={modalOpen} onClose={()=>{
                setModalOpen(false);
              }}/>
            <h2 className='text-3xl font-bold mb-4 -mt-20'>Wellcome to Brainly!</h2>
            <p className='text-lg mb-16 text-center'>
              Get started by adding your first content.
             <p> This dashboard helps you manage and organize everything in one
              place.
              </p>
            </p>
            <div className=' border border-purple-700 shadow-md shadow-purple-600 rounded-lg '>
            <Button onClick={() => {
              setModalOpen(true);
            }} transition='2' startIcon={<PlusIcon size='md'/>} size='lg' variant='primary' text='Add Content'/>
            </div>
          </div>
        ) : ( 
          <div id='cards' className='flex gap-6 pt-6  flex-wrap'>
          {contents.filter((content) =>
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

              )}
        </div>
        
        )}
      </div>
      
      
   
  )
}


