import React from "react";
import { Column, useSortBy, useTable } from 'react-table';
import { ISpace, SpacesList } from "../../Services/Spaces";
import { Section, SectionHeader, Table, TBody, TData, Thead, TheadRow } from "./tableStyles";

export default function HouseTable() {
  const data = React.useMemo(
    () => SpacesList,[]
  )
  const columns = React.useMemo<Column<ISpace>[ ]>(
    () => [
      {
        Header: 'Id',
        accessor: 'house_id', // accessor is the "key" in the data
      },
      {
        Header: 'Building',
        accessor: 'building',
      },
      {
        Header: 'House #',
        accessor: 'house_no',
      },
      {
        Header: 'Rent',
        accessor: 'rent',
        sortType:"basic"
      },
      {
        Header: 'State',
        accessor: 'state',
        sortType:'basic'
      },
      {
        Header: 'Type',
        accessor: 'type',
        sortType:'basic'
      },
      {
        Header:'Bedroom No',
        accessor:'bedrm_no',
        sortType:'basic'
      }
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data },useSortBy)
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

