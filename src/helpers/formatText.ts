export function formatter(txt:string, char:string) {
    let control = 0
    let key = 1
    let obj:any = {}
    for (let i = 0; i < txt.length; i++) {
        if(txt[i] == char) {
            let slice = txt.slice(control, i)
            obj[key] = slice
            control = i+1
            key++
        }else{
            
/*             let slice = txt.slice(control, i)
            obj[key] = slice */
            
        }
    }
    
    return obj
}