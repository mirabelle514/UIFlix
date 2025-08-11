export class CacheManager {
  /**
   * Clear all browser storage and cache
   */
  static clearAllStorage(): void {
    // Clear localStorage
    localStorage.clear();
    
    // Clear sessionStorage
    sessionStorage.clear();
    
    // Clear cookies
    this.clearAllCookies();
    
    // Clear IndexedDB (if any)
    this.clearIndexedDB();
    
    // Clear cache storage (Service Worker caches)
    this.clearCacheStorage();
    
    console.log('All storage and cache cleared successfully');
  }

  /**
   * Clear all cookies
   */
  static clearAllCookies(): void {
    const cookies = document.cookie.split(';');
    
    cookies.forEach(cookie => {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      
      // Delete cookie by setting expiration to past date
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`;
    });
    
    console.log('All cookies cleared');
  }

  /**
   * Clear IndexedDB
   */
  static async clearIndexedDB(): Promise<void> {
    try {
      const databases = await window.indexedDB.databases();
      databases.forEach(db => {
        if (db.name) {
          window.indexedDB.deleteDatabase(db.name);
        }
      });
      console.log('IndexedDB cleared');
    } catch (error) {
      console.log('IndexedDB not available or already cleared');
    }
  }

  /**
   * Clear Cache Storage (Service Worker caches)
   */
  static async clearCacheStorage(): Promise<void> {
    try {
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
        console.log('Cache storage cleared');
      }
    } catch (error) {
      console.log('Cache storage not available or already cleared');
    }
  }

  /**
   * Clear specific localStorage items
   */
  static clearLocalStorageItems(items: string[]): void {
    items.forEach(item => {
      localStorage.removeItem(item);
    });
    console.log(`Cleared localStorage items: ${items.join(', ')}`);
  }

  /**
   * Clear specific sessionStorage items
   */
  static clearSessionStorageItems(items: string[]): void {
    items.forEach(item => {
      sessionStorage.removeItem(item);
    });
    console.log(`Cleared sessionStorage items: ${items.join(', ')}`);
  }

  /**
   * Force browser to reload without cache
   */
  static forceReload(): void {
    // Clear all storage first
    this.clearAllStorage();
    
    // Force reload without cache
    window.location.reload();
  }

  /**
   * Get storage usage information
   */
  static getStorageInfo(): { localStorage: number; sessionStorage: number } {
    let localStorageSize = 0;
    let sessionStorageSize = 0;

    try {
      // Calculate localStorage size
      for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          localStorageSize += localStorage[key].length + key.length;
        }
      }

      // Calculate sessionStorage size
      for (let key in sessionStorage) {
        if (sessionStorage.hasOwnProperty(key)) {
          sessionStorageSize += sessionStorage[key].length + key.length;
        }
      }
    } catch (error) {
      console.error('Error calculating storage size:', error);
    }

    return {
      localStorage: localStorageSize,
      sessionStorage: sessionStorageSize
    };
  }
}
