import { NewRangeData, HandColorInfo } from './types';

/**
 * colorGroupsからハンド名→色情報のマップを生成する
 */
export function buildHandColorMap(rangeData: NewRangeData): Map<string, HandColorInfo> {
  const handMap = new Map<string, HandColorInfo>();
  
  Object.entries(rangeData.colorGroups).forEach(([colorId, colorGroup]) => {
    colorGroup.hands.forEach(handName => {
      handMap.set(handName, {
        color: colorId,
        label: colorGroup.label,
        bgColor: colorGroup.bgColor,
      });
    });
  });
  
  return handMap;
}

/**
 * 全てのハンド名のリストを取得する
 */
export function getAllHands(rangeData: NewRangeData): string[] {
  const allHands: string[] = [];
  
  Object.values(rangeData.colorGroups).forEach(colorGroup => {
    allHands.push(...colorGroup.hands);
  });
  
  return allHands;
}
