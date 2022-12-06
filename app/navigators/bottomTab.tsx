import React, { useState, useEffect } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AccountScreen, HomeScreen, NotificationScreen } from "../screens"
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
        tabBarActiveTintColor: color.primary,
        tabBarInactiveTintColor: color.disable,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="homeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <VectorIcons type="Octicons" name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="notificationScreen"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Thông báo",
          tabBarIcon: ({ color, size }) => (
            <VectorIcons type="Octicons" name="bell-fill" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name= "Tài khoản"
        component={AccountScreen}
        options={{
          tabBarLabel: translate("taikhoan"),
          tabBarIcon: ({ color, size }) => (
            <VectorIcons type="Octicons" name="person-fill" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
