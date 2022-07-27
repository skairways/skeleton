import { apiService } from "services/api_service"
import { RequestTypes } from "services/constants"

const apiDomain = "domain"

export const getDomainsApi = () => {
  return apiService.fetchData({
    url: `${apiDomain}_name`,
    requestType: RequestTypes.GET,
  })
}
