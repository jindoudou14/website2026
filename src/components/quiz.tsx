import { useState } from "react"
import "../css/quiz.css"

type Emotion = "anger" | "disgust" | "joy" | "fear" | "sadness"

type answer = {
    text: string
    emotion: Emotion
}

type question = {
    question: string
    answers: answer[]
}

const QUESTIONS: question[] = [
  {
    question: "Someone cuts in line in front of you. What do you do?",
    answers: [
      { text: "Call them out immediately", emotion: "anger" },
      { text: "Give them a gross look", emotion: "disgust" },
      { text: "Laugh it off", emotion: "joy" },
      { text: "Say nothing but feel tense", emotion: "fear" },
      { text: "Say nothing but feel sad", emotion: "sadness" },
    ],
  },
  {
    question: "Your room is messy.",
    answers: [
      { text: "It makes me mad", emotion: "anger" },
      { text: "That’s disgusting", emotion: "disgust" },
      { text: "Doesn’t bother me", emotion: "joy" },
      { text: "It stresses me out", emotion: "fear" },
      { text: "Start crying", emotion: "sadness" },
    ],
  },
]
const emotionOrder: Emotion[] = ["anger", "disgust", "joy", "fear", "sadness"]

export default function Quiz() {
    const [current,setCurrent] = useState(0)
    const [scores, setScores] = useState<Record<Emotion, number>>({
        anger: 0,
        disgust: 0,
        joy: 0,
        fear: 0,
        sadness: 0
    })

    const [result, setResult] = useState<Emotion | null>(null)

    const handleAnswer = (emotion: Emotion) => {
        setScores(prev => ({
            ...prev,
            [emotion]: prev[emotion]+1,
        }))
        if (current + 1 < QUESTIONS.length) {
            setCurrent(current + 1)
        } else {
            calculateResult()
        }

    }
    const calculateResult = () => {
        let max = -1
        let winner: Emotion = emotionOrder[0]

        for (const emotion of emotionOrder) {
        if (scores[emotion] > max) {
            max = scores[emotion]
            winner = emotion
        }
        }
        setResult(winner)
        
    }
    return (
    <div className="quiz-page">

      {result ? (
        <div className="quiz-result">
          <h2>Your dominant emotion is:</h2>
          <img
            src={`src/assets/images/${result}Island.png`}
            alt={result}
            style={{ width: "300px" }}
          />
        </div>
      ) : (
        <div className="quiz">
          <h2>{QUESTIONS[current].question}</h2>

          <div className="answers">
            {QUESTIONS[current].answers.map((a, i) => (
              <button key={i} onClick={() => handleAnswer(a.emotion)}>
                {a.text}
              </button>
            ))}
          </div>

          <p>
            Question {current + 1} / {QUESTIONS.length}
          </p>
        </div>
      )}

    </div>
  )
    
}