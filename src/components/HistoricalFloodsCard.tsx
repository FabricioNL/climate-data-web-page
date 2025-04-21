import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Registrando os componentes do chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HistoricalFloodsCard = () => {
  // Dados fictícios de alagamentos por ano de 2004 a 2025
  const data = {
    labels: Array.from({ length: 22 }, (_, i) => (2004 + i).toString()), // De 2004 a 2025
    datasets: [
      {
        label: "Alagamentos por Ano",
        data: [
          5, 12, 8, 7, 15, 20, 18, 30, 45, 50, 60, 65, 70, 85, 95, 110, 120, 125, 130, 140, 150, 160,
        ], // Dados fictícios
        borderColor: "#00C49F", // Cor verde
        backgroundColor: "rgba(0, 196, 159, 0.2)", // Fundo verde claro para a linha
        fill: true, // Preencher a área abaixo da linha
        tension: 0.4, // Para suavizar a linha
        pointRadius: 4, // Tamanho dos pontos
        pointBackgroundColor: "#00C49F", // Cor dos pontos
        pointBorderColor: "#fff", // Cor da borda dos pontos
        pointBorderWidth: 2, // Largura da borda dos pontos
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Ano",
        },
      },
      y: {
        title: {
          display: true,
          text: "Número de Alagamentos",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <Card className="p-4 shadow-lg rounded-2xl bg-white h-499000">
      <CardContent>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Alagamentos por ano na Cidade (2004 - 2025)</CardTitle>
        </CardHeader>
        <div className="mt-4">
          <Line
            data={data}
            options={options}
            className="w-full h-[500px]"  // Definindo a largura e altura do gráfico
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default HistoricalFloodsCard;
