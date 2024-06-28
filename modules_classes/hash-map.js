import { Error} from './error-class.js';
import { LinkedList} from './linked-list.js';

class HashMap {  

    constructor(key=null,value=null) {
        // initial default null
        this.key = key;
        this.value = value;
        this.buckets = [];
            // initial size of the table is 16 buckets
        for (let i = 0; i < 16; i++) {
            this.buckets[i] = null;
          }
        this.loadFactor = 0.75;
      }

      hash(key) {
        let hashCode = 0;  
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
          hashCode =  hashCode % this.buckets.length;
        }
        console.log(hashCode);
        return hashCode;
      } 

      set(key, value){
        let index = this.hash(key); 
        if (index < 0 || index >= this.buckets.length) {
            console.log(new Error("Trying to access index out of bound"));
        }else{
            switch (this.buckets[index]===null) {
                case true:
                     // If the index is empty means null - we assign the key and the value to the head in the new LinkedList
                     this.buckets[index]= new LinkedList();
                     this.buckets[index].addFirst([key,value]);
                  break;
                default:
                    // traverse the linkedList reading the key
                    let key_index = this.buckets[index].findKeyInsideArray(key);
                    switch(key_index===null){
                        case true:
                            // if it is a collision add the new pair of key-value at the end
                            this.buckets[index].addLast([key,value]);
                            break;
                        case false:
                            // if the key already exists - update with the new value
                            let tmp = this.buckets[index].at(key_index);
                            tmp.value[1]=value;
                            break;
                    }       
                }
            if (this.checkLoadFactor()) {
            console.log('crear funcion para ampliar buckets',this.checkLoadFactor());
            this.buckets= this.growthBuckets();
            };
        return this.buckets;
        }
    }

    atHashMap(key){  
        //takes a key and returns the place (bucket-linkedlist)that is assigned to this key.
        // If a key is not found, return null.
        for (let i=0; i<this.buckets.length; ++i){
            switch (this.buckets[i]!==null) {
                case true:
                    let key_index = this.buckets[i].findKeyInsideArray(key);
                    switch(key_index!==null){
                        case true:
                        return [i,key_index];
                    } 
                break;
            } 
        }
        let value = null;
        return value;
    }


    get(key){  
        //takes one argument as a key and returns the value that is assigned to this key.
        // If a key is not found, return null.
        for (let i=0; i<this.buckets.length; ++i){
            switch (this.buckets[i]!==null) {
                case true:
                    let key_index = this.buckets[i].findKeyInsideArray(key);
                    switch(key_index!==null){
                        case true:
                            let tmp = this.buckets[i].at(key_index);
                            return tmp.value[1];
                    } 
                break;
            } 
        }
        let value = null;
        return value;
    }

    has(key){
        //takes a key as an argument and returns true or false based 
        //on whether or not the key is in the hash map
    let has_key = undefined;
        switch(this.get(key)!==null){
            case true:
                has_key = true;
                return has_key;
            case false:
                has_key = false;
                return has_key;
        } 
    }

    remove(key){
            // If the given key is in the hash map, it should remove the entry with that key and return true.
            // If the key is not in the hash map, it should return false.
        let remove_key = this.has(key);
        switch(remove_key){
            case true:
                let index_bucket = this.atHashMap(key)[0];
                let index_linkedlist = this.atHashMap(key)[1];
                let tmp = this.buckets[index_bucket];
                tmp.removeAt(index_linkedlist);
            return remove_key;   
            case false:
            return remove_key;
        }
    }

    clear(){
        // removes all entries in the hash map.
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = null;
          }
        return this.buckets;
    }

    keys(){
        // returns an array containing all the keys inside the hash map.
        let keys_array = [];
        for (let i=0; i<this.buckets.length; ++i){
            switch(this.buckets[i]!==null){
                case true:
                    let size = this.buckets[i].size();
                    for(let j=1; j<=size; ++j){
                        let tmp = this.buckets[i].at(j);
                        let key = tmp.value[0];
                        keys_array.push(key);
                    }
                break;
            }
        }
        return keys_array;
    }

    values(){
        // returns an array containing all the values inside the hash map.
        let keysArray=this.keys();
        let valuesArray = keysArray.map((x) => this.get(x));
        return valuesArray;
    }

    entries(){
        //returns an array that contains each key-value pair.
        let keysArray=this.keys();
        let entries = keysArray.map((x) => [x,this.get(x)]);
        return entries;
    }

    length(){
        // returns the number of stored keys in the hash map.
        return this.entries().length;
    }

    checkLoadFactor(){
        // check the entries with the capacity and the load factor.
        return this.length() > this.buckets.length * this.loadFactor;
     }

     growthBuckets(){
          // To grow our buckets, we create a new buckets list 
          // that is the double size of the old buckets list, 
          // then we redistributed spread much evenly the entries in the new buckets list.
        let bucketsGrowth = [];
        for (let i = 0; i < (this.buckets.length * 2); i++) {
            bucketsGrowth.push(null);
          }
        let entries = this.entries();
        this.buckets = bucketsGrowth;
        entries.map(([key,value])=>this.set(key,value));
        console.log(this.buckets);
        return this.buckets;
     }
   

}



export {HashMap};