import { Paper } from '@mui/material';
import { Navbar } from '../../components/Navbar';
import { Video } from '../../components/Video';
import { FirstSection } from '../../components/FirstSection/index';
import { SecondSection } from '../../components/SecondSection/index';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <Paper>
      <Navbar />
      <Video />
      <FirstSection />
      <SecondSection />
      <Footer />
    </Paper>
  );
}
