# Full-viewport boutique story

The homepage tells a Pakistani boutique owner's journey through four Google Flow clips: an offline customer, connecting online, fulfilling orders, and expanding the shop. The same male owner and green-and-ivory boutique connect the scenes.

## Implementation

- `BoutiqueStory.tsx` provides accessible story copy, sales figures, chapter navigation, fullscreen control, contact invitation and the service catalogue.
- `ScrollFilm.tsx` maps scroll progress to 640 WebP frames. Nearby frames preload into a bounded decoded-image cache, and a brief dissolve joins each clip. Scrolling backwards reverses the story.
- The footage fills the viewport using a centred cover crop. Narrow screens show a closer view of the boutique.
- Reduced-motion visitors see one still per chapter. The opening poster remains visible while the canvas loads or if the first frame fails.
- Figures are explicitly illustrative, rather than a sales or fixed-cost guarantee.

## Assets

Each of `public/story/01-offline`, `02-connect`, `03-orders`, and `04-expand` contains 160 numbered WebP images, extracted at 16 fps and 1280px width from the supplied ten-second videos. The whole sequence is approximately 40 MB; it is loaded around the current scroll position rather than entirely at startup. The original downloads are unchanged and are not required at runtime.

## Validation

Run `npm run build` for the production build and TypeScript validation. In a browser, check all four chapters, reverse scrolling, chapter buttons, the skip-to-services link, and contact links. The optional browser fullscreen request depends on browser support.
