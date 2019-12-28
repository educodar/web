import React from 'react'

export default () => (
  <form>
    <div>
      <label>Nome</label>
      <input value="Mariana Oliveira" />
    </div>
    <div>
      <label>Bairro</label>
      <input value="Nova Gameleira" />
    </div>
    <div>
      <label>Escola ou Cursinho Pré-Vestibular</label>
      <input value="Ordem e Progresso" />
    </div>
    <div>
      <label>Cargo</label>
      <input value="Professora de Biologia"/>
    </div>
    <div>
      <label>Telefone celular</label>
      <input value="(31) 99978-2062" />
    </div>
    <div>
      <label>E-mail (opcional)</label>
      <input />
    </div>
    <div>
      <label>Como você chegou até aqui?</label>
      <input checked={true} type="radio" /> Indicação de uma pessoa
      <input type="radio" /> Outra forma
    </div>
  </form>
)
