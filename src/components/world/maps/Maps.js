/*all available Maps to import, to change them 'dynamically'*/
import map1_1 from './Map1_1';
import Map1_2 from './Map1_2';
//import all Testmaps
import TestNoMovement from '../../../tests/maps/MapNoMovement'
import TestAllMovement from '../../../tests/maps/MapAllMovement'
import TestAllMonsters from '../../../tests/maps/MapAllMonsters'


export const Maps = {
  '1_1': map1_1,
  '1_2': Map1_2,
  'TestNoMovement': TestNoMovement,
  'TestAllMovement': TestAllMovement,
  'TestAllMonsters': TestAllMonsters
};


