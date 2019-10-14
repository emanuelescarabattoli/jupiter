import React from "react";

import { Card, CardHeader, CardTable, CardBody } from "../../../../components/Card";
import { Table, TableHeader, TableRow, TableCell, TableFooter } from "../../../../components/Table";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";

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
  id,
  statisticsList,
  registersList
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
                    <Button onClick={onClickNewStatisticsRowRegister}>New register</Button>
                }
                {
                  !isOnEdit &&
                    !isOnEditStatisticsRowRegister &&
                    !isOnEditStatisticsRowStatistics &&
                    <Button onClick={onClickNewStatisticsRowStatistics}>New statistics</Button>
                }
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
                  <TableCell>Amount</TableCell>
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
                    <TableCell>{row.register.amount}</TableCell>
                  </TableRow>
                ))
              }
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
                    <TableCell>{row.statistics.result}</TableCell>
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
      isOnEditStatisticsRowRegister &&
        <Card>
          <CardHeader>
            <Button onClick={onSubmitStatisticsRowRegister}>Submit</Button>
          </CardHeader>
          <CardBody>
            <Select
              options={registersList}
              valueKey="id"
              labelKey="description"
              name="register"
              placeholder="Register"
              value={valuesStatisticsRowRegister.register}
              onChange={onChangeStatisticsRowRegister}
            />
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
            <Select
              options={statisticsList}
              valueKey="id"
              labelKey="description"
              name="statistics"
              placeholder="Statistics"
              value={valuesStatisticsRowStatistics.statistics}
              onChange={onChangeStatisticsRowStatistics}
            />
          </CardBody>
        </Card>
    }
  </>
);

export default Details;
