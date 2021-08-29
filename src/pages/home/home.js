import React,{Component, Suspense, lazy}from 'react';
import Table from '../../shared/ui-view/table/table';
import HomeService from '../home/home.service';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useLocation,
  useHistory
} from "react-router-dom";
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'estimationName',
      headerName: 'Estimation Name',
      width: 190,
      editable: true,
    },
    {
      field: 'estimationDescription',
      headerName: 'Estimation Description',
      width: 220,
      editable: true,
    },
    {
      field: 'estimationType',
      headerName: 'Estimation Type',
      width: 180,
      editable: true,
    },
    {
      field: 'clientName',
      headerName: 'Client Name',
      width: 180,
      editable: true,
    },
    {
      field: 'projectName',
      headerName: 'Project Name	',
      width: 170,
      editable: true,
    },
    {
      field: 'lastUpdateOn',
      headerName: 'LastUpdate On',
      width: 150,
      editable: true,
    }
  ];

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {columanHandel:[], rowDataHandel: [], isShow:false};
    }
    componentDidMount() {
        this.setState({...this.state,
            columanHandel:columns,
            rowDataHandel: HomeService.getData(),
            isShow:true,
        })
      }
    render() {
        return (
          <div>
           <Suspense fallback={<div> Logind .... </div>}>
              {

                      this.state.isShow ?  (<div >  <Table columanData={this.state.columanHandel} rowData={this.state.rowDataHandel} /> </div>) : (<div>Loding...</div>)
              }
          </Suspense>
          </div>
           
        )
    }
}

