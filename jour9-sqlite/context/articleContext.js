import {createContext, useState} from "react"

export const ArticleContext = createContext();

export function ArticleContextProvider(props){

    const [articleAModifier , setArticleAModifier] = useState({titre : "", contenu : "" , id : 0})

    function modifier(article){
        setArticleAModifier(article)
    }

    return <ArticleContext.Provider value={{modifier , articleAModifier}}>
        {props.children}
    </ArticleContext.Provider>

}