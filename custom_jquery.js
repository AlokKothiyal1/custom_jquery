function JQuery(selector){
    this.nodes = document.querySelectorAll(selector);
    this.length = this.nodes.length;
}

jQuery.prototype.each = function(){
  // add code
}

jQuery.prototype.show = function(){
  // add code
}

jQuery.prototype.hide = function(){
  // add code
}

function $(selector){
    return new jQuery(selector)
}
 
export default $