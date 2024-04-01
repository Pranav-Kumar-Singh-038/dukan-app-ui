export function TransactionHistoryTable({ data }) {
  const columnNames = data.length > 0 ? Object.keys(data[0]) : [];
  const columnNamesCustom = data.length > 0 ? ["order ID", "Status", "Transaction ID", "Refund date", "Order amount"] : [];

  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr className="text-left text-gray-700 bg-white">
          {columnNamesCustom.map((name) => (
            <th key={name} className="px-5 py-3 text-gray-600 uppercase text-xs tracking-wider font-normal">
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {data.map((item, index) => (
          <tr className="border-b border-gray-200 hover:bg-gray-50" key={index}>
            {columnNames.map((name) => (
              <td key={name} className={`px-5 py-2 border-gray-200 text-xs ${name === 'orderId' ? 'text-blue-500' : ''}`}>
                {name === "status" && (
                  <span className={`inline-block h-2 w-2 rounded-full mr-1 ${item[name] === 'Successful' ? 'bg-green-500' :
                    item[name] === 'Processing' ? 'bg-gray-500' :
                      item[name] === 'Failed' ? 'bg-red-500' :
                        'bg-white'}`} />)}
                <span>{item[name]}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
