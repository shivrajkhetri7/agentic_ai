import OpenAI from 'openai';
import readlineSync from 'readline-sync';
import dotenv from 'dotenv';
dotenv.config();

import { dbConnection }  from "./config/dbConfig.js";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
async function main() {

    // const DB connection
    const db = await dbConnection();
    const models = await client.models.list();
    console.log('Available Models:', models.data.map(model => model.id));

    const systemPrompt = await readlineSync.question('>>')

    const chatCompletion = await client.chat.completions.create({
        messages: systemPrompt,
        model: 'gpt-4o-mini-2024-07-18',
    });

    return chatCompletion;
}

main()