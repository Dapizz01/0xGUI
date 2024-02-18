import { writable } from 'svelte/store';

export const notifications = writable([]);

export class Notification {
    constructor(type, message) {
        this.type = type;
        this.message = message;
    }
}
