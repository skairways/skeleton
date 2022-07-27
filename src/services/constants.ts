export enum RequestTypes {
  PUT = "PUT",
  POST = "POST",
  GET = "GET",
  DELETE = "DELETE",
}
export enum ContentTypes {
  JSON = "application/json",
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  MULTIPART_FORM_DATA = "multipart/form-data",
}
export interface RequestParameters {
  requestType: RequestTypes
  url: string
  data?: any
  isRawUrl?: boolean
  contentType?: ContentTypes
}
export enum LocalStorageKeys {}
export enum SessionStorageKeys {
  NEW_KEY = "new-key",
}
export interface StandardResponse {
  message: string
  data: any
  status: boolean
  is_success: boolean
}

export const IS_PRODUCTION = !!process.env.REACT_APP_IS_PRODUCTION
export const IS_DEV = process.env.NODE_ENV === "development"

// Production/Staging Url
export const BaseUrl = process.env.REACT_APP_API_ENDPOINT
