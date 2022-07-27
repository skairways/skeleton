/**
 * Asynchronously loads the component for NotFoundPage
 */

import { GridLoading } from "app/components/GridLoading"
import { lazyLoad } from "utils/loadable"

export const NotFoundPage = lazyLoad(
  () => import("./index"),
  (module) => module.NotFoundPage,
  {
    fallback: <GridLoading />,
  }
)
