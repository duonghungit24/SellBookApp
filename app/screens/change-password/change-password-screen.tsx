import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
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
// - Add `changePassword: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="changePassword" component={ChangePasswordScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const ChangePasswordScreen: FC<StackScreenProps<NavigatorParamList, "changePassword">> =
  observer(function ChangePasswordScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassWord] = useState("")
    const [reNewPassword, setReNewPassword] = useState("")
    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={ROOT} preset="scroll">
        <Header leftIcon headerText="Đổi mật khẩu" style={{ backgroundColor: color.white }} />
        <View style={CONTENT}>
          <TextField
            value={oldPassword}
            label="Mật khẩu cũ"
            placeholder="Nhập mật khẩu cũ"
            isEye
            style={INPUT}
            onChangeText={setOldPassword}
          />
          <TextField
            value={newPassword}
            label="Mật khẩu mới"
            placeholder="Nhập mật khẩu mới"
            isEye
            style={INPUT}
            onChangeText={setNewPassWord}
          />
          <TextField
            value={reNewPassword}
            label="Nhập lại mật khẩu cũ"
            placeholder="Nhập lại mật khẩu mới"
            isEye
            style={INPUT}
            onChangeText={setReNewPassword}
          />
          <ButtonApp title="Đổi mật khẩu" onPress={() => {}} style={{ marginTop: 50 }} />
        </View>
      </Screen>
    )
  })

const CONTENT: ViewStyle = {
  flex: 1,
  paddingHorizontal: 16,
}
const INPUT: ViewStyle = {
  marginTop: 12,
}
