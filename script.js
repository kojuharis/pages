// Testing Pages JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Testing Pages loaded successfully!');
    
    // Test button functionality
    const testButton = document.getElementById('test-button');
    const testResult = document.getElementById('test-result');
    
    if (testButton && testResult) {
        testButton.addEventListener('click', function() {
            // Simulate a test operation
            testResult.innerHTML = 'Running test...';
            testResult.className = '';
            
            setTimeout(() => {
                const isSuccess = Math.random() > 0.3; // 70% success rate
                
                if (isSuccess) {
                    testResult.innerHTML = '✅ Test completed successfully!';
                    testResult.className = 'success';
                } else {
                    testResult.innerHTML = '❌ Test failed. Please try again.';
                    testResult.className = 'error';
                }
            }, 1000);
        });
    }
    
    // Add current page highlighting to navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.backgroundColor = '#34495e';
        }
    });
    
    // Simple form validation function for testing
    window.validateForm = function(form) {
        const inputs = form.querySelectorAll('input[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = '#e74c3c';
                isValid = false;
            } else {
                input.style.borderColor = '#27ae60';
            }
        });
        
        return isValid;
    };
    
    // Testing utility functions
    window.testUtils = {
        log: function(message) {
            console.log(`[TEST] ${message}`);
        },
        
        assert: function(condition, message) {
            if (condition) {
                this.log(`✅ PASS: ${message}`);
            } else {
                this.log(`❌ FAIL: ${message}`);
            }
        },
        
        runBasicTests: function() {
            this.log('Running basic tests...');
            this.assert(document.title === 'Testing Pages', 'Page title is correct');
            this.assert(document.querySelector('h1').textContent === 'Testing Pages', 'Main heading is correct');
            this.assert(document.querySelectorAll('nav a').length === 2, 'Navigation has correct number of links');
            this.log('Basic tests completed!');
        }
    };
});