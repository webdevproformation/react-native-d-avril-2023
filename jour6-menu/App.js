import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Accueil from "./composants/Accueil"
import Profil from "./composants/Profil"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Menu = createBottomTabNavigator()
// rdv 13h40 
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Menu.Navigator screenOptions={{
        tabBarActiveBackgroundColor : "#eee",
        tabBarStyle : { borderColor : "red" , borderWidth : 3 },
        tabBarShowLabel : true, 
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
        <Menu.Screen name="profil" component={Profil} options={{
          tabBarIcon : function(){
            return <MaterialCommunityIcons name="anchor" color="black" size={40} />
          }
        }}/>
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
