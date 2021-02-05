
import { TitleAndStatsCard } from '../components/TitleAndStatsCard';
import { SearchAndFilterControls } from '../components/SearchAndFilterControls';
import { FlashLoanFeed } from '../components/FlashLoanFeed'
import { PaginationControls } from '../components/PaginationControls'


export const V2Page = () => {
  return (
    <div className="App">
      <TitleAndStatsCard />

      <SearchAndFilterControls />

      <FlashLoanFeed />

      <PaginationControls />
    </div>
  );
}
