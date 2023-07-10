<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function home()
    {
        $data = [];

        for ($i = 1; $i <= 9; $i++) {
            $product = Product::with('galleries')->find($i);

            if ($product) {
                $data["data{$i}"] = $product->toArray();
            }
        }

        return Inertia::render('Homepage', ['data' => $data]);
    }
}
