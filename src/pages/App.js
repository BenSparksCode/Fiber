
import { TitleAndStatsCard } from '../components/TitleAndStatsCard';
import { SearchAndFilterControls } from '../components/SearchAndFilterControls';
import { FlashLoanFeed } from '../components/FlashLoanFeed'


function App() {
  return (
    <div className="App">
      <TitleAndStatsCard />

      <br />

      <SearchAndFilterControls />

      <br />
      <FlashLoanFeed />

    </div>
  );
}

export default App;
