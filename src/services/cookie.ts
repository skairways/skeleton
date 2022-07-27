import CookieProvider, { CookieAttributes } from "js-cookie"

export enum CookieKeys {}
export const cookies = CookieProvider

export const cookieConfig = (): CookieAttributes => {
  let date = new Date()
  date.setTime(date.getTime() + 11 * 60 * 60 * 1000)
  const isLocal = process.env.NODE_ENV !== "production"
  return {
    path: "/",
    domain: isLocal ? "localhost" : ".cns",
    expires: date,
    sameSite: "Strict",
    secure: process.env.NODE_ENV === "production",
  }
}
