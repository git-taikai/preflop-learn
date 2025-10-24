'use client';

import React from 'react';
import { ColorOption } from '@/lib/types';

interface ColorButtonProps {
  color: ColorOption;
  onClick: () => void;
  disabled?: boolean;
}

export default function ColorButton({ color, onClick, disabled }: ColorButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 border-gray-300 hover:border-gray-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
      style={{
        backgroundColor: color.bgColor,
        color: color.textColor,
      }}
    >
      <div className="text-lg font-bold">{color.label}</div>
    </button>
  );
}

