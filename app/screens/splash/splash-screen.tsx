import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, ActivityIndicator } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.primary,
  flex: 1,
  justifyContent: "center",
}

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `splash: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="splash" component={SplashScreen} />`
// Hint: Look for the 🔥!
// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const SplashScreen: FC<StackScreenProps<NavigatorParamList, "splashScreen">> = observer(
  function SplashScreen({ navigation }) {
    const { authStore } = useStores()

    useEffect(() => {
      if (!authStore.isIntro && !authStore.accessToken) {
        navigation.reset({
          index: 0,
          routes: [{ name: "welcomeScreen" }],
        })
      } else if (authStore.accessToken) {
        navigation.reset({
          index: 0,
          routes: [{ name: "bottomTabs" }],
        })
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: "loginScreen" }],
        })
      }
    }, [])

    return (
      <Screen style={ROOT} preset="fixed">
        <ActivityIndicator color={color.white} />
      </Screen>
    )
  },
)
