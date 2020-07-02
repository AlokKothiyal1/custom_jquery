function Main(selector){
  this.nodes =document.querySelectorAll(selector)
  this.length =this.nodes.length
}

Main.prototype.each=function(callback){
  for(var i=0;i<this.length;i++){
    callback.call(this,this.nodes[i],i)
  }
  return this
}
Main.prototype.toggler =function(){
  for(var i=0;i<this.length;i++){
    if(this.nodes[i].style.visibility!=='hidden'){
      this.nodes[i].style.visibility='hidden'
    }
    else{
      this.nodes[i].style.visibility='visible'
    }
  }
  return this
}

function $(selector){
  return new Main(selector);
}
export default $;