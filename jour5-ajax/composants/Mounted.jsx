import { StyleSheet, Text, View } from 'react-native'
import React , { useEffect } from 'react'

const Mounted = () => {
    
    useEffect( function(){
        // traitement ici n'est exécuté QUE 1 seule fois au moment de l'affichage du composant
        console.log("le composant  Mounted est  monté")
        // il est exécuté uniquement 1 fois 
    } , [])

  return (
    <View>
      <Text>Mounted</Text>
    </View>
  )
}

export default Mounted

const styles = StyleSheet.create({})