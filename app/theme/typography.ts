import { Platform, TextStyle } from "react-native"

/**
 * You can find a list of available fonts on both iOS and Android here:
 * https://github.com/react-native-training/react-native-fonts
 *
 * If you're interested in adding a custom font to your project,
 * check out the readme file in ./assets/fonts/ then come back here
 * and enter your new font name. Remember the Android font name
 * is probably different than iOS.
 * More on that here:
 * https://github.com/lendup/react-native-cross-platform-text
 *
 * The various styles of fonts are defined in the <Text /> component.
 */
export const typography = {
  /**
   * The primary font.  Used in most places.
   */
  primary: Platform.select({ ios: "GoogleSans-Regular", android: "GoogleSans-Regular" }),
  familyBold: Platform.select({ ios: "GoogleSans-Bold", android: "GoogleSans-Bold" }),
  familyLight: Platform.select({ ios: "GoogleSans-Light", android: "GoogleSans-Light" }),
  familyMedium: Platform.select({ ios: "GoogleSans-Medium", android: "GoogleSans-Medium" }),
  familyRegular: Platform.select({ ios: "GoogleSans-Regular", android: "GoogleSans-Regular" }),
  textBold: {
    ...Platform.select({
      ios: {
        fontFamily: "GoogleSans-Bold",
        fontWeight: null,
      },
      android: {
        fontFamily: "GoogleSans-Bold",
        fontWeight: "600",
      },
    }),
  } as TextStyle,
  textBoldMedium: {
    ...Platform.select({
      ios: {
        fontFamily: "GoogleSans-Bold",
        fontWeight: "500",
      },
      android: {
        fontFamily: "GoogleSans-Bold",
        fontWeight: "500",
      },
    }),
  } as TextStyle,
  textRegular: {
    ...Platform.select({
      ios: {
        fontFamily: "GoogleSans-Regular",
        fontWeight: "400",
      },
      android: {
        fontFamily: "GoogleSans-Regular",
        fontWeight: "400",
      },
    }),
  } as TextStyle,
  textLight: {
    ...Platform.select({
      ios: {
        fontFamily: "GoogleSans-Light",
        fontWeight: "400",
      },
      android: {
        fontFamily: "GoogleSans-Light",
        fontWeight: "400",
      },
    }),
  } as TextStyle,
  textMedium: {
    ...Platform.select({
      ios: {
        fontFamily: "GoogleSans-Medium",
        fontWeight: "500",
      },
      android: {
        fontFamily: "GoogleSans-Medium",
        fontWeight: "500",
      },
    }),
  } as TextStyle,
}
