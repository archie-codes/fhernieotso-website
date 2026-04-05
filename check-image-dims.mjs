import sharp from 'sharp';

async function check() {
  const truck = await sharp('public/images/fleet-header.png').metadata();
  const logo = await sharp('public/logo.png').metadata();
  
  console.log('Truck:', truck.width, 'x', truck.height);
  console.log('Logo:', logo.width, 'x', logo.height);
}

check().catch(console.error);
