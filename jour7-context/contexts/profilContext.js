// vous pouvez l'appel comme vous voulez 
// dans ce fichier que l'on va créer un state global 

import { createContext } from "react" // cette fonction qui permet de créer un état global

export const ProfilContext = createContext() ; // store 

export function ProfilContextProvider (props){ 
    // un composant qui va emballer l'intégralité de notre application 
    // rdv 10h50 @ toute suite !!
    // Provider => Fournir à l'ensemble de notre App le state global
    const profil = {
        nom : "Alain" ,
        email : "a@yahoo.fr",
        password : "123456",
        isLogged : false
    }
    return <ProfilContext.Provider value={profil} >
        {props.children}
        {/** children est une propriété spéciale de props 
         * permet d'afficher les composants à l'intérieur d'un autre 
         */}
    </ProfilContext.Provider>
}
