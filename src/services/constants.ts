import { IClientOptions } from "mqtt"

export const EMPTY_ARRAY: any[] = []

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
  ACCESS_TOKEN = "access_token",
}
export interface StandardResponse {
  message: string
  data: any
  status: boolean
  is_success: boolean
}

export enum MqttTopics {}

const mqttEndpoint = `${process.env.REACT_APP_MQTT_BASE}`
const mqttPort = `${process.env.REACT_APP_MQTT_PORT}`
const MqttProtocol = `${process.env.REACT_APP_MQTT_PROTOCOL}` as "ws" | "wss"

export const mqttServer = `${MqttProtocol}://${mqttEndpoint}:${mqttPort}/`
export const MqttAdditionalConfig: IClientOptions = {
  resubscribe: false,
  protocol: MqttProtocol,
  connectTimeout: 30 * 60 * 1000,
  reconnectPeriod: 2 * 1000,
  keepalive: 0,
}
export const IS_PRODUCTION = !!process.env.REACT_APP_IS_PRODUCTION
export const IS_DEV = process.env.NODE_ENV === "development"

// Production/Staging Url
// export const BaseUrl = process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_ENDPOINT : "/dev/"
export const BaseUrl = process.env.REACT_APP_API_ENDPOINT
