import React from 'react';
import { TextBlock } from 'react-placeholder/lib/placeholders';

import './ResultPlaceholder.css';

const RepoResultPlaceholder = ({ type }) => (
  <div className={`result ${type}-result`}>
    <a href="javascript:void(0);">
      <TextBlock rows={3} color='lightgray' />
    </a>
  </div>
);

export default RepoResultPlaceholder;