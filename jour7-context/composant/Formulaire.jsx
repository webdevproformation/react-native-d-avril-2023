import { StyleSheet, Text, View , TextInput, Button } from 'react-native'
import React , {useContext , useState} from 'react'
import { ProfilContext } from "../contexts/profilContext"

const Formulaire = () => {

  const { profil, login } = useContext(ProfilContext);
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  function authentification(){
    const identifiants = {
      email : email ,
      password : password
    }
    console.log(identifiants)
    login(identifiants)
    console.log(profil)
  }

  return (
    <View style={styles.box}>
      <Text>Formulaire</Text>
      <TextInput placeholder='email' style={styles.input} onChangeText={(text) => setEmail(text)} value={email}/>
      <TextInput placeholder='password' style={styles.input} onChangeText={(text) => setPassword(text)} value={password} />
      <Button title="soumettre" onPress={() => authentification()}/>
    </View>
  )
}

export default Formulaire

const styles = StyleSheet.create({
    box : { margin : 10},
    input : { borderWidth : 1 , borderColor : "black" , padding : 5 , marginBottom : 10}
})