import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLITE from "expo-sqlite"
import {useEffect} from "react"

const db = SQLITE.openDatabase("demo.sqlite");

export default function App() {

  useEffect( function(){

    db.transaction(function(tx){
      tx.executeSql(`CREATE TABLE IF NOT EXISTS articles (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    titre VARCHAR(200),
                    contenu TEXT ,
                    dt_creation DATETIME DEFAULT CURRENT_TIMESTAMP
                  )`,
                    [],
                    function(transact, resultat){ console.log("table article créé") },
                    function(transact , err){ console.log("erreur lors de la création") })
    })

  } , [])

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Utiliser SQLITE dans React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop : 30
  },
  titre:{
    textAlign : "center",
    fontSize : 20
  }
});
