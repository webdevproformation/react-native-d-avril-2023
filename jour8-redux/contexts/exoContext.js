import { createContext , useReducer } from "react";
function reducer(state, action){
    switch(action){
        case "ZOOM":
            return {width: 120, height :120}
        case "DEZOOM":
            return {width: 80, height :80}
        case "HIDE":
            return {width: 0, height :0}
        case "RESET":
            return {width: 100, height :100 }
        case "PERSONNALISE":
              return {width: 120, height :200}
        default :
            return state 
    }
}
export const ExoContext = createContext()
export function ExoContextProvider(props){
    const [ taille , dispatch] = useReducer( reducer , {width: 100, height :100})
    return <ExoContext.Provider value={{ taille , dispatch }}>
        {props.children}
    </ExoContext.Provider>
}
// ça ressemble beaucoup à Redux 