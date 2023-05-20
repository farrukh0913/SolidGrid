import { Component, OnInit } from '@angular/core';
import { GridApi, ColumnApi, ColDef, ColGroupDef } from 'ag-grid-community';
import { IRowData } from './solar.model';

@Component({
  selector: 'app-solar',
  templateUrl: './solar.component.html',
  styleUrls: ['./solar.component.scss']
})
export class SolarComponent implements OnInit {
  private gridApi!: GridApi<any>;
  private gridColumnApi!: ColumnApi;
  rowsData: IRowData[] = [];
  columnDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Athlete Details',
      children: [
        {
          field: 'athlete',
          width: 150,
          suppressSizeToFit: true,
          enableRowGroup: true,
          rowGroupIndex: 0,
        },
        {
          field: 'age',
          width: 90,
          minWidth: 75,
          maxWidth: 100,
          enableRowGroup: true,
        },
        {
          field: 'country',
          enableRowGroup: true,
        },
        {
          field: 'year',
          width: 90,
          enableRowGroup: true,
          pivotIndex: 0,
        },
        { field: 'sport', width: 110, enableRowGroup: true },
        {
          field: 'gold',
          enableValue: true,
          suppressMenu: true,
          filter: 'agNumberColumnFilter',
          aggFunc: 'sum',
        },
        {
          field: 'silver',
          enableValue: true,
          suppressMenu: true,
          filter: 'agNumberColumnFilter',
          aggFunc: 'sum',
        },
        {
          field: 'bronze',
          enableValue: true,
          suppressMenu: true,
          filter: 'agNumberColumnFilter',
          aggFunc: 'sum',
        },
        {
          field: 'total',
          enableValue: true,
          suppressMenu: true,
          filter: 'agNumberColumnFilter',
          aggFunc: 'sum',
        },
      ],
    },
  ];

  defaultColDef: ColDef = {
    sortable: false,
    resizable: true,
    editable: true,
    // floatingFilter: true,
    width: 120,
  };

  constructor() { }

  ngOnInit(): void {
    const mainAppliances: string[] = ['KITCHEN GENERAL', 'COOKING', 'CLEANING / LAUNDRY', 'HEATING / HOT WATER', 'OTHER'];
    this.columnDefs = [
      { headerName: 'Appliances', field: 'appliances', width: 230,
      cellStyle: function (params) {
        if (mainAppliances.includes(params.value)) {
            return { 'font-size': '16px', 'font-weight': 'bold', 'textAlign': 'start' };
        } else if(params.value === 'Totals'){
          return { 'font-size': '14px', 'font-weight': 'normal', 'textAlign': 'center' };
        } else {
            return { 'font-size': '14px', 'font-weight': 'normal', 'textAlign': 'start' };;
        }
    } },
      { headerName: 'Qty', field: 'qty' },
      { headerName: 'Power (W)', field: 'power' },
      { headerName: 'Time (hrs)', field: 'time1' },
      { headerName: 'Energy (kWh)', field: 'energy1' },
      { headerName: 'Time (hrs)', field: 'time2' },
      { headerName: 'Energy (kWh)', field: 'energy2' },
      { headerName: 'Energy (kWh)', field: 'energy3' },
      { headerName: 'Power Factor est.', field: 'powerFactor' },
      { headerName: 'Contribution to max demand (kVA)', field: 'contribution' },
      { headerName: 'Surge factor', field: 'surge' },
      { headerName: 'Inverter peak load', field: 'inverter' },
    ];

    this.rowsData = [
      { appliances: 'KITCHEN GENERAL', qty: '', power: '', time1: '', energy1: '', time2: '',
    energy2: '', energy3: '', powerFactor: '', contribution: '', surge: '', inverter: '' },
      { appliances: 'Dishwasher', qty: '1.00', power: '1,200', time1: '1', energy1: '0.6', time2: '1',
    energy2: '0.6', energy3: '0.6', powerFactor: '0.9', contribution: '1.33', surge: '1', inverter: '1.33' },
    { appliances: 'Fridge', qty: '1.00', power: '150', time1: '12', energy1: '1.8', time2: '10',
    energy2: '1.5', energy3: '1.7', powerFactor: '0.9', contribution: '0.17', surge: '1', inverter: '0.17' },
    { appliances: 'Chest Freezer', qty: '1.00', power: '150', time1: '12', energy1: '1.8', time2: '10',
    energy2: '1.5', energy3: '1.7', powerFactor: '0.9', contribution: '0.17', surge: '1', inverter: '0.17' },

    { appliances: 'COOKING', qty: '', power: '', time1: '', energy1: '', time2: '',
    energy2: '', energy3: '', powerFactor: '', contribution: '', surge: '', inverter: '' },
    { appliances: 'Oven 1', qty: '1.00', power: '3200', time1: '0.5', energy1: '1.6', time2: '0.5',
    energy2: '1.6', energy3: '1.6', powerFactor: '0.8', contribution: '4.00', surge: '1', inverter: '4.00' },
    { appliances: 'Induction Cooktop Zone 4', qty: '1.00', power: '2200', time1: '1', energy1: '2.2', time2: '1',
    energy2: '2.2', energy3: '2.2', powerFactor: '0.8', contribution: '2.75', surge: '1', inverter: '2.75' },

    { appliances: 'CLEANING / LAUNDRY', qty: '', power: '', time1: '', energy1: '', time2: '',
    energy2: '', energy3: '', powerFactor: '', contribution: '', surge: '', inverter: '' },
    { appliances: 'Washing Machine', qty: '1.00', power: '700', time1: '0.8', energy1: '0.56', time2: '0.8',
    energy2: '0.6', energy3: '0.6', powerFactor: '0.9', contribution: '0.78', surge: '1', inverter: '0.78' },
    { appliances: 'Clothes Dryer', qty: '1.00', power: '700', time1: '', energy1: '0', time2: '1',
    energy2: '0.7', energy3: '0.4', powerFactor: '0.8', contribution: '0.88', surge: '1', inverter: '0.88' },

    { appliances: 'HEATING / HOT WATER', qty: '', power: '', time1: '', energy1: '', time2: '',
    energy2: '', energy3: '', powerFactor: '', contribution: '', surge: '', inverter: '' },
    { appliances: 'Revers Cylce Air Con 5kW', qty: '1.00', power: '1200', time1: '6', energy1: '7.2', time2: '2',
    energy2: '2.4', energy3: '4.8', powerFactor: '0.9', contribution: '1.33', surge: '', inverter: '0.00' },
    { appliances: 'Hydronic Heating', qty: '1.00', power: '3200', time1: '', energy1: '0', time2: '4',
    energy2: '12.8', energy3: '6.4', powerFactor: '0.8', contribution: '4.00', surge: '1', inverter: '4.00' },
    { appliances: 'Hot Water Heat Pump', qty: '1.00', power: '550', time1: '4', energy1: '2.2', time2: '6',
    energy2: '3.3', energy3: '2.8', powerFactor: '0.8', contribution: '0.69', surge: '1', inverter: '0.69' },

    { appliances: 'OTHER', qty: '', power: '', time1: '', energy1: '', time2: '',
    energy2: '', energy3: '', powerFactor: '', contribution: '', surge: '', inverter: '' },
    { appliances: 'Lights LED', qty: '4.00', power: '10', time1: '4', energy1: '0.16', time2: '5',
    energy2: '0.2', energy3: '0.18', powerFactor: '0.9', contribution: '0.04', surge: '1', inverter: '0.04' },
    { appliances: '+', qty: '', power: '', time1: '', energy1: '', time2: '',
    energy2: '', energy3: '', powerFactor: '', contribution: '', surge: '', inverter: '' },

    { appliances: 'Totals', qty: '', power: '', time1: '', energy1: '18.0', time2: '',
    energy2: '', energy3: '', powerFactor: '', contribution: '', surge: '27.2', inverter: '22.6' },
    ];
  }

}
