import {selector} from "recoil";
import {charactersValue, userValues} from "@/components/utills/atoms";


export const getUserValues = selector({
    key: 'getUserValues', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        const values = get(userValues);

        return `${values.name} - ${values.password}`;
    },
});
export const getUserValuesComplete = selector({
    key: 'getUserValuesCompelete', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        const values = get(userValues);

        return values
    },
});

export const getCharactersValues = selector({
    key: 'getUserValuesCompelete', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        const values = get(charactersValue);

        return values.list
    },
});
