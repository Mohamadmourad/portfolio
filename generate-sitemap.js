const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');

// Array with your URLs
const links = [
  { url: '/resume', changefreq: 'daily', priority: 0.8 },
  { url: '/projects', changefreq: 'daily', priority: 0.8 }
];

// Create a writable stream to a file
const writeStream = fs.createWriteStream('sitemap.xml');

// Create a stream to write sitemap
const smStream = new SitemapStream({ hostname: 'https://mohamadmourad.com' });

// Pipe the stream to a file
smStream.pipe(writeStream);

// Convert links array to a readable stream
Readable.from(links).pipe(smStream);

// Wait until the stream is finished and then resolve the promise
streamToPromise(smStream).then(() => {
  console.log('Sitemap generated successfully!');
});
