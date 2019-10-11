import React from "react";

import { Card, CardHeader, CardTable, CardBody } from "../../../../components/Card";
import { Table, TableHeader, TableRow, TableCell, TableFooter } from "../../../../components/Table";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";

const Details = ({
  values,
  onChange,
  onSubmit,
  isOnEdit,
  onClickEdit,
  valuesRow,
  onChangeRow,
  onSubmitRow,
  isOnEditRow,
  onClickEditRow,
  onClickNewRow,
  onClickDeleteRow
}) => (
  <>
    <Card>
      {
        !isOnEditRow && (
          <CardHeader>
            {isOnEdit && <Button onClick={onSubmit}>Submit</Button> || !isOnEdit && !isOnEditRow && <Button onClick={onClickEdit}>Edit</Button> || isOnEditRow && undefined}
          </CardHeader>
        )
      }
      <CardBody>
        <Input disabled={!isOnEdit} name="description" placeholder="Description" value={values.description} onChange={onChange} />
        <Input disabled={!isOnEdit} name="note" placeholder="Note" value={values.note} onChange={onChange} />
      </CardBody>
    </Card>
    <Card>
      {
        !isOnEditRow && !isOnEdit && (
          <CardHeader>
            {!isOnEdit && !isOnEditRow && <Button onClick={onClickNewRow}>New</Button>}
          </CardHeader>
        )
      }
      <CardTable>
        <Table>
          <TableHeader>
            <TableRow>
              {!isOnEdit && !isOnEditRow && <TableCell>Action</TableCell>}
              <TableCell>Description</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHeader>
          {
            values.registerrowSet.map(row => (
              <TableRow key={row.id}>
                {!isOnEdit && !isOnEditRow && <TableCell><Button onClick={() => onClickEditRow(row.id)}>Edit</Button><Button onClick={() => onClickDeleteRow(row.id)}>Delete</Button></TableCell>}
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.amount}</TableCell>
              </TableRow>
            ))
          }
          <TableFooter>
            <TableRow>
              {!isOnEdit && !isOnEditRow && <TableCell />}
              <TableCell />
              <TableCell>{values.amount}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardTable>
    </Card>
    {
      isOnEditRow &&
        <Card>
          <CardHeader>
            <Button onClick={onSubmitRow}>Submit</Button>
          </CardHeader>
          <CardBody>
            <Input name="date" placeholder="Date" value={valuesRow.date} onChange={onChangeRow} />
            <Input name="description" placeholder="Description" value={valuesRow.description} onChange={onChangeRow} />
            <Input name="period" placeholder="Period" value={valuesRow.period} onChange={onChangeRow} />
            <Input name="amount" placeholder="Amount" value={valuesRow.amount} onChange={onChangeRow} />
            <Input name="note" placeholder="Note" value={valuesRow.note} onChange={onChangeRow} />
          </CardBody>
        </Card>
    }
  </>
);

export default Details;
