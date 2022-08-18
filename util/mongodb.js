import mongoose from "mongoose";

// Make sure to load the connection string from an environment variable
// const MONGODB_URI =
// "mongodb+srv://dotcode:bQr1Anhs1BTSp0Nt@cluster0.imiztnw.mongodb.net/?retryWrites=true&w=majority";
const MONGODB_URI = "mongodb://127.0.0.1:27017/";
const MONGODB_DB = "Dotcode";

mongoose.connect(
  MONGODB_URI + MONGODB_DB,
  () => {
    console.log("Connected to MongoDB");
  },
  (e) => {
    console.error("Failed to connect to MongoDB  ", e);
  }
);

// let cached = global.mongo;

// if (!cached) {
//   cached = global.mongo = { conn: null, promise: null };
// }

// export async function connectToDatabase() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       useNewUrlParameter: true,
//       useUnifiedTopology: true,
//     };

//     cached.promise = MongoClient.connect(MONGODB_URI, opts).then((client) => {
//       return {
//         client,
//         db: client.db(MONGODB_DB),
//       };
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }
