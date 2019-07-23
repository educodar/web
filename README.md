# Educodar

[![Netlify Status](https://api.netlify.com/api/v1/badges/c9a59a91-8853-4246-944b-a5d9ec66c2c7/deploy-status)](https://app.netlify.com/sites/educodar/deploys)

## Como utilizar este repositório

### 1. Clone este repositório em sua máquina

Você precisa ter o Git instalado em seu Windows, macOS ou Linux.
Então, execute o seguinte comando no terminal de sua máquina:

```bash
git clone https://github.com/educodar/educodar.github.io.git
```

Aguarde a clonagem ser finalizada.

#### Como trabalhar num branch específico

Execute o seguinte comando em seu terminal do Windows, macOS ou Linux.

```bash
git checkout nomedobranch
git pull
```

Então execute o comando `ls` para verificar os arquivos.

### 2. Instale as dependências necessárias

Você precisa ter o Node instalado em seu Windows, macOS ou Linux.
Então, execute o seguinte comando no macOS ou Linux.

```bash
make install
```

No Windows, você deve executar o seguinte comando para instalar:

```bash
npm install
```

Então, aguarde a instalação acabar.

Se, durante o processo de instalação, você encontrar algum warning sobre pacotes obsoletos que ainda não tivermos conhecimento, por favor, comunique ao time [postando uma issue no repositório no GitHub](https://github.com/educodar/educodar.github.io/issues).

### 3. Comece a desenvolver

No macOS ou Linux, execute o seguinte comando em seu terminal:

```bash
make develop
```

No Windows, você deve executar o seguinte:

```
npm start
```

Se tudo correr bem, o Gatsby executará pela primeira vez. Então, você pode acessar http://localhost:8000.
A porta `8000` é utilizada durante o desenvolvimento (e não a porta 3000, que costuma ser usada na maioria dos projetos em React).

A aplicação será executada no Terminal continuamente. Se você quiser parar a aplicação, pode digitar Control+C no terminal.
