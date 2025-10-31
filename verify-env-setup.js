#!/usr/bin/env node

/**
 * Environment Setup Verification Script
 * Run this to verify your .env files are correctly configured
 */

const fs = require('fs');
const path = require('path');

console.log('\n🔍 Verifying Environment Setup...\n');

const directories = [
  { dir: '3', envPath: '3/.env' },
  { dir: '3/gaming_webapp', envPath: '3/gaming_webapp/.env' },
  { dir: 'revise/data_base', envPath: 'revise/data_base/.env' }
];

let allGood = true;

directories.forEach(({ dir, envPath }) => {
  const fullPath = path.join(__dirname, envPath);
  const examplePath = fullPath + '.example';
  
  console.log(`📁 Checking ${dir}/`);
  
  // Check if .env.example exists
  if (!fs.existsSync(examplePath)) {
    console.log(`  ❌ Missing ${envPath}.example`);
    allGood = false;
  } else {
    console.log(`  ✅ ${envPath}.example found`);
  }
  
  // Check if .env exists
  if (!fs.existsSync(fullPath)) {
    console.log(`  ⚠️  ${envPath} not found - copy from .env.example`);
    allGood = false;
  } else {
    console.log(`  ✅ ${envPath} found`);
    
    // Check if .env has MONGODB_URI
    const envContent = fs.readFileSync(fullPath, 'utf8');
    if (envContent.includes('MONGODB_URI=')) {
      // Check if it's not still the example value using regex
      const placeholderPattern = /username.*password.*@.*cluster/i;
      if (placeholderPattern.test(envContent)) {
        console.log(`  ⚠️  ${envPath} still contains example values - update with real credentials`);
        allGood = false;
      } else if (envContent.includes('TXTwmq7DvDnfPnIR')) {
        console.log(`  ❌ ${envPath} contains EXPOSED credentials - replace immediately!`);
        allGood = false;
      } else {
        console.log(`  ✅ MONGODB_URI is configured`);
      }
    } else {
      console.log(`  ⚠️  ${envPath} missing MONGODB_URI`);
      allGood = false;
    }
  }
  console.log();
});

// Check .gitignore
console.log('📝 Checking .gitignore');
const gitignorePath = path.join(__dirname, '.gitignore');
if (!fs.existsSync(gitignorePath)) {
  console.log('  ❌ .gitignore not found');
  allGood = false;
} else {
  const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
  if (gitignoreContent.includes('.env')) {
    console.log('  ✅ .env files are ignored');
  } else {
    console.log('  ⚠️  .gitignore missing .env pattern');
    allGood = false;
  }
}
console.log();

// Final result
if (allGood) {
  console.log('✅ All checks passed! Your environment is properly configured.\n');
  process.exit(0);
} else {
  console.log('⚠️  Some issues found. Please review the messages above.\n');
  console.log('📖 See SECURITY_SETUP.md for detailed setup instructions.\n');
  process.exit(1);
}
