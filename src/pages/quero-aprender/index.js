import React from "react"
import VerticalSpacing from "../../atoms/VerticalSpacing"
import Button from "../../atoms/Button"
import Input from "../../atoms/Input"
import BirthdayInput from "../../atoms/BirthdayInput"

const ContactPage = () => {
  return (
    <>
      <article>
        <hgroup>
          <h1>
            Inscreva-se para saber mais sobre o <strong>Educodar</strong>
            &nbsp;2020
          </h1>
        </hgroup>
        <form
          action="/quero-aprender/sucesso"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          method="post"
          name="studentInterest"
        >
          <input name="bot-field" type="hidden"/>
          <input name="form-name" type="hidden" value="studentInterest"/>

          <div>
            <label htmlFor="name">
              Qual é seu nome completo?
              <VerticalSpacing size="1x"/>
              <Input
                id="name"
                name="name"
                aria-required={true}
                autoCapitalize="words"
                autoComplete="name"
                maxLength={50}
                minLength={5}
                placeholder="Nome completo"
                required={true}
                title="Por favor, informe seu nome completo, incluindo seus sobrenomes"
                type="text"
              />
            </label>
          </div>
          <VerticalSpacing size="2x"/>
          <div>
            <label htmlFor="birthday">
              Qual é a sua data de nascimento?
              <VerticalSpacing size="1x"/>
              <BirthdayInput
                id="birthday"
                name="birthday"
                aria-required={true}
                placeholder="Dia, mês e ano"
                required={true}
              />
            </label>
          </div>
          <VerticalSpacing size="2x"/>
          <div>
            <label htmlFor="email">
              Qual é seu endereço de e-mail?
              <VerticalSpacing size="1x"/>
              <Input
                id="email"
                name="email"
                aria-required={false}
                placeholder="E-mail"
                required={false}
                type="email"
              />
            </label>
          </div>
          <VerticalSpacing size="2x"/>
          <div>
            <label htmlFor="tel-national">
              Qual é seu telefone celular?
              <VerticalSpacing size="1x"/>
              <Input
                id="tel-national"
                name="tel-national"
                autoComplete="tel-national"
                aria-required={false}
                placeholder="Telefone com DDD"
                required={false}
                type="tel"
              />
            </label>
          </div>
          <VerticalSpacing size="2x"/>
          <div>
            <label htmlFor="city">
              Em qual cidade você mora?
              <VerticalSpacing size="1x"/>
              <select
                id="city"
                name="city"
                aria-required={true}
                autoComplete="city"
                required={true}
              >
                <option value="">Escolha uma cidade&hellip;</option>
                <option value="BH">Belo Horizonte (MG)</option>
                <option value="POA">Porto Alegre (PR)</option>
                <option value="REC">Recife (PE)</option>
                <option value="SP">São Paulo (SP)</option>
              </select>
            </label>
          </div>
          <VerticalSpacing size="2x"/>
          <div>
            <label htmlFor="address-line3">
              Em qual bairro ou comunidade você mora?
              <VerticalSpacing size="1x"/>
              <Input
                id="address-line3"
                name="address-line3"
                aria-required={true}
                autoCapitalize="words"
                autoComplete="address-line3"
                autoCorrect="on"
                list="address-line3-datalist"
                placeholder="Digite ou escolha"
                required={true}
              />
              <datalist id="address-line3-datalist">
                <option value="Morro Do Papagaio"/>
                <option value="Santa Lúcia"/>
                <option value="Santa Rita De Cássia"/>
                <option value="Santo Antônio"/>
                <option value="São Pedro"/>
                <option value="Serra"/>
              </datalist>
            </label>
            <VerticalSpacing size="1x"/>
            <p>
              Não é necessário incluir a palavra <q>Bairro</q>.
            </p>
          </div>
          <VerticalSpacing size="4x"/>
          <div>
            <label htmlFor="school">
              Você estuda em alguma escola ou cursinho pré-vestibular? (opcional)
              <VerticalSpacing size="1x"/>
              <Input id="school"
                     name="school"
                     aria-required={false}
                     autoCapitalize="words"
                     autoCorrect="on"
                     list="schools"
                     required={false}
              />
              <datalist id="schools">
                <option value="Escola Estadual Henrique Diniz"/>
                <option value="Pré-vestibular Morro do Papagaio"/>
              </datalist>
            </label>
          </div>
          <VerticalSpacing size="4x"/>
          <Button id="submit" name="submit" type="submit">
            Tenho interesse
          </Button>
        </form>
      </article>
    </>
  )
}

export default ContactPage
