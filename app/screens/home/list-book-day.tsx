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

export const ListBookDay = observer(function ListBookDay({ item }: any) {
  return (
    <View style={{ backgroundColor: color.white, paddingBottom : 12}}>
      <HeaderListBook title="Sách mới nhất" style={{paddingHorizontal: 12}} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:6}}>
        {[1, 2, 3,4,5].map((item, index) => {
          return (
            <View key={index}  style={{ paddingHorizontal: 6 }}>
              <ItemBook />
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
})
