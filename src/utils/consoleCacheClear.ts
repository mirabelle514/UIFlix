// Console Cache Clear Utility for UIFlix
// Run this in your browser console to clear all cache and storage

(function() {
  console.log('🧹 UIFlix Cache Clear Utility Starting...');
  
  // Clear localStorage
  try {
    localStorage.clear();
    console.log('✅ localStorage cleared');
  } catch (e) {
    console.log('❌ Error clearing localStorage:', e);
  }
  
  // Clear sessionStorage
  try {
    sessionStorage.clear();
    console.log('✅ sessionStorage cleared');
  } catch (e) {
    console.log('❌ Error clearing sessionStorage:', e);
  }
  
  // Clear cookies
  try {
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    });
    console.log('✅ Cookies cleared');
  } catch (e) {
    console.log('❌ Error clearing cookies:', e);
  }
  
  // Clear IndexedDB
  try {
    if ('indexedDB' in window) {
      indexedDB.databases().then(databases => {
        databases.forEach(db => {
          if (db.name) {
            indexedDB.deleteDatabase(db.name);
          }
        });
        console.log('✅ IndexedDB cleared');
      });
    }
  } catch (e) {
    console.log('❌ Error clearing IndexedDB:', e);
  }
  
  // Clear cache storage
  try {
    if ('caches' in window) {
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      }).then(() => {
        console.log('✅ Cache storage cleared');
      });
    }
  } catch (e) {
    console.log('❌ Error clearing cache storage:', e);
  }
  
  // Force reload
  console.log('🔄 Reloading page in 3 seconds...');
  setTimeout(() => {
    window.location.reload();
  }, 3000);
  
  console.log('🎉 Cache clear complete! Page will reload shortly.');
})();

// Alternative: Quick clear function
window.clearUIFlixCache = function() {
  localStorage.clear();
  sessionStorage.clear();
  document.cookie.split(';').forEach(cookie => {
    const name = cookie.split('=')[0].trim();
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  });
  window.location.reload();
};

console.log('💡 Quick clear available: run clearUIFlixCache()');
