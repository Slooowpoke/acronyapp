<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Acronym extends Model
{
 	protected $fillable = ['acronym','meaning', 'description', 'popularity'];

	public function industries()
    {
        return $this->belongsToMany('App\Industry')->orderBy('created_at','DESC')->withTimestamps();
    }

}
?>
