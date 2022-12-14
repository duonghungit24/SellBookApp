import { ApiResponse } from "apisauce"
import { Api } from "./api"
import { getGeneralApiProblem } from "./api-problem"

export class BookApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async getAllBook(params): Promise<any> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.get(
        `/api/product/?search=${params.search}&category=${params.category}&page=${params.page}&title=${params.title}&type=${params.type}`,
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
