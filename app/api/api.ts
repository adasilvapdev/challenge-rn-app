import axios from 'axios';
const apiBaseURL = 'https://fakestoreapi.com'

export const GET = (url: string) => {
    return axios.get(`${apiBaseURL}/${url}`);
}

// const headers = 'some headers';
export const POST = (url: string, data: any) => {
    return axios(`${apiBaseURL}/${url}`, {
        method: 'POST',
        // headers,
        data,
    });
}

// const headers = 'some headers';
export const PUT = (url: string, data: any) => {
    return axios(`${apiBaseURL}/${url}`, {
        method: 'PUT',
        // headers,
        data,
    });
}

// const headers = 'some headers';
export const PATCH = (url: string, data: any) => {
    return axios(`${apiBaseURL}/${url}`, {
        method: 'PATCH',
        // headers,
        data,
    });
}

// const headers = 'some headers';
export const DELETE = (url: string) => {
    return axios.delete(`${apiBaseURL}/${url}`, {
        // headers
    });
}