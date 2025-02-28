import { error } from 'console';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null};
export const connectToDatabse = async () => {
    if (cached.conn)  return cached.connect;

    if(!MONGODB_URI) throw Error('MONGODB_URI is missing');

    cached.promise=cached.promise || mongoose.connect(MONGODB_URI,{
        dbName:'evently',
        bufferCommands:false,
    })
    cached.conn = await cached.promise;

    return cached.conn;
}