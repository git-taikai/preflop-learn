'use client';

import React from 'react';
import rangeData from '@/data/ranges.json';
import { RANKS } from '@/lib/constants';
import { NewRangeData } from '@/lib/types';
import { buildHandColorMap } from '@/lib/rangeUtils';

const data = rangeData as NewRangeData;
const handColorMap = buildHandColorMap(data);

export default function HandGrid() {
  const getHandName = (row: number, col: number): string => {
    const rank1 = RANKS[row];
    const rank2 = RANKS[col];
    
    if (row === col) {
      // ペア
      return `${rank1}${rank2}`;
    } else if (row < col) {
      // スーテッド (上三角)
      return `${rank1}${rank2}s`;
    } else {
      // オフスート (下三角)
      return `${rank2}${rank1}o`;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        プリフロップレンジ表
      </h2>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="grid grid-cols-13 gap-1">
            {RANKS.map((_, rowIndex) =>
              RANKS.map((_, colIndex) => {
                const handName = getHandName(rowIndex, colIndex);
                const handData = handColorMap.get(handName);
                
                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className="aspect-square flex items-center justify-center text-xs sm:text-sm font-bold border border-gray-300 rounded shadow-sm"
                    style={{
                      backgroundColor: handData?.bgColor || '#1F2937',
                      color: ['#FFFFFF', '#FCDF47'].includes(handData?.bgColor || '') ? '#000000' : '#FFFFFF',
                    }}
                  >
                    {handName}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded" style={{ backgroundColor: '#8B5CF6' }}></div>
          <span className="text-sm text-gray-700">紫</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded" style={{ backgroundColor: '#EF4444' }}></div>
          <span className="text-sm text-gray-700">赤</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded" style={{ backgroundColor: '#F97316' }}></div>
          <span className="text-sm text-gray-700">橙</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded" style={{ backgroundColor: '#EAB308' }}></div>
          <span className="text-sm text-gray-700">黄</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded" style={{ backgroundColor: '#22C55E' }}></div>
          <span className="text-sm text-gray-700">緑</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded" style={{ backgroundColor: '#84CC16' }}></div>
          <span className="text-sm text-gray-700">黄緑</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded" style={{ backgroundColor: '#38BDF8' }}></div>
          <span className="text-sm text-gray-700">水色</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded border border-gray-300" style={{ backgroundColor: '#FFFFFF' }}></div>
          <span className="text-sm text-gray-700">白</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded" style={{ backgroundColor: '#9CA3AF' }}></div>
          <span className="text-sm text-gray-700">灰</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded" style={{ backgroundColor: '#6B7280' }}></div>
          <span className="text-sm text-gray-700">濃灰</span>
        </div>
      </div>
    </div>
  );
}

