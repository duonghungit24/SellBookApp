import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { goBack, resetRoot } from "../../navigators"
import { AuthApi } from "../../services/api/api-auth"

import { withEnvironment } from "../extensions/with-environment"
import { withRootStore } from "../extensions/with-root-store"
import { translate } from "../../i18n"
import I18n from "i18n-js"
import { utils } from "../../utils"
import { rootStore } from "../root-store/setup-root-store"

/**
 * Model description here for TypeScript hints.
 */
export const AuthStoreModel = types
  .model("AuthStore")
  .props({
    accessToken: types.maybeNull(types.string),
    isIntro: types.optional(types.boolean, false),
  })
  .extend(withEnvironment)
  .extend(withRootStore)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setAccessToken: (token) => {
      if (token) {
        self.accessToken = token
      } else {
        self.accessToken = null
      }
    },
    setStatusIntro: () => {
      self.isIntro = true
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    login: async (params) => {
      self.rootStore.generalStore.showLoading()
      const authApi = new AuthApi(self.environment.api)
      const result = await authApi.login(params)
      self.rootStore.generalStore.hideLoading()
      if (result.isSuccess) {
        self.setAccessToken(result.data.token)
        rootStore.authStore.getUserInfo()
        if (self.accessToken) {
          resetRoot({
            index: 0,
            routes: [{ name: "bottomTabs" }],
          })
        }
        // self.rootStore.userInfoStore.getUserInfo()
      } else {
        utils.showToast({
          type: "error",
          text1: result.errorCode == "Information wrong" && "Tài khoản hoặc mật khẩu không đúng",
        })
      }
    },

    getUserInfo: async () => {
      const userApi = new AuthApi(self.environment.api)
      const result = await userApi.getUser()
      self.rootStore.generalStore.hideLoading()
      console.log("user", result)
      // if (result.code == 1) {
      //   // self.setUserInfo(result.returnValue)
      //   resetRoot({
      //     index: 0,
      //     routes: [{ name: "bottomTabs" }],
      //   })
      // } else {
      //   utils.showToast({
      //     type: "error",
      //     text1: result.message || I18n.translate("showToast.errorSystem"),
      //   })
      //   resetRoot({
      //     index: 0,
      //     routes: [{ name: "loginScreen" }],
      //   })
      // }
    },

    logout: () => {
      self.setAccessToken(null)
      resetRoot({
        index: 0,
        routes: [{ name: "loginScreen" }],
      })
    },

    register: async (params) => {
      self.rootStore.generalStore.showLoading()
      const authApi = new AuthApi(self.environment.api)
      const result = await authApi.register(params)
      console.log("result", result)
      self.rootStore.generalStore.hideLoading()
      if (result.isSuccess) {
        utils.showToast({
          type: "success",
          text1: "Đăng kí tài khoản thành công",
        })
        goBack()
      } else {
        utils.showToast({
          type: "error",
          text1: result.errorCode,
        })
      }
    },

    getChangePassword: async (params) => {
      self.rootStore.generalStore.showLoading()
      const authApi = new AuthApi(self.environment.api)
      const result = await authApi.changePassword(params)
      self.rootStore.generalStore.hideLoading()
      if (result.isSuccess) {
        utils.showToast({
          type: "success",
          text1: "Thay đổi mật khẩu thành công",
        })
        self.setAccessToken(null)
        resetRoot({
          index: 0,
          routes: [{ name: "loginScreen" }],
        })
      } else {
        utils.showToast({
          type: "error",
          text1: result.errorCode || "Lỗi hệ thống",
        })
      }
    },

    getForgotPassword: async (params) => {
      self.rootStore.generalStore.showLoading()
      const authApi = new AuthApi(self.environment.api)
      const result = await authApi.forgotPassword(params)
      self.rootStore.generalStore.hideLoading()
      if (result.code == 1) {
        utils.showToast({
          type: "success",
          text1: translate("linkquenmatkhau"),
        })
      } else {
        utils.showToast({
          type: "error",
          text1: result.message || I18n.translate("showToast.errorSystem"),
        })
      }
    },
  }))

export interface AuthStore extends Instance<typeof AuthStoreModel> {}
export interface AuthStoreSnapshotOut extends SnapshotOut<typeof AuthStoreModel> {}
export interface AuthStoreSnapshotIn extends SnapshotIn<typeof AuthStoreModel> {}
export const createAuthStoreDefaultModel = () => types.optional(AuthStoreModel, {})
