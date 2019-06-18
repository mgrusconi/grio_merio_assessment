<?php

namespace Tests\SomeBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{
    public function testGetResource()
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/app/github/symfony/repos');
        
        $response = $client->getResponse();
        $responseData = json_decode($response->getContent());

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $this->assertContains('https://avatars3.githubusercontent.com/u/143937?v=4', $responseData[0]->avatar);
    }

    public function testEndpointNotImplementation()
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/app/github/symfony/events');
        
        $response = $client->getResponse();
        $responseData = json_decode($response->getContent());

        $this->assertEquals(501, $client->getResponse()->getStatusCode());
        $this->assertContains('To Do Implementation', $responseData->message);
    }
}
