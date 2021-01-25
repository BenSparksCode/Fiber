
import { FlashLoanFeed } from '../components/FlashLoanFeed'
import { SearchAndFilterControls } from '../components/SearchAndFilterControls';

function App() {
  return (
    <div className="App">
      <h1 className='AppTitle'> FIBER </h1>


      <br />

      <SearchAndFilterControls />

      <br />
      <FlashLoanFeed />

    </div>
  );
}

export default App;
