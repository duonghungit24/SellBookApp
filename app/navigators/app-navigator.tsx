/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  WelcomeScreen,
  HomeScreen,
  RegisterScreen,
  LoginScreen,
  DetailBookScreen,
  SearchBookScreen,
  ForgotPasswordScreen,
  ChangePasswordScreen,
  InforIndividualScreen,
  ResultSearchBookScreen,
} from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"
import BottomTabs from "./bottomTab"
/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
  welcome: undefined
  homeScreen: undefined
  registerScreen: undefined
  loginScreen: undefined
  accountScreen: undefined
  cartScreen: undefined
  likeBookScreen: undefined
  bottomTabs: undefined
  detailBookScreen: undefined
  searchBookScreen: undefined
  forgotPasswordScreen: undefined
  changePasswordScreen: undefined
  inforIndividualScreen: undefined
  resultSearchBookScreen: undefined
  // 🔥 Your screens go here
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="loginScreen"
    >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="homeScreen" component={HomeScreen} />
      <Stack.Screen name="loginScreen" component={LoginScreen} />
      <Stack.Screen name="registerScreen" component={RegisterScreen} />
      <Stack.Screen name="bottomTabs" component={BottomTabs} />
      <Stack.Screen name="detailBookScreen" component={DetailBookScreen} />
      <Stack.Screen name="searchBookScreen" component={SearchBookScreen} />
      <Stack.Screen name="forgotPasswordScreen" component={ForgotPasswordScreen} />
      <Stack.Screen name="changePasswordScreen" component={ChangePasswordScreen} />
      <Stack.Screen name="inforIndividualScreen" component={InforIndividualScreen} />
      <Stack.Screen name="resultSearchBookScreen" component={ResultSearchBookScreen} />
      {/** 🔥 Your screens go here */}
    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
