export function convertToRows<T>(data: T[], itemsPerRow: number) {
    const rows = [];
  
    for (let i = 0; i < data.length; i = i + itemsPerRow) {
      rows.push([data[i], data[i + 1]]);
    }
    return rows;
  }