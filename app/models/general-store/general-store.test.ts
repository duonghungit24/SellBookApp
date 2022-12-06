import { GeneralStoreModel } from "./general-store"

test("can be created", () => {
  const instance = GeneralStoreModel.create({})

  expect(instance).toBeTruthy()
})
