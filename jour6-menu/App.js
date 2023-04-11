import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Accueil from "./composants/Accueil"
import Profil from "./composants/Profil"

const Menu = createBottomTabNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name="home" component={Accueil}/>
        <Menu.Screen name="profil" component={Profil}/>
        <Menu.Screen name="connexion" component={Profil}/>
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
