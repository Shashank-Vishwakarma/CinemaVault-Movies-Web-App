import { useEffect, useState } from "react";
import useContentStore from "../store/useContentStore.js";
import axios from "axios";

const useGetContentByCategory = (category) => {
    const [content, setContent] = useState([]);
    const { contentType } = useContentStore();

    useEffect(() => {
        const getContent = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/v1/${contentType}/${category}`,
                    { withCredentials: true }
                );
                setContent(response.data?.content);
            } catch (error) {
                console.log("Error in useGetContentByCategory: ", error.message);
            }
        };

        getContent();
    }, [contentType, category]);

    return { content };
}

export default useGetContentByCategory;