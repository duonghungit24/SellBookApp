import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, TouchableOpacity, View, ImageStyle, Image } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Header, Screen, Text, VectorIcons } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, typography } from "../../theme"
import { configs } from "../../utils/configs"

const ROOT: ViewStyle = {
  backgroundColor: color.white,
  flex: 1,
}

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `account: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="account" component={AccountScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const AccountScreen: FC<StackScreenProps<NavigatorParamList, "account">> = observer(
  function AccountScreen({navigation}) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()


    const logOut = () => {
      navigation.navigate("loginScreen")
    }
    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={ROOT} preset="fixed">
        <Header leftIcon={false} style={{ backgroundColor: color.white }} />
        <Avatar />
        <View style={{ flex: 1, paddingHorizontal: 16 }}>
          <ItemAccount nameIcon="user" title="Thông tin cá nhân" onPress={() => {}} />
          <ItemAccount nameIcon="unlock" title="Đổi mật khẩu" onPress={() => {}} />
          <ItemAccount typeIcon="AntDesign" nameIcon="contacts" title="Liên hệ phản hồi" onPress={() => {}} />
          <ItemAccount nameIcon="log-out" title="Đăng xuất" onPress={logOut} />
        </View>
      </Screen>
    )
  },
)

const Avatar = () => {
  // const { userInfoStore } = useStores()

  return (
    <TouchableOpacity style={WRAP_AVATAR} activeOpacity={0.5}>
      <View style={{ alignItems: "center" }}>
        <View style={AVATAR}>
          <View style={{ backgroundColor: "black", height: 120, width: 120, borderRadius: 60 }}>
            <Image
              source={{
                uri: configs.avatarDefault,
              }}
              style={AVATAR}
            />
          </View>

          <View style={CAMERA}>
            <VectorIcons
              type="Entypo"
              name="camera"
              color={color.background}
              size={25}
              style={{ marginBottom: 10 }}
            />
          </View>
        </View>
        <Text style={NAME}>Duong Hung</Text>
      </View>
    </TouchableOpacity>
  )
}

interface ItemAccountProps {
  typeIcon?: any
  nameIcon?: any
  title: string
  titleTx?: string
  hideLeftIcon?: boolean
  onPress?: () => void
  language?: boolean
}
const ItemAccount = (props: ItemAccountProps) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
      }}
      onPress={props.onPress}
    >
      <VectorIcons
        type={props.typeIcon || "Feather"}
        name={props.nameIcon}
        size={20}
        color={color.neutral500}
      />
      <Text style={TITLE} tx={props.titleTx}>
        {props.title}
      </Text>
      <View style={{ flexGrow: 1 }} />
      {!props.hideLeftIcon && (
        <VectorIcons type="Feather" name="chevron-right" size={20} color={color.neutral500} />
      )}
      {props.language && (
        <TouchableOpacity style={VIEW_LANGUAGE}>
          <Text style={TEXT_LANGUAGE}>VN</Text>
          <View style={VIEW_FLAG}>
            <VectorIcons type="Entypo" name="star" size={12} color={"#FFFF00"} />
          </View>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  )
}

const CONTAINER: ViewStyle = {
  flex: 1,
  backgroundColor: color.white,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  paddingHorizontal: 22,
}
const AVATAR: ImageStyle = {
  width: 120,
  height: 120,
  borderRadius: 60,
}
const WRAP_AVATAR: ViewStyle = {
  zIndex: 100,
}
const NAME: TextStyle = {
  fontSize: 20,
  color: color.neutral900,
  marginTop: 15,
  textAlign: "center",
  ...typography.textBold,
}
const CAMERA: ViewStyle = {
  position: "absolute",
  alignSelf: "center",
  bottom: 0,
}
const TITLE: TextStyle = {
  fontSize: 16,
  color: color.neutral900,
  marginLeft: 10,
  ...typography.textMedium,
}
const VIEW_LANGUAGE: ViewStyle = {
  backgroundColor: color.neutral100,
  borderWidth: 1,
  borderColor: color.neutral300,
  borderRadius: 24,
  paddingVertical: 5,
  paddingHorizontal: 3,
  width: 60,
  flexDirection: "row",
  alignItems: "center",
}
const TEXT_LANGUAGE: TextStyle = {
  ...typography.textMedium,
  fontSize: 14,
  color: color.neutral700,
  marginLeft: 5,
  flex: 1,
}
const VIEW_FLAG: ViewStyle = {
  height: 22,
  width: 22,
  borderRadius: 100,
  backgroundColor: "#DA251D",
  alignItems: "center",
  justifyContent: "center",
}
