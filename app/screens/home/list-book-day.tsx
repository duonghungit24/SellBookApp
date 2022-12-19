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
  ScrollView,
} from "react-native"
import { IncreaseOrDecrease, Text, VectorIcons } from "../../components"
import { configs } from "../../utils/configs"
import { color, typography } from "../../theme"
import { ItemBook } from "./Item-book"
import { HeaderListBook } from "./list-book-new"
import { navigate } from "../../navigators"

export const ListBookDay = observer(function ListBookDay({ listBook, style }: any) {
  return (
    <View style={[{ backgroundColor: color.white, paddingBottom: 12 }, style]}>
      <HeaderListBook title="Sách nổi bật" style={{ paddingHorizontal: 12 }} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 6 }}
      >
        {(listBook || []).map((item, index) => {
          return (
            <TouchableOpacity key={index} style={{ paddingHorizontal: 6 }}>
              <ItemBook
                item={item}
                url={item?.ProductImages[0]?.url}
                onPress={() => navigate("detailBookScreen", { itemDetail: item })}
              />
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
})
