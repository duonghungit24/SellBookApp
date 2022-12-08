import React, { useState, useEffect } from "react"
import { StyleProp, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import Modal from 'react-native-modal'
import { TextField } from "../text-field/text-field"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
  alignItems: 'center'
}

export interface ModalNumberFieldProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  isVisible: boolean
  onPressCancel: () => void
  onPressDone: (value) => void
  amountDefault: number
}

/**
 * Describe your component here
 */
export const ModalNumberField = observer(function ModalNumberField(props: ModalNumberFieldProps) {
  const { style, isVisible, onPressCancel, onPressDone, amountDefault } = props
  const styles = Object.assign({}, CONTAINER, style)
  const [amount, setAmount] = useState('')

  useEffect(() => {
    if (isVisible) {
      setAmount(`${amountDefault}`)
    }
  }, [isVisible])

  return (
    <Modal
      avoidKeyboard
      isVisible={isVisible}
      style={styles}>
      <View style={CONTENT}>
        <View style={VIEW_INPUT}>
          <Text style={TITLE}>Số lượng</Text>
          <TextInput
           maxLength={3}
           style={{ width: '80%' }}
           keyboardType='number-pad'
           value={amount}
           onChangeText={(value) => {
             if (!isNaN(Number(value))) {
               setAmount(`${Number(value)}`)
             } else {
               setAmount('0')
             }
           }}
          />
        </View>
        <View style={VIEW_ROW_BTN}>
          <TouchableOpacity
            style={BTN}
            onPress={onPressCancel}>
            <Text style={TEXT_CANCEL}>Hủy</Text>
          </TouchableOpacity>
          <View style={LINE_SPACE} />
          <TouchableOpacity
            style={BTN}
            onPress={() => {
              onPressCancel()
              onPressDone(amount)
            }}>
            <Text style={TEXT_DONE}>Xong</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
})

const CONTENT: ViewStyle = {
  height: 200,
  width: 300,
  backgroundColor: color.white,
  borderRadius: 6,
  justifyContent: 'center',
  alignItems: 'center'
}
const TITLE: TextStyle = {
  color: color.neutral700,
  ...typography.textBold
}
const BTN: ViewStyle = {
  height: 40, width: '50%',
  justifyContent: 'center',
  alignItems: 'center'
}
const VIEW_ROW_BTN: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  borderTopWidth: 0.5,
  borderTopColor: color.disable
}
const LINE_SPACE: ViewStyle = {
  width: 0.5,
  height: '100%',
  backgroundColor: color.disable
}
const VIEW_INPUT: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}
const TEXT_DONE: TextStyle = {
  color: color.primary,
  fontSize: 16,
  ...typography.textBold
}
const TEXT_CANCEL: TextStyle = {
  fontSize: 16,
  ...typography.textBold
}