import { useCookies } from "react-cookie"
import CookieConsent from "./components/CookieConsent/CookieConsent"
import { useEffect, useState } from "react"
import { getTrivia } from "./services/TriviaService"
import TriviaQuestion from "./components/trivia-question/TriviaQuestion"

export type TriviaType = {
  type : string,
  difficulty : string,
  category : string,
  question : string,
  correct_answer : string,
  incorrect_answers : string[]
}

const App = () => {
  const [cookie, ] = useCookies(['cookie_consent'])
  const [trivia_questions, setTrivia] = useState<TriviaType[]>([])
  const [trivia_idx, setTriviaIdx] = useState(0)

  useEffect(() =>{
    getTrivia().then(data => setTrivia(data.results))
  }, [])

  const nextQuestion = () => {
    if(trivia_questions.length - 1 > trivia_idx){
      setTriviaIdx(trivia_idx => trivia_idx + 1)
    }
  }

  return (
    <div>
      {trivia_questions.length >0 ?
      <TriviaQuestion trivia ={trivia_questions[trivia_idx]} 
      nextQuestion={nextQuestion}/> :
      <></>
      } 

      {!cookie.cookie_consent && <CookieConsent/>}   
    </div>
  )
}

export default App
