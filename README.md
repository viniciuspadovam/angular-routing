# Proposta 🔑

Projeto criado com base no curso "Trabalhando com Rotas no Angular" do bootcamp **Potência Tech Angular Developer - Powered by iFood** da [DIO](https://www.dio.me) com intuido de aprender mais sobre o sistema de rotas do Angular.

# Aprendizado 📖

## - routing.module

Criação de rotas no arquivo de **app-routing.module.ts** que se da na forma de um array de objetos de Rota, desta forma:

`{ path: '', component: TitleComponent, pathMatch: 'full' }`

Onde o 'path' define a url alvo, nesse caso é a rota raiz do endereço("/").

'component' é o comopnente que será renderizado nessa url.

Já o 'pathMatch' é a propriedade que define que a rota pode ter um prefixo vazio, no caso de `prefix` ou que a rota deve ser igual à definida, quando `full`.

Também há a possibilidade de se criar uma rota coringa com seu redirecionamento, que serve justamente para criar um redirecionamento padrão para o caso do usuário acessas alguma url que não existe:

`{ path: '**', redirectTo: '' }`

## - routerLink

`[routerLink]="['/']"` é a propriedade do Angular equivalente ao `href` para mudar de uma "página" para outra sem o reload da guia do navegador, mantendo a regra de SPA(Single Page Application) do Angular.

Onde seu valor deve ser uma das url definidas no *routing.module*.

Também existe uma outra propriedade que pode ser usada com o *routerLink* para criar um css diferente para o elemento `<a>` da url ativa, como no exemplo do *menu.component*, que é a `[routerLinkActive]="['active']"`, que recebe uma classe criada no css. Porém, se existir rotas com partes repetidas, deve-se usar `[routerLinkActiveOptions]="{exact: true}"` junto à propriedade anterior para que o estilo seja aplicado corretamente.

## Recuperando UrlParams

UrlParams são parâmetros passados na url separados por ***"/"***, como no exemplo `localhost:4200/portfolio/1`.

Para recuperar estes parâmetros temos que fazer duas alterações, colocar o nome desejado no *routing-module* para que a aplicação reconheça o que será passado na url, exemplo `{ path: 'params/:id', component: PageComponent }`.

A segunda alteração é a recuperação do UrlParam prórpiamente dito, que se da alterando o ts do component que irá recebe-los, como no exemplo do `constructor()` do *page.component*.

## - Recuperando QueryParams

QueryParams são parâmetros **chave/valor** também passados na url, como no exemplo: `http://localhost:4200/params?token=156156`.

Para recuperá-los é um pouco mais complexo, mas nada impossível. Nesse caso não é necessária a alteração no *routing.module*, apenas no link que irá fazer o redirecionamento e na página que irá recuperar os valores.

Enviar os QueryParams é feito  através do evento de **click** da tag que irá fazer o redirecionamento, passando para ela uma função que terá os valores a serem passados, exemplo:

`this.navegador.navigate(['/params'], { queryParams: { token: '156156' } });`

Já a recuperação destes valores é similar ao UrlParams, sendo desta forma:

`this.activeRoute.queryParams.subscribe(res => console.log(res));`

Os exemplos deste caso estão nos arquivos *card.component*, que é o redirecionamento e envio dos parâmetros, e no *page.component*, que recupera os valores.

## - ChildrenRoute e Recuperar seus parâmetros

É possível criar rotas filhas para as url do projeto, para criar mais opções de redirecionamento.

Essa propriedade é implementada desta forma:

`{ path: 'params', component: PageComponent, children: [{ path: ':id' component: PageComponent }] }`

Isso faz o projeto aceitar a url ***/params*** somente, ou sua variação com o UrlParam ***/params/1***, por exemplo.

Para recuperar os UrlParams quando enviados dessa forma, devemos usar uma implementação muito parecida com a recuperação dos parâmetros feita de forma normal, com uma camada a mais, a `firstChild?` (este "?" é necessário pois esse child pode ou não existir), desta forma temos:

`this.activeRoute.firstChild?.params.subscribe(res => console.log(res));`
