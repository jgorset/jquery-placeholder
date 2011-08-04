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

            restoreOverride ? restoreOverride() : restore()
            
        })
    
    }
    
})( jQuery )