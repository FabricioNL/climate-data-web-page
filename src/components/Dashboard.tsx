import { useEffect, useState } from 'react';
import StatisticsCard from '../components/StatisticsCard';
import PieChartCard from '../components/PieChartCard';
import DownloadDataCard from '../components/DownloadDataCard'; // Importando o componente
import HistoricalFloodsCard from '../components/HistoricalFloodsCard'; // Novo componente
import FloodMapCard from "../components/FloodMapCard";

const Dashboard = () => {
    const [thisMonthFloods, setThisMonthFloods] = useState(0);
    const [previousMonthFloods, setPreviousMonthFloods] = useState(0);
    const [topSubprefectures, setTopSubprefectures] = useState([]);
    const [apiError, setApiError] = useState(false);
  
    useEffect(() => {
      const loadData = async () => {
        try {
          const [thisMonthRes, previousMonthRes, subprefRes] = await Promise.all([
            fetch('https://web-scrapper-cge.onrender.com/api/floods/this-month'),
            fetch('https://web-scrapper-cge.onrender.com/api/floods/previous-month'),
            fetch('https://web-scrapper-cge.onrender.com/api/floods/by-subprefecture'),
          ]);
  
          const [thisMonthJson, previousMonthJson, subprefJson] = await Promise.all([
            thisMonthRes.json(),
            previousMonthRes.json(),
            subprefRes.json(),
          ]);
  
          setThisMonthFloods(thisMonthJson.total);
          setPreviousMonthFloods(previousMonthJson.total);
          setTopSubprefectures(subprefJson.sort((a, b) => b.count - a.count).slice(0, 5));
        } catch (error) {
          console.error('Erro ao carregar os dados:', error);
          setApiError(true);
        }
      };
  
      loadData();
    }, []);
  
    const percentageIncrease =
      previousMonthFloods > 0
        ? ((thisMonthFloods - previousMonthFloods) / previousMonthFloods) * 100
        : 0;
  
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Primeira coluna: Cards maiores */}
        <div>
          <FloodMapCard />
        </div>
        {/* Última coluna: Cards mais estreitos */}
        <StatisticsCard
          thisMonthFloods={thisMonthFloods}
          previousMonthFloods={previousMonthFloods}
          percentageIncrease={percentageIncrease}
          apiError={apiError}
        />

        <PieChartCard topSubprefectures={topSubprefectures} apiError={apiError} />
  

        <div className="lg:col-span-2">
          <HistoricalFloodsCard />
        </div>
  
        {/* Última coluna: Cards mais estreitos */}
    
        {/* Card de download (pode ficar no meio ou onde preferir) */}
        <DownloadDataCard />
      </div>
    );
  };
  
export default Dashboard;
