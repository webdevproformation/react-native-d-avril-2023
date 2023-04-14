import {createContext, useState} from "react"

export const ArticleContext = createContext();

export function ArticleContextProvider(props){

    const [articleAModifier , setArticleAModifier] = useState({titre : "", contenu : "" , id : 0})

    function modifier(article){
        setArticleAModifier(article)
    }
    function viderArticle(){
        setArticleAModifier({titre : "", contenu : "" , id : 0})
    }

    return <ArticleContext.Provider value={{modifier , articleAModifier , viderArticle}}>
        {props.children}
    </ArticleContext.Provider>

}