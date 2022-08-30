import { Paper } from '@mui/material';
import { Navbar } from '../../components/Navbar';
import { Video } from '../../components/Video';
import { FirstSection } from '../../components/FirstSection/index';
import { SecondSection } from '../../components/SecondSection/index';

export function Home() {
  return (
    <Paper>
      <Navbar />
      <Video />
      <FirstSection />
      <SecondSection />
    </Paper>
  );
}
