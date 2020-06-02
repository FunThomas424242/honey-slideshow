'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-0a098097.js');
const theme = require('./theme-43d6bd40.js');
const helpers$1 = require('./helpers-31e8d80a.js');
const haptic = require('./haptic-4ffe4bf8.js');

const Toggle = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.inputId = `ion-tg-${toggleIds++}`;
        this.lastDrag = 0;
        this.activated = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the toggle is selected.
         */
        this.checked = false;
        /**
         * If `true`, the user cannot interact with the toggle.
         */
        this.disabled = false;
        /**
         * The value of the toggle does not mean if it's checked or not, use the `checked`
         * property for that.
         *
         * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
         * it's only used when the toggle participates in a native `<form>`.
         */
        this.value = 'on';
        this.onClick = () => {
            if (this.lastDrag + 300 < Date.now()) {
                this.checked = !this.checked;
            }
        };
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
        this.ionChange = core.createEvent(this, "ionChange", 7);
        this.ionFocus = core.createEvent(this, "ionFocus", 7);
        this.ionBlur = core.createEvent(this, "ionBlur", 7);
        this.ionStyle = core.createEvent(this, "ionStyle", 7);
    }
    checkedChanged(isChecked) {
        this.ionChange.emit({
            checked: isChecked,
            value: this.value
        });
    }
    disabledChanged() {
        this.emitStyle();
        if (this.gesture) {
            this.gesture.enable(!this.disabled);
        }
    }
    async connectedCallback() {
        this.gesture = (await new Promise(function (resolve) { resolve(require('./index-5995c544.js')); })).createGesture({
            el: this.el,
            gestureName: 'toggle',
            gesturePriority: 100,
            threshold: 5,
            passive: false,
            onStart: () => this.onStart(),
            onMove: ev => this.onMove(ev),
            onEnd: ev => this.onEnd(ev),
        });
        this.disabledChanged();
    }
    disconnectedCallback() {
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    }
    componentWillLoad() {
        this.emitStyle();
    }
    emitStyle() {
        this.ionStyle.emit({
            'interactive-disabled': this.disabled,
        });
    }
    onStart() {
        this.activated = true;
        // touch-action does not work in iOS
        this.setFocus();
    }
    onMove(detail) {
        if (shouldToggle(document, this.checked, detail.deltaX, -10)) {
            this.checked = !this.checked;
            haptic.hapticSelection();
        }
    }
    onEnd(ev) {
        this.activated = false;
        this.lastDrag = Date.now();
        ev.event.preventDefault();
        ev.event.stopImmediatePropagation();
    }
    getValue() {
        return this.value || '';
    }
    setFocus() {
        if (this.buttonEl) {
            this.buttonEl.focus();
        }
    }
    render() {
        const { inputId, disabled, checked, activated, color, el } = this;
        const mode = core.getIonMode(this);
        const labelId = inputId + '-lbl';
        const label = helpers$1.findItemLabel(el);
        const value = this.getValue();
        if (label) {
            label.id = labelId;
        }
        helpers$1.renderHiddenInput(true, el, this.name, (checked ? value : ''), disabled);
        return (core.h(core.Host, { onClick: this.onClick, role: "checkbox", "aria-disabled": disabled ? 'true' : null, "aria-checked": `${checked}`, "aria-labelledby": labelId, class: Object.assign(Object.assign({}, theme.createColorClasses(color)), { [mode]: true, 'in-item': theme.hostContext('ion-item', el), 'toggle-activated': activated, 'toggle-checked': checked, 'toggle-disabled': disabled, 'interactive': true }) }, core.h("div", { class: "toggle-icon", part: "track" }, core.h("div", { class: "toggle-icon-wrapper" }, core.h("div", { class: "toggle-inner", part: "handle" }))), core.h("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: disabled, ref: btnEl => this.buttonEl = btnEl, "aria-hidden": "true" })));
    }
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "checked": ["checkedChanged"],
        "disabled": ["disabledChanged"]
    }; }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the toggle\n   * \@prop --background-checked: Background of the toggle when checked\n   * \@prop --border-radius: Border radius of the toggle track\n   *\n   * \@prop --handle-background: Background of the toggle handle\n   * \@prop --handle-background-checked: Background of the toggle handle when checked\n   *\n   * \@prop --handle-border-radius: Border radius of the toggle handle\n   * \@prop --handle-box-shadow: Box shadow of the toggle handle\n   * \@prop --handle-height: Height of the toggle handle\n   * \@prop --handle-max-height: Maximum height of the toggle handle\n   * \@prop --handle-width: Width of the toggle handle\n   * \@prop --handle-spacing: Horizontal spacing around the toggle handle\n   * \@prop --handle-transition: Transition of the toggle handle\n   */\n  /* stylelint-disable-next-line declaration-no-important */\n  -webkit-box-sizing: content-box !important;\n  box-sizing: content-box !important;\n  display: inline-block;\n  position: relative;\n  outline: none;\n  contain: content;\n  cursor: pointer;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 2;\n}\n\n:host(.ion-focused) input {\n  border: 2px solid #5e9ed6;\n}\n\n:host(.toggle-disabled) {\n  pointer-events: none;\n}\n\nbutton {\n  left: 0;\n  top: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n}\n[dir=rtl] button, :host-context([dir=rtl]) button {\n  left: unset;\n  right: unset;\n  right: 0;\n}\n\nbutton::-moz-focus-inner {\n  border: 0;\n}\n\n.toggle-icon-wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: var(--handle-transition);\n  transition: var(--handle-transition);\n  will-change: transform;\n}\n\n.toggle-icon {\n  border-radius: var(--border-radius);\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: var(--background);\n  pointer-events: none;\n  overflow: inherit;\n}\n\n:host(.toggle-checked) .toggle-icon {\n  background: var(--background-checked);\n}\n\n.toggle-inner {\n  left: var(--handle-spacing);\n  border-radius: var(--handle-border-radius);\n  position: absolute;\n  width: var(--handle-width);\n  height: var(--handle-height);\n  max-height: var(--handle-max-height);\n  -webkit-transition: var(--handle-transition);\n  transition: var(--handle-transition);\n  background: var(--handle-background);\n  -webkit-box-shadow: var(--handle-box-shadow);\n  box-shadow: var(--handle-box-shadow);\n  contain: strict;\n}\n[dir=rtl] .toggle-inner, :host-context([dir=rtl]) .toggle-inner {\n  left: unset;\n  right: unset;\n  right: var(--handle-spacing);\n}\n\n:host(.toggle-checked) .toggle-icon-wrapper {\n  -webkit-transform: translate3d(calc(100% - var(--handle-width)), 0, 0);\n  transform: translate3d(calc(100% - var(--handle-width)), 0, 0);\n}\n:host-context([dir=rtl]):host(.toggle-checked) .toggle-icon-wrapper, :host-context([dir=rtl]).toggle-checked .toggle-icon-wrapper {\n  -webkit-transform: translate3d(calc(-100% + var(--handle-width)), 0, 0);\n  transform: translate3d(calc(-100% + var(--handle-width)), 0, 0);\n}\n\n:host(.toggle-checked) .toggle-inner {\n  -webkit-transform: translate3d(calc(var(--handle-spacing) * -2), 0, 0);\n  transform: translate3d(calc(var(--handle-spacing) * -2), 0, 0);\n  background: var(--handle-background-checked);\n}\n:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner, :host-context([dir=rtl]).toggle-checked .toggle-inner {\n  -webkit-transform: translate3d(calc(var(--handle-spacing) * 2), 0, 0);\n  transform: translate3d(calc(var(--handle-spacing) * 2), 0, 0);\n}\n\n:host {\n  --background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.088);\n  --background-checked: var(--ion-color-primary, #3880ff);\n  --border-radius: 16px;\n  --handle-background: #ffffff;\n  --handle-background-checked: #ffffff;\n  --handle-border-radius: 25.5px;\n  --handle-box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);\n  --handle-height: calc(32px - (2px * 2));\n  --handle-max-height: calc(100% - (var(--handle-spacing) * 2));\n  --handle-width: calc(32px - (2px * 2));\n  --handle-spacing: 2px;\n  --handle-transition: transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms;\n  width: 51px;\n  height: 32px;\n  contain: strict;\n  overflow: hidden;\n}\n\n:host(.ion-color.toggle-checked) .toggle-icon {\n  background: var(--ion-color-base);\n}\n\n.toggle-icon {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  -webkit-transition: background-color 300ms;\n  transition: background-color 300ms;\n}\n\n.toggle-inner {\n  will-change: transform;\n}\n\n:host(.toggle-activated) .toggle-icon::before,\n:host(.toggle-checked) .toggle-icon::before {\n  -webkit-transform: scale3d(0, 0, 0);\n  transform: scale3d(0, 0, 0);\n}\n\n:host(.toggle-activated.toggle-checked) .toggle-inner::before {\n  -webkit-transform: scale3d(0, 0, 0);\n  transform: scale3d(0, 0, 0);\n}\n\n:host(.toggle-activated) .toggle-inner {\n  width: calc(var(--handle-width) + 6px);\n}\n\n:host(.toggle-activated.toggle-checked) .toggle-icon-wrapper {\n  -webkit-transform: translate3d(calc(100% - var(--handle-width) - 6px), 0, 0);\n  transform: translate3d(calc(100% - var(--handle-width) - 6px), 0, 0);\n}\n:host-context([dir=rtl]):host(.toggle-activated.toggle-checked) .toggle-icon-wrapper, :host-context([dir=rtl]).toggle-activated.toggle-checked .toggle-icon-wrapper {\n  -webkit-transform: translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0);\n  transform: translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0);\n}\n\n:host(.toggle-disabled) {\n  opacity: 0.3;\n}\n\n:host(.in-item[slot]) {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 20px;\n  padding-right: 10px;\n  padding-top: 6px;\n  padding-bottom: 5px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.in-item[slot]) {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 20px;\n    padding-inline-start: 20px;\n    -webkit-padding-end: 10px;\n    padding-inline-end: 10px;\n  }\n}\n\n:host(.in-item[slot=start]) {\n  padding-left: 0;\n  padding-right: 16px;\n  padding-top: 6px;\n  padding-bottom: 5px;\n}\n\@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host(.in-item[slot=start]) {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 0;\n    padding-inline-start: 0;\n    -webkit-padding-end: 16px;\n    padding-inline-end: 16px;\n  }\n}"; }
};
const shouldToggle = (doc, checked, deltaX, margin) => {
    const isRTL = doc.dir === 'rtl';
    if (checked) {
        return (!isRTL && (margin > deltaX)) ||
            (isRTL && (-margin < deltaX));
    }
    else {
        return (!isRTL && (-margin < deltaX)) ||
            (isRTL && (margin > deltaX));
    }
};
let toggleIds = 0;

exports.ion_toggle = Toggle;
