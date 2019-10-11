import React from "react";

import { Card, CardHeader, CardTable } from "../../../../components/Card";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "../../../../components/Table";
import Button from "../../../../components/Button";

const List = ({ statistics, onClickShow, onClickNew }) => (
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
            statistics.map(statistic => (
              <TableRow key={statistic.id}>
                <TableCell><Button onClick={() => onClickShow(statistic.id)}>Show</Button></TableCell>
                <TableCell>{statistic.description}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </CardTable>
  </Card>
);

export default List;
