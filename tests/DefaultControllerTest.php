<?php


namespace App\Tests;


use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{

    public function testGetApiAstronautes()
    {
        $client = static::createClient([],[
            'HTTP_HOST' => 'localhost:81',
        ]);
        $client->request('GET', '/api/astronautes',[],[],[
            'HTTP_ACCEPT' => 'application/json'
        ]);
        $response = $client->getResponse();
        $content = $response->getContent();
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertJson($content);
    }

    public function testApiPostAstronaute()
    {

        $client = static::createClient([],[
            'HTTP_HOST' => 'localhost:81'
        ]);
        $client->request('POST', '/api/new/astronaute', [], [],
            [
                'Content-Type' => 'application/json',
                'Accept' =>'application/json'
            ],
        '{name: "eee",age: "22",description: "sssss"}'
        );

        $response = $client->getResponse();
        $content = $response->getContent();
        $this->assertEquals(201, $response->getStatusCode());
        $this->assertJson($content);
    }

    public function testApiPostAstronauteWithEmptyData()
    {
        $client = static::createClient([],[
            'HTTP_HOST' => 'localhost:81'
        ]);
        $client->request('POST', '/api/new/astronaute', [], [],
            [
                'HTTP_ACCEPT' => 'application/json',
                'CONTENT_TYPE' => 'application/json',
                'HTTP_X-AUTH-TOKEN' => 'aaa',
            ],
            '{"name":"","age":"","description":""}'
        );
        $response = $client->getResponse();
        $content = $response->getContent();
        $this->assertEquals(400, $response->getStatusCode());
        $this->assertJson($content);
    }
}