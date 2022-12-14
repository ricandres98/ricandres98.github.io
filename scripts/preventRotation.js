window.onload = () => {
    const screenOrientation = window.screen.orientation;
    if (screenOrientation.type.startsWith('portrait')) {
        screenOrientation.lock('portrait');
    }
}