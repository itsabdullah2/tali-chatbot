# Tali - AI Chatbot

A modern, responsive chatbot application built with React and Vite, bowered by OpenRouter AI API (Meta LLaMA 3 8B).

## Features

- Real-time chat interface with AI assistant
- Clean and intuitive UI with Tailwind CSS
- Responsive design for all devices
- Fast and optimized with Vite
- Typing indicators for better UX
- Markdown support for rich message formatting
- Automatic timestamp with local timezone

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **AI Model:** Meta LLaMA 3 8B (Via OpenRouter)
- **Icons:** React Icons
- **Markdown:** React Markdown

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn
- OpenRouter API key

## Installation

1. Clone the repository:

```bash
git clone <https://github.com/itsabdullah2/tali-chatbot.git>
cd chatbot-practicing
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory

```env
VITE_OPENROUTER_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost5173`

## Project Structure

```
src/
├── components/          # React components
│   ├── Chatbot.jsx     # Main chatbot container
│   ├── ChatbotHeader.jsx
│   ├── ChatbotBody.jsx
│   ├── ChatbotFooter.jsx
│   ├── MessagesByRole.jsx
│   └── ReplyingIndicator.jsx
├── context/            # React Context for state management
│   └── AppContext.jsx
├── hooks/              # Custom React hooks
│   └── useDebounce.jsx
├── services/           # API services
│   └── prompt.js
├── App.jsx            # Root component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Available Scripts

`npm run dev` - Start development server
`npm run build` - Build for production
`npm run preview` - Prev production build
`npm run lint` - Run ESLint

## Key Components

### AppContext

Global state management using React Context API. Manages:

- Message history
- Loading states
- User input handling

### ChatbotFooter

Handles user input with:

- Debounced input for optimized API calls
- Auto-focus after messages
- Submit validation

### MessagesByRole

Renders messages with:

- Role-based styling (user vs assistant)
- Markdown formatting support
- Timestamp display

### API Integration

The app uses OpenRouter API to communicate with Meta LLaMA 3 8B model. See [`postPrompt`](src/services/prompt.js) in [src/services/prompt.js](src/services/prompt.js) for implementation details.

## Customization

### Styling

The project uses Tailwind CSS with custom utilities defined in [src/index.css](src/index.css):

- `.section-container` - Responsive container with max-width
- `.flex-center` - Centered flex container

### AI Model

To change the AI model, modify the `model` parameter in [`postPrompt`](src/services/prompt.js):

```js
model: "meta-llama/llama-3-8b-instruct"; // Change this
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m "Add some AmazingFeature"`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is open source

## Acknowledgment

- [OpenRouter] (https://openrouter.ai/) for AI API access
- [Meta LLaMA] (https://ai.meta.com/llama/) for the language model
- [Vite] (https://vite.js.dev/) for blazing fast development
- [Tailwind CSS] (https://tailwindcss.com/) for styling

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
