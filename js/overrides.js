/*
Overrides default parent() functionality of jquery if a number of parents is specified, if not it returns only first level parent.
Can be used totally like the normal jquery parent function but can also be used like so:
parent(2) is equivalent of calling $(".element").parent().parent().
 */
jQuery.fn.parent = function(depth) {
    var _context = this.get(0).parentElement;
    if(typeof depth === "undefined" || depth == 0){
        return $(_context);
    }else{
        var counter = 1;
        while(counter < depth){
            _context = _context.parentElement;
            counter++;
        }
        return $(_context);
    }
};

/*
Overrides default children() functionality of jquery if a depth number is specified, if not returns all children just as the normal jquery children function would.
Can be used totally like the normal jquery children function but can also be used like so:
children(2) will get the 2 first children of specified parent.
 */
jQuery.fn.children = function(depth) {
    var _context = this.get(0).children;
    if(typeof depth === "undefined" || depth == 0){
        return $(_context);
    }else{
        return $(_context).slice(0,depth);
    }
};