'use client'

import { useEffect, useRef, useState } from "react"

interface FaqItem {
  q: string
  a: string
}

interface FaqsCardProps {
  faqsList: FaqItem
  idx: number
}

const FaqsCard: React.FC<FaqsCardProps> = ({ faqsList, idx }) => {
  const answerElRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState(false)
  const [answerH, setAnswerH] = useState(0)

  useEffect(() => {
    if (answerElRef.current) {
      const answerElH = (answerElRef.current.firstChild as HTMLElement).offsetHeight
      setAnswerH(answerElH)
    }
  }, [])

  const handleOpenAnswer = () => {
    setState(!state);
  }

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  )
}

export const FaqsPage: React.FC = () => {
  const faqsList: FaqItem[] = [
    {
      q: "O que é a AMARA?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "AMARA é uma segurada?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Porque devo comprar os meus seguros através da AMARA?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Sou mediador, posso ser parceiro da AMARA?",
      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
    },
    {
      q: "Que seguros posso comprar através da AMARA?",
      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
    }
  ]

  return (
    <section className="leading-relaxed mx-auto py-7 px-4 md:px-8 bg-slate-200">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">Perguntas Frequentes</h1>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  )
}