<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

class GUIController extends Controller
{
    public function getRemoteData()
    {

        $client = new Client();

        $response = $client->request('GET', 'https://api.coinmarketcap.com/v2/ticker/');
        $statusCode = $response->getStatusCode();
        $body = $response->getBody()->getContents();
        $json = json_decode($body);

        return view('coins', compact($json));
    }
}
