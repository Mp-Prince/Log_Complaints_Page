# Complaint Log System — Frontend

The frontend provides an interface for creating and reviewing structured customer complaint records. It communicates with the separately hosted backend API for complaint analysis and storage.

## How It Works

1. Enter a complaint description in the chat, or upload a PDF containing the complaint.
2. The frontend sends the text or PDF to the backend for analysis.
3. The returned complaint details appear in the form, where you can review and edit them.
4. Submit the form to send the complaint to the backend for storage.

The application also includes navigation for logging complaints, viewing complaint status, and a profile page.

## Frontend Setup

### Requirements

- Node.js and npm
- Access to a running backend API

### Install and run

From this directory (`frontend`), install the dependencies:

```bash
npm install
```

Create a `.env.local` file in this directory and set the base URL of the backend API:

```env
REACT_APP_Server_API_URL=http://127.0.0.1:8000
```

Replace the example URL with the address of your running backend. Then start the frontend:

```bash
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000). Restart the development server after changing `.env.local`.

## Available Scripts

Run these commands from the `frontend` directory:

| Command | Description |
| --- | --- |
| `npm start` | Start the development server. |
| `npm test` | Run the test suite. |
| `npm run build` | Create an optimized production build in `build/`. |
