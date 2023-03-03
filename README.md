
<div align="center">

![Logo](https://www.growdev.com.br/assets/images/logo-dark.png)

</div>

# 11 Ed/Growdev - Back-end 

Este repositório é destinado aos conteúdos de revisão ou exercícios sobre back-end.

Tópico como inicializar um projeto nodejs, uso do Typescript, configuração do ambiente, POO, construção de Api Restfull, frameworks para back e outros.


## Instalação

Para a instalar dependências deste repositório, rode :
```bash
  $ npm i 
```
 Para executar rode:

```bash
  $ npm run <nome da pasta>
```   
## Aprendizados

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você superou-os?


## Stack utilizada

**Poo:** Node, Typescript , ts-node-dev

**Api:** 

**Database:** 


## Iniciando um projeto Node/TS

Para criar nosso projeto em Node, execute o seguinte comando no terminal:
```bash
$ npm init -y
```
Após instale o typescript e outros pacotes desenvolvimemto como dependência de desenvolvimemto:
```bash
$ npm i -D typescript
$ npm i -D @types/node
$ npm i -D ts-node-dev
```
ou em um comando pode instale todas
```bash
$ npm i -D typescript @types/node ts-node-dev
```
O passo seguinte é gera o arquivo de configuração do ts, execute o seguinte comando no terminal:
```bash
$ npx tsc --init
```
vai ser gerado um arquivo tsconfig.json, aqui vai uma configuração básica, mas pode ter a sua:
```json
{
  "compilerOptions": {
    "target": "es2022" ,
    "experimentalDecorators": true ,
    "emitDecoratorMetadata": true ,
    "module": "commonjs" ,
     "rootDir": "./src" ,
    "moduleResolution": "node", 
    "resolveJsonModule": true , 
    "outDir": "./dist" ,
    "noEmitOnError": true ,
    "esModuleInterop": true ,
    "forceConsistentCasingInFileNames": true ,
    "strict": true ,
    "strictNullChecks": false ,
    "skipLibCheck": true 
  },
  "include": ["./src/**/*"],
  "exclude": ["./node_modules/", "./src/**/*.spec.ts", "./src/**/*.test.ts"]
}
```
## Documentação

[NodeJS](https://nodejs.org/en/docs/)

[Typescript](https://www.typescriptlang.org/docs/)

