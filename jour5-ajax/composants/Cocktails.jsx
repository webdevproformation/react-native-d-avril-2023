import { StyleSheet, Text, View , TextInput , Button , Image } from 'react-native'
import React , {useState , useEffect} from 'react'
import { FlatList } from 'react-native';

const Cocktails = () => {
  const [recherche , setRecherche] = useState("")
  const [resultats , setResultats] = useState([]);

    // exécutés lors du lancement de l'app
    useEffect( function(){
        setRecherche("mojito")
    }, [])

    useEffect(function(){
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito")
        // requete AJAX = GET
        .then(reponse => reponse.json())
        // réponse de la requête ajax { status = 200 , headerReponse : {} , data : "{}" }
        .then(data => setResultats(data.drinks)); 
        // data les valeurs attendues au format javascript collection 
    } , [])

    useEffect(function(){
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+ recherche)
        // requete AJAX = GET
        .then(reponse => reponse.json())
        // réponse de la requête ajax { status = 200 , headerReponse : {} , data : "{}" }
        .then(data => {
            if(data.drinks.length > 0){
                setResultats(data.drinks)
            }else{
                setResultats([])
            }
        }); 
        // data les valeurs attendues au format javascript collection 
    } , [recherche])
   

  // hook useState() useEffect() => OBLIGATOIREMENT DANS LE COMPOSANT
  // ils ne doivent pas être utilisés dans la vue 

  return (
    <View style={styles.box}>
        <View style={ styles.search }>
            <TextInput 
                placeholder='rechercher' 
                value={recherche}
                onChangeText={(nomCocktail) => {setRecherche(nomCocktail)}} 
                style={styles.input} 
                keyboardType="default"/>
            <Button title="rechercher" onPress={() => { console.log(recherche) }} />
        </View>
        <View style={styles.resultat}>
            { resultats.length === 0 
                ?   
                <Text>utiliser le formulaire ci dessus pour avoir une liste de cocktails</Text>
                : 
                <FlatList 
                    data={resultats}
                    renderItem={ ({item}) => <View style={styles.espace}>
                        <Image source={{ uri : item.strDrinkThumb , width: "100%", height : 300 }}/>
                        <Text style={styles.titre}>{ item.strDrink }</Text>
                        <Text>{ item.strInstructions } </Text>
                    </View>}
                    keyExtractor={item => item.idDrink}
                />
            }
             {/** au lieu de  <Text>{JSON.stringify(item)}</Text>
              * Image coktails strDrinkThumb
              * Text nom cocktail strDrink
              * Text description strInstructions
              */}
        </View>
    </View>
  )
}

export default Cocktails

const styles = StyleSheet.create({
    box: { paddingHorizontal : 10},
    search : { flexDirection: "row" },
    input:{ padding : 5,  borderColor : "black", borderWidth : 1 , marginRight :10,   flex:1},
    resultat : {  marginTop : 10 },
    espace : {marginBottom : 30},
    titre : { fontSize : 20 }
})