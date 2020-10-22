<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function returnsTag () {

        $title = "Princess Mononoke";
        $description = "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.";
        $release_date = "1997";
        $link = "https://www.youtube.com/embed/4OiMOHRDs14";

        $movie = [
            "title" => $title,
            "description" => $description,
            "release_date" => $release_date,
            "link" => $link
        ];
        return response()->json($movie, 200);
    }
}

