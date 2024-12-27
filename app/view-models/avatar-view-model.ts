import { Observable } from '@nativescript/core';
import { SpeechService } from '../services/speech.service';
import { Avatar } from '../models/avatar.model';

export class AvatarViewModel extends Observable {
    private speechService: SpeechService;
    private _avatar: Avatar;
    private _message: string = '';
    private _isSpeaking: boolean = false;

    constructor() {
        super();
        this.speechService = new SpeechService();
        this._avatar = {
            id: '1',
            imageUrl: '~/assets/default-avatar.png',
            name: 'Default Avatar',
            voice: 'en-US-JennyNeural'
        };
    }

    get avatar(): Avatar {
        return this._avatar;
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value);
        }
    }

    get isSpeaking(): boolean {
        return this._isSpeaking;
    }

    set isSpeaking(value: boolean) {
        if (this._isSpeaking !== value) {
            this._isSpeaking = value;
            this.notifyPropertyChange('isSpeaking', value);
        }
    }

    async speak() {
        if (!this.message || this.isSpeaking) return;

        try {
            this.isSpeaking = true;
            await this.speechService.speak(this.message);
        } catch (error) {
            console.error('Speech error:', error);
        } finally {
            this.isSpeaking = false;
        }
    }
}