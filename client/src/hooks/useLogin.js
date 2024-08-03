import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import useAuthStore from "../store/useAuthStore.js";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setUser } = useAuthStore();

    const login = async ({ email, password }) => {
        setLoading(true);

        try {
            const response = await axios.post(
                'http://localhost:3000/api/v1/auth/login',
                { email, password },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );

            setLoading(false);
            setUser(response?.user);
            toast.success("Login Up successful");
        } catch (error) {
            toast.error("Error in useLogin hook : ", error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, login };
}

export default useLogin;