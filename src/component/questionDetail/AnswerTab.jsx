// questionDetail/AnswerTab.jsx
// Renders the Answer tab: explanation blocks (text, code, tip).

import { Lightbulb } from 'lucide-react';

function TextBlock({ content, dark }) {
  return (
    <p className={`text-sm leading-relaxed ${dark ? 'text-indigo-200' : 'text-gray-700'}`}>
      {content}
    </p>
  );
}

function CodeBlock({ content, dark }) {
  return (
    <div
      className={`rounded-xl overflow-x-auto text-xs sm:text-sm font-mono
        ${dark
          ? 'bg-[#0a0820] border border-indigo-900 text-indigo-200'
          : 'bg-gray-900 border border-gray-800 text-green-300'}`}
    >
      <pre className="p-4 leading-relaxed whitespace-pre overflow-x-auto">
        <code>{content}</code>
      </pre>
    </div>
  );
}

function TipBlock({ content, dark }) {
  return (
    <div
      className={`flex gap-3 p-4 rounded-xl border
        ${dark
          ? 'bg-indigo-950/60 border-indigo-800 text-indigo-300'
          : 'bg-blue-50 border-blue-200 text-blue-800'}`}
    >
      <Lightbulb
        size={16}
        className={`shrink-0 mt-0.5 ${dark ? 'text-yellow-400' : 'text-blue-500'}`}
      />
      <p className="text-sm leading-relaxed">{content}</p>
    </div>
  );
}

export default function AnswerTab({ explanation, dark }) {
  return (
    <div className="flex flex-col gap-4">
      <p className={`text-xs font-bold tracking-widest
        ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>
        EXPLANATION
      </p>
      {explanation.map((block, idx) => {
        if (block.type === 'code') return <CodeBlock key={idx} content={block.content} dark={dark} />;
        if (block.type === 'tip')  return <TipBlock  key={idx} content={block.content} dark={dark} />;
        return <TextBlock key={idx} content={block.content} dark={dark} />;
      })}
    </div>
  );
}
