import './App.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Patients from './Components/Patients';

function App() {
  return (
<main className='container row'>
  <aside className='col-4'>
    <Patients />
  </aside>
  <content className=  'h-100 mt-5 col-8'>
   <Calendar />
   </content>
</main>
  );
}

export default App;
