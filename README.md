# Node.js First Agentic AI - Simple Guide for Everyone

This repo demonstrates a very simple Retrieval-Augmented Generation (RAG) application using Node.js and Google Gemini.

## What Is RAG?

RAG means Retrieval-Augmented Generation.

Instead of asking AI to answer from memory, we first provide information (context) and then ask AI to answer using only that information.

Simple meaning:

```text
RAG = Context + AI Model + Answer
```

Example:

```text
User: What is horizontal scaling?

AI:
1. Read the provided context.
2. Find information about horizontal scaling.
3. Generate an answer.
```

## How The Demo Works

The application follows this flow:

```text
Question -> Context -> Gemini -> Answer
```

When you ask a question:

1. `app.js` starts.
2. Environment variables are loaded from `.env`.
3. Google Gemini client is created.
4. Context is provided to Gemini.
5. Gemini generates the answer.
6. The answer is printed on the console.

## Project Structure

```text
node-js-first-agentic-ai/
│
├── app.js
├── .env
├── package.json
└── README.md
```

## Build The App From Scratch

### 1. Create Project

```bash
mkdir node-js-first-agentic-ai
cd node-js-first-agentic-ai
npm init -y
```

### 2. Install Packages

```bash
npm install @google/genai dotenv
```

### 3. Create Environment File

Create `.env`

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Keep your API key private.

### 4. Create app.js

```javascript
const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function ask(question) {

    const context = `
In AWS, vertical scaling means increasing the resources of a single instance,
such as upgrading an EC2 instance from t3.medium to m5.xlarge.

Horizontal scaling means adding multiple instances using an Auto Scaling Group
and distributing traffic through an Application Load Balancer.

Horizontal scaling provides better availability and fault tolerance and is the preferred approach for cloud-native applications.
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
Answer only using the provided context.

Context:
${context}

Question:
${question}
`
    });

    console.log(response.text);
}

ask("What is horizontal scaling?");
```

### 5. Run The Application

```bash
node app.js
```

## Example

Question:

```text
What is horizontal scaling?
```

Output:

```text
Horizontal scaling means adding multiple instances using an Auto Scaling Group and distributing traffic through an Application Load Balancer. It provides better availability and fault tolerance and is preferred for cloud-native applications.
```

## Architecture

```text
                User Question
                       |
                       v
                Context Injection
                       |
                       v
                 Gemini 2.5 Flash
                       |
                       v
                  Generated Answer
```

## Technologies Used

- Node.js
- Google Gemini API
- dotenv

## Concepts Covered

- Generative AI
- Prompt Engineering
- Context Injection
- Retrieval-Augmented Generation (RAG)
- Agentic AI Fundamentals

## Future Improvements

- Read context from text files
- Vector databases
- Embeddings
- Semantic search
- Tool calling
- Memory
- Multi-agent systems
- Web search integration

## Interview Line

> I built a simple Node.js RAG application using Google Gemini. The application injects context into the prompt and generates answers based only on the provided information.
