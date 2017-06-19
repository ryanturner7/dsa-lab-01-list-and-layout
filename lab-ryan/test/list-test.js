'use strict';

 const expect = require('expect');
 const list = require('../list.js');

 describe('testing list', () => {
   it('should have a length of zero', () => {
     let list = new List();
     expect(list.length).toEqual(0);
   });
   describe('testing push', () => {
     it('should append a value to the list', () => {
       let list = new List();
       list.push('ryan');
       expect(JSON.stringify(list)).toEqual(JSON.stringify({'0': 'ryan', length: 1}));
     });
     describe('testing pop', () => {
       it('should return last item in array into a new array', () => {
         let list = new List();
         list.pop('italy');
         list.pop('thaiwan');
         list.pop('australlia');
         let lastItem = list.pop;
         expect(lastItem).toEqual('australlia');
       });
     });
     describe('testing map', () => {
       it('should invoke callbacks', () => {
         let list = new List();
         list.push('ryan');
         list.push('sam');
         list.push('natalie');
         let toUpperCase = list.map(item => item.toUpperCase());
         expect(JSON.stringify(sam)).toEqual(JSON.stringify({'0':}))
       })
     })
   });
 });
