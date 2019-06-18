<?php

namespace Application\SomeBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use GuzzleHttp\Client;

abstract class Base extends Controller
{
    private $_message;
    private $_httpCode;

    /**
     * Retorna instancia de JsonResponse de Symfony
     *
     * @param array   $json Json
     * @param integer $code Http's error code
     *
     * @codeCoverageIgnore
     *
     * @return JsonResponse
     */
    public function getJsonResponse($json, $code = 200)
    {
        return new JsonResponse($json, $code);
    }

    /**
     * Return PHP's objet/array from string
     *
     * @param string  $json  Json
     * @param boolean $array Return object or array
     *
     * @codeCoverageIgnore
     *
     * @return mixed
     */
    public function formatJson($json, $array = false)
    {
        return \GuzzleHttp\json_decode($json, $array);
    }

    /**
     * Return Guzzle Object
     *
     * @codeCoverageIgnore
     *
     * @return Client
     */
    protected function getRestClient()
    {
        set_time_limit(0);

        return new Client();
    }

    /**
     * Set HttpCode + Message from Exception Object
     *
     * @param \Exception $e Exception object
     *
     * @return void
     */
    protected function errorReporting($e)
    {
        if (!$this->getHttpCode() && !$this->getMessage()) {
            switch (get_class($e)) {
            case "GuzzleHttp\\Exception\\ClientException":
            case "GuzzleHttp\\Exception\\ServerException":
                $this->setHttpCode($e->getResponse()->getStatusCode())
                    ->setMessage($e->getMessage());
                break;
            default:
                $this->setHttpCode($e->getCode())
                    ->setMessage($e->getMessage());
            }
        }
    }

    /**
     * Get code from Exception
     *
     * @return mixed
     */
    public function getHttpCode()
    {
        return $this->_httpCode;
    }

    /**
     * Get message from Exception
     *
     * @param integer $httpCode Http Code
     *
     * @return Base
     */
    public function setHttpCode($httpCode)
    {
        $this->_httpCode = $httpCode;

        return $this;
    }

    /**
     * Get message from Exception
     *
     * @return string
     */
    public function getMessage()
    {
        return $this->_message;
    }

    /**
     * Set messege from Exception
     *
     * @param mixed $message Message
     *
     * @return Base
     */
    public function setMessage($message)
    {
        $this->_message = $message;

        return $this;
    }
}