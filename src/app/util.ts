export function tr(msg:string, ale=false, conso=true)
{
    if (ale)
      alert(msg);

    if (conso)  
      console.log(msg) 
}