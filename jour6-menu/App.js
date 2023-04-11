import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Accueil from "./composants/Accueil"
import ProfilNavigation from "./composants/ProfilNavigation"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ConnexionNavigation from './composants/ConnexionNavigation';
const Menu = createBottomTabNavigator()
// rdv 13h40 
export default function App() {

  const profil = {
    nom : "Alain" ,
    isConnected : true   
  }


  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Menu.Navigator screenOptions={{
        tabBarActiveBackgroundColor : "#eee",
        tabBarStyle : { borderColor : "red" , borderWidth : 3 },
        tabBarShowLabel : false
       /*  title : ((text) => { return <View>
          <Text>{JSON.stringify(text)}</Text>
          <MaterialCommunityIcons name="air-horn" color="black" size={40} />
          </View>  
        })() */
      }}>
        {/** https://reactnavigation.org/docs/bottom-tab-navigator */}
        <Menu.Screen name="home" component={Accueil} 
          options={{
            tabBarIcon : function(){
              return <MaterialCommunityIcons name="air-horn" color="black" size={40} />
            }
          }} />
          {/**  npm i ... => https://www.npmjs.com/ 
           *  react-native-vector-icons
           * https://www.npmjs.com/package/react-native-vector-icons
           * https://pictogrammers.com/library/mdi/
           */}
        <Menu.Screen name="profil" component={ ProfilNavigation } options={{
          tabBarIcon : function(){
            return <MaterialCommunityIcons name="anchor" color="black" size={40} />
          }
        }}/>

        { profil.isConnected 
          ?
            <Menu.Screen name="connexion-menu" component={ ConnexionNavigation } options={{
              tabBarIcon : function(){
                return <MaterialCommunityIcons name="face-man-profile" color="black" size={40} />
              },
              title : `Bienvenu ${profil.nom}`
            }}/>
          :
          <Menu.Screen name="connexion-menu" component={ ConnexionNavigation } options={{
            tabBarIcon : function(){
              return <MaterialCommunityIcons name="lock-open" color="black" size={40} />
            },
            title : "gestion de votre profil"
           
          }}/>
      }
         
         
       </Menu.Navigator>

      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
