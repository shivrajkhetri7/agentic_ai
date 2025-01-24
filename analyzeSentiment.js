import { HfInference } from '@huggingface/inference';
import gplay from 'google-play-scraper';
import readlineSync from 'readline-sync';
import dotenv from 'dotenv';
import { dbConnection } from "./config/dbConfig.js";
import { Review } from './Schemas/reviewSchema.js';

dotenv.config();

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

const AppList = ['com.esense.topschool.student', 'com.hurix.navneet.cloudreader','com.hurix.navneet.cloudreader']

async function analyzeSentiment(text) {
    const response = await hf.textClassification({
        model: 'distilbert-base-uncased-finetuned-sst-2-english',
        // model:' tabularisai/multilingual-sentiment-analysis',
        inputs: text,
    });

    return response;
}

async function fetchAndAnalyzeReviews() {
    try {
        // Database connection done
        const db = await dbConnection();
        console.log('Enter Enter Your Application Id:');
        const systemPrompt = readlineSync.question('>> ');

        if (!AppList.includes(systemPrompt)) {
            throw new Error("Invalid App id")
        } else {
            const reviews = await gplay.reviews({
                appId: systemPrompt,
                sort: gplay.sort.NEWEST,
                num: 100,
            });

            console.log(JSON.stringify(reviews.data))
            console.log(`Fetched ${reviews.data.length} reviews. Analyzing sentiment...`);

            for (const review of reviews.data) {
                const sentiment = await analyzeSentiment(review.text);

                console.log('\nReview:', review.text);
                console.log('Sentiment Analysis:', sentiment);
                let userSentiment = '';
                (sentiment[0]?.score > 0.5) ? userSentiment = sentiment[0]?.label : userSentiment = sentiment[0]?.label
                await Review.findOneAndUpdate(
                    { reviewId: review.id },
                    {
                      reviewId: review.id,
                      appId: systemPrompt,
                      userName: review.userName,
                      userImage: review.userImage,
                      date: review.date,
                      score: review.score,
                      scoreText: review.scoreText,
                      url: review.url,
                      title: review.title,
                      text: review.text,
                      replyDate: review.replyDate,
                      replyText: review.replyText,
                      version: review.version,
                      thumbsUp: review.thumbsUp,
                      criterias: review.criterias,
                      sentiment: userSentiment,
                    },
                    { upsert: true, new: true }
                  );
                  console.log(`Review with ID ${review.id} processed and saved to the database.`);
            }
        }

    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchAndAnalyzeReviews();
