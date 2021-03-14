import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/account/Account";
import Login from "../screens/account/Login";

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Cuenta" }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "Iniciar Sesi\u00EDn" }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
