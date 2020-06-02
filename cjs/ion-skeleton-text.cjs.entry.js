'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const theme = require('./theme-43d6bd40.js');

const SkeletonText = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * If `true`, the skeleton text will animate.
         */
        this.animated = false;
    }
    render() {
        const animated = this.animated && core.config.getBoolean('animated', true);
        const inMedia = theme.hostContext('ion-avatar', this.el) || theme.hostContext('ion-thumbnail', this.el);
        const mode = core.getIonMode(this);
        return (core.h(core.Host, { class: {
                [mode]: true,
                'skeleton-text-animated': animated,
                'in-media': inMedia
            } }, core.h("span", null, "\u00A0")));
    }
    get el() { return core.getElement(this); }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the skeleton text\n   * \@prop --background-rgb: Background of the skeleton text in rgb format\n   *\n   * \@prop --border-radius: Border radius of the skeleton text\n   */\n  --background: rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065);\n  border-radius: var(--border-radius, inherit);\n  display: block;\n  width: 100%;\n  height: inherit;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  background: var(--background);\n  line-height: 10px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  pointer-events: none;\n}\n\nspan {\n  display: inline-block;\n}\n\n:host(.in-media) {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: 100%;\n}\n\n:host(.skeleton-text-animated) {\n  position: relative;\n  background: -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065)), color-stop(18%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.135)), color-stop(33%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065)));\n  background: linear-gradient(to right, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 8%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.135) 18%, rgba(var(--background-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.065) 33%);\n  background-size: 800px 104px;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-name: shimmer;\n  animation-name: shimmer;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n}\n\n/* stylelint-disable property-blacklist */\n\@-webkit-keyframes shimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n\@keyframes shimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n/* stylelint-enable property-blacklist */"; }
};

exports.ion_skeleton_text = SkeletonText;
