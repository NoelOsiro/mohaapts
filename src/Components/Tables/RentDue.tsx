import React from "react";
import { Column, useSortBy, useTable } from 'react-table';
import { Section, SectionHeader, Table, TBody, TData, Thead, TheadRow } from "./tableStyles";
export default function RentDue() {
  const data = React.useMemo(
    () => [
        {
          col1: "Montgomery Mckee",
          col2: "+254 (991) 523-2071",
          col3: "Complex 3Br",
          col4: 33,
          col5: 8733,
          col6: "2018-11-18T05:14:53 -03:00"
        },
        {
          col1: "Wilson Bradford",
          col2: "+254 (868) 529-2435",
          col3: "Complex 2Br",
          col4: 79,
          col5: 7134,
          col6: "2021-04-22T12:40:09 -03:00"
        },
        {
          col1: "Elinor Sparks",
          col2: "+254 (801) 480-3979",
          col3: "Complex 1Br",
          col4: 9,
          col5: 3233,
          col6: "2019-06-21T05:09:56 -03:00"
        },
        {
          col1: "Russo Burch",
          col2: "+254 (809) 430-3464",
          col3: "Complex 2Br",
          col4: 75,
          col5: 5778,
          col6: "2015-04-06T11:52:55 -03:00"
        },
        {
          col1: "Dodson Preston",
          col2: "+254 (876) 415-2985",
          col3: "Complex 2Br",
          col4: 39,
          col5: 6157,
          col6: "2019-06-08T08:24:55 -03:00"
        }
      ],
    []
  )
  const columns = React.useMemo<Column<{col1: string,col2:string,col3: string,col4:number,col5: number,col6:string;}>[ ]>(
    () => [
      {
        Header: 'Name',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Phone No.',
        accessor: 'col2',
      },
      {
        Header: 'Apartment',
        accessor: 'col3',
      },
      {
        Header: 'House No.',
        accessor: 'col4',
        sortType:"basic"
      },
      {
        Header: 'Amount',
        accessor: 'col5',
        sortType:'basic'
      },
      {
        Header: 'Due Date.',
        accessor: 'col6',
        sortType:'basic'
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

