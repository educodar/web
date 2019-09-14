import React from "react"
import QuestionText from "../../atoms/QuestionText"
import AnswerText from "../../atoms/AnswerText"
import VerticalSpacing from "../../atoms/VerticalSpacing"

export default ({ question, children }) => (
  <>
    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <QuestionText>{question}</QuestionText>
      <VerticalSpacing size="1x" />
      <AnswerText>{children}</AnswerText>
      <hr />
    </div>
  </>
)
