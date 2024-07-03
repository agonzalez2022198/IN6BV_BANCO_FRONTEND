import axios from "axios";


const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/bank/v1/',
    timeout: 5000
});


apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user')

        if (userDetails) {
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        return Promise.reject(e)
    }
);

//Users

export const register = async (data) => {
    try {
        return await apiClient.post('/user/addUser', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}


export const getUserById = async (id) => {
    try {
        return await apiClient.get('/user/', id);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}


export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}


export const getUser = async () => {
    try {
        return await apiClient.get('user/');
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}


export const addTransfer = async ({ account, amount, comment }) => {
    try {
        return await apiClient.post('/transfer', { account, amount, comment });
    } catch (e) {
        return {
            error: true,
            e,
        };
    }
};