import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, Easing, Animated } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import AnimationContainer from "./animation-container"
import { stagger } from './utils-spinner'

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

export interface SpinnerProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  size: number
  color: string
  animating: boolean
  hidesWhenStopped: boolean
}

/**
 * Describe your component here
 */
export const Spinner = observer(function Spinner(props: SpinnerProps) {
  const {
    style,
    size,
    color,
    animating,
    hidesWhenStopped,
    ...rest
  } = props
  const styles = Object.assign({}, CONTAINER, style)

  return (
    <AnimationContainer
      initAnimation={() => ({
        flow: (value) =>
          stagger(150, 3, {
            duration: 1400,
            value: value,
            easing: Easing.bezier(0.455, 0.03, 0.515, 0.955),
            keyframes: [0, 40, 80, 100],
          }),
      })}
      animating={animating}
    >
      {(values) => (
        <View
          style={[
            {
              width: size,
              height: size * 0.25,
              justifyContent: 'space-between',
              flexDirection: 'row',
              opacity: !animating && hidesWhenStopped ? 0 : 1,
            },
            style,
          ]}
          {...rest}
        >
          {values.flow.map((value, index) => (
            <Animated.View
              key={index}
              style={{
                width: size * 0.25,
                height: size * 0.25,
                borderRadius: (size * 0.25) / 2,
                backgroundColor: color,
                transform: [
                  {
                    scale: value.interpolate({
                      inputRange: [0, 40, 80, 100],
                      outputRange: [0.3, 1, 0.3, 0.3],
                    }),
                  },
                ],
              }}
            />
          ))}
        </View>
      )}
    </AnimationContainer>
  )
})
