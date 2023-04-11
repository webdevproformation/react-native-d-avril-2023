import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Profil from "./Profil";
import ModifPass from "./ModifPass";

const Stack = createNativeStackNavigator();

const ProfilNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen component={Profil} name="profil" />
        <Stack.Screen component={ModifPass} name="modifPass" />
    </Stack.Navigator>
  )
}

export default ProfilNavigation