import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { goBack, resetRoot } from "../../navigators"
import { AuthApi } from "../../services/api/api-auth"

import { withEnvironment } from "../extensions/with-environment"
import { withRootStore } from "../extensions/with-root-store"
import { translate } from "../../i18n"
import I18n from "i18n-js"
import { utils } from "../../utils"

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
      console.log(result)
      self.rootStore.generalStore.hideLoading()
      if (result.isSuccess) {
        self.setAccessToken(result.data.token)
        console.log(self.accessToken)
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
      // getUserInfo: async () => {
      //   // const userApi = new UserInfoApi(self.environment.api)
      //   // const result = await userApi.getUserInfo()
      //   // self.rootStore.generalStore.hideLoading()
      //   if (result.code == 1) {
      //     self.setUserInfo(result.returnValue)
      //     resetRoot({
      //       index: 0,
      //       routes: [{ name: "bottomTabs" }],
      //     })
      //   } else {
      //     utils.showToast({
      //       type: "error",
      //       text1: result.message || I18n.translate("showToast.errorSystem"),
      //     })
      //     resetRoot({
      //       index: 0,
      //       routes: [{ name: "loginScreen" }],
      //     })
      //   }
      // },
      // const dt = {
      //   data: {
      //     refreshToken:
      //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM5MDZmMjBiLTE3YTctNDdkMC1hMjc1LTcxN2E5NmFhMjY4ZSIsImlhdCI6MTY3MDUxNTM1MSwiZXhwIjoxNjcxMzc5MzUxfQ.vnPmMvWXUnR-V8DLCTn37O8lQD1kIf1_lQmOPTcLEk8",
      //     token:
      //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM5MDZmMjBiLTE3YTctNDdkMC1hMjc1LTcxN2E5NmFhMjY4ZSIsImlhdCI6MTY3MDUxNTM1MSwiZXhwIjoxNjcwNjAxNzUxfQ.N1VTUUd159zA_g6Ke8qtVWXBzK_EV85OGRKd78aPf-E",
      //   },
      //   isSuccess: true,
      //   message: "Success",
      // }
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
