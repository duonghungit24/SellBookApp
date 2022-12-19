import React, { FC, useState, useRef } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, TextStyle, TouchableOpacity, Image, ImageStyle } from "react-native"
import { IncreaseOrDecrease, Text, VectorIcons } from "../../components"
import { configs } from "../../utils/configs"
import { color, typography } from "../../theme"
import { utils } from "../../utils"
import { DEFAULT_API_CONFIG } from "../../services/api/api-config"

export const ItemBook = observer(function ItemBook({ item, url, style, onPress }: any) {
  return (
    <TouchableOpacity style={[WRAP_ITEM_BOOK, style]} activeOpacity={0.9} onPress={onPress}>
      <Image
        source={{
          uri: `${DEFAULT_API_CONFIG.url}/${url}`,
        }}
        style={IMAGE_BOOK}
      />
      <Text style={NAME_BOOK} numberOfLines={1}>
        {item?.name}
      </Text>
      <Text style={AUTHOR} numberOfLines={1}>
        {item?.author}
      </Text>
      <Text style={PRICE}>{utils.displayMoney(item?.priceSelling)}đ</Text>
    </TouchableOpacity>
  )
})

const IMAGE_BOOK: ImageStyle = {
  flex: 1,
  resizeMode: "cover",
  borderRadius: 8,
  padding: 12,
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
  marginTop: 6,
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
