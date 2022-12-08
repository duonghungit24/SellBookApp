import React, { useState, useEffect } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AccountScreen, HomeScreen,CartScreen } from "../screens"
import { NavigatorParamList } from "./app-navigator"
import { color } from "../theme"
import { VectorIcons } from "../components"
import { translate } from "../i18n"
import { useStores } from "../models"
import { onSnapshot } from "mobx-state-tree"

const Tab = createBottomTabNavigator<NavigatorParamList>()

export default function BottomTabs() {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.mainColor,
        tabBarInactiveTintColor: color.disable,
        headerShown: false,
        tabBarItemStyle: {
          padding: 5,
        },
      }}
    >
      <Tab.Screen
        name="homeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <VectorIcons type="FontAwesome" name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="cartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: "Giỏ hàng",
          tabBarIcon: ({ color, size }) => (
            <VectorIcons type="Entypo" name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="accountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel: "Tài khoản",
          tabBarIcon: ({ color, size }) => (
            <VectorIcons type="Octicons" name="person-fill" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
