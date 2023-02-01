import React from 'react';
import { Pages } from './interfaces';
import { defaultPageNumber } from './view';

const PageContext = React.createContext<Pages>({
  pageNumber: defaultPageNumber,
  setPageNumber() {},
});

export { PageContext };
