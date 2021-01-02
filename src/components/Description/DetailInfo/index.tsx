/**
 * 详情页面的头部文案的布局展示
 */
import React from 'react';
import Grid from './components/Grid';
import Response from './components/Response';
import { DetailInfoProps } from './interface';
import './index.less';

function DetailInfo(props: DetailInfoProps) {
  if (props.responsed) {
    return <Response {...props} />;
  }
  return <Grid {...props} />;
}

export default DetailInfo;
