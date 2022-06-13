const dotenv = require('dotenv');
dotenv.config();

const MONGO_CNSTRING = process.env.MONGO_CNSTRING;

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const client = new MongoClient(MONGO_CNSTRING);

// Database Name
const dbName = 'Projeto';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  await collection.insertOne({
    cpf:10737538910,
    nome:'Fernando Amorim'
  });
  // the following code examples can be pasted here...

  return 'done.';
}

const create_user = async ({objeto}) =>{
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  await collection.insertOne(objeto);
  // the following code examples can be pasted here...

  return 'done.';
}