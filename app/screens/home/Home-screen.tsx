import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import {
  ViewStyle,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  TextStyle,
  ScrollView,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text, TextField } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, typography } from "../../theme"
import { ItemBook } from "./Item-book"
import { ListBookNew } from "./list-book-new"
import { ListBookDay } from "./list-book-day"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `home: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="home" component={HomeScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  function HomeScreen({ navigation }) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={ROOT} preset="fixed">
        <View style={{ paddingHorizontal: 12, backgroundColor: color.white, paddingBottom: 8 }}>
          <TextField
            placeholder="Tìm kiếm sách"
            iconLeft
            clearButtonMode="while-editing"
            onPressIn={() => navigation.navigate("searchBookScreen")}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
          <ListBookDay />
          <ListBookNew title="Sách mới nhất"/>
          <ListBookNew title="Sách khuyên đọc"/> 
        </ScrollView>
      </Screen>
    )
  },
)

const ROOT: ViewStyle = {
  backgroundColor: color.backgroundSoft,
  flex: 1,
}
