import { defineStore } from "pinia"

export const useAudioStore = defineStore("audio", {
    state: () => ({
        audioElements: new Set<HTMLAudioElement>(),
    }),
    actions: {
        register(audio: HTMLAudioElement) {
            this.audioElements.add(audio)
        },
        stopAll(except: HTMLAudioElement | null = null) {
            [...this.audioElements]
                .filter(a => a != except)
                .forEach(a => a.pause())
        },
    },
})
