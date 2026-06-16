# Break Time - 15mins

# JavaScript

- Dynamic in nature
- DOM manipulation
- Frontend validations
- Single threaded (T1)
- Async operation / Non-blocking
  > Browser : worker thread
  - Web workers
    > Node Environment : C++ Thread pool (libuv)
  - Cluster Module
- Client side as well as Server side scripting
- Event driven
- Light-weight
- Base for other JS Libraries / Frameworks
- Compiled (Abstract Syntax Tree) as well as Interpreted
- JavaScript Engine (Chrome / NodeJS - V8, Edge - Chakra, Opera / Safari - SpiderMonkey)
- Garbage collection

### Browser

- HTML (DOM) : presentation (Nouns)
- CSS (CSSOM): Appearence and layout (Adjectives)
- JAVASCRIPT : Behaviour (Verbs)

### DOM : Document Object Model

- Hierarchical representation of HTML elements

### Asynchronous Activities

- Timers
- Reading / Writing
- Obtaining Socket
- Remote Server Calls
- Promises

### JSON - number, string, boolean, nested object / array

### JavaScript Object - Function, Date, Symbol

#### Scope Chaining

Local Scope -> Outer Scope -> Global Scope

### JavaScript Engine

- Creational Phase : Memory allocation
- Executional Phase : Executes program

### JavaScript DataTypes

- Primitive : Number, String, Boolean
- References : Function, Array, Object, Date

## ES6+ Features

- Arrow Function (=>)
- Destructuring : unpacking the collection (Object / Array)
- Rest / Spread : (...)
- Template Literals : (``)
- Default Parameters

### Promises

- container for future value
- Consume promise using
  > then().catch()
  > Asycn...await
- Static Methods : all, allSettled, race, any, resolve, reject

- Fetch API

## Vite Tool

- npm create vite@latest
- Project Name
- Vanilla
- TypeScript

# TypeScript : JavaScript with Type System

- Robust Type System
- Better Intellisense
- Well supported tools (eg. linters)
- Better readability
- Additional Types
- Additional TS Features (eg. Decorators)

## Compilation Context

- set of configuration that determines TS conversion to JS
- tsconfig.json

## Type System

- any
- unknown
- void
- never
- custom type system (type)
- All JS DataTypes available

## TypeScript compiler

> [sudo] npm install typescript -g
> tsc --version
> tsc src/main.ts
> node src/main.js

## Generics

- Placeholder for Datatypes
- Also knnown as polymorphic type
- Using extends keyword, we can put constraint on Generic Type

## Decorators : functions used to make meta-programming

- Class : @Component, @NgModule, @Injectable etc
- Class Method : @HostBinding
- Method Parameters : @skip, @Optional, @Host
- Class Properties : @Input, @Ouput

## Module System

- To avoid global pollution
- Either import statement or export keyword
- File Module : created by developer
- External Module : created by community people

# Various JS Libraries / Framework

- AngularJS: Library; 2011
- Angular\* : 2014; 2 way data binding; State Management, SPA, XHR, DOM manipulation, Template, MV\* Pattern, Animation, Form Validation, enterprise-grade apps, Shadow DOM, Component based architecture, Corporate care-taker, vast community support, active developers, Testability, Scalability, Maintainability etc. Angular compiler takes place in final build. 'Tree-shaking', 'Lazy loading', Renderer2, ivy compiler

- React: 35-40kb in size; quickly renders the UI; Virtual DOM, Diffing Algo, Reconciliation; Props, State; ReactRouter; Fetch API / Axios
- Vue\* : Progressive framework; XHR Calls, State Management, Template, Two way Data Binding, SPA etc. Best of both - Angular and React. 'Evan You'. Emerging Framework
- Ember\* : Frequent changes in API
- Backbone : MVC Pattern at client side
- Knockout : 2 way data binding; MVVM Pattern
- Preact : light-weight version of React
- jQuery : DOM Manipulation; Animation, AJAX Calls
- Stencil\* : Virtual DOM, Component based archiecture; Rich Components
- Electron : Standalone Apps
- NextJS : Full Stack Apps; Client side and server side code. Based on React.

- NodeJS : A Platform
- ExpressJS / Koa / Hapi / SailsJS / KrackenJS : Web app framework

## Angular Version v17.x

- Module based Apps
- Standalone Apps

> npm install -g @angular/cli@17
> ng version
> ng new first-app [Standalone Apps]
> ng new first-app --no-standalone --no-routing [Module based Apps]
> cd first-app
> npm start

## CLI Commands

> ng g c path/to/component/name

## Using Bootstrap

- npm install bootstrap
- configure bootstrap in angular.json
- restart the server

## Angular Component

- Reusable piece of code
- Occupy space on UI
- Data Binding
  > [ Property Binding ]
  > ( Event Binding )
  > Two way data binding [( ngModel )]
- Nested Component Communication

  > Parent-to-Child : @Input() + Property Binding
  > Child-to-Parent : @Output() + EventEmitter + Event Binding

### Content Projection: <ng-content>

### LifeCycle Events

- ngOnChanges
- ngOnInit
- ngDoCheck
- ngAfterContentInit
- ngAfterContentChecked
- ngAfterViewInit
- ngAfterViewChecked
- ngOnDestroy

- ViewEncapsulation
  > Emulated (default):
  - apply global style but preference will be given to local styles
    > ShadowDOM :
  - does not apply global styles, only local style will apply
    > None
    - local styles will affect other part of the app

### Shadow DOM : encapsulation

## Directive

- Component Directive
- Attribute Directive (ngClass, ngStyle)
- Structural Directive (ngIf, ngFor, ngSwitch)
- Custom Directive
  > ElementRef : reference of DOM element
  > Renderer2 : allows DOM Manipulation
  > @HostBinding, @HostListener

# Pipes : Format the data on UI

- uppercase
- lowercase
- titlecase
- json
- percent
- number
- async
- date
- currency

## Custom pipe

- CountryCode
- Reverse
- Filter
- Sort

### Pure and Impure Changes

- Pure change : Change in Object reference
- Impure change : change in value

# Forms

- Template Driven Form
  > Logic inside the template
  > Create custom directive for custom validators
- Model Driven Form / Reactive Form

## Classes / States on Form and Form Control

- ngTouched / ngUntouched
- ngPristine / ngDirty
- ngValid / ngInvalid
