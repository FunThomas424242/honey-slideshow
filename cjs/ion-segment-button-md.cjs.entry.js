'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const theme = require('./theme-43d6bd40.js');

let ids = 0;
const SegmentButton = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.segmentEl = null;
        this.checked = false;
        /**
         * If `true`, the user cannot interact with the segment button.
         */
        this.disabled = false;
        /**
         * Set the layout of the text and icon in the segment.
         */
        this.layout = 'icon-top';
        /**
         * The type of the button.
         */
        this.type = 'button';
        /**
         * The value of the segment button.
         */
        this.value = 'ion-sb-' + (ids++);
        this.updateState = () => {
            if (this.segmentEl) {
                this.checked = this.segmentEl.value === this.value;
            }
        };
    }
    connectedCallback() {
        const segmentEl = this.segmentEl = this.el.closest('ion-segment');
        if (segmentEl) {
            this.updateState();
            segmentEl.addEventListener('ionSelect', this.updateState);
        }
    }
    disconnectedCallback() {
        const segmentEl = this.segmentEl;
        if (segmentEl) {
            segmentEl.removeEventListener('ionSelect', this.updateState);
            this.segmentEl = null;
        }
    }
    get hasLabel() {
        return !!this.el.querySelector('ion-label');
    }
    get hasIcon() {
        return !!this.el.querySelector('ion-icon');
    }
    render() {
        const { checked, type, disabled, hasIcon, hasLabel, layout } = this;
        const mode = core.getIonMode(this);
        return (core.h(core.Host, { "aria-disabled": disabled ? 'true' : null, class: {
                [mode]: true,
                'in-toolbar': theme.hostContext('ion-toolbar', this.el),
                'in-toolbar-color': theme.hostContext('ion-toolbar[color]', this.el),
                'in-segment': theme.hostContext('ion-segment', this.el),
                'in-segment-color': theme.hostContext('ion-segment[color]', this.el),
                'segment-button-has-label': hasLabel,
                'segment-button-has-icon': hasIcon,
                'segment-button-has-label-only': hasLabel && !hasIcon,
                'segment-button-has-icon-only': hasIcon && !hasLabel,
                'segment-button-disabled': disabled,
                'segment-button-checked': checked,
                [`segment-button-layout-${layout}`]: true,
                'ion-activatable': true,
                'ion-activatable-instant': true,
                'ion-focusable': true,
            } }, core.h("button", { type: type, "aria-pressed": checked ? 'true' : 'false', class: "button-native", disabled: disabled }, core.h("span", { class: "button-inner" }, core.h("slot", null)), mode === 'md' && core.h("ion-ripple-effect", null)), core.h("div", { part: "indicator", class: {
                'segment-button-indicator': true,
                'segment-button-indicator-animated': true
            } }, core.h("div", { part: "indicator-background", class: "segment-button-indicator-background" }))));
    }
    get el() { return core.getElement(this); }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the segment button\n   * \@prop --background-checked: Background of the checked segment button\n   *\n   * \@prop --background-hover: Background of the segment button on hover\n   * \@prop --background-focused: Background of the segment button when focused with the tab key\n   *\n   * \@prop --background-hover-opacity: Opacity of the segment button background on hover\n   * \@prop --background-focused-opacity: Opacity of the segment button background when focused with the tab key\n   *\n   * \@prop --color: Color of the segment button\n   * \@prop --color-checked: Color of the checked segment button\n   * \@prop --color-hover: Color of the segment button on hover\n   * \@prop --color-focused: Color of the segment button when focused with the tab key\n   *\n   * \@prop --border-radius: Radius of the segment button border\n   * \@prop --border-color: Color of the segment button border\n   * \@prop --border-style: Style of the segment button border\n   * \@prop --border-width: Width of the segment button border\n   *\n   * \@prop --margin-top: Top margin of the segment button\n   * \@prop --margin-end: Right margin if direction is left-to-right, and left margin if direction is right-to-left of the segment button\n   * \@prop --margin-bottom: Bottom margin of the segment button\n   * \@prop --margin-start: Left margin if direction is left-to-right, and right margin if direction is right-to-left of the segment button\n   *\n   * \@prop --padding-top: Top padding of the segment button\n   * \@prop --padding-end: Right padding if direction is left-to-right, and left padding if direction is right-to-left of the segment button\n   * \@prop --padding-bottom: Bottom padding of the segment button\n   * \@prop --padding-start: Left padding if direction is left-to-right, and right padding if direction is right-to-left of the segment button\n   *\n   * \@prop --transition: Transition of the segment button\n   *\n   * \@prop --indicator-height: Height of the indicator for the checked segment button\n   * \@prop --indicator-box-shadow: Box shadow on the indicator for the checked segment button\n   * \@prop --indicator-color: Color of the indicator for the checked segment button\n   * \@prop --indicator-transition: Transition of the indicator for the checked segment button\n   * \@prop --indicator-transform: Transform of the indicator for the checked segment button\n   */\n  --color: initial;\n  --color-hover: var(--color);\n  --color-checked: var(--color);\n  --color-disabled: var(--color);\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  border-radius: var(--border-radius);\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  height: auto;\n  background: var(--background);\n  color: var(--color);\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n  cursor: pointer;\n}\n\n.button-native {\n  border-radius: 0;\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-indent: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  margin-left: var(--margin-start);\n  margin-right: var(--margin-end);\n  margin-top: var(--margin-top);\n  margin-bottom: var(--margin-bottom);\n  padding-left: var(--padding-start);\n  padding-right: var(--padding-end);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  -webkit-transform: translate3d(0,  0,  0);\n  transform: translate3d(0,  0,  0);\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  min-width: inherit;\n  max-width: inherit;\n  height: auto;\n  min-height: inherit;\n  max-height: inherit;\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border: none;\n  outline: none;\n  background: transparent;\n  contain: content;\n  pointer-events: none;\n  overflow: hidden;\n  z-index: 2;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .button-native {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--margin-start);\n    margin-inline-start: var(--margin-start);\n    -webkit-margin-end: var(--margin-end);\n    margin-inline-end: var(--margin-end);\n  }\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .button-native {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--padding-start);\n    padding-inline-start: var(--padding-start);\n    -webkit-padding-end: var(--padding-end);\n    padding-inline-end: var(--padding-end);\n  }\n}\n\n.button-native::after {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  content: \"\";\n  opacity: 0;\n}\n\n.button-inner {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-flow: inherit;\n  flex-flow: inherit;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n:host(.segment-button-checked) {\n  background: var(--background-checked);\n  color: var(--color-checked);\n}\n\n:host(.segment-button-disabled) {\n  cursor: default;\n  pointer-events: none;\n}\n\n:host(.ion-focused) .button-native {\n  color: var(--color-focused);\n}\n:host(.ion-focused) .button-native::after {\n  background: var(--background-focused);\n  opacity: var(--background-focused-opacity);\n}\n\n\@media (any-hover: hover) {\n  :host(:hover) .button-native {\n    color: var(--color-hover);\n  }\n  :host(:hover) .button-native::after {\n    background: var(--background-hover);\n    opacity: var(--background-hover-opacity);\n  }\n\n  :host(.segment-button-checked:hover) .button-native {\n    color: var(--color-checked);\n  }\n}\n::slotted(ion-icon) {\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -ms-flex-order: -1;\n  order: -1;\n  pointer-events: none;\n}\n\n::slotted(ion-label) {\n  display: block;\n  -ms-flex-item-align: center;\n  align-self: center;\n  line-height: 22px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n\n:host(.segment-button-layout-icon-top) .button-native {\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n:host(.segment-button-layout-icon-start) .button-native {\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n\n:host(.segment-button-layout-icon-end) .button-native {\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n\n:host(.segment-button-layout-icon-bottom) .button-native {\n  -ms-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n}\n\n:host(.segment-button-layout-icon-hide) ::slotted(ion-icon) {\n  display: none;\n}\n\n:host(.segment-button-layout-label-hide) ::slotted(ion-label) {\n  display: none;\n}\n\nion-ripple-effect {\n  color: var(--ripple-color, var(--color-checked));\n}\n\n.segment-button-indicator {\n  -webkit-transform-origin: left;\n  transform-origin: left;\n  position: absolute;\n  opacity: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  will-change: transform, opacity;\n  pointer-events: none;\n}\n\n.segment-button-indicator-background {\n  width: 100%;\n  height: var(--indicator-height);\n  -webkit-transform: var(--indicator-transform);\n  transform: var(--indicator-transform);\n  -webkit-box-shadow: var(--indicator-box-shadow);\n  box-shadow: var(--indicator-box-shadow);\n  pointer-events: none;\n}\n\n.segment-button-indicator-animated {\n  -webkit-transition: var(--indicator-transition);\n  transition: var(--indicator-transition);\n}\n\n:host(.segment-button-checked) .segment-button-indicator {\n  opacity: 1;\n}\n\n\@media (prefers-reduced-motion: reduce) {\n  .segment-button-indicator-background {\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  .segment-button-indicator-animated {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n:host {\n  --background: none;\n  --background-checked: none;\n  --background-hover: var(--color-checked);\n  --background-focused: var(--color-checked);\n  --background-activated-opacity: 0;\n  --background-focused-opacity: .12;\n  --background-hover-opacity: .04;\n  --color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6);\n  --color-checked: var(--ion-color-primary, #3880ff);\n  --indicator-box-shadow: none;\n  --indicator-color: var(--color-checked);\n  --indicator-height: 2px;\n  --indicator-transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  --indicator-transform: none;\n  --padding-top: 0;\n  --padding-end: 16px;\n  --padding-bottom: 0;\n  --padding-start: 16px;\n  --transition: color 0.15s linear 0s, opacity 0.15s linear 0s;\n  min-width: 90px;\n  max-width: 360px;\n  min-height: 48px;\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  line-height: 40px;\n  text-transform: uppercase;\n}\n\n.button-native {\n  min-width: 90px;\n}\n\n:host(.segment-button-disabled) {\n  opacity: 0.3;\n}\n\n:host(.in-segment-color) {\n  background: none;\n  color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6);\n}\n\n:host(.in-segment-color) ion-ripple-effect {\n  color: var(--ion-color-base);\n}\n\n:host(.in-segment-color) .segment-button-indicator-background {\n  background: var(--ion-color-base);\n}\n\n:host(.in-segment-color.segment-button-checked) .button-native {\n  color: var(--ion-color-base);\n}\n\n:host(.in-segment-color.ion-focused) .button-native::after {\n  background: var(--ion-color-base);\n}\n\n\@media (any-hover: hover) {\n  :host(.in-segment-color:hover) .button-native {\n    color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6);\n  }\n  :host(.in-segment-color:hover) .button-native::after {\n    background: var(--ion-color-base);\n  }\n\n  :host(.in-segment-color.segment-button-checked:hover) .button-native {\n    color: var(--ion-color-base);\n  }\n}\n:host(.in-toolbar:not(.in-segment-color)) {\n  --background: var(--ion-toolbar-segment-background, none);\n  --background-checked: var(--ion-toolbar-segment-background-checked, none);\n  --color: var(--ion-toolbar-segment-color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6));\n  --color-checked: var(--ion-toolbar-segment-color-checked, var(--ion-color-primary, #3880ff));\n  --indicator-color: var(--ion-toolbar-segment-color-checked, var(--color-checked));\n}\n\n:host(.in-toolbar-color:not(.in-segment-color)) .button-native {\n  color: rgba(var(--ion-color-contrast-rgb), 0.6);\n}\n\n:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native {\n  color: var(--ion-color-contrast);\n}\n\n\@media (any-hover: hover) {\n  :host(.in-toolbar-color:not(.in-segment-color)) .button-native::after {\n    background: var(--ion-color-contrast);\n  }\n}\n::slotted(ion-icon) {\n  margin-top: 12px;\n  margin-bottom: 12px;\n  font-size: 24px;\n}\n::slotted(ion-label) {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n:host(.segment-button-layout-icon-top) ::slotted(ion-label),\n:host(.segment-button-layout-icon-bottom) ::slotted(ion-icon) {\n  margin-top: 0;\n}\n:host(.segment-button-layout-icon-top) ::slotted(ion-icon),\n:host(.segment-button-layout-icon-bottom) ::slotted(ion-label) {\n  margin-bottom: 0;\n}\n:host(.segment-button-layout-icon-start) ::slotted(ion-label) {\n  margin-left: 8px;\n  margin-right: 0;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.segment-button-layout-icon-start) ::slotted(ion-label) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 8px;\n    margin-inline-start: 8px;\n    -webkit-margin-end: 0;\n    margin-inline-end: 0;\n  }\n}\n\n:host(.segment-button-layout-icon-end) ::slotted(ion-label) {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.segment-button-layout-icon-end) ::slotted(ion-label) {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 0;\n    margin-inline-start: 0;\n    -webkit-margin-end: 8px;\n    margin-inline-end: 8px;\n  }\n}\n\n:host(.segment-button-has-icon-only) ::slotted(ion-icon) {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n:host(.segment-button-has-label-only) ::slotted(ion-label) {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n.segment-button-indicator {\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.segment-button-indicator-background {\n  background: var(--indicator-color);\n}\n\n:host(.in-toolbar:not(.in-segment-color)) .segment-button-indicator-background {\n  background: var(--ion-toolbar-segment-indicator-color, var(--indicator-color));\n}\n\n:host(.in-toolbar-color:not(.in-segment-color)) .segment-button-indicator-background {\n  background: var(--ion-color-contrast);\n}"; }
};

exports.ion_segment_button = SegmentButton;
