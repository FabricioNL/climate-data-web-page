import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DownloadDataCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Função para baixar os dados
  const handleDownload = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Fazendo a requisição para a API
      const response = await fetch("https://web-scrapper-cge.onrender.com/api/floods/all");
      if (!response.ok) {
        throw new Error("Erro ao carregar os dados.");
      }

      // Convertendo a resposta para JSON
      const data = await response.json();

      // Criando um arquivo JSON e fazendo o download
      const file = new Blob([JSON.stringify(data)], { type: "application/json" });
      const url = URL.createObjectURL(file);
      const link = document.createElement("a");
      link.href = url;
      link.download = "flood_data.json"; // Nome do arquivo
      link.click();

      // Limpeza do link
      URL.revokeObjectURL(url);
    } catch (error) {
      setError("Erro ao baixar os dados: {error.message}");
      console.error("Erro ao baixar os dados:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-4 shadow-lg rounded-2xl bg-white h-60">
      <CardContent>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Download de Dados</CardTitle>
        </CardHeader>

        <div className="mt-4 text-center">
          {error && <p className="text-red-500">{error}</p>}

          <button
            onClick={handleDownload}
            disabled={isLoading}
            className={`mt-4 px-6 py-2 rounded-lg text-white ${isLoading ? "bg-gray-400" : "bg-green-600"} hover:bg-blue-700`}
          >
            {isLoading ? "Baixando..." : "Baixar Dados"}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DownloadDataCard;
