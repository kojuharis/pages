// Testing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize page status
    updatePageStatus();
    
    // Set up event listeners
    setupEventListeners();
    
    // Update last updated timestamp
    updateTimestamp();
    
    // Run initial tests
    runInitialTests();
});

function updatePageStatus() {
    // Update load status
    const loadStatus = document.getElementById('load-status');
    if (loadStatus) {
        loadStatus.textContent = 'Loaded Successfully';
        loadStatus.className = 'status-ok';
    }
    
    // Update JavaScript status
    const jsStatus = document.getElementById('js-status');
    if (jsStatus) {
        jsStatus.textContent = 'JavaScript Working';
        jsStatus.className = 'status-ok';
    }
    
    // Update CSS status (check if styles are applied)
    const cssStatus = document.getElementById('css-status');
    if (cssStatus) {
        const bodyStyles = window.getComputedStyle(document.body);
        const hasCss = bodyStyles.fontFamily.includes('system') || bodyStyles.fontFamily.includes('Segoe');
        
        if (hasCss) {
            cssStatus.textContent = 'CSS Applied';
            cssStatus.className = 'status-ok';
        } else {
            cssStatus.textContent = 'CSS Not Detected';
            cssStatus.className = 'status-warning';
        }
    }
}

function setupEventListeners() {
    // Test button functionality
    const testButton = document.getElementById('test-button');
    const testOutput = document.getElementById('test-output');
    
    if (testButton && testOutput) {
        testButton.addEventListener('click', function() {
            const timestamp = new Date().toLocaleTimeString();
            testOutput.innerHTML = `
                <strong>Test executed successfully!</strong><br>
                Time: ${timestamp}<br>
                Random number: ${Math.floor(Math.random() * 1000)}<br>
                Button clicks: ${this.dataset.clicks || 0}
            `;
            
            // Update click counter
            this.dataset.clicks = (parseInt(this.dataset.clicks || 0) + 1).toString();
            
            // Add visual feedback
            testOutput.classList.add('updated');
            setTimeout(() => testOutput.classList.remove('updated'), 2000);
        });
    }
    
    // Form submission test
    const testForm = document.getElementById('test-form');
    if (testForm) {
        testForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const testOutput = document.getElementById('test-output');
            
            if (testOutput) {
                let output = '<strong>Form Test Results:</strong><br>';
                for (let [key, value] of formData.entries()) {
                    output += `${key}: ${value}<br>`;
                }
                
                testOutput.innerHTML = output;
                testOutput.classList.add('updated');
                setTimeout(() => testOutput.classList.remove('updated'), 2000);
            }
            
            // Show alert for demonstration
            alert('Form submitted successfully! Check the output below.');
        });
    }
    
    // Test link functionality
    const testLink = document.getElementById('test-link');
    if (testLink) {
        testLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const testOutput = document.getElementById('test-output');
            if (testOutput) {
                testOutput.innerHTML = `
                    <strong>Link Test:</strong><br>
                    Link clicked at ${new Date().toLocaleTimeString()}<br>
                    Link text: "${this.textContent}"<br>
                    Link href: "${this.href}"
                `;
                testOutput.classList.add('updated');
                setTimeout(() => testOutput.classList.remove('updated'), 2000);
            }
        });
    }
}

function updateTimestamp() {
    const timestampElement = document.getElementById('last-updated');
    if (timestampElement) {
        const now = new Date();
        timestampElement.textContent = now.toLocaleString();
    }
}

function runInitialTests() {
    // Test console logging
    console.log('Testing page initialized successfully');
    console.log('Current URL:', window.location.href);
    console.log('User Agent:', navigator.userAgent);
    console.log('Screen Resolution:', screen.width + 'x' + screen.height);
    
    // Test local storage (if available)
    try {
        localStorage.setItem('test-key', 'test-value');
        const testValue = localStorage.getItem('test-key');
        console.log('Local Storage Test:', testValue === 'test-value' ? 'PASS' : 'FAIL');
        localStorage.removeItem('test-key');
    } catch (e) {
        console.log('Local Storage Test: FAIL -', e.message);
    }
    
    // Test session storage (if available)
    try {
        sessionStorage.setItem('test-session', 'session-value');
        const sessionValue = sessionStorage.getItem('test-session');
        console.log('Session Storage Test:', sessionValue === 'session-value' ? 'PASS' : 'FAIL');
        sessionStorage.removeItem('test-session');
    } catch (e) {
        console.log('Session Storage Test: FAIL -', e.message);
    }
}

// Additional utility functions for testing
function testFunction() {
    return 'Test function executed successfully';
}

function generateTestData() {
    return {
        timestamp: Date.now(),
        random: Math.random(),
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform
    };
}

// Export functions for external testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        testFunction,
        generateTestData,
        updatePageStatus,
        updateTimestamp
    };
}

// Add to global scope for browser console testing
window.testUtils = {
    testFunction,
    generateTestData,
    updatePageStatus,
    updateTimestamp
};