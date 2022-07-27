export interface GlobalState {
  loggedIn: boolean
  isLoadingSignIn: boolean
  executeRecaptcha: any
  globalModals: {
    isOpenConnectWalletInfo: boolean
    isOpenConnectWalletQR: boolean
    isOpenUserWallet: boolean
    isOpenDisconnectWallet: boolean
    isOpenAlert: boolean
    isOpenCreateSubdomain: boolean
    isOpenConfirmSubdomain: boolean
  }
  qrCodeWalletConnectorData: QrCodeWalletConnectorDataType
  walletInfoData: WalletInfoDataType
  afterWalletConnection: any
  user: UserDataType | undefined
  isLoadingUserData: boolean
}
export interface OpenWalletConnectionModel {
  open: boolean
  afterConnection?: () => void
}
export type StatusType =
  | "available"
  | "unavailable"
  | "pending"
  | "sold"
  | "new"

export enum StatusEnum {
  available = "available",
  unavailable = "unavailable",
  pending = "pending",
  sold = "sold",
  new = "new",
}

// Wallet types

export type QrCodeWalletConnectorDataType = WalletResponse | undefined

export interface WalletResponse {
  connect_string: string
}

export type WalletInfoDataType = Array<WalletAccountInfo> | undefined

export interface WalletAccountInfo {
  address: string
  balance: number
}

export interface TransferMessage {
  data: {
    tx_hash: string
    tx_status: TxStatus
    action: any
  }
  message_type: TransferMessageTypes
  network_id: string
  originator: string
  user_status: string
}

export enum TransferMessageTypes {
  SimpleTransferResponse = "SimpleTransferResponse",
}

export enum TxStatus {
  Accepted = "Accepted",
  Rejected = "Rejected",
}

export interface SignInModel {
  wallet_address: string
}

export interface DomainType {
  id: number
  name: string
  owner: null
  editor: null
  parent: null
  registrant: null | string
  resolver: null | string
  expiration_date: null | string
  available: boolean
  status: StatusType
  price?: DomainPriceType
  subscription_fee?: DomainPriceType
  gas_fee?: DomainPriceType
  total?: DomainPriceType
}

export interface DomainPriceType {
  primary: {
    value: number
    unit: string
  }
  secondary: {
    value: number
    unit: string
  }
}

export type DomainsType = Array<DomainType> | undefined

export interface PageableInterface {
  page?: number
  size?: number
}

// current user data

export interface UserDataType {
  id: number
  wallet_address: string
  is_blocked: boolean
  avatar_url: null
  username: null | string
  twitter_acc: null
  created_at: string
}
