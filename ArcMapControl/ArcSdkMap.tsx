import * as React from 'react';
import { Label } from '@fluentui/react-components';
import './style.css';
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
 
export interface IHeslloWorldProps {
  name?: string;
}
 
export class ArcSdkMap extends React.Component<IHeslloWorldProps> {
  private view: MapView | null = null;
 
  // This method is called after the component has been mounted
  public componentDidMount() {
    this.initializeMap();
  }
 
  private initializeMap() {
    
    this.view = new MapView({
      container: "viewDiv",
      map: new Map({
        basemap: "topo-vector"
      }),
      zoom: 4,
      center: [15, 65] // longitude, latitude
    });
  }
 
  public render(): React.ReactNode {
    return (
      <Label>
        <div className="my-custom-style">
          Arc GIS Map SDK PCF Sample
        </div>
        <div id="viewDiv" style={{ height: '400px' }}></div> {/* Added style to set height */}
      </Label>
    );
  }
}