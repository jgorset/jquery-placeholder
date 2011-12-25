# jQuery Placeholder

## About

Placeholder emulates HTML5's new `placeholder` attribute for browsers that don't support it yet.

## Usage

    <!DOCTYPE html>
    
    <html>
        <head>
        
            <script type="text/javascript" src="jquery.placeholder.js"></script>
            <script type="text/javascript">
            
                $(document).ready(function(){
                    $('input[placeholder]').placeholder()  
                })
                
            </script>
            
        </head>
        <body>
        
            <form method="POST">
                <input type="input" name="name" placeholder="Your name" />
                <input type="submit" value="Submit" />
            </form>
            
        </body>
    </html>

## Requirements

jQuery 1.4.x
        
