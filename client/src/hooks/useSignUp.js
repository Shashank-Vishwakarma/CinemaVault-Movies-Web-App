import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import useAuthStore from "../store/useAuthStore.js";

const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const { setUser } = useAuthStore();

    const signup = async ({ email, username, password }) => {
        setLoading(true);

        try {
            const response = await axios.post(
                'http://localhost:3000/api/v1/auth/signup',
                { email, username, password },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );

            setLoading(false);
            setUser(response.data?.user);
            toast.success("Sign Up successful");
        } catch (error) {
            toast.error("Error in sign up");
            console.log("Error in useSignUp hook : ", error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, signup };
}

export default useSignUp;