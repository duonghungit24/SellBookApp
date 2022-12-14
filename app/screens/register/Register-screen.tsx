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
// - Add `register: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="register" component={RegisterScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const RegisterScreen: FC<StackScreenProps<NavigatorParamList, "register">> = observer(
  function RegisterScreen({ navigation }) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")

    const onRegister = () => {}
    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={ROOT} preset="fixed">
        <Header leftIcon headerText="Đăng kí" style={{ backgroundColor: color.white }} />
        <View style={CONTENT}>
          <TextField
            label="Họ tên"
            nameIcon="user"
            typeIcon="Feather"
            placeholder="Nhập họ tên"
            iconLeft
            onChangeText={setName}
          />
          <TextField
            label="Email"
            nameIcon="email"
            typeIcon="MaterialIcons"
            placeholder="Nhập email"
            iconLeft
            onChangeText={setEmail}
            style={INPUT}
          />
          <TextField
            label="Mật khẩu"
            nameIcon="md-lock-closed-outline"
            typeIcon="Ionicons"
            placeholder="Nhập mật khẩu"
            isEye
            iconLeft
            onChangeText={setPassword}
            style={INPUT}
          />
          <TextField
            label="Nhập lại mật khẩu"
            nameIcon="md-lock-closed-outline"
            typeIcon="Ionicons"
            placeholder="Nhập lại mật khẩu"
            isEye
            iconLeft
            onChangeText={setRePassword}
            style={INPUT}
          />
          <ButtonApp title="Đăng kí" onPress={onRegister} style={BTN} />
          <ButtonApp
            title="Đã có tài khoản"
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: color.white, marginTop: 10 }}
            styleText={{ color: color.neutral700 }}
          />
        </View>
      </Screen>
    )
  },
)

const CONTENT: ViewStyle = {
  flex: 1,
  backgroundColor: color.white,
  padding: 16,
}
const BTN: ViewStyle = {
  borderRadius: 30,
  marginTop: 40,
}
const INPUT: ViewStyle = {
  paddingTop: 12,
}
