import React from 'react';
import { TextBlock } from 'react-placeholder/lib/placeholders';

import './RepoResultPlaceholder.css';

const RepoResultPlaceholder = () => (
  <div className='result repo-result'>
    <a href="javascript:void(0);">
      <TextBlock rows={3} color='lightgray' />
    </a>
  </div>
);

export default RepoResultPlaceholder;