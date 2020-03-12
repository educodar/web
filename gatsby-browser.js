import LogRocket from "logrocket"
import "./src/index"

exports.onClientEntry = () => {
  LogRocket.init("9iy3ll/educodar")
}
