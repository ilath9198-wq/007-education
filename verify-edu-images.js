const https = require('https');

const imageUrls = [
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85', // University students smiling
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2000&q=85', // Modern classroom meeting
  'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=2000&q=85', // College student reading on lawn
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=85', // University campus building
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=85', // Teacher in modern lecture hall
  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85', // College building & students
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=85', // Digital learning & laptops
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=2000&q=85', // Library study hall
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=85', // Classroom instruction & students
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=85', // Collaborative group study
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=85', // Engineering / tech student
  'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=2000&q=85', // Science laboratory research
  'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=2000&q=85', // Computer lab training
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=2000&q=85', // Students smiling in hallway
  'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2000&q=85', // Library books & wooden shelves
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=2000&q=85', // Seminar / presentation
  'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=2000&q=85', // Outdoor campus grounds
  // Faculty portraits
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85', // Professional woman instructor
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85', // Professional male professor
  'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=85', // Tech mentor / lab director
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85', // Language & soft skills faculty
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85', // Mathematics & Science lead
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      const ok = res.statusCode >= 200 && res.statusCode < 400;
      resolve({ url, status: res.statusCode, ok });
    }).on('error', () => {
      resolve({ url, status: 'ERROR', ok: false });
    });
  });
}

(async () => {
  console.log(`Checking ${imageUrls.length} images...`);
  const results = await Promise.all(imageUrls.map(checkUrl));
  let broken = 0;
  for (const r of results) {
    if (r.ok) {
      console.log(`OK [${r.status}]: ${r.url.split('?')[0].split('/').pop()}`);
    } else {
      console.log(`FAIL [${r.status}]: ${r.url}`);
      broken++;
    }
  }
  console.log(`\nScan complete: ${results.length - broken}/${results.length} OK, ${broken} broken.`);
  process.exit(broken > 0 ? 1 : 0);
})();
