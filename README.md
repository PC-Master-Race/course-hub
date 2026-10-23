# Our Next Place

A simple page that shows rental listings found by a daily search. Listings load live from Supabase (tables `rental_listings` and `rental_runs`, public read only). If that is unreachable, the page falls back to `data/listings.json`.
