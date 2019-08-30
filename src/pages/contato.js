import React from "react"

const ContactPage = () => (
  <form
    action="#"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    method="post"
    name="contact"
  >
    <input name="bot-field" type="hidden" />
    <input name="form-name" type="hidden" value="contact" />
    <div>
      <label>
        Nome
        <input
          id="name"
          aria-required={true}
          autoCapitalize="words"
          autoComplete="name"
          autoCorrect="off"
          name="name"
          spellCheck="false"
          type="text"
        />
      </label>
    </div>
    <div>
      <label>
        E-mail:
        <input
          id="email"
          aria-required={true}
          autoCapitalize="off"
          autoComplete="email"
          autoCorrect="off"
          name="email"
          pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          spellCheck="false"
          type="text"
        />
      </label>
    </div>
    <div>
      <label>
        Mensagem:
        <textarea
          id="message"
          aria-required={true}
          autoComplete="off"
          autoCapitalize="sentences"
          name="message"
        />
      </label>
    </div>
    <button type="submit">Enviar mensagem</button>
  </form>
)

export default ContactPage
