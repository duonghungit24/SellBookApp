import { Dimensions, Platform, StatusBar } from "react-native"

// Size Iphone 11 pro
const guidelineBaseWidth = 375
const guidelineBaseHeight = 812
const { width, height } = Dimensions.get("window")

export const configs = {
  windowWidth: width,
  windowHeight: height,
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  horizontalScale: (size: number) => (width / guidelineBaseWidth) * size,
  verticalScale: (size: number) => (height / guidelineBaseHeight) * size,
  moderateScale: (size: number, factor = 0.5) => {
    return size + (configs.verticalScale(size) - size) * factor
  },
  avatarDefault: "https://graph.facebook.com/2655703124563220/picture?type=square",
}