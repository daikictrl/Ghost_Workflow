# Archi_Dev

Archi_Dev is a real-time collaborative system design workspace. Describe a system in plain English, and an AI agent maps that system onto a shared canvas. Collaborators can refine the architecture, and the application generates a technical specification from the resulting graph.

## Features

- **Collaborative Canvas**: Shared real-time canvas using Liveblocks and React Flow. Includes live cursors, presence indicators, and real-time node/edge editing.
- **AI Architecture Generation**: Generate a system design from a natural language prompt. The AI outputs structured canvas nodes and edges directly into the shared room.
- **Starter Templates**: Curated library of prebuilt system design templates (monolith, microservices, event-driven, etc.) that can be imported instantly.
- **Spec Generation**: Convert your current canvas graph into a Markdown technical specification and download it.
- **Project Management**: Authenticated user access, project ownership, and collaborator management.

## Tech Stack

- **Framework**: Next.js 16 (React 19)
- **Database**: Prisma + PostgreSQL (@prisma/adapter-pg)
- **Authentication**: Clerk
- **Real-time Collaboration**: Liveblocks (@liveblocks/react, @liveblocks/react-flow)
- **Visual Node Editor**: React Flow (@xyflow/react)
- **AI Agent & Background Tasks**: Trigger.dev & Google Gemini AI (via Vercel AI SDK)
- **Styling**: Tailwind CSS v4, Shadcn UI, Radix UI
- **Storage**: Vercel Blob

## Prerequisites

- Node.js (v20+ recommended)
- A PostgreSQL database
- [Clerk](https://clerk.dev/) account for Authentication
- [Liveblocks](https://liveblocks.io/) account for real-time collaboration
- [Trigger.dev](https://trigger.dev/) account for background jobs
- [Vercel](https://vercel.com/) account for Blob storage
- Google Gemini API key

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ghost
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following keys:
   ```env
   # Database
   DATABASE_URL="postgres://..."

   # Clerk Auth
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="..."
   CLERK_SECRET_KEY="..."
   NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
   NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

   # Liveblocks
   LIVEBLOCKS_SECRET_KEY="..."

   # Trigger.dev
   TRIGGER_SECRET_KEY="..."

   # Google Gemini
   GOOGLE_GENERATIVE_AI_API_KEY="..."

   # Vercel Blob
   BLOB_READ_WRITE_TOKEN="..."
   ```

4. **Database Setup**
   Run the Prisma migrations to set up your database schema:
   ```bash
   npx prisma migrate dev
   ```

5. **Start the Development Server**
   You need to run both the Next.js development server and the Trigger.dev dev server.
   
   In one terminal:
   ```bash
   npm run dev
   ```
   
   In another terminal:
   ```bash
   npx trigger.dev@latest dev
   ```

6. **Open the Application**
   Visit `http://localhost:3000` in your browser.

## Project Structure

- `/app`: Next.js App Router pages and API routes
- `/components`: Reusable React components (UI, Editor, Auth)
- `/context`: Documentation and project specifications
- `/hooks`: Custom React hooks (Liveblocks, Autosave, etc.)
- `/trigger`: Trigger.dev background tasks and AI agent logic
- `/prisma`: Database schema and migrations
- `/public`: Static assets

## License

This project is licensed under the MIT License.
