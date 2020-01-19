<?php


namespace App\Tests;


use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{

    public function testShowHomepage()
    {
        $client = static::createClient();
        $client->request('GET', '/');
        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }

    public function testApiGetAstronautes()
    {
        $client = static::createClient();
        $client->request('GET', '/api/astronautes',[],[],[
            'HTTP_ACCEPT' => 'application/json'
        ]);
        $response = $client->getResponse();
        $content = $response->getContent();
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertJson($content);
    }

    public function testApiGetAstronautesById()
    {
        $id = 1;
        $client = static::createClient();
        $client->request('GET', '/api/astronautes/'.$id,[],[],[
            'HTTP_ACCEPT' => 'application/json'
        ]);
        $response = $client->getResponse();
        $content = $response->getContent();
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertJson($content);
    }

    public function testApiPostAstronaute()
    {
        $client = static::createClient();
        $client->request('POST', '/api/new/astronaute', [], [],
            [
                'CONTENT_TYPE' => 'application/json',
                'Accept' =>'application/json'
            ],
        '{"name" : "eee", "age" : "22", "description" : "Est souvent avec son ami Woody"}'
        );

        $response = $client->getResponse();
        $content = $response->getContent();
        $this->assertEquals(201, $response->getStatusCode());
        $this->assertJson($content);
    }

}