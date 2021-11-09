import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableCellActions from 'components/Shared/Pagination/TableCellActions';
import { IOrder } from 'interfaces/models/order';
import React from 'react';

interface IProps {
    order: IOrder;
}

const ListItem = React.memo((props: IProps) => {

    const { order } = props;
    const [error, setError] = React.useState(false);
    const handleDismissError = React.useCallback(() => setError(null), []);
    const [loading] = React.useState(false);

    return (
        <TableRow>
            <TableCell>{order.description}</TableCell>
            <TableCell>{order.quantity}</TableCell>
            <TableCell>{order.total}</TableCell>
            <TableCellActions loading={loading} error={error} onDismissError={handleDismissError} />
        </TableRow>
    )
})

export default ListItem;