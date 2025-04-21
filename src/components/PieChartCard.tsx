// PieChartCard.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = [
  "#34D399", // Verde (green-500)
  "#10B981", // Verde escuro (green-600)
  "#6EE7B7", // Verde claro
  "#3B82F6", // Azul (blue-500)
  "#FBBF24", // Amarelo (amber-400)
];


const PieChartCard = ({ topSubprefectures, apiError }) => {
  return (
    <Card className="p-4 shadow-lg rounded-2xl bg-white">
      <CardContent>
        <h2 className="text-xl font-semibold">Top 5 subprefeituras com mais alagamentos desde 2004</h2>
        {apiError ? (
          <p className="text-red-500">Erro ao carregar os dados.</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={topSubprefectures}
                dataKey="count"
                nameKey="subprefeitura"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {topSubprefectures.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default PieChartCard;
