import { useEffect, useState } from "react";
import useContentStore from "../store/useContentStore"
import axios from "axios";

const useGetTrendingContent = () => {
    const [trendingContent, setTrendingContent] = useState(null);
    const { contentType } = useContentStore();

    useEffect(() => {
        const getTrendingContent = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/v1/${contentType}/trending`,
                    {
                        withCredentials: true
                    }
                );

                setTrendingContent(response.data?.content);
            } catch (error) {
                console.log("error in useGetTrendingContent");
            }
        }

        getTrendingContent();
    }, [contentType]);

    return { trendingContent };
}

export default useGetTrendingContent;