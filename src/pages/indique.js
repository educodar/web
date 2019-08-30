import React from "react"

export default () => (
  <article>
    <header>
      <h1>Indique alguém para estudar no Educodar</h1>
      <details>
        <summary>
          Antes de realizar a indicação, saiba que priorizamos os seguintes
          perfis:
        </summary>
        <ul>
          <li>Pessoas que estudam em escolas públicas;</li>
          <li>Pessoas que estudam em escolas privadas com bolsa;</li>
        </ul>
        <p>
          Dentro desses perfis, iremos priorizar recortes sociais como estes:{" "}
          <mark>Validar com marketing se pode divulgar este texto</mark>
        </p>
        <ul>
          <li>Mulheres;</li>
          <li>Pessoas negras e indígenas;</li>
          <li>Pessoas trans, não binárias;</li>
          <li>LGBTQ+</li>
          <li>Pessoas com deficiência</li>
        </ul>
      </details>
    </header>
    <form method="POST">
      <fieldset>
        <legend>Quem está indicando?</legend>
        <div>
          <label for="name">
            Qual é o seu nome?
            <input
              aria-required={true}
              id="name"
              name="name"
              placeholder="Nome e sobrenome"
              required={true}
              type="text"
            />
          </label>
        </div>
        <div>
          <label>
            Qual é o seu número de telefone celular?
            <input type="tel" />
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Qual é sua ligação com o Educodar?</legend>
        <ul>
          <li>
            <label>
              <input name="relationship" type="radio" /> Eu estudo (ou estudei)
              no Educodar
            </label>
          </li>
          <li>
            <label>
              <input name="relationship" type="radio" /> Eu trabalho na
              ThoughtWorks ou em outra empresa parceira
            </label>
          </li>
          <li>
            <label>
              <input name="relationship" type="radio" /> Conheço o Educodar de
              outra forma
            </label>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>Dados da pessoa indicada</legend>
        <div>
          <label>
            Qual é o nome da pessoa que você quer indicar?
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Qual é o número de telefone celular dela?
            <input type="tel" />
          </label>
        </div>
        <div>
          <label>
            Por que essa pessoa deveria participar do <strong>Educodar</strong>?
            <textarea></textarea>
          </label>
        </div>
        <div>
          <label>
            Você sabe se existe algo que pode atrapalhar a participação e
            frequência dessa pessoa?
            <textarea></textarea>
          </label>
          <span>
            Exemplo: distância até sua casa, horário das aulas, transporte,
            emprego
          </span>
        </div>
      </fieldset>
      <fieldset>
        <legend>Qual é sua ligação com essa pessoa?</legend>
        <ul>
          <li>
            <label>
              <input name="nominee-relationship" type="radio" /> Ela é da minha
              família
            </label>
          </li>
          <li>
            <label>
              <input name="nominee-relationship" type="radio" /> Ela estuda ou
              estudou comigo
            </label>
          </li>
          <li>
            <label>
              <input name="nominee-relationship" type="radio" /> Outra
            </label>
            <label>
              Qual? <input type="text" />
            </label>
          </li>
        </ul>
      </fieldset>
      <button type="submit">Indicar</button>
    </form>
  </article>
)
