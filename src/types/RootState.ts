import { ThemeState } from "styles/theme/types"
import { RouterState } from "connected-react-router"
import { HomePageState } from "app/containers/HomePage/types"
import { GlobalState } from "app/types"
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  year: any
  theme?: ThemeState
  global?: GlobalState
  router?: RouterState
  homePage?: HomePageState
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
