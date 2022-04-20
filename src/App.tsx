import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { card, map, trailSign, people } from 'ionicons/icons';
import Map from './pages/Map';
import Visit from './pages/Visit';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import AR from './pages/AR';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/map">
            <Map />
          </Route>
          <Route exact path="/visit">
            <Visit />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/volunteer">
            <Volunteer />
          </Route>
          <Route path="/AR">
            <AR />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/map">
            <IonIcon icon={map} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/visit">
            <IonIcon icon={trailSign} />
            <IonLabel>Visit</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/donate">
            <IonIcon icon={card} />
            <IonLabel>Donate</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/volunteer">
            <IonIcon icon={people} />
            <IonLabel>Volunteer</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
