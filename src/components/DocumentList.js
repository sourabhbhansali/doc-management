/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import DocumentAction from '../actions/documentAction';
import BtnCellRenderer from "./BtnCellRenderer";


const DocumentList = () => {

    const documents = useSelector(state => state.documentReducer);
    const dispatch = useDispatch();
    const [columDefs] = useState([
        {
            field: 'fileName',
            maxWidth: 200,
        },
        {
            field: 'fileType',
            maxWidth: 200,
        },
        {
            field: 'createdBy',
            maxWidth: 200,
        },
        {
            field: 'createdOn',
            maxWidth: 200,
        },
        {
            field: 'Download',
            cellRenderer: 'btnCellRenderer',
            minWidth: 100,
        },
        {
            field: 'Preview',
            cellRenderer: 'btnCellRenderer',
            minWidth: 100,
        }
    ]);


    const [frameworkComponents] = useState({
        btnCellRenderer: BtnCellRenderer
    });

    useEffect(() => {
        dispatch(DocumentAction.fetchDocuments());
    }, []);

    return (
        <div className="ag-theme-balham" style={{height: '200px', width: '1200px'}}>
            { documents && <AgGridReact columnDefs={columDefs} rowData={documents} 
                frameworkComponents={frameworkComponents}/>
            }
        </div>
    )
}
export default DocumentList;