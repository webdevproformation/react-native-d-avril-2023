import {createContext} from "react"

export const ArticleContext = createContext();

export function ArticleContextProvider(props){

    function modifier(article){
        console.log(article)
    }

    return <ArticleContext.Provider value={{modifier}}>
        {props.children}
    </ArticleContext.Provider>

}