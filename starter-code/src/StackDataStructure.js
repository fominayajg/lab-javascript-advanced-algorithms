function StackDataStructure () {
        this.stackControl = []
        this.MAX_SIZE = 10

    this.isEmpty=function(){
        if(this.stackControl.length==0)
            return true
        else
            return false
    }
    this.canPush=function(){
        if (this.stackControl.length < this.MAX_SIZE)
            return true
        else
            return false
    }
    this.push=function(num){
        if(this.canPush()){
            this.stackControl.push(num)
            return this.stackControl
        }else{
            return "Stack Overflow"
        }
    }
    this.pop=function(num){

            if(this.isEmpty()){
                return "Stack Underflow"
            }
            else{
                return this.stackControl.pop(num)
                
            }
                

        
    }
}
