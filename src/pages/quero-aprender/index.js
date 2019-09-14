import React from "react"
import VerticalSpacing from "../../atoms/VerticalSpacing"

const ContactPage = () => (
  <article>
    <hgroup>
      <h1>
        Gostaria de participar do <strong>Educodar</strong>&nbsp;2020?
      </h1>
    </hgroup>
    <form
      action="#"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="post"
      name="studentInterest"
    >
      <input name="bot-field" type="hidden" />
      <input name="form-name" type="hidden" value="studentInterest" />
      <fieldset>
        <div>
          <label>
            Qual é seu nome completo?
            <VerticalSpacing size="1x" />
            <input
              id="name"
              name="name"
              aria-required={true}
              autoCapitalize="words"
              autoComplete="name"
              autoFocus={true}
              placeholder="Nome completo"
              type="text"
            />
          </label>
        </div>
        <VerticalSpacing size="2x" />
        <div>
          <label>
            Qual é a sua data de nascimento?
            <VerticalSpacing size="1x" />
            <input
              id="birthday"
              name="birthday"
              aria-required={true}
              required={true}
              type="date"
            />
          </label>
        </div>
        <VerticalSpacing size="2x" />
        <div>
          <label>
            Qual é seu endereço de e-mail?
            <VerticalSpacing size="1x" />
            <input
              id="email"
              name="email"
              aria-required={false}
              autoFocus={false}
              type="email"
            />
          </label>
        </div>
        <VerticalSpacing size="2x" />
        <div>
          <label>
            Qual é seu telefone celular?
            <VerticalSpacing size="1x" />
            <input
              id="tel-national"
              name="tel-national"
              autoComplete="tel-national"
              aria-required={false}
              autoFocus={false}
              placeholder="Telefone com DDD"
              type="tel"
            />
          </label>
        </div>
        <VerticalSpacing size="2x" />
        <div>
          <label>
            Em qual cidade você mora?
            <VerticalSpacing size="1x" />
            <select id="city" name="city" autoComplete="city" autoFocus={false}>
              <option value="">Escolha uma cidade&hellip;</option>
              <option value="BH">Belo Horizonte (MG)</option>
              <option value="POA">Porto Alegre (PR)</option>
              <option value="REC">Recife (PE)</option>
              <option value="SP">São Paulo (SP)</option>
            </select>
          </label>
        </div>
        <VerticalSpacing size="2x" />
        <div>
          <label>
            Em qual bairro você mora?
            <VerticalSpacing size="1x" />
            <input
              id="address-line3"
              name="address-line3"
              autoComplete="address-line3"
            />
          </label>
        </div>
      </fieldset>
      <button type="submit">Quero estudar</button>
    </form>
  </article>
)

export default ContactPage
