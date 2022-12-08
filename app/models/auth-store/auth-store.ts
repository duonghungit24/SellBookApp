import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { goBack, resetRoot } from "../../navigators"
import { AuthApi } from "../../services/api/api-auth"
import utils from "../../utils"
import { withEnvironment } from "../extensions/with-environment"
import { withRootStore } from "../extensions/with-root-store"
import { translate } from "../../i18n"
import I18n from "i18n-js"

/**
 * Model description here for TypeScript hints.
 */
export const AuthStoreModel = types
  .model("AuthStore")
  .props({
    accessToken: types.maybeNull(types.string),
    nhaThuocId: types.maybeNull(types.number),
    tenantId: types.maybeNull(types.number),
    isIntro: types.optional(types.boolean, false),
  })
  .extend(withEnvironment)
  .extend(withRootStore)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setAccessToken: (auth) => {
      if (auth) {
        self.accessToken = auth.token
        self.nhaThuocId = auth.nhaThuocId
        self.tenantId = auth.tenantId
      } else {
        self.accessToken = null
        self.nhaThuocId = null
        self.tenantId = null
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
      if (result.code == 1) {
        self.setAccessToken(result.returnValue)
        self.rootStore.userInfoStore.getUserInfo()
      } else {
        self.rootStore.generalStore.hideLoading()
        utils.showToast({
          type: "error",
          text1: result.message || I18n.translate("showToast.errorSystem"),
        })
      }
    },
    logout: () => {
      self.setAccessToken(null)
      resetRoot({
        index: 0,
        routes: [{ name: "loginScreen" }],
      })
    },

    getChangePassword: async (params) => {
      self.rootStore.generalStore.showLoading()
      const authApi = new AuthApi(self.environment.api)
      const result = await authApi.changePassword(params)
      self.rootStore.generalStore.hideLoading()
      if (result.code == 1) {
        utils.showToast({
          type: "success",
          text1: translate("showToast.saveSuccessfully"),
        })
        goBack()
      } else {
        utils.showToast({
          type: "error",
          text1: result.message || I18n.translate("showToast.errorSystem"),
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
