<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Input extends Component
{
    public $label;
    public $nome;
    public $type;
    public $value;
    public $placeholder;
    public $id;
    public $class;
    public $divclass;
  
    
    public function __construct($divclass,$label, $nome, $type, $value, $placeholder,$id,$class)
    {  
        $this->divclass = $divclass;
        $this->label = $label;
        $this->nome = $nome;
        $this->type = $type;
        $this->value = $value;
        $this->placeholder = $placeholder;
        $this->id = $id;
        $this->class = $class;
    }
     
    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.input');
    }
}
