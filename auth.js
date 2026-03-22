// auth.js - Client-side authentication with localStorage mock

let currentUser = null;

// Simple hash for passwords (not secure for production)
function simpleHash(str) {
    return btoa(str).slice(0, 20);
}

// Get/set users from localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// ===== VALIDATION FUNCTIONS =====

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Username validation: 3-20 chars, alphanumeric and underscore only
function validateUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    if (!usernameRegex.test(username)) {
        if (username.length < 3) return { valid: false, msg: 'Username must be at least 3 characters' };
        if (username.length > 20) return { valid: false, msg: 'Username must be at most 20 characters' };
        return { valid: false, msg: 'Username can only contain letters, numbers, and underscores' };
    }
    return { valid: true };
}

// Password strength validation
function validatePassword(password) {
    if (password.length < 8) return { valid: false, msg: 'Password must be at least 8 characters' };
    if (!/[a-z]/.test(password)) return { valid: false, msg: 'Password must contain lowercase letters' };
    if (!/[A-Z]/.test(password)) return { valid: false, msg: 'Password must contain uppercase letters' };
    if (!/[0-9]/.test(password)) return { valid: false, msg: 'Password must contain numbers' };
    return { valid: true };
}

// Signup
function signup(username, email, password) {
    // Empty field validation
    if (!username || !email || !password) {
        return { success: false, msg: 'All fields are required' };
    }

    // Username validation
    const usernameValidation = validateUsername(username);
    if (!usernameValidation.valid) {
        return { success: false, msg: usernameValidation.msg };
    }

    // Email validation
    if (!validateEmail(email)) {
        return { success: false, msg: 'Please enter a valid email address' };
    }

    // Password validation
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
        return { success: false, msg: passwordValidation.msg };
    }

    // Check if username or email exists
    const users = getUsers();
    if (users.find(u => u.username === username)) {
        return { success: false, msg: 'Username already taken' };
    }
    if (users.find(u => u.email === email)) {
        return { success: false, msg: 'Email already registered' };
    }

    const user = {
        id: Date.now(),
        username,
        email,
        password: simpleHash(password),
        joined: new Date().toDateString(),
        progress: {}
    };

    users.push(user);
    saveUsers(users);
    return { success: true, msg: 'Signup successful! Please login.' };
}

// Login
function login(username, password) {
    // Empty field validation
    if (!username || !password) {
        return { success: false, msg: 'Username and password are required' };
    }

    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === simpleHash(password));

    if (!user) {
        return { success: false, msg: 'Invalid username or password' };
    }

    currentUser = user.username;
    localStorage.setItem('currentUser', currentUser);
    return { success: true, msg: `Welcome ${user.username}!` };
}

// Logout
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
}

// Check login status
function isLoggedIn() {
    if (currentUser) return true;
    currentUser = localStorage.getItem('currentUser');
    return !!currentUser;
}

// Get current user progress prefix
function getProgressPrefix() {
    if (!isLoggedIn()) return '';
    return `user_${currentUser}_`;
}

// Get user data
function getCurrentUserData() {
    if (!isLoggedIn()) return null;
    const users = getUsers();
    return users.find(u => u.username === currentUser);
}

// Init auth on load
document.addEventListener('DOMContentLoaded', function () {
    isLoggedIn(); // Set currentUser
});

// User-specific pattern key
function getPatternKey(pattern) {
    return getProgressPrefix() + pattern;
}

