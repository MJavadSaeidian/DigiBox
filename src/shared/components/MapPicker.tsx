"use client";

import {
    MapContainer,
    TileLayer,
    Marker,
    useMapEvents,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import styles from "./MapPicker.module.scss";


// Fix Leaflet marker icon
const markerIcon =
    L.icon({
        iconUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

        iconRetinaUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

        shadowUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

        iconSize: [25, 41],

        iconAnchor: [12, 41],

        popupAnchor: [1, -34],

        shadowSize: [41, 41],
    });


type MapPickerProps = {

    latitude: number;

    longitude: number;

    onSelect: (
        latitude: number,
        longitude: number
    ) => void;

};


function LocationMarker({
    latitude,
    longitude,
    onSelect,
}: MapPickerProps) {


    useMapEvents({

        click(event) {

            onSelect(
                event.latlng.lat,
                event.latlng.lng
            );

        },

    });


    return (

        <Marker
            position={[
                latitude,
                longitude
            ]}
            icon={markerIcon}
        />

    );

}


export default function MapPicker({
    latitude,
    longitude,
    onSelect,
}: MapPickerProps) {

    return (

        <div
            className={
                styles.map
            }
        >

            <MapContainer

                center={[
                    latitude,
                    longitude
                ]}

                zoom={13}

                scrollWheelZoom={true}

                className={
                    styles.container
                }
            >

                <TileLayer

                    attribution='&copy; OpenStreetMap contributors'

                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                />


                <LocationMarker

                    latitude={
                        latitude
                    }

                    longitude={
                        longitude
                    }

                    onSelect={
                        onSelect
                    }

                />

            </MapContainer>

        </div>

    );

}

