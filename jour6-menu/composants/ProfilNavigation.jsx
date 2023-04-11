import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Profil from "./Profil";
import ModifPass from "./ModifPass";

const Stack = createNativeStackNavigator();

const ProfilNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen component={Profil} name="profil" options={{headerShown : false}} />
        <Stack.Screen component={ModifPass} name="modifPass" options={{headerShown : false}} />
    </Stack.Navigator>
  )
}

export default ProfilNavigation