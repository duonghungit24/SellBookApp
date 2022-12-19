import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Header, Screen, Text, TextField } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { ButtonApp } from "../../components/button-app/button-app"
import { useStores } from "../../models"

const ROOT: ViewStyle = {
  backgroundColor: color.white,
  flex: 1,
}

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `inforIndividual: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="inforIndividual" component={InforIndividualScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const InforIndividualScreen: FC<StackScreenProps<NavigatorParamList, "inforIndividual">> =
  observer(function InforIndividualScreen() {
    // Pull in one of our MST stores
    const { authStore } = useStores()

    useEffect(() => {
      authStore.getUserInfo()
    }, [])

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={ROOT} preset="scroll">
        <Header
          leftIcon
          headerText="Thông tin tài khoản"
          style={{ backgroundColor: color.white }}
        />
        <View style={CONTENT}>
          <TextField
            label="Họ tên"
            iconLeft
            nameIcon="user"
            viewInputStyle={{ borderRadius: 8 }}
            style={INPUT}
          />
          <TextField
            label="Email"
            iconLeft
            typeIcon="MaterialCommunityIcons"
            nameIcon="email"
            viewInputStyle={{ borderRadius: 8 }}
            style={INPUT}
          />
          <TextField
            label="Địa chỉ"
            iconLeft
            typeIcon="Entypo"
            nameIcon="address"
            viewInputStyle={{ borderRadius: 8 }}
            style={INPUT}
          />
          <ButtonApp title="Cập nhật" onPress={() => {}} style={{ marginTop: 50 }} />
        </View>
      </Screen>
    )
  })

const CONTENT: ViewStyle = {
  paddingHorizontal: 16,
}
const INPUT: ViewStyle = {
  marginTop: 12,
}
