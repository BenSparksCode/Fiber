
import { TitleAndStatsCard } from '../components/TitleAndStatsCard';
import { SearchAndFilterControls } from '../components/SearchAndFilterControls';
import { FlashLoanFeed } from '../components/FlashLoanFeed'


export const V2Page = () => {
  return (
    <div className="App">
      <TitleAndStatsCard />

      <SearchAndFilterControls />

      <FlashLoanFeed />
    </div>
  );
}
