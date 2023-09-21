import {atom} from "recoil";

export const userValues = atom({
    key: 'userValues', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});
export const charactersValue = atom({
    key: 'charactersValue', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});