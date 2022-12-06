import React from "react"
import { StyleProp, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native"
import { color, spacing, typography } from "../../theme"
import { translate, TxKeyPath } from "../../i18n"
import { Text } from "../text/text"
import { VectorIcons } from "../vector-icons/vector-icons"

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingVertical: spacing[0],
}

// the base styling for the TextInput


// currently we have no presets, but that changes quickly when you build your app.
const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
}

export interface TextFieldProps extends TextInputProps {
  /**
   * The placeholder i18n key.
   */
  placeholderTx?: TxKeyPath

  /**
   * The Placeholder text if no placeholderTx is provided.
   */
  placeholder?: string

  /**
   * The label i18n key.
   */
  labelTx?: TxKeyPath

  /**
   * The label text if no labelTx is provided.
   */
  label?: string

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Optional style overrides for the input.
   */
  inputStyle?: StyleProp<TextStyle>

  /**
   * Various look & feels.
   */
  preset?: keyof typeof PRESETS

  forwardedRef?: any
  typeIcon?: any
  nameIcon?: string
}

/**
 * A component which has a label and an input together.
 */
export function TextField(props: TextFieldProps) {
  const {
    placeholderTx,
    placeholder,
    labelTx,
    label,
    preset = "default",
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    typeIcon,
    nameIcon,
    ...rest
  } = props

  const containerStyles = [CONTAINER, PRESETS[preset], styleOverride]
  const inputStyles = [INPUT, inputStyleOverride]
  const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder

  return (
    <View style={containerStyles}>
      <Text preset="fieldLabel" tx={labelTx} text={label} />
      <View style={VIEW_INPUT}>
       <VectorIcons
        type={typeIcon}
        name={nameIcon}
        size={20}
        color={color.neutral500}
       />
      <TextInput
        placeholder={actualPlaceholder}
        placeholderTextColor={color.neutral500}
        underlineColorAndroid={color.transparent}
        {...rest}
        style={inputStyles}
        ref={forwardedRef}
        />
      </View>
    </View>
  )
}

const VIEW_INPUT : ViewStyle = {
  height: 48,
  flexDirection: 'row',
  backgroundColor: color.neutral300,
  paddingHorizontal: 16,
  alignItems: 'center',
  borderRadius: 30
}
const INPUT: TextStyle = {
  fontFamily: typography.primary,
  color: color.neutral600,
  height: 44,
  flex: 1,
  fontSize: 16,
  marginLeft: 12
}