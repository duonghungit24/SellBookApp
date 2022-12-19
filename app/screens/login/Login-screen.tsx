import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, TouchableOpacity, TextStyle, ImageStyle, Image } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Header, Screen, Text, TextField } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, typography } from "../../theme"
import { ButtonApp } from "../../components/button-app/button-app"
import { useStores } from "../../models"

const ROOT: ViewStyle = {
  backgroundColor: color.backgroundSoft,
  flex: 1,
}

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `login: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="login" component={LoginScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const LoginScreen: FC<StackScreenProps<NavigatorParamList, "login">> = observer(
  function LoginScreen({ navigation }) {
    // Pull in one of our MST stores
    const { generalStore, authStore, bookStore } = useStores()
    const [email, setEmail] = useState<string>("khachuy469@gmail.com")
    const [password, setPassword] = useState<string>("123456")
    const onLogin = () => {
      authStore.login({
        email,
        password,
      })
    }
    console.log(email, password)
    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={ROOT} preset="fixed">
        <Header leftIcon headerText="Đăng nhập" style={{ backgroundColor: color.white }} />
        <View style={CONTENT}>
          <TextField
            value={email}
            label="Email"
            nameIcon="user"
            typeIcon="Feather"
            placeholder="Email"
            style={[INPUT, { marginTop: 30 }]}
            iconLeft
            onChangeText={setEmail}
          />
          <TextField
            value={password}
            label="Mật khẩu"
            nameIcon="md-lock-closed-outline"
            typeIcon="Ionicons"
            placeholder="Mật khẩu"
            style={INPUT}
            isEye
            iconLeft
            onChangeText={setPassword}
          />
          <ButtonApp title="Đăng nhập" onPress={onLogin} style={BTN} />
          <View style={WRAP_ROW}>
            <TouchableOpacity onPress={() => navigation.navigate("registerScreen")}>
              <Text style={TEXT_REGISTER}>Đăng kí</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("forgotPasswordScreen")}>
              <Text style={TEXT_REGISTER}>Quên mật khẩu</Text>
            </TouchableOpacity>
          </View>

          <View style={WRAP_ICON}>
            <TouchableOpacity>
              <Image source={require("./assets/facebook.png")} style={ICON} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("./assets/google.jpg")} style={ICON} />
            </TouchableOpacity>
          </View>
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
const WRAP_ROW: ViewStyle = {
  flexDirection: "row",
  marginTop: 16,
  justifyContent: "space-between",
  paddingHorizontal: 6,
}
const TEXT_REGISTER: TextStyle = {
  fontSize: 16,
  ...typography.textBold,
  color: color.neutral700,
}
const ICON: ImageStyle = {
  height: 50,
  width: 50,
  margin: 16,
}
const WRAP_ICON: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  marginTop: 12,
}
