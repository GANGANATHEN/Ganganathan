import { useStore } from './store';

function Page1() {
  const { sharedState, setSharedState } = useStore();

  const updateState = () => {
    setSharedState('Data from Page 1 (Zustand)');
  };

  return (
    <div>
      <h1>Page 1</h1>
      <p>Shared State: {sharedState}</p>
      <button onClick={updateState}>Update Shared State</button>
    </div>
  );
}

export default Page1;