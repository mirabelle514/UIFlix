#!/bin/bash

# UIFlix cPanel Deployment Script
# This script helps prepare your project for cPanel deployment

echo "🚀 UIFlix cPanel Deployment Script"
echo "=================================="

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ dist folder not found. Building project first..."
    npm run build
    if [ $? -ne 0 ]; then
        echo "❌ Build failed. Please fix errors and try again."
        exit 1
    fi
fi

echo "✅ Build completed successfully!"

# Create deployment package
echo "📦 Creating deployment package..."

# Create a temporary deployment folder
rm -rf deploy-temp
mkdir deploy-temp

# Copy built files
cp -r dist/* deploy-temp/
cp .htaccess deploy-temp/

echo "✅ Deployment package created in 'deploy-temp' folder"
echo ""
echo "📋 Next Steps:"
echo "1. Upload the contents of 'deploy-temp' folder to your cPanel public_html"
echo "2. Set file permissions:"
echo "   - Files: 644"
echo "   - Folders: 755"
echo "3. Test your website"
echo ""
echo "📁 Files to upload:"
ls -la deploy-temp/
echo ""
echo "🎯 Your UIFlix website is ready for cPanel deployment!"
