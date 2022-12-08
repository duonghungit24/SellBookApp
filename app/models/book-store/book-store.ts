import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { async } from "validate.js"
import { BookApi } from "../../services/api"
import { withEnvironment } from "../extensions/with-environment"
import { withRootStore } from "../extensions/with-root-store"
/**
 * Model description here for TypeScript hints.
 */
export const BookStoreModel = types
  .model("BookStore")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .extend(withEnvironment)
  .extend(withRootStore)
  .actions((self) => ({
    getAllBook: async (params) => {
      const bookApi = new BookApi(self.environment.api)
      const result = await bookApi.getAllBook(params)
      console.log("result", result)
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface BookStore extends Instance<typeof BookStoreModel> {}
export interface BookStoreSnapshotOut extends SnapshotOut<typeof BookStoreModel> {}
export interface BookStoreSnapshotIn extends SnapshotIn<typeof BookStoreModel> {}
export const createBookStoreDefaultModel = () => types.optional(BookStoreModel, {})
