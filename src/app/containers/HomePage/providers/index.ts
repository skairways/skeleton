import ApiService from "services/api_service"

export const getTodoAPI = () => {
  return ApiService.get("/todos/1")
}
