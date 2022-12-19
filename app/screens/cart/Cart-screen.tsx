import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Image, FlatList, TextStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Header, IncreaseOrDecrease, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, typography } from "../../theme"
import { ButtonApp } from "../../components/button-app/button-app"
import { configs } from "../../utils/configs"
import { utils } from "../../utils"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `cart: undefined` to NavigatorParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="cart" component={CartScreen} />`
// Hint: Look for the 🔥!
const data = [
  {
    id: 1,
    name: "Đắc nhân tâm",
    url: "https://salt.tikicdn.com/cache/w1200/ts/product/df/7d/da/d340edda2b0eacb7ddc47537cddb5e08.jpg",
    price: 120000,
  },
  {
    id: 2,
    name: "Nhà giả kim",
    url: "https://upload.wikimedia.org/wikipedia/vi/thumb/9/9c/Nh%C3%A0_gi%E1%BA%A3_kim_%28s%C3%A1ch%29.jpg/150px-Nh%C3%A0_gi%E1%BA%A3_kim_%28s%C3%A1ch%29.jpg",
    price: 140000,
  },
  {
    id: 3,
    name: "Mỗi lần vấp ngã là một lần Trưởng Thành",
    url: "https://product.hstatic.net/1000237375/product/vap-nga-900x900_83ab6f753cab436e9baaa789317b75b6_grande_1094f6483e6148f2ad5a7a8ed3910481_master.png",
    price: 220000,
  },
  {
    id: 4,
    name: "Tội ác và hình phạt",
    url: "https://bizweb.dktcdn.net/100/180/408/products/toi-ac-va-trung-phat.png?v=1592608159877",
    price: 150000,
  },
]
// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const CartScreen: FC<StackScreenProps<NavigatorParamList, "cart">> = observer(
  function CartScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={ROOT} preset="fixed">
        <Header leftIcon headerText="Giỏ hàng" style={{ backgroundColor: color.white }} />
        <FlatList
          data={data}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item, index }) => {
            return <CartItem itemDetail={item} />
          }}
        />
        <View style={BOTTOM}>
          <View style={VIEW_BUTTON}>
            <Text style={TEXT_SUM}>Tổng tiền</Text>
            <Text style={TEXT_MONEY}>{utils.displayMoney(630000)}</Text>
          </View>
          <ButtonApp title="Thanh toán" onPress={() => {}} style={{ paddingVertical: 8 }} />
        </View>
      </Screen>
    )
  },
)

const CartItem = (props) => {
  const { itemDetail } = props
  const [total, setTotal] = useState(1)
  return (
    <View style={VIEW_CARD}>
      <View style={IMAGE}>
        <Image
          source={{
            uri: itemDetail.url,
          }}
          style={{ flex: 1 }}
        />
      </View>
      <View style={{ flex: 1, marginLeft: 24 }}>
        <Text style={TEXT_NAME}>{itemDetail.name}</Text>
        <View style={VIEW_ROW}>
          <Text style={TEXT_PRICE}>{utils.displayMoney(itemDetail.price)}</Text>
          <IncreaseOrDecrease
            num={total}
            onIncreaseTotal={() => setTotal(total + 1)}
            onDecreaseTotal={() => setTotal(total - 1)}
            onChangeTotal={(value) => setTotal(value)}
          />
        </View>
      </View>
    </View>
  )
}

const ROOT: ViewStyle = {
  backgroundColor: color.backgroundSoft,
  flex: 1,
}
const VIEW_CARD: ViewStyle = {
  flexDirection: "row",
  backgroundColor: color.white,
  alignItems: "center",
  paddingHorizontal: 12,
  borderRadius: 12,
  ...configs.shadow,
  paddingVertical: 11,
  marginTop: 12,
  marginHorizontal: 12,
}
const BOTTOM: ViewStyle = {
  backgroundColor: color.white,
  padding: 12,
  ...configs.shadow,
}
const VIEW_BUTTON: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: 4,
  paddingBottom: 8,
}
const TEXT_SUM: TextStyle = {
  ...typography.textBold,
  color: color.neutral600,
}
const TEXT_MONEY: TextStyle = {
  ...typography.textMedium,
  color: color.neutral500,
}
const IMAGE: ViewStyle = {
  width: 50,
  height: 50,
}
const TEXT_PRICE: TextStyle = {
  ...typography.textMedium,
  color: color.neutral500,
}

const TEXT_NAME: TextStyle = {
  ...typography.textBold,
  fontSize: 16,
  color: color.neutral700,
}
const VIEW_ROW: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 8,
}
