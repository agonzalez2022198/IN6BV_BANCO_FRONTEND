import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getUser as getAllUsers } from "../../services/api.jsx";

export const useGetUser = () => {
    const [userData, setUserData] = useState({ user: [], total: 0 });
    const [isFetching, setIsFetching] = useState(false);

    const getUserData = async () => {
        setIsFetching(true);
        const response = await getAllUsers();

        if (response.error) {
            toast.error(response.e?.response?.data || "Error occurred");
        } else {
            setUserData({
                user: response.data.users, 
                total: response.data.total,
            });
        }
        setIsFetching(false);
    };

    useEffect(() => {
        getUserData();
    }, []);

    return {
        getUser: getUserData,
        isFetching,
        userD: userData.user,
        howManyUser: userData.total,
    };
};
