import { r as registerInstance, e as getIonMode, h, H as Host } from './core-890aed19.js';
import { c as createColorClasses } from './theme-bda2b980.js';
var CardTitle = /** @class */ (function () {
    function CardTitle(hostRef) {
        registerInstance(this, hostRef);
    }
    CardTitle.prototype.render = function () {
        var _a;
        var mode = getIonMode(this);
        return (h(Host, { role: "heading", "aria-level": "2", class: Object.assign(Object.assign({}, createColorClasses(this.color)), (_a = { 'ion-inherit-color': true }, _a[mode] = true, _a)) }, h("slot", null)));
    };
    Object.defineProperty(CardTitle, "style", {
        get: function () { return ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850,#262626);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;line-height:1.2}"; },
        enumerable: true,
        configurable: true
    });
    return CardTitle;
}());
export { CardTitle as ion_card_title };
