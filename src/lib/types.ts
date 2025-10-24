export interface HandData {
  color: string;
  label: string;
  bgColor: string;
}

export interface RangeData {
  hands: Record<string, HandData>;
}

export interface ColorOption {
  id: string;
  label: string;
  bgColor: string;
  textColor: string;
}

export interface ColorGroup {
  label: string;
  bgColor: string;
  hands: string[];
}

export interface NewRangeData {
  colorGroups: Record<string, ColorGroup>;
}

export interface HandColorInfo {
  color: string;
  label: string;
  bgColor: string;
}

