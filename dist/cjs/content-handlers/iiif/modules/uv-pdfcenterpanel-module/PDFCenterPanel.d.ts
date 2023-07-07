import { CenterPanel } from "../uv-shared-module/CenterPanel";
import { IExternalResource } from "manifesto.js";
export declare class PDFCenterPanel extends CenterPanel {
    private _$canvas;
    private _$nextButton;
    private _$pdfContainer;
    private _$prevButton;
    private _$progress;
    private _$zoomInButton;
    private _$zoomOutButton;
    private _canvas;
    private _ctx;
    private _lastMediaUri;
    private _maxScale;
    private _minScale;
    private _fitToHeight;
    private _nextButtonEnabled;
    private _pageIndex;
    private _pageIndexPending;
    private _pageRendering;
    private _pdfDoc;
    private _pdfjsLib;
    private _prevButtonEnabled;
    private _renderTask;
    private _scale;
    private _viewport;
    constructor($element: JQuery);
    create(): void;
    disablePrevButton(): void;
    enablePrevButton(): void;
    hidePrevButton(): void;
    showPrevButton(): void;
    disableNextButton(): void;
    enableNextButton(): void;
    hideNextButton(): void;
    showNextButton(): void;
    openMedia(resources: IExternalResource[]): Promise<void>;
    private _render;
    private _queueRenderPage;
    resize(): void;
}
