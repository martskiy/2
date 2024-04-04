function getUserIdFromUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('user_id');
    if (userId) {
        localStorage.setItem('user_id', userId);
        console.log('User ID stored in localStorage:', userId);
    } else {
        console.log('No user ID found in the URL parameters.');
    }
}
