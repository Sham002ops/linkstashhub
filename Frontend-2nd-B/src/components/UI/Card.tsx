import { FacebookEmbed, InstagramEmbed, PinterestEmbed, XEmbed } from "react-social-media-embed";
import DeleteIcon from "../../icons/DeleteIcon";
import DocIcon from "../../icons/DocIcon";
import InstaIcon from "../../icons/InstaIcon";
import { ShareIcon } from  '../../icons/ShareIcon'
import { TwitterIcon } from "../../icons/TwitterIcon";
import YoutubeIcon from "../../icons/YoutubeIcon";
import DeleteContent from "./DeleteContent";
import FacebookIcon from "../../icons/facebookIcon";
import PinterestIcon from "../../icons/PinterestIcon";

 export interface CardProps {
    _id: string;
    title: string;
    tags: string[];
    link: string;
    type: "twitter" | "youtube"| "instagram" | "facebook" | "pinterest";
    onDelete: (id: string) => void;
}

export const Card = ({_id, onDelete,title, link,tags, type}: CardProps) =>{
    // const [content, setContent] = useState([]);
    const SmartIcon = () => {
        if (type === "youtube") return <YoutubeIcon size="lg" />;
        if (type === "twitter") return <TwitterIcon size="lg" />;
        if (type === "instagram") return <InstaIcon className=' w-6 h-6' />;
        if (type === "facebook") return <FacebookIcon />;
        if (type === "pinterest") return <PinterestIcon className=' w-6 h-6'/>;
        return <DocIcon size="md" />;
      };
    
    
    
        

        const handleDelete = async ()=> {
            const confermDelete = window.confirm("Are you sure you want to delete this content?")
            if(confermDelete){
                 const success = await DeleteContent(_id);
                           
            if(success !== undefined) {
                onDelete(_id)
            }
            }
        }

    return(
        <div>
            <div className="p-4 bg-white rounded-md  shadow shadow-purple-300 border-slate-400 border
            max-w-72 min-h-52 min-w-min ">
                 <div className="flex justify-between">
                    <div className="flex items-center text-md">
                        <div  className="text-gray-500 pr-2">
                            <SmartIcon/>
                            
                        </div>
                        {title}
                    </div>
                    <div className="flex items-center">
                        <div className="text-gray-500 pr-2">
                            <a href={link} target="_blank">
                                 <ShareIcon size="md"/>
                            </a>
                        </div>
                        <button onClick={handleDelete} className="text-gray-500 cursor-pointer pr-2 h-4  w-4  hover:text-red-600 hover:rounded-sm">
                            <DeleteIcon  size="md"/>
                        </button>
                    </div>
                 </div>
                
                <div className="pt-4 w-full rounded-lg overflow-hidden ">
                   {type === "youtube" &&  <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                   {type === "twitter" && <XEmbed url={link} width={325} />}

                   {type === "instagram" && <div className=""> <InstagramEmbed
                    url={link} width={320} height={400} /> 
                    
                            </div>
                        }
                   {type === "facebook" && <FacebookEmbed
                            url={link}/>
                        }
                   {type === "pinterest" && <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <PinterestEmbed 
                                url={link}
                                width={345}
                                height={467}
                            />
                            </div>
                        }

                </div> 
                <div className="mt-4">
                    <h1 className="text-gray-800 text-sm font-bold">Tags</h1>
                    <div className="flex gap-2 flex-wrap mt-2">
                        {(tags || []).map((tag, index) => (
                            <span
                                key={index}
                                className="bg-purple-200 text-purple-700 px-2 py-1 rounded-md"
                            >
                                {tag}
                            </span>
                        )) || <span>No tags available</span>}
                    </div>
                </div>
            </div>
        </div>
    )
} 