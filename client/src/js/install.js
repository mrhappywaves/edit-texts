const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Added an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// Implemented a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        console.log('No prompt event found.');
        return;
    }

    promptEvent.prompt();

    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
