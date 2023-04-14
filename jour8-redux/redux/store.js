import { configureStore } from "@reduxjs/toolkit"

function reducerNb (state = 200 , {type , payload}){
    switch(type){
        case "AUGMENTER" :
            return state + 1 ; 
        case "AUGMENTER_PLUS_CINQ" :
                return state + 5 ; 
        case "AUGMENTER_PLUS_CINQ_BIS" :
                    return state + payload ; 
        default :
            return state ; 
    }
}

const profil = {login : "a" , isLogged : false }

function reducerProfil (state = profil , action){
    switch(action.type){
        case "LOGIN" :
            return { ...state , isLogged : true}
        case "LOGOUT" :
            return { ...state , isLogged : false}
        default :
            return state 
    }
}

const reducer = { 
    reducerNb  : reducerNb, 
    reducerProfil : reducerProfil
}
// combineReducers({}) => createStore()


export const store = configureStore({reducer}) // créer mon store 
 