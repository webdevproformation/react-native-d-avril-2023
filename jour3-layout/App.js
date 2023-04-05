import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from "./style"

const square = {width: 100 , height : 100 , marginBottom : 20}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.zone1} >
        <Text style={{ fontSize : 50 }}>premier</Text>
        <Text>{'deuxieme'} {'\n'} {'text'}</Text>
        <Text>troisieme</Text>
      </View>
      <View style={{ flex : 3 , backgroundColor : "green" , flexDirection:"row", flexWrap: "wrap" , justifyContent : "space-around" , paddingTop : 20  }}>
        <View style={[{ backgroundColor : "white" } , square ]} />
        <View style={[{ backgroundColor : "pink" } , square ]} />
        <View style={[{ backgroundColor : "purple"  } , square ]} />
        <View style={[{ backgroundColor : "maroon"  } , square ]} />
        <View style={[{ backgroundColor : "white"  } , square ]} />
        <View style={[{ backgroundColor : "lightgrey" } , square ]} />
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
      
    </View>
  );
}
