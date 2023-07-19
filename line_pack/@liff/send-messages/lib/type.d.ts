import { TemplateButtons, URIAction, TemplateConfirm, TemplateColumn, TemplateCarousel, TemplateImageColumn, TemplateImageCarousel, TemplateMessage, FlexBubble, FlexCarousel, FlexMessage, TextMessage, ImageMessage, VideoMessage, AudioMessage, LocationMessage, StickerMessage } from '@line/bot-sdk';
type URIActionWithLabel = URIAction & {
    label: string;
};
type CTemplateButtons = Omit<TemplateButtons, 'actions'> & {
    actions: URIActionWithLabel[];
};
type CTemplateConfirm = Omit<TemplateConfirm, 'actions'> & {
    actions: URIActionWithLabel[];
};
type CTemplateColumn = Omit<TemplateColumn, 'defaultAction' | 'actions'> & {
    defaultAction?: URIActionWithLabel;
    actions: URIActionWithLabel[];
};
type CTemplateCarousel = Omit<TemplateCarousel, 'columns'> & {
    columns: CTemplateColumn[];
};
type CTemplateImageColumn = Omit<TemplateImageColumn, 'action'> & {
    action: URIActionWithLabel;
};
type CTemplateImageCarousel = Omit<TemplateImageCarousel, 'columns'> & {
    columns: CTemplateImageColumn[];
};
type CTemplateContent = CTemplateButtons | CTemplateConfirm | CTemplateCarousel | CTemplateImageCarousel;
type CTemplateMessage = Omit<TemplateMessage, 'template'> & {
    template: CTemplateContent;
};
type CFlexBubble = Omit<FlexBubble, 'action'> & {
    action?: URIActionWithLabel;
};
type CFlexCarousel = Omit<FlexCarousel, 'contents'> & {
    contents: CFlexBubble[];
};
type CFlexContainer = CFlexBubble | CFlexCarousel;
type CFlexMessage = Omit<FlexMessage, 'contents'> & {
    contents: CFlexContainer;
};
export type LiffMessage = TextMessage | ImageMessage | VideoMessage | AudioMessage | LocationMessage | StickerMessage | CTemplateMessage | CFlexMessage;
export {};
