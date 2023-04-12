import supertest from 'supertest';
import jest from 'jest';
import app from '../src/app.js';

export const server = supertest(app);
export const BASE_URL = '/api';
