import { ApiResponse } from "apisauce"
import { Api } from "./api"
import { getGeneralApiProblem } from "./api-problem"

export class AuthApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async login(params): Promise<any> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.post(
        "/api/tai_khoan/dang_nhap_mobile",
        params,
      )
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }
      return response.data
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async changePassword(params): Promise<any> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.post(
        "/api/tai_khoan/doi_mat_khau",
        params,
      )
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }
      return response.data
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async forgotPassword(params): Promise<any> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.post(
        "/api/tai_khoan/quen_mat_khau",
        params,
      )
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }
      return response.data
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
