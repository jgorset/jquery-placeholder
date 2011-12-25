/*
 * jQuery Placeholder Plugin
 * Examples and documentation at: http://github.com/jgorset/jquery-placeholder
 * Copyright (c) 2011 Johannes Gorset
 * Version: 1.0
 * License: MIT
 * Requires: jQuery v1.4 or later
 */

(function( $ ){

    $.fn.placeholder = function(restoreOverride, removeOverride){

        return $(this).each(function(){

            var $this = $(this)

            var original_color = $this.css('color')

            function remove(){
                $this.css('color', original_color)
                $this.val('')
            }

            function restore(){
                $this.css('color', '#999')
                $this.val($this.attr('placeholder'))
            }

            $this.parent('form').bind('submit', function(e){
                if($this.val() == $this.attr('placeholder')) remove()
            })

            $this.bind('focus', function(){
                if(!$this.val() || $this.val() == $this.attr('placeholder')){
                    removeOverride ? removeOverride() : remove()
                }
            })

            $this.bind('blur', function(){
                if(!$this.val()){
                    restoreOverride ? restoreOverride() : restore()
                }
            })

            if(!$this.val() || $this.val() == $this.attr('placeholder')){
                restoreOverride ? restoreOverride() : restore()
            }

        })

    }

})( jQuery )
