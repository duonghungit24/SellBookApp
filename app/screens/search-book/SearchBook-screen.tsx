import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import {
  ViewStyle,
  View,
  TextStyle,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Keyboard,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text, TextField } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, typography } from "../../theme"
import { useStores } from "../../models"

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
export const SearchBookScreen: FC<StackScreenProps<NavigatorParamList, "searchBook">> = observer(
  function SearchBookScreen({ navigation }) {
    // Pull in one of our MST stores
    const { bookStore } = useStores()
    const [listBook, setListBook] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [textFilter, setTextFilter] = useState("")

    useEffect(() => {
      const getSearchBook = setTimeout(() => {
        if (textFilter) {
          getBook()
        } else {
          setListBook([])
        }
      }, 300)
      return () => clearTimeout(getSearchBook)
    }, [textFilter])

    const getBook = async () => {
      setIsLoading(true)
      const result = await bookStore.getAllBook({
        search: textFilter,
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

    const onSubmit = () => {
      if (!textFilter) {
        Keyboard.dismiss()
      } else {
        navigation.navigate("resultSearchBookScreen", { textSearch: textFilter })
      }
    }
    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={ROOT} preset="fixed">
        <View style={WRAP_SEARCH}>
          <TextField
            iconLeft
            placeholder="Tìm kiếm sách"
            style={{ flex: 1, marginRight: 12 }}
            autoFocus={true}
            onSubmitEditing={onSubmit}
            returnKeyLabel="Xong"
            onChangeText={setTextFilter}
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={TEXT_CLOSE}>Đóng</Text>
          </TouchableOpacity>
        </View>
        {isLoading ? (
          <ActivityIndicator style={{ padding: 16 }} />
        ) : (
          <FlatList
            data={listBook}
            keyExtractor={(_, index) => `${index}`}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={BTN}
                  onPress={() => navigation.navigate("detailBookScreen", { itemDetail: item })}
                >
                  <Text style={TEXT_RESULT}>{item.name}</Text>
                </TouchableOpacity>
              )
            }}
            ItemSeparatorComponent={() => <View style={LINE} />}
          />
        )}
      </Screen>
    )
  },
)

const WRAP_SEARCH: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: 12,
  paddingTop: 12,
}
const TEXT_CLOSE: TextStyle = {
  color: color.neutral900,
  ...typography.textMedium,
}
const LINE: ViewStyle = {
  height: 0.5,
  backgroundColor: color.neutral300,
}
const TEXT_RESULT: TextStyle = {
  color: color.neutral600,
  ...typography.textBold,
}
const BTN: ViewStyle = {
  padding: 12,
}
