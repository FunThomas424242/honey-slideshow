import { r as registerInstance, c as getIonMode, h, H as Host } from './core-df18ef15.js';

const Footer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, the footer will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         *
         * Note: In order to scroll content behind the footer, the `fullscreen`
         * attribute needs to be set on the content.
         */
        this.translucent = false;
    }
    render() {
        const mode = getIonMode(this);
        const translucent = this.translucent;
        return (h(Host, { role: "contentinfo", class: {
                [mode]: true,
                // Used internally for styling
                [`footer-${mode}`]: true,
                [`footer-translucent`]: translucent,
                [`footer-translucent-${mode}`]: translucent,
            } }, mode === 'ios' && translucent &&
            h("div", { class: "footer-background" }), h("slot", null)));
    }
    static get style() { return "ion-footer {\n  display: block;\n  position: relative;\n  -ms-flex-order: 1;\n  order: 1;\n  width: 100%;\n  z-index: 10;\n}\n\nion-footer ion-toolbar:last-of-type {\n  padding-bottom: var(--ion-safe-area-bottom, 0);\n}\n\n.footer-ios ion-toolbar:first-of-type {\n  --border-width: 0.55px 0 0;\n}\n\n\@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))) {\n  .footer-background {\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    -webkit-backdrop-filter: saturate(180%) blur(20px);\n    backdrop-filter: saturate(180%) blur(20px);\n  }\n\n  .footer-translucent-ios ion-toolbar {\n    --opacity: .8;\n  }\n}\n.footer-ios.ion-no-border ion-toolbar:first-of-type {\n  --border-width: 0;\n}"; }
};

export { Footer as ion_footer };
