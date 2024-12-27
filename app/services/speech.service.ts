import { SpeechConfig, SpeechSynthesizer } from 'microsoft-cognitiveservices-speech-sdk';

export class SpeechService {
    private synthesizer: SpeechSynthesizer;

    constructor() {
        // Note: In a production app, these would come from environment variables
        const speechConfig = SpeechConfig.fromSubscription(
            'YOUR_AZURE_KEY',
            'YOUR_AZURE_REGION'
        );
        this.synthesizer = new SpeechSynthesizer(speechConfig);
    }

    async speak(text: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.synthesizer.speakTextAsync(
                text,
                result => {
                    resolve();
                    this.synthesizer.close();
                },
                error => {
                    reject(error);
                    this.synthesizer.close();
                }
            );
        });
    }
}