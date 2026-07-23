#!/usr/bin/env bash
#
# update.sh
#   sudo ./update.sh          # rebuild + redeploy (applique le contenu PocketBase à jour)
#   sudo ./update.sh --pull   # git pull rebuild + redeploy
#
set -euo pipefail

cd "$(dirname "$0")"

if [[ ! -f .env ]]; then
  echo "Fichier .env manquant (POCKETBASE_URL requis pour le build)." >&2
  exit 1
fi

if [[ "${1:-}" == "--pull" ]]; then
  echo "Récupération des derniers commits."
  git pull --ff-only
fi

echo "Rebuild + redéploiement (fetch PocketBase)"
CACHEBUST="$(date +%s)" docker compose up -d --build

echo "Nettoyage des images inutilisées."
docker image prune -f

echo "Site à jour !"
docker compose ps
