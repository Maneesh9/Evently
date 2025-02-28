import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null};
export const connectToDatabse = async () => {
    if (cached.conn)  return cached.conn;

    if(!MONGODB_URI) throw Error('MONGODB_URI is missing');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI,{
        dbName:'event',
        bufferCommands:false,
    });
    cached.conn = await cached.promise;

    return cached.conn;
}
// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI!;
// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable');
// }

// let cached = (global as any).mongoose || { conn: null, promise: null };

// export async function connectToDatabse() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }).then((mongoose) => mongoose.connection);
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }
