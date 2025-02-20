// DOM Elements
const searchInput = document.querySelector('.search-container input');
const searchContainer = document.querySelector('.search-container');
const feedbackButtons = document.querySelectorAll('.feedback-button');
const themeButtons = document.querySelectorAll('.theme-button');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

// Theme Management
function setTheme(themeName) {
    // Implementation would interact with CSS variables or add a class to body
    console.log(`Theme changed to: ${themeName}`);
    
    // Remove active class from all theme buttons
    themeButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to the selected theme button
    const selectedButton = document.querySelector(`.theme-button[data-theme="${themeName}"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
    
    // In a real implementation, you would save the preference to localStorage
    localStorage.setItem('theme-preference', themeName);
}

// Initialize theme from localStorage if available
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme-preference') || 'dark';
    setTheme(savedTheme);
}

// Feedback Handling
function handleFeedback(reaction) {
    // In a real implementation, this would send the feedback to a server
    console.log(`User feedback: ${reaction}`);
    
    // Remove active class from all feedback buttons
    feedbackButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to the clicked button
    const clickedButton = document.querySelector(`.feedback-button[data-reaction="${reaction}"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
    
    // Optionally show a thank you message
    const feedbackTitle = document.querySelector('.feedback-title');
    if (feedbackTitle) {
        feedbackTitle.textContent = 'Thanks for your feedback!';
    }
}

// Navigation Handling
function handleNavigation(linkElement) {
    // Remove active class from all links
    sidebarLinks.forEach(link => link.classList.remove('active'));
    
    // Add active class to clicked link
    linkElement.classList.add('active');
    
    // In a real app, this would handle navigation or content loading
    console.log(`Navigating to: ${linkElement.textContent.trim()}`);
}

// Search Functionality
function handleSearchFocus() {
    searchContainer.style.boxShadow = '0 0 0 2px var(--accent-color)';
}

function handleSearchBlur() {
    searchContainer.style.boxShadow = 'none';
}

function handleKeyboardShortcut(e) {
    // Handle Ctrl+K / Cmd+K for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initializeTheme();
    
    // Add event listeners to theme buttons
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            setTheme(theme);
        });
    });
    
    // Add event listeners to feedback buttons
    feedbackButtons.forEach(button => {
        button.addEventListener('click', function() {
            const reaction = this.getAttribute('data-reaction');
            handleFeedback(reaction);
        });
    });
    
    // Add event listeners to sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            handleNavigation(this);
        });
    });
    
    // Add event listeners for search
    searchInput.addEventListener('focus', handleSearchFocus);
    searchInput.addEventListener('blur', handleSearchBlur);
    
    // Add keyboard shortcut event listener
    document.addEventListener('keydown', handleKeyboardShortcut);
    
    // Add event listeners for code actions
    const codeActions = document.querySelectorAll('.code-actions span');
    codeActions.forEach(action => {
        action.addEventListener('click', function() {
            console.log(`Code action clicked: ${this.textContent}`);
        });
    });
    
    // GitHub card interaction
    const githubCard = document.querySelector('.github-card');
    if (githubCard) {
        githubCard.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('GitHub repository link clicked');
            // In a real implementation, this would open the link
        });
    }
});

// Helper Functions
function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

// Handle responsive behavior
window.addEventListener('resize', debounce(function() {
    // Adjust UI based on window size if needed
    const windowWidth = window.innerWidth;
    
    if (windowWidth < 768) {
        console.log('Mobile layout applied');
    } else if (windowWidth < 960) {
        console.log('Tablet layout applied');
    } else {
        console.log('Desktop layout applied');
    }
}, 250));
