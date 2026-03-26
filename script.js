// script.js
(function() {
    // Module to manage Local Storage
    const StorageModule = (function() {
        const setItem = (key, value) => {
            localStorage.setItem(key, JSON.stringify(value));
        };
        const getItem = (key) => {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        };
        const removeItem = (key) => {
            localStorage.removeItem(key);
        };

        return {
            setItem,
            getItem,
            removeItem
        };
    })();

    // Module for input validation
    const ValidationModule = (function() {
        const isValidInput = (input) => {
            return input && input.trim() !== '';
        };

        return { isValidInput };
    })();

    // Main application logic
    const App = (function() {
        // Example input field
        const inputField = document.querySelector('#inputField');
        const saveButton = document.querySelector('#saveButton');

        const saveData = () => {
            const inputValue = inputField.value;
            if (ValidationModule.isValidInput(inputValue)) {
                StorageModule.setItem('userInput', inputValue);
                alert('Saved: ' + inputValue);
            } else {
                alert('Invalid input! Please enter a valid value.');
            }
        };

        const init = () => {
            saveButton.addEventListener('click', saveData);
            // Load existing data
            const savedInput = StorageModule.getItem('userInput');
            if (savedInput) {
                inputField.value = savedInput;
            }
        };

        return { init };
    })();

    App.init();
})();