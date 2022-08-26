import { Navbar } from '../components/Navbar';
import { ContactBar } from '../components/ContactBar';

export function Home() {
  return (
    <>
      <ContactBar />
      <Navbar />
      <video style={{ width: '100%', height: '500px' }}>
        <source src='' type='video.mp4'></source>
      </video>
    </>
  );
}
