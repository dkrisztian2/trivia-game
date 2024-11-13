import { useCookies } from "react-cookie"
import CookieConsent from "./components/CookieConsent/CookieConsent"


const App = () => {
  const [cookie, ] = useCookies(['cookie_consent'])

  return (
    <div>
      {!cookie.cookie_consent && <CookieConsent/>}
      
    </div>
  )
}

export default App
