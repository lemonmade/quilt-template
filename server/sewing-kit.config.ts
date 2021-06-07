import {createService, quiltService} from '@quilted/craft';

export default createService((service) => {
  service.entry('./server');
  service.use(quiltService());
});
