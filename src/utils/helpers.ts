export function getFromLocalStorage(key:string) {
  try{
    const item = localStorage.getItem(key)
    if(item){
      return JSON.parse(item)
    }
  }catch(e){
    console.error(e)
    return null
  }   
}

export function isoDateFormatter(date:Date){
  return date.toISOString().split('T')[0]
}