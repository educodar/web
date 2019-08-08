import React from "react"
import QuestionText from "../../atoms/QuestionText"
import AnswerText from "../../atoms/AnswerText"

export default ({ question, children }) => (
  <>
    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <QuestionText>{question}</QuestionText>
      <AnswerText>{children}</AnswerText>
    </div>
  </>
)
