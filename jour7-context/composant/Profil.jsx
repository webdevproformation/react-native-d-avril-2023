import { Button, StyleSheet, Text, View } from 'react-native'
import React , { useContext } from 'react'
import { ProfilContext } from "../contexts/profilContext"

const Profil = ({navigation}) => {
 
  const {profil , logout} = useContext(ProfilContext) 

  function deconnexion(){
    logout()
    navigation.navigate("home")
  }

  return (
    <View style={styles.box}>
      { profil.isLogged 
      ? 
        <View>
          <Text style={styles.titre}>Bienvenue { profil.nom }</Text>
          <Button onPress={() => deconnexion()} title="2eme deconnexion" color="purple" />
        </View>
      : 
        <Text>Veuillez vous connecter pour accéder à votre profil</Text>
      }
      
    </View>
  )
}

export default Profil

const styles = StyleSheet.create({
    box: { alignItems : "center"},
    titre : {fontSize : 20}
})