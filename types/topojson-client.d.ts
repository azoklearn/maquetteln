declare module 'topojson-client' {
  export function feature<T extends GeoJSON.GeometryObject>(
    topology: Topology,
    object: GeometryCollection<T> | GeometryObject<T>
  ): GeoJSON.FeatureCollection | GeoJSON.Feature;
  export function merge(topology: Topology, objects: GeometryObject[]): GeoJSON.MultiPolygon;
  export function mesh(topology: Topology, object?: GeometryObject, filter?: (a: any, b: any) => boolean): GeoJSON.MultiLineString;
}

interface Topology {
  type: 'Topology';
  objects: { [key: string]: GeometryObject };
  arcs: number[][][];
  bbox?: number[];
  transform?: { scale: [number, number]; translate: [number, number] };
}

interface GeometryObject {
  type: string;
  id?: string | number;
  properties?: { [key: string]: any };
  geometries?: GeoJSON.GeometryObject[];
  arcs?: number | number[] | number[][];
  [key: string]: any;
}

interface GeometryCollection<T extends GeoJSON.GeometryObject = GeoJSON.GeometryObject> {
  type: 'GeometryCollection';
  geometries: T[];
}
