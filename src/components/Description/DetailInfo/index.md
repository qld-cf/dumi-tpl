---
group:
  title: Description
---

# DetailInfo 详情文本内容展示

#### 基本功能

1. 详情页的文本排列展示
2. 提供了两种入参模式：数组对象和 Map 类型

## 以 Map 的格式传入文本数据

```tsx
/**
 * title: 以Map的格式传入文本数据
 * desc: 格式为 `Map<文本对应的字段名, [文本的标题, 文本对应的值, 布尔值表示是否高亮展示文本]>`
 */

import React, { useEffect } from 'react';
import DetailInfo from './index';

export default function() {
  const map = new Map([
    ['key', ['单号', 'value', true]], // key为字段名  收货单号为字段名对应的文案   value为字段名对应的值  最后布尔值为是否高亮展示
    ['j2a', ['类型', 'ds']],
    ['j3a', ['状态', 'ds']],
    ['j4a', ['来源单号', 'ds']],
    ['j5a', ['关联单号', 'ds']],
    ['j6a', ['供应商', 'ds']],
    ['j7a', ['来源地', 'ds']],
  ]);

  const arr = map.get('key');

  arr.splice(1, 1, 'new value');
  map.set('key', arr);

  return <DetailInfo map={map} cols={3} />;
}
```

## 以对象数组的格式传入文本数据

```tsx
import React from 'react';
import DetailInfo from './index';

export default function() {
  const list = [
    {
      name: 'businessScope',
      label: '单号',
      value: '生鲜产品',
      lighthigh: true,
    },
    {
      name: 'j2a',
      label: '类型',
      value: '测试 ',
    },
    {
      name: 'j5a',
      label: '来源单号',
      value: 'value',
    },
    {
      name: 'j3a',
      label: '状态',
      value: '产品',
    },
    {
      name: 'ja',
      label: '状态2',
      value: '产品1',
    },
  ];

  return <DetailInfo map={list} cols={3} />;
}
```

## 响应式布局

```tsx
/**
 * title: 根据每项的内容长度来实现自适应
 * desc: Map对象和数组的形式都可以进行渲染
 */

import React from 'react';
import DetailInfo from './index';

export default function() {
  const list = [
    {
      name: 'businessScope',
      label: '单号',
      value: '生鲜产品',
      lighthigh: true,
    },
    {
      name: 'j2a',
      label: '收货类型',
      value: '测试 ',
    },
    {
      name: 'j5a',
      label: '来源单号',
      value: 'value',
    },
    {
      name: 'j3a',
      label: '状态',
      value: '生鲜产品1',
    },
    {
      name: 'ja',
      label: '状态2',
      value: '生鲜产品2',
    },
  ];

  return <DetailInfo map={list} responsed />;
}
```

## API

| 参数 | 说明         | 类型                                                                                 | 默认值 |
| :--- | :----------- | :----------------------------------------------------------------------------------- | :----- |
| map  | 文本的数据   | `Map<string, any[]/ [{name: string,label: string, value: any, lighthigh?: boolean}]` | -      |
| cols | 一行展示几项 | `number`                                                                             | -      |
