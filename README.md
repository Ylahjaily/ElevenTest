<h1>ElevenTest </h1>

<h2>Getting Started</h2>

<p>These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.</p>

<h3>Prerequisites</h3>

<p>What things you need to install the software and how to install them? </p>

<ul>
   <li> Composer </li>
   <li> Docker CE </li>
   <li> Docker Compose </li>
</ul>

<h3>Install</h3>

<ul>
  <li> git clone https://github.com/Ylahjaily/ElevenTest </li>
  <li> docker-compose up -d </li>
  <li> docker-compose exec web composer install </li>
  <li> docker-compose exec web php bin/console doctrine:database:create </li>
  <li> docker-compose exec web php bin/console doctrine:schema:update --force </li> 
  <li>yarn install </li>
  <li>yarn run webpack</li> 
</ul>
 
<h2>API endpoints</h2>

Full documentation is available at /api/doc

<h3>Anonymous</h3>

<h4>Astronautes </h4>
 <ul>
  <li>GET /api/astronautes  return a list of astronautes</li>
  <li>GET /api/astronautes{id}  return details of an astronaute</li>
  <li>POST /api/new/astronaute  Creates a new astronaute</li>
 </ul>
 
<h2> Test</h2>

<p>You can run test with command in your terminal ==> php bin/phpunit
