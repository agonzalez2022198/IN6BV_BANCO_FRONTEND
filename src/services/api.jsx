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
export const getAccountUser = async () => {
    try {
        const response = await apiClient.get('/account/bank-accounts');
        return response.data; 
    } catch (error) {
        throw error;
    }
};


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
      const response = await apiClient.get(`/user/${id}`);
      return response.data; 
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


export const addTransfer = async (data) => {
    try {
        return await apiClient.post('/deposito/depo', data);
    } catch (e) {
        console.error('Error in API call:', e.response ? e.response.data : e.message);
        return {
            error: true,
            e
        }
    }
}


export const getTransfer = async () => {
    try {
        return await apiClient.get('/deposito/')
    }catch(e){  
        return {
            error: true,
            e
        }
    }
}

//Account

export const addAccount = async (data) => {
    try {
        return await apiClient.post("/account/acc", data);
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}


export const EditUser = async (data) => {
    try {
        return await apiClient.put("/user/put", data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

