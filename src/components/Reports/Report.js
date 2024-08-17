import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import './Report.css'

const TableComponent = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of rows, we'll use page
        canPreviousPage,
        canNextPage,
        pageOptions,

        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize }
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 } // Pass our hoisted table state
        },
        usePagination
    );

    const handleExportPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({ html: '#dataTable' });
        doc.save('table-data.pdf');
    };

    const handleExportExcel = () => {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, 'Table Data');
        XLSX.writeFile(wb, 'table-data.xlsx');
    };

    return (
        <div>
            <div className="export-buttons" id='btn'>
                <div id='d1'> 
                    <span class="material-symbols-outlined" onClick={handleExportPDF} >
                        picture_as_pdf
                    </span>
                    <h6>PDF</h6>
                    <span class="material-symbols-outlined" onClick={handleExportExcel} >
                        description
                    </span>
                    <h6>EXCEL</h6>
                </div>
            </div>
            <table {...getTableProps()} id="dataTable">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="pagination-controls" id='controls'>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous
                </button>&nbsp;&nbsp;
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </button>&nbsp;&nbsp;
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span>&nbsp;&nbsp;
                <select
                    value={pageSize}
                    onChange={e => setPageSize(Number(e.target.value))}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

const Report = () => {
    const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id'
            },
            {
                Header: 'Name',
                accessor: 'name'
            },
            {
                Header: 'Age',
                accessor: 'age'
            }
            // Add more columns as needed
        ],
        []
    );

    const data = useMemo(
        () => [
            { id: 1, name: 'Alice', age: 28 },
            { id: 2, name: 'Bob', age: 34 },
            { id: 3, name: 'Charlie', age: 45 },
            { id: 4, name: 'David', age: 22 },
            { id: 5, name: 'Ella', age: 29 },
            { id: 6, name: 'Frank', age: 33 },
            { id: 7, name: 'Grace', age: 41 },
            { id: 8, name: 'Hannah', age: 25 },
            { id: 9, name: 'Isaac', age: 39 },
            { id: 10, name: 'Jack', age: 30 },
            { id: 11, name: 'Karen', age: 27 },
            { id: 12, name: 'Leo', age: 35 },
            { id: 13, name: 'Megan', age: 44 },
            { id: 14, name: 'Nathan', age: 23 },
            { id: 15, name: 'Olivia', age: 32 },
            { id: 16, name: 'Paul', age: 36 },
            { id: 17, name: 'Quinn', age: 40 },
            { id: 18, name: 'Rachel', age: 26 },
            { id: 19, name: 'Sam', age: 38 },
            { id: 20, name: 'Tina', age: 31 },
            { id: 21, name: 'Uma', age: 24 },
            { id: 22, name: 'Victor', age: 37 },
            { id: 23, name: 'Wendy', age: 42 },
            { id: 24, name: 'Xander', age: 29 },
            { id: 25, name: 'Yara', age: 34 },
            { id: 26, name: 'Zane', age: 28 },
            { id: 27, name: 'Aaron', age: 33 },
            { id: 28, name: 'Bella', age: 45 },
            { id: 29, name: 'Cathy', age: 22 },
            { id: 30, name: 'Dan', age: 29 }
        ],
        []
    );

    return (
        <div id='report'>
            <h1 > Reports </h1>
            <TableComponent columns={columns} data={data} />
        </div>
    );
};

export default Report;
