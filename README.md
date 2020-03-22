# Educodar

[![codecov](https://codecov.io/gh/educodar/web/branch/master/graph/badge.svg)](https://codecov.io/gh/educodar/web) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/c9a59a91-8853-4246-944b-a5d9ec66c2c7/deploy-status)](https://app.netlify.com/sites/educodar/deploys) 
[![CircleCI Status](https://circleci.com/gh/educodar/web.svg?style=svg)](https://circleci.com/gh/educodar/website) 
[![Travis Build Status](https://travis-ci.org/educodar/web.svg?branch=master)](https://travis-ci.org/educodar/web)

## Sobre os objetivos do negócio

Este site está sendo desenvolvido com o objetivo de ajudar o Educodar a se tornar um 
projeto de impacto nas cidades onde há escritórios da ThoughtWorks, levando o 
conhecimento de Tecnologia da Informação para o maior número de estudantes.

O site é pensado para três públicos: a pessoa voluntária, a pessoa estudante e escola.
As pessoas precisam entender que o projeto está ativo e como fazer parte.

## Sobre as tecnologias

Este projeto é desenvolvido em React utilizando o toolchain Gatsby (para construção de websites estáticos).
O site gerado por este projeto é hospedado no Netlify, uma ferramenta gratuita que também é utilizada para CI/CD.

## Como utilizar este repositório

### 1. Clone este repositório em sua máquina

Você precisa ter o Git instalado em seu Windows, macOS ou Linux.
Então, clone este repositório para sua máquina.

```shell
git clone https://github.com/educodar/web.git
```

Aguarde a clonagem ser finalizada.

#### Sempre trabalhe no master

Para garantir que você sempre está no master, execute os seguintes comandos em seu terminal do Windows, macOS ou Linux:

```shell
git checkout master
git pull
```

Então execute o comando `ls` para verificar os arquivos.

### 2. Instale as dependências necessárias

Você precisa ter o Node instalado em seu Windows, macOS ou Linux.
Então, execute o seguinte comando no macOS ou Linux.

```shell
npm install
```

Então, aguarde a instalação acabar.

Se, durante o processo de instalação, você encontrar algum warning sobre pacotes obsoletos que ainda não tivermos conhecimento, por favor, comunique ao time [postando uma issue no repositório no GitHub](https://github.com/educodar/educodar.github.io/issues).

### 3. Comece a desenvolver

Execute o seguinte comando em seu terminal:

```shell
npm start
```

Se tudo correr bem, o Gatsby executará pela primeira vez. Então, você pode acessar http://localhost:8000. A porta `8000` é utilizada durante o desenvolvimento (e não a porta 3000, que costuma ser usada na maioria dos projetos em React).

A aplicação será executada no Terminal continuamente. Se você quiser parar a aplicação, pode digitar Control+C no terminal.

## Continuous Deployment

Nós utilizamos o [Netlify](https://www.netlify.com/) para publicar este site. Sempre que você criar e publicar um _branch_, o Netlify criará um _deploy preview_, e você terá acesso a uma URL onde poderá visualizar como seu trabalho está ficando.

As URLs têm o formato `deploy-preview-000--educodar.netlify.com`, onde `000` é um número único para cada _branch_.

Você pode [saber mais sobre _deploy previews_](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/) no artigo [Introducing Deploy Previews in Netlify](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/).
