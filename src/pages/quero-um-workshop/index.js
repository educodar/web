import React from "react"
import { Form } from "muy"
import { TextField } from "@material-ui/core"
import FormGroup from "@material-ui/core/FormGroup"
import Button from "@material-ui/core/Button"

export default () => (
  <Form>
    <FormGroup row>
      <TextField label={"Nome"} value="Mariana Oliveira" />
    </FormGroup>
    <FormGroup row>
      <TextField label={"Bairro"} value="Nova Gameleira" />
    </FormGroup>
    <FormGroup row>
      <TextField
        label={"Escola ou Cursinho"}
        helperText={
          <>
            Podemos realizar <em lang={"en"}>workshops</em> em escolas públicas
            e cursinhos pré-vestibular populares.
          </>
        }
        value="Ordem e Progresso"
      />
    </FormGroup>
    <FormGroup row>
      <TextField label={"Cargo"} value="Professora de Biologia" />
    </FormGroup>
    <FormGroup row>
      <TextField
        label={"Telefone celular"}
        type={"tel"}
        value="(31) 99978-2062"
      />
    </FormGroup>
    <FormGroup row>
      <TextField label={"E-mail (opcional)"} type={"email"} />
    </FormGroup>
    <FormGroup row>
      <label>Como você chegou até aqui?</label>
      <input checked={true} type="radio" /> Indicação de uma pessoa
      <input type="radio" /> Outra forma
    </FormGroup>
    <Button color={"primary"} type={"submit"} variant={"contained"}>
      Quero um workshop
    </Button>
  </Form>
)
