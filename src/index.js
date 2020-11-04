let arr = [new Promise(()=>{}),new Promise(()=>{})]
arr.map(item=>console.log(item))


arr.forEach((item)=>{
    indOf(item)
})

function indOf(arr){
    let a = []
    arr.forEach((item,index)=>{
        if(item==null || item===""){
            a.push(index)
        }else{
            if(arr.length>=2){
                arr.splice(arr[0],arr.length-1)
            }else{
                a = []
            }
        }
    })
    
}