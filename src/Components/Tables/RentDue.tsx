import React from "react";
import { Column, useSortBy, useTable } from 'react-table';
import { Rentdue, RentDueList } from "../../Services/RDue";
import { Section, SectionHeader, Table, TBody, TData, Thead, TheadRow } from "./tableStyles";

export default function RentDue() {
  const data = React.useMemo(
    () => RentDueList, []
  )
  const columns = React.useMemo<Column<Rentdue>[]>(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Phone No.',
        accessor: 'phone',
      },
      {
        Header: 'Apartment',
        accessor: 'house',
      },
      {
        Header: 'House No.',
        accessor: 'house_no',
        sortType: "basic"
      },
      {
        Header: 'Amount',
        accessor: 'amount',
        sortType: 'basic'
      },
      {
        Header: 'Due Date.',
        accessor: 'due_date',
        sortType: 'basic'
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy)
  return (
    <Section>
      <SectionHeader>Rent Due</SectionHeader>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TheadRow {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </TheadRow>
              ))}
            </tr>
          ))}
        </Thead>
        <TBody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <TData {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TData>
                  )
                })}
              </tr>
            )
          })}
        </TBody>
      </Table>
    </Section>
  );
}

