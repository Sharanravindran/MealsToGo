import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigation";
import { AccountNavigator } from "./account.navigator";
import { AuthenticationContext } from "../api/authentication/context/authentication.context";

export const Navigation = () => {

  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  )
};