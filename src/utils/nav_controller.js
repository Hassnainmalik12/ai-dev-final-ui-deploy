export const navigateToScreen = (screen, args=null) => {
    if (args !== null) {
        window.location = `/?screen=${screen}&${args}`;
    } else {
        window.location = `/?screen=${screen}`;
    }
}
