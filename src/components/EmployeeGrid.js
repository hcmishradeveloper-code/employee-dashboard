import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";


function EmployeeGrid({rowData}){
const [columnDefs]= useState([
     { headerName: "ID", field: "id", width:60},
     {headerName:"Name", valueGetter:(p) => `${p.data.firstName} ${p.data.lastName}`,flex:1, sortable: true, filter: true},
     {headerName:"Email", field:"email",flex:1.5, sortable: true, filter: true},
     {headerName:"Department", field:"department", filter:true, flex:1, sortable: true},
     {headerName:"Position", field:"position",flex:1, sortable: true, filter: true},
     { headerName: "Hire Date", field: "hireDate", sortable: true, flex:1 },
     { headerName: "Age", field: "age", sortable: true, width:60 },
     {headerName:"Salary", field:"salary", filter:"agNumberColumnFilter",flex:1},
     {headerName:"Location", field:"location",flex:1, sortable: true, filter: true},
     {headerName:"Status", field:"isActive", cellRenderer:(p)=>(p.value ? "✅ Active": "❌Inactive"),flex:1},
])


    return(
        <div className="ag-theme-alpine" style={{height:500}}>
            <AgGridReact 
            rowData={rowData}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={10}
            animateRows={true}
            /> 
        </div>
    )
}
export default EmployeeGrid;