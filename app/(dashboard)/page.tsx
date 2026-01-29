import Header, {
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";

import TotalRevenueCard from "./_components/total-revenue-card";
import { Suspense } from "react";
import TodayRevenueCard from "./_components/today-revenue-card";
import TotalSalesCard from "./_components/total-sales-card";
import TotalStockCard from "./_components/total-stock-card";
import TotalProductCard from "./_components/total-product-card";
import { SummaryCardSkeleton } from "./_components/summary-card";
import Last14DaysRevenueChart from "./_components/last-14-days-revenue-card";
import { Skeleton } from "../_components/ui/skeleton";
import MostSoldProducts, {
  MostSoldProductsSkeleton,
} from "./_components/most-sold-products";

const Home = async () => {
  return (
    <div className="m-8 flex w-full flex-col space-y-8 rounded-lg">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Visão geral dos dados</HeaderSubtitle>
          <HeaderTitle>Dashboard</HeaderTitle>
        </HeaderLeft>
      </Header>
      <div className="grid grid-cols-2 gap-6">
        {/* Receita Total */}
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalRevenueCard />
        </Suspense>
        {/* Receita Hoje */}
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TodayRevenueCard />
        </Suspense>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {/* Vendas Totais */}
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalSalesCard />
        </Suspense>
        {/* Total em Estoque */}
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalStockCard />
        </Suspense>
        {/*Produtos */}
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalProductCard />
        </Suspense>
      </div>

      {/* Gráfico */}
      <div className="grid min-h-0 grid-cols-[minmax(0,2.5fr),minmax(0,1fr)] gap-6">
        <Suspense
          fallback={
            <Skeleton className="rounded-xl bg-white p-6">
              <div className="space-y-2">
                <div className="h-5 w-[140px] rounded-md bg-gray-200" />
                <div className="h-3 w-[180px] rounded-md bg-gray-200" />
              </div>
            </Skeleton>
          }
        >
          <Last14DaysRevenueChart />
        </Suspense>
        <Suspense fallback={<MostSoldProductsSkeleton />}>
          <MostSoldProducts />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
