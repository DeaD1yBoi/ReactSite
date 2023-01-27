import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'b19482db-2c96-4757-a6c8-ef810ccc3598'}
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    }
}

export const followActions = {
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}

export const headerAPI = {
    authMe() {
        return instance.get('auth/me')
            .then(response => {
                return response.data
            })
    }
}
export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/${userID}`).then(response => {
            return (response.data)
        })
    },
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`,{status: status});
    }
}
