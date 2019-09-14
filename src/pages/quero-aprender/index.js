import React from "react"
import VerticalSpacing from "../../atoms/VerticalSpacing"
import Button from "../../atoms/Button"
import Input from "../../atoms/Input"

const ContactPage = () => (
  <article>
    <hgroup>
      <h1>
        Gostaria de participar do <strong>Educodar</strong>&nbsp;2020!
      </h1>
    </hgroup>
    <form
      action="/quero-aprender/sucesso"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="post"
      name="studentInterest"
    >
      <input name="bot-field" type="hidden" />
      <input name="form-name" type="hidden" value="studentInterest" />

      <div>
        <label>
          Qual é seu nome completo?
          <VerticalSpacing size="1x" />
          <Input
            id="name"
            name="name"
            aria-required={true}
            autoCapitalize="words"
            autoComplete="name"
            autoFocus={true}
            maxLength={50}
            minLength={5}
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
          <Input
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
          <Input
            id="email"
            name="email"
            aria-required={false}
            autoFocus={false}
            placeholder="E-mail, incluindo o símbolo @"
            type="email"
          />
        </label>
      </div>
      <VerticalSpacing size="2x" />
      <div>
        <label>
          Qual é seu telefone celular?
          <VerticalSpacing size="1x" />
          <Input
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
          <Input
            id="address-line3"
            name="address-line3"
            autoCapitalize="words"
            autoComplete="address-line3"
            autoCorrect="on"
            autoFocus={false}
          />
        </label>
      </div>
      <VerticalSpacing size="4x" />
      <Button id="submit" name="submit" type="submit">
        Tenho interesse
      </Button>
    </form>
  </article>
)

export default ContactPage
