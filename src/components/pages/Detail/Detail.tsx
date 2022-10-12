import MaterialTable from "material-table";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducers } from "../../../reducers";
import * as userAction from "../../../actions/user.action"


export default function Detail()  {
  
  const dispatch = useDispatch<any>();
  const borrowReducer = useSelector((state: RootReducers) => state.borrowReducer);
  const [columns, setColumns] = useState([
    { title: "รหัสหนังสือ", field: "idBook", type: "string" as const },
    {
      title: "ชื่อหนังสือ",
      field: "bookName",
      type: "string" as const,
    },
    { title: "วันที่ยืม", field: "borrowDate", type: "string" as const },
    { title: "วันที่ส่ง", field: "sendDate", type: "string" as const },
  ]);

  React.useEffect(() => {
    dispatch(userAction.loadListBorrowed());
  }, []);

  return (
    <MaterialTable
        title="หนังสือที่ยืม"
        columns={columns}
        data={borrowReducer.result}
        
      />
  )
}
