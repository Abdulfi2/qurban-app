<?php

namespace App\Models;

use App\Models\Gallery;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'title', 'slug', 'about', 'berat', 'harga', 'diskon', 'sold_out'
    ];

    protected $hidden = [];

    public function galleries()
    {
        return $this->hasMany(Gallery::class, 'product_id', 'id');
    }

    // public function addTransaksis()
    // {
    //     return $this->hasMany(Addtransaksi::class, 'product_id', 'id');
    // }
}
