## Tecnologias

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

- ### [Commitizen](http://commitizen.github.io/cz-cli/)

```sh
# Instalação
$ npm i commitizen -D

# Configuração
$ npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

Para executar o **commitizen** é necessário criar um script no `package.json`:

```json
"scripts": {
  "commit": "cz"
}
```

Após, rodar `npm run commit`.

#### Commitizen com git commit

Há uma alternativa para executar o **commitizen** com `git commit`, utilizando _git hooks_. Atualize `.git/hooks/prepare-commit-msg` com o seguinte código:

> Uma alternativa mais amigável, utilizando um comando que já estamos familiarizados. Assim podemos descartar a opção de rodar um script.

```sh
#!/bin/bash
exec < /dev/tty && node_modules/.bin/cz --hook || true
```

> Note: O Commitizen não execute corretamente no Windows utilizando _powershell_ e _cmd_. O terminal interativo não funciona bem. A Alternativa é utilizar WSL e executar o comando no terminal linux.

---

- ### [Husky](https://typicode.github.io/husky/#/)

> Note: O husky é opcional. Ele cria hooks para o git. É uma alternativa caso deseje executar o commitizen através do `git commit`.

```sh
$ npm i husky -D

# Executar o husky
$ npx husky install

# Adicionar o hook para utilizar o commitizen
$ npx husky add .husky/prepare-commit-msg "exec < /dev/tty && npx cz --hook || true"
```

---

- ### [Semantic-release]()

```sh
# Instalação da dependência
$ npm i semantic-release -D

# Plugins adicionais
$ npm i @semantic-release/git @semantic-release/changelog -D
```

Adicionar o arquivo `.releaserc.json` contendo:

> Adiciona plugins ou realiza configurações no **semantic-release**.

```json
{
  "branches": ["main"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    "@semantic-release/changelog",
    [
      "@semantic-release/git",
      {
        "assets": ["package.json", "package-lock.json", "CHANGELOG.md"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ]
  ]
}
```

Os plugins `"@semantic-release/commit-analyzer"`, `"@semantic-release/release-notes-generator"`, `"@semantic-release/npm"`, `"@semantic-release/github"` já vem pré-instalados junto ao **semantic-release**;  
Porém, se adicionados novos plugins, o arquivo de configuração sobescreve o padrão, por isso é preciso incluí-los também no `.releaserc.json`;  
Por padrão o semantic-release reconhece a branch 'master', caso em seu repostório seja 'main', devemos incluí-la no `.releaserc.json` da forma como está acima;

É necessário criar o arquivo de CI para executar o semantic-release. Nesse caso estou utilizando o Github Actions. Veja o arquivo em `.github/workflows/release.yml`.

#### Pre-release

É possível configurar o **semantic-release** para aceitar branches de pré-lançamento, como versões 'alpha' ou 'beta'.
Primeiro é necessário alterar o arquivo `.releaserc.json`, adicionando as outras branches e indicando que esta corresponde a uma branch de pre-release:

```json
{
  "branches": ["main", { "name": "alpha", "prerelease": true }]
}
```
