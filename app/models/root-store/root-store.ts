import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { AuthStoreModel } from "../auth-store/auth-store"
import { BookStoreModel } from "../book-store/book-store"
import { CharacterStoreModel } from "../character-store/character-store"
import { GeneralStoreModel } from "../general-store/general-store"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  characterStore: types.optional(CharacterStoreModel, {} as any),
  generalStore: types.optional(GeneralStoreModel, {} as any),
  authStore: types.optional(AuthStoreModel, {} as any),
  bookStore: types.optional(BookStoreModel, {} as any)
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
