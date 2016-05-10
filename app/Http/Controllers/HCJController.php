<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class HCJController extends Controller
{
    //
    public function game_2048(){
        return view('HCJ.game.2048.index');
    }

    public function tool_clock(){
        return view('HCJ.tool.clock.index');
    }
}
