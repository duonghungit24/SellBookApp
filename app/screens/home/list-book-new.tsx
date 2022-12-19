import React, { FC, useState, useRef } from "react"
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
import { IncreaseOrDecrease, Text, VectorIcons } from "../../components"
import { configs } from "../../utils/configs"
import { color, typography } from "../../theme"
import { ItemBook } from "./Item-book"
import { navigate } from "../../navigators"

export const ListBookNew = observer(function ListBookNew({
  listBook,
  title,
  onPressAll,
  style,
}: any) {
  return (
    <View style={[WRAP_LIST, style]}>
      <HeaderListBook title={title} style={{ paddingHorizontal: 12 }} onPressAll={onPressAll} />
      <View style={WRAP_ITEM}>
        {(listBook || []).map((item, index) => {
          // console.log(item.ProductImages[0].url)
          return (
            <TouchableOpacity key={index} style={{ width: "33%" }}>
              <ItemBook
                item={item}
                onPress={() => navigate("detailBookScreen", { itemDetail: item })}
                url={item?.ProductImages[0]?.url}
                style={{ width: "100%", paddingHorizontal: index % 2 != 0 ? 6 : 0 }}
              />
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
})

export const HeaderListBook = (props) => {
  const { title, onPressAll, disable, style } = props
  return (
    <TouchableOpacity
      style={[WRAP_HEAD, style]}
      disabled={disable}
      activeOpacity={0.5}
      onPress={onPressAll}
    >
      <Text style={TITLE}>{title}</Text>
      {!disable && <Text style={VIEW_ALL}>Xem tất cả</Text>}
    </TouchableOpacity>
  )
}

const WRAP_ITEM: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  paddingHorizontal: 12,
}
const WRAP_LIST: ViewStyle = {
  backgroundColor: color.white,
  paddingVertical: 12,
}
const WRAP_HEAD: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingVertical: 12,
}
const TITLE: TextStyle = {
  color: color.neutral900,
  ...typography.textBold,
}
const VIEW_ALL: TextStyle = {
  color: color.semanticInfo,
  ...typography.textMedium,
}
