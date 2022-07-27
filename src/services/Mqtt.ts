import { IS_PRODUCTION, MqttAdditionalConfig, mqttServer } from "./constants"
import { connect as mqttConnect } from "mqtt"

import { MqttTopics } from "./constants"
import { cookies, CookieKeys } from "./cookie"

export const mqttCipher = (salt: string) => {
  let textToChars = (text: string) => text.split("").map((c) => c.charCodeAt(0))
  let byteHex = (n: string) => ("0" + Number(n).toString(16)).substr(-2)
  let applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code)

  return (text: string) =>
    text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("")
}

export class MqttService {
  private static instance: MqttService
  private static mqttCl
  private static cipher
  private static clId
  public static Encoder
  private constructor() {
    MqttService.Encoder = new TextDecoder("utf-8")
  }
  public static getInstance(): MqttService {
    if (!MqttService.instance) {
      MqttService.instance = new MqttService()
      MqttService.cipher = mqttCipher("ubSalt")
      MqttService.clId = MqttService.cipher(
        "mqttjs_" + Math.random().toString(16).substr(2, 8)
      )
      MqttService.mqttCl = mqttConnect(mqttServer, {
        password: IS_PRODUCTION ? "123456789123" : MqttService.clId,
        username: IS_PRODUCTION
          ? "public"
          : cookies.get(CookieKeys.ACCESS_TOKEN) ?? MqttService.clId,
        clientId: MqttService.clId,
        ...MqttAdditionalConfig,
      })
      MqttService.mqttCl.on("connect", function (params) {
        if (process.env.NODE_ENV !== "production") {
          console.log(params)
        }
      })

      MqttService.mqttCl.on("message", function (topic: string, message) {
        // show received message
        const string = MqttService.Encoder.decode(message)
        console.log({ string })
      })
    }
    return MqttService.instance
  }

  public GetSubscriptions() {
    return MqttService.mqttCl
  }

  public ConnectToSubject(data: { subject: string }) {
    MqttService.mqttCl.subscribe(data.subject)
  }
  public DisconnectFromSubject(data: { subject: string }) {
    MqttService.mqttCl.unsubscribe(data.subject)
  }
  public ConnectToNewSubject(data: { oldSubject: string; newSubject: string }) {
    MqttService.mqttCl.unsubscribe(data.oldSubject).subscribe(data.newSubject)
  }
}

export const mqttService = MqttService.getInstance()
