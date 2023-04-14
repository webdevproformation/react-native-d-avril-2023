import { StyleSheet, Text, View, ScrollView , Button } from 'react-native'
import React , { useEffect , useState } from 'react'
const Articles = ({db, useForceUpdate}) => {
    const [ update , setUpdate ] = useForceUpdate()
    const [articles , setArticles] = useState([])
    useEffect( function(){
        db.transaction(function(tx){
            // https://www.sqlite.org/lang_datefunc.html
            tx.executeSql(`SELECT id , titre , contenu , strftime('%d/%m/%Y' , dt_creation ) AS date FROM articles ;` ,
                    [] ,
                    function( transact, resultat){ 
                        // console.log( resultat.rows._array )
                        setArticles(resultat.rows._array)
                    },
                    function( transact , err){ 
                        console.log("ERREUR lors du SELECT" , err)
                    }
            )
        })
    } , [articles]);

  return (
    <ScrollView>
        <View style={styles.box}>
        <Text>Liste des articles en base de données</Text>
            { articles.map(function(article){
                return <View key={article.id} style={styles.article}>
                        <Text>{ article.titre }</Text>
                        <Text>{ article.contenu }</Text>
                        <Text>{ article.date }</Text>
                        <View style={styles.actions}>
                            <Button title="modifier" onPress={ () => {} } color="orange"/>
                            <Button title="supprimer" onPress={ () => {} } color="red"/>
                        </View>
                    </View>
            } ) }
        </View>
    </ScrollView>
  )
}
export default Articles
const styles = StyleSheet.create({
    box : {padding : 10 },
    scroll:{ flex : 1 },
    article : { borderBottomWidth : 1 , borderBottomColor : "black" , paddingBottom : 10 , marginBottom : 10} , 
    actions : { flexDirection : "row" , justifyContent: "space-evenly" , marginVertical : 10}
})