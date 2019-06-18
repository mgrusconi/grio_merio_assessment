<?php

namespace Application\SomeBundle\Controller;

use Swagger\Annotations as SWG;



class DefaultController extends Base
{

    /**
     * @SWG\Get(
     *   summary="Method that allows to obtain resources from github",
     *   operationId="getAction",
     *   consumes={"application/json"},
     *   produces={"application/json", "application/xml"},
     *   @SWG\Response(
     *     response=200,
     *     description=""
     *   )
     * )
     */

    public function getgithubresourcesAction($profile, $type)
    {
        $client = $this->getRestClient();
        $res = $client->request(
            'GET', 
            $this->container->getParameter('github') . '/' . $profile . '/' . $type, 
            [
                'headers' => [
                    'User-Agent' => $profile
                ]
            ]
        );
        if ($res->getStatusCode() === 200) {
            $rs = $this->_processData($this->formatJson($res->getBody()->getContents()), $type);
            $code = $rs['code'];
         } else {
            $rs = [ 'message' => $res->getBody()->getContents() ];
            $code = $rs->getStatusCode();
        }
        return $this->getJsonResponse($rs['body'], $code);
    }

    private function _processData($data, $type) {
        switch ($type) {
            case 'repos':
                return [
                    'code' => 200,
                    'body' => $this->_processRepos($data)
                ];
                break;

            case 'events':
            case 'hooks':
            case 'issues':
            case 'members':
                return [
                    'code' => 501,
                    'body' => ['message' => 'To Do Implementation']
                ];
                break;

            default:
                return [
                    'code' => 404,
                    'body' => ['message' => 'Unknown method']
                ];
                break;
        }
    }

    private function _processRepos($data) {
        $repos = [];
        
        foreach($data as $repo) {
            $repos[] = [
                'avatar' => $repo->owner->avatar_url,
                'owner' => $repo->owner->login,
                'full_name' => $repo->full_name,
                'forks' => $repo->forks_count,
                'open_issues' => $repo->open_issues_count,
                'stargazers' => $repo->stargazers_count
            ];
        }
        return $repos;
    }
}
