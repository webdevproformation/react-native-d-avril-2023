import { StyleSheet, Text, View } from 'react-native'
import React , { useContext } from 'react'
import { ProfilContext } from "../contexts/profilContext"

const Profil = () => {
 
  const {profil} = useContext(ProfilContext) 

  return (
    <View style={styles.box}>
      { profil.isLogged 
      ? 
        <View>
          <Text style={styles.titre}>Bienvenue { profil.nom }</Text>
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