# AgenticAI

This repository contains an implementation of **AgenticAI**, an AI-powered system designed to perform sentiment analysis on app reviews from platforms like the Google Play Store. The AI agent utilizes state-of-the-art models like Hugging Face, OpenAI, and other custom models for improved analysis.

## Features

- **Sentiment Analysis**: Classify reviews as positive, negative, or neutral based on the text and emojis.
- **Emoji-Aware Analysis**: Preprocesses emoji symbols to better understand their emotional context.
- **Integrates Hugging Face & OpenAI**: Leverages popular AI platforms for advanced natural language processing.
- **Customizable**: Easily integrate new models or preprocessors for specific use cases.

## Prerequisites

Before running the project, ensure you have the following:

- **Node Js 18 >**: The project is built using JS.
- **LangFlow**: Used to create AI agents using a flow-based programming approach.
- **Hugging Face API Key**: To access pre-trained models from Hugging Face.
- **OpenAI API Key**: For advanced sentiment interpretation and analysis.
- **MongoDB (optional)**: For storing results.
- **Google Play Scraper**: Used for fetching app reviews from Google Play Store.

## Setup

### 1. Clone the Repository
```bash
git clone https://github.com/shivrajkhetri7/agenticai.git
cd AgenticAI
```

### 2. Install Dependencies
Create a virtual environment and install the required libraries.

```bash
npm install
```

### 3. API Keys
Ensure that you have **Hugging Face** and **OpenAI** API keys.

- For Hugging Face: [Create an account on Hugging Face](https://huggingface.co) and get your API key.
- For OpenAI: [Create an account on OpenAI](https://openai.com) and get your API key.

### 4. Configuration
Update the `env` file with your API keys and other configurations:

```python
HUGGINGFACE_API_KEY = "your-huggingface-api-key"
OPENAI_API_KEY = "your-openai-api-key"
MONGO_URI = "mongodb://localhost:27017/"
```

### 5. Running the Application
Start the agent using LangFlow or directly via scripts.

```bash
node analyzeSentiment.js

Enter Enter Your Application Id:
```


## Usage

### 1. Input Data
You can input app details (e.g., app ID) to fetch reviews, or use a file containing the raw reviews.

### 2. Review Processing
The agent processes reviews by:

- Scraping the reviews from Google Play Store using the app ID.
- Preprocessing the reviews (emoji to text conversion, cleaning).
- Performing sentiment analysis using Hugging Face, OpenAI, and custom models.
- Storing the sentiment results in MongoDB.

### 3. Output
The agent returns sentiment analysis for each review. The output includes:
- Sentiment (Positive/Negative/Neutral)
- Confidence scores
- Emoji-based sentiment scores (if applicable)

### 4. Example Output

```json
{
  "review": "😍😇😇🙏🙏❤️",
  "sentiment": "Positive",
  "score": 0.9,
  "emoji_sentiment": "Very Positive"
}
```

## Customization

You can easily add new models or alter the flow using LangFlow's interface. Some potential customizations include:
- **Model Selection**: Switch out Hugging Face and OpenAI models for custom-trained models.
- **Text Preprocessing**: Adjust the preprocessing pipeline to remove specific words, symbols, etc.
- **Emoji Handling**: Fine-tune the emoji-to-text conversion for better accuracy.

## Contributing

We welcome contributions to enhance the features of **AgenticAI**. Here’s how you can help:


### **Explanation of Sections**:

- **Project Overview**: Describes the purpose of the repository and the core features.
- **Prerequisites**: Lists software and tools required to run the project.
- **Setup**: Provides step-by-step instructions on how to set up the project locally.
- **Usage**: Explains how to run the project and how to use the input data (app ID or raw reviews) for sentiment analysis.
- **Customization**: Offers insights into how users can tweak the agent to better suit their needs.
- **Contributing**: Provides guidelines on how others can contribute to the project.
- **License**: Specifies the project's licensing (MIT in this case).

This `README.md` should guide you and other developers through the process of setting up and using the **AgenticAI** repository. Let me know if you need any more details added!
