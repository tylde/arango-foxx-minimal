# arango-foxx-minimal

### Cluster start
```
arangod --server.endpoint tcp://127.0.0.15001 --agency.my-address=tcp://127.0.0.1:5001 --server.authentication false --agency.activate true --agency.size 3 --agency.endpoint tcp://127.0.0.1:5001 --agency.supervision true --database.directory agent1

arangod --server.endpoint tcp://127.0.0.15002 --agency.my-address=tcp://127.0.0.1:5002 --server.authentication false --agency.activate true --agency.size 3 --agency.endpoint tcp://127.0.0.1:5001 --agency.supervision true --database.directory agent2

arangod --server.endpoint tcp://127.0.0.15003 --agency.my-address=tcp://127.0.0.1:5003 --server.authentication false --agency.activate true --agency.size 3 --agency.endpoint tcp://127.0.0.1:5001 --agency.supervision true --database.directory agent3

arangod --server.authentication=false --server.endpoint tcp://127.0.0.1:6001 --cluster.my-address tcp://127.0.0.1:6001 --cluster.my-role DBSERVER --cluster.agency-endpoint tcp://127.0.0.1:5001 --cluster.agency-endpoint tcp://127.0.0.1:5002 --cluster.agency-endpoint tcp://127.0.0.1:5003 --database.directory dbserver1

arangod --server.authentication=false --server.endpoint tcp://127.0.0.1:6002 --cluster.my-address tcp://127.0.0.1:6002 --cluster.my-role DBSERVER --cluster.agency-endpoint tcp://127.0.0.1:5001 --cluster.agency-endpoint tcp://127.0.0.1:5002 --cluster.agency-endpoint tcp://127.0.0.1:5003 --database.directory dbserver2

arangod --server.authentication=false --server.endpoint tcp://127.0.0.1:7001 --cluster.my-address tcp://127.0.0.1:7001 --cluster.my-role COORDINATOR --cluster.agency-endpoint tcp://127.0.0.1:5001 --cluster.agency-endpoint tcp://127.0.0.1:5002 --cluster.agency-endpoint tcp://127.0.0.1:5003 --database.directory coordinator1

arangod --server.authentication=false --server.endpoint tcp://127.0.0.1:7002 --cluster.my-address tcp://127.0.0.1:7002 --cluster.my-role COORDINATOR --cluster.agency-endpoint tcp://127.0.0.1:5001 --cluster.agency-endpoint tcp://127.0.0.1:5002 --cluster.agency-endpoint tcp://127.0.0.1:5003 --database.directory coordinator2
```

### Installation
```
Installing Foxx CLI:
yarn 
Mounting service /minimal in ArangoDB
yarn run install
```
