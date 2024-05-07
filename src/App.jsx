import Navbar from './components/Navbar/Navbar';
import Layout from './components/ui/Layout';

function App() {
  return (
    <main>
      <Navbar />
      <Layout maxWidth='max-w-[1440px]'>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      </Layout>
    </main>
  );
}

export default App;
