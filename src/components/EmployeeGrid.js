import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";


function EmployeeGrid({rowData}){
const [columnDefs]= useState([
     { headerName: "ID", field: "id", width: 80 },
     {headerName:"Name", valueGetter:(p) => `${p.data.firstName} ${p.data.lastName}`,flex:1},
     {headerName:"Email", field:"email",flex:1.5},
     {headerName:"Department", field:"department", filter:true, flex:1},
     {headerName:"Position", field:"position",flex:1},
     {headerName:"Salary", field:"salary", filter:"agNumberColumnFilter",flex:1},
     {headerName:"Location", field:"location",flex:1},
     {headerName:"Status", field:"isActive", cellRenderer:(p)=>(p.value ? "🟢 Active": "🔴Inactive"),flex:1}
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