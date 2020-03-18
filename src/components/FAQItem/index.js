import React from "react"
import AnswerText from "../AnswerText"
import QuestionText from "../QuestionText"
import Box from "@material-ui/core/Box"
import Divider from "@material-ui/core/Divider"

const FAQItem = ({ question, children }) => (
  <Box itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
    <QuestionText>{question}</QuestionText>
    <AnswerText>{children}</AnswerText>
    <Divider />
  </Box>
)

export default FAQItem
