import axios from 'axios';
import { baseUrls } from '@/configs';
// import { store } from '@/scripts/redux/store';
// import { errorNotif } from '@/scripts/utills/notificationHandler';
// import { setSiteLoading, setToken } from '../redux/redux-toolkit/appSlices';

//==== SERVERS: kalantar, peiravi, akbarian, rezvani, server
export const getBaseUrl = (server = 'server') => {
    return baseUrls[server];
};
// config http services by axios
// yarn add axios or npm install axios is required
// axios.defaults.headers.common['Content-Type'] =
//     'application/x-www-form-urlencoded';
// axios.interceptors.request.use(
//     config => {
//         const notAllow = [
//             '/getCheapestFlights',
//             '/getFlights',
//             '/getCities',
//             '/createCaptcha',
//             '/getUserCredit',
//         ];
//         let allowLoading = true;
//         notAllow.forEach(action => {
//             if (config.url.search(action) > -1) {
//                 allowLoading = false;
//             }
//         });
//         if (allowLoading) {
//             store.dispatch(setSiteLoading(true));
//         }
//         return config;
//     },
//     error => {
//         // Loading.remove();
//         store.dispatch(setSiteLoading(false));
//         return Promise.reject(error);
//     },
// );
// axios.interceptors.response.use(
//     res => {
//         // Loading.remove();
//         const token = localStorage['token'];
//         const auth = localStorage['auth'];
//
//         store.dispatch(setSiteLoading(false));
//         const { app } = store.getState();
//         if (res?.data?.token && app?.user && app?.user?.user_info) {
//             store.dispatch(
//                 setToken({
//                     token: res.data.token,
//                     token_expires_at: res.data.token_expires_at,
//                 }),
//             );
//         }
//         if (!!token && !!auth) {
//             if (!res?.data.is_login) {
//                 localStorage.removeItem('auth');
//                 localStorage.removeItem('token');
//                 localStorage.removeItem('token_expires_at');
//                 // window.location.href = '/';
//             }
//         }
//         if (!res.data.is_login && !!token && !!auth) {
//         }
//         return res;
//     },
//     error => {
//         store.dispatch(setSiteLoading(false));
//         if (typeof error === 'object' && !!error.response) {
//             const { data, status } = error?.response;
//
//             const notAllow = ['/getFlightServices'];
//             let allowErrorMessage = true;
//             notAllow.forEach(action => {
//                 if (error?.config?.url?.search(action) > -1) {
//                     allowErrorMessage = false;
//                 }
//             });
//             if (allowErrorMessage) {
//                 if (data.status == 'error' || (status < 500 && data.errors)) {
//                     if (typeof data?.errors == 'object') {
//                         errorNotif(data?.errors?.error || data?.errors[0]);
//                     } else {
//                         data?.errors?.forEach(errorMessage => {
//                             errorNotif(errorMessage);
//                             // errorNotif({ description: errorMessage });
//                         });
//                     }
//                 }
//             }
//             if (status >= 500) {
//                 errorNotif('Server error!!');
//                 return Promise.reject(error);
//             } else {
//                 return 'client error';
//             }
//         } else {
//             errorNotif('Connection error!!');
//             return Promise.reject(error);
//         }
//     },
// );

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};

export const authCheck = () => {
    const { app, flight } = store.getState();
    const { locale } = app;
    const { clubMode } = flight;
    let _header = {};
    _header['user-type'] = localStorage['user-type'] || 'user';
    if (localStorage['token']) {
        const expireTime = !!localStorage['token_expires_at']
            ? localStorage['token_expires_at']
            : 0;
        if (expireTime) {
            const now = new Date().getTime();
            if (parseInt(expireTime) > now) {
                _header['Authorization'] = localStorage['token'];
            } else {
                localStorage.removeItem('auth');
                localStorage.removeItem('token');
                localStorage.removeItem('token_expires_at');
                window.location.href = '/';
            }
        } else {
            localStorage.removeItem('auth');
            localStorage.removeItem('token');
            localStorage.removeItem('token_expires_at');
            window.location.href = '/';
        }
    }
    if (localStorage['user-type']) {
        _header['user-type'] = localStorage['user-type'];
    }
    if (!!parseInt(clubMode)) _header['club-mode'] = 1;
    if (!!locale) {
        _header['lang'] = locale;
    } else {
        _header['lang'] = 'fa';
    }
    return _header;
};
