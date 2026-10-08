# Explore Uppsala

A small mobile-friendly website for international students, with an illustrated map, five clickable places, English descriptions and category filters.

## Open the website

Open `index.html` in a browser. No installation or build step is required. You can also use VS Code Live Server.

## Files

- `index.html`: page structure
- `styles.css`: appearance and mobile layout
- `places.js`: place names, descriptions, categories and website links
- `app.js`: buttons, category filtering and marker positions
- `assets/uppsala-map.png`: AI-generated illustrated map

## Edit places

Change the objects in `places.js`. Each place also needs a corresponding entry in the `positions` array in `app.js`: `[horizontalPercentage, verticalPercentage]`, measured from the top-left of the image.

## Accuracy

This is a prototype. The image was generated from a reference screenshot and is not an accurate navigational map. Marker positions are manually estimated; check and adjust them before sharing. Verify descriptions and official links. Opening hours and admission prices are not included.

## Git

This archive includes a local Git repository and its first commit, but no GitHub remote. Open this folder in VS Code, create an empty GitHub repository, then add its URL as `origin` and push `main`.
