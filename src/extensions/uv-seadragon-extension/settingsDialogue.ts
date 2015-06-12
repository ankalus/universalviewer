import baseSettings = require("../../modules/uv-dialogues-module/settingsDialogue");
import baseExtension = require("../../modules/uv-shared-module/baseExtension");

export class SettingsDialogue extends baseSettings.SettingsDialogue {

    $pagingEnabled: JQuery;
    $pagingEnabledLabel: JQuery;
    $pagingEnabledCheckbox: JQuery;
    $preserveViewport: JQuery;
    $preserveViewportLabel: JQuery;
    $preserveViewportCheckbox: JQuery;

    constructor($element: JQuery) {
        super($element);
    }

    create() : void {
        this.setConfig('settingsDialogue');

        super.create();

        this.$pagingEnabled = $('<div class="setting pagingEnabled"></div>');
        this.$scroll.append(this.$pagingEnabled);

        this.$pagingEnabledCheckbox = $('<input id="pagingEnabled" type="checkbox" />');
        this.$pagingEnabled.append(this.$pagingEnabledCheckbox);

        this.$pagingEnabledLabel = $('<label for="pagingEnabled">' + this.content.pagingEnabled + '</label>');
        this.$pagingEnabled.append(this.$pagingEnabledLabel);

        this.$preserveViewport = $('<div class="setting preserveViewport"></div>');
        this.$scroll.append(this.$preserveViewport);

        this.$preserveViewportCheckbox = $('<input id="preserveViewport" type="checkbox" />');
        this.$preserveViewport.append(this.$preserveViewportCheckbox);

        this.$preserveViewportLabel = $('<label for="preserveViewport">' + this.content.preserveViewport + '</label>');
        this.$preserveViewport.append(this.$preserveViewportLabel);

        this.$pagingEnabledCheckbox.change(() => {
            var settings: ISettings = this.getSettings();

            if(this.$pagingEnabledCheckbox.is(":checked")) {
                settings.pagingEnabled = true;
            } else {
                settings.pagingEnabled = false;
            }

            this.updateSettings(settings);
        });

        this.$preserveViewportCheckbox.change(() => {
            var settings: ISettings = this.getSettings();

            if(this.$preserveViewportCheckbox.is(":checked")) {
                settings.preserveViewport = true;
            } else {
                settings.preserveViewport = false;
            }

            this.updateSettings(settings);
        });
    }

    open(): void {
        super.open();

        var settings: ISettings = this.getSettings();

        if (settings.pagingEnabled){
            this.$pagingEnabledCheckbox.prop("checked", true);
        } else {
            this.$pagingEnabledCheckbox.removeAttr("checked");
        }

        if (settings.preserveViewport){
            this.$preserveViewportCheckbox.prop("checked", true);
        } else {
            this.$preserveViewportCheckbox.removeAttr("checked");
        }
    }

}