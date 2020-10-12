import React from 'react';
import '../styles/pages/orphanages-map.css';
import mapMarkerImg from '../images/map-marker.svg';
import { Map, TileLayer,  } from 'react-leaflet';
import {FiPlus} from 'react-icons/fi'

import 'leaflet/dist/leaflet.css'
import { Link } from 'react-router-dom';

const OrphanagesMap: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Itapuranga</strong>
          <span>Goiás</span>
        </footer>
      </aside>
      <Map center={[-15.5628755,-49.943474]} zoom={14} style={{width: '100%', height: '100%'}}>
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"  >

        </TileLayer>
      </Map>
      <Link to='' className="create-orphanage">
        <FiPlus size={32} color="FFF"/>
      </Link>
    </div>
  );
}

export default OrphanagesMap;