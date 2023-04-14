import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React , {useState} from 'react'

const Form = ({db}) => {
    const [todo, setTodo] = useState("")
    function add(){
        console.log(todo)
        db.transaction(function(tx){
            tx.executeSql(` 
              INSERT INTO todos (text , status) VALUES (? , ?)
             ` , 
             [todo , false] ,
             function(transaction , result){ console.log("INSERT SUCCESS") ;  setTodo("") },
             function (transaction , err){ console.log("erreur creation table")})
          })
       
    }
  return (
    <View style={{flexDirection : "row" , alignItems : "center" }}>
      <TextInput placeholder='nouvelle action' onChangeText={(text) => setTodo(text)} value={ todo  } style={{ borderWidth : 1, borderColor : "black", padding : 10  , margin: 10 , flex : 1}}/>
      <View style={{ margin: 10  }}>
        <Button onPress={ add } title="add" />
      </View>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({})