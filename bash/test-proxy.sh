#!/bin/bash
echo "Testing Smart Router via Indian Proxy..."
curl -x http://188.40.224.32:7777 \
  --proxy-user customer-smart_router_v1-cc-in-asn-4755-sessid-6y7u8i-sesstime-30:YuKHKwkttvKvY6 \ 
  -x https://cc=fr-s=adf2w3a:BVN079FYSBVN@res.ipb.cloud:3128 \ 
  -o /dev/null -s -w "%{speed_download}\n" \ 
  http://speedtest.tele2.net/100MB.zip | 
awk '{printf "Smart Router Speed (via Oxylabs India): %.2f Mbps\n", ($1 * 8) / 1000000}'
