((win)=>{
  class moduleC{
    constructor(){
      this.modules = {};
      win.require=(name)=>{
        if(this.modules[name])return this.modules[name];
      }
    }
    set export(val){
      if(val.name){this.modules[val.name]=val;return;};
      if(val.moduleName){this.modules[val.moduleName]=val.module;return;}
      return null;
    }
  }
  win.module= new moduleC;
})(window)
