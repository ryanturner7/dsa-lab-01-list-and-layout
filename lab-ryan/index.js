'use strict';

const List = function() {
  this.length = 0;
};


module.exports = exports = List;

List.prototype.push = function(value){
  this[this.length] = value;
  this.length++;
};
List.prototype.pop = function() {
  let result = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return result;
};
List.prototype.map = function(callback){
  let result = new List();
  for(var i = 0; i < this.length; i++){
    result.push(callback(this[i]));
  }
  return result;
};
List.prototype.filter = function(callback){
  let result = new List();
  for(var i = 0; i < this.length; i++){
    result.push(callback(this[i]));
  }
  return result;
};

List.prototype.reduce = function(){
  let i, result;
  if(initial){
    result = initial;
    i = 0;
  } else{
    result = this[0];
    i = 1;
  }
  for(i; i < this.length; i++){
    result = callback(result, this[i], i);
  }
  return result;
};

List.prototype.slice = function(begin, end){

  let result = new List(), i, finish;
  i;
  if(begin){
    i = begin;
  } else {
    i = 0;
  }
  if(end){
    finish = end;
  } else {
    
    finish = this.length;
  }
  for(i; i < finish; i++){
    result.push(this[i]);
  }
  return result;
};
