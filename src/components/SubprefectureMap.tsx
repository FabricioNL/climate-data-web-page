import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

const SubprefectureMap = () => {
  const [floodData, setFloodData] = useState({});
  const [geoJsonData, setGeoJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://web-scrapper-cge.onrender.com/api/floods/by-subprefecture");
        const data = await response.json();
        const floodMap = data.reduce((acc, item) => {
          acc[item.subprefecture] = item.count;
          return acc;
        }, {});
        setFloodData(floodMap);
      } catch (error) {
        console.error("Erro ao carregar os dados de alagamento", error);
      }
    };

    const fetchGeoJson = async () => {
      try {
        const response = await fetch("/geojson/sp_subprefeituras.json"); // Arquivo GeoJSON local
        const data = await response.json();
        setGeoJsonData(data);
      } catch (error) {
        console.error("Erro ao carregar o GeoJSON", error);
      }
    };

    fetchData();
    fetchGeoJson();
  }, []);

  const getColor = (count) => {
    if (count > 50) return "#d73027"; // Vermelho
    if (count > 20) return "#fc8d59"; // Laranja
    if (count > 10) return "#fee08b"; // Amarelo
    return "#91cf60"; // Verde
  };

  const style = (feature) => {
    const count = floodData[feature.properties.NOME] || 0;
    return {
      fillColor: getColor(count),
      weight: 1,
      opacity: 1,
      color: "#333",
      fillOpacity: 0.7,
    };
  };

  return (
    <div className="w-full h-[500px] rounded-lg shadow-lg overflow-hidden">
      <MapContainer
        center={[-23.55, -46.63]}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false} // Desabilitar controle de zoom
        scrollWheelZoom={false} // Desabilitar zoom por scroll
        noWrap={true} // Garantir que o mapa não se estique
      >
        {/* Aqui, removemos o TileLayer, sem fundo de mapa */}
        {geoJsonData && <GeoJSON data={geoJsonData} style={style} />}
      </MapContainer>
    </div>
  );
};

export default SubprefectureMap;
