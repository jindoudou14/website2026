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
    question: "What is your favorite material?",
    answers: [
      { text: "Aluminium", emotion: "anger" },
      { text: "Steel", emotion: "disgust" },
      { text: "Plastic", emotion: "joy" },
      { text: "Wood", emotion: "fear" },
      { text: "Rubber", emotion: "sadness" },
    ],
  },
  {
    question: "Which childhood movie franchises would you watch?",
    answers: [
      { text: "Kung Fu Panda", emotion: "anger" },
      { text: "Toy Story", emotion: "sadness" },
      { text: "Inside Out", emotion: "fear" },
      { text: "Cars", emotion: "joy" },
      { text: "Shrek", emotion: "disgust" },
    ],
  },
  {
    question: "What is your favorite emotion in the Inside Out franchise?",
    answers: [
      { text: "Anger", emotion: "anger" },
      { text: "Disgust", emotion: "disgust" },
      { text: "Joy", emotion: "joy" },
      { text: "Fear", emotion: "fear" },
      { text: "Sadness", emotion: "sadness" },
    ],
  },
  {
    question: "If your robot breaks down severely during a preliminary/playoff round, what will you do?",
    answers: [
      { text: "Panic and run around telling everyone", emotion: "fear" },
      { text: "Blame your drivers and robot team", emotion: "anger" },
      { text: "Talk to your team and find ways to fix it quickly", emotion: "joy" },
      { text: "Make excuses for the blunder", emotion: "disgust" },
      { text: "Give up", emotion: "sadness" },
    ],
  },
  {
    question: "What Discord section are you most active in in the CRC robotics server?",
    answers: [
      { text: "Announcements", emotion: "joy" },
      { text: "General", emotion: "fear" },
      { text: "Memes", emotion: "joy" },
      { text: "Random", emotion: "disgust" },
      { text: "The question forums", emotion: "sadness" },
    ],
  },
  {
    question: "Fill in the blank: i love ___ but i hate ___",
    answers: [
      { text: "Eating, Cooking", emotion: "sadness" },
      { text: "CRC robotics, nothing about it. It is perfect.", emotion: "joy" },
      { text: "staying up late, waking up in the morning", emotion: "disgust" },
      { text: "the rain, getting wet", emotion: "fear" },
      { text: "sports, getting hurt", emotion: "anger" },
    ],
  },
  {
    question: "Pick a superpower (assume it works as you expect it to work).",
    answers: [
      { text: "Teleportation", emotion: "joy" },
      { text: "Invisibility", emotion: "disgust" },
      { text: "Time travel", emotion: "anger" },
      { text: "Unrivaled Charisma", emotion: "sadness" },
      { text: "X-Ray Vision", emotion: "fear" },
    ],
  },
  {
    question: "What is your favorite robotics-specific team",
    answers: [
      { text: "Robot", emotion: "anger" },
      { text: "Film (video + tutorial)", emotion: "fear" },
      { text: "Programming", emotion: "disgust" },
      { text: "Kiosk", emotion: "joy" },
      { text: "Website", emotion: "sadness" },
    ],
  },
  {
    question: "If you start a fire, what would you do?",
    answers: [
      { text: "Watch the 2026 Marianopolis robotics tutorial", emotion: "joy" },
      { text: "Panic and look for a trusted adult", emotion: "fear" },
      { text: "Try and put out the fire yourself without help", emotion: "anger" },
      { text: "Let the fire run rampant", emotion: "anger" },
      { text: "This is fine", emotion: "sadness" },
    ],
  },
  {
    question: "Where do emotions come from?",
    answers: [
      { text: "When mommy emotion and daddy emotion meet, they plant a seed that becomes a new emotion", emotion: "joy" },
      { text: "Emotions come from how consciousness interprets experience and meaning", emotion: "fear" },
      { text: "Emotions leak into us from confused stardust", emotion: "disgust" },
      { text: "They come from how we feel about what happens to us", emotion: "sadness" },
      { text: "I don't know", emotion: "anger" },
    ],
  },
]
const emotionOrder: Emotion[] = ["anger", "disgust", "joy", "fear", "sadness"]

export default function Quiz() {
    const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [scores, setScores] = useState<Record<Emotion, number>>({
    anger: 0,
    disgust: 0,
    joy: 0,
    fear: 0,
    sadness: 0,
  })
  const [result, setResult] = useState<Emotion | null>(null)

  const handleAnswer = (emotion: Emotion) => {
    setScores(prev => ({
      ...prev,
      [emotion]: prev[emotion] + 1,
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

      {!started && !result && (
        <div className="quiz-intro">
          <h1>Welcome to the Personality Island Quiz!</h1>
          <p>
            This quiz will determine which emotion you are closest to
            and which personality island you will have.
          </p>

          <img
            src="src/assets/images/didNotChoose.png"
            alt="Inside Out Quiz Intro"
            className="quiz-intro-image"
          />

          <button className="start-quiz" onClick={() => setStarted(true)}>
            Start Quiz
          </button>
        </div>
      )}

      {started && !result && (
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

      {result && (
        <div className="quiz-result">
          <h2>Your dominant emotion is:</h2>
          <img
            src={`src/assets/images/${result}Island.png`}
            alt={result}
            className="quiz-result-image"
          />
        </div>
      )}

    </div>
  )
    
}