import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Header, Screen, Text, TextField } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { ButtonApp } from "../../components/button-app/button-app"

const ROOT: ViewStyle = {
  backgroundColor: color.white,
  flex: 1,
}

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `forgotPassword: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const ForgotPasswordScreen: FC<StackScreenProps<NavigatorParamList, "forgotPassword">> =
  observer(function ForgotPasswordScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={ROOT} preset="fixed">
        <Header leftIcon headerText="Quên mật khẩu" style={{ backgroundColor: color.white }} />
        <View style={{ flex: 1, paddingHorizontal: 16 }}>
          <TextField
            label="Email"
            nameIcon="email"
            typeIcon="MaterialIcons"
            placeholder="Nhập email"
            isEye
            iconLeft
            style={INPUT}
          />
          <ButtonApp title="Gửi" onPress={() => {}} style={BTN} />
        </View>
      </Screen>
    )
  })

const BTN: ViewStyle = {
  borderRadius: 30,
  marginTop: 50,
}
const INPUT: ViewStyle = {
  marginTop: 100,
}
