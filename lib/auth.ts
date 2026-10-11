import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const BETTER_AUTH_SECRET = process.env.BETTER_AUTH_SECRET;
const BETTER_AUTH_URL =
  process.env.BETTER_AUTH_URL || 'http://localhost:3000';

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is missing');
}

if (!BETTER_AUTH_SECRET) {
  throw new Error('BETTER_AUTH_SECRET is missing');
}

const globalForMongo = globalThis as typeof globalThis & {
  _mongoClient?: MongoClient;
};

const client =
  globalForMongo._mongoClient ?? new MongoClient(MONGODB_URI);

if (process.env.NODE_ENV !== 'production') {
  globalForMongo._mongoClient = client;
}

const db = client.db('bajar-dor');

export const auth = betterAuth({
  secret: BETTER_AUTH_SECRET,
  baseURL: BETTER_AUTH_URL,
  database: mongodbAdapter(db, { client }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});
