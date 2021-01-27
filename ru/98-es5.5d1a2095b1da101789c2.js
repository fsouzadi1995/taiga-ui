function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241fbd9aa8d13320476087ef2b67437c8078fbb05a07\u241f2620483019814878192:Custom dialog"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fa961c44abe17a269b883d349b02e8226016895fd\u241f3463395013752872705: You can easily create your custom dialogs by extending our abstract class and providing your own component as a dialog. "]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f9d6e1408c0a40d04f5eeb6f5d16b8706aded4261\u241f8564515230059500750:Dialogs"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{OFrn:function(e,t,n){"use strict";n.r(t),n.d(t,"DialogsModule",(function(){return A}));var r=n("2kYt"),o=n("sEIs"),a=n("SVIu"),i=n("Qq0t"),c=n("dvRg"),l=n("EM62"),s=n("OZlg"),u=n("iyc4"),p=n("TLy2"),d=n("TRv/"),m=n("zV1d"),f=n("cweO");function b(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",4),l["\u0275\u0275element"](1,"tui-avatar",5),l["\u0275\u0275text"](2," \xabChoose wisely\xbb "),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("rounded",!0))}function y(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",4),l["\u0275\u0275element"](1,"tui-avatar",6),l["\u0275\u0275text"](2," \xabYou chose poorly\xbb "),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("rounded",!0))}function g(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",4),l["\u0275\u0275text"](1," \xabYou have chosen wisely\xbb "),l["\u0275\u0275element"](2,"tui-avatar",7),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("rounded",!0))}var h,v,_=((h=function(){function e(t,n){_classCallCheck(this,e),this.notifications=t,this.promptService=n}return _createClass(e,[{key:"onClick",value:function(e,t,n){var r=this;this.promptService.open(e,{heading:"Taiga UI is the best",buttons:["Absolutely!","No way!"]}).pipe(Object(p.a)((function(e){return e?r.notifications.show(n,{status:"success"}):r.notifications.show(t,{status:"error"})}))).subscribe()}}]),e}()).\u0275fac=function(e){return new(e||h)(l["\u0275\u0275directiveInject"](i.TuiNotificationsService),l["\u0275\u0275directiveInject"](d.b))},h.\u0275cmp=l["\u0275\u0275defineComponent"]({type:h,selectors:[["tui-dialogs-example-1"]],decls:8,vars:0,consts:[["tuiButton","",3,"click"],["choose",""],["poorly",""],["wisely",""],[1,"wrapper"],["avatarUrl","assets/images/choose.png","size","l",1,"tui-space_right-2",3,"rounded"],["avatarUrl","assets/images/poorly.png",1,"tui-space_right-2",3,"rounded"],["avatarUrl","assets/images/wisely.png",1,"tui-space_left-1",3,"rounded"]],template:function(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"button",0),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](n);var e=l["\u0275\u0275reference"](3),r=l["\u0275\u0275reference"](5),o=l["\u0275\u0275reference"](7);return t.onClick(e,r,o)})),l["\u0275\u0275text"](1,"Show prompt"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](2,b,3,1,"ng-template",null,1,l["\u0275\u0275templateRefExtractor"]),l["\u0275\u0275template"](4,y,3,1,"ng-template",null,2,l["\u0275\u0275templateRefExtractor"]),l["\u0275\u0275template"](6,g,3,1,"ng-template",null,3,l["\u0275\u0275templateRefExtractor"])}},directives:[m.a,f.a],styles:[".wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}"]}),h),x=["header","Dialogs"];v=" You can easily create your custom dialogs by extending our abstract class and providing your own component as a dialog. ";var C,O,w,T=["heading","Custom dialog"],S=((C=function e(){_classCallCheck(this,e),this.example1={TypeScript:"import {\n    ChangeDetectionStrategy,\n    Component,\n    Inject,\n    Injectable,\n    Provider,\n} from '@angular/core';\nimport {AbstractTuiDialogService, TUI_DIALOGS, TuiDialog} from '@taiga-ui/cdk';\nimport {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\n\n// Define options interface\ninterface PromptOptions {\n    readonly heading: string;\n    readonly buttons: readonly [string, string];\n}\n\n// Create component\n@Component({\n    selector: 'prompt',\n    templateUrl: './prompt.template.html',\n    styleUrls: ['./prompt.style.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PromptComponent {\n    // Here you get options + content + id + observer\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT) readonly context: TuiDialog<PromptOptions, boolean>,\n    ) {}\n\n    onClick(response: boolean) {\n        this.context.completeWith(response);\n    }\n}\n\n// Create service\n@Injectable({\n    providedIn: 'root',\n})\nexport class PromptService extends AbstractTuiDialogService<PromptOptions> {\n    readonly defaultOptions = {\n        heading: 'Are you sure?',\n        buttons: ['Yes', 'No'],\n    } as const;\n    readonly component = new PolymorpheusComponent(PromptComponent);\n}\n\n// Add this provider to app module\nexport const PROMPT_PROVIDER: Provider = {\n    provide: TUI_DIALOGS,\n    useExisting: PromptService,\n    multi: true,\n};\n",HTML:'\x3c!-- Add id for accessibility purposes --\x3e\n<h2 [id]="context.id">{{context.heading}}</h2>\n<section\n    polymorpheus-outlet\n    [content]="context.content"\n    [context]="context"\n></section>\n<p class="buttons">\n    <button tuiButton class="tui-space_right-3" (click)="onClick(true)">\n        {{context.buttons[0]}}\n    </button>\n    <button tuiButton appearance="secondary" (click)="onClick(false)">\n        {{context.buttons[1]}}\n    </button>\n</p>\n',LESS:":host {\n    display: block;\n    padding: 24px;\n    margin: auto;\n    border-radius: 0 0 12px 12px;\n    background: var(--tui-base-01);\n    box-shadow: inset 0 4px var(--tui-accent);\n    animation: tuiReveal 0.3s, tuiFadeIn 0.3s;\n}\n\n.buttons {\n    display: flex;\n    justify-content: center;\n    margin: 24px 0 0;\n}\n"}}).\u0275fac=function(e){return new(e||C)},C.\u0275cmp=l["\u0275\u0275defineComponent"]({type:C,selectors:[["dialogs"]],decls:7,vars:1,consts:[[6,"header"],["id","dialog",3,"content",6,"heading"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275i18nAttributes"](1,x),l["\u0275\u0275elementStart"](2,"p"),l["\u0275\u0275i18n"](3,v),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"tui-doc-example",1),l["\u0275\u0275i18nAttributes"](5,T),l["\u0275\u0275element"](6,"tui-dialogs-example-1"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("content",t.example1))},directives:[s.a,u.a,_],encapsulation:2,changeDetection:0}),C),j=n("kiPw"),k=((w=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:w}),w.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||w)},imports:[[i.TuiButtonModule,j.c,r.c]]}),w),A=((O=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:O}),O.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||O)},imports:[[r.c,k,i.TuiButtonModule,c.TuiAvatarModule].concat(_toConsumableArray(a.d),[o.f.forChild(Object(a.m)(S))])]}),O)}}]);