/**
 * 固定布局
 */
import React from 'react';
import classNames from 'classnames';
import { Tooltip } from 'antd';
import _ from 'lodash';
import { DetailInfoProps } from '../interface';
import '../index.less';

const fillObj = {
  label: '',
  name: '',
  value: '',
};

// 一行
function rowEle(key: any, cols: any[]) {
  return (
    <div className="yp-rowItem" key={key}>
      {cols.map(v => v)}
    </div>
  );
}

function renderInfo(list: any, num: number) {
  const isArray = Array.isArray(list);
  const data = isArray ? list : Array.from(list.values());
  let row: any = [];
  let col: any = [];
  // 数据整行展示的数据量不够时，给空位补充空数据。避免布局混乱
  const dataLen = data.length;
  const resetLen = dataLen % num === 0 ? 0 : num - (dataLen % num);

  const arr = new Array(resetLen).fill(isArray ? fillObj : ['', '']);
  const newList = data.concat(arr);

  for (let index = 0; index < newList.length; index++) {
    let element = data[index] || ['', ''];
    const randomData = _.uniqueId('detailInfo_');

    if (isArray) {
      element = [
        element.label ?? '',
        element.value ?? '',
        element.lighthigh ?? '',
      ];
    }

    const colItemKey = randomData.toString() + element[0];
    // 一行中的每一项
    const colEle = (
      <div
        className="yp-colItem"
        key={colItemKey}
        style={{ maxWidth: `${100 / num}%` }}
      >
        <span className="text">{`${element[0]}${element[0] && '：'}`}</span>
        <Tooltip placement="topLeft" title={element[1]}>
          <span
            className={classNames('textVal', 'ellipsis', {
              strong: !!element[2],
            })}
          >
            {element[1]}
          </span>
        </Tooltip>
      </div>
    );

    if (index % num === 0) {
      col.length > 0 && row.push(rowEle(colItemKey, col));
      col = [];
    }
    col.push(colEle);
  }

  // 获取随机值以防 key 的值重复
  const randomData = _.uniqueId('detailInfo_');
  row.push(rowEle(randomData, col));

  return row;
}

function DetailInfo(props: DetailInfoProps) {
  const { map, cols } = props;
  return <div className="yp-detailInfo">{renderInfo(map, cols)}</div>;
}

export default DetailInfo;
