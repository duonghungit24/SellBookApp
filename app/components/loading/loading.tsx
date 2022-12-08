import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import ReactNativeModal from "react-native-modal"
import { Spinner } from "../spinner/spinner"
import { useStores } from "../../models"

const CONTAINER: ViewStyle = {
  flex: 1,
  backgroundColor: 'transparent',
  position: 'absolute',
  zIndex: 99,
  alignSelf: 'center',
}

const CONTAINER_MODAL: ViewStyle = {
  flex: 1,
  margin: 0,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: color.transparent,
}

export interface LoadingProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  isVisible?: boolean
}

/**
 * Describe your component here
*/
export const Loading = observer(function Loading(props: LoadingProps) {
  const { style, isVisible } = props
  const { generalStore } = useStores()

  return (
    <ReactNativeModal
      animationIn="pulse"
      animationOut="pulse"
      style={CONTAINER_MODAL}
      backdropOpacity={0}
      isVisible={generalStore.isLoading || isVisible}
    >
      <View style={CONTAINER}>
        <Spinner size={50} color={color.mainColor} animating={true} hidesWhenStopped={true} />
      </View>
    </ReactNativeModal>
  )
})
