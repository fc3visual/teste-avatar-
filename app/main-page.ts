import { EventData, Page } from '@nativescript/core';
import { AvatarViewModel } from './view-models/avatar-view-model';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new AvatarViewModel();
}