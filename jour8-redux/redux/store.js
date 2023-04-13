import { configureStore } from "@reduxjs/toolkit"

function reducer (state = 200 , action){
    switch(action.type){
        case "AUGMENTER" :
            return state + 1 ; 
        default :
            return state ; 
    }
}

export const store = configureStore({ reducer }) // créer mon store 

// => 15h45 bon café @ toute suite !!!!
 