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
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { translations } from "locales/i18n"
import { useGlobalSlice } from "./slice"
import styled from "styled-components/macro"
import { Components } from "./containers/Components/Loadable"
import { Container } from "@material-ui/core"
import { media } from "styles/media"

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

        <Layout>
          <Container>
            <MainContent>
              <Switch>
                <Route exact path={AppPages.RootPage} component={HomePage} />
                <Route path={AppPages.Components} component={Components} />

                <Route component={NotFoundPage} />
              </Switch>
            </MainContent>
          </Container>
        </Layout>
        <GlobalStyle />
      </AppWrapper>
    </>
  )
}

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Layout = styled.div`
  display: flex;
  overflow: hidden;
`

const MainContent = styled.main`
  width: 100%;
  padding: 70px 40px;

  ${media.md`
    padding: 70px 0 40px;
  `}
`
