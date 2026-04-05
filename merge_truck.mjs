import sharp from 'sharp';

async function build() {
    // Original image is 1024x1024. Center is around X=214, Y=752.
    
    // Create a resized logo
    const logoBase = await sharp('public/logo.png')
        .resize(120, 120, { fit: 'contain' })
        .toBuffer();
    
    // Create a white rectangle to cover the original generic text
    // The panel corners measured roughly X: 160-265, Y: 660-850
    const rectSvg = Buffer.from('<svg width="140" height="160"><rect x="0" y="0" width="140" height="160" fill="#ffffff" fill-opacity="0.9"/></svg>');
    
    await sharp('public/images/fleet-header.png')
        .composite([
            { input: rectSvg, left: 140, top: 670, blend: 'over' },
            { input: logoBase, left: 150, top: 690, blend: 'over' }
        ])
        .toFile('public/images/branded-fleet-header.png');
        
    console.log("Success");
}

build().catch(console.error);
