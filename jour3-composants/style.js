import { StyleSheet } from "react-native" 

export const styles = StyleSheet.create({
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
  