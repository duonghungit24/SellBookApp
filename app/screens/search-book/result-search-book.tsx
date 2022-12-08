import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import {
  ViewStyle,
  View,
  TextStyle,
  TouchableOpacity,
  Image,
  ImageStyle,
  FlatList,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Header, Screen, Text, TextField } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, typography } from "../../theme"
import { configs } from "../../utils/configs"
import { utils } from "../../utils"

const ROOT: ViewStyle = {
  backgroundColor: color.white,
  flex: 1,
}

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `searchBook: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="searchBook" component={SearchBookScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const ResultSearchBookScreen: FC<
  StackScreenProps<NavigatorParamList, "resultSearchBookScreen">
> = observer(function ResultSearchBookScreen({ navigation }) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="fixed">
      <Header leftIcon headerText="Kết quả tìm kiếm" style={{ backgroundColor: color.white }} />
      <View style={WRAP_SEARCH}>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item, index }) => {
            return <ItemBookSearch onPressDetail={() => navigation.navigate("detailBookScreen")} />
          }}
        />
      </View>
    </Screen>
  )
})

const ItemBookSearch = (props) => {
  const { onPressDetail } = props
  return (
    <TouchableOpacity style={WRAP_ITEM_BOOK} onPress={onPressDetail}>
      <View style={VIEW_IMAGE}>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={IMAGE}
        />
      </View>
      <View style={{ marginLeft: 16, justifyContent: "space-evenly" }}>
        <Text style={NAME_BOOK}>Ten sach day</Text>
        <Text style={PRICE}>{utils.displayMoney(200000)}</Text>
      </View>
    </TouchableOpacity>
  )
}

const WRAP_SEARCH: ViewStyle = {
  flex: 1,
  paddingHorizontal: 12,
}
const WRAP_ITEM_BOOK: ViewStyle = {
  flexDirection: "row",
  marginTop: 12,
}
const VIEW_IMAGE: ViewStyle = {
  height: configs.windowHeight * 0.15,
  width: configs.windowWidth * 0.2,
  borderRadius: 6,
}
const IMAGE: ImageStyle = {
  width: "100%",
  height: "100%",
  borderRadius: 6,
}
const NAME_BOOK: TextStyle = {
  color: color.neutral700,
  ...typography.textMedium,
  fontSize: 16,
}
const PRICE: TextStyle = {
  ...typography.textMedium,
  color: color.neutral500,
}
