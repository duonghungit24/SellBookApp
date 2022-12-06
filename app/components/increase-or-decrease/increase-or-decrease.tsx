import React, { useState } from "react"
import { StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { VectorIcons } from "../vector-icons/vector-icons"
import { ModalNumberField } from "../modal-number-field/modal-number-field"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

export interface IncreaseOrDecreaseProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  num: number
  onDecreaseTotal: () => void
  onIncreaseTotal: () => void
  onChangeTotal: (value) => void
}

/**
 * Describe your component here
 */
export const IncreaseOrDecrease = observer(function IncreaseOrDecrease(
  props: IncreaseOrDecreaseProps,
) {
  const { style, num, onDecreaseTotal, onIncreaseTotal, onChangeTotal } = props
  const styles = Object.assign({}, CONTAINER, style)
  const [isVisible, setVisible] = useState(false)

  return (
    <>
      <ModalNumberField
        isVisible={isVisible}
        amountDefault={num}
        onPressCancel={() => setVisible(false)}
        onPressDone={onChangeTotal}
      />
      <View style={VIEW_ROW_SELECT}>
        <TouchableOpacity onPress={onDecreaseTotal}>
          <VectorIcons
            type="Ionicons"
            name="remove-circle-outline"
            size={25}
            color={color.semanticInfo}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Text style={TEXT_NUMBER_PRODUCT}>{num}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onIncreaseTotal}>
          <VectorIcons
            type="Ionicons"
            name="add-circle-outline"
            size={25}
            color={color.semanticInfo}
          />
        </TouchableOpacity>
      </View>
    </>
  )
})

const TEXT_NUMBER_PRODUCT: TextStyle = {
  width: 40,
  textAlign: "center",
  fontFamily: typography.familyRegular,
  color: color.neutral700,
}
const VIEW_ROW_SELECT: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}
