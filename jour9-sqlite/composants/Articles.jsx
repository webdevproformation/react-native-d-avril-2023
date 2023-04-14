import { StyleSheet, Text, View, ScrollView , FlatList } from 'react-native'
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
                return <View key={article.id}>
                        <Text>{ article.titre }</Text>
                        <Text>{ article.contenu }</Text>
                        <Text>{ article.date }</Text>
                    </View>
            } ) }
        </View>
    </ScrollView>
  )
}
export default Articles
const styles = StyleSheet.create({
    box : {padding : 10},
    scroll:{ flex : 1 }
})