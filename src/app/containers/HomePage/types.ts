import { DomainsType, DomainType } from "app/types"

/* --- STATE --- */
export interface HomePageState {
  domains: DomainsType
  isLoadingDomains: boolean
  searchedDomain: undefined | DomainType
  searchValue: string
  total: number | undefined
}

export type ContainerState = HomePageState
