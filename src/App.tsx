import { MapsComponent, LayersDirective, LayerDirective,Inject, DataLabel, Zoom } from '@syncfusion/ej2-react-maps';
import { world_map } from './world_map'

import './App.css';
let uncountries: object[] = [
  { Name: "United States", SeverityLevel: "High"},
  { Name: "India", SeverityLevel: "High" },
  { Name: "Brazil", SeverityLevel: "High"},
  { Name: "United Kingdom", SeverityLevel: "High"},
  { Name: "Russia", SeverityLevel: "High"},
  { Name: "Turkey", SeverityLevel: "High"},
  { Name: "France", SeverityLevel: "High"},
  { Name: "Iran", SeverityLevel: "Moderate"},
  { Name: "Spain", SeverityLevel: "Moderate"},
  { Name: "Italy", SeverityLevel: "Moderate"},
  { Name: "Argentina", SeverityLevel: "Moderate"},
  { Name: "Colombia", SeverityLevel: "Moderate"},
  { Name: "Indonesia", SeverityLevel: "Low"},
  { Name: "Poland", SeverityLevel: "Low"},
  { Name: "Mexico", SeverityLevel: "Low"},
  { Name: "Ukraine", SeverityLevel: "Low"},
  { Name: "South Africa", SeverityLevel: "Low"},
  { Name: "Netherlands", SeverityLevel: "Low"}
];

function App() {
  return (
    <div className="App">
    <MapsComponent titleSettings={ { text: 'Covid-19 Affected Countries' } } 
     zoomSettings={{
      enable: true,
      //zoomOnClick: true,
      enablePanning: false, 
      minZoom: 2,
      maxZoom: 5, 
      toolbarSettings: { 
        buttonSettings:{
          toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Reset'],
          borderColor:'green', 
          borderWidth: 5
        } ,
      tooltipSettings:{fontColor:'red',fontSize: '15'},
      orientation:'Vertical', 
      verticalAlignment:'Far',
      borderColor:'red', 
      borderWidth: 3 
       },
    }} 
     >
    <Inject services={[DataLabel,Zoom]} />
      <LayersDirective>
        <LayerDirective shapeData={world_map} dataSource={uncountries}
        shapeDataPath='Name' shapePropertyPath='name' 
        dataLabelSettings={
          {visible: true,   
            intersectionAction: 'Trim'
          }}
        shapeSettings={ {
          colorValuePath: 'SeverityLevel',
            colorMapping: [
            { value: 'High', color: '#A69d70'},
            { value: 'Moderate', color: '#A4D6AD'},
            { value: 'Low', color: '#DEEBAE'},
          ],
        fill: '#E5E5E5'
      } }
      >
        </LayerDirective>
      </LayersDirective>
      </MapsComponent>
    </div>
  );
}

export default App;
