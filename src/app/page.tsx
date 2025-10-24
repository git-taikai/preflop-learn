'use client';

import { useState } from 'react';
import HandGrid from '@/components/HandGrid';
import Quiz from '@/components/Quiz';

export default function Home() {
  const [mode, setMode] = useState<'quiz' | 'grid'>('quiz');

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
          ポーカー プリフロップレンジ 暗記サイト
        </h1>

        {/* モード切替タブ */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-300 bg-white p-1 shadow-md">
            <button
              onClick={() => setMode('quiz')}
              className={`px-6 py-3 rounded-md font-bold transition-all ${
                mode === 'quiz'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              クイズモード
            </button>
            <button
              onClick={() => setMode('grid')}
              className={`px-6 py-3 rounded-md font-bold transition-all ${
                mode === 'grid'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              レンジ表
            </button>
          </div>
        </div>

        {/* コンテンツ */}
        <div className="transition-all duration-300">
          {mode === 'quiz' ? <Quiz /> : <HandGrid />}
        </div>
      </div>
    </main>
  );
}
