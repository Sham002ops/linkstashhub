import React, { useRef, useState } from 'react'
import CloseIcon from '../../icons/CloseIcon'
import Button from './Button'
import { Input } from './InputBox'
import axios from 'axios'
import { BACKEND_URL } from '../../Config'
import { useContent } from '../hooks/useContent'
import TwitterImg  from '../../assets/twitterSearch.png'
import  YtImg from '../../assets/ytSearch.png'

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter",
    Instagram ="instagram",
    Facebook = "facebook",
    Pinterest = "pinterest",
    
}

const CreateContent = ({open, onClose} ) => {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube);
    const [tags, setTags] = useState<string[]>([]); 
    const [tagInput, setTagInput] = useState<string>("");

    const {refresh} = useContent()

    const addTag = () => {
        if (tagInput.trim() && !tags.includes(tagInput)) {
            setTags([...tags, tagInput.trim()]);
            setTagInput(""); 
        }
    };

    const removeTag = (tag: string) => {
        setTags(tags.filter(t => t !== tag));
    };


  async  function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            title,
            type: type,
            tags
            
           
        }, {
            headers: {
                "Authorization" : localStorage.getItem("token")
            }
        })

        refresh()
        onClose();
    }


    


  return <div>
        {open && <div>
                <div className=' backdrop-blur bg-white/10  h-screen w-screen  fixed top-0 left-0 flex justify-center'>   
                </div>
                <div className=' h-screen w-screen  fixed top-0 left-0 flex justify-center '>
                <div className='flex flex-col  justify-center'>
               <span className='bg-white border border-purple-700 shadow-md shadow-purple-700  p-8 w-full rounded-md'>
               <div className='flex justify-end'>
                    <div className='cursor-pointer' onClick={onClose}>
                        <CloseIcon size='lg'/>
                    </div>    
               </div>
               <div className='flex gap-8'>
               <div className=''>
               <h4 className='text-lg p-1 font-bold  text-gray-800'>Add Title and Link</h4>
               <div className='mr-2 ml-2  ' >
               <div className='flex justify-center pb-2'>
                <Input size='md' reference={titleRef} placeholder={"Title"}/></div> 
               <div className='flex justify-center'>
                <Input reference={linkRef} size='md' placeholder={"Link"}/></div> 
               </div>



               <div className="flex flex-col  mt-4">
                                        <h1 className="text-gray-800 text-lg font-bold">Tags</h1>
                                        <div className="flex gap-2 mt-2 pl-14">
                                            <input
                                                type="text"
                                                value={tagInput}
                                                onChange={(e) => setTagInput(e.target.value.toLowerCase())}
                                                placeholder="Enter tag"
                                                className="border rounded-md p-2"
                                            />
                                            <Button
                                                text="Add Tag"
                                                onClick={addTag}
                                                variant="primary"
                                                size="sm"
                                            />
                                        </div>
                                        <div className="flex gap-2 mt-2 flex-wrap">
                                            {tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-purple-200 text-purple-700 px-2 py-1 rounded-md flex items-center gap-1"
                                                >
                                                    {tag}
                                                    <button onClick={() => removeTag(tag)}>×</button>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
               
               
               
               <div className=' mt-4'>
                <h1 className='text-gray-800 text-lg font-bold'>Type</h1>
                    <div className=" justify-center w-96 flex flex-wrap gap-2  p-2 ">
                        
                        <Button size='md' text="Youtube" variant={type === ContentType.Youtube ?
                        "primary" : "secondary"} onClick={() => {
                            setType(ContentType.Youtube)
                        }}/>
                        <Button size='md' text="Twitter" variant={type === ContentType.Twitter ?
                        "primary" : "secondary"} onClick={() => {
                            setType(ContentType.Twitter)
                        }}/>
                        <Button size='md' text="Instagram" variant={type === ContentType.Instagram ?
                        "primary" : "secondary"} onClick={() => {
                            setType(ContentType.Instagram)
                        }}/>
                        <Button size='md' text="Facebook" variant={type === ContentType.Facebook ?
                        "primary" : "secondary"} onClick={() => {
                            setType(ContentType.Facebook)
                        }}/>
                        <Button size='md' text="Pinterest" variant={type === ContentType.Pinterest ?
                        "primary" : "secondary"} onClick={() => {
                            setType(ContentType.Pinterest)
                        }}/>
                    </div> 
               </div>
                <div className='flex justify-center p-4 '>
                <Button onClick={addContent} variant='primary'size='md' transition='1' text='Submit'/>
                </div>
                </div>
                <div className='justify-center h-60 '>
                <div className=' p-4 border-2 w-96 rounded-md bg-purple-50 text-purple-700 border-purple-700'><h3 className='text-sm font-bold'>Important Note:</h3>
                <h4 className=' text-sm'>Please ensure that you only use website URLs 
                <h1>(e.g., https://www.example.com) when adding links to our platform. <h1 className='text-pink-600 font-bold'>For IG use Copy link of website</h1> </h1>
                <h4>Mobile app shared URLs (e.g., example://) will not work.</h4></h4></div>
                <div className=' gap-4 mt-2 pl-12'>
                <img className="h-34 rounded-md w-72 pb-2 border-2 border-gray-400 " src={TwitterImg} alt="Twitter" />
                <img className="h-34 rounded-md w-72 mt-2 border-2 border-gray-400 " src={YtImg} alt="YouTube" />
                </div>
               
                </div>
                </div>
           </span> 
        </div>
                </div>
                

            </div>} 
        </div>
    }

    
export default CreateContent 