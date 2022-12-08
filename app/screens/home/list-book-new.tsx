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

export const ListBookNew = observer(function ListBookNew({ title, onPressAll }: any) {
  return (
    <View style={WRAP_LIST}>
      <HeaderListBook title={title} style={{paddingHorizontal: 12}} onPressAll={onPressAll}/>
      <View style={WRAP_ITEM}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <>
              <View key={index} style={{ width: "33%" }}>
                <ItemBook style={{width: "100%", paddingHorizontal: index % 2 != 0 ? 8 : 0}} />
              </View>
            </>
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
  marginTop: 12,
  backgroundColor: color.white,
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
