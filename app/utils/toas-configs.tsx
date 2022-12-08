import React from "react"
import { View, TouchableOpacity, ViewStyle, TextStyle } from "react-native"
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message"
import { Text, VectorIcons } from "../components"
import { TxKeyPath } from "../i18n"
import { color, typography } from "../theme"
import { configs } from "./configs"

export interface ToastProps {
  text1?: string
  text2?: string
  type: "success" | "error" | "warning" | "tomatoToast"
  position?: "top" | "bottom"
  autoHide?: boolean
  visibilityTime?: number
  topOffset?: number
  bottomOffset?: number
  keyboardOffset?: number
  onShow?: () => void
  onHide?: () => void
  onPress?: () => void
  props?: any
}

// API  https://github.com/calintamas/react-native-toast-message/blob/main/docs/api.md

/*
  1. Create the config
*/

export const toastConfig = {
  success: ({ text1, text2, onPress }: ToastProps) => (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={BTN_TOAST}>
      <VectorIcons type="MaterialIcons" name="check-circle" size={25} color={color.success} />
      <View style={CONTENT}>
        {text1 ? <Text style={TEXT1}>{text1}</Text> : null}
        {text2 ? <Text style={TEXT2}>{text2}</Text> : null}
      </View>
    </TouchableOpacity>
  ),
  error: ({ text1, text2, onPress }: ToastProps) => (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={BTN_TOAST}>
      <VectorIcons type="MaterialIcons" name="error" size={25} color={color.error} />
      <View style={CONTENT}>
        {text1 ? <Text style={TEXT1}>{text1}</Text> : null}
        {text2 ? <Text style={TEXT2}>{text2}</Text> : null}
      </View>
    </TouchableOpacity>
  ),
  warning: ({ text1, text2, onPress }: ToastProps) => (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={BTN_TOAST}>
      <VectorIcons type="MaterialIcons" name="warning" size={25} color={color.warning} />
      <View style={CONTENT}>
        {text1 ? <Text style={TEXT1}>{text1}</Text> : null}
        {text2 ? <Text style={TEXT2}>{text2}</Text> : null}
      </View>
    </TouchableOpacity>
  ),
} as any

const BTN_TOAST: ViewStyle = {
  minHeight: 60,
  width: "90%",
  paddingHorizontal: 12,
  alignItems: "center",
  backgroundColor: "#FCE8DB",
  borderRadius: 4,
  padding: 6,
  flexDirection: "row",
  ...configs.shadow,
}
const TEXT1: TextStyle = {
  fontSize: 18,
  color: "#71192F",
  ...typography.textBold,
}
const TEXT2: TextStyle = {
  fontSize: 14,
  fontFamily: typography.familyRegular,
  color: "#71192F",
  fontWeight: "400",
}
const CONTENT: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  paddingLeft: 10,
}
