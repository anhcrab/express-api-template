import app from '../src/app.js';
import supertest from 'supertest';
import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

export const { expect } = chai;
export const server = supertest.agent(app);
export const BASE_URL = '/api';

