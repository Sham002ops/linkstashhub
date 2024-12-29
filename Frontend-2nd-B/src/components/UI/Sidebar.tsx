import React from 'react'
import { SidebarItems } from './SidebarItem'
import { TwitterIcon } from '../../icons/TwitterIcon'
// import YoutubeIcon from '../../icons/YoutubeIcon'
import BrainIcon from '../../icons/BrainIcon'
import { Link } from 'react-router-dom'
// import ContentPage from '../pages/ContentPage'
import YoutubeIcon from '../../icons/YoutubeIcon'
import InstaIcon from '../../icons/InstaIcon'
import FacebookIcon from '../../icons/facebookIcon'


const Sidebar = () => {

   
  return <div className='h-screen bg-white border-r w-72 fixed border-2 left-0 top-0 pl-4'>
        <h1 className='flex text-3xl items-center pt-3 font-bold text-gray-700'>
            <div className='text-purple-700 pr-2'>
            <BrainIcon width="50" height="50" className="custom-class " />
            </div>
            Brainly
            
        </h1>
        <div className=' pt-8 pl-4 gap-4 '>
              <div className='p-2'>
                <Link to="/content/twitter">
                <SidebarItems  text='Twitter' icon={<TwitterIcon size='lg'/>}/>
                </Link>
              </div>
              <div className='p-2'>
                <Link to="/content/youtube">
                <SidebarItems text='Youtube' icon={<YoutubeIcon size='lg'/>}/>
                </Link>
              </div>
              <div className='p-2'>
                <Link to="/content/instagram">
                <SidebarItems text='Instagram' icon={<InstaIcon />}/>
                </Link>
              </div>
              <div className='p-2'>
                <Link to="/content/facebook">
                <SidebarItems text='Facebook' icon={<FacebookIcon/>}/>
                </Link>
              </div>
        </div>
        
        
  </div>
}

export default Sidebar