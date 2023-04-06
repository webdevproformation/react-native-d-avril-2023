import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Premier = ({ largeur , hauteur = 0 , unite }) => { 
  // destructuré le paramètre props pour prendre les propriétés intéressantes 
  return (
    <View>
      {/** App => Composant Parent 
       * Premier => Composant Enfant (exécuté dans le composant App)
       * lorsque l'on a exécuté le composant Premier avec des props 
       * 
       * 1 seul composant utilisable avec des valeurs différentes 
       * envoyer des données de <App> => <Premier />
       */}
      <Text>Premier {largeur} {hauteur} {unite}</Text>
      {/** on peut alors utiliser directement les valeurs sans avoir à répéter props.largeur , props.hauteur et props.unite */}
    </View>
  )
}

export default Premier

const styles = StyleSheet.create({})