<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Industry extends Model
{
 	protected $fillable = ['name'];

	public function acronyms()
	{
		return $this->belongsToMany('App\Acronym')->orderBy('created_at','DESC')->withTimestamps();
	}
}
?>
