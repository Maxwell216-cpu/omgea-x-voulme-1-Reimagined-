function navigate(page) {
    const display = document.getElementById('content-display');
    display.innerHTML = '<h2>INITIALIZING...</h2><div class="spinner"></div>';
    
    setTimeout(() => {
        switch(page) {
            case 'preview':
                display.innerHTML = '<h2>VOLUME 1: PREVIEW</h2><div id="story-grid"></div>';
                const grid = document.getElementById('story-grid');
                for(let i=1; i<=8; i++) {
                    grid.innerHTML += `<div class="unit-card" onclick="simulatePurchase(${i})"><h3>UNIT 0${i}</h3><p>ACCESS DATA STREAM</p></div>`;
                }
                break;
            case 'media':
                display.innerHTML = `<h2>TRANSMISSION MATRIX</h2>
                    <div class="video-embed">
                        <p>Incoming Signal: [LIVE FEED]</p>
                        <div class="placeholder-video"></div>
                    </div>`;
                break;
            case 'requisition':
                display.innerHTML = `<h2>REQUISITION MATRIX</h2>
                    <div class="shop-grid">
                        <div class="unit-card"><h3>HARDCOPY VOL 1</h3>
                        <button onclick="simulatePurchase('HARDCOPY')">PURCHASE</button></div>
                    </div>`;
                break;
        }
    }, 800);
}

function simulatePurchase(id) {
    const display = document.getElementById('content-display');
    display.innerHTML = `
        <h2>SECURE PAYMENT TERMINAL</h2>
        <p>ENTER CLEARANCE CODE FOR ITEM: ${id}</p>
        <input type="password" id="clearance-code" placeholder="XXXX">
        <button onclick="verifyCode('${id}')">PROCESS TRANSACTION</button>
    `;
}

function verifyCode(id) {
    const display = document.getElementById('content-display');
    const code = document.getElementById('clearance-code').value;
    display.innerHTML = `<h2>PROCESSING...</h2><div class="spinner"></div>`;

    setTimeout(() => {
        if (code === "1234") {
            display.innerHTML = `<h2>TRANSACTION COMPLETE</h2><p>ITEM ${id} AUTHORIZED.</p>
            <button onclick="navigate('requisition')">RETURN TO HUB</button>`;
        } else {
            display.innerHTML = `<h2 style="color:red">TRANSACTION FAILED</h2><p>INVALID CLEARANCE CODE.</p>
            <button onclick="simulatePurchase('${id}')">RETRY</button>`;
        }
    }, 1500);
}
