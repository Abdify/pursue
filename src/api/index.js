import axios from 'axios';

const url = "https://shrouded-shore-52401.herokuapp.com/";

const API = axios.create({baseURL: "http://localhost:5000"});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const fetchCourse = () => API.get('/courses');
export const createCourse = (newCourse) => API.post('/courses', newCourse);

export const fetchChapter = () => API.get('/chapters');
export const createChapter = (newCourse) => API.post('/chapters', newCourse);

export const fetchTopics = () => API.get('/topics');
export const createTopic = (newCourse) => API.post('/topics', newCourse);





export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);