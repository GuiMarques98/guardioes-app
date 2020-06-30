# Guardiões da Saúde
> Repositório do aplicativo [Guardiões da Saúde](https://linktr.ee/guardioesdasaude).

[![NPM Version][npm-image]][npm-url]
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/proepidesenvolvimento/guardioes-app/blob/master/LICENSE.md)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)  

*Uma descrição maior sobre o projeto*

## Ambiente de Desenvolvimento

### Baixando e Configurando Variáveis de Ambiente
1. Clone esse repositório em um local de sua preferência no seu computador
```shel
$ cd "diretorio de sua preferencia"
$ git clone https://github.com/proepidesenvolvimento/guardioes-app.git
```

2. Após clonar o repositório, crie um arquivo **.env** na pasta do projeto com as linhas:
```
API_URL = 
APP_ID =
```
*Esses dados estão disponíveis com algum desenvolvedor do app.*

### Instalando dependências  

1. Utilize o comando para instalar as dependências do projeto
```
$ npm install
```

### Se estiver no macOS com emulador do iOS
2. Acesse a pasta ios e rode o comando pod install:
```
$ cd ios
$ pod install
$ cd ..
```
Isso instalará dependências para o iOS

### Executando o Projeto

1. Por fim, para executar o projeto rode:

Se estiver no macOS:
```
$ react-native run-ios
```

Caso esteja no Windows ou Linux
```
$ npx react-native run-android
```

## Release History

* 0.2.1 (Número da Versão)
    * CHANGE: Adicionar mudanças
    * Que teve no
    * Aplicativo, funcionalidades novas, etc
* 0.0.1
    * Work in progress

## Contribuindo

1. Fork project
2. Crie sua branch com feature (`git checkout -b feature/featureName`)
3. Commite suas mudanças (`git commit -am 'Add some feature'`)
4. Dê um push na branch (`git push origin feature/featureName`)
5. Crie o pull request

----
## License & copyright

ProEpi, Associação Brasileira de Profissionais de Epidemiologia de Campo

Licensed under the [Apache License 2.0](LICENSE.md).
<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
