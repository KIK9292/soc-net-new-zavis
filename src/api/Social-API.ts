import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': 'fdf6f163-b057-4eee-9b85-ec1216c43810'
    }
})
export type UsersResponseType={
    items:UserItemsResponseType[]
    totalCount: number
    error: null|string
}
export type UserItemsResponseType={
    name: string
    id: number
    photos: UserPhotosResponseType
    status: null|string
    followed: boolean
}
export type UserPhotosResponseType={
    small: null|string
    large: null|string
}
export type RequestUpdateMyProfileType={
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts:RequestUpdateMyProfileContactsType
}
export type RequestUpdateMyProfileContactsType={
    github: null|string
    vk: null|string
    facebook: null|string
    instagram: null|string
    twitter: null|string
    website: null|string
    youtube: null|string
    mainLink: null|string
}
export type ResponseUpdateMyProfileType={
    resultCode: number
    messages: [string],
    data: {}
}
export const SocialAPI={
    getUsers(){
        return instance.get<UsersResponseType>('/users');
    },
    updateMyProfile(model:RequestUpdateMyProfileType){
        return instance.put<ResponseUpdateMyProfileType,AxiosResponse<ResponseUpdateMyProfileType>,RequestUpdateMyProfileType>('/profile',model)
    },
    updateMyProfilePhoto(){
        return instance.put('/profile/photo')
    }

}