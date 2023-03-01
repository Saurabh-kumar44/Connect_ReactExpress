import express from 'express'
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

d