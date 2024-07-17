class HashMap {
    constructor() {
      this.map = {};
    }
    put(key, value) {
      this.map[key] = value;
    }
    get(key) {
      return this.map.hasOwnProperty(key) ? this.map[key] : undefined;
    }
    remove(key) {
      if (this.map.hasOwnProperty(key)) {
        delete this.map[key];
      }
    }
  }
  
  let myHashMap = new HashMap();
  myHashMap.put('name', 'John');
  console.log(myHashMap.get('name')); 
  myHashMap.remove('name');
  console.log(myHashMap.get('name')); 