import React, { useState } from "react"
import { Article, Form, Header } from "muy"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import CodeOfConductLink from "../../components/CodeOfConductLink"
import Button from "@material-ui/core/Button"
import Input from "@material-ui/core/Input"
import { Checkbox } from "@material-ui/core"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import CityInput from "../../components/CityInput"
import Divider from "@material-ui/core/Divider"
import FormHelperText from "@material-ui/core/FormHelperText"
import Fade from "@material-ui/core/Fade"
import BirthdayInput from "../../components/BirthdayInput"
import Box from "@material-ui/core/Box"

const ContactPage = () => {
  const [state, setState] = useState({
    currentlyStudies: false,
  })

  const handleChange = name => event =>
    setState({ ...state, [name]: event.target.checked })

  return (
    <>
      <Article>
        <Header>
          <Typography component={"h1"} variant={"h1"}>
            Cadastre-se para&nbsp;saber mais sobre o&nbsp;
            <strong>Educodar</strong>
            &nbsp;2020
          </Typography>
        </Header>
        <Form
          action="/quero-aprender/sucesso"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          method="post"
          name="studentInterest"
        >
          <Input name="bot-field" type="hidden" />
          <Input name="form-name" type="hidden" value="studentInterest" />

          <FormGroup row>
            <label htmlFor="name">
              <TextField
                id="name"
                name="name"
                aria-required={true}
                autoCapitalize="words"
                autoComplete="name"
                autoCorrect="off"
                enterkeyhint="send"
                label={"Nome completo"}
                maxLength={50}
                minLength={5}
                mozactionhint="send"
                placeholder={"Nome e sobrenome"}
                required={true}
                title="Por favor, informe seu nome completo, incluindo seus sobrenomes"
                type="text"
                variant={"outlined"}
              />
            </label>
          </FormGroup>
          <FormGroup row>
            <BirthdayInput
              id="birthday"
              aria-required={true}
              autoCorrect="off"
              InputLabelProps={{
                shrink: true,
              }}
              label={"Data de nascimento"}
              name="birthday"
              placeholder="Dia, mês e ano"
              required={true}
              variant={"outlined"}
            />
          </FormGroup>
          <FormGroup row>
            <TextField
              id="email"
              name="email"
              aria-required={false}
              autoCorrect="off"
              enterkeyhint="send"
              label={"E-mail"}
              placeholder="E-mail"
              mozactionhint="send"
              required={false}
              type="email"
              variant={"outlined"}
            />
          </FormGroup>
          <FormGroup row>
            <TextField
              id="idDocument"
              name="idDocument"
              autoComplete="off"
              autoCorrect="off"
              aria-required={true}
              enterkeyhint="send"
              helperText={
                "Esta informação será utilizada para liberar sua entrada na portaria, caso você seja uma das pessoas selecionadas."
              }
              label={"Documento de identidade"}
              maxLength={20}
              minLength={7}
              mozactionhint="send"
              placeholder="Apenas números"
              title="Por favor, informe o número do seu documento de identidade"
              type="text"
              variant={"outlined"}
            />
          </FormGroup>
          <FormGroup row>
            <TextField
              id="tel-national"
              name="tel-national"
              autoComplete="tel-national"
              autoCorrect="off"
              aria-required={true}
              enterkeyhint="send"
              label={"Telefone celular"}
              maxLength={17}
              minLength={10}
              mozactionhint="send"
              placeholder="Telefone com DDD"
              required={true}
              title="Por favor, informe seu telefone usando apenas números e, opcionalmente, espaços, parênteses e hífens"
              type="tel"
              variant={"outlined"}
            />
          </FormGroup>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  id="hasWhatsAppAccount"
                  name="hasWhatsAppAccount"
                  aria-required={false}
                  defaultChecked={true}
                  required={false}
                  type="checkbox"
                />
              }
              label={"Este número é do meu WhatsApp"}
            />
          </FormGroup>
          <FormGroup row>
            <CityInput />
          </FormGroup>
          <FormGroup row>
            <TextField
              id="address-line3"
              name="address-line3"
              aria-required={true}
              autoCapitalize="words"
              autoComplete="address-line3"
              autoCorrect="on"
              enterkeyhint="send"
              helperText={
                <>
                  Não é necessário incluir a palavra <q>Bairro</q>.
                </>
              }
              inputProps={{
                list: "address-line3-datalist",
              }}
              label={"Bairro ou comunidade"}
              mozactionhint="send"
              placeholder="Digite ou escolha"
              required={true}
              variant={"outlined"}
            />
            <datalist id="address-line3-datalist">
              <option value="Alvorada" />
              <option value="Campo Alegre" />
              <option value="Morro Do Papagaio" />
              <option value="Santa Inês" />
              <option value="Santa Lúcia" />
              <option value="Santa Luzia" />
              <option value="Santa Rita De Cássia" />
              <option value="Santo Antônio" />
              <option value="São Gabriel" />
              <option value="São Pedro" />
              <option value="Serra" />
              <option value="Vila São Rafael" />
            </datalist>
          </FormGroup>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  id="needTransportationAllowance"
                  name="needTransportationAllowance"
                  aria-required={false}
                  defaultChecked={false}
                  required={false}
                />
              }
              label={"Eu precisaria de ajuda com transporte até o Educodar."}
            />
          </FormGroup>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  id={"currentlyStudies"}
                  name={"currentlyStudies"}
                  aria-required={false}
                  defaultChecked={false}
                  onChange={handleChange("currentlyStudies")}
                  required={false}
                />
              }
              label={
                "Eu estudo em uma escola ou cursinho pré-vestibular (Opcional)"
              }
            />
          </FormGroup>
          <Fade
            in={state.currentlyStudies}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <FormGroup row>
              <TextField
                id="school"
                name="school"
                aria-required={state.currentlyStudies}
                autoCapitalize="words"
                autoCorrect="on"
                enterkeyhint="send"
                inputProps={{ list: "schools" }}
                label={"Escola ou cursinho"}
                mozactionhint="send"
                required={state.currentlyStudies}
                variant={"outlined"}
              />
              <datalist id="schools">
                <option value="Escola Estadual Henrique Diniz" />
                <option value="Pré-vestibular Morro do Papagaio" />
              </datalist>
            </FormGroup>
          </Fade>
          <FormGroup row>
            <Button
              id="submit"
              name="submit"
              color={"primary"}
              size={"large"}
              type="submit"
              variant={"contained"}
            >
              Tenho interesse
            </Button>
          </FormGroup>
          <FormGroup row>
            <FormHelperText>
              Ao utilizar o botão "Tenho interesse", você concorda com o nosso{" "}
              <CodeOfConductLink openInNew={true} />
            </FormHelperText>
          </FormGroup>
        </Form>
      </Article>
    </>
  )
}

export default ContactPage
