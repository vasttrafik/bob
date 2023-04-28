# Examples
## Authentication API - JWT
```json
{
  "jwtCompact": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjE0OmF1dGgtdGVzdC0wMSJ9.eyJpc3MiOiIxNCIsInN1YiI6InBvczE0IiwiZXhwIjoxNTM4NTY4MzE4LCJib2JIb2siOiI5MTcxZGRmZjk0MTZkYjY2ODlkMjZjYzhhM2YzOGJkZmQ4MDU0YmNmIiwidnRDaGFubmVsSWQiOiIxIiwiYm9iQXV0aFoiOiJwb3MifQ.2b47QYoJOewvP6AHMSEnmTD4FqvvkfIIj1coiQHUOs8Nd50H1_HoiA-sVoSksf0Hl1JQguCz4Tf8SU-fWbRm4w",
  "header": {
    "alg": "ES256",
    "kid": "14:auth-test-01"
  },
  "payload": {
    "iss": "14",
    "sub": "pos14",
    "exp": 1538568318,
    "bobHok": "9171ddff9416db6689d26cc8a3f38bdfd8054bcf",
    "vt-channel-id": "1",
    "bobAuthZ": "pos"
  }
}
```

## Product API - Route Property
"route":  
[  
  {  
    "groupId": { "type": "line", "id": "9015014132103039" },  
    "stopId": "9022014003085001"  
  },  
  {  
    "groupId": { "type": "line",  "id": "9015014132103039"  },  
    "stopId": "9022014014311002"  
  }  
]  
