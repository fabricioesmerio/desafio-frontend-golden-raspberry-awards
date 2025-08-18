# Desafio Frontend Golden Raspberry Awards

Uma aplicação [Angular CLI](https://github.com/angular/angular-cli) version 20.1.3 que permite visualizar dados sobre os vencedores do Golden Raspberry Awards através de dashboards interativos e listas filtráveis.

A aplicação possui **duas rotas principais**:

## 1. Dashboard
Composto por quatro painéis que exibem:
- Anos que tiveram mais de um vencedor (tabela).
- Os três estúdios com mais vitórias (tabela).
- Produtores com maior e menor intervalo entre vitórias (tabela).
- Vencedores de um ano específico, selecionado via campo de busca (tabela).

## 2. Lista de filmes
Exibe todos os filmes, com:
- Paginação para navegar pelos resultados.
- Filtros: por **ano** e por **vencedor**.

---

## Requisitos

Para executar o projeto localmente, você precisará ter instalado:

- **Node.js** v18 ou superior
- **npm** v9 ou superior
- **Angular CLI** v20

O projeto utiliza **Ng-Zorro Ant Design** para os componentes de interface, como tabelas, formulários e menus, e **RxJS** para gerenciamento de streams e debounce em filtros de busca.

---

## Instalação e execução

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório**

```bash
git clone https://github.com/fabricioesmerio/desafio-frontend-golden-raspberry-awards.git
cd desafio-frontend-golden-raspberry-awards
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute a aplicação**

```bash
ng serve
```

A aplicação estará disponível em [http://localhost:4200](http://localhost:4200).

4. **Execute os testes**

```bash
ng test
```

---


## Contato / Autor

- **Autor:** Fabricio Esmerio
- **Email:** [fabricio1esmerio@gmail.com](mailto\:fabricio1esmerio@gmail.com)
- **GitHub:** [github.com/fabricioesmerio](https://github.com/fabricioesmerio)

