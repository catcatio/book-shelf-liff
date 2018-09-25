curl -X POST https://api.line.me/liff/v1/apps \
-H "Authorization: Bearer " \
-H "Content-Type: application/json" \
-d '{
  "view":{
    "type":"full",
    "url":"https://mozilla.github.io/pdf.js/web/viewer.html"
  }
}'
