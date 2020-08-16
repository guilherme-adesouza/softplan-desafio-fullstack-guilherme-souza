# Taskflow - Process Manager

### Rodando a aplicação

#### Docker

Necessário `docker` e `docker-compose` instalados.

Comando: `docker-compose up -d`

#### Instalação Padrão

Necessário:
- PostgreSQL 9+
- Java 11+
- Maven 3+
- npm 5.6+
- node 8.10+

**Passo a passo**

Criar banco de dados:
- `CREATE DATABASE taskflow;`

Para executar o back-end: 

`cd back-end/`

Linux: `./mvnw spring-boot:run` 

Windows: `./mvnw.cmd spring-boot:run`

Para executar o front-end: 

`cd front-end/`

Instalar dependências
`npm i`
 
`npm start`

----

### Tecnologias

No back-end foi utilizado **Java 11**, **Maven 3.6.3** e **Spring Boot 2.3.2**, utilizando o [Spring Initializr](https://start.spring.io/). 
É uma ferramenta gráfica e simples para a inicialização de um projeto com Spring Boot. 

No front-end foi utilizado **React 16.13.1**, utilizando [create-react-app](https://reactjs.org/docs/create-a-new-react-app).

Como banco de dados, foi utilizado o **PostgreSQL 12** por familiaridade, sendo um banco de dados coeso, open-source e que atendia os requisitos propostos.  

Para a modelagem do banco de dados, foi utilizado o MySQLWorbench, podendo ser encontrado em `docs/taskflow.mwb`

