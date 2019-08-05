import React, { Component } from "react"
import ReactMapGL, { Marker } from "react-map-gl"

export default class Map extends Component {

  public state = {
    viewport: {
      height: 700,
      latitude: 37.7577,
      longitude: -122.4376,
      width: 700,
      zoom: 8,
    },
  }

  public render() {
    const markers = [
      { name: "Lafayette (LAFY)", coordinates: [-122.123801, 37.893394] },
      { name: "12th St. Oakland City Center (12TH)", coordinates: [-122.271604, 37.803664] },
      { name: "16th St. Mission (16TH)", coordinates: [-122.419694, 37.765062] },
      { name: "19th St. Oakland (19TH)", coordinates: [-122.269029, 37.80787] },
      { name: "24th St. Mission (24TH)", coordinates: [-122.418466, 37.752254] },
    ]
    return (
      <div className="split right">
        <div className="centered">
          <ReactMapGL
            {...this.state.viewport}
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={(viewport) => this.setState({ viewport })}
            reuseMaps={true}
          >
            {markers.map(this.renderMarker)}}
          </ReactMapGL>
        </div>
      </div>
    )
  }

  private onMarkerDragEnd = (event: { lngLat: number[] }) => {
    console.log(this.state)
    this.setState({
      marker: {
        latitude: event.lngLat[1],
        longitude: event.lngLat[0],
      },
    })
  }

  private renderMarker = (marker: { name: string, coordinates: number[] }, i: number) => {
    const { name, coordinates } = marker
    return (
      <Marker
        key={i}
        longitude={coordinates[0]}
        latitude={coordinates[1]}
        draggable={true}
        onDragEnd={this.onMarkerDragEnd}
      >
        <div className="station">
          <span>{name}</span>
        </div>
      </Marker>
    )
  }
}
