import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://donghyk2:dong1020@cluster0.e9bbshg.mongodb.net/noticedb?retryWrites=true&w=majority";
const options = {};
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
