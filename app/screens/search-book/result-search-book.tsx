import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import {
  ViewStyle,
  View,
  TextStyle,
  TouchableOpacity,
  Image,
  ImageStyle,
  FlatList,
  ActivityIndicator,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Header, Screen, Text, TextField } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, typography } from "../../theme"
import { configs } from "../../utils/configs"
import { utils } from "../../utils"
import { useStores } from "../../models"
import { DEFAULT_API_CONFIG } from "../../services/api/api-config"

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
> = observer(function ResultSearchBookScreen({ navigation, route }) {
  // Pull in one of our MST stores
  const textSearch = route.params.textSearch
  const { bookStore } = useStores()
  const [listBook, setListBook] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    getListBook()
  }, [])
  const getListBook = async () => {
    setIsLoading(true)
    const result = await bookStore.getAllBook({
      search: textSearch,
      category: "",
      page: 0,
      title: "",
      type: "",
    })
    setIsLoading(false)
    if (result.isSuccess) {
      const data = result.data.rows || []
      setListBook(data)
    }
  }
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="fixed">
      <Header leftIcon headerText="Kết quả tìm kiếm" style={{ backgroundColor: color.white }} />
      {isLoading ? (
        <ActivityIndicator style={{ padding: 16 }} />
      ) : (
        <View style={WRAP_SEARCH}>
          <FlatList
            data={listBook}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => `${index}`}
            renderItem={({ item, index }) => {
              return (
                <ItemBookSearch
                  dataDetail={item}
                  onPressDetail={() =>
                    navigation.navigate("detailBookScreen", { itemDetail: item })
                  }
                />
              )
            }}
            ListEmptyComponent={() => <ListEmty />}
          />
        </View>
      )}
    </Screen>
  )
})

const ItemBookSearch = (props) => {
  const { onPressDetail, dataDetail = {} } = props
  console.log(`${DEFAULT_API_CONFIG.url}/${dataDetail?.ProductImages[0].url}`)
  return (
    <TouchableOpacity style={WRAP_ITEM_BOOK} onPress={onPressDetail}>
      <View style={VIEW_IMAGE}>
        <Image
          source={{
            uri: `${DEFAULT_API_CONFIG.url}/${dataDetail?.ProductImages[0].url}`,
          }}
          style={IMAGE}
        />
      </View>
      <View style={{ marginLeft: 16, justifyContent: "space-evenly" }}>
        <Text style={NAME_BOOK}>{dataDetail.name}</Text>
        <Text style={PRICE}>{utils.displayMoney(dataDetail.priceSelling)}</Text>
      </View>
    </TouchableOpacity>
  )
}

const ListEmty = () => {
  return (
    <View>
      <Text style={{ color: color.neutral700, fontSize: 16, ...typography.textBold }}>
        Không có dữ liệu
      </Text>
    </View>
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
