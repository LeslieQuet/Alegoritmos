class Node {
  // Your code here:
  constructor(value){
    this.value= value;
    this.min= Infinity;
    this.next= null;
  }
}

class MinStack {
  // Your code here:
  constructor(){
      this.top= null;
      this.push= (value)=>{
        const prevTop = this.top;
        this.top = new Node(value);
        this.top.next = prevTop;

        if(!prevTop) this.top.min = value;
        else if(value < prevTop.min) this.top.min = value;
        else this.top.min = prevTop.min;
      }
      this.pop= ()=>{
        let popped = this.top.value;
        this.top = this.top.next;
        return popped;
      }
      this.peek= ()=>{
        return this.top.value;
      }
      this.min= ()=>{
        return this.top.min;
      }
    }
}

//Solución fuerza bruta
// class Node {
//   // Your code here:
//   constructor(value){
//     this.value= value;
//     this.next= null;
//   }
// }

// class MinStack {
//   // Your code here:
//   constructor(){
//       this.top= null;
//       this.push= (value)=>{
//         const prevTop = this.top;
//         this.top = new Node(value);
//         this.top.next = prevTop;
//       }
//       this.pop= ()=>{
//         let popped = this.top.value;
//         this.top = this.top.next;
//         return popped;
//       }
//       this.peek= ()=>{
//         return this.top.value;
//       }
//       this.min= ()=>{
//         let min = Infinity;
//         let current = this.top;

//         while(current){
//           if(current.value < min) min = current.value;
//           current = current.next;
//         }
//         return min;
//       }
//     }
// }

module.exports = {
  Node,
  MinStack
}
