<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    //
    public function welcome(){
        return view('home.welcome');
    }
    public function index(){
        return view('home.index');
    }
    public function HCJ(){
        return view('home.HCJ');
    }
}
