export const fechtGitHupbUser= async ()=>{
     const URL="https://api.github.com/users"
    try {
        const response= await fetch(URL);
        const data=await response.json();
        return data;
    } catch (error) {
        console.error("ERROR EN EL FET DE GITHUP USER")
    }
}
