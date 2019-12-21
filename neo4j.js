xconst neo4j = require('neo4j-driver');

const driver = neo4j.driver("bolt://192.168.1.81:7687", neo4j.auth.basic("neo4j", "Beyond1915"));
const session = driver.session();

const personName = 'Alice';
const resultPromise = session.run(
  'CREATE (a:Person {name: $name}) RETURN a',
  {name: personName}
);

resultPromise.then(result => {
  session.close();

  const singleRecord = result.records[0];
  const node = singleRecord.get(0);

  console.log(node.properties.name);

  // on application exit:
  driver.close();
});
