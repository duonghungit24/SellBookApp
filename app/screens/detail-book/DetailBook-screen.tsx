import React, { FC, useEffect, useState } from "react"
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
  ActivityIndicator,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Header, IncreaseOrDecrease, Screen, Text, TextField } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, typography } from "../../theme"
import { configs } from "../../utils/configs"
import { ButtonApp } from "../../components/button-app/button-app"
import { utils } from "../../utils"
import { useStores } from "../../models"
import { DEFAULT_API_CONFIG } from "../../services/api/api-config"
import { ListBookNew } from "../home/list-book-new"
// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `detailBook: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="detailBook" component={DetailBookScreen} />`
// Hint: Look for the 🔥!
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
export const DetailBookScreen: FC<StackScreenProps<NavigatorParamList, "detailBookScreen">> =
  observer(function DetailBookScreen({ route }) {
    // Pull in one of our MST stores
    const { bookStore } = useStores()
    const [isLoading, setIsLoading] = useState(false)
    const [listRelateBook, setListRelateBook] = useState([])
    const [dataDetail, setDataDetail] = useState([])
    const [url, setUrl] = useState({})
    useEffect(() => {
      getDetailBook()
    }, [])

    const getDetailBook = async () => {
      const id = route.params.itemDetail.id
      setIsLoading(true)
      const result = await bookStore.getDetailBook(id)
      console.log("book", result)
      if (result.isSuccess) {
        setDataDetail(result.data)
        setUrl(result.data.ProductImages[0].url)
        getRelateToBook()
      }
      setIsLoading(false)
    }

    const getRelateToBook = async () => {
      const result = await bookStore.getAllBook({
        search: "",
        category: "",
        page: 0,
        title: "",
        type: "",
      })
      if (result.isSuccess) {
        const data = result.data.rows || []
        setListRelateBook(data)
      }
    }
    console.log("list book", dataDetail)

    const dt = {
      Comments: [
        {
          createdAt: "2022-12-10 11:46:54",
          id: "fdae4165-09d6-41ba-89c1-f277964a65a2",
          isDeleted: 0,
          productId: "b3404b9b-0053-4b4b-994a-5e5b22f7da09",
          text: "Sách chất lượng lắm shop",
          updatedAt: "2022-12-10 11:46:54",
          userId: "c906f20b-17a7-47d0-a275-717a96aa268e",
        },
      ],
      ProductImages: [
        {
          createdAt: "2022-12-09 23:17:46",
          createdBy: "c906f20b-17a7-47d0-a275-717a96aa268e",
          id: "f740e6a8-970e-458a-9a66-af811ab31df9",
          isDeleted: 0,
          name: "Nghĩ giàu và làm giàu",
          productId: "b3404b9b-0053-4b4b-994a-5e5b22f7da09",
          updateBy: "c906f20b-17a7-47d0-a275-717a96aa268e",
          updatedAt: "2022-12-09 23:17:46",
          url: "13-nguyen-tac-nghi-giau-lam-giau.jpg",
        },
      ],
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
        <Header
          leftIcon
          headerText={route.params.itemDetail.name}
          style={{ backgroundColor: color.white }}
        />
        {isLoading ? (
          <ActivityIndicator style={{ padding: 16 }} />
        ) : (
          <View style={CONTENT}>
            <ScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>
              <View style={{ paddingHorizontal: 12 }}>
                <ItemDetailBook url={url} dataItem={dataDetail} />
                <TitlHead title="Mô tả chi tiết" />
                <Text style={DESCRIPTION}>{dataDetail.description}</Text>
                <TitlHead title="Thông tin chi tiết" />
                <ItemDetail title="Thể loại" value="Văn học nước ngoài" />
                <ItemDetail title="Tác giả" value={dataDetail.author} />
                <TitlHead title="Bình luận sách" />
                <View>
                  <TextInput placeholder="Nhập bình luận" multiline style={COMMENT} />
                  <ButtonApp title="Gửi" style={BTN_SEND} onPress={() => {}} />
                </View>
              </View>
              <ListBookNew title="Sách liên quan" listBook={listRelateBook} />
            </ScrollView>
          </View>
        )}
      </Screen>
    )
  })

interface ItemDetailBookProps {
  dataItem: any
  url: any
}
const ItemDetailBook = (props: ItemDetailBookProps) => {
  const { dataItem = {}, url } = props
  return (
    <View style={WRAP_ITEM}>
      <Image
        source={{
          uri: `${DEFAULT_API_CONFIG.url}/${url}`,
        }}
        style={IMAGE_BOOK}
      />
      <View style={WRAP_CONTENT}>
        <Text style={NAME_BOOK}>{dataItem.name}</Text>
        <Text style={TITLE_PRICE}>
          Giá bán: <Text style={PRICE}>{utils.displayMoney(dataItem.priceSelling)}đ</Text>
        </Text>
        <Text style={TITLE_PRICE}>
          Cân nặng: <Text style={PRICE}>{dataItem.weight} kg</Text>{" "}
        </Text>
        <View style={VIEW_CHANGE_TOTAL}>
          <Text style={COUNT}>Số lượng:</Text>
          <IncreaseOrDecrease
            num={1}
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
    <View
      style={[
        WRAP_ITEM,
        { borderBottomWidth: 0.5, paddingBottom: 16, borderBottomColor: color.neutral400 },
      ]}
    >
      <Text style={{ color: color.neutral500, ...typography.textMedium, flex: 1 }}>
        {props.title}
      </Text>
      <Text style={{ flex: 2, color: color.neutral600 }}>{props.value}</Text>
    </View>
  )
}

const ROOT: ViewStyle = {
  backgroundColor: color.white,
  flex: 1,
}
const CONTENT: ViewStyle = {
  flex: 1,
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
  fontSize: 18,
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
  height: 42,
}
const VIEW_CHANGE_TOTAL: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 12,
}
const COUNT: TextStyle = {
  ...typography.textMedium,
  color: color.neutral500,
}
const TITLE_HEAD: TextStyle = {
  ...typography.textBold,
  color: color.neutral900,
  paddingVertical: 20,
}
const TITLE_PRICE: TextStyle = {
  ...typography.textMedium,
  color: color.neutral500,
  marginTop: 8,
}
const PRICE: TextStyle = {
  ...typography.textMedium,
  color: color.neutral600,
}
const COMMENT: ViewStyle = {
  minHeight: 44,
  borderRadius: 4,
  borderColor: color.neutral400,
  borderWidth: 1,
  paddingHorizontal: 12,
}
const BTN_SEND: ViewStyle = {
  marginTop: 12,
}
const DESCRIPTION: TextStyle = {
  fontSize: 14,
  ...typography.textMedium,
  color: color.neutral500,
}
