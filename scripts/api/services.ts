import http, {getBaseUrl} from "./httpServices"
import controller from "./controller.json";
import action from "./api.json"


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
