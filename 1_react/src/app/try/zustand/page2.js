import { useStore } from './store';

function Page2() {
  const { sharedState } = useStore();

  return (
    <div>
      <h1>Page 2</h1>
      <p>Shared State in Page 2: {sharedState}</p>
    </div>
  );
}

export default Page2;