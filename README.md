# Estudando AngularJS

## Angular

- É modular;
- Mesmo que não for criado nenhum módulo, teremos um módulo raiz que irá inglobar todos os components de maneira direta ou indireta;
- O angular tem um módulo;
- Modulo é um limitador de contexto, que todos os componets que tem corresponde ao contexto;
- O modulo é um limitador de contexto, que teremos uma serie de recursos ou componetes cujo são intricecos ao contexto desse modulo;
- Os componentes vão dar aparencia e trazem vida aos modulos;

## Decoration

- São propriedades que dão mais informações ao component para que o angular possa fazer algumas funcionalidades a mais.

OBS.: Sempre que for importar alguma coisa, da app, ou um modulo do angular, ou um modulo que for ser instalado no futuro, importamos da propriedade imports
OBS.: Sempre que for criar um component, tem que declarar ele no modulo que corresponde a ele.

## One-way-data-binding and two-way-data-binding

- One-way-data-binding => para exibir só o valor da propriedade;
- two-way-data-binding => Exibir e alterar o valor da propriedade, de forma que ela vá ser alterada em todas as referencias dessas variáveis.

<!-- Forma one-way-data-binding -->
<!-- [(ngModel)] -> two-way-data-binding -->
<input [(ngModel)]="name" name="name" placeholder="name">

## Modulos

- Para segregar conceitos dos components

## Componets

- Expressar o contexto do modulo

## Ponto de atenção

- Sempre no começo de um selector, devemos colocar algum nome que faça referencia ao projeto, pra não se confundir com outra tag html

## Ciclo de vida do component

- Podemos usar o "implements OnInit" para assim que o component inicializar, ele vai chamar o metodo de chamada

## *ngFor

- É uma forma do angular interar sobre alguns elementos;
- É necessário criar uma variável locar no *ngFor;
- A variável, é uma variavel de template;
- Ela representa cada elemento da interação;

## Classe de serviço

- Não é bom criar colocar na classe de serviço variável e distância que são alterados nos métodos de serviço

OBS.: Deixar, na classe de serviço, apenas metodos simples que chamem alguma outra operação, ou que passe alguma regra que deveria ter e no maximo variáveis que tenham valores que não serão alterados entre os métodos que serão criados.

## Eventos de input e out

- Input => set filter()
- Out => get filter() para atualizar o input

## Pipes

- Serve para alterar a forma que o template esta sendo mostrado 
- O valor da propriedade é sempre o valor que o pipe está inserido
- O primeiro parametro é exatamente o valor da propriedade, ou seja, o código
- O segundo parâmetro é uma caractere
- O terceiro parametro, é o valor que vai substituir o segundo parametro

## forRoot

- Espera um array de objetos do tipo rota
- Caso o path for vazio, ele vai redirecionar a raiz do app
- Caso o path for **, significa que ele não encontrou a rota da app e direciona a uma página de erro 

## Observable

- "Envelope";
- Os Observable, são asincronos
- A requisição de um observable é realizada se der um um subscrabe no observable;
- Para chamar a requisição temos que dar um subscribe no observable
- No subscribe, recebemos callback functions;
- next => se a requisiçao der certo, ele retorna alguma coisa;
- No subscribe, existe o error;
- Se der problema no meio do caminho, recebe o retorno do erro;
- O padrão de retorno de um http é um Observable

OBS.: Sempre que for chamar uma requisição, de um Observable, tem que dar um subscribe nele.

## @NgModule

- declarations => informe os pipes, components ...
- imports => informe os outros modulo que precisam estar importados para existir
- exports => para importar alguma coisa do modulo para ser utilizado no modulo que ele foi exportado

## Shared

- Contém modulos pequenos bem compartilhados;
- Bem genericos;
- Podemos ou não suar no decorrer da aplicação

## Core

- Components com uma regra de negocio maior;
- Relação maior com outros components;
- Não são genericos