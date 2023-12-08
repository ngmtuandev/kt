import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "./src/Screen1";
import Screen2 from "./src/Screen2";
import store from "./src/store/store";
import { Provider } from "react-redux";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="register" component={Screen1} />
          <Stack.Screen name="screen2" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
