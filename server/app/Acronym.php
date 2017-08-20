<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Acronym extends Model
{
 	protected $fillable = ['acronym', 'description', 'popularity'];
}
?>
