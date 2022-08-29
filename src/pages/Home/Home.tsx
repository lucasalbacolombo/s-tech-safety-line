import { Paper } from '@mui/material';
import { Navbar } from '../../components/Navbar';
import { Video } from '../../components/Video';
import { FirstBlock } from '../../components/FirstBlock';

export function Home() {
  return (
    <Paper>
      <Navbar />
      <Video />
      <FirstBlock />
    </Paper>
  );
}
