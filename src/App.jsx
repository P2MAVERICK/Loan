import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'
import { Box, Button} from '@mantine/core';
import Navbar from './components/navbar';
import Top from './components/top';
import Bottom from './components/bottom';
import { Calendar } from '@mantine/dates';
export default function App() {
  return (
   <div>
      <Navbar/>
      <Top/>
      <Bottom/>
   </div>
  );
}