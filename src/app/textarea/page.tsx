'use client';
import { useState } from 'react';

export default function Merg() {
  const [value, setValue] = useState('');
  return (
    <div>
      <textarea
        className="text-black"
        value={value}
        onChange={(e) => {
          console.log(e.target.value);
          setValue(e.target.value);
        }}
      />
    </div>
  );
}
