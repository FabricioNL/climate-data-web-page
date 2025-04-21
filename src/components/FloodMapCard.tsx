import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FloodMapCard = () => {
  const [geoData, setGeoData] = useState<any>(null);
  const [floodData, setFloodData] = useState<Record<string, number>>({});

  // Função para obter os dados GeoJSON e de alagamentos
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Carrega o arquivo GeoJSON
        const geoRes = await fetch("/subprefeituras-sp_fix.geojson");
        const geoJson = await geoRes.json(); //problema
        setGeoData(geoJson);

        // Obtém os dados de alagamentos
        const floodRes = await fetch("https://web-scrapper-cge.onrender.com/api/floods/by-subprefecture");
        const floodJson = await floodRes.json();

        // Mapeia os dados de alagamentos por nome da subprefeitura
        const floodMap: Record<string, number> = {};
        floodJson.forEach((item: { name: string; count: number }) => {
          floodMap[item.name] = item.count;
        });

        setFloodData(floodMap);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };

    fetchData();
  }, []);

  // Função para definir a cor baseada no número de alagamentos
  const getColor = (count: number) => {
    return count > 50
      ? "#800026"
      : count > 30
      ? "#BD0026"
      : count > 15
      ? "#E31A1C"
      : count > 5
      ? "#FC4E2A"
      : "#FFEDA0";
  };

  // Estilo dos polígonos das subprefeituras
  const style = (feature: any) => {
    const name = feature.properties.NOME; // Ajuste conforme o nome no GeoJSON
    const count = floodData[name] || 0;
    return {
      fillColor: getColor(count),
      weight: 2,
      opacity: 1,
      color: "white",
      fillOpacity: 0.7,
    };
  };

  return (
    <Card className="p-4 shadow-lg rounded-2xl bg-white col-span-2">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Mapa de Alagamentos</CardTitle>
      </CardHeader>
      <CardContent>
        {geoData ? (
          <MapContainer center={[-23.55, -46.63]} zoom={10} className="w-full h-[400px] rounded-lg">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <GeoJSON data={geoData} style={style} />
          </MapContainer>
        ) : (
          <p className="text-center text-gray-500">Carregando mapa...</p>
        )}
      </CardContent>
    </Card>
  );
};

export default FloodMapCard;
