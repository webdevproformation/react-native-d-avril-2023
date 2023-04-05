import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.zone1} >
        <Text style={{ fontSize : 50 }}>premier</Text>
        <Text>deuxieme</Text>
        <Text>troisieme</Text>
      </View>
      <View style={{ backgroundColor : "blue" , flex : 2 , width:"100%" , justifyContent: "space-between" , color : "white" }} >
        <View style={{ flexDirection : "row" , justifyContent: "space-between" }}>
          <Text style={{color : "white"}}>Premier</Text>
          <Text style={{color : "white"}}>Deuxieme</Text>
        </View>
        <View style={{ flexDirection : "row" , justifyContent: "space-between" }}>
          <Text style={{ color : "white"}}>Troisieme</Text>
          <Text style={{color : "white"}}>Quatrieme</Text>
        </View>
        {/**
         <Text >premier</Text>
        <Text style={{ position: "absolute", top: 5, right: 10 }}>deuxieme</Text>
        <Text style={{ position: "absolute", bottom: 5 }}>troisieme</Text>
        <Text style={{ position: "absolute", bottom: 5, right: 10 }}>quatrieme</Text>
         */}
      </View>
      <View style={{ backgroundColor : "yellow" , flex : 0.5 , width:"100%" , flexDirection : "row" , alignItems : "center" , justifyContent: "space-around" }} >
         <Text style={[styles.color2 , styles.menu]}>Accueil</Text>
         <Text style={[styles.color , styles.menu]}>Profil</Text>
      </View>
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
  color : {
    color : "red"
  },
  color2 : {
    color : "blue"
  },
  menu : {
    fontSize : 20 ,
    borderBottomWidth : 1 ,
    borderBottomColor : "red"
  },
  zone1 : {
    backgroundColor : "red" , 
    flex : 1 , 
    width:"100%" , 
    flexDirection: "row" , 
    justifyContent : "space-around" , /* attention justifyContent centre horizontalement SI flexDirection: "row" par défaut  justifyContent: "center" va centrer Verticalement
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
    // 10h50 bon café !!!
  }
  // cas pratique :
  // dans la zone bleue
  // Ajouter dans cette zone 4 textes premier deuxieme troisieme et quatrieme
  // caler chaque mot dans un coin de cette zone 
});
