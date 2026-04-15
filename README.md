
# 🔍 Hallucinations Detector
### Powered by [Exa.ai](https://exa.ai) - The Fastest and Most Accurate Web Search API for AI

![Screenshot](./public/opengraph-image.jpg)

<br>

## 🎯 What is Hallucinations Detector?

Hallucinations Detector is a free and open-source tool that helps you verify the accuracy of your content instantly. Think of it as Grammarly, but for factual accuracy instead of grammar. It analyzes your content, identifies potential inaccuracies, and suggests corrections backed by reliable web sources.

<br>

## ✨ Key Features

- Real-time fact checking of your LLM generated content
- Source-backed verification
- Detailed explanations for identified inaccuracies
- Suggestion-based corrections

<br>

## 🛠️ How It Works

1. **Claim Extraction**: When you input your content, the tool uses an LLM (Claude 3.5 Sonnet) to break down your text into individual claims.

2. **Source Verification**: Each claim is checked using Exa’s search tool to find reliable sources online that either support or refute it.

3. **Accuracy Analysis**: The claims and their corresponding sources are analyzed by our LLM to determine their accuracy.

4. **Results Display**: Finally, we show the results in a simple, clear way, pointing out any mistakes and offering suggestions to fix them.

<br>

## 💻 Tech Stack
- **Search Engine**: [Exa.ai](https://exa.ai) - Advanced web search API for AI applications
- **Frontend**: [Next.js](https://nextjs.org/docs) with App Router, [TailwindCSS](https://tailwindcss.com), TypeScript
- **LLM**: [Anthropic's Claude 3.5 Sonnet](https://www.anthropic.com/claude/sonnet) - but you can use any LLM (ex: gpt, gemini, llama or others)
- **AI Integration**: [Vercel AI SDK](https://sdk.vercel.ai/docs/ai-sdk-core)
- **Hosting**: [Vercel](https://vercel.com/) for hosting and analytics

<br>

## 🚀 Getting Started

### Prerequisites
- Node.js
- API keys for Exa.ai and Anthropic

### Installation

1. Clone the repository
```bash
git clone https://github.com/exa-labs/exa-hallucination-detector.git
cd exa-hallucination-detector
````

2.  Install dependencies
    

```
npm install
# or
yarn install
```

3.  Set up environment variables Create a `.env.local` file in the root directory and add your API keys:
    

```
EXA_API_KEY=your_exa_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
```

4.  Run the development server
    

```
npm run dev
# or
yarn dev
```

5.  Open http://localhost:3000/hallucination-detector in your browser
    
<br>

## 🔑 API Keys

*   Get your Exa API key from [Exa Dashboard](https://dashboard.exa.ai/api-keys)
    
*   Get your Anthropic API key from [Anthropic Documentation](https://docs.anthropic.com/en/api/getting-started#accessing-the-api)
    
<br>

## ⭐ About [Exa.ai](http://Exa.ai)

This project is powered by [Exa.ai](https://exa.ai), a cutting-edge search engine designed specifically for AI applications. Exa provides:

*   Advanced semantic and keyword-based search capabilities
    
*   Instant retrieval of clean web content
    
*   Customizable search parameters
    
*   Similarity search using URLs or text
    
*   Superior search capabilities compared to traditional search APIs
    

[Try Exa search](https://exa.ai/search)

<br>

* * *


Built with ❤️ by team Exa
