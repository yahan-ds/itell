// components/Table.tsx

import React from 'react';

interface TableProps {
    headers?: string[];
    rows: string[][];
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    bordered?: boolean;
}


const Table: React.FC<TableProps> = ({ headers, rows, textAlign = 'left', bordered = false }) => {
  const columnWidth = headers ? `${100 / headers.length}%` : `${100 / rows[0].length}%`; // Calculate column width
  const borderStyle = bordered ? '1px solid black' : 'none';
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginLeft: '20px', marginRight: '20px', border: borderStyle}}>
      {headers && (
        <thead>
          <tr style={{ border: borderStyle }}>
            {headers.map((header, idx) => (
              <th key={idx} style={{ width: columnWidth, padding: '8px', textAlign, border: borderStyle }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} style={{ border: borderStyle }}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} style={{ width: columnWidth, padding: '8px', textAlign, border: borderStyle }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
