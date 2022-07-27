import { apiService } from "services/api_service"
import { RequestTypes } from "services/constants"

export const getSiteKeyAPI = () => {
  return apiService.fetchData({
    url: "config/recaptcha",
    requestType: RequestTypes.GET,
  })
}

export const getUserAPI = () => {
  return apiService.fetchData({
    url: "user/current",
    requestType: RequestTypes.GET,
  })
}

export const checkDomainApi = (name: string) => {
  return apiService.fetchData({
    url: `domain_name/check/${name}`,
    requestType: RequestTypes.GET,
  })
}
