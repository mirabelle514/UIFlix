# UIFlix cPanel Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Build the Project (Already Done!)
```bash
npm run build
```
This creates a `dist/` folder with production-ready files.

### 2. Upload to cPanel
Upload the **contents** of the `dist/` folder to your cPanel's `public_html` directory.

**What to upload:**
- ✅ `index.html`
- ✅ `assets/` folder (contains JS and CSS files)
- ✅ `.htaccess` file

**What NOT to upload:**
- ❌ `src/` folder
- ❌ `node_modules/` folder
- ❌ `package.json`
- ❌ Any other development files

### 3. Set File Permissions

#### File Permissions (644)
Set these files to **644**:
- `index.html`
- All files in `assets/` folder

#### Folder Permissions (755)
Set these folders to **755**:
- `assets/` folder

#### .htaccess Permissions (644)
Set `.htaccess` to **644**

## 📁 Final cPanel Structure

Your `public_html` should look like this:
```
public_html/
├── .htaccess                    (644 permissions)
├── index.html                   (644 permissions)
└── assets/                      (755 permissions)
    ├── index-BgMd6jkZ.js       (644 permissions)
    └── index-DjdN-3dC.css      (644 permissions)
```

## 🔧 Setting Permissions in cPanel

### Method 1: File Manager
1. Open cPanel File Manager
2. Navigate to `public_html`
3. Right-click each file/folder → "Change Permissions"
4. Set permissions as shown above

### Method 2: SSH/Terminal
```bash
# Navigate to your public_html directory
cd public_html

# Set file permissions
chmod 644 index.html
chmod 644 .htaccess
chmod 644 assets/*

# Set folder permissions
chmod 755 assets/
```

## 🌐 What the .htaccess File Does

### React Router Support
- Redirects all requests to `index.html`
- Enables client-side routing to work properly

### Cache Prevention
- Prevents caching of HTML, JS, and CSS files
- Allows caching of images and fonts for performance

### Security Headers
- XSS protection
- Clickjacking prevention
- MIME type sniffing prevention

### Performance
- Gzip compression for text files
- Optimized caching for static assets

## 🐛 Troubleshooting

### Issue: "Page not found" errors
**Solution:** Check that `.htaccess` is uploaded and has 644 permissions

### Issue: CSS/JS not loading
**Solution:** Verify `assets/` folder exists and has 755 permissions

### Issue: React Router not working
**Solution:** Ensure `.htaccess` is in the root of `public_html`

### Issue: Cache not clearing
**Solution:** Check browser developer tools → Network tab → Disable cache

## 🔍 Testing Your Deployment

1. **Visit your domain** - should load the UIFlix homepage
2. **Test navigation** - click between different pages
3. **Check console** - no JavaScript errors
4. **Test cache clearing** - use the Cache Manager in the app

## 📱 Mobile Testing

- Test on mobile devices
- Verify responsive design works
- Check touch interactions

## 🔒 Security Notes

- `.htaccess` prevents access to sensitive files
- Security headers are automatically applied
- Directory browsing is disabled

## 🚀 Performance Tips

- Images and fonts are cached for 1 year
- CSS and JS are cached for 1 month
- HTML is never cached (always fresh)
- Gzip compression reduces file sizes

## 📞 Need Help?

If you encounter issues:
1. Check cPanel error logs
2. Verify file permissions
3. Test with a simple HTML file first
4. Contact your hosting provider

---

**Your UIFlix website should now be live and working perfectly on cPanel! 🎉**
