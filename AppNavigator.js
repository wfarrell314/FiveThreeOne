import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./pages/Home";
import OneRepMax from "./pages/OneRepMax";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="OneRepMax"
        component={OneRepMax}
        options={{ title: "One Rep Max Calculator" }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
