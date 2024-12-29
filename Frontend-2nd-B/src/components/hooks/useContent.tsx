import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../Config";

export function useContent() {
    const [contents, setContents] = useState([]);

    

    function refresh() {
        try {
            axios
                .get(`${BACKEND_URL}/api/v1/content`, {
                    headers: {
                        "Authorization": localStorage.getItem("token"),
                    },
                })
                .then((response) => {
                    setContents(response.data.content);
                })
                .catch((error) => {
                    console.error("Error fetching content:", error);
                });
        } catch (error) {
            console.error("Unexpected error in refresh function:", error);
        }
    }
    
    
    

        
    useEffect(() =>{
        refresh()
        const interval = setInterval(() => {
            refresh()
        }, 10 * 1000)

        return () => {
            clearInterval(interval)
        }
        
    },[])
    
    return {contents, refresh };
}