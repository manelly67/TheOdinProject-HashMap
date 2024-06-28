// Creation of a data structure Linked List and its functions to manipulate it

class Node {   
    constructor(value=null,next=null) {
        // Node class containing a value property and a link to the nextNode, set both as null by default
        this.value = value;
        this.next = next;
      }
}

class LinkedList {
      // class which will represent the full list

    constructor() {
        this.head = null;
      }
 
      addFirst(value){
        // adds a new node containing value to the start of the list
        if(this.head===null){
        this.head = new Node(value, this.head);
        }else{
        let next = this.head;
        this.head = new Node(value, next);
        }
      }

      addLast(value){
        // adds a new node containing value to the end of the list
        if(this.head===null){
            this.addFirst(value);  
        }else{
            let tmp = this.head;
            while(tmp.next != null){
                tmp = tmp.next;
            } 
        tmp.next = new Node(value, null);
        }
      }
    
      size(){
        // traversing all the list counting
        // returns the total number of nodes in the list
        let sizeList = 0;
        let tmp = this.head;
        while(tmp != null){
            tmp = tmp.next;
            sizeList += 1;    
        } 
        return sizeList;
      }

      headNode(){
        // returns the first node in the list
        return this.head;
      }

      tailNode(){
        // returns the last node in the list
        let tmp =this.head;
        if (this.head!==null){ 
            while(tmp.next != null){
            tmp = tmp.next;
            } 
        }
        return tmp;
      }

      at(index){
        // returns the node at the given index
        switch ( index > 0 && index <= this.size() ) {
            case true:
                let tmp = this.head;
                    for(let i=2; i<= index; ++i){
                    tmp = tmp.next;   
                    } 
                return tmp;
              break;
            default:
                console.log('Index out of range'); 
                return null;      
        }
      }

      pop(){
        //removes the last element from the list
        let lastElement = this.tailNode();
          switch ( lastElement === null ) {
              case true:
                //the linked list is empty
                 this.head = null;
              break;
                  default:
                    let tmp =this.head;
                    switch(tmp.next===null){
                      case true:
                      //remove the only one element
                      this.head = null;
                      break;
                      case false:
                      if (this.head!==null){ 
                      while(tmp.next !== lastElement){
                      tmp = tmp.next;
                        } 
                      }
                    tmp.next = null; 
                  } 
              }
          }

      contains(key){
        //returns true if the passed in value is in the list and otherwise returns false
        let tmp = this.head;
        switch ( tmp.value === key ) {
            case true:
                return true;
              break;
            case false:
                for(let i=1; i <= this.size()-1; ++i){
                    tmp = tmp.next;
                    switch ( tmp.value === key ) {
                        case true:
                            return true;
                          break;
                        default: 
                            return false;      
                    }
                }
            default:
                return false;      
        }      
      }

      find(key) {
            //returns the index of the node containing value, or null if not found
            for(let i=1; i <= this.size(); ++i){
                if(this.at(i).value===key){
                    return i;
                };
            }
        return null;
        } 

      findKeyInsideArray(key) {
        //this function is when the VALUE is an ARRAY 
        //returns the index of the node containing value, or null if not found  
          for(let i=1; i <= this.size(); ++i){
              if(this.at(i).value[0]===key){
                  return i;
              };
          }
      return null;
      } 

      toString(){
            //represents your LinkedList objects as strings.
            //The format should be: ( value ) -> ( value ) -> ( value ) -> null
            let stringTmp = '';
            let tmp = this.head;
            while(tmp != null){
                stringTmp = `${stringTmp}(${tmp.value}) -> `;
                tmp = tmp.next;  
            } 
            let stringToPrint= `${stringTmp}null`;
            console.log(stringToPrint);
            return stringToPrint;
        }

      insertAt(value, index){
            //that inserts a new node with the provided value at the given index.
            switch ( this.at(index)===null ) {
            case true:  
            return null;
            break;
            default:    
                switch ( index===1 ) {
                case true: 
                this.addFirst(value);
                break;
                default: 
                    let curr=this.at(index);
                    let prev=this.at(index-1);
                    let tmp = new Node(value, curr);
                    prev.next = tmp;
              }
            } 
            this.toString();   
         }

         removeAt(index){
                //removes the node at the given index
                switch ( this.at(index)===null ) {
                    case true:  
                    return null;
                    break;
                    default:    
                        switch ( index===1 && index!==this.size() ) {
                        case true: 
                        this.head = this.at(2);
                        break;
                        default:
                            switch ( index===this.size() ) {
                            case true: 
                            this.pop();
                            break;
                            default: 
                            let curr=this.at(index);
                            let prev=this.at(index-1);
                            prev.next = curr.next;
                        }
                      }
                    }      
         }
            

}

export {LinkedList};
