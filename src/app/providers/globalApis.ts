import ApiService from "services/api_service"

export const getGlobalAPI = () => {
  return ApiService.get("/users")
}
