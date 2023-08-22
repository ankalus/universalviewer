import { IIIFEvents } from "../../IIIFEvents";
import { BaseExtension } from "../../modules/uv-shared-module/BaseExtension";
import { FileLinkCenterPanel } from "../../modules/uv-filelinkcenterpanel-module/FileLinkCenterPanel";
import { FooterPanel } from "../../modules/uv-shared-module/FooterPanel";
import { HeaderPanel } from "../../modules/uv-shared-module/HeaderPanel";
import { HelpDialogue } from "../../modules/uv-dialogues-module/HelpDialogue";
import { IDefaultExtension } from "./IDefaultExtension";
import { MoreInfoRightPanel } from "../../modules/uv-moreinforightpanel-module/MoreInfoRightPanel";
import { ResourcesLeftPanel } from "../../modules/uv-resourcesleftpanel-module/ResourcesLeftPanel";
import { SettingsDialogue } from "./SettingsDialogue";
import { ShareDialogue } from "./ShareDialogue";
import { Bools, Strings } from "@edsilv/utils";
import "./theme/theme.less";
import defaultConfig from "./config/en-GB.json";

export default class Extension extends BaseExtension
  implements IDefaultExtension {
  $downloadDialogue: JQuery;
  $shareDialogue: JQuery;
  $helpDialogue: JQuery;
  $settingsDialogue: JQuery;
  centerPanel: FileLinkCenterPanel;
  shareDialogue: ShareDialogue;
  footerPanel: FooterPanel;
  headerPanel: HeaderPanel;
  helpDialogue: HelpDialogue;
  leftPanel: ResourcesLeftPanel;
  rightPanel: MoreInfoRightPanel;
  settingsDialogue: SettingsDialogue;
  defaultConfig: any = defaultConfig;
  locales = {
    "en-GB": defaultConfig,
    "cy-GB": () => import("./config/cy-GB.json"),
    "fr-FR": () => import("./config/fr-FR.json"),
    "pl-PL": () => import("./config/pl-PL.json"),
    "sv-SE": () => import("./config/sv-SE.json")
  };

  create(): void {
    super.create();

    this.extensionHost.subscribe(
      IIIFEvents.CANVAS_INDEX_CHANGE,
      (canvasIndex: number) => {
        this.viewCanvas(canvasIndex);
      }
    );

    this.extensionHost.subscribe(
      IIIFEvents.THUMB_SELECTED,
      (canvasIndex: number) => {
        this.extensionHost.publish(IIIFEvents.CANVAS_INDEX_CHANGE, canvasIndex);
      }
    );
  }

  createModules(): void {
    super.createModules();

    if (this.isHeaderPanelEnabled()) {
      this.headerPanel = new HeaderPanel(this.shell.$headerPanel);
    } else {
      this.shell.$headerPanel.hide();
    }

    if (this.isLeftPanelEnabled()) {
      this.leftPanel = new ResourcesLeftPanel(this.shell.$leftPanel);
    }

    this.centerPanel = new FileLinkCenterPanel(this.shell.$centerPanel);

    if (this.isRightPanelEnabled()) {
      this.rightPanel = new MoreInfoRightPanel(this.shell.$rightPanel);
    }

    if (this.isFooterPanelEnabled()) {
      this.footerPanel = new FooterPanel(this.shell.$footerPanel);
    } else {
      this.shell.$footerPanel.hide();
    }

    this.$helpDialogue = $(
      '<div class="overlay help" aria-hidden="true"></div>'
    );
    this.shell.$overlays.append(this.$helpDialogue);
    this.helpDialogue = new HelpDialogue(this.$helpDialogue);

    this.$shareDialogue = $(
      '<div class="overlay share" aria-hidden="true"></div>'
    );
    this.shell.$overlays.append(this.$shareDialogue);
    this.shareDialogue = new ShareDialogue(this.$shareDialogue);

    this.$settingsDialogue = $(
      '<div class="overlay settings" aria-hidden="true"></div>'
    );
    this.shell.$overlays.append(this.$settingsDialogue);
    this.settingsDialogue = new SettingsDialogue(this.$settingsDialogue);

    if (this.isLeftPanelEnabled()) {
      this.leftPanel.init();
    }

    if (this.isRightPanelEnabled()) {
      this.rightPanel.init();
    }
  }

  render(): void {
    super.render();
  }

  isLeftPanelEnabled(): boolean {
    return (
      Bools.getBool(this.data.config.options.leftPanelEnabled, true) &&
      (this.helper.isMultiCanvas() ||
        this.helper.isMultiSequence() ||
        this.helper.hasResources())
    );
  }

  getEmbedScript(template: string, width: number, height: number): string {
    const appUri: string = this.getAppUri();
    const iframeSrc: string = `${appUri}#?manifest=${this.helper.manifestUri}&c=${this.helper.collectionIndex}&m=${this.helper.manifestIndex}&cv=${this.helper.canvasIndex}`;
    const script: string = Strings.format(
      template,
      iframeSrc,
      width.toString(),
      height.toString()
    );
    return script;
  }
}
