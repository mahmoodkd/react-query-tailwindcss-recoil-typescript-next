import React from "react";
// import {useRecoilState, useRecoilValue} from "recoil";
// import {charactersValue} from "@/components/utills/atoms";
import {useQuery,} from 'react-query'
import {getCharacters} from "@/scripts/api/services"

interface CharacterItemType {
    name:string;
    description:string;
    mainMedia:string
}

function Characters() {
    // const queryClient = useQueryClient()
    // Queries
    const query = useQuery('characters', getCharacters)
// Mutations
//     const mutation = useMutation(getCharacters, {
//         onSuccess: (res) => {
//             // Invalidate and refetch
//             console.log({res})
//             queryClient.invalidateQueries('characters')
//         },
//     })
    console.log({query})
    return (
        <div className="row">
            <h1>Character Page</h1>
            {query?.data?.data?.map((item:CharacterItemType, index) => (
                <div key={`character_item_${index}`} className="max-w-sm  rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={item.mainMedia} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{item.name}</div>
                        <p className="text-white-700 text-justify">
                            {item.description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                                <span
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Characters