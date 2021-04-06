window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector: string, text: string) => {
        const element = document.getElementById(selector);
        if (element)
            element.innerText = text;
    }

    for (const type of ['chrome', 'node', 'electron']) {
        let version = process.versions[type];
        replaceText(`${type}-version`, typeof version === 'string' ? version : '')
    }
})
