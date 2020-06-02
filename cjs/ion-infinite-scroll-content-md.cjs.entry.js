'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const index$3 = require('./index-2504963a.js');

const InfiniteScrollContent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    componentDidLoad() {
        if (this.loadingSpinner === undefined) {
            const mode = core.getIonMode(this);
            this.loadingSpinner = core.config.get('infiniteLoadingSpinner', core.config.get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
        }
    }
    render() {
        const mode = core.getIonMode(this);
        return (core.h(core.Host, { class: {
                [mode]: true,
                // Used internally for styling
                [`infinite-scroll-content-${mode}`]: true
            } }, core.h("div", { class: "infinite-loading" }, this.loadingSpinner && (core.h("div", { class: "infinite-loading-spinner" }, core.h("ion-spinner", { name: this.loadingSpinner }))), this.loadingText && (core.h("div", { class: "infinite-loading-text", innerHTML: index$3.sanitizeDOMString(this.loadingText) })))));
    }
    static get style() { return "ion-infinite-scroll-content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n  min-height: 84px;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.infinite-loading {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 32px;\n  display: none;\n  width: 100%;\n}\n\n.infinite-loading-text {\n  margin-left: 32px;\n  margin-right: 32px;\n  margin-top: 4px;\n  margin-bottom: 0;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .infinite-loading-text {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 32px;\n    margin-inline-start: 32px;\n    -webkit-margin-end: 32px;\n    margin-inline-end: 32px;\n  }\n}\n\n.infinite-scroll-loading ion-infinite-scroll-content > .infinite-loading {\n  display: block;\n}\n\n.infinite-scroll-content-md .infinite-loading-text {\n  color: var(--ion-color-step-600, #666666);\n}\n\n.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,\n.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,\n.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle {\n  stroke: var(--ion-color-step-600, #666666);\n}\n\n.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,\n.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,\n.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle {\n  fill: var(--ion-color-step-600, #666666);\n}"; }
};

exports.ion_infinite_scroll_content = InfiniteScrollContent;
