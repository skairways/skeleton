/**
 *
 * Asynchronously loads the component for Components
 *
 */
import { lazyLoad } from "utils/loadable"
import { GridLoading } from "app/components/GridLoading"

export const Components = lazyLoad(
  () => import("./index"),
  (module) => module.Components,
  { fallback: <GridLoading /> }
)
