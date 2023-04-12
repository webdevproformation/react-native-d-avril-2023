import { FlatList, StyleSheet, Text, View , ScrollView , Image , Button } from 'react-native'
import React , {useEffect , useState} from 'react'

const Accueil = () => {
  const [liste, setListe] = useState([])

  useEffect( function(){
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(reponse => reponse.json())
      .then(data => setListe(data.drinks))
  } , [])

  return (
    <View>
      <Text>Accueil</Text>
        <ScrollView>
          <View style={styles.resultats}>
            {liste.map(function(item , key){
              return <View style={styles.cocktail} key={key}>
                <Text>{item.strDrink}</Text>
                <Image source={{ uri : item.strDrinkThumb , width : "100%", height : 150 }} style={styles.img}/>
                <Button onPress={() => {}} title="ajouter" />
              </View>
            })}
          </View>
        </ScrollView>
    </View>
  )
}

export default Accueil

const styles = StyleSheet.create({
  resultats : { flexDirection : "row" , flexWrap : "wrap" , justifyContent : "space-between"},
  cocktail : { width : "49%",marginBottom : 10}, 
  img : { marginBottom: 5 }
})
