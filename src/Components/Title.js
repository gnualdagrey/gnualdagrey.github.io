import React, {useEffect} from 'react';

function Title() {
  
    useEffect(()=>{
      document.title= 'Geoffrey Grey';
    }, []);
  
};

export default Title