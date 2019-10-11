import React from "react";

import { Card, CardHeader, CardTable } from "../../../../components/Card";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "../../../../components/Table";
import Button from "../../../../components/Button";

const List = ({ registers, onClickShow, onClickNew }) => (
  <Card>
    <CardHeader>
      <Button onClick={onClickNew}>New</Button>
    </CardHeader>
    <CardTable>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Action</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            registers.map(register => (
              <TableRow key={register.id}>
                <TableCell><Button onClick={() => onClickShow(register.id)}>Show</Button></TableCell>
                <TableCell>{register.description}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </CardTable>
  </Card>
);

export default List;
