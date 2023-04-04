import { Text , View } from "react-native"


export function deuxieme(){
    return (
        <View>
            <Text>premier ligne</Text>
            <Text>deuxieme ligne</Text>
            {/** si vous avez plusieurs composants frères
             * <Text>
             * <Text>
             * => erreur 
             * il FAUT OBLIGATOIREMENT avoir un seule composant parent comme racine d'une composant
             */}
        </View>
    )
}