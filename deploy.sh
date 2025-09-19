#!/bin/bash

# SEVO Elektro -> Sunucu rsync
echo "🔄 SEVO Elektro projesi sunucuya senkronize ediliyor..."
rsync -avh --delete \
  /Users/kerimakkis/Sites/sevoelektro/ \
  kerim@192.168.178.20:/mnt/data/volumes/websites/sevoelektro/app/

# Sunucuda rebuild + restart
echo "🚀 Sunucuda rebuild ve restart işlemi başlatılıyor..."
ssh kerim@192.168.178.20 \
  "docker compose -f /opt/sevoelektro/docker-compose.yml up -d --build && docker logs --tail=50 web-sevoelektro"

echo "✅ Deployment tamamlandı!"

