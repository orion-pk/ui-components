import React from 'react';

export const DataGrid = ({ columns, data, loading, emptyMessage = 'No matching records found.' }) => {
  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: '8px',
        border: '1.5px solid #cbd5e1',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <div style={{ overflowX: 'auto', width: '100%' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ background: '#e5f3f7', borderBottom: '1.5px solid #cbd5e1', color: '#0f172a', fontWeight: 700 }}>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  style={{
                    padding: '1.05rem 1rem',
                    width: col.width,
                    textAlign: col.align || 'left',
                    borderRight: idx === columns.length - 1 ? 'none' : '1px solid #cbd5e1',
                  }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length} style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
                  Loading table data...
                </td>
              </tr>
            ) : !data || data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  style={{
                    borderBottom: rowIdx === data.length - 1 ? 'none' : '1px solid #e2e8f0',
                    background: '#FFFFFF',
                    transition: 'background 0.15s',
                  }}
                >
                  {columns.map((col, colIdx) => (
                    <td
                      key={colIdx}
                      style={{
                        padding: '1.05rem 1rem',
                        color: '#0f172a',
                        textAlign: col.align || 'left',
                        borderRight: colIdx === columns.length - 1 ? 'none' : '1px solid #e2e8f0',
                      }}
                    >
                      {col.render ? col.render(row, rowIdx) : row[col.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
