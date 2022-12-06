import * as React from "react"
import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { TxKeyPath } from "../../i18n"

const CONTAINER: ViewStyle = {
  height: 48,
  backgroundColor: color.mainColor,
  justifyContent: "center",
  borderRadius: 8,
}

const TEXT: TextStyle = {
  textAlign: "center",
  fontSize: 16,
  fontFamily: typography.familyBold,
  fontWeight: "600",
  color: color.white,
}

export interface ButtonAppProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  styleText?: StyleProp<TextStyle>
  title?: string
  titleTx?: TxKeyPath
  onPress: () => void
}

/**
 * Describe your component here
 */
export const ButtonApp = observer(function ButtonApp(props: ButtonAppProps) {
  const { style, styleText, title, titleTx, onPress } = props
  const styles = Object.assign({}, CONTAINER, style)
  const textStyle = Object.assign({}, TEXT, styleText)

  return (
    <TouchableOpacity style={styles} onPress={onPress}>
      <Text style={textStyle} tx={titleTx} text={title} />
    </TouchableOpacity>
  )
})
