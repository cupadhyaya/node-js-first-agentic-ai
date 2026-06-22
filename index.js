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