import React from 'react';
import ReactDom from 'react-dom';

import Detail from './pages/Detail';

import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

ReactDom.render (  
	<Detail message="This is coming from props!" />,
     document.getElementById('app')
 );