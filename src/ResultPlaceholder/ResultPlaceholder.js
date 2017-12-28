import React from 'react';
import { RectShape, TextBlock } from 'react-placeholder/lib/placeholders';

import './ResultPlaceholder.css';

const ResultPlaceholder = ({ type }) => (
  <div className={`result ${type}-result`}>
    <a href="#">
      {
        type === 'users'
        ? <RectShape color='lightgray' />
        : null
      }
      <TextBlock rows={type === 'users' ? 1 : 3} color='lightgray' />
    </a>
  </div>
);

export default ResultPlaceholder;