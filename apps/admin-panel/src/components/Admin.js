import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = simpleRestProvider('http://path-to-your-api');

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      {/* Define your resources here */}
      <Resource name="users" />
    </Admin>
  );
}

export default App;
