import { Paper } from '@mui/material';
import { HomeNavbar } from '../../components/HomeNavbar';
import { Video } from '../../components/Video';
import { FirstSection } from '../../components/FirstSection/index';
import { SecondSection } from '../../components/SecondSection/index';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <Paper>
      <HomeNavbar />
      <Video />
      <FirstSection />
      <SecondSection />
      <Footer />
    </Paper>
  );
}
