import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authroutes.js';    
import messageRoutes from './routes/message.routes.js';    
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';

const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());//middleware
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${5000}`);
});