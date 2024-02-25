// import { writable } from 'svelte/store';

/* export const keys = (() => {
    const store = writable('Keys loading');
    get_keys()
        .then((keys) => {
            console.log(keys);
            return crypto.subtle.exportKey('jwk', keys.publicKey);
        })
        .then((public_key) => {
            console.log(public_key);
            store.set(public_key.n);
        });
    return store;
})(); */

export const keys = generate_keys().then((keys) => keys);

export const public_key_link = keys.then((result_keys) =>
    get_public_key(result_keys).then(
        (result_public_key) => result_public_key.split('/').pop().split('.')[0],
    ),
);

async function get_public_key(k) {
    let stuff = await crypto.subtle.exportKey('jwk', k.publicKey);
    const form = new FormData();
    let blob_key = new File([JSON.stringify(stuff)], 'public_key.json', {
        type: 'application/json',
    });
    form.append('file', blob_key, 'public_key.json');
    form.append('expires', '24');
    const response = await fetch('http://localhost:54321/functions/v1/send_file', {
        method: 'POST',
        body: form,
    });
    // TODO: cache the 0x0 link
    return await response.text();
    return 'WIP!';
}

async function generate_keys() {
    const item = localStorage.getItem('crypto_keys');
    if (item) {
        const json_item = JSON.parse(item);
        if (json_item.expiry > new Date().getTime()) {
            console.log(json_item);
            const private_key = await window.crypto.subtle.importKey(
                'jwk',
                json_item.private_key,
                {
                    name: 'RSA-OAEP',
                    hash: 'SHA-256',
                },
                true,
                ['unwrapKey'],
            );

            const public_key = await window.crypto.subtle.importKey(
                'jwk',
                json_item.public_key,
                {
                    name: 'RSA-OAEP',
                    hash: 'SHA-256',
                },
                true,
                ['wrapKey'],
            );

            return {
                privateKey: private_key,
                publicKey: public_key,
            };
        }
    }
    const date = new Date();
    const new_keys = await window.crypto.subtle.generateKey(
        {
            name: 'RSA-OAEP',
            modulusLength: 2048,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: 'SHA-256',
        },
        true,
        ['wrapKey', 'unwrapKey'],
    );
    console.log(new_keys);
    const private_key = await window.crypto.subtle.exportKey('jwk', new_keys.privateKey);
    const public_key = await window.crypto.subtle.exportKey('jwk', new_keys.publicKey);
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    localStorage.setItem(
        'crypto_keys',
        JSON.stringify({
            private_key: private_key,
            public_key: public_key,
            expiry: date.getTime(),
        }),
    );
    return new_keys;
}
