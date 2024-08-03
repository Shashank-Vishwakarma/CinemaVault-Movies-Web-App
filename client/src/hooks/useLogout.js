import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import useAuthStore from "../store/useAuthStore.js";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setUser } = useAuthStore();

    const logout = async () => {
        setLoading(true);

        try {
            await axios.get(
                'http://localhost:3000/api/v1/auth/logout',
                { withCredentials: true }
            );

            setLoading(false);
            setUser(null);
            toast.success("Logout successful");
        } catch (error) {
            toast.error("Error in useLogout hook : ", error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, logout };
}

export default useLogout;