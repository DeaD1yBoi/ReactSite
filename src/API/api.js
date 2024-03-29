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

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    logInAPI(email, password, rememberMe = false, captcha) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data);
    },
    logOutAPI() {
        return instance.delete('auth/login')
            .then(response => response.data);
    },
    getCaptcha() {
        return instance.get('security/get-captcha-url')
            .then(response => response.data);
    }
}
export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/${userID}`).then(response => {
            return (response.data)
        })
    },
    updateContacts (profile) {
        return instance.put(`profile`, profile)
            .then(response => response.data)
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
},
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response=>response.data)
    },
}

