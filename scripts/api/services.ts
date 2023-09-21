import http, {getBaseUrl} from "./httpServices"
import controller from "./controller.json";
import action from "./api.json"


export function registerMessagePost(bodyRequest = {}) {
    // const auth = authCheck();
    return http.post(
        getBaseUrl() + controller.website + action.registerMessage,
        bodyRequest,
        {
            headers: {  'Content-Type': 'application/json' },
            // headers: { ...auth, 'Content-Type': 'application/json' },
            // onDownloadProgress: event => onDownloadHandler(event),
            // onUploadProgress: event => onUploadHandler(event),
        },
    );
}

export function sendRegisterPlacePost(bodyRequest = {}) {
    // const auth = authCheck();
    return http.post(
        getBaseUrl() + controller.gamePlace + action.register,
        bodyRequest,
        {
            headers: {  'Content-Type': 'application/json' },
            // headers: { ...auth, 'Content-Type': 'application/json' },
            // onDownloadProgress: event => onDownloadHandler(event),
            // onUploadProgress: event => onUploadHandler(event),
        },
    );
}

export function verifyCodePost(bodyRequest = {}) {
    // const auth = authCheck();
    return http.post(
        getBaseUrl() + controller.gamePlace + action.verifyCode,
        bodyRequest,
        {
            headers: {  'Content-Type': 'application/json' },
            // headers: { ...auth, 'Content-Type': 'application/json' },
            // onDownloadProgress: event => onDownloadHandler(event),
            // onUploadProgress: event => onUploadHandler(event),
        },
    );
}

export function getCharacters(bodyRequest = {}) {
    // const auth = authCheck();
    return http.get(
        getBaseUrl() + controller.website + action.characters,
        {
            headers: {  'Content-Type': 'application/json' },
            // headers: { ...auth, 'Content-Type': 'application/json' },
            // onDownloadProgress: event => onDownloadHandler(event),
            // onUploadProgress: event => onUploadHandler(event),
        },
    );
}