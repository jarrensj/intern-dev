"use client";

import { useState } from "react";

const commitPlanPrompt = `Write me a COMMIT_PLAN.md where you write each commit with feat: ui: ux: chore:
Make sure that each commit is iterative. Don't make a single commit adding all the dependencies or schemas. Only commit and push the schemas as you go.

An example commit is like: feat: add filter functionality

Bad commit is:
chore: initialize express backend with typescript

- Initialize package.json
- Install dependencies:
  - express, cors, helmet, dotenv
  - typescript, ts-node, @types/express, @types/node
  - @supabase/supabase-js

Why this is bad: This commit installs all dependencies upfront before they're needed. Supabase, express, cors, etc. should each be added in the commit where they're actually used. For example, add @supabase/supabase-js only when you implement the database connection, add cors when you implement CORS handling. This keeps commits focused and makes it clear why each dependency was added.`;

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(commitPlanPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">intern dev</h1>

        <div className="max-w-2xl">
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="commit-plan-prompt" className="block text-sm font-medium">
              Commit Plan Prompt
            </label>
            <button
              onClick={handleCopy}
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <textarea
            id="commit-plan-prompt"
            className="w-full h-64 p-4 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-100 text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            defaultValue={commitPlanPrompt}
            readOnly
          />
        </div>
      </main>
      <footer className="p-4 pb-8 text-center text-sm text-zinc-500 animate-fall">
        <a href="mailto:sanjose.jarren@gmail.com" className="text-blue-500 hover:text-blue-600">
          website and domain is for sale
        </a>
      </footer>
    </div>
  );
}
