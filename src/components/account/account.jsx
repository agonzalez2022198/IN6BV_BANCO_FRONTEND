import React from "react";
import { useGetUser } from "../../shared/hooks/useGetUser";
import "./account.css";

export const Account = () => {
    const { user, loading, error } = useGetUser();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading user data.</div>;
    }

    return (
        <div className="account-container">
            <div className="account-card">
                <div className="account-avatar">
                    <img src={user.avatar} alt="User Avatar" />
                </div>
                <div className="account-info">
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Username: {user.username}</p>
                </div>
            </div>
        </div>
    );
};
