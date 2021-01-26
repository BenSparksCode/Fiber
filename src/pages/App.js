
import { TitleAndStatsCard } from '../components/TitleAndStatsCard';
import { SearchAndFilterControls } from '../components/SearchAndFilterControls';
import { FlashLoanFeed } from '../components/FlashLoanFeed'


function App() {
  return (
    <div className="App">
      <TitleAndStatsCard />

      <SearchAndFilterControls />

      <FlashLoanFeed />
    </div>
  );
}

export default App;
