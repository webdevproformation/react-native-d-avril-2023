import { Text , View} from "react-native"

export function Boucle (){

    const etudiants = [ 
        {nom : "Alain" , age : 20},
        {nom : "Zorro" , age : 12},
        {nom : "Céline" , age : 35}
    ]; 

    return (
        <View>
            <Text>{etudiants[0].nom } a {etudiants[0].age} ans</Text>
            <Text>faire une boucle</Text>
            {etudiants.map(function(item, index){
                return <Text key={index}>{item.nom}</Text>
            })}
            {[<Text key={1}>{etudiants[0].nom}</Text>, <Text>{etudiants[1].nom}</Text>]}
        </View>
    )
}