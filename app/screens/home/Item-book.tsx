import React, { FC, useState, useRef } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, TextStyle, TouchableOpacity, Image, ImageStyle } from "react-native"
import { IncreaseOrDecrease, Text, VectorIcons } from "../../components"
import { configs } from "../../utils/configs"
import { color, typography } from "../../theme"
import { utils } from "../../utils"

export const ItemBook = observer(function ItemBook({ item, style, onPress }: any) {
  return (
    <TouchableOpacity style={[WRAP_ITEM_BOOK, style]} activeOpacity={0.9} onPress={onPress}>
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={IMAGE_BOOK}
      />

      <Text style={NAME_BOOK} numberOfLines={1}>
        Hom qua anh mo hay tat ca
      </Text>
      <Text style={AUTHOR}>Duong hung</Text>
      <Text style={PRICE}>{utils.displayMoney(20000)}</Text>
    </TouchableOpacity>
  )
})

const IMAGE_BOOK: ImageStyle = {
  flex: 1,
  resizeMode: "cover",
  borderRadius: 8,
}
const WRAP_ITEM_BOOK: ViewStyle = {
  width: configs.windowWidth / 3,
  height: configs.windowHeight / 3.5,
  borderRadius: 8,
}
const NAME_BOOK: TextStyle = {
  fontSize: 14,
  ...typography.textMedium,
  color: color.neutral600,
}
const AUTHOR: TextStyle = {
  color: color.neutral500,
  fontSize: 13,
  ...typography.textMedium,
}
const PRICE: TextStyle = {
  color: color.neutral500,
  ...typography.textMedium,
  fontSize: 13,
}
