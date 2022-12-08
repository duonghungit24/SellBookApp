import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import {
  ViewStyle,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ImageStyle,
  ScrollView,
  TextStyle,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Header, IncreaseOrDecrease, Screen, Text, TextField } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, typography } from "../../theme"
import { configs  } from "../../utils/configs"
import { ButtonApp } from "../../components/button-app/button-app"
import {utils} from "../../utils"
// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `detailBook: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="detailBook" component={DetailBookScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const DetailBookScreen: FC<StackScreenProps<NavigatorParamList, "detailBook">> = observer(
  function DetailBookScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={ROOT} preset="scroll">
        <Header leftIcon headerText="Tên sách" style={{ backgroundColor: color.white }} />
        <View style={CONTENT}>
          <ScrollView keyboardShouldPersistTaps="always">
            <ItemDetailBook />
            <TitlHead title="Thông tin chi tiết" />
            <ItemDetail title="Thể loại" value="Văn học nước ngoài" />
            <ItemDetail title="Tác giả" value="kihosima" />
            <TitlHead title="Bình luận sách" />
            <View>
              <TextInput 
                placeholder="Nhập bình luận"
                multiline
              style={COMMENT}
              />
              <ButtonApp title="Gửi" style={BTN_SEND} onPress={() => {}} />
            </View>
            <TitlHead title="Sách liên quan" />
          </ScrollView>
        </View>
      </Screen>
    )
  },
)

interface ItemDetailBookProps {}
const ItemDetailBook = (props: ItemDetailBookProps) => {
  return (
    <View style={WRAP_ITEM}>
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={IMAGE_BOOK}
      />
      <View style={WRAP_CONTENT}>
        <Text style={NAME_BOOK}>Con duong xua em di</Text>
        <Text style={NAME_AUTHOR}>Duong Hung</Text>
        <Text style={TITLE_PRICE} >Giá bán: <Text style={PRICE}>{utils.displayMoney(30000)}</Text></Text>
        <View style={VIEW_CHANGE_TOTAL}>
          <Text style={COUNT}>Số lượng:</Text>
          <IncreaseOrDecrease
            num={5}
            onChangeTotal={() => {}}
            onDecreaseTotal={() => {}}
            onIncreaseTotal={() => {}}
          />
        </View>
        <ButtonApp title="Thêm vào giỏ" onPress={() => {}} style={BTN_ADD} />
      </View>
    </View>
  )
}

const TitlHead = (props) => {
    return (
      <View>
        <Text style={TITLE_HEAD}>{props.title}</Text>
      </View>
    )
}

const ItemDetail = (props) => {
  return (
    <View style={[WRAP_ITEM, {borderBottomWidth: 0.5, paddingBottom: 16, borderBottomColor: color.neutral400}]}>
      <Text style={{color: color.neutral500, ...typography.textMedium,flex: 1}}>{props.title}</Text>
      <Text style={{flex: 2, color: color.neutral600}}>{props.value}</Text>
    </View>
  )
}

const ROOT: ViewStyle = {
  backgroundColor: color.backgroundSoft,
  flex: 1,
}
const CONTENT: ViewStyle = {
  flex: 1,
  paddingHorizontal: 12,
}
const WRAP_ITEM: ViewStyle = {
  flexDirection: "row",
  paddingTop: 12,
}
const IMAGE_BOOK: ImageStyle = {
  height: configs.windowHeight / 3.5,
  width: configs.windowWidth / 2 - 32,
  borderRadius: 14,
}
const WRAP_CONTENT: ViewStyle = {
  flex: 1,
  marginLeft: 10,
}
const NAME_BOOK: TextStyle = {
  ...typography.textBold,
  fontSize: 16,
  color: color.neutral900,
}
const NAME_AUTHOR: TextStyle = {
  ...typography.textBold,
  fontSize: 14,
  color: color.neutral700,
  marginTop: 12,
}
const BTN_ADD: ViewStyle = {
  position: "absolute",
  bottom: 0,
  width: "100%",
}
const VIEW_CHANGE_TOTAL : ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 16
}
const COUNT : TextStyle = {
  ...typography.textMedium,
  color: color.neutral500
}
const TITLE_HEAD :TextStyle = {
  ...typography.textBold,
  color: color.neutral900,
  paddingVertical: 20
}
const TITLE_PRICE : TextStyle = {
  ...typography.textMedium,
  color: color.neutral500,
  marginTop: 12
}
const PRICE : TextStyle = {
  ...typography.textMedium,
  color: color.neutral600,
}
const COMMENT : ViewStyle = {
    minHeight: 44,
    borderRadius: 4,
    borderColor: color.neutral400,
    borderWidth: 1,
    paddingHorizontal: 12
}
const BTN_SEND: ViewStyle = {
  marginTop: 12
}