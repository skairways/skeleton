import { toast } from "react-toastify"
import { format, addYears } from "date-fns"

export const omit = (key: string, obj: any) => {
  const { [key]: omitted, ...rest } = obj
  return rest
}

export const getRandomColor = (name: string = "CNS"): string => {
  const firstAlphabet: string = name?.charAt(0).toLowerCase()
  const lastAlphabet: string = name?.charAt(name.length - 1).toLowerCase()
  const midAlphaber: string = name
    ?.charAt(Math.ceil(name.length / 2))
    .toLowerCase()

  const asciiCode: number = firstAlphabet?.charCodeAt(0)
  const asciiCodeMid: number = midAlphaber?.charCodeAt(0)
  const asciiCodeLast: number = lastAlphabet?.charCodeAt(0)

  const colorNum: string =
    asciiCodeLast?.toString() + asciiCode?.toString() + asciiCodeMid?.toString()

  var num: number = Math.round(0x1f1111 * parseInt(colorNum))
  var r: number = (num >> 16) & 255
  var g: number = (num >> 8) & 255
  var b: number = num & 255

  return "rgb(" + r + ", " + g + ", " + b + ", 1)"
}

export const copiedToClipboardMsg = () => {
  toast.success("Copied to clipboard!")
}

export const removeTrailingDomainName = (domainName) => {
  return domainName.replace(/\.ccd$/, "")
}

export const walletToName = (wallet: string) => {
  return `${wallet.slice(0, 3)}...${wallet.slice(wallet.length - 3)}`
}

export const formatYear = (year: number) => {
  return `${format(addYears(new Date(), year), "yyyy-MM-dd")}T23:59:59`
}
