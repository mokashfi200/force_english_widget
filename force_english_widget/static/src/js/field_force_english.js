/** @odoo-module **/

import { Component, useRef, onMounted } from "@odoo/owl";
import { standardFieldProps } from "@web/views/fields/standard_field_props";
import { useInputField } from "@web/views/fields/input_field_hook";
import { registry } from "@web/core/registry";
import { _t } from "@web/core/l10n/translation";

function arabicToEnglishKeyboard(text) {
    const map = {
        'ض':'q','ص':'w','ث':'e','ق':'r','ف':'t','غ':'y','ع':'u','ه':'i','خ':'o','ح':'p',
        'ش':'a','س':'s','ي':'d','ب':'f','ل':'g','ا':'h','ت':'j','ن':'k','م':'l',
        'ئ':'z','ء':'x','ؤ':'c','ر':'v','لا':'b','ى':'n','ة':'m','و':',','ز':'.','ظ':'/'
    };
    return text.split("").map(ch => map[ch] || ch).join("");
}

export class FieldForceEnglish extends Component {
    static template = "force_english_widget.FieldForceEnglish";
    static props = { ...standardFieldProps };

    inputRef = useRef("input");

    setup() {
        useInputField({
            getValue: () => this.props.record.data[this.props.name] || "",
            refName: "input",
            parse: (v) => v || "",
        });

        onMounted(() => {
            if (this.props.readonly) return;
            const input = this.inputRef.el;
            if (!input) return;

            input.style.direction = "ltr";
            input.addEventListener("input", () => {
                let value = input.value || "";
                value = arabicToEnglishKeyboard(value).toUpperCase();
                input.value = value;
                this.props.record.update({ [this.props.name]: value });
            });
        });
    }
}

registry.category("fields").add("force_english", {
    component: FieldForceEnglish,
    displayName: _t("Force English"),
    supportedTypes: ["char"],
});
