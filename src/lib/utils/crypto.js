const keys = generate_keys().then((keys) => keys);

const public_key_link = keys.then((result_keys) =>
    fetch_public_key_link(result_keys).then(
        (result_public_key) => result_public_key.split('/').pop().split('.')[0],
    ),
);

export async function get_public_key() {
    return (await keys).publicKey;
}

export async function get_private_key() {
    return (await keys).privateKey;
}

export async function get_public_key_link() {
    return await public_key_link;
}

async function fetch_public_key_link(k) {
    let stuff = await crypto.subtle.exportKey('jwk', k.publicKey);
    const form = new FormData();
    let blob_key = new File([JSON.stringify(stuff)], 'public_key.json', {
        type: 'application/json',
    });
    form.append('file', blob_key, 'public_key.json');
    form.append('expires', '168'); // a week
    const response = await fetch('http://localhost:54321/functions/v1/send_file', {
        method: 'POST',
        body: form,
    });
    // TODO: cache the 0x0 link?
    return await response.text();
}

async function generate_keys() {
    const item = localStorage.getItem('crypto_keys');
    if (item) {
        const json_item = JSON.parse(item);
        if (json_item.expiry >= new Date().getTime()) {
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
    const private_key = await window.crypto.subtle.exportKey('jwk', new_keys.privateKey);
    const public_key = await window.crypto.subtle.exportKey('jwk', new_keys.publicKey);
    date.setTime(date.getTime() + 7 * 23 * 60 * 60 * 1000); // a week minus an hour
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
