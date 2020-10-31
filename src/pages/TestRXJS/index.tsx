import React, { useState, useEffect } from 'react';
import rx from 'rxjs';

const TestRXJS: React.FC<{}> = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
  }, []);
  return <div onClick={() => setCount(count + 1)}>{count}</div>;
};

export default TestRXJS;
