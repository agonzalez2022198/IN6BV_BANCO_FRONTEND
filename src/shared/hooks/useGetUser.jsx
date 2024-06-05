import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getUserById as datesUser } from "../../services/api.jsx";

export const useGetUser = () => {
    const [userData, setUserData] = useState({});

    const getUser = async (isLogged = false) => {
        const response = await datesUser();

        if (response.error) {
            return toast.error(
                response.e?.response?.data || "Error occurred"
            );
        }

        if (!isLogged) {
            setUserData({
                user: response.data.user,
                total: response.data.total,
            });
        }
    };


    useEffect(() => {
        getUser();
    }, []);

    

    return {
        getUser,
        isFetching: !Boolean(userData.user.length),
        userD: userData.user,
        howManyUser: userData.total,
    };
}