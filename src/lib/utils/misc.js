export function sanitize_input(string) {
    const pattern = /[<,.>]+/;
    if (string.match(pattern)) {
        throw new Error(
            'One of the text input fields contains non-allowed characters (such as <.,>).',
        );
    }
    return string;
}
