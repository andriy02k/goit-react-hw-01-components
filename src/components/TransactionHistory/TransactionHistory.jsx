import { TransactionTable } from './TransactionHistory.styled'

const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ currency, amount, type, id }) => {
                return (
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                )
            })}
            </tbody>
        </TransactionTable>
    );
};

export default TransactionHistory