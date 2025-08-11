import React, { useState, useEffect } from 'react';
import { Trash2, RefreshCw, Info, AlertTriangle } from 'lucide-react';
import { CacheManager } from '../utils/cacheUtils';

interface CacheManagerProps {
  onNavigate: (path: string) => void;
}

const CacheManagerComponent: React.FC<CacheManagerProps> = ({ onNavigate }) => {
  const [storageInfo, setStorageInfo] = useState({ localStorage: 0, sessionStorage: 0 });
  const [isClearing, setIsClearing] = useState(false);
  const [lastCleared, setLastCleared] = useState<Date | null>(null);

  useEffect(() => {
    updateStorageInfo();
  }, []);

  const updateStorageInfo = () => {
    setStorageInfo(CacheManager.getStorageInfo());
  };

  const handleClearAllCache = async () => {
    if (window.confirm('Are you sure you want to clear all cache and storage? This will log you out and remove all saved data.')) {
      setIsClearing(true);
      try {
        await CacheManager.clearAllStorage();
        setLastCleared(new Date());
        updateStorageInfo();
        
        // Show success message
        alert('All cache and storage cleared successfully! The page will now reload.');
        
        // Force reload after a short delay
        setTimeout(() => {
          CacheManager.forceReload();
        }, 1000);
      } catch (error) {
        console.error('Error clearing cache:', error);
        alert('Error clearing cache. Please try again.');
      } finally {
        setIsClearing(false);
      }
    }
  };

  const handleClearSpecificStorage = (type: 'localStorage' | 'sessionStorage') => {
    if (window.confirm(`Are you sure you want to clear all ${type}?`)) {
      if (type === 'localStorage') {
        localStorage.clear();
      } else {
        sessionStorage.clear();
      }
      updateStorageInfo();
      alert(`${type} cleared successfully!`);
    }
  };

  const handleClearCookies = () => {
    if (window.confirm('Are you sure you want to clear all cookies? This will log you out of any services.')) {
      CacheManager.clearAllCookies();
      alert('All cookies cleared successfully!');
    }
  };

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Cache & Storage Manager</h1>
          <p className="text-gray-300 text-lg">
            Manage and clear all cached data, cookies, and browser storage for UIFlix
          </p>
        </div>

        {/* Storage Information */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Info className="mr-2 h-6 w-6 text-blue-400" />
            Current Storage Usage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-300 mb-2">Local Storage</h3>
              <p className="text-2xl font-bold text-blue-400">
                {formatBytes(storageInfo.localStorage)}
              </p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-300 mb-2">Session Storage</h3>
              <p className="text-2xl font-bold text-green-400">
                {formatBytes(storageInfo.sessionStorage)}
              </p>
            </div>
          </div>
          <button
            onClick={updateStorageInfo}
            className="mt-4 px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors"
          >
            Refresh Storage Info
          </button>
        </div>

        {/* Cache Clearing Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Clear All Cache */}
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Trash2 className="mr-2 h-5 w-5 text-red-400" />
              Clear All Cache & Storage
            </h3>
            <p className="text-gray-300 mb-4">
              This will clear all localStorage, sessionStorage, cookies, IndexedDB, and cache storage. 
              You will be logged out and the page will reload.
            </p>
            <button
              onClick={handleClearAllCache}
              disabled={isClearing}
              className="w-full px-4 py-3 bg-red-600 hover:bg-red-500 disabled:bg-red-800 disabled:cursor-not-allowed rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              {isClearing ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Clearing...
                </>
              ) : (
                <>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear Everything
                </>
              )}
            </button>
          </div>

          {/* Individual Storage Options */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Selective Clearing</h3>
            <div className="space-y-3">
              <button
                onClick={() => handleClearSpecificStorage('localStorage')}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                Clear Local Storage
              </button>
              <button
                onClick={() => handleClearSpecificStorage('sessionStorage')}
                className="w-full px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg transition-colors"
              >
                Clear Session Storage
              </button>
              <button
                onClick={handleClearCookies}
                className="w-full px-4 py-2 bg-yellow-600 hover:bg-yellow-500 rounded-lg transition-colors"
              >
                Clear All Cookies
              </button>
            </div>
          </div>
        </div>

        {/* Last Cleared Info */}
        {lastCleared && (
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-6">
            <p className="text-green-400 flex items-center">
              <Info className="mr-2 h-4 w-4" />
              Last cleared: {lastCleared.toLocaleString()}
            </p>
          </div>
        )}

        {/* Warning */}
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
          <div className="flex items-start">
            <AlertTriangle className="mr-3 h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-yellow-400 mb-1">Important Notes</h3>
              <ul className="text-yellow-200 text-sm space-y-1">
                <li>• Clearing cache will log you out of all services</li>
                <li>• All saved preferences and learning progress will be lost</li>
                <li>• The page will automatically reload after clearing</li>
                <li>• This action cannot be undone</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('/')}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors mr-4"
          >
            Back to Home
          </button>
          <button
            onClick={() => onNavigate('/profile')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            Go to Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default CacheManagerComponent;
