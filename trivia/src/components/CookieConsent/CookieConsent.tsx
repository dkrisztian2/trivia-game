import { useCookies } from "react-cookie"
import styles from "./CookieConsent.module.css"

const CookieConsent = () => {
    const [_, setCookie] = useCookies(['cookie_consent'])

    const acceptCookies = () => {
        setCookie("cookie_consent", true)
    }

  return (
    <div className={styles.wrapper}>
        <div>
            <p>{"This site uses cookies to track your every move"} </p>
            <button onClick={acceptCookies}>Accept</button>
            <button>Decline</button>
        </div>
    </div>
  )
}

export default CookieConsent