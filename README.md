# Teste de Interface - Cypress

Este projeto contém a automação de testes de Interface (Web) para o site SauceDemo, desenvolvida para validar fluxos críticos de usuário.

## 🚀 Tecnologias Utilizadas
- **Cypress** (Framework de automação)
- **JavaScript** (Linguagem de programação)
- **GitHub Actions** (Integração Contínua)

## 🔍 Cenários Testados
* **Login**: Validação de acesso com usuários válidos.
* **Checkout**: Fluxo completo desde a adição de produtos ao carrinho até a finalização da compra.

## 🛠️ Como Executar os Testes
1. Instale as dependências: `npm install`
2. Abrir o Cypress (Interface): `npx cypress open`
3. Executar em modo headless (Terminal): `npx cypress run`

## ⚙️ Integração Contínua (CI)
O projeto utiliza **GitHub Actions** para executar os testes automaticamente em cada atualização do código, garantindo a integridade da aplicação.
