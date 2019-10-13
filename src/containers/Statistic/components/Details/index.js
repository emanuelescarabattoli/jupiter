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
  registerRows,
  statisticsRows,
  valuesStatisticsRowRegister,
  onChangeStatisticsRowRegister,
  onSubmitStatisticsRowRegister,
  isOnEditStatisticsRowRegister,
  onClickEditStatisticsRowRegister,
  onClickNewStatisticsRowRegister,
  valuesStatisticsRowStatistics,
  onChangeStatisticsRowStatistics,
  onSubmitStatisticsRowStatistics,
  isOnEditStatisticsRowStatistics,
  onClickEditStatisticsRowStatistics,
  onClickNewStatisticsRowStatistics,
  id
}) => (
  <>
    <Card>
      {
        !isOnEditStatisticsRowRegister && !isOnEditStatisticsRowStatistics && (
          <CardHeader>
            {
              isOnEdit &&
                <Button onClick={onSubmit}>Submit</Button> ||
                !isOnEdit && !isOnEditStatisticsRowRegister && !isOnEditStatisticsRowStatistics &&
                <Button onClick={onClickEdit}>Edit</Button> ||
                isOnEditStatisticsRowRegister || isOnEditStatisticsRowStatistics &&
                undefined
            }
          </CardHeader>
        )
      }
      <CardBody>
        <Input disabled={!isOnEdit} name="description" placeholder="Description" value={values.description} onChange={onChange} />
        <Input disabled={!isOnEdit} name="note" placeholder="Note" value={values.note} onChange={onChange} />
      </CardBody>
    </Card>
    {
      id && (
        <Card>
          {
            !isOnEditStatisticsRowRegister &&
              !isOnEditStatisticsRowStatistics &&
              !isOnEdit && (
              <CardHeader>
                {
                  !isOnEdit &&
                    !isOnEditStatisticsRowRegister &&
                    !isOnEditStatisticsRowStatistics &&
                    <Button onClick={onClickNewStatisticsRowRegister}>New</Button>}
              </CardHeader>
            )
          }
          <CardTable>
            <Table>
              <TableHeader>
                <TableRow>
                  {
                    !isOnEdit &&
                      !isOnEditStatisticsRowRegister &&
                      !isOnEditStatisticsRowStatistics &&
                      <TableCell>Action</TableCell>
                  }
                  <TableCell>Description</TableCell>
                  <TableCell>Result</TableCell>
                </TableRow>
              </TableHeader>
              {
                registerRows.map(row => (
                  <TableRow key={row.id}>
                    {
                      !isOnEdit &&
                        !isOnEditStatisticsRowRegister &&
                        <TableCell><Button onClick={() => onClickEditStatisticsRowRegister(row.id)}>Edit</Button><Button onClick={() => alert(row.id)}>Delete</Button></TableCell>
                    }
                    <TableCell>{row.register.description}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                  </TableRow>
                ))
              }
              <TableFooter>
                <TableRow>
                  {
                    !isOnEdit &&
                      !isOnEditStatisticsRowRegister &&
                      !isOnEditStatisticsRowStatistics &&
                      <TableCell />
                  }
                  <TableCell />
                  <TableCell>{values.result}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardTable>
        </Card>
      )
    }
    {
      id && (
        <Card>
          {
            !isOnEditStatisticsRowStatistics &&
              !isOnEditStatisticsRowRegister &&
              !isOnEdit && (
              <CardHeader>
                {
                  !isOnEdit &&
                    !isOnEditStatisticsRowStatistics &&
                    !isOnEditStatisticsRowRegister &&
                    <Button onClick={onClickNewStatisticsRowStatistics}>New</Button>}
              </CardHeader>
            )
          }
          <CardTable>
            <Table>
              <TableHeader>
                <TableRow>
                  {
                    !isOnEdit &&
                      !isOnEditStatisticsRowStatistics &&
                      !isOnEditStatisticsRowRegister &&
                      <TableCell>Action</TableCell>
                  }
                  <TableCell>Description</TableCell>
                  <TableCell>Result</TableCell>
                </TableRow>
              </TableHeader>
              {
                statisticsRows.map(row => (
                  <TableRow key={row.id}>
                    {
                      !isOnEdit &&
                        !isOnEditStatisticsRowStatistics &&
                        !isOnEditStatisticsRowRegister &&
                        <TableCell><Button onClick={() => onClickEditStatisticsRowStatistics(row.id)}>Edit</Button><Button onClick={() => alert(row.id)}>Delete</Button></TableCell>
                    }
                    <TableCell>{row.statistics.description}</TableCell>
                    <TableCell>{row.result}</TableCell>
                  </TableRow>
                ))
              }
              <TableFooter>
                <TableRow>
                  {
                    !isOnEdit &&
                      !isOnEditStatisticsRowStatistics &&
                      !isOnEditStatisticsRowRegister &&
                      <TableCell />
                  }
                  <TableCell />
                  <TableCell>{values.result}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardTable>
        </Card>
      )
    }
    {
      isOnEditStatisticsRowRegister &&
        <Card>
          <CardHeader>
            <Button onClick={onSubmitStatisticsRowRegister}>Submit</Button>
          </CardHeader>
          <CardBody>
            <Input name="register" placeholder="Register" value={valuesStatisticsRowRegister.register.id} onChange={onChangeStatisticsRowRegister} />
          </CardBody>
        </Card>
    }
    {
      isOnEditStatisticsRowStatistics &&
        <Card>
          <CardHeader>
            <Button onClick={onSubmitStatisticsRowStatistics}>Submit</Button>
          </CardHeader>
          <CardBody>
            <Input name="statistics" placeholder="Statistics" value={valuesStatisticsRowStatistics.statistics.id} onChange={onChangeStatisticsRowStatistics} />
          </CardBody>
        </Card>
    }
  </>
);

export default Details;
