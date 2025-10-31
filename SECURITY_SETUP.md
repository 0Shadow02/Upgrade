# Security Setup Guide

## MongoDB Credentials - Environment Variables

This repository has been updated to use environment variables for MongoDB connection strings instead of hardcoded credentials.

## Setup Instructions

### 1. Create .env files

Each project directory has a `.env.example` file. Copy it to `.env` and add your actual credentials:

```bash
# For directory 3/
cp 3/.env.example 3/.env

# For directory 3/gaming_webapp/
cp 3/gaming_webapp/.env.example 3/gaming_webapp/.env

# For directory revise/data_base/
cp revise/data_base/.env.example revise/data_base/.env
```

### 2. Update .env files with your credentials

Edit each `.env` file and replace the placeholder values with your actual MongoDB connection string:

```
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_database
JWT_SECRET=your_secure_jwt_secret
```

### 3. Install dependencies

```bash
# For directory 3/
cd 3/
npm install

# For directory 3/gaming_webapp/
cd 3/gaming_webapp/
npm install

# For directory revise/backend/
cd revise/backend/
npm install
```

### 4. Never commit .env files

The `.gitignore` file has been updated to exclude `.env` files. **Never commit these files to version control.**

## Important Security Notes

⚠️ **CRITICAL**: The previous MongoDB credentials that were exposed in the code should be considered compromised:

1. **Change your MongoDB password immediately** in MongoDB Atlas
2. **Rotate your MongoDB cluster credentials**
3. **Review MongoDB Atlas access logs** for any unauthorized access
4. **Update IP whitelist** if needed to restrict access

## Files Updated

The following files have been updated to use environment variables:

- `/revise/data_base/db.js`
- `/3/Mongoose.js`
- `/3/project.js`
- `/3/revision/mongodb.js`
- `/3/new_database.js`
- `/3/gaming_webapp/db/index.js`

## Affected Databases

The exposed credentials had access to these databases:
- test
- admin
- local
- Todo_app
- User_APP
- project
- New_user
- gaming_webapp

## Best Practices

1. ✅ Always use environment variables for sensitive data
2. ✅ Never commit `.env` files
3. ✅ Use `.env.example` files to document required variables
4. ✅ Rotate credentials regularly
5. ✅ Use different credentials for development and production
6. ✅ Enable IP whitelisting in MongoDB Atlas
7. ✅ Use database-specific users with minimal required permissions

## Support

If you need help setting up environment variables or have questions about security best practices, please refer to:
- [MongoDB Atlas Security](https://www.mongodb.com/docs/atlas/security/)
- [dotenv documentation](https://www.npmjs.com/package/dotenv)
