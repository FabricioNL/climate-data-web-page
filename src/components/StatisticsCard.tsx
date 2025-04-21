import { Card, CardContent,CardHeader,CardTitle } from "@/components/ui/card";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // Ícones de seta para cima e para baixo

const StatisticsCard = ({ thisMonthFloods, previousMonthFloods, percentageIncrease, apiError }) => {
  const isIncrease = percentageIncrease >= 0; // Verifica se a variação é positiva

  return (
    <Card className="p-4 shadow-lg rounded-2xl bg-white">
      <CardContent className="flex flex-col items-center text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Estatísticas de alagamentos na cidade</CardTitle>
        </CardHeader>

        {apiError ? (
          <p className="text-red-500">Erro ao carregar os dados.</p>
        ) : (
          <div className="mt-4 space-y-6">
            {/* Mês Atual */}
            <div className="flex flex-col items-center">
              <p className="text-lg mb-2">Total de alagamentos este mês:</p>
              <p className="text-4xl font-bold text-green-600">{thisMonthFloods}</p>
            </div>
            
            {/* Mês Passado */}
            <div className="flex flex-col items-center">
              <p className="text-lg mb-2">Total do mês passado:</p>
              <p className="text-4xl font-bold text-green-600">{previousMonthFloods}</p>
            </div>

            {/* Variação */}
            <div className="flex flex-col items-center">
              <p className="text-lg mb-2">Variação:</p>
              <div className="flex items-center">
                <p
                  className={`text-4xl font-bold ${
                    isIncrease ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {percentageIncrease.toFixed(2)}%
                </p>
                {isIncrease ? (
                  <FaArrowUp className="ml-2 text-red-500" />
                ) : (
                  <FaArrowDown className="ml-2 text-green-500" />
                )}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
