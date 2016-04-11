import React from 'react';
import ReactDom from 'react-dom';

import Detail from './pages/Detail';

ReactDom.render (  
	<Detail message="This is coming from props!" />,
     document.getElementById('app')
 );