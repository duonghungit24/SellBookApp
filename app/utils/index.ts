import Toast from "react-native-toast-message"
import { ToastProps } from "./toas-configs"
import { launchCamera, launchImageLibrary, ImageLibraryOptions } from "react-native-image-picker"

export const utils = {
  displayMoney(value) {
    return (value != null || value != undefined ? value.toString() : "").replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ",",
    )
  },
  showToast(params: ToastProps) {
    Toast.show(params)
  },

  hideToast() {
    Toast.hide()
  },

  openImageLibrary: async (options: ImageLibraryOptions, callback) => {
    const result = await launchImageLibrary({
      quality: 0.5,
      videoQuality: "medium",
      ...options,
    })
    callback(result)
  },

  openCamera: async (options: ImageLibraryOptions, callback) => {
    const result = await launchCamera({
      quality: 0.5,
      videoQuality: "medium",
      ...options,
    })
    callback(result)
  },
}
