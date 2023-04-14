import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './composants/Form';
import * as SQLITE from "expo-sqlite"; 
import { useEffect , useState } from "react"


const db = SQLITE.openDatabase("db.sqlite");

export default function App() {
  const [resultats , setResultats] = useState([]);

  useEffect( function(){
    db.transaction(function(tx){
      tx.executeSql(` 
        CREATE TABLE IF NOT EXISTS todos (
          id INTEGER PRIMARY KEY AUTOINCREMENT ,
          text VARCHAR(255),
          status BOOLEAN
        )
       ` , 
       [] ,
       function(transaction , result){ console.log("table créé success") },
       function (transaction , err){ console.log("erreur creation table")})
    })
  }, [])

  useEffect( function(){
    db.transaction(function(tx){
      tx.executeSql(` 
        SELECT * FROM todos 
       ` , 
       [] ,
       function(transaction , result){ setResultats(result.rows._array) },
       function (transaction , err){ console.log("erreur creation table")})
    })
  }, [resultats])

  function changer(item){
    db.transaction(function(tx){
      tx.executeSql(` 
        UPDATE todos SET status = ? WHERE id = ?
       ` , 
       [ !item.status , item.id] ,
       function(transaction , result){ console.log("update réussi") },
       function (transaction , err){ console.log("erreur creation table")})
    })
  }

  return (
    <View style={styles.container}>
      <Form db={db}/>
      {resultats.map(function(item){ 
        return <Text key={item.id} style={styles.ligne} onPress={() => changer(item)}>{ JSON.stringify(item) }</Text>
      })}
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
  ligne : {
    margin : 10
  }
});
