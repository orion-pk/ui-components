import React from 'react';

export const DataGrid = ({ columns, data, loading, emptyMessage = 'No records found.' }) => {
  return (
    <div style={{ width: '100%', overflowX: 'auto', border: '1.5px solid #cbd5e1', borderRadius: '0.5rem', background: '#ffffff' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
        <thead>
          <tr style={{ background: '#f8fafc', borderBottom: '1.5px solid #cbd5e1' }}>
            {columns.map((col, idx) => (
              <th key={idx} style={{ padding: '0.75rem 1rem', fontWeight: 700, color: '#334155', width: col.width }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length} style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                Loading table data...
              </td>
            </tr>
          ) : !data || data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                style={{
                  borderBottom: rowIdx === data.length - 1 ? 'none' : '1px solid #f1f5f9',
                  transition: 'background-color 0.15s',
                }}
              >
                {columns.map((col, colIdx) => (
                  <td key={colIdx} style={{ padding: '0.75rem 1rem', color: '#0f172a' }}>
                    {col.render ? col.render(row, rowIdx) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
