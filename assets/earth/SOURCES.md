# Источники данных Земли (главная, src/js/home-earth/)

Собирает `node tools/build-earth.mjs` (сам скачивает исходники в tools/out/earth-src/).

| Файл | Источник | Лицензия |
|---|---|---|
| land.webp, europe.webp, lines.bin, cities.json | Natural Earth 1:50m (суша, берега, сухопутные границы, реки, озёра), 1:10m (контур Чехии, populated places) — naturalearthdata.com, github.com/nvkelso/natural-earth-vector | Public domain |
| day.webp, day-eu.webp | NASA Visible Earth, Blue Marble: Next Generation (июль 2004), world.200407 | Public domain (NASA); источник указывать: «NASA Earth Observatory» |
| day-ce.webp | NASA Visible Earth, Blue Marble: Next Generation (июль 2004), тайл 500 м world.200407.3x21600x21600.C1 (0…90° в. д., 0…90° с. ш.), окно 9.5…22.5° в. д. × 46.5…53.5° с. ш., 2048×1103, ~0.45 км/пикс, 316 КБ | Public domain (NASA) |
| day-8k.webp (8192×4096, 1.4 МБ), day-4k.webp (4096×2048, 0.4 МБ — телефон) | NASA Blue Marble: Next Generation, июль 2004, world.200407.3x21600x10800 (тот же снимок, что у day-eu); `node tools/build-photo-hi.mjs`; подгружаются после первого кадра и подменяют day.webp | Public domain (NASA) |
| clouds-8k.webp (8192×4096, 3.8 МБ), clouds-4k.webp (4096×2048, 1.1 МБ) | NASA Blue Marble clouds, cloud.W/E.2001210.21600x21600.png (две половины); выше ~60° широты — cloud_combined_2048 (в половинах у полюсов облаков нет) | Public domain (NASA) |
| night.webp, night-eu.webp | NASA Earth Observatory, Black Marble 2012 (dnb_land_ocean_ice.2012) | Public domain (NASA) |
| clouds.webp | NASA Visible Earth, cloud_combined (Blue Marble clouds) | Public domain (NASA) |
| pardubice.webp | Уменьшенная копия public/assets/map/pardubice.webp — OpenStreetMap | ODbL, © участники OpenStreetMap |

Вес папки: 2.6 МБ (из них day-ce.webp — 0.3 МБ). Sentinel-2 cloudless (EOX) не взят: его версии 2018+ — CC BY-NC-SA (некоммерческая), а Blue Marble 500 м — общественное достояние и Чехию с высоты 800 км уже показывает с рельефом и реками.

## Ландшафт вокруг Пардубиц (вид ink) — `node tools/build-land.mjs`

| Файл | Источник | Лицензия |
|---|---|---|
| land-dem.webp (1024², ±13 км, 12 бит в R/G, сглажено ~250 м), land-far.webp (1024², ±48 км до Железных гор, 180–1150 м) | SRTM 1″ (NASA/USGS), тайлы N49E015/N50E015/N49E016/N50E016 через AWS Terrain Tiles | Public domain |
| land-hor.webp (512², горизонт на север: окно 120 км, x ±60, z −110…+10 км — Krkonoše, Jizerské hory, Orlické hory; 180–1610 м, 12 бит в R/G; только вид под конём) | SRTM 1″ (NASA/USGS), тайлы N49E014…N51E016 (N50E014, N51E014, N51E015, N51E016 — новые) через AWS Terrain Tiles; `node tools/build-land.mjs --hor` | Public domain |
| land-a.webp (вода от 1.5 га + реки осевыми линиями / крупные леса), land-b.webp (крупные поля с направлением и мягкой маской) | OpenStreetMap (Overpass): natural=water, waterway=riverbank, waterway=river, landuse=farmland/forest, natural=wood — выбраны верхние 20 % по площади | ODbL, © участники OpenStreetMap |
| land-routes.json (11 лучей — главные дороги и железные дороги края к Пардубицам, до 45 км, км местного базиса; неон под конём) | OpenStreetMap (Overpass): highway=motorway/trunk/primary, railway=rail без service; кратчайшие пути по сети от дальних узлов к центру; `node tools/build-routes.mjs` | ODbL, © участники OpenStreetMap |
| neon-near.webp (2048², ±13 км), neon-far.webp (2048², ±48 км): RG — вектор до ближайшей дороги, B — фаза импульса вдоль сети к Пардубицам (неон на земле, вид ink) | OpenStreetMap: главные дороги и железные дороги края (routes-osm.json) + улицы города (streets.bin); `node tools/build-neon.mjs` | ODbL, © участники OpenStreetMap |
| land.json | окно ±13 км вокруг середины карты Real Estate, диапазон высот 195–365 м | — |

Вес ландшафта: ~1.35 МБ (dem 0.59, a 0.16, b 0.40, hor 0.20).
