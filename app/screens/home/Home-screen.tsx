import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import {
  ViewStyle,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  TextStyle,
  ScrollView,
  ActivityIndicator,
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
import { setupRootStore, useStores } from "../../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `home: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="home" component={HomeScreen} />`
// Hint: Look for the 🔥!
const data = [
  {
    id: 1,
    name: "Đắc nhân tâm",
    url: "https://salt.tikicdn.com/cache/w1200/ts/product/df/7d/da/d340edda2b0eacb7ddc47537cddb5e08.jpg",
    priceSelling: 120000,
  },
  {
    id: 2,
    name: "Nhà giả kim",
    url: "https://upload.wikimedia.org/wikipedia/vi/thumb/9/9c/Nh%C3%A0_gi%E1%BA%A3_kim_%28s%C3%A1ch%29.jpg/150px-Nh%C3%A0_gi%E1%BA%A3_kim_%28s%C3%A1ch%29.jpg",
    priceSelling: 140000,
  },
  {
    id: 3,
    name: "Mỗi lần vấp ngã là một lần Trưởng Thành",
    url: "https://product.hstatic.net/1000237375/product/vap-nga-900x900_83ab6f753cab436e9baaa789317b75b6_grande_1094f6483e6148f2ad5a7a8ed3910481_master.png",
    priceSelling: 220000,
  },
  {
    id: 4,
    name: "Tội ác và hình phạt",
    url: "https://bizweb.dktcdn.net/100/180/408/products/toi-ac-va-trung-phat.png?v=1592608159877",
    priceSelling: 150000,
  },
]
const dataNew = [
  {
    id: 1,
    name: "Đời thay đổi khi chúng ta thay đổi",
    url: "https://www.nxbtre.com.vn/Images/Book/nxbtre_full_25112019_091122.jpg",
    priceSelling: 220000,
  },
  {
    id: 2,
    name: "Đắc nhân tâm",
    url: "https://salt.tikicdn.com/cache/w1200/ts/product/df/7d/da/d340edda2b0eacb7ddc47537cddb5e08.jpg",
    priceSelling: 120000,
  },
  {
    id: 3,
    name: "Dạy Con Làm Giàu",
    url: "https://www.khaitam.com/Data/Sites/1/Product/3698/dayconlamgiau4-sachkhaitam.gif",
    priceSelling: 220000,
  },
  {
    id: 4,
    name: "Mỗi lần vấp ngã là một lần Trưởng Thành",
    url: "https://product.hstatic.net/1000237375/product/vap-nga-900x900_83ab6f753cab436e9baaa789317b75b6_grande_1094f6483e6148f2ad5a7a8ed3910481_master.png",
    priceSelling: 220000,
  },
  {
    id: 5,
    name: "Nhà giả kim",
    url: "https://upload.wikimedia.org/wikipedia/vi/thumb/9/9c/Nh%C3%A0_gi%E1%BA%A3_kim_%28s%C3%A1ch%29.jpg/150px-Nh%C3%A0_gi%E1%BA%A3_kim_%28s%C3%A1ch%29.jpg",
    priceSelling: 140000,
  },
  {
    id: 6,
    name: "Tội ác và hình phạt",
    url: "https://bizweb.dktcdn.net/100/180/408/products/toi-ac-va-trung-phat.png?v=1592608159877",
    priceSelling: 150000,
  },
]
// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  function HomeScreen({ navigation }) {
    // Pull in one of our MST stores
    const { bookStore } = useStores()
    const [listBook, setListBook] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      getBookBusiness()
    }, [])

    const getBookBusiness = async () => {
      setIsLoading(true)
      const result = await bookStore.getAllBook({
        search: "",
        category: "241d10ff-fba8-4344-8115-73dda5fe6e66",
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
    console.log(listBook)
    const dt = {
      Category: {
        createdAt: "2022-12-09 22:52:48",
        createdBy: "c906f20b-17a7-47d0-a275-717a96aa268e",
        id: "241d10ff-fba8-4344-8115-73dda5fe6e66",
        image:
          "276053-como-criar-um-plano-de-carreira-empresarial-x-dicas-arrasadoras-15646288550871515630447.jpg",
        isDeleted: 0,
        name: "Sách kinh doanh",
        updateBy: "c906f20b-17a7-47d0-a275-717a96aa268e",
        updatedAt: "2022-12-09 22:52:48",
      },
      Comments: [],
      ProductImages: [[Object]],
      author: "Napoleon Hill",
      barCode: "004",
      categoryId: "241d10ff-fba8-4344-8115-73dda5fe6e66",
      createdAt: "2022-12-09 23:17:46",
      createdBy: "c906f20b-17a7-47d0-a275-717a96aa268e",
      description:
        "“Nghĩ giàu và làm giàu” là một trong những cuốn sách dạy làm giàu bán chạy nhất mọi thời đại và được yêu thích nhất hiện nay. Đây là một cuốn sách rất có giá trị và làm thay đổi cuộc sống của nhiều người.",
      id: "b3404b9b-0053-4b4b-994a-5e5b22f7da09",
      isDeleted: 0,
      name: "Nghĩ giàu và làm giàu",
      priceImport: 10000,
      priceSelling: 250000,
      quantity: 50,
      quantityDisplay: 50,
      updateBy: "c906f20b-17a7-47d0-a275-717a96aa268e",
      updatedAt: "2022-12-09 23:17:46",
      weight: 0.7,
    }

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={ROOT} preset="fixed">
        <View style={{ paddingHorizontal: 12, backgroundColor: color.white, paddingVertical: 8 }}>
          <TextField
            placeholder="Tìm kiếm sách"
            iconLeft
            clearButtonMode="while-editing"
            onPressIn={() => navigation.navigate("searchBookScreen")}
          />
        </View>
        {isLoading ? (
          <ActivityIndicator style={{ padding: 16 }} />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <ListBookDay listBook={listBook} style={{ marginTop: 12 }} />
            <ListBookNew listBook={listBook} title="Sách kinh doanh" style={{ marginTop: 12 }} />
            <ListBookNew
              listBook={listBook}
              title="Sách tâm lý giáo dục"
              style={{ marginTop: 12 }}
            />
          </ScrollView>
        )}
      </Screen>
    )
  },
)

const ROOT: ViewStyle = {
  backgroundColor: color.backgroundSoft,
  flex: 1,
}
