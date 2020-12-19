# PicPay Software Engineer Challenge

![PicPay](https://user-images.githubusercontent.com/1765696/26998603-711fcf30-4d5c-11e7-9281-0d9eb20337ad.png)

A aplicação expõe endpoints para buscar usuários por seu nome ou nome de usuário. 
Alguns usuários tem mais prioridade que outros, para definir quem são eles levamos em consideração duas "listas de relevancia" nas quais nos baseamos para ordenar o resultado da busca.

### ✅ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/),[Docker](https://www.docker.com/),[GNU Make](https://www.gnu.org/software/make/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeOrm](https://typeorm.io/#/)
- [TypeScript](https://www.typescriptlang.org/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/Puccinellirpr/software-engineer-challenge>

# Vá até a pasta do projeto
$ cd software-engineer-challenge
# Inicie a aplicação com o make
$ make up

# O servidor inciará na porta:3330 - acesse <http://localhost:3330>
```

O script (`make up`) fará o download dos banco de dados de usuários de uma url externa, logo após isso o arquivo será extraido e o csv de usuários será importado para o banco de dados da aplicação;
Esse processo de importação pode demorar de 3 a 5 minutos, portanto seja paciente nessa parte. 

Depois desse processo a aplicação será iniciada na porta 3330.

Todos os endpoints estão documentados através do [Swagger](https://swagger.io), que estará disponível na url:
`
    http://localhost:3330/swagger
`
 
 ### Authors

<a href="https://github.com/puccinellirpr">
 <img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/38588353?s=460&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Reginaldo Puccinelli</b></sub></a> <a href="https://github.com/puccinellirpr" title="Rocket" >🚀</a>

Feito com 💚 por Reginaldo Puccinelli

[![Linkedin Badge](https://img.shields.io/badge/-Reginaldo%20Puccinelli-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/reginaldopuccinelli/)](https://www.linkedin.com/in/reginaldopuccinelli/)
[![Gmail Badge](https://img.shields.io/badge/-puccinellirpr@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:puccinellirpr@gmail.com)](mailto:puccinellirpr@gmail.com)