import { error } from 'console';
import mongoose from 'mongoose';

const MongoDB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null};
export const connectToDatabse = async () => {
    if (cached.conn)  return cached.connect;

    if(!MongoDB_URI) throw Error('MONGODB_URI is missing');

    cached.promise=cached.promise || mongoose.connect(MongoDB_URI,{
        dbName:'evently',
        bufferCommands:false,
    })
    cached.conn = await cached.promise;

    return cached.conn;
}