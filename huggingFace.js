import { HfInference } from '@huggingface/inference';
import readlineSync from 'readline-sync';
import dotenv from 'dotenv';
dotenv.config();


const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

async function main() {
    console.log('Enter your prompt:');
    const systemPrompt = readlineSync.question('>> ');

    const response = await hf.textGeneration({
        model: 'bigscience/bloom',
        //model:' tabularisai/multilingual-sentiment-analysis',
        inputs: systemPrompt,
        parameters: { max_length: 200 },
    });

    console.log('\nGenerated Response:');
    console.log(response.generated_text);
}

main().catch((err) => console.error('Error:', err));
