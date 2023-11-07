import 'devextreme/dist/css/dx.light.css';
 
import {
    Column,
    DataGrid
} from 'devextreme-react/data-grid';
import { employees } from './data'

export default function Grid() {
    return ( <>
    <div id="dataGrid">
        <DataGrid dataSource={employees}>
        <Column dataField="FullName"></Column>
                <Column dataField="Position"></Column>
                <Column
                    dataField="BirthDate"
                    dataType="date">
                </Column>
                <Column
                    dataField="HireDate"
                    dataType="date">
                </Column>
                <Column dataField="City" />
                <Column dataField="Country"></Column>
                <Column dataField="Address" />
                <Column dataField="HomePhone" />
                <Column dataField="PostalCode" />
        </DataGrid>
    </div>
    </>);
}
