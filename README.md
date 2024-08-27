
<h1 align="center"> Nivo-App Back-End</h1>

<p align="center">
Project developed for a Test. <br/>
</p>

<p align="center">
  <a href="#-tecnologias">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aplicacao">Como iniciar a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">License</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>


## 🚀 Technologies

This project was developed with the following tools:

- React.JS
- React Query
- React Hook Form
- TailwindCSS
- Node.JS
- Prisma
- Postgres
- Axios
- Zod
- Vite
- ContextAPI
- Docker
- Postman



## 💻 Project

This project is an incomplete form that allows the registration for a list.

## 🚀 Como iniciar a aplicação

Para iniciá-lo, siga os passos abaixo:

```bash
# Instalando dependências:
$ npm i

# Criar apartir do .env.example, o arquivo .env
$ copy .env.example .env

# Dentro do arquivo .env, adicione o caminho na variável de ambiente DATABASE_URL
DATABASE_URL="postgresql://postgres:docker@localhost:5432/postgres?schema=public"

# Ainda no arquivo .env, adicione qual porta você quer que o projeto inicie. No exemplo abaixo vai iniciar na porta 3333
PORT=3333

# Rodando em modo de desenvolvimento:
$ npm run dev

O app estará disponível no seu browser pelo endereço http://localhost:3333 assim que iniciado.
```

## :memo: License

This project is under the MIT license.

---

