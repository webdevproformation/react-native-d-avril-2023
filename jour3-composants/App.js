import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.zone1} >
        <Text style={{ fontSize : 30 }}>premier</Text>
        <Text>deuxieme</Text>
        <Text>troisieme</Text>
      </View>
      <View style={{ backgroundColor : "blue" , flex : 2 , width:"100%" }} />
      <View style={{ backgroundColor : "yellow" , flex : 0.5 , width:"100%" }} />
      {/*<StatusBar hidden={true} />*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25, 
    backgroundColor: '#fff',
    // flexDirection: "column"
  },
  zone1 : {
    backgroundColor : "red" , 
    flex : 1 , 
    width:"100%" , 
    flexDirection: "row" , 
    justifyContent : "space-around" , /* attention justifyContent centerer horizontalement SI flexDirection: "row" par défaut  justifyContent: "center" va centrer Verticalement
      flex-start
      flex-end
      center 
      space-evenly
      space-between
      space-around
    */ 
   alignItems: "baseline" // verticalement SI flexDirection: "row" ,  par contre si on est sur flexDirection: "column" permet de gérer l'espacement horizontalement 
    // flex-start
    // flex-end
    // center
    // baseline

  }
});
