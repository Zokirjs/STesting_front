import React from "react";
import Statistic from "./components/statistic";
import Chart from "./components/chart";
import Map from "./components/map";

export default function App() {
    return <div>
        <Statistic />
        <h1 className="heading">Natijalar dinamikasi (Respublika miqyosida)</h1>
        <Chart />
        <h1 className="heading">Testlar statistikasi</h1>
        <Map />
    </div>;
}
