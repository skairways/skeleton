/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from "react-helmet-async"
import { Switch, Route } from "react-router-dom"
import { GlobalStyle } from "../styles/global-styles"

import "react-toastify/dist/ReactToastify.css"

import { HomePage } from "./containers/HomePage/Loadable"

import { NotFoundPage } from "./containers/NotFoundPage/Loadable"

import { AppPages } from "./constants"
import { useTranslation } from "react-i18next"
import { translations } from "locales/i18n"
import { useGlobalSlice } from "./slice"
import styled from "styled-components/macro"
import { Components } from "./containers/ComponentsPage/Loadable"

export function App() {
  useGlobalSlice()

  const { t } = useTranslation()

  return (
    <>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Bictory"
          defaultTitle={t(translations.HomePage.home())}
        >
          <meta name="description" content="Bictory" />
        </Helmet>

        <Switch>
          <Route exact path={AppPages.RootPage} component={HomePage} />
          <Route path={AppPages.Components} component={Components} />

          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </AppWrapper>
    </>
  )
}

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`
