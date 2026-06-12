function navigate(page) {
    const display = document.getElementById('content-display');
    display.innerHTML = '<h2>INITIALIZING...</h2><div class="spinner"></div>';
    
    setTimeout(() => {
        if (page === 'preview') {
            display.innerHTML = '<h2>VOLUME 1: PREVIEW</h2><div id="story-grid"></div>';
            const grid = document.getElementById('story-grid');
            for(let i=1; i<=8; i++) {
                grid.innerHTML += `<div class="unit-card" onclick="simulatePurchase(${i})">
                    <h3>UNIT 0${i}</h3>
                    <p>ACCESS DATA STREAM</p>
                </div>`;
            }
        } else {
            display.innerHTML = `<h2>${page.toUpperCase()} SECTOR</h2><p>Data stream initializing...</p>`;
        }
    }, 800);
}

function simulatePurchase(unitId) {
    const display = document.getElementById('content-display');
    display.innerHTML = `<h2>ENCRYPTING UNIT 0${unitId}...</h2><div class="spinner"></div>`;
    
    setTimeout(() => {
        display.innerHTML = `<h2>ACCESS GRANTED</h2><p>UNIT 0${unitId} DECRYPTED SUCCESSFULLY.</p>
        <button onclick="navigate('preview')">RETURN TO HUB</button>`;
    }, 2000);
}
