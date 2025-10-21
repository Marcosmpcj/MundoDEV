# 🚀 Manual Definitivo de Git e GitHub — Do Zero ao Expert

> Um guia único, completo e interativo para dominar Git e GitHub em qualquer projeto, do iniciante ao avançado.


## 🧩 1. Fundamentos

### O que é Git?
- **Git** é um sistema de controle de versão distribuído.
- Permite **registrar, reverter e compartilhar** mudanças no código.

### O que é GitHub?
- **GitHub** é uma plataforma que hospeda repositórios Git na nuvem.
- Permite colaboração, versionamento e automações.


## 🛠️ 2. Configuração Inicial

⚙️ Antes de começar, configure o Git no seu computador:

```
git config --global user.name "Seu Nome"           # Define seu nome
git config --global user.email "seu@email.com"     # Define seu e-mail
git config --global core.editor "code --wait"      # Define editor padrão
git config --global init.defaultBranch main        # Define branch principal como 'main'
git config --list                                  # Verifica configurações
```
- 💡 Dica: Use sempre o mesmo e-mail cadastrado no GitHub para associar commits à sua conta.

## 📂 3. Criando e Gerenciando Repositórios
```
mkdir meu-projeto                                  # Cria pasta do projeto
cd meu-projeto                                     # Entra na pasta
git init                                           # Inicia repositório Git
git clone URL                                      # Clona um repositório remoto
git clone URL nome                                 # Clona com nome diferente
git clone URL --branch branch --single-branch      # Clona branch específica`
```
- 📌 Quando usar:
```
git init: Novo projeto local.

git clone: Projeto já existente no GitHub.
```

## 📝 4. Registrando Mudanças
```
git status                                         # Ver status dos arquivos
git add arquivo.txt                                # Adiciona arquivo ao stage
git add .                                          # Adiciona todos os arquivos
git commit -m "Mensagem"                           # Registra mudanças
git commit -am "Mensagem"                          # Adiciona e commita (apenas rastreados)
```
- ⚠ Cuidado: Nunca use mensagens vagas como “update” — seja claro sobre a mudança.

## 🌱 5. Branches e Fluxo de Trabalho
```
git branch nome                                    # Cria branch
git branch                                         # Lista branches
git checkout nome                                  # Muda para branch
git switch nome                                    # Nova sintaxe para trocar branch
git checkout -b nome                               # Cria e muda para branch
git branch -d nome                                 # Deleta branch local
git push origin --delete nome                      # Deleta branch remota
```
- 💡 Dica de Expert:

Use uma branch por funcionalidade.

Nomeie branches de forma descritiva (feature/login, bugfix/header).

## 🔗 6. Conectando ao GitHub
```
git remote add origin URL                          # Conecta local ao remoto
git remote -v                                      # Lista conexões remotas
git remote set-url origin URL                      # Altera URL do remoto
```
## 📤 7. Enviando e Recebendo Alterações
```
git push origin branch                             # Envia branch ao remoto
git push -u origin main                            # Envia primeira vez e define upstream
git pull origin branch                             # Baixa e mescla alterações
git fetch origin                                   # Baixa sem mesclar
```
- 💡 Regra de ouro: Sempre dê git pull antes de começar a trabalhar.

## 🔀 8. Merge e Rebase
```
git merge branch                                   # Mescla branch na atual
git rebase branch                                  # Reaplica commits sobre outro branch
git merge --abort                                  # Cancela merge
git rebase --abort                                 # Cancela rebase
```
- 📌 Diferença:

Merge: Junta histórico.

Rebase: Reescreve histórico.

## 📦 9. Stash (Guardar Temporariamente)
```
git stash                                          # Guarda alterações
git stash list                                     # Lista stashes
git stash apply                                    # Aplica stash sem apagar
git stash pop                                      # Aplica e remove stash

```
- 💡 Útil quando você precisa trocar de branch mas não quer perder progresso.

## 🏷️ 10. Tags
```
git tag v1.0                                       # Cria tag simples
git tag -a v1.0 -m "Versão 1.0"                     # Tag anotada
git push origin v1.0                                # Envia tag
git push --tags                                     # Envia todas as tags
```
- 📌 Use tags para marcar versões importantes.

## ♻️ 11. Desfazendo Alterações
```
git checkout -- arquivo.txt                        # Desfaz arquivo modificado
git reset --soft hash                              # Volta commit mantendo stage
git reset --mixed hash                             # Volta commit mantendo arquivos
git reset --hard hash                              # Volta commit descartando tudo
git revert hash                                    # Cria commit que desfaz outro commit
```
- ⚠ Atenção: reset --hard apaga mudanças permanentemente.

## 🔍 12. Localizar Problemas (Bisect)
```
git bisect start                                   # Inicia busca
git bisect bad                                     # Marca commit ruim
git bisect good hash                               # Marca commit bom
```
- 💡 O Git testará commits até encontrar o exato que causou problema.

## 📂 13. Submódulos
```
git submodule add URL caminho                      # Adiciona submódulo
git submodule update --init --recursive            # Atualiza submódulos
```


## ⚙️ 14. Hooks (Automatizações)
- 📌 Localizados em .git/hooks/
Exemplos:

pre-commit: Executa antes do commit.

pre-push: Executa antes do push.

## ⚡ 15. Produtividade (Aliases)
```
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm "commit -m"
```
## 🤝 16. Fluxo de Trabalho com GitHub
```
[Clone/Fork] → [Branch] → [Commit] → [Push] → [Pull Request] → [Merge]
```
- 📌 Passos:


- Fork ou clone do repositório.

- Crie branch para sua alteração.

- Faça commits claros.

- Push para o seu fork.

- Abra Pull Request no repositório original.


## 💡 17. Boas Práticas de Experts
- Commits pequenos e frequentes.

- Mensagens de commit descritivas.

- Sempre trabalhar em branch separada.

- Atualizar branch antes de começar (git pull).

- Usar .gitignore para arquivos desnecessários.

- Manter README.md atualizado.

- Criar releases com tags.

## 📚 18. Cheatsheet Visual

| Etapa              | Comandos               |
|--------------------|-----------------------|
| Início             | git init / git clone |
| Verificar / Adicionar | git status / git add |
| Commit             | git commit          |
| Sincronizar        | git push / git pull |
| Ramificações       | Branch / Merge         |
| Versões            | Tags / Releases        |

## 🎯 19. Exercício Prático
- Crie ``pasta meu-projeto``.

- git init.

- Crie arquivo README.md e adicione texto.

- `git add . e git commit -m "primeiro commit"`.

- Crie repositório no GitHub e conecte:

```
git remote add origin URL
git push -u origin main

```
- Crie branch feature/teste, altere algo e faça commit.

- Volte para main, faça git merge feature/teste.

