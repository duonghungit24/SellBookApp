import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const GeneralStoreModel = types
  .model("GeneralStore")
  .props({
    isLoading: types.optional(types.boolean, false)
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    showLoading: () => {
      self.isLoading = true
    },
    hideLoading: () => {
      self.isLoading = false
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface GeneralStore extends Instance<typeof GeneralStoreModel> { }
export interface GeneralStoreSnapshotOut extends SnapshotOut<typeof GeneralStoreModel> { }
export interface GeneralStoreSnapshotIn extends SnapshotIn<typeof GeneralStoreModel> { }
export const createGeneralStoreDefaultModel = () => types.optional(GeneralStoreModel, {})
