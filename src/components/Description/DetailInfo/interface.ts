import { ReactNode } from 'react';

export interface DetailInfoProps {
  map:
    | Map<string, any[]>
    | { label: string | ReactNode; name: string; value: string | ReactNode }[]; // map对象
  cols: number; // 一行展示几个
  responsed?: boolean; // 是否响应式布局
}
