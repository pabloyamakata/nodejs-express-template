import * as dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3001;
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_NAME = process.env.DB_NAME || 'nodejs_express_template';
export const DB_DIALECT = process.env.DB_DIALECT || 'mysql';
