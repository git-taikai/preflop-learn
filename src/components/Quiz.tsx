'use client';

import React, { useState, useEffect } from 'react';
import rangeData from '@/data/ranges.json';
import { NewRangeData } from '@/lib/types';
import { COLOR_OPTIONS } from '@/lib/constants';
import { buildHandColorMap, getAllHands } from '@/lib/rangeUtils';
import ColorButton from './ColorButton';

const data = rangeData as NewRangeData;
const handColorMap = buildHandColorMap(data);

export default function Quiz() {
  const [currentHand, setCurrentHand] = useState<string>('');
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const allHands = getAllHands(data);

  const getRandomHand = () => {
    const randomIndex = Math.floor(Math.random() * allHands.length);
    return allHands[randomIndex];
  };

  useEffect(() => {
    setCurrentHand(getRandomHand());
  }, []);

  const handleColorSelect = (colorId: string) => {
    if (feedback !== null) return; // 既に回答済み

    setSelectedColor(colorId);
    const correctColor = handColorMap.get(currentHand)?.color;
    const isCorrect = colorId === correctColor;

    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setShowAnswer(true);
    setScore({
      correct: score.correct + (isCorrect ? 1 : 0),
      total: score.total + 1,
    });
  };

  const handleNext = () => {
    setCurrentHand(getRandomHand());
    setFeedback(null);
    setSelectedColor(null);
    setShowAnswer(false);
  };

  const handleReset = () => {
    setScore({ correct: 0, total: 0 });
    setCurrentHand(getRandomHand());
    setFeedback(null);
    setSelectedColor(null);
    setShowAnswer(false);
  };

  if (!currentHand) {
    return <div className="text-center">読み込み中...</div>;
  }

  const currentHandData = handColorMap.get(currentHand);
  const correctColorOption = COLOR_OPTIONS.find(c => c.id === currentHandData.color);

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          クイズモード
        </h2>

        {/* スコア表示 */}
        <div className="text-center mb-8">
          <div className="text-lg text-gray-600">
            正解: <span className="font-bold text-green-600">{score.correct}</span> / 
            出題: <span className="font-bold text-blue-600">{score.total}</span>
            {score.total > 0 && (
              <span className="ml-2 text-sm text-gray-500">
                ({Math.round((score.correct / score.total) * 100)}%)
              </span>
            )}
          </div>
        </div>

        {/* ハンド表示 */}
        <div className="mb-8">
          <div className="text-center mb-4">
            <p className="text-lg text-gray-700 mb-3">このハンドの色は？</p>
            <div className="inline-block bg-gray-100 px-8 py-6 rounded-lg border-2 border-gray-300">
              <span className="text-5xl font-bold text-gray-800">{currentHand}</span>
            </div>
          </div>
        </div>

        {/* フィードバック */}
        {feedback && (
          <div className={`text-center mb-6 p-4 rounded-lg ${
            feedback === 'correct' 
              ? 'bg-green-100 border-2 border-green-400' 
              : 'bg-red-100 border-2 border-red-400'
          }`}>
            <p className={`text-xl font-bold ${
              feedback === 'correct' ? 'text-green-700' : 'text-red-700'
            }`}>
              {feedback === 'correct' ? '✓ 正解！' : '✗ 不正解'}
            </p>
            {showAnswer && correctColorOption && (
              <p className="mt-2 text-gray-700">
                正解の色: <span className="font-bold">{correctColorOption.label}</span>
                <span 
                  className="inline-block ml-2 w-6 h-6 rounded border border-gray-300 align-middle"
                  style={{ backgroundColor: correctColorOption.bgColor }}
                ></span>
              </p>
            )}
          </div>
        )}

        {/* 色選択ボタン */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
          {COLOR_OPTIONS.map((color) => (
            <ColorButton
              key={color.id}
              color={color}
              onClick={() => handleColorSelect(color.id)}
              disabled={feedback !== null}
            />
          ))}
        </div>

        {/* アクションボタン */}
        <div className="flex gap-4 justify-center">
          {feedback && (
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              次の問題
            </button>
          )}
          <button
            onClick={handleReset}
            className="px-8 py-3 bg-gray-500 text-white rounded-lg font-bold hover:bg-gray-600 transition-colors"
          >
            リセット
          </button>
        </div>
      </div>
    </div>
  );
}

