// mongodb.js

import { MongoClient } from 'mongodb'

const URI = process.env.MONGODB_URI
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client = new MongoClient(URI , options)
let clientPromise

if (!URI) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(URI, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(URI, options)
  clientPromise = client.connect()
}

export default clientPromise
