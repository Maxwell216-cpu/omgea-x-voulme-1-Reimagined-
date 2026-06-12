unction navigate(page) {
    const display = document.getElementById('content-display');
    display.innerHTML = '<h2>CONNECTING...</h2>';
    setTimeout(() => {
        display.innerHTML = `<h2>${page.toUpperCase()} SECTOR</h2><p>Data stream initializing...</p>`;
    }, 500);
}
