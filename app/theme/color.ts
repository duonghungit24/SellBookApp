import { palette } from "./palette"

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The screen background.
  /**
   * The main tinting color.
   */
  /**
   * The main tinting color, but darker.
   */
  primaryDarker: palette.orangeDarker,
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.offWhite,
  /**
   * The default color of text in many components.
   */
   warning: "#FFBE40",
   disable: "#9FABB6", 
  background: "#E5E5E5",
  backgroundSoft: "#F5F6F8",
  text: palette.white,
  primary500: "#3BB549",
  primary: "#DE222F",
  neutral900: "#2F4858",
  neutral700: "#52606B",
  neutral600: "#677987",
  neutral500: "#7D8D9A",
  neutral400: "#B4BFC8",
  neutral300: "#EFF1F4",
  neutral200: "#F6F8FA",
  neutral100: "#F9F9F9",
  white: "#FFF",
  border: "#E4E7EB",
  success: "#4AC256",
  semanticInfo: "#2C90EC",
  SemanticInfo100: "#EAF4FD",
  mainColor: "#2a9d8f",
  mainColor100: "#FFEBEF",
  mainColor600: "#DE222F",
  neutralDisable: "#9FABB6",
  textMute: "#66788A",
  black900: "#1A202C",
  black600: "#6E737E",
  black300: "#949CA4",
  accent500: "#44B1DD",
  lineColor: "#EFF1F4",

  /**
   * Secondary information.
   */
  dim: palette.lightGrey,
  /**
   * Error messages and icons.
   */
  error: palette.angry,

  /**
   * Storybook background for Text stories, or any stories where
   * the text color is color.text, which is white by default, and does not show
   * in Stories against the default white background
   */
  storybookDarkBg: palette.black,

  /**
   * Storybook text color for stories that display Text components against the
   * white background
   */
  storybookTextColor: palette.black,
}
